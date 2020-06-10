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

/***/ "+0Zo":
/***/ (function(module, exports) {



/***/ }),

/***/ "+Gi2":
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q4sD");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("U76G");
/* harmony import */ var _public_static_css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_css_Navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mFRs");
/* harmony import */ var _public_static_css_Navbar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_Navbar_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_css_Slider_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+Gi2");
/* harmony import */ var _public_static_css_Slider_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_Slider_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_css_JumboBanner_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2QQL");
/* harmony import */ var _public_static_css_JumboBanner_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_JumboBanner_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_css_Home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FP7H");
/* harmony import */ var _public_static_css_Home_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_Home_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_static_css_BlocksOptions_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("eBn9");
/* harmony import */ var _public_static_css_BlocksOptions_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_BlocksOptions_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_static_css_BreadCrumb_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Ib/w");
/* harmony import */ var _public_static_css_BreadCrumb_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_BreadCrumb_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_static_css_FoldersCards_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ozvp");
/* harmony import */ var _public_static_css_FoldersCards_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_FoldersCards_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_static_css_Form_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("+0Zo");
/* harmony import */ var _public_static_css_Form_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_Form_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_static_css_FormsList_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("C3su");
/* harmony import */ var _public_static_css_FormsList_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_FormsList_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_static_css_Footer_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("9pCE");
/* harmony import */ var _public_static_css_Footer_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_Footer_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_static_css_ForumLink_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("kVrV");
/* harmony import */ var _public_static_css_ForumLink_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_ForumLink_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_static_css_Issue_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("eTBf");
/* harmony import */ var _public_static_css_Issue_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_Issue_css__WEBPACK_IMPORTED_MODULE_14__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function MyApp({
  Component,
  pageProps
}) {
  return __jsx(Component, pageProps);
}

/***/ }),

/***/ "2QQL":
/***/ (function(module, exports) {



/***/ }),

/***/ "9pCE":
/***/ (function(module, exports) {



/***/ }),

/***/ "C3su":
/***/ (function(module, exports) {



/***/ }),

/***/ "FP7H":
/***/ (function(module, exports) {



/***/ }),

/***/ "Ib/w":
/***/ (function(module, exports) {



/***/ }),

/***/ "U76G":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eBn9":
/***/ (function(module, exports) {



/***/ }),

/***/ "eTBf":
/***/ (function(module, exports) {



/***/ }),

/***/ "kVrV":
/***/ (function(module, exports) {



/***/ }),

/***/ "mFRs":
/***/ (function(module, exports) {



/***/ }),

/***/ "ozvp":
/***/ (function(module, exports) {



/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ })

/******/ });