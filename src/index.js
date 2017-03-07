const yo = require('yo-yo')
const domCSS = require('dom-css')
const queryString = require('query-string')

const TEXT = require('./md')
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

const text = (part) => TEXT[lang()][part]

const inner = (part) => {
  const div = document.createElement('div')

  div.id = part
  div.innerHTML = text(part)

  return div
}

const style = function() {
  domCSS.apply(this, arguments)
  return arguments[0]
}

const intro = () => {
  return yo`${inner('intro')}`
}

const posts = () => {
  const date = (p) => (new Date(p.date)).getTime()
  const post = {}

  const tags = (p) => {
    const spans = p.tags
      .map(t => yo`<span class="pl2"><i>#${t}</i></span>`)
    
    return yo`<div>${spans}</div>`
  }

  post.block = (p) => {
    const name = `name-${lang()}`
    const prefix = `${DATA.rawgit}/${p.id}/raw/${p.commit}`
    const href = `${DATA.block}/${p.id}`

    const $name = yo`<p>${p[name]}</p>`

    const focus = () => {
      console.log('current')
      console.log($preview.innerHTML)
      console.log('next')
      console.log(preview1().innerHTML)

      // does not work after changing language !!!
      $preview = yo.update($preview, preview1())
    }

    const unfocus = () => {
      console.log('unfocus')
      $preview = yo.update($preview, preview0())
    }

    const $thumbnail = yo`<div class="hover" onmouseover=${focus}>
      <a href="${href}" target="_blank">
        <img src="${prefix}/thumbnail.png" height="120" width="230">
      </a>
    </div>`

    const preview0 = () => yo`<div></div>`

    const preview1 = () => yo`<div class="preview" onmouseout=${unfocus}>
      <a href="${href}" target="_blank">
        <img src="${prefix}/preview.gif" width="300" height="auto">
      </a>
    </div>`

    var $preview = preview0()
    console.log('init')
    console.log($preview)
    
    return yo`<div>
      ${$name}
      ${$thumbnail}
      ${$preview}
      ${tags(p)}
    </div>`
  }

  post.oss = (p) => {

    return yo`<div>
      ${p.name}
      ${tags(p)}
    </div>`
  }

  post.gist = (p) => {
  
    return yo`<div>
      ${p['description-en']}
      ${tags(p)}
    </div>`
  }

  const $items = DATA.posts
    .sort((a, b) => date(b) - date(a))
    .map(p => post[p.type](p))

  return yo`<div>
    ${$items}
  </div>`
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

const toggle = () => {
  const $buttons = LANGS.map(l => {
    const onclick = () => {
      window.location.hash = queryString.stringify({lang: l})
      yo.update($body, body())
    }

    return yo`<div class="ba bw1 br1 grow" onclick=${onclick}>${l}</div>`
  })

  const $toggle = style(
    yo`<div>${$buttons}</div>`, {
      position: 'absolute',
      top: 30,
      right: 25
    }
  )

  return $toggle
}

const body = () => {
  const $sections = [intro, posts, cv, contact, toggle]
    .map(s => yo`${s()}`)

  return yo`<div class="bg">${$sections}</div`
}

const $body = body()

document.body.appendChild($body)

// window.onresize = () => {}
