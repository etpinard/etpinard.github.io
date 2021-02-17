var yo = require('yo-yo')
var queryString = require('query-string')
var octicons = require('octicons')
var IS_MOBILE = require('is-mobile-device')
var trunc = require('./trunc')

var DATA = require('../build/data.json')
var LANGS = ['en', 'fr']

var DOM_PARSER
var parseFromString = (s) => {
  if (!DOM_PARSER) {
    DOM_PARSER = new window.DOMParser()
  }
  return DOM_PARSER.parseFromString(`<div>${s}</div>`, 'text/html').body
}

var appendFromString = (q, s) => {
  var el = document.querySelector(q)
  var body = parseFromString(s)
  el.appendChild(body.firstChild)
}

var isLangSupported = (s) => LANGS.indexOf(s) !== -1

var NAVLANG = (() => {
  var v = (window.navigator.languages || [])[0]

  if (typeof v === 'string') {
    var vv = v.substr(0, 2)
    if (isLangSupported(v)) return vv
  }
  return LANGS[0]
})()

var lang = () => {
  var queryLang = queryString.parse(window.location.hash).lang

  return isLangSupported(queryLang)
    ? queryLang
    : NAVLANG
}

var isCV = () => {
  return queryString.parse(window.location.hash).cv
}

var isGistview = () => {
  return queryString.parse(window.location.hash).gist
}

var paragraph = (txt) => {
  var lines = txt.split('\n\n')

  var line2dom = (l) => {
    var words = l.split(/(\s|[.,!?])/)
    return yo`<p>${words.map(word2dom)}</p>`
  }

  var word2dom = (w) => {
    if (w.charAt(0) !== '@') return w

    var key = w.substr(1)
    var spec = DATA[key]
    var val = spec.val
    var content = spec.content || key

    switch (spec.type) {
      case 'link':
        return yo`<a
          href="${val}"
          class="no-underline dark-blue hover-blue"
        >${content}</a>`
      case 'reverse-str':
        return yo`<span
          class="reverse"
        >${val.split('').reverse().join('')}</span>`
      case 'cv':
        var onclick = () => {
          window.location.hash = queryString.stringify({ lang: lang(), cv: true })
          window.scroll(0, 0)
        }
        return yo`<span
          class="dark-blue hover-blue"
          style="cursor:pointer;"
          onclick=${onclick}
        >CV</span>`
      case 'str':
        return val
    }
  }

  return yo`<p>${lines.map(line2dom)}</p>`
}

var header = () => {
  var title = () => {
    var _letters = 'etpinard'.split('')
    var pads = ['pb2', 'pb1', '', 'pt1', 'pt2']
    var rand = () => pads[Math.floor(pads.length * Math.random())]

    // make sure letters with start/end pads values are always rendered
    // to avoid the header to wiggle w/o having to hack in some css
    // I don't about
    var rands = _letters.map(rand)
    var extremes = [0, pads.length - 1]
    extremes.forEach(p => {
      if (rands.indexOf(pads[p]) === -1) {
        rands[p] = pads[p]
      }
    })

    var letters = _letters
      .map((l, i) => yo`<span class="${rands[i]} hover-blue">${l}</span>`)

    return yo`<div class="flex pt3 pl3 f1 fw9">
      <span class="hover-blue">@</span>
      ${letters}
    </div>`
  }

  var buttons = (extraClasses) => {
    var langs = [NAVLANG, LANGS.filter(l => l !== NAVLANG)[0]]

    return langs.map(l => {
      var onclick = () => {
        window.location.hash = queryString.stringify({ lang: l })
      }

      var commonClasses = 'f4 black bg-animate hover-bg-blue gno-underline pv1 ph2 br1 mh0 ba b--dark-blue'
      var activeClasses = l === lang() ? 'bg-light-gray' : ''

      return yo`<div
        class="${commonClasses} ${activeClasses} ${extraClasses}"
        onclick=${onclick}>${l}
      </div>`
    })
  }

  var $title = title()

  var $buttons = buttons('dib dn-ns')
  var $buttonsNS = buttons('dn dib-ns')

  setInterval(() => yo.update($title, title()), 2000)

  return yo`<div>
    <nav class="flex justify-between bb b--white-10 pb3">
      ${$title}
      <div class="flex-grow pa3 flex items-center ttu">
        ${$buttonsNS}
      </div>
    </nav>
      <div class="pa3 ttu">
        ${$buttons}
      </div>
  </div>`
}

var intro = () => {
  var txt = DATA[`intro-${lang()}`]

  return yo`<div class="lh-copy pv2 ph5-ns mw8-ns ph3">
    ${paragraph(txt)}
  </div>`
}

var posts = () => {
  var date = (p) => (new Date(p.date)).getTime()
  var cardClass = 'link black dim db pa2 br2 ba b--black-10 shadow-1'
  var post = {}

  var tags = (p) => {
    var spans = p.tags
      .map(t => yo`<span class="pl2 f6"><i>#${t}</i></span>`)
    return yo`<p class="pv2 h2">${spans}</p>`
  }

  var name = (n) => {
    return yo`<span class="db f5 pv3 fw9 h2">${n}</span>`
  }

  var icon = (k) => {
    var svgContainer = document.createElement('div')
    svgContainer.innerHTML = octicons[k].toSVG({ width: 150, class: 'center h4' })
    svgContainer.firstChild.style.display = 'block'
    svgContainer.style['padding-top'] = '36px'
    svgContainer.style['padding-bottom'] = '36px'
    return svgContainer
  }

  post.block = (p) => {
    var href = `${DATA.block.val}/${p.id}`
    var n = p[`name-${lang()}`]
    var imgSrc = IS_MOBILE
      ? `build/thumbnail-${p.id}.png`
      : `build/preview-${p.id}.gif`

    return yo`<div>
      <a href="${href}" class="${cardClass}">
        ${name(n)}
        <img src="${imgSrc}" alt="${n}" class="center db mv2 h5" />
        ${tags(p)}
      </a>
    </div>`
  }

  post.gistview = (p) => {
    var n = p[`name-${lang()}`]
    var imgSrc = IS_MOBILE
      ? `build/thumbnail-${p.id}.png`
      : `build/preview-${p.id}.gif`
    var onclick = () => {
      window.location.hash = queryString.stringify({ lang: lang(), gist: p.id })
      window.scroll(0, 0)
    }

    return yo`<div>
      <div onclick=${onclick} class="${cardClass}">
        ${name(n)}
        <img src="${imgSrc}" alt="${n}" class="center db mv2 h5" />
        ${tags(p)}
      </div>
    </div>`
  }

  post.oss = (p) => {
    var domain = DATA[p.host].val
    var href = `${domain}/${p.name}`
    var desc = p[`description-${lang()}`]
    var imgName = IS_MOBILE ? p.thumbnail : p.preview
    var $icon = imgName
      ? yo`<img src="assets/${imgName}" alt="${p.name}"
              height="184px" class="center db mv2" />`
      : icon('repo')

    return yo`<div>
      <a href="${href}" class="${cardClass}">
        ${name(p.name)}
        ${$icon}
        <div class="h4 pv2">
          <p class="f6" style="text-align: justify;">${desc}</p>
          ${tags(p)}
        </div>
      </a>
    </div>`
  }

  post.gist = (p) => {
    var href = `${DATA.gist.val}/${p.id}`
    var n = p[`name-${lang()}`]

    return yo`<div>
      <a href="${href}" class="${cardClass}">
        ${name(n)}
        ${icon('file-code')}
        <div class="h4 pt5 pb2">
          ${tags(p)}
        </div>
      </a>
    </div>`
  }

  var $items = DATA.posts
    .sort((a, b) => date(b) - date(a))
    .map(p => yo`<div class="fl w-100 w-third-l pa2">${post[p.type](p)}</div>`)

  return yo`<div class="mw9 center ph3-l">
    <div class="cf ph2-l">${$items}</div>
  </div>`
}

var footer = () => {
  var txt = DATA[`footer-${lang()}`]

  return yo`<div class="center f7 pv3 ph3">
    ${paragraph(txt)}
  </div>`
}

var main = () => {
  return yo`<div style="background-color: ${DATA.colors.bg};">
    ${header()}
    ${intro()}
    <div class="hero pa1">
      ${posts()}
    </div>
    ${footer()}
  </div>`
}

var goBackBtn = () => {
  var l = lang()
  var onclick = () => {
    window.location.hash = queryString.stringify({ lang: l })
    window.scroll(0, 0)
  }
  var content = {
    en: 'Go back to site',
    fr: 'Retour au site'
  }[l]

  return yo`<span
      class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
      style="cursor:pointer;"
      onclick=${onclick}
  >${content}</span>`
}

var cv = () => {
  var l = lang()
  var png = `build/cv-${l}.png`
  var pdf = `build/cv-${l}.pdf`

  var downloadBtn = () => {
    var content = {
      en: 'Download PDF',
      fr: 'Télécharger en PDF'
    }[l]

    return yo` <a
      href=${pdf}
      download="etpinard-cv.pdf"
      class="f6 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
    >${content}</a>`
  }

  return yo`<div>
    <div class="fixed flex tems-center justify-center pa4 w-100 bg-blue">
      ${goBackBtn()}
      ${downloadBtn()}
    </div>
    <div class="db">
      <img src=${png} alt="cv-${l}" class="center mt6" />
    </div class="db">
  </div>`
}

var gistview = (p, fileContent) => {
  var l = lang()
  var name = p[`name-${l}`]
  var block = fileContent.block
  var src = `./build/${trunc(p.id)}-${trunc(p.commit)}.html`
  var dateStr = (new Date(p.date)).toDateString()

  var $iframe = yo`
    <div style="height:${block.height}px; padding-top:40px;">
      <iframe
        src=${src}
        width="100%"
        height="100%"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        style="border: 1px solid #DEDEDE;"
      ></iframe>
    </div>`

  return yo`<div style="background-color: ${DATA.colors.bg};">
    <nav class="flex justify-between pa3">
      <h1>${name}></h1>
      <div class="flex-grow flex items-center ttu">
        <a href="${DATA.gist.val}/${p.id}">${trunc(p.id)}</a>
        <div class="pl3">${goBackBtn()}</div>
      </div>
    </nav>
    <div style="width:90%; margin:auto">
      ${$iframe}
      <div class="pv3 tr">
        <a href="${src}"><em>open in standalone page</em></a>
      </div>
      <div>
        <h2>README</h2>
        <div id="readme" class="pb4"></div>
      </div>
      <div id="files"></div>
      <div>
        <h2>License</h2>
        <div>${block.license}</div>
      </div>
      <div class="pv3 tr">
        <em>from commit ${trunc(p.commit)} -- created on ${dateStr}</em>
      </div>
    </div>
  </div>`
}

var render = () => {
  var IS_CV = isCV()
  var IS_GISTVIEW = isGistview()
  var hljsInterval

  if (IS_MOBILE) {
    var $viewPort = document.getElementById('viewport')
    if (IS_CV) {
      $viewPort.setAttribute('content', DATA.viewport.cv)
    } else {
      $viewPort.setAttribute('content', DATA.viewport.home)
    }
  }

  var $root = document.getElementById('root')

  if (IS_CV) {
    if (hljsInterval) clearInterval(hljsInterval)
    yo.update($root, yo`<div id="root">${cv()}</div>`)
  } else if (IS_GISTVIEW) {
    var gistid = queryString.parse(window.location.hash).gist
    var p = DATA.posts.filter(p => p.id === gistid)[0]
    var jsonurl = `./build/${trunc(p.id)}-${trunc(p.commit)}.json`
    window.fetch(jsonurl).then(resp => {
      if (!resp.ok) {
        console.error(`Problems while fetching ${jsonurl}`)
        return {}
      }
      return resp.json()
    }).then((fileContent) => {
      yo.update($root, yo`<div id="root">${gistview(p, fileContent)}</div>`)
      appendFromString('#readme', fileContent.readme)
      var $files = fileContent.files
        .map(f => `<h2>${f.filename}</h2><pre id="${f.filename}"><code>${f.body}</code></pre>`)
        .join('')
      appendFromString('#files', $files)
      hljsInterval = setInterval(() => {
        if (window.hljs) {
          fileContent.files.forEach(f => {
            window.hljs.highlightBlock(document.getElementById(f.filename))
          })
          clearInterval(hljsInterval)
        }
      }, 200)
    }).catch(err => {
      console.error(`Problems building ${p.id}`)
      console.error(err)
    })
  } else {
    if (hljsInterval) clearInterval(hljsInterval)
    yo.update($root, yo`<div id="root">${main()}</div>`)
  }
}

window.onhashchange = () => { render() }

render()
