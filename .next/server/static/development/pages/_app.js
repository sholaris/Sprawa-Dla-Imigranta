module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/css/main.css */ "./public/static/css/main.css");
/* harmony import */ var _public_static_css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_css_Navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/css/Navbar.css */ "./public/static/css/Navbar.css");
/* harmony import */ var _public_static_css_Navbar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_Navbar_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_css_Slider_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/static/css/Slider.css */ "./public/static/css/Slider.css");
/* harmony import */ var _public_static_css_Slider_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_Slider_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_css_JumboBanner_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/static/css/JumboBanner.css */ "./public/static/css/JumboBanner.css");
/* harmony import */ var _public_static_css_JumboBanner_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_JumboBanner_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_css_Home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/static/css/Home.css */ "./public/static/css/Home.css");
/* harmony import */ var _public_static_css_Home_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_Home_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_static_css_BlocksOptions_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/static/css/BlocksOptions.css */ "./public/static/css/BlocksOptions.css");
/* harmony import */ var _public_static_css_BlocksOptions_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_BlocksOptions_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_static_css_BreadCrumb_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/static/css/BreadCrumb.css */ "./public/static/css/BreadCrumb.css");
/* harmony import */ var _public_static_css_BreadCrumb_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_BreadCrumb_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_static_css_FoldersCards_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/static/css/FoldersCards.css */ "./public/static/css/FoldersCards.css");
/* harmony import */ var _public_static_css_FoldersCards_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_FoldersCards_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_static_css_Form_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/static/css/Form.css */ "./public/static/css/Form.css");
/* harmony import */ var _public_static_css_Form_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_Form_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_static_css_FormsList_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/static/css/FormsList.css */ "./public/static/css/FormsList.css");
/* harmony import */ var _public_static_css_FormsList_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_FormsList_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_static_css_Footer_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/static/css/Footer.css */ "./public/static/css/Footer.css");
/* harmony import */ var _public_static_css_Footer_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_Footer_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_static_css_ForumLink_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/static/css/ForumLink.css */ "./public/static/css/ForumLink.css");
/* harmony import */ var _public_static_css_ForumLink_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_ForumLink_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_static_css_Issue_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/static/css/Issue.css */ "./public/static/css/Issue.css");
/* harmony import */ var _public_static_css_Issue_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_Issue_css__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















function MyApp({
  Component,
  pageProps
}) {
  return __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./public/static/css/BlocksOptions.css":
/*!*********************************************!*\
  !*** ./public/static/css/BlocksOptions.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/static/css/BreadCrumb.css":
/*!******************************************!*\
  !*** ./public/static/css/BreadCrumb.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/static/css/FoldersCards.css":
/*!********************************************!*\
  !*** ./public/static/css/FoldersCards.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/static/css/Footer.css":
/*!**************************************!*\
  !*** ./public/static/css/Footer.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/static/css/Form.css":
/*!************************************!*\
  !*** ./public/static/css/Form.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/static/css/FormsList.css":
/*!*****************************************!*\
  !*** ./public/static/css/FormsList.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/static/css/ForumLink.css":
/*!*****************************************!*\
  !*** ./public/static/css/ForumLink.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/static/css/Home.css":
/*!************************************!*\
  !*** ./public/static/css/Home.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/static/css/Issue.css":
/*!*************************************!*\
  !*** ./public/static/css/Issue.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/static/css/JumboBanner.css":
/*!*******************************************!*\
  !*** ./public/static/css/JumboBanner.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/static/css/Navbar.css":
/*!**************************************!*\
  !*** ./public/static/css/Navbar.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/static/css/Slider.css":
/*!**************************************!*\
  !*** ./public/static/css/Slider.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/static/css/main.css":
/*!************************************!*\
  !*** ./public/static/css/main.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map