var yo = require('yo-yo')
var queryString = require('query-string')
var octicons = require('octicons')

var DATA = require('./data.yml')
var LANGS = ['en', 'fr']

var lang = () => {
  var isValid = (s) => LANGS.indexOf(s) !== -1
  var queryLang = queryString.parse(window.location.hash).lang
  var navLang = (window.navigator.languages || [])[0]
  var navLang2 = navLang.substr(0, 2)

  if (isValid(queryLang)) return queryLang
  if (typeof navLang !== 'string') return LANGS[0]
  if (isValid(navLang2)) return navLang2
  return LANGS[0]
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
        return yo`<a href="${val}" target="_blank" class="no-underline dark-blue hover-blue">${content}</a>`
      case 'email':
        return yo`<span class="reverse">${DATA.email.val.split('').reverse().join('')}</span>`
      case 'str':
        return val
    }
  }

  return yo`<p>${lines.map(line2dom)}</p>`
}

var header = () => {
  var title = () => {
    var pads = ['pt1', 'pt2', '', 'pb1', 'pb2']
    var rand = () => Math.floor(pads.length * Math.random())

    var letters = 'etpinard'
      .split('')
      .map(l => yo`<span class="${pads[rand()]} hover-blue">${l}</span>`)

    return yo`<div class="flex pt3 pl3 f1 fw8">
      <span class="hover-blue">@</span>
      ${letters}
    </div>`
  }

  var buttons = (extraClasses) => {
    return LANGS.map(l => {
      var onclick = () => {
        window.location.hash = queryString.stringify({lang: l})
        yo.update($body, body())
      }

      return yo`<div
        class="f4 black bg-animate hover-bg-blue no-underline pv1 ph2 br1 mh0 ba b--dark-blue ${extraClasses}"
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

  return yo`<div class="lh-copy pv2 ph5-ns mw7-ns ph3">
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
    return yo`<span class="db f5 pv3 fw6 h2">${n}</span>`
  }

  var icon = (k) => {
    var svgContainer = document.createElement('div')
    svgContainer.innerHTML = octicons[k].toSVG({width: 150, class: 'center h4'})
    svgContainer.firstChild.style.display = 'block'
    svgContainer.style['padding-top'] = '45px'
    svgContainer.style['padding-bottom'] = '45px'
    return svgContainer
  }

  post.block = (p) => {
    var href = `${DATA.block.val}/${p.id}`
    var gif = `${DATA.rawgit.val}/${p.id}/raw/${p.commit}/preview.gif`
    var n = p[`name-${lang()}`]

    return yo`<div>
      <a href="${href}" target="_blank" class="${cardClass}">
        ${name(n)}
        <img src="${gif}" alt="${n}" class="center db mv2 h5" />
        ${tags(p)}
      </a>
    </div>`
  }

  post.oss = (p) => {
    var href = `${DATA.github.val}/${p.name}`
    var desc = p[`description-${lang()}`]

    return yo`<div>
      <a href="${href}" target="_blank" class="${cardClass}">
        ${name(p.name)}
        ${icon('repo')}
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
      <a href="${href}" target="_blank" class="${cardClass}">
        ${name(n)}
        ${icon('file-code')}
        <div class="h4 pv2">
          ${tags(p)}
        </div>
      </a>
    </div>`
  }

  var $items = DATA.posts
    .sort((a, b) => date(b) - date(a))
    .map(p => yo`<div class="fl w-100 w-third-ns pa2">${post[p.type](p)}</div>`)

  return yo`<div class="mw9 center ph3-ns">
    <div class="cf ph2-ns">${$items}</div>
  </div>`
}

var footer = () => {
  var txt = DATA[`footer-${lang()}`]

  return yo`<div class="center f7 pv3 ph3">
    ${paragraph(txt)}
  </div>`
}

var body = () => {
  return yo`<div style="background-color: #F8F8FF;">
    ${header()}
    ${intro()}
    <div class="hero pa1">
      ${posts()}
    </div>
  ${footer()}
  </div>`
}

var $body = body()

document.body.appendChild($body)