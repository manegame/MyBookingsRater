!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e){t.exports='<svg viewBox="0 0 46 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%;"><title>Star</title><linearGradient id="none" x1="0" x2="100%" y1="0" y2="0"><stop offset="0%" stop-color="grey"></stop><stop offset="0%" stop-color="white"></stop></linearGradient><linearGradient id="half" x1="0" x2="100%" y1="0" y2="0"><stop offset="50%" stop-color="grey"></stop><stop offset="50%" stop-color="white"></stop></linearGradient><linearGradient id="full" x1="0" x2="100%" y1="0" y2="0"><stop offset="100%" stop-color="grey"></stop><stop offset="100%" stop-color="white"></stop></linearGradient><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon id="Star" class="star_svg none" fill="#D8D8D8" points="23 36 8.89315394 43.4164079 11.5873218 27.7082039 0.174643609 16.5835921 15.946577 14.2917961 23 0 30.053423 14.2917961 45.8253564 16.5835921 34.4126782 27.7082039 37.1068461 43.4164079"></polygon></g></svg>'},function(t,e,n){t.exports="<form id='MyBookingsRater' class='mb_rating'>\n  <div class='mb_rating__stars' id='MyBookingsStars' value='0'>\n    <div class='mb_rating__stars__star mb_rating__stars__star--1' value='1'>\n      "+n(0)+"\n    </div>\n    <div class='mb_rating__stars__star mb_rating__stars__star--2' value='2'>\n      "+n(0)+"\n    </div>\n    <div class='mb_rating__stars__star mb_rating__stars__star--3' value='3'>\n      "+n(0)+"\n    </div>\n    <div class='mb_rating__stars__star mb_rating__stars__star--4' value='4'>\n      "+n(0)+"\n    </div>\n    <div class='mb_rating__stars__star mb_rating__stars__star--5' value='5'>\n      "+n(0)+"\n    </div>\n  </div>\n  <p class='mb_rating__score'>\n    Your score: \n    <span id='MyBookingsScore' class='mb_rating__score--number'></span>\n  </p>\n  <input  id='MyBookingsSubmit'\n          type='submit'\n          value='submit'></input>\n</form>"},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,l=0,c=[],f=n(2);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(b(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function v(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),h(e,t.attrs),v(t,e),e}function h(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=l++;n=u||(u=g(e)),r=w.bind(null,n,s,!1),o=w.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(e,t.attrs),v(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}t&&d(p(t,e),e);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete i[a.id]}}}};var y,_=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".mb_rating {\n  border: 1px dotted cyan; }\n  .mb_rating__stars {\n    width: 100%;\n    height: 100%;\n    display: block; }\n    .mb_rating__stars__star {\n      width: 24px;\n      display: inline-block; }\n\n.star_svg {\n  stroke: black;\n  stroke-width: 1px;\n  stroke-linecap: round;\n  stroke-linejoin: round; }\n  .star_svg.none {\n    fill: url(#none); }\n  .star_svg.half {\n    fill: url(#half); }\n  .star_svg.full {\n    fill: url(#full); }\n",""])},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e){t.exports=e=window.fetch,e.default=window.fetch.bind(window),e.Headers=window.Headers,e.Request=window.Request,e.Response=window.Response},function(t,e,n){"use strict";var r=o(n(7));o(n(6));function o(t){return t&&t.__esModule?t:{default:t}}var i=n(1),s=void 0,a=!1;function u(t){var e=t.target.classList,n=t.target.getBoundingClientRect(),r=t.target.parentNode.parentNode.parentNode,o=document.getElementById("MyBookingsStars");a||("mousemove"===t.type?e.contains("star_svg")&&(t.clientX<n.x+n.width/2?(e.remove("none","full"),e.add("half"),o.setAttribute("value",Number(r.getAttribute("value")-.5))):(e.remove("none","half"),e.add("full"),o.setAttribute("value",Number(r.getAttribute("value"))))):"mouseout"===t.type&&e.contains("star_svg")&&t.clientX<n.x+n.width/2&&(e.remove("half"),e.add("none"),o.setAttribute("value",Number(r.getAttribute("value"))))),document.getElementById("MyBookingsScore").innerHTML=document.getElementById("MyBookingsStars").getAttribute("value")}function l(){a=!a}function c(){var t=document.getElementById("rater");return void 0===t||null===t?void 0:(t.innerHTML=i,document.getElementById("MyBookingsRater").addEventListener("submit",function(t){var e;t.preventDefault(),e={score:2*s,hotel_id:1},console.dir(e),(0,r.default)("https://api.mybookings.com/rate.php",{method:"POST",mode:"cors",body:JSON.stringify(e)}).catch(function(t){return console.error(t)}).then(function(t){return t.json()}).then(function(t){return console.log(t)})}),(0,r.default)("https://api.mybookings.com/json/rating.json").catch(function(t){return console.error(t)}).then(function(t){return t.json()}).then(function(t){console.log(t)}),t)}window.onload=function(){void 0===c()?console.log('MyBookings error. Please add `<div id="rater"></div>` where you want the template to show up'):(document.body.appendChild(c()),document.querySelectorAll(".mb_rating__stars__star").forEach(function(t){console.log("star ",t),t.addEventListener("mouseover",u),t.addEventListener("mousemove",u),t.addEventListener("mouseout",u),t.addEventListener("click",l)}))}}]);