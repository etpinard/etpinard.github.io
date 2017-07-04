var fs = require('fs')
var path = require('path')
var browserify = require('browserify')
var UglifyJS = require('uglify-js')

var BUILD = path.join(__dirname, '..', 'build')
var SRC = path.join(__dirname, '..', 'src')

browserify(path.join(SRC, 'index.js'))
.bundle((err, buf) => {
  if (err) console.error(err)

  fs.writeFile(
    path.join(BUILD, 'bundle.js'),
    UglifyJS.minify(buf.toString()).code,
    (err) => { if (err) console.error(err) }
  )
})
