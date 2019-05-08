var fs = require('fs')
var path = require('path')
var yaml = require('js-yaml')
var request = require('request')
var noop = () => {}

var CVs = ['cv-en', 'cv-fr']
var BUILD = path.join(__dirname, '..', 'build')
var SRC = path.join(__dirname, '..', 'src')

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

DATA.posts
  .filter((p) => p.type === 'block')
  .forEach((p) => {
    var root = `${DATA.rawgist.val}/${p.id}/raw/${p.commit}/`

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
