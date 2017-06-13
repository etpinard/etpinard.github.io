const yo = require('yo-yo')
const domCSS = require('dom-css')
const queryString = require('query-string')
const octicons = require('octicons')

const DATA = require('./data.yml')
const LANGS = ['en', 'fr']

const lang = () => {
  const isValid = (s) => LANGS.indexOf(s) !== -1
  const queryLang = queryString.parse(window.location.hash).lang
  const navLang = (window.navigator.languages || [])[0]
  const navLang2 = navLang.substr(0, 2)

  if (isValid(queryLang)) return queryLang
  if (typeof navLang !== 'string') return LANGS[0]
  if (isValid(navLang2)) return navLang2
  return LANGS[0]
}

const email = () => {
  return yo`<span class="reverse">${DATA.email.split('').reverse().join('')}</span>`
}

const paragraph = (txt) => {
  var words = txt.split(/(\s|[.,!?])/)
  var hText = (w) => {
    if (w.charAt(0) !== '@') return w

    var key = w.substr(1)
    var val = DATA[key]

    if (val.substr(0, 8) === 'https://') {
      return yo `<a href="${val}">${key}</a>`
    } else if (key === 'email') {
      return email()
    } else {
      return val
    }
  }

  return yo`<p>${words.map(hText)}</p>`
}

const header = () => {
  const title = () => {
    const pads = ['pt1', 'pt2', '', 'pb1', 'pb2']
    const rand = () => Math.floor(pads.length * Math.random())

    const letters = 'etpinard'
      .split('')
      .map(l => yo`<span class="${pads[rand()]} hover-blue">${l}</span>`)

    return yo`<div class="flex pt3 pl3 f2 fw8">
      <span class="hover-dark-blue">@</span>
      ${letters}
    </div>`
  }

  const $title = title()

  const $buttons = LANGS.map(l => {
    const onclick = () => {
      window.location.hash = queryString.stringify({lang: l})
      yo.update($body, body())
    }

    return yo`<div
      class="f6 dib black bg-animate hover-bg-blue no-underline pv1 ph2 br1 mh0 ba b--dark-blue"
      onclick=${onclick}>${l}
    </div>`
  })

  setInterval(() => yo.update($title, title()), 2000)

  return yo`
    <nav class="flex justify-between bb b--white-10 pb3">
      ${$title}
      <div class="flex-grow pa3 flex items-center ttu">
        ${$buttons}
      </div>
  </nav>`
}

const intro = () => {
  var txt = DATA[`intro-${lang()}`]

  return yo`<div class="pb4">
    ${paragraph(txt)}
  </div>`
}

const posts = () => {
  const date = (p) => (new Date(p.date)).getTime()
  const cardClass = 'link black dim db pa2 br2 ba b--black-10 shadow-1'
  const post = {}

  const tags = (p) => {
    const spans = p.tags
      .map(t => yo`<span class="pl2 f6"><i>#${t}</i></span>`)
    return yo`<p class="pv2 h2">${spans}</p>`
  }

  const name = (n) => {
    return yo`<span class="db f5 pv3 fw6 h2">${n}</span>`
  }

  const icon = (k) => {
    const svgContainer = document.createElement('div')
    svgContainer.innerHTML = octicons[k].toSVG({ width: 150, class: 'center h4'})
    svgContainer.firstChild.style.display = 'block'
    svgContainer.style['padding-top'] = '45px'
    svgContainer.style['padding-bottom'] = '45px'
    return svgContainer
  }

  post.block = (p) => {
    const href = `${DATA.block}/${p.id}`
    const gif = `${DATA.rawgit}/${p.id}/raw/${p.commit}/preview.gif`
    const n = p[`name-${lang()}`]

    return yo`<div>
      <a href="${href}" target="_blank" class="${cardClass}">
        ${name(n)}
        <img src="${gif}" alt="${n}" class="center db mv2 h5" />
        ${tags(p)}
      </a>
    </div>`
  }

  post.oss = (p) => {
    const href = `${DATA.github}/${p.name}`
    const desc = p[`description-${lang()}`]

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
    const href = `${DATA.gist}/${p.id}`
    const n = p[`name-${lang()}`]

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

  const $items = DATA.posts
    .sort((a, b) => date(b) - date(a))
    .map(p => yo`<div class="fl w-100 w-third-ns pa2">${post[p.type](p)}</div>`)

  return yo`<div class="mw9 center ph3-ns">
    <div class="cf ph2-ns">${$items}</div>
  </div>`
}

const footer = () => {

}

const cv = () => {
  return yo`<div></div>`
}

const contact = () => {
  // this site is hosted on github page
  // see source code: ...

  // http://www.heropatterns.com/

  return yo`<div></div>`
}

const body = () => {
  return yo`<div>
    ${header()}
    <div class="hero">
      ${intro()}
      ${posts()}
    </div>
  ${contact()}
  </div>`
}

const $body = body()

document.body.appendChild($body)
