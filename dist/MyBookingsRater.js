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

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = exports = window.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = window.fetch.bind(window);\n\nexports.Headers = window.Headers;\nexports.Request = window.Request;\nexports.Response = window.Response;\n\n\n//# sourceURL=webpack:///./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _nodeFetch = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n\nvar _nodeFetch2 = _interopRequireDefault(_nodeFetch);\n\nvar _star = __webpack_require__(/*! ./star.svg */ \"./src/star.svg\");\n\nvar _star2 = _interopRequireDefault(_star);\n\nvar _widget = __webpack_require__(/*! ./widget.html */ \"./src/widget.html\");\n\nvar _widget2 = _interopRequireDefault(_widget);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar form = void 0,\n    submit = void 0;\n\nfunction submitRating() {\n\n  var userRating = document.getElementById('MyBookingsValue').value;\n\n  var userFormData = {\n    score: userRating * 2, // make base 10\n    hotel_id: 1\n  };\n\n  console.dir(userFormData);\n\n  (0, _nodeFetch2.default)('https://api.mybookings.com/rate.php', {\n    method: 'POST',\n    mode: 'cors',\n    body: JSON.stringify(userFormData)\n  }).catch(function (err) {\n    return console.error(err);\n  }).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    return console.log(json);\n  });\n}\n\nfunction rater() {\n\n  var raterElement = document.getElementById('rater');\n\n  if (raterElement === undefined || raterElement === null) {\n    return;\n  } else {\n\n    (0, _nodeFetch2.default)('https://api.mybookings.com/json/rating.json').catch(function (err) {\n      return console.error(err);\n    }).then(function (res) {\n      return res.json();\n    }).then(function (json) {\n      console.log(json);\n    });\n\n    raterElement.innerHTML = _widget2.default;\n    form = document.getElementById('MyBookingsRater');\n    form.addEventListener('submit', function (e) {\n      e.preventDefault();\n      submitRating();\n    });\n    return raterElement;\n  }\n}\n\nwindow.onload = function () {\n  if (typeof rater() === 'undefined') {\n    console.log('MyBookings error. Please add `<div id=\"rater\"></div>` where you want the widget to show up');\n  } else {\n    document.body.appendChild(rater());\n  }\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/star.svg":
/*!**********************!*\
  !*** ./src/star.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"Layer_1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 336 318.8\\\" style=\\\"enable-background:new 0 0 336 318.8;\\\" xml:space=\\\"preserve\\\"><style type=\\\"text/css\\\"> .starst0{fill:#FFFFFF;} .starst1{clip-path:url(#SVGID_5_);fill:#00C3FF;} </style><g><g><polygon id=\\\"SVGID_1_\\\" class=\\\"starst0 \\\" points=\\\"167.6,-1.1 207.2,120.8 335.3,120.8 231.6,196.1 271.2,318 167.5,242.7 63.9,317.9 103.5,196 -0.2,120.8 128,120.8 \\\"></polygon></g><g><defs><polygon id=\\\"SVGID_2_\\\" points=\\\"167.6,-1.1 207.2,120.8 335.3,120.8 231.6,196.1 271.2,318 167.5,242.7 63.9,317.9 103.5,196 -0.2,120.8 128,120.8 \\\"></polygon></defs><clipPath id=\\\"SVGID_3_\\\"><use xlink:href=\\\"#SVGID_2_\\\" style=\\\"overflow:visible;\\\"></use></clipPath></g><g><defs><polygon id=\\\"SVGID_4_\\\" points=\\\"167.6,-1.1 207.2,120.8 335.3,120.8 231.6,196.1 271.2,318 167.5,242.7 63.9,317.9 103.5,196 -0.2,120.8 128,120.8 \\\"></polygon></defs><clipPath id=\\\"SVGID_5_\\\"><use xlink:href=\\\"#SVGID_4_\\\" style=\\\"overflow:visible;\\\"></use></clipPath><rect y=\\\"-1.1\\\" class=\\\"starst1 \\\" width=\\\"335.3\\\" height=\\\"319.1\\\"></rect></g></g></svg>\"\n\n//# sourceURL=webpack:///./src/star.svg?");

/***/ }),

/***/ "./src/widget.html":
/*!*************************!*\
  !*** ./src/widget.html ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<form id=\\\"MyBookingsRater\\\">\\n  <input id=\\\"MyBookingsValue\\\" type=\\\"number\\\" step=\\\"0.5\\\" min=\\\"1\\\" max=\\\"5\\\">\\n  <input id=\\\"MyBookingsSubmit\\\" type=\\\"submit\\\" value=\\\"submit\\\"></input>\\n</form>\";\n\n//# sourceURL=webpack:///./src/widget.html?");

/***/ })

/******/ });