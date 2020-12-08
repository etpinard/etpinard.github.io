var fs = require('fs')
var path = require('path')
var yaml = require('js-yaml')
var request = require('request')
var parallel = require('run-parallel')
var Octokit = require('@octokit/core').Octokit
var trunc = require('../src/trunc')

var CVs = ['cv-en', 'cv-fr']
var BUILD = path.join(__dirname, '..', 'build')
var SRC = path.join(__dirname, '..', 'src')
var GITHUB_TOKEN = process.env.GITHUB_TOKEN || ''

var octokit = new Octokit({ auth: GITHUB_TOKEN })
var noop = () => {}

var DATA
try {
  DATA = yaml.safeLoad(
    fs.readFileSync(path.join(SRC, 'data.yml'), 'utf8')
  )
} catch (err) {
  console.error(err)
}

var download = (uri, filename, cb) => {
  request.head(uri, (err, res, body) => {
    if (err) console.error(err)

    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on('close', cb || noop)
  })
}

var getGistRoot = (p) => `${DATA.rawgist.val}/${p.id}/raw/${p.commit}/`

DATA.posts
  .filter((p) => p.type === 'gistview' || p.type === 'block')
  .forEach((p) => {
    var root = getGistRoot(p)
    download(
      `${root}/preview.gif`,
      path.join(BUILD, `preview-${p.id}.gif`)
    )
    download(
      `${root}/thumbnail.png`,
      path.join(BUILD, `thumbnail-${p.id}.png`)
    )
  })

CVs
  .forEach((n) => {
    var d = DATA[n]
    var root = `${DATA.rawgithub.val}/cv/${d.commit}/${d.folder}`

    download(`${root}/cv.png`, path.join(BUILD, `${n}.png`))
    download(`${root}/cv.pdf`, path.join(BUILD, `${n}.pdf`))
  })

DATA.posts
  .filter(p => p.type === 'gistview')
  .forEach(p => {
    octokit.request(`GET /gists/${p.id}`).then(resp => {
      if (!resp.data.files['index.html']) {
        console.error(`missing index.html for ${p.id} gistview`)
      }
      var root = getGistRoot(p)
      download(
        `${root}/index.html`,
        path.join(BUILD, `${trunc(p.id)}-${trunc(p.commit)}.html`)
      )
    })
  })

var DONOT_INCLUDE = ['index.html', 'thumbnail.png', 'preview.gif', 'package-lock.json']

DATA.posts
  .filter(p => p.type === 'gistview')
  .forEach(p => {
    octokit.request(`GET /gists/${p.id}`).then(resp => {
      var tasks = Object.keys(resp.data.files)
        .filter(filename => filename[0] !== ' ' && DONOT_INCLUDE.indexOf(filename) === -1)
        .map(filename => (cb) => {
          var root = getGistRoot(p)
          request(`${root}/${filename}`, (err, resp, body) => {
            cb(err, { filename: filename, body: body })
          })
        })
      parallel(tasks, (err, results) => {
        if (err) console.error(err)
        fs.writeFile(
          path.join(BUILD, `${trunc(p.id)}-${trunc(p.commit)}.json`),
          JSON.stringify(results),
          (err) => { if (err) console.error(err) }
        )
      })
    })
  })
