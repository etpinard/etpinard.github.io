!function e(n,t,r){function i(a,s){if(!t[a]){if(!n[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=t[a]={exports:{}};n[a][0].call(u.exports,function(e){var t=n[a][1][e];return i(t||e)},u,u.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n,t){var r=e("global/document"),i=e("hyperx"),o=e("on-load"),a="http://www.w3.org/2000/svg",s="http://www.w3.org/1999/xlink",l={autofocus:1,checked:1,defaultchecked:1,disabled:1,formnovalidate:1,indeterminate:1,readonly:1,required:1,selected:1,willvalidate:1},c="!--",u=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function d(e,n,t){var i;-1!==u.indexOf(e)&&(n.namespace=a);var f=!1;if(n.namespace&&(f=n.namespace,delete n.namespace),f)i=r.createElementNS(f,e);else{if(e===c)return r.createComment(n.comment);i=r.createElement(e)}if(n.onload||n.onunload){var p=n.onload||function(){},h=n.onunload||function(){};o(i,function(){p(i)},function(){h(i)},d.caller.caller.caller),delete n.onload,delete n.onunload}for(var v in n)if(n.hasOwnProperty(v)){var m=v.toLowerCase(),b=n[v];if("classname"===m&&(m="class",v="class"),"htmlFor"===v&&(v="for"),l[m])if("true"===b)b=m;else if("false"===b)continue;"on"===m.slice(0,2)?i[v]=b:f?"xlink:href"===v?i.setAttributeNS(s,v,b):/^xmlns($|:)/i.test(v)||i.setAttributeNS(null,v,b):i.setAttribute(v,b)}return function e(n){if(Array.isArray(n))for(var t=0;t<n.length;t++){var o=n[t];if(Array.isArray(o))e(o);else{if(("number"==typeof o||"boolean"==typeof o||"function"==typeof o||o instanceof Date||o instanceof RegExp)&&(o=o.toString()),"string"==typeof o){if(i.lastChild&&"#text"===i.lastChild.nodeName){i.lastChild.nodeValue+=o;continue}o=r.createTextNode(o)}o&&o.nodeType&&i.appendChild(o)}}}(t),i}n.exports=i(d,{comments:!0}),n.exports.default=n.exports,n.exports.createElement=d},{"global/document":3,hyperx:6,"on-load":15}],2:[function(e,n,t){},{}],3:[function(e,n,t){(function(t){var r,i=void 0!==t?t:"undefined"!=typeof window?window:{},o=e("min-document");"undefined"!=typeof document?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"])||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=o),n.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"min-document":2}],4:[function(e,n,t){(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],5:[function(e,n,t){n.exports=function(e){return function(n,t,i){for(var o in t)o in r&&(t[r[o]]=t[o],delete t[o]);return e(n,t,i)}};var r={class:"className",for:"htmlFor","http-equiv":"httpEquiv"}},{}],6:[function(e,n,t){var r=e("hyperscript-attribute-to-property"),i=1,o=2,a=3,s=4,l=5,c=6,u=7,d=8,f=9,p=10,h=11,v=12,m=13;n.exports=function(e,n){n||(n={});var t=n.concat||function(e,n){return String(e)+String(n)};return!1!==n.attrToProp&&(e=r(e)),function(r){for(var y=i,w="",k=arguments.length,x=[],j=0;j<r.length;j++)if(j<k-1){var A=arguments[j+1],C=I(r[j]),N=y;N===p&&(N=d),N===f&&(N=d),N===u&&(N=d),N===s&&(N=l),C.push([0,N,A]),x.push.apply(x,C)}else x.push.apply(x,I(r[j]));var O,T=[null,{},[]],E=[[T,-1]];for(j=0;j<x.length;j++){var S=E[E.length-1][0],M=(C=x[j])[0];if(M===o&&/^\//.test(C[1])){var L=E[E.length-1][1];E.length>1&&(E.pop(),E[E.length-1][0][2][L]=e(S[0],S[1],S[2].length?S[2]:void 0))}else if(M===o){var V=[C[1],{},[]];S[2].push(V),E.push([V,S[2].length-1])}else if(M===l||0===M&&C[1]===l){for(var P,D="";j<x.length;j++)if(x[j][0]===l)D=t(D,x[j][1]);else{if(0!==x[j][0]||x[j][1]!==l)break;if("object"!=typeof x[j][2]||D)D=t(D,x[j][2]);else for(P in x[j][2])x[j][2].hasOwnProperty(P)&&!S[1][P]&&(S[1][P]=x[j][2][P])}x[j][0]===h&&j++;for(var F=j;j<x.length;j++)if(x[j][0]===d||x[j][0]===l)S[1][D]?""===x[j][1]||(S[1][D]=t(S[1][D],x[j][1])):S[1][D]=g(x[j][1]);else{if(0!==x[j][0]||x[j][1]!==d&&x[j][1]!==l){!D.length||S[1][D]||j!==F||x[j][0]!==a&&x[j][0]!==v||(S[1][D]=D.toLowerCase()),x[j][0]===a&&j--;break}S[1][D]?""===x[j][2]||(S[1][D]=t(S[1][D],x[j][2])):S[1][D]=g(x[j][2])}}else if(M===l)S[1][C[1]]=!0;else if(0===M&&C[1]===l)S[1][C[2]]=!0;else if(M===a){if(O=S[0],b.test(O)&&E.length){L=E[E.length-1][1];E.pop(),E[E.length-1][0][2][L]=e(S[0],S[1],S[2].length?S[2]:void 0)}}else if(0===M&&C[1]===i)void 0===C[2]||null===C[2]?C[2]="":C[2]||(C[2]=t("",C[2])),Array.isArray(C[2][0])?S[2].push.apply(S[2],C[2]):S[2].push(C[2]);else if(M===i)S[2].push(C[1]);else if(M!==h&&M!==v)throw new Error("unhandled: "+M)}if(T[2].length>1&&/^\s*$/.test(T[2][0])&&T[2].shift(),T[2].length>2||2===T[2].length&&/\S/.test(T[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(T[2][0])&&"string"==typeof T[2][0][0]&&Array.isArray(T[2][0][2])&&(T[2][0]=e(T[2][0][0],T[2][0][1],T[2][0][2])),T[2][0];function I(e){var t,r=[];y===u&&(y=s);for(var b=0;b<e.length;b++){var g=e.charAt(b);y===i&&"<"===g?(w.length&&r.push([i,w]),w="",y=o):">"===g&&((t=y)!==f&&t!==p)&&y!==m?(y===o?r.push([o,w]):y===l?r.push([l,w]):y===d&&w.length&&r.push([d,w]),r.push([a]),w="",y=i):y===m&&/-$/.test(w)&&"-"===g?(n.comments&&r.push([d,w.substr(0,w.length-1)],[a]),w="",y=i):y===o&&/^!--$/.test(w)?(n.comments&&r.push([o,w],[l,"comment"],[h]),w=g,y=m):y===i||y===m?w+=g:y===o&&/\s/.test(g)?(r.push([o,w]),w="",y=s):y===o?w+=g:y===s&&/[^\s"'=/]/.test(g)?(y=l,w=g):y===s&&/\s/.test(g)?(w.length&&r.push([l,w]),r.push([v])):y===l&&/\s/.test(g)?(r.push([l,w]),w="",y=c):y===l&&"="===g?(r.push([l,w],[h]),w="",y=u):y===l?w+=g:y!==c&&y!==s||"="!==g?y!==c&&y!==s||/\s/.test(g)?y===u&&'"'===g?y=p:y===u&&"'"===g?y=f:y===p&&'"'===g?(r.push([d,w],[v]),w="",y=s):y===f&&"'"===g?(r.push([d,w],[v]),w="",y=s):y!==u||/\s/.test(g)?y===d&&/\s/.test(g)?(r.push([d,w],[v]),w="",y=s):y!==d&&y!==f&&y!==p||(w+=g):(y=d,b--):(r.push([v]),/[\w-]/.test(g)?(w+=g,y=l):y=s):(r.push([h]),y=u)}return y===i&&w.length?(r.push([i,w]),w=""):y===d&&w.length?(r.push([d,w]),w=""):y===p&&w.length?(r.push([d,w]),w=""):y===f&&w.length?(r.push([d,w]),w=""):y===l&&(r.push([l,w]),w=""),r}};function g(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"==typeof e?e:t("",e)}};Object.prototype.hasOwnProperty;var b=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$")},{"hyperscript-attribute-to-property":5}],7:[function(e,n,t){"use strict";var r,i=/android/i,o=e("global/window").navigator;n.exports=(r=o?o.userAgent:"",i.test(r))},{"global/window":4}],8:[function(e,n,t){"use strict";var r,i=e("global/window").navigator;n.exports=(r=i?i.userAgent:"",/iPad|iPhone|iPod/.test(r))},{"global/window":4}],9:[function(e,n,t){var r=e("is-android"),i=e("is-ios");n.exports=r||i},{"is-android":7,"is-ios":8}],10:[function(e,n,t){"use strict";var r,i="http://www.w3.org/1999/xhtml",o="undefined"==typeof document?void 0:document,a=o?o.body||o.createElement("div"):{},s=a.hasAttributeNS?function(e,n,t){return e.hasAttributeNS(n,t)}:a.hasAttribute?function(e,n,t){return e.hasAttribute(t)}:function(e,n,t){return null!=e.getAttributeNode(n,t)};function l(e,n){var t=e.nodeName,r=n.nodeName;return t===r||!!(n.actualize&&t.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&t===r.toUpperCase()}function c(e,n,t){e[t]!==n[t]&&(e[t]=n[t],e[t]?e.setAttribute(t,""):e.removeAttribute(t,""))}var u={OPTION:function(e,n){c(e,n,"selected")},INPUT:function(e,n){c(e,n,"checked"),c(e,n,"disabled"),e.value!==n.value&&(e.value=n.value),s(n,null,"value")||e.removeAttribute("value")},TEXTAREA:function(e,n){var t=n.value;e.value!==t&&(e.value=t);var r=e.firstChild;if(r){var i=r.nodeValue;if(i==t||!t&&i==e.placeholder)return;r.nodeValue=t}},SELECT:function(e,n){if(!s(n,null,"multiple")){for(var t=0,r=n.firstChild;r;){var i=r.nodeName;if(i&&"OPTION"===i.toUpperCase()){if(s(r,null,"selected")){t;break}t++}r=r.nextSibling}e.selectedIndex=t}}},d=1,f=3,p=8;function h(){}function v(e){return e.id}var m,b=(m=function(e,n){var t,r,i,o,a,l=n.attributes;for(t=l.length-1;t>=0;--t)i=(r=l[t]).name,o=r.namespaceURI,a=r.value,o?(i=r.localName||i,e.getAttributeNS(o,i)!==a&&e.setAttributeNS(o,i,a)):e.getAttribute(i)!==a&&e.setAttribute(i,a);for(t=(l=e.attributes).length-1;t>=0;--t)!1!==(r=l[t]).specified&&(i=r.name,(o=r.namespaceURI)?(i=r.localName||i,s(n,o,i)||e.removeAttributeNS(o,i)):s(n,null,i)||e.removeAttribute(i))},function(e,n,t){if(t||(t={}),"string"==typeof n)if("#document"===e.nodeName||"HTML"===e.nodeName){var a=n;(n=o.createElement("html")).innerHTML=a}else s=n,!r&&o.createRange&&(r=o.createRange()).selectNode(o.body),r&&r.createContextualFragment?c=r.createContextualFragment(s):(c=o.createElement("body")).innerHTML=s,n=c.childNodes[0];var s,c,b,g=t.getNodeKey||v,y=t.onBeforeNodeAdded||h,w=t.onNodeAdded||h,k=t.onBeforeElUpdated||h,x=t.onElUpdated||h,j=t.onBeforeNodeDiscarded||h,A=t.onNodeDiscarded||h,C=t.onBeforeElChildrenUpdated||h,N=!0===t.childrenOnly,O={};function T(e){b?b.push(e):b=[e]}function E(e,n,t){!1!==j(e)&&(n&&n.removeChild(e),A(e),function e(n,t){if(n.nodeType===d)for(var r=n.firstChild;r;){var i=void 0;t&&(i=g(r))?T(i):(A(r),r.firstChild&&e(r,t)),r=r.nextSibling}}(e,t))}function S(e){w(e);for(var n=e.firstChild;n;){var t=n.nextSibling,r=g(n);if(r){var i=O[r];i&&l(n,i)&&(n.parentNode.replaceChild(i,n),M(i,n))}S(n),n=t}}function M(t,r,i){var a,s=g(r);if(s&&delete O[s],!n.isSameNode||!n.isSameNode(e)){if(!i){if(!1===k(t,r))return;if(m(t,r),x(t),!1===C(t,r))return}if("TEXTAREA"!==t.nodeName){var c,h,v,b,w=r.firstChild,j=t.firstChild;e:for(;w;){for(v=w.nextSibling,c=g(w);j;){if(h=j.nextSibling,w.isSameNode&&w.isSameNode(j)){w=v,j=h;continue e}a=g(j);var A=j.nodeType,N=void 0;if(A===w.nodeType&&(A===d?(c?c!==a&&((b=O[c])?j.nextSibling===b?N=!1:(t.insertBefore(b,j),h=j.nextSibling,a?T(a):E(j,t,!0),j=b):N=!1):a&&(N=!1),(N=!1!==N&&l(j,w))&&M(j,w)):A!==f&&A!=p||(N=!0,j.nodeValue!==w.nodeValue&&(j.nodeValue=w.nodeValue))),N){w=v,j=h;continue e}a?T(a):E(j,t,!0),j=h}if(c&&(b=O[c])&&l(b,w))t.appendChild(b),M(b,w);else{var L=y(w);!1!==L&&(L&&(w=L),w.actualize&&(w=w.actualize(t.ownerDocument||o)),t.appendChild(w),S(w))}w=v,j=h}for(;j;)h=j.nextSibling,(a=g(j))?T(a):E(j,t,!0),j=h}var V=u[t.nodeName];V&&V(t,r)}}!function e(n){if(n.nodeType===d)for(var t=n.firstChild;t;){var r=g(t);r&&(O[r]=t),e(t),t=t.nextSibling}}(e);var L,V,P=e,D=P.nodeType,F=n.nodeType;if(!N)if(D===d)F===d?l(e,n)||(A(e),P=function(e,n){for(var t=e.firstChild;t;){var r=t.nextSibling;n.appendChild(t),t=r}return n}(e,(L=n.nodeName,(V=n.namespaceURI)&&V!==i?o.createElementNS(V,L):o.createElement(L)))):P=n;else if(D===f||D===p){if(F===D)return P.nodeValue!==n.nodeValue&&(P.nodeValue=n.nodeValue),P;P=n}if(P===n)A(e);else if(M(P,n,N),b)for(var I=0,U=b.length;I<U;I++){var _=O[b[I]];_&&E(_,_.parentNode,!1)}return!N&&P!==e&&e.parentNode&&(P.actualize&&(P=P.actualize(e.ownerDocument||o)),e.parentNode.replaceChild(P,e)),P});n.exports=b},{}],11:[function(e,n,t){function r(e,n){if(!e)throw new Error(n||"AssertionError")}r.notEqual=function(e,n,t){r(e!=n,t)},r.notOk=function(e,n){r(!e,n)},r.equal=function(e,n,t){r(e==n,t)},r.ok=r,n.exports=r},{}],12:[function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;n.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,a,s=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in t=Object(arguments[l]))i.call(t,c)&&(s[c]=t[c]);if(r){a=r(t);for(var u=0;u<a.length;u++)o.call(t,a[u])&&(s[a[u]]=t[a[u]])}}return s}},{}],13:[function(e,n,t){n.exports={"file-code":{keywords:["text","javascript","html","css","php","ruby","coffeescript","sass","scss"],path:'<path fill-rule="evenodd" d="M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z"/>',height:"16",width:"12"},repo:{keywords:["book","journal"],path:'<path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/>',height:"16",width:"12"}}},{}],14:[function(e,n,t){var r=e("./build/data.json");Object.keys(r).forEach(function(e){var n=function(n,t){var i=[],o=Object.assign({},r[e].options,t);return t&&((t.width||t.height)&&(o.width=t.width?t.width:parseInt(t.height)*r[e].options.width/r[e].options.height,o.height=t.height?t.height:parseInt(t.width)*r[e].options.height/r[e].options.width),t.class&&(o.class="octicon octicon-"+e+" "+t.class,o.class.trim()),t["aria-label"]&&(o["aria-label"]=t["aria-label"],o.role="img",delete o["aria-hidden"])),Object.keys(o).forEach(function(e){i.push(e+'="'+o[e]+'"')}),i.join(" ").trim()};r[e].symbol=e,r[e].options={version:"1.1",width:r[e].width,height:r[e].height,viewBox:"0 0 "+r[e].width+" "+r[e].height,class:"octicon octicon-"+e,"aria-hidden":"true"},r[e].toSVG=function(t){return"<svg "+n(r[e],t)+">"+r[e].path+"</svg>"},r[e].toSVGUse=function(t){return"<svg "+n(r[e],t)+'><use xlink:href="#'+e+'" /></svg>'}}),n.exports=r},{"./build/data.json":13}],15:[function(e,n,t){var r=e("global/document"),i=e("global/window"),o=e("assert"),a=Object.create(null),s="onloadid"+(new Date%9e6).toString(36),l="data-"+s,c=0;if(i&&i.MutationObserver){var u=new MutationObserver(function(e){if(!(Object.keys(a).length<1))for(var n=0;n<e.length;n++)e[n].attributeName!==l?(v(e[n].removedNodes,p),v(e[n].addedNodes,f)):h(e[n],f,p)});r.body?d(u):r.addEventListener("DOMContentLoaded",function(e){d(u)})}function d(e){e.observe(r.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[l]})}function f(e,n){a[e][0]&&0===a[e][2]&&(a[e][0](n),a[e][2]=1)}function p(e,n){a[e][1]&&1===a[e][2]&&(a[e][1](n),a[e][2]=0)}function h(e,n,t){var r,i,o=e.target.getAttribute(l);(r=e.oldValue,i=o,r&&i&&a[r][3]===a[i][3])?a[o]=a[e.oldValue]:(a[e.oldValue]&&t(e.oldValue,e.target),a[o]&&n(o,e.target))}function v(e,n){for(var t=Object.keys(a),r=0;r<e.length;r++){if(e[r]&&e[r].getAttribute&&e[r].getAttribute(l)){var i=e[r].getAttribute(l);t.forEach(function(t){i===t&&n(t,e[r])})}e[r].childNodes.length>0&&v(e[r].childNodes,n)}}n.exports=function e(n,t,i,s){return o(r.body,"on-load: will not work prior to DOMContentLoaded"),t=t||function(){},i=i||function(){},n.setAttribute(l,"o"+c),a["o"+c]=[t,i,0,s||e.caller],c+=1,n},n.exports.KEY_ATTR=l,n.exports.KEY_ID=s},{assert:11,"global/document":3,"global/window":4}],16:[function(e,n,t){"use strict";var r=e("strict-uri-encode"),i=e("object-assign");function o(e,n){return n.encode?n.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,n){var t=function(e){var n;switch(e.arrayFormat){case"index":return function(e,t,r){n=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),n?(void 0===r[e]&&(r[e]={}),r[e][n[1]]=t):r[e]=t};case"bracket":return function(e,t,r){n=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),n?void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=[t]:r[e]=t};default:return function(e,n,t){void 0!==t[e]?t[e]=[].concat(t[e],n):t[e]=n}}}(n=i({arrayFormat:"none"},n)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var n=e.replace(/\+/g," ").split("="),i=n.shift(),o=n.length>0?n.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),t(decodeURIComponent(i),o,r)}),Object.keys(r).sort().reduce(function(e,n){var t=r[n];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[n]=function e(n){return Array.isArray(n)?n.sort():"object"==typeof n?e(Object.keys(n)).sort(function(e,n){return Number(e)-Number(n)}).map(function(e){return n[e]}):n}(t):e[n]=t,e},Object.create(null))):r},t.stringify=function(e,n){var t=function(e){switch(e.arrayFormat){case"index":return function(n,t,r){return null===t?[o(n,e),"[",r,"]"].join(""):[o(n,e),"[",o(r,e),"]=",o(t,e)].join("")};case"bracket":return function(n,t){return null===t?o(n,e):[o(n,e),"[]=",o(t,e)].join("")};default:return function(n,t){return null===t?o(n,e):[o(n,e),"=",o(t,e)].join("")}}}(n=i({encode:!0,strict:!0,arrayFormat:"none"},n));return e?Object.keys(e).sort().map(function(r){var i=e[r];if(void 0===i)return"";if(null===i)return o(r,n);if(Array.isArray(i)){var a=[];return i.slice().forEach(function(e){void 0!==e&&a.push(t(r,e,a.length))}),a.join("&")}return o(r,n)+"="+o(i,n)}).filter(function(e){return e.length>0}).join("&"):""}},{"object-assign":12,"strict-uri-encode":17}],17:[function(e,n,t){"use strict";n.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},{}],18:[function(e,n,t){var r=e("bel"),i=e("morphdom"),o=e("./update-events.js");n.exports=r,n.exports.update=function(e,n,t){return t||(t={}),!1!==t.events&&(t.onBeforeElUpdated||(t.onBeforeElUpdated=function(e,n){for(var r=t.events||o,i=0;i<r.length;i++){var a=r[i];n[a]?e[a]=n[a]:e[a]&&(e[a]=void 0)}var s=e.value,l=n.value;"INPUT"===e.nodeName&&"file"!==e.type||"SELECT"===e.nodeName?l||n.hasAttribute("value")?l!==s&&(e.value=l):n.value=e.value:"TEXTAREA"===e.nodeName&&null===n.getAttribute("value")&&(e.value=n.value)})),i(e,n,t)}},{"./update-events.js":19,bel:1,morphdom:10}],19:[function(e,n,t){n.exports=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"]},{}],20:[function(e,n,t){n.exports={"intro-en":"Thanks for checking my homepage out! My name is @name.\n\nI've been building and maintaining (mostly) software for @plotly since April 2014.\nI'm currently the lead maintainer of @plotlyjs, plotly's open-source JavaScript graphing library.\n\nFor more info, you can find me on @twitter / @github / @linkedin or view my @cv-en.\n\nMy personal email is @email\n","intro-fr":"Salut, je m'appelle @name et voici mon site.\n\nJe travaille présentement pour @plotly comme programmeur en JavaScript.\nPlus précisément, j'assume le rôle de chef d'équipe pour @plotlyjs,\nla bibliothèque JavaScript source ouverte de plotly.\n\nPour en savoir plus, allez voir mes profils @twitter / @github / @linkedin ou bien visionner mon @cv-fr.\n\nMon courriel personnel est le @email\n",posts:[{type:"block",date:"2016-11-06T00:00:00.000Z",tags:["js","mapbox-gl","3D-extrudes","d3","topojson","MTL-données-ouvertes"],"name-en":"Montreal population by borough with mapbox-gl 3D extrude","name-fr":"Population de Montréal par arrondissement en 3D via mapbox-gl",id:"9cce3976acc33770bd1212adcc95c9fe",commit:"addd3cf40b4a2a885850f06ea2783f94cb82287d"},{type:"block",date:"2016-12-09T00:00:00.000Z",tags:["JuliaLang","js","d3","climate","noaa"],"name-en":"Interactive contour maps of surface temperature anomalies in 2016","name-fr":"Cartes interactive des anomalies de température à la surface de l'année 2016",id:"9338947b0f3427e10b3602172b6a59ec",commit:"33d9423b9434143e4a8673965b2087c93a160426"},{type:"block",date:"2017-02-28T00:00:00.000Z",tags:["js","makefile","mapbox-gl","node.js-streams","MTL-données-ouvertes"],"name-en":"Animation of all 2016 Bixi trips","name-fr":"Animation de tous les déplacements en Bixi de l'année 2016",id:"723d2513086a100fb9ffe9e4d6a19f1b",commit:"7684ab84d3db9666af32a178e721bfdf78a4b5b9"},{type:"oss",date:"2016-12-01T00:00:00.000Z",tags:["js","npm"],name:"npm-link-check","description-en":"CLI utility that checks whether a project's current node modules tree contains npm-link'ed packages","description-fr":"Commande qui vérifie qu'un project ne comprend aucun module de node.js lié"},{type:"oss",date:"2016-12-08T00:00:00.000Z",tags:["js","npm","d3","rollup"],name:"d3-geo-projection-picker","description-en":"Utility to hand-picked d3-geo projections instead of relying of the full d3-geo-projection module","description-fr":"Module qui facilite la sélection de projections venant de d3-geo"},{type:"gist",date:"2016-08-18T00:00:00.000Z",tags:["js","test","tape"],"name-en":"Simple test server running tape test on an html page","name-fr":"Petit server pour rouler des tests tape sur une page html pré-faite",id:"9d492c9ec7acbf505fe9f59e3b3c0149"}],"footer-en":"This @siterepo is hosted on @ghpags and built with @yoyo / @tachyons / @heropatterns.\n","footer-fr":"Ce @siterepo est hébergé par @ghpags et conçu avec l'aide de @yoyo / @tachyons / @heropatterns.\n",block:{type:"link",val:"https://bl.ocks.org/etpinard"},block_full:{type:"link",val:"https://bl.ocks.org/etpinard/raw"},rawgit:{type:"link",val:"https://rawgit.com/etpinard"},gist:{type:"link",val:"https://gist.github.com/etpinard/"},github:{type:"link",val:"https://github.com/etpinard"},twitter:{type:"link",val:"https://twitter.com/etpinard"},linkedin:{type:"link",val:"https://www.linkedin.com/in/%C3%A9tienne-t%C3%A9treault-pinard-62328240"},email:{type:"email",val:"etienne.t.pinard@gmail.com"},name:{type:"str",val:"Étienne Tétreault-Pinard"},plotly:{type:"link",val:"https://plot.ly"},plotlyjs:{type:"link",val:"https://github.com/plotly/plotly.js",content:"plotly.js"},"cv-en":{type:"cv",folder:"en",commit:"c801818845eb9743d0bb2e55eb5de464ebd6e5d8"},"cv-fr":{type:"cv",folder:"fr",commit:"c801818845eb9743d0bb2e55eb5de464ebd6e5d8"},yoyo:{type:"link",val:"https://github.com/maxogden/yo-yo",content:"yo-yo"},tachyons:{type:"link",val:"http://tachyons.io/"},heropatterns:{type:"link",val:"http://www.heropatterns.com/",content:"Hero Patterns"},ghpags:{type:"link",val:"https://pages.github.com/",content:"GitHub pages"},siterepo:{type:"link",val:"https://github.com/etpinard/etpinard.github.io",content:"site"},colors:{bg:"#F8F8FF"},viewport:{home:"width=device-width, shrink-to-fit=0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0",cv:"width=device-width, minimum-scale=1, maximum-scale=3"}}},{}],21:[function(e,n,t){var r=N(["<p>","</p>"],["<p>","</p>"]),i=N(['<a\n          href="','"\n          target="_blank"\n          class="no-underline dark-blue hover-blue"\n        >',"</a>"],['<a\n          href="','"\n          target="_blank"\n          class="no-underline dark-blue hover-blue"\n        >',"</a>"]),o=N(['<span\n          class="reverse"\n        >',"</span>"],['<span\n          class="reverse"\n        >',"</span>"]),a=N(['<span\n          class="dark-blue hover-blue"\n          style="cursor:pointer;"\n          onclick=',"\n        >CV</span>"],['<span\n          class="dark-blue hover-blue"\n          style="cursor:pointer;"\n          onclick=',"\n        >CV</span>"]),s=N(['<span class="',' hover-blue">',"</span>"],['<span class="',' hover-blue">',"</span>"]),l=N(['<div class="flex pt3 pl3 f1 fw8">\n      <span class="hover-blue">@</span>\n      ',"\n    </div>"],['<div class="flex pt3 pl3 f1 fw8">\n      <span class="hover-blue">@</span>\n      ',"\n    </div>"]),c=N(['<div\n        class="'," "," ",'"\n        onclick=',">","\n      </div>"],['<div\n        class="'," "," ",'"\n        onclick=',">","\n      </div>"]),u=N(['<div>\n    <nav class="flex justify-between bb b--white-10 pb3">\n      ','\n      <div class="flex-grow pa3 flex items-center ttu">\n        ','\n      </div>\n    </nav>\n      <div class="pa3 ttu">\n        ',"\n      </div>\n  </div>"],['<div>\n    <nav class="flex justify-between bb b--white-10 pb3">\n      ','\n      <div class="flex-grow pa3 flex items-center ttu">\n        ','\n      </div>\n    </nav>\n      <div class="pa3 ttu">\n        ',"\n      </div>\n  </div>"]),d=N(['<div class="lh-copy pv2 ph5-ns mw7-ns ph3">\n    ',"\n  </div>"],['<div class="lh-copy pv2 ph5-ns mw7-ns ph3">\n    ',"\n  </div>"]),f=N(['<span class="pl2 f6"><i>#',"</i></span>"],['<span class="pl2 f6"><i>#',"</i></span>"]),p=N(['<p class="pv2 h2">',"</p>"],['<p class="pv2 h2">',"</p>"]),h=N(['<span class="db f5 pv3 fw6 h2">',"</span>"],['<span class="db f5 pv3 fw6 h2">',"</span>"]),v=N(['<div>\n      <a href="','" target="_blank" class="','">\n        ','\n        <img src="','" alt="','" class="center db mv2 h5" />\n        ',"\n      </a>\n    </div>"],['<div>\n      <a href="','" target="_blank" class="','">\n        ','\n        <img src="','" alt="','" class="center db mv2 h5" />\n        ',"\n      </a>\n    </div>"]),m=N(['<div>\n      <a href="','" target="_blank" class="','">\n        ',"\n        ",'\n        <div class="h4 pv2">\n          <p class="f6" style="text-align: justify;">',"</p>\n          ","\n        </div>\n      </a>\n    </div>"],['<div>\n      <a href="','" target="_blank" class="','">\n        ',"\n        ",'\n        <div class="h4 pv2">\n          <p class="f6" style="text-align: justify;">',"</p>\n          ","\n        </div>\n      </a>\n    </div>"]),b=N(['<div>\n      <a href="','" target="_blank" class="','">\n        ',"\n        ",'\n        <div class="h4 pv2">\n          ',"\n        </div>\n      </a>\n    </div>"],['<div>\n      <a href="','" target="_blank" class="','">\n        ',"\n        ",'\n        <div class="h4 pv2">\n          ',"\n        </div>\n      </a>\n    </div>"]),g=N(['<div class="fl w-100 w-third-ns pa2">',"</div>"],['<div class="fl w-100 w-third-ns pa2">',"</div>"]),y=N(['<div class="mw9 center ph3-ns">\n    <div class="cf ph2-ns">',"</div>\n  </div>"],['<div class="mw9 center ph3-ns">\n    <div class="cf ph2-ns">',"</div>\n  </div>"]),w=N(['<div class="center f7 pv3 ph3">\n    ',"\n  </div>"],['<div class="center f7 pv3 ph3">\n    ',"\n  </div>"]),k=N(['<span\n        class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"\n        style="cursor:pointer;"\n        onclick=',"\n    >","</span>"],['<span\n        class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"\n        style="cursor:pointer;"\n        onclick=',"\n    >","</span>"]),x=N([" <a\n      href=",'\n      download="etpinard-cv.pdf"\n      class="f6 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"\n    >',"</a>"],[" <a\n      href=",'\n      download="etpinard-cv.pdf"\n      class="f6 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"\n    >',"</a>"]),j=N(['<div>\n    <div class="fixed flex tems-center justify-center pa4 w-100 bg-blue">\n      ',"\n      ",'\n    </div>\n    <div class="db">\n      <img src=',' alt="cv-','" class="center mt6" />\n    </div class="db">\n  </div>'],['<div>\n    <div class="fixed flex tems-center justify-center pa4 w-100 bg-blue">\n      ',"\n      ",'\n    </div>\n    <div class="db">\n      <img src=',' alt="cv-','" class="center mt6" />\n    </div class="db">\n  </div>']),A=N(["",""],["",""]),C=N(['<div style="background-color: ',';">\n      ',"\n      ",'\n      <div class="hero pa1">\n        ',"\n      </div>\n      ","\n    </div>"],['<div style="background-color: ',';">\n      ',"\n      ",'\n      <div class="hero pa1">\n        ',"\n      </div>\n      ","\n    </div>"]);function N(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var O=e("yo-yo"),T=e("query-string"),E=e("octicons"),S=e("is-mobile-device"),M=e("./data.yml"),L=["en","fr"],V=function(e){return-1!==L.indexOf(e)},P=function(){var e=(window.navigator.languages||[])[0];if("string"==typeof e){var n=e.substr(0,2);if(V(e))return n}return L[0]}(),D=function(){var e=T.parse(window.location.hash).lang;return V(e)?e:P},F=function(e){var n=e.split("\n\n"),t=function(e){if("@"!==e.charAt(0))return e;var n=e.substr(1),t=M[n],r=t.val,s=t.content||n;switch(t.type){case"link":return O(i,r,s);case"email":return O(o,M.email.val.split("").reverse().join(""));case"cv":return O(a,function(){window.location.hash=T.stringify({lang:D(),cv:!0})});case"str":return r}};return O(r,n.map(function(e){var n=e.split(/(\s|[.,!?])/);return O(r,n.map(t))}))},I=function(){var e=function(){var e=["pt1","pt2","","pb1","pb2"],n="etpinard".split("").map(function(n){return O(s,e[Math.floor(e.length*Math.random())],n)});return O(l,n)},n=function(e){return[P,L.filter(function(e){return e!==P})[0]].map(function(n){var t=n===D()?"bg-light-gray":"";return O(c,"f4 black bg-animate hover-bg-blue gno-underline pv1 ph2 br1 mh0 ba b--dark-blue",t,e,function(){window.location.hash=T.stringify({lang:n})},n)})},t=e(),r=n("dib dn-ns"),i=n("dn dib-ns");return setInterval(function(){return O.update(t,e())},2e3),O(u,t,i,r)},U=function(){var e,n,t,r,i,o=T.parse(window.location.hash).cv,a=document.getElementById("viewport");return o?(S&&a.setAttribute("content",M.viewport.cv),O(A,(t=D(),r="build/cv-"+t+".png",i="build/cv-"+t+".pdf",O(j,O(k,function(){window.location.hash=T.stringify({lang:t}),window.scroll(0,0)},{en:"Go back to site",fr:"Retour au site"}[t]),O(x,i,{en:"Download PDF",fr:"Télécharger en PDF"}[t]),r,t)))):(S&&a.setAttribute("content",M.viewport.home),O(C,M.colors.bg,I(),(n=M["intro-"+D()],O(d,F(n))),function(){var e=function(e){return new Date(e.date).getTime()},n="link black dim db pa2 br2 ba b--black-10 shadow-1",t={},r=function(e){var n=e.tags.map(function(e){return O(f,e)});return O(p,n)},i=function(e){return O(h,e)},o=function(e){var n=document.createElement("div");return n.innerHTML=E[e].toSVG({width:150,class:"center h4"}),n.firstChild.style.display="block",n.style["padding-top"]="45px",n.style["padding-bottom"]="45px",n};t.block=function(e){var t=M.block.val+"/"+e.id,o=e["name-"+D()],a=S?"build/thumbnail-"+e.id+".png":"build/preview-"+e.id+".gif";return O(v,t,n,i(o),a,o,r(e))},t.oss=function(e){var t=M.github.val+"/"+e.name,a=e["description-"+D()];return O(m,t,n,i(e.name),o("repo"),a,r(e))},t.gist=function(e){var t=M.gist.val+"/"+e.id,a=e["name-"+D()];return O(b,t,n,i(a),o("file-code"),r(e))};var a=M.posts.sort(function(n,t){return e(t)-e(n)}).map(function(e){return O(g,t[e.type](e))});return O(y,a)}(),(e=M["footer-"+D()],O(w,F(e)))))},_=U();document.body.appendChild(_),window.onhashchange=function(){O.update(_,U())}},{"./data.yml":20,"is-mobile-device":9,octicons:14,"query-string":16,"yo-yo":18}]},{},[21]);