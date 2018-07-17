/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/assets/style/style.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/assets/style/style.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".mb_rating {\\n  -webkit-touch-callout: none;\\n  /* iOS Safari */\\n  -webkit-user-select: none;\\n  /* Safari */\\n  -khtml-user-select: none;\\n  /* Konqueror HTML */\\n  -moz-user-select: none;\\n  /* Firefox */\\n  -ms-user-select: none;\\n  /* Internet Explorer/Edge */\\n  user-select: none;\\n  /* Non-prefixed version, currently\\n                                supported by Chrome and Opera */\\n  cursor: pointer; }\\n  .mb_rating__stars {\\n    width: 100%;\\n    height: 100%;\\n    display: block; }\\n    .mb_rating__stars__star {\\n      width: 40px;\\n      display: inline-block; }\\n\\n.star_svg {\\n  stroke: none;\\n  stroke-linecap: round;\\n  stroke-linejoin: round; }\\n  .star_svg.none {\\n    fill: url(#none); }\\n  .star_svg.half {\\n    fill: url(#half); }\\n  .star_svg.full {\\n    fill: url(#full); }\\n\\n#none stop.end-color,\\n#half stop.end-color,\\n#full stop.end-color {\\n  stop-color: #f2f2f2; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/assets/style/style.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/html-loader/index.js?interpolate!./src/assets/template.html":
/*!*************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./src/assets/template.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<form id='MyBookingsForm' class='mb_rating'>\\n  <div class='mb_rating__stars' id='MyBookingsStars' value='0'>\\n    <div class='mb_rating__stars__star mb_rating__stars__star--1' value='1'>\\n      \" + __webpack_require__(/*! ./svg/star.svg */ \"./src/assets/svg/star.svg\") + \"\\n    </div>\\n    <div class='mb_rating__stars__star mb_rating__stars__star--2' value='2'>\\n      \" + __webpack_require__(/*! ./svg/star.svg */ \"./src/assets/svg/star.svg\") + \"\\n    </div>\\n    <div class='mb_rating__stars__star mb_rating__stars__star--3' value='3'>\\n      \" + __webpack_require__(/*! ./svg/star.svg */ \"./src/assets/svg/star.svg\") + \"\\n    </div>\\n    <div class='mb_rating__stars__star mb_rating__stars__star--4' value='4'>\\n      \" + __webpack_require__(/*! ./svg/star.svg */ \"./src/assets/svg/star.svg\") + \"\\n    </div>\\n    <div class='mb_rating__stars__star mb_rating__stars__star--5' value='5'>\\n      \" + __webpack_require__(/*! ./svg/star.svg */ \"./src/assets/svg/star.svg\") + \"\\n    </div>\\n  </div>\\n  <p class='mb_rating__score'>\\n    Average: \\n    <span id='MyBookingsAverage'\\n          class='mb_rating__score--number'></span>\\n    out of <span id='MyBookingsReviewcount'\\n    class='mb_rating__score--number'></span> reviews.\\n  </p>\\n</form>\";\n\n//# sourceURL=webpack:///./src/assets/template.html?./node_modules/html-loader?interpolate");

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = exports = window.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = window.fetch.bind(window);\n\nexports.Headers = window.Headers;\nexports.Request = window.Request;\nexports.Response = window.Response;\n\n\n//# sourceURL=webpack:///./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/assets/js/interaction.js":
/*!**************************************!*\
  !*** ./src/assets/js/interaction.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setStars = exports.lockRating = exports.hoverStar = undefined;\n\nvar _globals = __webpack_require__(/*! ../../globals */ \"./src/globals.js\");\n\nvar _service = __webpack_require__(/*! ./service */ \"./src/assets/js/service.js\");\n\nfunction setStars() {\n  if (!_globals.data.ratingLocked) {\n    // get rating and if it's close to half or full\n    var fullAmount = Math.floor(_globals.data.initialRating);\n    var restAmount = _globals.data.initialRating % fullAmount;\n    var restClass = void 0;\n\n    if (restAmount < 0.5) {\n      restClass = 'none';\n    } else {\n      restClass = 'half';\n    }\n\n    var container = document.getElementById('MyBookingsStars');\n    container.querySelectorAll('.star_svg').forEach(function (star, index) {\n      index += 1; // base 1\n      if (index <= fullAmount) {\n        star.classList.remove('none', 'half', 'full');\n        star.classList.add('full');\n      } else if (index === fullAmount + 1) {\n        star.classList.remove('none', 'half', 'full');\n        star.classList.add(restClass);\n      } else {\n        star.classList.remove('full', 'half');\n        star.classList.add('none');\n      }\n    });\n  }\n}\n\nfunction hoverStar(event) {\n  var classes = event.target.classList;\n  var rect = event.target.getBoundingClientRect();\n  var parent = event.target.parentNode.parentNode.parentNode;\n  var container = document.getElementById('MyBookingsStars'); // this is the mb_rating__stars element\n  var value = Number(parent.getAttribute('value'));\n\n  if (!_globals.data.ratingLocked) {\n    if (classes.contains('star_svg')) {\n      // hovered star\n      if (event.clientX < rect.x + rect.width / 2) {\n        classes.remove('none', 'full');\n        classes.add('half');\n        container.setAttribute('value', value - 0.5);\n      } else {\n        classes.remove('none', 'half');\n        classes.add('full');\n        container.setAttribute('value', value);\n      }\n      // left and right of hovered star\n      container.querySelectorAll('.star_svg').forEach(function (el) {\n        var childValue = el.parentNode.parentNode.parentNode.getAttribute('value');\n        var childClasses = el.classList;\n        if (childValue < value) {\n          childClasses.remove('none', 'half');\n          childClasses.add('full');\n        } else if (childValue > value) {\n          childClasses.remove('full', 'half');\n          childClasses.add('none');\n        }\n      });\n    }\n  }\n  setScore();\n}\n\nfunction setScore() {\n  _globals.data.userScore = Number(document.getElementById('MyBookingsStars').getAttribute('value'));\n}\n\nfunction lockRating() {\n  if (!_globals.data.ratingLocked) {\n    _globals.data.ratingLocked = true;\n    (0, _service.submitRating)();\n  } else {\n    // already voted\n  }\n}\n\nexports.hoverStar = hoverStar;\nexports.lockRating = lockRating;\nexports.setStars = setStars;\n\n//# sourceURL=webpack:///./src/assets/js/interaction.js?");

/***/ }),

/***/ "./src/assets/js/service.js":
/*!**********************************!*\
  !*** ./src/assets/js/service.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setInitialRating = exports.submitRating = undefined;\n\nvar _nodeFetch = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n\nvar _nodeFetch2 = _interopRequireDefault(_nodeFetch);\n\nvar _globals = __webpack_require__(/*! ../../globals */ \"./src/globals.js\");\n\nvar _interaction = __webpack_require__(/*! ./interaction */ \"./src/assets/js/interaction.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction updateRating(json) {\n  if (json) {\n    console.log('update rating', json);\n    _globals.data.initialRating = json.aggregateRating.ratingValue / 2;\n    _globals.data.reviewCount = json.aggregateRating.reviewCount;\n  } else {\n    console.log('nothing new, use old data');\n  }\n  // display\n  console.log('display rating');\n  var initalRatingElement = document.getElementById('MyBookingsAverage');\n  var reviewCountElement = document.getElementById('MyBookingsReviewcount');\n  initalRatingElement.innerHTML = _globals.data.initialRating;\n  reviewCountElement.innerHTML = _globals.data.reviewCount;\n  (0, _interaction.setStars)();\n}\n\nfunction submitRating() {\n  var userFormData = {\n    score: _globals.data.userScore * 2, // make base 10\n    hotel_id: 1\n  };\n\n  (0, _nodeFetch2.default)('https://api.mybookings.com/rate.php', {\n    method: 'POST',\n    mode: 'cors',\n    body: JSON.stringify(userFormData)\n  }).catch(function (err) {\n    return console.error(err);\n  }).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    return updateRating(json);\n  });\n}\n\nfunction setInitialRating() {\n  (0, _nodeFetch2.default)('https://api.mybookings.com/json/MyBookingsClient-' + _globals.data.hotelID + '.json').catch(function (err) {\n    return console.error(err);\n  }).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    return updateRating(json);\n  }).then((0, _interaction.setStars)());\n}\n\nexports.submitRating = submitRating;\nexports.setInitialRating = setInitialRating;\n\n//# sourceURL=webpack:///./src/assets/js/service.js?");

/***/ }),

/***/ "./src/assets/style/style.scss":
/*!*************************************!*\
  !*** ./src/assets/style/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/assets/style/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/assets/style/style.scss?");

/***/ }),

/***/ "./src/assets/svg/star.svg":
/*!*********************************!*\
  !*** ./src/assets/svg/star.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg viewBox=\\\"0 0 46 44\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" style=\\\"width: 100%; height: 100%;\\\"><title>Star</title><linearGradient id=\\\"none\\\" x1=\\\"0\\\" x2=\\\"100%\\\" y1=\\\"0\\\" y2=\\\"0\\\"><stop offset=\\\"0%\\\" class=\\\"start-color\\\" stop-color=\\\"#ffd460\\\"></stop><stop offset=\\\"0%\\\" class=\\\"end-color\\\" stop-color=\\\"white\\\"></stop></linearGradient><linearGradient id=\\\"half\\\" x1=\\\"0\\\" x2=\\\"100%\\\" y1=\\\"0\\\" y2=\\\"0\\\"><stop offset=\\\"50%\\\" class=\\\"start-color\\\" stop-color=\\\"#ffd460\\\"></stop><stop offset=\\\"50%\\\" class=\\\"end-color\\\" stop-color=\\\"white\\\"></stop></linearGradient><linearGradient id=\\\"full\\\" x1=\\\"0\\\" x2=\\\"100%\\\" y1=\\\"0\\\" y2=\\\"0\\\"><stop offset=\\\"100%\\\" class=\\\"start-color\\\" stop-color=\\\"#ffd460\\\"></stop><stop offset=\\\"100%\\\" class=\\\"end-color\\\" stop-color=\\\"white\\\"></stop></linearGradient><g id=\\\"Page-1\\\" stroke=\\\"none\\\" stroke-width=\\\"1\\\" fill=\\\"none\\\" fill-rule=\\\"evenodd\\\"><polygon id=\\\"Star\\\" class=\\\"star_svg none\\\" fill=\\\"#fff\\\" points=\\\"23 36 8.89315394 43.4164079 11.5873218 27.7082039 0.174643609 16.5835921 15.946577 14.2917961 23 0 30.053423 14.2917961 45.8253564 16.5835921 34.4126782 27.7082039 37.1068461 43.4164079\\\"></polygon></g></svg>\"\n\n//# sourceURL=webpack:///./src/assets/svg/star.svg?");

/***/ }),

/***/ "./src/globals.js":
/*!************************!*\
  !*** ./src/globals.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar data = {\n  raterElement: null,\n  hotelID: null,\n  initialRating: 0,\n  reviewCount: 0,\n  ratingLocked: false,\n  userScore: null\n};\n\nexports.data = data;\n\n//# sourceURL=webpack:///./src/globals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interaction = __webpack_require__(/*! ./assets/js/interaction */ \"./src/assets/js/interaction.js\");\n\nvar _service = __webpack_require__(/*! ./assets/js/service */ \"./src/assets/js/service.js\");\n\nvar _style = __webpack_require__(/*! ./assets/style/style.scss */ \"./src/assets/style/style.scss\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _template = __webpack_require__(/*! html-loader?interpolate!./assets/template.html */ \"./node_modules/html-loader/index.js?interpolate!./src/assets/template.html\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _globals = __webpack_require__(/*! ./globals */ \"./src/globals.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// gets added by webpack\nfunction rater() {\n  _globals.data.raterElement = document.getElementById('MyBookingsRater');\n  _globals.data.hotelID = _globals.data.raterElement.dataset.hotelId;\n\n  console.log('initializing rater for hotel ' + _globals.data.hotelID);\n\n  if (_globals.data.raterElement === undefined || _globals.data.raterElement === null) {\n    return;\n  } else {\n    _globals.data.raterElement.innerHTML = _template2.default;\n    return _globals.data.raterElement;\n  }\n}\n\nfunction addEventListeners() {\n  var stars = document.querySelectorAll('.mb_rating__stars__star');\n  var starContainer = document.getElementById('MyBookingsStars');\n  var form = document.getElementById('MyBookingsForm');\n\n  stars.forEach(function (star) {\n    // star.addEventListener('mouseover', hoverStar)\n    star.addEventListener('mousemove', _interaction.hoverStar);\n    star.addEventListener('click', _interaction.lockRating);\n  });\n  starContainer.addEventListener('mouseout', _interaction.setStars);\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    (0, _service.submitRating)();\n  });\n}\n\nwindow.onload = function () {\n  if (typeof rater() === 'undefined') {\n    console.log('MyBookings error. Please add `<div id=\"MyBookingsRater\" data-hotel-id=\"YOUR_HOTEL_ID\"></div>` where you want the rater to show up and make sure to replace YOUR_HOTEL_ID with the id provided to you by MyBookings');\n  } else {\n    document.body.appendChild(rater());\n    addEventListeners();\n    (0, _service.setInitialRating)();\n  }\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });