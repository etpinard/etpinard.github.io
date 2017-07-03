var path = require('path')
var fs = require('fs-extra')
var CleanCSS = require('clean-css')

var BUILD = path.join(__dirname, '..', 'build')
var SRC = path.join(__dirname, '..', 'src')

// copy octicons css to build
fs.copy(
  path.join('node_modules', 'octicons', 'build', 'octicons.min.css'),
  path.join(BUILD, 'octicons.min.css'),
  (err) => { if (err) return console.error(err) }
)

// minify main.css into build
fs.readFile(path.join(SRC, 'main.css'), 'utf-8', (err, input) => {
  if (err) return console.error(err)

  var output = new CleanCSS({}).minify(input)

  fs.writeFile(
    path.join(BUILD, 'main.min.css'),
    output.styles,
    (err) => { if (err) return console.error(err) }
  )
})
