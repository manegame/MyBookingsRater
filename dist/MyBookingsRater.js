!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 336 318.8" style="enable-background:new 0 0 336 318.8;" xml:space="preserve"><style type="text/css"> .starst0{fill:#FFFFFF;} .starst1{clip-path:url(#SVGID_5_);fill:#00C3FF;} </style><g><g><polygon id="SVGID_1_" class="starst0 " points="167.6,-1.1 207.2,120.8 335.3,120.8 231.6,196.1 271.2,318 167.5,242.7 63.9,317.9 103.5,196 -0.2,120.8 128,120.8 "></polygon></g><g><defs><polygon id="SVGID_2_" points="167.6,-1.1 207.2,120.8 335.3,120.8 231.6,196.1 271.2,318 167.5,242.7 63.9,317.9 103.5,196 -0.2,120.8 128,120.8 "></polygon></defs><clipPath id="SVGID_3_"><use xlink:href="#SVGID_2_" style="overflow:visible;"></use></clipPath></g><g><defs><polygon id="SVGID_4_" points="167.6,-1.1 207.2,120.8 335.3,120.8 231.6,196.1 271.2,318 167.5,242.7 63.9,317.9 103.5,196 -0.2,120.8 128,120.8 "></polygon></defs><clipPath id="SVGID_5_"><use xlink:href="#SVGID_4_" style="overflow:visible;"></use></clipPath><rect y="-1.1" class="starst1 " width="335.3" height="319.1"></rect></g></g></svg>'},function(t,e,n){t.exports="<form id='MyBookingsRater'>\n  <div class='mb_rating'>\n    <div class='mb_rating__stars' id='stars'>\n      <div class='mb__rating__stars__star mb__rating__stars__star--1'>\n        "+n(0)+"\n      </div>\n      <div class='mb__rating__stars__star mb__rating__stars__star--2'>\n        "+n(0)+"\n      </div>\n      <div class='mb__rating__stars__star mb__rating__stars__star--3'>\n        "+n(0)+"\n      </div>\n      <div class='mb__rating__stars__star mb__rating__stars__star--4'>\n        "+n(0)+"\n      </div>\n      <div class='mb__rating__stars__star mb__rating__stars__star--5'>\n        "+n(0)+"\n      </div>\n    </div>\n  </div>\n  <input id='MyBookingsSubmit' type='submit' value='submit'></input>\n</form>"},function(t,e){t.exports=e=window.fetch,e.default=window.fetch.bind(window),e.Headers=window.Headers,e.Request=window.Request,e.Response=window.Response},function(t,e,n){"use strict";var r=i(n(2)),o=i(n(8));function i(t){return t&&t.__esModule?t:{default:t}}var s=n(1),a=void 0,c=void 0;function l(t){c=t.currentTarget.getAttribute("value");for(var e=0;e<a.length;e++)a[e].classList.remove("active");t.currentTarget.classList.add("active"),console.log(c)}function u(){console.log("styles ",o.default);var t=document.getElementById("rater");if(void 0!==t&&null!==t){t.innerHTML=s,document.getElementById("MyBookingsRater").addEventListener("submit",function(t){var e;t.preventDefault(),e={score:2*c,hotel_id:1},console.dir(e),(0,r.default)("https://api.mybookings.com/rate.php",{method:"POST",mode:"cors",body:JSON.stringify(e)}).catch(function(t){return console.error(t)}).then(function(t){return t.json()}).then(function(t){return console.log(t)})}),a=document.getElementsByClassName("mb_rating__score");for(var e=0;e<a.length;e++)a[e].addEventListener("click",l);return(0,r.default)("https://api.mybookings.com/json/rating.json").catch(function(t){return console.error(t)}).then(function(t){return t.json()}).then(function(t){console.log(t)}),t}}window.onload=function(){void 0===u()?console.log('MyBookings error. Please add `<div id="rater"></div>` where you want the template to show up'):document.body.appendChild(u())}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,l=0,u=[],f=n(4);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(b(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function v(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),_(e,t.attrs),v(t,e),e}function _(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=l++;n=c||(c=h(e)),r=w.bind(null,n,s,!1),o=w.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",_(e,t.attrs),v(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){g(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}t&&d(p(t,e),e);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var m,y=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"#MyBookingsRater {\n  background-color: blue; }\n  #MyBookingsRater .mb_rating {\n    background-color: red; }\n    #MyBookingsRater .mb_rating__stars {\n      display: block;\n      height: 400px; }\n      #MyBookingsRater .mb_rating__stars__star svg {\n        display: inline-block;\n        width: 24px;\n        height: auto; }\n",""])},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,o);r.locals&&(t.exports=r.locals)}]);