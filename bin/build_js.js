var fs = require('fs')
var path = require('path')
var browserify = require('browserify')
var UglifyJS = require('uglify-js')
var yaml = require('js-yaml')

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

fs.writeFile(path.join(BUILD, 'data.json'), JSON.stringify(DATA), (err) => {
  if (err) return console.error(err)

  browserify(path.join(SRC, 'index.js'))
    .bundle((err, buf) => {
      if (err) return console.error(err)

      fs.writeFile(
        path.join(BUILD, 'bundle.js'),
        UglifyJS.minify(buf.toString()).code,
        (err) => { if (err) console.error(err) }
      )
    })
})
