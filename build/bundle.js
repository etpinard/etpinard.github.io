!function e(n,t,r){function i(a,l){if(!t[a]){if(!n[a]){var s="function"==typeof require&&require;if(!l&&s)return s(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=t[a]={exports:{}};n[a][0].call(u.exports,function(e){var t=n[a][1][e];return i(t||e)},u,u.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n,t){function r(e,n,t){function o(e){if(Array.isArray(e))for(var n=0;n<e.length;n++){var t=e[n];if(Array.isArray(t))o(t);else{if(("number"==typeof t||"boolean"==typeof t||"function"==typeof t||t instanceof Date||t instanceof RegExp)&&(t=t.toString()),"string"==typeof t){if(f.lastChild&&"#text"===f.lastChild.nodeName){f.lastChild.nodeValue+=t;continue}t=i.createTextNode(t)}t&&t.nodeType&&f.appendChild(t)}}}var f;-1!==d.indexOf(e)&&(n.namespace=l);var p=!1;if(n.namespace&&(p=n.namespace,delete n.namespace),p)f=i.createElementNS(p,e);else{if(e===u)return i.createComment(n.comment);f=i.createElement(e)}if(n.onload||n.onunload){var h=n.onload||function(){},v=n.onunload||function(){};a(f,function(){h(f)},function(){v(f)},r.caller.caller.caller),delete n.onload,delete n.onunload}for(var m in n)if(n.hasOwnProperty(m)){var b=m.toLowerCase(),g=n[m];if("classname"===b&&(b="class",m="class"),"htmlFor"===m&&(m="for"),c[b])if("true"===g)g=b;else if("false"===g)continue;"on"===b.slice(0,2)?f[m]=g:p?"xlink:href"===m?f.setAttributeNS(s,m,g):/^xmlns($|:)/i.test(m)||f.setAttributeNS(null,m,g):f.setAttribute(m,g)}return o(t),f}var i=e("global/document"),o=e("hyperx"),a=e("on-load"),l="http://www.w3.org/2000/svg",s="http://www.w3.org/1999/xlink",c={autofocus:1,checked:1,defaultchecked:1,disabled:1,formnovalidate:1,indeterminate:1,readonly:1,required:1,selected:1,willvalidate:1},u="!--",d=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];n.exports=o(r,{comments:!0}),n.exports.default=n.exports,n.exports.createElement=r},{"global/document":3,hyperx:6,"on-load":14}],2:[function(e,n,t){},{}],3:[function(e,n,t){(function(t){var r,i=void 0!==t?t:"undefined"!=typeof window?window:{},o=e("min-document");"undefined"!=typeof document?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"])||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=o),n.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"min-document":2}],4:[function(e,n,t){(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],5:[function(e,n,t){n.exports=function(e){return function(n,t,i){for(var o in t)o in r&&(t[r[o]]=t[o],delete t[o]);return e(n,t,i)}};var r={class:"className",for:"htmlFor","http-equiv":"httpEquiv"}},{}],6:[function(e,n,t){function r(e){return e===h||e===v}function i(e){return y.test(e)}var o=e("hyperscript-attribute-to-property"),a=1,l=2,s=3,c=4,u=5,d=6,f=7,p=8,h=9,v=10,m=11,b=12,g=13;n.exports=function(e,n){function t(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"==typeof e?e:y("",e)}n||(n={});var y=n.concat||function(e,n){return String(e)+String(n)};return!1!==n.attrToProp&&(e=o(e)),function(o){function w(e){var t=[];k===f&&(k=c);for(var i=0;i<e.length;i++){var o=e.charAt(i);k===a&&"<"===o?(x.length&&t.push([a,x]),x="",k=l):">"!==o||r(k)||k===g?k===g&&/-$/.test(x)&&"-"===o?(n.comments&&t.push([p,x.substr(0,x.length-1)],[s]),x="",k=a):k===l&&/^!--$/.test(x)?(n.comments&&t.push([l,x],[u,"comment"],[m]),x=o,k=g):k===a||k===g?x+=o:k===l&&/\s/.test(o)?(t.push([l,x]),x="",k=c):k===l?x+=o:k===c&&/[^\s"'=/]/.test(o)?(k=u,x=o):k===c&&/\s/.test(o)?(x.length&&t.push([u,x]),t.push([b])):k===u&&/\s/.test(o)?(t.push([u,x]),x="",k=d):k===u&&"="===o?(t.push([u,x],[m]),x="",k=f):k===u?x+=o:k!==d&&k!==c||"="!==o?k!==d&&k!==c||/\s/.test(o)?k===f&&'"'===o?k=v:k===f&&"'"===o?k=h:k===v&&'"'===o?(t.push([p,x],[b]),x="",k=c):k===h&&"'"===o?(t.push([p,x],[b]),x="",k=c):k!==f||/\s/.test(o)?k===p&&/\s/.test(o)?(t.push([p,x],[b]),x="",k=c):k!==p&&k!==h&&k!==v||(x+=o):(k=p,i--):(t.push([b]),/[\w-]/.test(o)?(x+=o,k=u):k=c):(t.push([m]),k=f):(k===l?t.push([l,x]):k===u?t.push([u,x]):k===p&&x.length&&t.push([p,x]),t.push([s]),x="",k=a)}return k===a&&x.length?(t.push([a,x]),x=""):k===p&&x.length?(t.push([p,x]),x=""):k===v&&x.length?(t.push([p,x]),x=""):k===h&&x.length?(t.push([p,x]),x=""):k===u&&(t.push([u,x]),x=""),t}for(var k=a,x="",j=arguments.length,A=[],C=0;C<o.length;C++)if(C<j-1){var N=arguments[C+1],O=w(o[C]),T=k;T===v&&(T=p),T===h&&(T=p),T===f&&(T=p),T===c&&(T=u),O.push([0,T,N]),A.push.apply(A,O)}else A.push.apply(A,w(o[C]));for(var S=[null,{},[]],E=[[S,-1]],C=0;C<A.length;C++){var M=E[E.length-1][0],L=(O=A[C])[0];if(L===l&&/^\//.test(O[1])){I=E[E.length-1][1];E.length>1&&(E.pop(),E[E.length-1][0][2][I]=e(M[0],M[1],M[2].length?M[2]:void 0))}else if(L===l){var V=[O[1],{},[]];M[2].push(V),E.push([V,M[2].length-1])}else if(L===u||0===L&&O[1]===u){for(var P,F="";C<A.length;C++)if(A[C][0]===u)F=y(F,A[C][1]);else{if(0!==A[C][0]||A[C][1]!==u)break;if("object"!=typeof A[C][2]||F)F=y(F,A[C][2]);else for(P in A[C][2])A[C][2].hasOwnProperty(P)&&!M[1][P]&&(M[1][P]=A[C][2][P])}A[C][0]===m&&C++;for(var D=C;C<A.length;C++)if(A[C][0]===p||A[C][0]===u)M[1][F]?M[1][F]=y(M[1][F],A[C][1]):M[1][F]=t(A[C][1]);else{if(0!==A[C][0]||A[C][1]!==p&&A[C][1]!==u){!F.length||M[1][F]||C!==D||A[C][0]!==s&&A[C][0]!==b||(M[1][F]=F.toLowerCase());break}M[1][F]?M[1][F]=y(M[1][F],A[C][2]):M[1][F]=t(A[C][2])}}else if(L===u)M[1][O[1]]=!0;else if(0===L&&O[1]===u)M[1][O[2]]=!0;else if(L===s){if(i(M[0])&&E.length){var I=E[E.length-1][1];E.pop(),E[E.length-1][0][2][I]=e(M[0],M[1],M[2].length?M[2]:void 0)}}else if(0===L&&O[1]===a)void 0===O[2]||null===O[2]?O[2]="":O[2]||(O[2]=y("",O[2])),Array.isArray(O[2][0])?M[2].push.apply(M[2],O[2]):M[2].push(O[2]);else if(L===a)M[2].push(O[1]);else if(L!==m&&L!==b)throw new Error("unhandled: "+L)}if(S[2].length>1&&/^\s*$/.test(S[2][0])&&S[2].shift(),S[2].length>2||2===S[2].length&&/\S/.test(S[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(S[2][0])&&"string"==typeof S[2][0][0]&&Array.isArray(S[2][0][2])&&(S[2][0]=e(S[2][0][0],S[2][0][1],S[2][0][2])),S[2][0]}};Object.prototype.hasOwnProperty;var y=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$")},{"hyperscript-attribute-to-property":5}],7:[function(e,n,t){"use strict";var r=/android/i,i=e("global/window").navigator;n.exports=function(e){return r.test(e)}(i?i.userAgent:"")},{"global/window":4}],8:[function(e,n,t){"use strict";var r=e("global/window").navigator;n.exports=function(e){return/iPad|iPhone|iPod/.test(e)}(r?r.userAgent:"")},{"global/window":4}],9:[function(e,n,t){var r=e("is-android"),i=e("is-ios");n.exports=r||i},{"is-android":7,"is-ios":8}],10:[function(e,n,t){"use strict";function r(e){!u&&p.createRange&&(u=p.createRange()).selectNode(p.body);var n;return u&&u.createContextualFragment?n=u.createContextualFragment(e):(n=p.createElement("body")).innerHTML=e,n.childNodes[0]}function i(e,n){var t=e.nodeName,r=n.nodeName;return t===r||!!(n.actualize&&t.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&t===r.toUpperCase()}function o(e,n){return n&&n!==f?p.createElementNS(n,e):p.createElement(e)}function a(e,n){for(var t=e.firstChild;t;){var r=t.nextSibling;n.appendChild(t),t=r}return n}function l(e,n,t){e[t]!==n[t]&&(e[t]=n[t],e[t]?e.setAttribute(t,""):e.removeAttribute(t,""))}function s(){}function c(e){return e.id}var u,d,f="http://www.w3.org/1999/xhtml",p="undefined"==typeof document?void 0:document,h=p?p.body||p.createElement("div"):{},v=d=h.hasAttributeNS?function(e,n,t){return e.hasAttributeNS(n,t)}:h.hasAttribute?function(e,n,t){return e.hasAttribute(t)}:function(e,n,t){return null!=e.getAttributeNode(n,t)},m={OPTION:function(e,n){l(e,n,"selected")},INPUT:function(e,n){l(e,n,"checked"),l(e,n,"disabled"),e.value!==n.value&&(e.value=n.value),v(n,null,"value")||e.removeAttribute("value")},TEXTAREA:function(e,n){var t=n.value;e.value!==t&&(e.value=t);var r=e.firstChild;if(r){var i=r.nodeValue;if(i==t||!t&&i==e.placeholder)return;r.nodeValue=t}},SELECT:function(e,n){if(!v(n,null,"multiple")){for(var t=0,r=n.firstChild;r;){var i=r.nodeName;if(i&&"OPTION"===i.toUpperCase()){if(v(r,null,"selected")){t;break}t++}r=r.nextSibling}e.selectedIndex=t}}},b=1,g=3,y=8,w=function(e){return function(n,t,l){function u(e){x?x.push(e):x=[e]}function d(e,n){if(e.nodeType===b)for(var t=e.firstChild;t;){var r=void 0;n&&(r=j(t))?u(r):(S(t),t.firstChild&&d(t,n)),t=t.nextSibling}}function f(e,n,t){!1!==T(e)&&(n&&n.removeChild(e),S(e),d(e,t))}function h(e){if(e.nodeType===b)for(var n=e.firstChild;n;){var t=j(n);t&&(L[t]=n),h(n),n=n.nextSibling}}function v(e){C(e);for(var n=e.firstChild;n;){var t=n.nextSibling,r=j(n);if(r){var o=L[r];o&&i(n,o)&&(n.parentNode.replaceChild(o,n),w(o,n))}v(n),n=t}}function w(r,o,a){var l,s=j(o);if(s&&delete L[s],!t.isSameNode||!t.isSameNode(n)){if(!a){if(!1===N(r,o))return;if(e(r,o),O(r),!1===E(r,o))return}if("TEXTAREA"!==r.nodeName){var c,d,h,k,x=o.firstChild,C=r.firstChild;e:for(;x;){for(h=x.nextSibling,c=j(x);C;){if(d=C.nextSibling,x.isSameNode&&x.isSameNode(C)){x=h,C=d;continue e}l=j(C);var T=C.nodeType,S=void 0;if(T===x.nodeType&&(T===b?(c?c!==l&&((k=L[c])?C.nextSibling===k?S=!1:(r.insertBefore(k,C),d=C.nextSibling,l?u(l):f(C,r,!0),C=k):S=!1):l&&(S=!1),(S=!1!==S&&i(C,x))&&w(C,x)):T!==g&&T!=y||(S=!0,C.nodeValue!==x.nodeValue&&(C.nodeValue=x.nodeValue))),S){x=h,C=d;continue e}l?u(l):f(C,r,!0),C=d}if(c&&(k=L[c])&&i(k,x))r.appendChild(k),w(k,x);else{var M=A(x);!1!==M&&(M&&(x=M),x.actualize&&(x=x.actualize(r.ownerDocument||p)),r.appendChild(x),v(x))}x=h,C=d}for(;C;)d=C.nextSibling,(l=j(C))?u(l):f(C,r,!0),C=d}var V=m[r.nodeName];V&&V(r,o)}}if(l||(l={}),"string"==typeof t)if("#document"===n.nodeName||"HTML"===n.nodeName){var k=t;(t=p.createElement("html")).innerHTML=k}else t=r(t);var x,j=l.getNodeKey||c,A=l.onBeforeNodeAdded||s,C=l.onNodeAdded||s,N=l.onBeforeElUpdated||s,O=l.onElUpdated||s,T=l.onBeforeNodeDiscarded||s,S=l.onNodeDiscarded||s,E=l.onBeforeElChildrenUpdated||s,M=!0===l.childrenOnly,L={};h(n);var V=n,P=V.nodeType,F=t.nodeType;if(!M)if(P===b)F===b?i(n,t)||(S(n),V=a(n,o(t.nodeName,t.namespaceURI))):V=t;else if(P===g||P===y){if(F===P)return V.nodeValue!==t.nodeValue&&(V.nodeValue=t.nodeValue),V;V=t}if(V===t)S(n);else if(w(V,t,M),x)for(var D=0,I=x.length;D<I;D++){var U=L[x[D]];U&&f(U,U.parentNode,!1)}return!M&&V!==n&&n.parentNode&&(V.actualize&&(V=V.actualize(n.ownerDocument||p)),n.parentNode.replaceChild(V,n)),V}}(function(e,n){var t,r,i,o,a,l=n.attributes;for(t=l.length-1;t>=0;--t)i=(r=l[t]).name,o=r.namespaceURI,a=r.value,o?(i=r.localName||i,e.getAttributeNS(o,i)!==a&&e.setAttributeNS(o,i,a)):e.getAttribute(i)!==a&&e.setAttribute(i,a);for(t=(l=e.attributes).length-1;t>=0;--t)!1!==(r=l[t]).specified&&(i=r.name,(o=r.namespaceURI)?(i=r.localName||i,v(n,o,i)||e.removeAttributeNS(o,i)):v(n,null,i)||e.removeAttribute(i))});n.exports=w},{}],11:[function(e,n,t){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;n.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,l,s=r(e),c=1;c<arguments.length;c++){t=Object(arguments[c]);for(var u in t)o.call(t,u)&&(s[u]=t[u]);if(i){l=i(t);for(var d=0;d<l.length;d++)a.call(t,l[d])&&(s[l[d]]=t[l[d]])}}return s}},{}],12:[function(e,n,t){n.exports={"file-code":{keywords:["text","javascript","html","css","php","ruby","coffeescript","sass","scss"],path:'<path fill-rule="evenodd" d="M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z"/>',height:"16",width:"12"},repo:{keywords:["book","journal"],path:'<path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/>',height:"16",width:"12"}}},{}],13:[function(e,n,t){var r=e("./build/data.json");Object.keys(r).forEach(function(e){var n=function(n,t){var i=[],o=Object.assign({},r[e].options,t);return t&&((t.width||t.height)&&(o.width=t.width?t.width:parseInt(t.height)*r[e].options.width/r[e].options.height,o.height=t.height?t.height:parseInt(t.width)*r[e].options.height/r[e].options.width),t.class&&(o.class="octicon octicon-"+e+" "+t.class,o.class.trim()),t["aria-label"]&&(o["aria-label"]=t["aria-label"],o.role="img",delete o["aria-hidden"])),Object.keys(o).forEach(function(e){i.push(e+'="'+o[e]+'"')}),i.join(" ").trim()};r[e].symbol=e,r[e].options={version:"1.1",width:r[e].width,height:r[e].height,viewBox:"0 0 "+r[e].width+" "+r[e].height,class:"octicon octicon-"+e,"aria-hidden":"true"},r[e].toSVG=function(t){return"<svg "+n(r[e],t)+">"+r[e].path+"</svg>"},r[e].toSVGUse=function(t){return"<svg "+n(r[e],t)+'><use xlink:href="#'+e+'" /></svg>'}}),n.exports=r},{"./build/data.json":12}],14:[function(e,n,t){function r(e,n){u[e][0]&&0===u[e][2]&&(u[e][0](n),u[e][2]=1)}function i(e,n){u[e][1]&&1===u[e][2]&&(u[e][1](n),u[e][2]=0)}function o(e,n,t){var r=e.target.getAttribute(d);a(e.oldValue,r)?u[r]=u[e.oldValue]:(u[e.oldValue]&&t(e.oldValue,e.target),u[r]&&n(r,e.target))}function a(e,n){return!(!e||!n)&&u[e][3]===u[n][3]}function l(e,n){for(var t=Object.keys(u),r=0;r<e.length;r++){if(e[r]&&e[r].getAttribute&&e[r].getAttribute(d)){var i=e[r].getAttribute(d);t.forEach(function(t){i===t&&n(t,e[r])})}e[r].childNodes.length>0&&l(e[r].childNodes,n)}}var s=e("global/document"),c=e("global/window"),u=Object.create(null),d="data-"+("onloadid"+(new Date%9e6).toString(36)),f=0;c&&c.MutationObserver&&new MutationObserver(function(e){if(!(Object.keys(u).length<1))for(var n=0;n<e.length;n++)e[n].attributeName!==d?(l(e[n].removedNodes,i),l(e[n].addedNodes,r)):o(e[n],r,i)}).observe(s.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[d]}),n.exports=function e(n,t,r,i){return t=t||function(){},r=r||function(){},n.setAttribute(d,"o"+f),u["o"+f]=[t,r,0,i||e.caller],f+=1,n}},{"global/document":3,"global/window":4}],15:[function(e,n,t){"use strict";function r(e){switch(e.arrayFormat){case"index":return function(n,t,r){return null===t?[o(n,e),"[",r,"]"].join(""):[o(n,e),"[",o(r,e),"]=",o(t,e)].join("")};case"bracket":return function(n,t){return null===t?o(n,e):[o(n,e),"[]=",o(t,e)].join("")};default:return function(n,t){return null===t?o(n,e):[o(n,e),"=",o(t,e)].join("")}}}function i(e){var n;switch(e.arrayFormat){case"index":return function(e,t,r){n=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),n?(void 0===r[e]&&(r[e]={}),r[e][n[1]]=t):r[e]=t};case"bracket":return function(e,t,r){n=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),n?void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=[t]:r[e]=t};default:return function(e,n,t){void 0!==t[e]?t[e]=[].concat(t[e],n):t[e]=n}}}function o(e,n){return n.encode?n.strict?l(e):encodeURIComponent(e):e}function a(e){return Array.isArray(e)?e.sort():"object"==typeof e?a(Object.keys(e)).sort(function(e,n){return Number(e)-Number(n)}).map(function(n){return e[n]}):e}var l=e("strict-uri-encode"),s=e("object-assign");t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,n){var t=i(n=s({arrayFormat:"none"},n)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var n=e.replace(/\+/g," ").split("="),i=n.shift(),o=n.length>0?n.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),t(decodeURIComponent(i),o,r)}),Object.keys(r).sort().reduce(function(e,n){var t=r[n];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[n]=a(t):e[n]=t,e},Object.create(null))):r},t.stringify=function(e,n){var t=r(n=s({encode:!0,strict:!0,arrayFormat:"none"},n));return e?Object.keys(e).sort().map(function(r){var i=e[r];if(void 0===i)return"";if(null===i)return o(r,n);if(Array.isArray(i)){var a=[];return i.slice().forEach(function(e){void 0!==e&&a.push(t(r,e,a.length))}),a.join("&")}return o(r,n)+"="+o(i,n)}).filter(function(e){return e.length>0}).join("&"):""}},{"object-assign":11,"strict-uri-encode":16}],16:[function(e,n,t){"use strict";n.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},{}],17:[function(e,n,t){var r=e("bel"),i=e("morphdom"),o=e("./update-events.js");n.exports=r,n.exports.update=function(e,n,t){return t||(t={}),!1!==t.events&&(t.onBeforeElUpdated||(t.onBeforeElUpdated=function(e,n){for(var r=t.events||o,i=0;i<r.length;i++){var a=r[i];n[a]?e[a]=n[a]:e[a]&&(e[a]=void 0)}var l=e.value,s=n.value;"INPUT"===e.nodeName&&"file"!==e.type||"SELECT"===e.nodeName?s||n.hasAttribute("value")?s!==l&&(e.value=s):n.value=e.value:"TEXTAREA"===e.nodeName&&null===n.getAttribute("value")&&(e.value=n.value)})),i(e,n,t)}},{"./update-events.js":18,bel:1,morphdom:10}],18:[function(e,n,t){n.exports=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"]},{}],19:[function(e,n,t){n.exports={"intro-en":"Thanks for checking my homepage out! My name is @name.\n\nI've been building and maintaining (mostly) software for @plotly since April 2014.\nI'm currently the lead maintainer of @plotlyjs, plotly's open-source JavaScript graphing library.\n\nFor more info, you can find me on @twitter / @github / @linkedin or view my @cv-en.\n\nMy personal email is @email\n","intro-fr":"Salut, je m'appelle @name et voici mon site.\n\nJe travaille présentement pour @plotly comme programmeur en JavaScript.\nPlus précisément, j'assume le rôle de chef d'équipe pour @plotlyjs,\nla bibliothèque JavaScript source ouverte de plotly.\n\nPour en savoir plus, allez voir mes profils @twitter / @github / @linkedin ou bien visionner mon @cv-fr.\n\nMon courriel personnel est le @email\n",posts:[{type:"block",date:"2016-11-06T00:00:00.000Z",tags:["js","mapbox-gl","3D-extrudes","d3","topojson","MTL-données-ouvertes"],"name-en":"Montreal population by borough with mapbox-gl 3D extrude","name-fr":"Population de Montréal par arrondissement en 3D via mapbox-gl",id:"9cce3976acc33770bd1212adcc95c9fe",commit:"addd3cf40b4a2a885850f06ea2783f94cb82287d"},{type:"block",date:"2016-12-09T00:00:00.000Z",tags:["JuliaLang","js","d3","climate","noaa"],"name-en":"Interactive contour maps of surface temperature anomalies in 2016","name-fr":"Cartes interactive des anomalies de température à la surface de l'année 2016",id:"9338947b0f3427e10b3602172b6a59ec",commit:"33d9423b9434143e4a8673965b2087c93a160426"},{type:"block",date:"2017-02-28T00:00:00.000Z",tags:["js","makefile","mapbox-gl","node.js-streams","MTL-données-ouvertes"],"name-en":"Animation of all 2016 Bixi trips","name-fr":"Animation de tous les déplacements en Bixi de l'année 2016",id:"723d2513086a100fb9ffe9e4d6a19f1b",commit:"7684ab84d3db9666af32a178e721bfdf78a4b5b9"},{type:"oss",date:"2016-12-01T00:00:00.000Z",tags:["js","npm"],name:"npm-link-check","description-en":"CLI utility that checks whether a project's current node modules tree contains npm-link'ed packages","description-fr":"Commande qui vérifie qu'un project ne comprend aucun module de node.js lié"},{type:"oss",date:"2016-12-08T00:00:00.000Z",tags:["js","npm","d3","rollup"],name:"d3-geo-projection-picker","description-en":"Utility to hand-picked d3-geo projections instead of relying of the full d3-geo-projection module","description-fr":"Module qui facilite la sélection de projections venant de d3-geo"},{type:"gist",date:"2016-08-18T00:00:00.000Z",tags:["js","test","tape"],"name-en":"Simple test server running tape test on an html page","name-fr":"Petit server pour rouler des tests tape sur une page html pré-faite",id:"9d492c9ec7acbf505fe9f59e3b3c0149"}],"footer-en":"This @siterepo is hosted on @ghpags and built with @yoyo / @tachyons / @heropatterns.\n","footer-fr":"Ce @siterepo est hébergé par @ghpags et conçu avec l'aide de @yoyo / @tachyons / @heropatterns.\n",block:{type:"link",val:"https://bl.ocks.org/etpinard"},block_full:{type:"link",val:"https://bl.ocks.org/etpinard/raw"},rawgit:{type:"link",val:"https://rawgit.com/etpinard"},gist:{type:"link",val:"https://gist.github.com/etpinard/"},github:{type:"link",val:"https://github.com/etpinard"},twitter:{type:"link",val:"https://twitter.com/etpinard"},linkedin:{type:"link",val:"https://www.linkedin.com/in/%C3%A9tienne-t%C3%A9treault-pinard-62328240"},email:{type:"email",val:"etienne.t.pinard@gmail.com"},name:{type:"str",val:"Étienne Tétreault-Pinard"},plotly:{type:"link",val:"https://plot.ly"},plotlyjs:{type:"link",val:"https://github.com/plotly/plotly.js",content:"plotly.js"},"cv-en":{type:"cv",folder:"en",commit:"c801818845eb9743d0bb2e55eb5de464ebd6e5d8"},"cv-fr":{type:"cv",folder:"fr",commit:"c801818845eb9743d0bb2e55eb5de464ebd6e5d8"},yoyo:{type:"link",val:"https://github.com/maxogden/yo-yo",content:"yo-yo"},tachyons:{type:"link",val:"http://tachyons.io/"},heropatterns:{type:"link",val:"http://www.heropatterns.com/",content:"Hero Patterns"},ghpags:{type:"link",val:"https://pages.github.com/",content:"GitHub pages"},siterepo:{type:"link",val:"https://github.com/etpinard/etpinard.github.io",content:"site"},colors:{bg:"#F8F8FF"},viewport:{home:"width=device-width, shrink-to-fit=0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0",cv:"width=device-width, minimum-scale=1, maximum-scale=3"}}},{}],20:[function(e,n,t){function r(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var i=r(["<p>","</p>"],["<p>","</p>"]),o=r(['<a\n          href="','"\n          target="_blank"\n          class="no-underline dark-blue hover-blue"\n        >',"</a>"],['<a\n          href="','"\n          target="_blank"\n          class="no-underline dark-blue hover-blue"\n        >',"</a>"]),a=r(['<span\n          class="reverse"\n        >',"</span>"],['<span\n          class="reverse"\n        >',"</span>"]),l=r(['<span\n          class="dark-blue hover-blue"\n          style="cursor:pointer;"\n          onclick=',"\n        >CV</span>"],['<span\n          class="dark-blue hover-blue"\n          style="cursor:pointer;"\n          onclick=',"\n        >CV</span>"]),s=r(['<span class="',' hover-blue">',"</span>"],['<span class="',' hover-blue">',"</span>"]),c=r(['<div class="flex pt3 pl3 f1 fw8">\n      <span class="hover-blue">@</span>\n      ',"\n    </div>"],['<div class="flex pt3 pl3 f1 fw8">\n      <span class="hover-blue">@</span>\n      ',"\n    </div>"]),u=r(['<div\n        class="'," "," ",'"\n        onclick=',">","\n      </div>"],['<div\n        class="'," "," ",'"\n        onclick=',">","\n      </div>"]),d=r(['<div>\n    <nav class="flex justify-between bb b--white-10 pb3">\n      ','\n      <div class="flex-grow pa3 flex items-center ttu">\n        ','\n      </div>\n    </nav>\n      <div class="pa3 ttu">\n        ',"\n      </div>\n  </div>"],['<div>\n    <nav class="flex justify-between bb b--white-10 pb3">\n      ','\n      <div class="flex-grow pa3 flex items-center ttu">\n        ','\n      </div>\n    </nav>\n      <div class="pa3 ttu">\n        ',"\n      </div>\n  </div>"]),f=r(['<div class="lh-copy pv2 ph5-ns mw7-ns ph3">\n    ',"\n  </div>"],['<div class="lh-copy pv2 ph5-ns mw7-ns ph3">\n    ',"\n  </div>"]),p=r(['<span class="pl2 f6"><i>#',"</i></span>"],['<span class="pl2 f6"><i>#',"</i></span>"]),h=r(['<p class="pv2 h2">',"</p>"],['<p class="pv2 h2">',"</p>"]),v=r(['<span class="db f5 pv3 fw6 h2">',"</span>"],['<span class="db f5 pv3 fw6 h2">',"</span>"]),m=r(['<div>\n      <a href="','" target="_blank" class="','">\n        ','\n        <img src="','" alt="','" class="center db mv2 h5" />\n        ',"\n      </a>\n    </div>"],['<div>\n      <a href="','" target="_blank" class="','">\n        ','\n        <img src="','" alt="','" class="center db mv2 h5" />\n        ',"\n      </a>\n    </div>"]),b=r(['<div>\n      <a href="','" target="_blank" class="','">\n        ',"\n        ",'\n        <div class="h4 pv2">\n          <p class="f6" style="text-align: justify;">',"</p>\n          ","\n        </div>\n      </a>\n    </div>"],['<div>\n      <a href="','" target="_blank" class="','">\n        ',"\n        ",'\n        <div class="h4 pv2">\n          <p class="f6" style="text-align: justify;">',"</p>\n          ","\n        </div>\n      </a>\n    </div>"]),g=r(['<div>\n      <a href="','" target="_blank" class="','">\n        ',"\n        ",'\n        <div class="h4 pv2">\n          ',"\n        </div>\n      </a>\n    </div>"],['<div>\n      <a href="','" target="_blank" class="','">\n        ',"\n        ",'\n        <div class="h4 pv2">\n          ',"\n        </div>\n      </a>\n    </div>"]),y=r(['<div class="fl w-100 w-third-ns pa2">',"</div>"],['<div class="fl w-100 w-third-ns pa2">',"</div>"]),w=r(['<div class="mw9 center ph3-ns">\n    <div class="cf ph2-ns">',"</div>\n  </div>"],['<div class="mw9 center ph3-ns">\n    <div class="cf ph2-ns">',"</div>\n  </div>"]),k=r(['<div class="center f7 pv3 ph3">\n    ',"\n  </div>"],['<div class="center f7 pv3 ph3">\n    ',"\n  </div>"]),x=r(['<span\n        class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"\n        style="cursor:pointer;"\n        onclick=',"\n    >","</span>"],['<span\n        class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"\n        style="cursor:pointer;"\n        onclick=',"\n    >","</span>"]),j=r([" <a\n      href=",'\n      download="etpinard-cv.pdf"\n      class="f6 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"\n    >',"</a>"],[" <a\n      href=",'\n      download="etpinard-cv.pdf"\n      class="f6 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"\n    >',"</a>"]),A=r(['<div>\n    <div class="fixed flex tems-center justify-center pa4 w-100 bg-blue">\n      ',"\n      ",'\n    </div>\n    <div class="db">\n      <img src=',' alt="cv-','" class="center mt6" />\n    </div class="db">\n  </div>'],['<div>\n    <div class="fixed flex tems-center justify-center pa4 w-100 bg-blue">\n      ',"\n      ",'\n    </div>\n    <div class="db">\n      <img src=',' alt="cv-','" class="center mt6" />\n    </div class="db">\n  </div>']),C=r(["",""],["",""]),N=r(['<div style="background-color: ',';">\n      ',"\n      ",'\n      <div class="hero pa1">\n        ',"\n      </div>\n      ","\n    </div>"],['<div style="background-color: ',';">\n      ',"\n      ",'\n      <div class="hero pa1">\n        ',"\n      </div>\n      ","\n    </div>"]),O=e("yo-yo"),T=e("query-string"),S=e("octicons"),E=e("is-mobile-device"),M=e("./data.yml"),L=["en","fr"],V=function(e){return-1!==L.indexOf(e)},P=function(){var e=(window.navigator.languages||[])[0];if("string"==typeof e){var n=e.substr(0,2);if(V(e))return n}return L[0]}(),F=function(){var e=T.parse(window.location.hash).lang;return V(e)?e:P},D=function(e){var n=e.split("\n\n"),t=function(e){if("@"!==e.charAt(0))return e;var n=e.substr(1),t=M[n],r=t.val,i=t.content||n;switch(t.type){case"link":return O(o,r,i);case"email":return O(a,M.email.val.split("").reverse().join(""));case"cv":return O(l,function(){window.location.hash=T.stringify({lang:F(),cv:!0})});case"str":return r}};return O(i,n.map(function(e){var n=e.split(/(\s|[.,!?])/);return O(i,n.map(t))}))},I=function(){var e=function(){var e=["pt1","pt2","","pb1","pb2"],n=function(){return Math.floor(e.length*Math.random())},t="etpinard".split("").map(function(t){return O(s,e[n()],t)});return O(c,t)},n=function(e){return[P,L.filter(function(e){return e!==P})[0]].map(function(n){var t=n===F()?"bg-light-gray":"";return O(u,"f4 black bg-animate hover-bg-blue gno-underline pv1 ph2 br1 mh0 ba b--dark-blue",t,e,function(){window.location.hash=T.stringify({lang:n})},n)})},t=e(),r=n("dib dn-ns"),i=n("dn dib-ns");return setInterval(function(){return O.update(t,e())},2e3),O(d,t,i,r)},U=function(){var e=M["intro-"+F()];return O(f,D(e))},z=function(){var e=function(e){return new Date(e.date).getTime()},n="link black dim db pa2 br2 ba b--black-10 shadow-1",t={},r=function(e){var n=e.tags.map(function(e){return O(p,e)});return O(h,n)},i=function(e){return O(v,e)},o=function(e){var n=document.createElement("div");return n.innerHTML=S[e].toSVG({width:150,class:"center h4"}),n.firstChild.style.display="block",n.style["padding-top"]="45px",n.style["padding-bottom"]="45px",n};t.block=function(e){var t=M.block.val+"/"+e.id,o=e["name-"+F()],a=E?"build/thumbnail-"+e.id+".png":"build/preview-"+e.id+".gif";return O(m,t,n,i(o),a,o,r(e))},t.oss=function(e){var t=M.github.val+"/"+e.name,a=e["description-"+F()];return O(b,t,n,i(e.name),o("repo"),a,r(e))},t.gist=function(e){var t=M.gist.val+"/"+e.id,a=e["name-"+F()];return O(g,t,n,i(a),o("file-code"),r(e))};var a=M.posts.sort(function(n,t){return e(t)-e(n)}).map(function(e){return O(y,t[e.type](e))});return O(w,a)},_=function(){var e=M["footer-"+F()];return O(k,D(e))},B=function(){var e=F(),n="build/cv-"+e+".png",t="build/cv-"+e+".pdf";return O(A,O(x,function(){window.location.hash=T.stringify({lang:e}),window.scroll(0,0)},{en:"Go back to site",fr:"Retour au site"}[e]),O(j,t,{en:"Download PDF",fr:"Télécharger en PDF"}[e]),n,e)},R=function(){var e=T.parse(window.location.hash).cv,n=document.getElementById("viewport");return e?(E&&n.setAttribute("content",M.viewport.cv),O(C,B())):(E&&n.setAttribute("content",M.viewport.home),O(N,M.colors.bg,I(),U(),z(),_()))},H=R();document.body.appendChild(H),window.onhashchange=function(){O.update(H,R())}},{"./data.yml":19,"is-mobile-device":9,octicons:13,"query-string":15,"yo-yo":17}]},{},[20]);