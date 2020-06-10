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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layouts/BaseLayout.js":
/*!******************************************!*\
  !*** ./components/Layouts/BaseLayout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\Layouts\\BaseLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Navigation = () => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    className: "navbar-container",
    bg: "dark-blue",
    expand: "lg",
    variant: "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Brand, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "SprawaDlaImigranta.pl"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, {
    id: "basic-navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Strona g\u0142\xF3wna"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/cudzoziemcy",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Katalog spraw"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/wnioski",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Wnioski"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "http://localhost:4000",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Forum"))));
};

const Footer = () => {
  return __jsx("div", {
    className: "footer-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "footer-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Strona g\u0142\xF3wna")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/cudzoziemcy",
    as: "cudzoziemcy",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "Za\u0142atw spraw\u0119")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/wnioski",
    as: "wnioski",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Wnioski")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Forum"))), __jsx("div", {
    className: "footer-copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "SprawaDlaImigranta.pl Wszelkie prawa zastrze\u017Cone.")));
};

const BaseLayout = ({
  children,
  title = "Sprawa Dla Imigranta"
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/styles.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, title), __jsx("script", {
    type: "text/javascript",
    src: "https://code.jquery.com/jquery-1.11.3.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  })), __jsx(Navigation, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, children), __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ }),

/***/ "./components/Layouts/FormsLayout.js":
/*!*******************************************!*\
  !*** ./components/Layouts/FormsLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layouts/BaseLayout */ "./components/Layouts/BaseLayout.js");
/* harmony import */ var _shared_Wnioski_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Wnioski/Tabs */ "./components/shared/Wnioski/Tabs.js");
/* harmony import */ var _shared_Wnioski_PhotoBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Wnioski/PhotoBanner */ "./components/shared/Wnioski/PhotoBanner.js");
/* harmony import */ var _shared_Wnioski_FormsMainContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Wnioski/FormsMainContent */ "./components/shared/Wnioski/FormsMainContent.js");
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\Layouts\\FormsLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class FormsLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", e => {
      this.setState({
        forms: e.target.id
      });
    });

    this.state = {
      forms: "do pobrania"
    };
  }

  render() {
    return __jsx(_Layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: this.props.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, __jsx(_shared_Wnioski_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClick: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }), __jsx(_shared_Wnioski_PhotoBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }), __jsx(_shared_Wnioski_FormsMainContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: this.handleChange,
      content: this.state.forms,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FormsLayout);

/***/ }),

/***/ "./components/shared/Walidacja/validateForm.js":
/*!*****************************************************!*\
  !*** ./components/shared/Walidacja/validateForm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
function validatePESEL(pesel) {
  const reg = /^[0-9]{11}$/;
  if (reg.test(pesel) == false) return false;else {
    var digits = ("" + pesel).split("");

    if (parseInt(pesel.substring(4, 6)) > 31 || parseInt(pesel.substring(2, 4)) > 12) {
      return false;
    }

    var checksum = (1 * parseInt(digits[0]) + 3 * parseInt(digits[1]) + 7 * parseInt(digits[2]) + 9 * parseInt(digits[3]) + 1 * parseInt(digits[4]) + 3 * parseInt(digits[5]) + 7 * parseInt(digits[6]) + 9 * parseInt(digits[7]) + 1 * parseInt(digits[8]) + 3 * parseInt(digits[9])) % 10;
    if (checksum == 0) checksum = 10;
    checksum = 10 - checksum;
    return parseInt(digits[10]) == checksum;
  }
}

function validateLength(length) {
  var reg = /^[0-9]{3}$/;
  if (!reg.test(length)) return false;else if (parseInt(length) > 251) return false;else return true;
}

function validateNumbers(data) {
  var reg = /^[0-9-]*$/;
  if (!reg.test(data)) return false;else return true;
}

function validate(values) {
  let errors = {};
  const empty_field_error = "Pole nie może być puste";
  const wrong_date_error = "Podaj datę z przeszłości";
  const wrong_postalcode_error = "Podaj kod pocztowy w formacie nn-nnn";
  const input_birthDate = new Date(values.birthDate);
  const input_docIssueDate = new Date(values.docIssueDate);
  const input_docExpiryDate = new Date(values.docExpiryDate);
  const input_visaIssueDate = new Date(values.visaIssueDate);
  const input_visaExpiryDate = new Date(values.visaExpiryDate);
  const input_resCardIssueDate = new Date(values.resCardIssueDate);
  const input_resCardExpiryDate = new Date(values.resCardExpiryDate);
  const input_spouseBirthDate = new Date(values.spouseBirthDate);
  const input_lastDateInPoland = new Date(values.lastDateInPoland);
  const input_decisionIssueDate = new Date(values.decisionIssueDate);
  const today = new Date();
  const regexp = /^[0-9]{2}(?:-[0-9]{3})?$/;

  for (var key in values) {
    if (values.hasOwnProperty(key)) {
      if (!values[key]) {
        errors[key] = empty_field_error;
      }
    }
  }

  if (input_birthDate >= today) {
    errors.birthDate = wrong_date_error;
  }

  if (input_docIssueDate >= today) {
    errors.docIssueDate = wrong_date_error;
  }

  if (input_docExpiryDate >= today) {
    errors.docExpiryDate = wrong_date_error;
  }

  if (!validateLength(values.length)) {
    errors.length = "Podaj poprawną wartość";
  }

  if (!values.length) {
    errors.length = empty_field_error;
  }

  if (values.pesel) {
    if (!validatePESEL(values.pesel)) {
      errors.pesel = "Prodaj poprawny numer PESEL";
    }
  }

  if (!values.pesel) {
    errors.pesel = "";
  }

  if (!regexp.test(values.resPostalCode)) {
    errors.resPostalCode = wrong_postalcode_error;
  }

  if (!validateNumbers(values.resHomeNumber)) {
    errors.resHomeNumber = "Podaj poprawną wartość";
  }

  if (!validateNumbers(values.resApartmentNumber)) {
    errors.resApartmentNumber = "Podaj poprawną wartość";
  }

  if (!values.spouseBirthDate) {
    errors.spouseBirthDate = "";
  }

  if (values.spouseBirthDate && input_spouseBirthDate >= today) {
    errors.spouseBirthDate = wrong_date_error;
  }

  if (!validateNumbers(values.spouseHomeNumber)) {
    errors.spouseHomeNumber = "Podaj poprawną wartość";
  }

  if (!values.spouseHomeNumber) {
    errors.spouseHomeNumber = "";
  }

  if (!validateNumbers(values.spouseApartmentNumber)) {
    errors.spouseApartmentNumber = "Podaj poprawną wartość";
  }

  if (!values.spouseApartmentNumber) {
    errors.spouseApartmentNumber = "";
  }

  if (!regexp.test(values.spousePostalCode)) {
    errors.spousePostalCode = wrong_postalcode_error;
  }

  if (!values.spousePostalCode) {
    errors.spousePostalCode = "";
  }

  if (input_visaIssueDate >= today) {
    errors.visaIssueDate = wrong_date_error;
  }

  if (!values.visaIssueDate) {
    errors.visaIssueDate = "";
  }

  if (input_visaExpiryDate >= today) {
    errors.visaExpiryDate = wrong_date_error;
  }

  if (!values.visaExpiryDate) {
    errors.visaExpiryDate = "";
  }

  if (input_lastDateInPoland >= today) {
    errors.lastDateInPoland = wrong_date_error;
  }

  if (!values.lastDateInPoland) {
    errors.lastDateInPoland = "";
  }

  if (input_resCardIssueDate >= today) {
    errors.resCardIssueDate = wrong_date_error;
  }

  if (!values.resCardIssueDate) {
    errors.resCardIssueDate = "";
  }

  if (input_resCardExpiryDate >= today) {
    errors.resCardExpiryDate = wrong_date_error;
  }

  if (!values.resCardExpiryDate) {
    errors.resCardExpiryDate = "";
  }

  if (input_decisionIssueDate >= today) {
    errors.decisionIssueDate = wrong_date_error;
  }

  if (!values.decisionIssueDate) {
    errors.decisionIssueDate = "";
  }

  return errors;
}

/***/ }),

/***/ "./components/shared/Walidacja/validateForm2.js":
/*!******************************************************!*\
  !*** ./components/shared/Walidacja/validateForm2.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
function validatePostalCode(postal_code) {
  const reg = /^[0-9]{2}(?:-[0-9]{3})?$/;
  if (!reg.test(postal_code)) return false;else return true;
}

function validatePESEL(pesel) {
  const reg = /^[0-9]{11}$/;
  if (reg.test(pesel) == false) return false;else {
    var digits = ("" + pesel).split("");

    if (parseInt(pesel.substring(4, 6)) > 31 || parseInt(pesel.substring(2, 4)) > 12) {
      return false;
    }

    var checksum = (1 * parseInt(digits[0]) + 3 * parseInt(digits[1]) + 7 * parseInt(digits[2]) + 9 * parseInt(digits[3]) + 1 * parseInt(digits[4]) + 3 * parseInt(digits[5]) + 7 * parseInt(digits[6]) + 9 * parseInt(digits[7]) + 1 * parseInt(digits[8]) + 3 * parseInt(digits[9])) % 10;
    if (checksum == 0) checksum = 10;
    checksum = 10 - checksum;
    return parseInt(digits[10]) == checksum;
  }
}

function validateLength(length) {
  var reg = /^[0-9]{3}$/;
  if (!reg.test(length)) return false;else if (parseInt(length) > 251) return false;else return true;
}

function validateNumbers(data) {
  var reg = /^[0-9-]*$/;
  if (!reg.test(data)) return false;else return true;
}

function validate(values) {
  let errors = {};
  const empty_field_error = "Pole nie może być puste";
  const wrong_date_error = "Podaj datę z przeszłości";
  const wrong_postalcode_error = "Podaj kod pocztowy w formacie nn-nnn";
  const wrong_number_values_error = "Podaj poprawną wartość";
  const today = new Date();
  const input_birthDate = new Date(values.birthDate);
  const input_lastDateInPoland = new Date(values.lastDateInPoland);
  const input_FirstMemberBirthDate = new Date(values.FirstMemberBirthDate);
  const input_SecondMemberBirthDate = new Date(values.SecondMemberBirthDate);
  const input_ThirdMemberBirthDate = new Date(values.ThirdMemberBirthDate);

  for (var key in values) {
    if (values.hasOwnProperty(key)) {
      if (!values[key]) {
        errors[key] = empty_field_error;
      }
    }
  }

  if (input_birthDate >= today) {
    errors.birthDate = wrong_date_error;
  }

  if (!validatePostalCode(values.resPostalCode)) {
    errors.resPostalCode = wrong_postalcode_error;
  }

  if (input_FirstMemberBirthDate >= today) {
    errors.FirstMemberBirthDate = wrong_date_error;
  }

  if (!values.FirstMemberBirthDate) {
    errors.FirstMemberBirthDate = "";
  }

  if (input_SecondMemberBirthDate >= today) {
    errors.SecondMemberBirthDate = wrong_date_error;
  }

  if (!values.SecondMemberBirthDate) {
    errors.SecondMemberBirthDate = "";
  }

  if (input_ThirdMemberBirthDate >= today) {
    errors.ThirdMemberBirthDate = wrong_date_error;
  }

  if (!values.ThirdMemberBirthDate) {
    errors.ThirdMemberBirthDate = "";
  }

  if (input_lastDateInPoland >= today) {
    errors.lastDateInPoland = wrong_date_error;
  }

  if (!values.lastDateInPoland) {
    errors.lastDateInPoland = "";
  }

  if (!validateLength(values.length)) {
    errors.length = wrong_number_values_error;
  }

  if (!values.length) {
    errors.length = empty_field_error;
  }

  if (values.pesel) {
    if (!validatePESEL(values.pesel)) {
      errors.pesel = "Prodaj poprawny numer PESEL";
    }
  }

  if (!validateNumbers(values.resHomeNumber)) {
    errors.resHomeNumber = wrong_number_values_error;
  }

  if (!validateNumbers(values.resApartmentNumber)) {
    errors.resApartmentNumber = wrong_number_values_error;
  }

  return errors;
}

/***/ }),

/***/ "./components/shared/Wnioski/Annexes.js":
/*!**********************************************!*\
  !*** ./components/shared/Wnioski/Annexes.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\Annexes.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Annexes = () => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Za\u0142\u0105czniki do wniosku")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "annexes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Annexes);

/***/ }),

/***/ "./components/shared/Wnioski/AuthhoritySelection.js":
/*!**********************************************************!*\
  !*** ./components/shared/Wnioski/AuthhoritySelection.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\AuthhoritySelection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AuthoritySelection = () => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, "Wniosek skierowany do"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Wojewoda Dolno\u015Bl\u0105ski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Wojewoda Kujawsko-Pomorski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Wojewoda Lubuski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Wojewoda Lubelski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Wojewoda Mazowiecki"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Wojewoda Ma\u0142opolski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Wojewoda Opolski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "Wojewoda Podkarpacki"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Wojewoda Podlaski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Wojewoda Warmi\u0144sko-Mazurski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Wojewoda Pomorski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Wojewoda Wielkopolski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Wojewoda Zachodniopomorski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Wojewoda \u0141\xF3dzki"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Wojewoda \u015Al\u0105ski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Wojewoda \u015Awi\u0119tokrzyski")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "* pole jest wymagane"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AuthoritySelection);

/***/ }),

/***/ "./components/shared/Wnioski/ButtonGenPDF.js":
/*!***************************************************!*\
  !*** ./components/shared/Wnioski/ButtonGenPDF.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\ButtonGenPDF.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ButtonPDF = () => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    className: "btn-lg pdf",
    variant: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Generuj PDF"));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonPDF);

/***/ }),

/***/ "./components/shared/Wnioski/Form.js":
/*!*******************************************!*\
  !*** ./components/shared/Wnioski/Form.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useForm */ "./components/shared/Wnioski/useForm.js");
/* harmony import */ var _Walidacja_validateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Walidacja/validateForm */ "./components/shared/Walidacja/validateForm.js");
/* harmony import */ var _FormHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormHeader */ "./components/shared/Wnioski/FormHeader.js");
/* harmony import */ var _AuthhoritySelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthhoritySelection */ "./components/shared/Wnioski/AuthhoritySelection.js");
/* harmony import */ var _SectionA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SectionA */ "./components/shared/Wnioski/SectionA.js");
/* harmony import */ var _SectionB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SectionB */ "./components/shared/Wnioski/SectionB.js");
/* harmony import */ var _SectionC__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SectionC */ "./components/shared/Wnioski/SectionC.js");
/* harmony import */ var _SectionF__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SectionF */ "./components/shared/Wnioski/SectionF.js");
/* harmony import */ var _Annexes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Annexes */ "./components/shared/Wnioski/Annexes.js");
/* harmony import */ var _ButtonGenPDF__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ButtonGenPDF */ "./components/shared/Wnioski/ButtonGenPDF.js");
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\Form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const initialState = {
  surname: "",
  familyName: "",
  name1: "",
  fathersName: "",
  motherName: "",
  mothersMaidenName: "",
  birthDate: "",
  sex: "",
  birthPlace: "",
  birthCountry: "",
  nationality: "",
  citizenShip: "",
  maritalStatus: "",
  education: "",
  practisedProffesion: "",
  length: "",
  eyesColour: "",
  specialMarks: "",
  pesel: "",
  docSerie: "",
  docNumber: "",
  docIssueDate: "",
  docExpiryDate: "",
  docAuthority: "",
  docOthers: "",
  resDistrict: "",
  resMunicipality: "",
  resCity: "",
  resStreet: "",
  resHomeNumber: "",
  resApartmentNumber: "",
  resPostalCode: "",
  spouseSurname: "",
  spousesName1: "",
  spouseBirthDate: "",
  spouseSex: "",
  spouseCitizenShip: "",
  spouseCity: "",
  spouseStreet: "",
  spouseHomeNumber: "",
  spouseApartmentNumber: "",
  spousePostalCode: "",
  spouseCountry: "",
  lastDateInPoland: "",
  visaIssueDate: "",
  visaExpiryDate: "",
  decisionIssueDate: "",
  resCardIssueDate: "",
  resCardExpiryDate: "",
  custodyInPoland: "",
  sentencedInPoland: "",
  sentencedDesc: "",
  penalInPoland: "",
  penalDesc: "",
  complyWithFiscus: "",
  justification: ""
};

const SectionD = ({
  values,
  errors,
  handleChange
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "D. Informacje dodatkowe")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "I. Dane dotycz\u0105ce ma\u0142\u017Conka")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "1. Nazwisko")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "spouseSurname",
    value: values.spouseSurname,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "* pole jest wymagane")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "2. Imi\u0119 (imiona)")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "spouseName1",
    value: values.spousesName1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "* pole jest wymagane")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "spouseName2",
    value: values.spousesName2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "3. Imi\u0119 (imiona) poprzednie")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "spousePreviousName1",
    value: values.spousesPreviousName1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "spousePreviousName2",
    value: values.spousesPreviousName2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "4. Nazwisko(a) poprzednie")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "spousePreviousSurname1",
    value: values.spousesPreviousSurname1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "spousePreviousSurname2",
    value: values.spousesPreviousSurname2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, "5. Data urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 6,
    lg: 3,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.spouseBirthDate && "input-error"} `,
    type: "date",
    name: "spouseBirthDate",
    value: values.spouseBirthDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.spouseBirthDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, errors.spouseBirthDate)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title sex",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, "6. P\u0142e\u0107")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 4,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "M\u0119\u017Cczyzna",
    name: "spouseSex",
    values: "M",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 4,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Kobieta",
    name: "spouseSex",
    values: "K",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, "* pole jest wymagane")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, "7. Obywatelstwo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "spouseCitizenShip",
    value: values.spouseCitizenShip,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, "* pole jest wymagane")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, "8. Miejsce zamieszkania")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, "Miasto")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "spouseCity",
    value: values.spouseCity,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  }, "* pole jest wymagane")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, "Ulica")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "spouseStreet",
    value: values.spouseStreet,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, "* pole jest wymagane")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "three-inputs",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    lg: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 19
    }
  }, "Numer domu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.spouseHomeNumber && "error-input"}`,
    type: "text",
    name: "spouseHomeNumber",
    value: values.spouseHomeNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.spouseHomeNumber && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, errors.spouseHomeNumber))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 19
    }
  }, "Numer mieszkania")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.spouseApartmentNumber && "error-input"}`,
    type: "text",
    name: "spouseApartmentNumber",
    value: values.spouseApartmentNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.spouseApartmentNumber && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 21
    }
  }, errors.spouseApartmentNumber))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 19
    }
  }, "Kod pocztowy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.spousePostalCode && "error-input"}`,
    type: "text",
    maxLength: 6,
    placeholder: "nn-nnn",
    name: "spousePostalCode",
    value: values.spousePostalCode,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.spousePostalCode && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 21
    }
  }, errors.spousePostalCode))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 13
    }
  }, "Pa\u0144stwo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "spouseCountry",
    value: values.spouseCountry,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }, "* pole jest wymagane")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 9
    }
  }, "II. Pobyt cudzoziemca na terytorium Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 9
    }
  }, "a) poprzednie pobyty na terytorium Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "previousStays",
    value: values.previousStays,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 9
    }
  }, "b) aktualny pobyt na terytorium Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 13
    }
  }, "1. Czy przebywa Pan (Pani) na terytorium Rzeczpospolitej Polskiej?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Tak",
    value: "Y",
    id: "stayInPoland1",
    name: "stayInPoland",
    value: values.stayInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Nie",
    value: "N",
    id: "stayInPoland2",
    name: "stayInPoland",
    value: values.stayInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 13
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 13
    }
  }, "2. Prosz\u0119 poda\u0107 dat\u0119 ostatniego wjazdu Pana (Pani) na terytorium Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.lastDateInPoland && "input-error"}`,
    type: "date",
    name: "lastDateInPoland",
    value: values.lastDateInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 13
    }
  }), errors.lastDateInPoland && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 15
    }
  }, errors.lastDateInPoland)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 13
    }
  }, "3. W jakim celu?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "purposeInPoland",
    value: values.purposeInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 13
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 9
    }
  }, "4. Na jakiej podstawie?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "1)ruchu bezwizowego",
    name: "groundOfStay1",
    value: values.groundOfStay1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "2)wizy",
    name: "groundOfStay2",
    value: values.groundOfStay2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "3)zezwolenia na pobyt czasowy",
    name: "groundOfStay3",
    value: values.groundOfStay3,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "4)statusu uchod\u017Acy, ochrony mi\u0119dzynarodowej, zgody na pobyt ze wzgl\u0119d\xF3w humanitarnych",
    name: "groundOfStay4",
    value: values.groundOfStay4,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "5)zgody na pobyt tolerowany",
    name: "groundOfStay5",
    value: values.groundOfStay5,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "6)azylu",
    name: "groundOfStay6",
    value: values.groundOfStay6,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "7)dokumentu uprawniaj\u0105cego do wjazdu i pobytu wydanego przez inne pa\u0144stwo obszaru Schengen",
    name: "groundOfStay7",
    value: values.groundOfStay7,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 9
    }
  }, "Typ wizy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "typeOfVisa",
    value: values.typeOfVisa,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 8,
    md: 4,
    lg: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 15
    }
  }, "Seria wizy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "visaSerie",
    value: values.visaSerie,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 15
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 15
    }
  }, "Numer wizy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "visaNumber",
    value: values.visaNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 15
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 15
    }
  }, "Data wydania wizy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.visaIssueDate && "input-error"}`,
    type: "date",
    name: "visaIssueDate",
    value: values.visaIssueDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 15
    }
  }), errors.visaIssueDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 17
    }
  }, errors.visaIssueDate))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 15
    }
  }, "Data up\u0142ywu wa\u017Cno\u015Bci wizy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.visaExpiryDate && "input-error"}`,
    type: "date",
    name: "visaExpiryDate",
    value: values.visaExpiryDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 15
    }
  }), errors.visaExpiryDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 17
    }
  }, errors.visaExpiryDate))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 8,
    md: 4,
    lg: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 15
    }
  }, "Okres pobytu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    maxLength: 3,
    name: "periodOfStay",
    value: values.periodOfStay,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 15
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 15
    }
  }, "Organ wydaj\u0105cy dokument ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 41
    }
  }), "wizy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "visaAuthority",
    value: values.visaAuthority,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 15
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 9
    }
  }, "Organ wydaj\u0105cy decyzj\u0119")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "decisionAuthority",
    value: values.decisionAuthority,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 9
    }
  }, "Data wydania decyzji")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.decisionIssueDate && "input-error"}`,
    type: "date",
    name: "decisionIssueDate",
    value: values.decisionIssueDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 9
    }
  }), errors.decisionIssueDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 11
    }
  }, errors.decisionIssueDate)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 9
    }
  }, "Karta pobytu lub dokument uprawniaj\u0105cy do wjazdu i pobytu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 8,
    md: 4,
    lg: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 15
    }
  }, "Seria dokumentu"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "resCardSerie",
    value: values.resCardSerie,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 15
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 15
    }
  }, "Numer dokumentu"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "resCardNumber",
    value: values.resCardNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620,
      columnNumber: 15
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 15
    }
  }, "Data wydania ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 30
    }
  }), "dokumentu"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resCardIssueDate && "input-error"}`,
    type: "date",
    name: "resCardIssueDate",
    value: values.resCardIssueDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 15
    }
  }), errors.resCardIssueDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 17
    }
  }, errors.resCardIssueDate))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 15
    }
  }, "Data up\u0142ywu wa\u017Cno\u015Bci dokumentu"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resCardExpiryDate && "input-error"}`,
    type: "date",
    name: "resCardExpiryDate",
    value: values.resCardExpiryDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 15
    }
  }), errors.resCardExpiryDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 17
    }
  }, errors.resCardExpiryDate))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 9
    }
  }, "Organ wydaj\u0105cy dokument")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "resCardAuthority",
    value: values.resCardAuthority,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 9
    }
  }, "III. Podr\xF3\u017Ce cudzoziemca i pobyty zagraniczne poza terytorium Rzeczpospolitej Polskiej w okresie ostatnich 5 lat (pa\u0144stwo, okres pobytu)")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "travelsAndStays",
    value: values.travelsAndStays,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 9
    }
  }, "IV. Czy jest Pan (Pani) zatrzymany (-na), umieszczony (-na) w strze\u017Conym o\u015Brodku lub w areszcie dla cudzoziemc\xF3w lub czy zosta\u0142 wobec Pana (Pani) zastosowany \u015Brodek zapobiegawczy w postaci zakazu opuszczania kraju lub odbywa Pan (Pani) kar\u0119 pozbawienia wolno\u015Bci lub zastosowano wobec Pani (Pana) tymczasowe aresztowanie?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "custodyInPoland",
    value: values.custodyInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711,
      columnNumber: 9
    }
  }, "* pole jest wymagane"), errors.custodyInPoland && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 11
    }
  }, errors.custodyInPoland)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 9
    }
  }, "V. Czy by\u0142(a) Pan (Pani) karany (-na) s\u0105downie na terytorium Rzeczypospolitej Polskiej?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 3,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Tak",
    value: "Y",
    id: "sentencedInPoland1",
    name: "sentencedInPoland",
    value: values.sentencedInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Nie",
    value: "N",
    id: "sentencedInPoland2",
    name: "sentencedInPoland",
    value: values.sentencedInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
      columnNumber: 9
    }
  }, "* pole jest wymagane"), errors.sentencedDesc && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
      columnNumber: 11
    }
  }, errors.sentencedDesc)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 9
    }
  }, "Kiedy, za jaki czyn, jaki zapad\u0142 wyrok i czy zosta\u0142 wykonany?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "sentencedDesc",
    value: values.sentencedDesc,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 9
    }
  }, "VI. Czy toczy si\u0119 przeciwko Panu (Pani) post\u0119powanie karne lub post\u0119powanie w sprawach o wykroczenia na terytorium Rzeczypospolitej Polskiej?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 3,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Tak",
    value: "Y",
    id: "penalInPolan1",
    name: "penalInPoland",
    value: values.penalInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Nie",
    value: "N",
    id: "penalInPolan2",
    name: "penalInPoland",
    value: values.penalInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 9
    }
  }, "* pole jest wymagane"), errors.penalInPoland && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 11
    }
  }, errors.penalInPoland)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792,
      columnNumber: 9
    }
  }, "Jakie?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "penalDesc",
    value: values.penalDesc,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804,
      columnNumber: 9
    }
  }, "VII. Czy wywi\u0105zuje si\u0119 Pan (Pani) z zobowi\u0105za\u0144 podatkowych wobec Skarbu Pa\u0144stwa?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 3,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Tak",
    value: "Y",
    id: "complyWithFiscal1",
    name: "complyWithFiscal",
    value: values.complyWithFiscus,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Nie",
    value: "N",
    id: "complyWithFiscal2",
    name: "complyWithFiscal",
    value: values.complyWithFiscus,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 819,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 9
    }
  }, "* pole jest wymagane"), errors.complyWithFiscus && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 11
    }
  }, errors.complyWithFiscus)));
};

const InteractiveForm = props => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors
  } = Object(_useForm__WEBPACK_IMPORTED_MODULE_2__["default"])(submit, _Walidacja_validateForm__WEBPACK_IMPORTED_MODULE_3__["default"], initialState);

  function submit() {
    console.log("Form submitted successfuly!");
  }

  return __jsx("div", {
    className: "gray-box forms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit,
    noValidate: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 13
    }
  }, __jsx(_FormHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: props.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 15
    }
  }), __jsx(_AuthhoritySelection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854,
      columnNumber: 15
    }
  }), __jsx(_SectionA__WEBPACK_IMPORTED_MODULE_6__["default"], {
    values: values,
    errors: errors,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855,
      columnNumber: 15
    }
  }), __jsx(_SectionB__WEBPACK_IMPORTED_MODULE_7__["default"], {
    values: values,
    errors: errors,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860,
      columnNumber: 15
    }
  }), __jsx(_SectionC__WEBPACK_IMPORTED_MODULE_8__["default"], {
    values: values,
    errors: errors,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 865,
      columnNumber: 15
    }
  }), __jsx(SectionD, {
    values: values,
    errors: errors,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870,
      columnNumber: 15
    }
  }), __jsx(_SectionF__WEBPACK_IMPORTED_MODULE_9__["default"], {
    values: values,
    errors: errors,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 875,
      columnNumber: 15
    }
  }), __jsx(_Annexes__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880,
      columnNumber: 15
    }
  }), __jsx(_ButtonGenPDF__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (InteractiveForm);

/***/ }),

/***/ "./components/shared/Wnioski/Form1.js":
/*!********************************************!*\
  !*** ./components/shared/Wnioski/Form1.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useForm */ "./components/shared/Wnioski/useForm.js");
/* harmony import */ var _Walidacja_validateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Walidacja/validateForm */ "./components/shared/Walidacja/validateForm.js");
/* harmony import */ var _FormHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormHeader */ "./components/shared/Wnioski/FormHeader.js");
/* harmony import */ var _AuthhoritySelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthhoritySelection */ "./components/shared/Wnioski/AuthhoritySelection.js");
/* harmony import */ var _SectionA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SectionA */ "./components/shared/Wnioski/SectionA.js");
/* harmony import */ var _SectionB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SectionB */ "./components/shared/Wnioski/SectionB.js");
/* harmony import */ var _SectionC__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SectionC */ "./components/shared/Wnioski/SectionC.js");
/* harmony import */ var _SectionF__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SectionF */ "./components/shared/Wnioski/SectionF.js");
/* harmony import */ var _Annexes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Annexes */ "./components/shared/Wnioski/Annexes.js");
/* harmony import */ var _ButtonGenPDF__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ButtonGenPDF */ "./components/shared/Wnioski/ButtonGenPDF.js");
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\Form1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const initialState = {
  surname: "",
  familyName: "",
  name1: "",
  fathersName: "",
  motherName: "",
  mothersMaidenName: "",
  birthDate: "",
  sex: "",
  birthPlace: "",
  birthCountry: "",
  nationality: "",
  citizenShip: "",
  maritalStatus: "",
  education: "",
  practisedProffesion: "",
  length: "",
  eyesColour: "",
  specialMarks: "",
  pesel: "",
  docSerie: "",
  docNumber: "",
  docIssueDate: "",
  docExpiryDate: "",
  docAuthority: "",
  docOthers: "",
  resDistrict: "",
  resMunicipality: "",
  resCity: "",
  resStreet: "",
  resHomeNumber: "",
  resApartmentNumber: "",
  resPostalCode: "",
  lastDateInPoland: "",
  visaIssueDate: "",
  visaExpiryDate: "",
  decisionIssueDate: "",
  resCardIssueDate: "",
  resCardExpiryDate: "",
  custodyInPoland: "",
  sentencedInPoland: "",
  sentencedDesc: "",
  penalInPoland: "",
  penalDesc: "",
  complyWithFiscus: "",
  justification: ""
};

const FamilyMember = ({
  number
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title-bold",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "Cz\u0142onek ", number, ":")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 8,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Imi\u0119 i nazwisko")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 12,
    lg: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 8,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Stopie\u0144 pokrewie\u0144stwa")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 12,
    lg: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 8,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "Obywatelstwo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 12,
    lg: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 8,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "Miejsce zamieszkania")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 12,
    lg: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 8,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "Data urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 12,
    lg: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 8,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "P\u0142e\u0107")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 12,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    name: "sex",
    value: "M",
    label: "M\u0119\u017Cczyzna",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 12,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    name: "sex",
    value: "K",
    label: "Kobieta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  })))));
};

const SectionD = ({
  values,
  errors,
  handleChange
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, "D. Informacje dodatkowe")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, "I. Pobyt cudzoziemca na terytorium Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, "a) poprzednie pobyty na terytorium Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "previousStays",
    value: values.previousStays,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, "b) aktualny pobyt na terytorium Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, "1. Czy przebywa Pan (Pani) na terytorium Rzeczpospolitej Polskiej?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Tak",
    value: "Y",
    id: "stayInPoland1",
    name: "stayInPoland",
    value: values.stayInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Nie",
    value: "N",
    id: "stayInPoland2",
    name: "stayInPoland",
    value: values.stayInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, "2. Prosz\u0119 poda\u0107 dat\u0119 ostatniego wjazdu Pana (Pani) na terytorium Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.lastDateInPoland && "input-error"}`,
    type: "date",
    name: "lastDateInPoland",
    value: values.lastDateInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }), errors.lastDateInPoland && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }, errors.lastDateInPoland)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, "3. W jakim celu?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "purposeInPoland",
    value: values.purposeInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }, "4. Na jakiej podstawie?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "1)ruchu bezwizowego",
    name: "groundOfStay1",
    value: values.groundOfStay1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "2)wizy",
    name: "groundOfStay2",
    value: values.groundOfStay2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "3)zezwolenia na pobyt czasowy",
    name: "groundOfStay3",
    value: values.groundOfStay3,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "4)statusu uchod\u017Acy, ochrony mi\u0119dzynarodowej, zgody na pobyt ze wzgl\u0119d\xF3w humanitarnych",
    name: "groundOfStay4",
    value: values.groundOfStay4,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "5)zgody na pobyt tolerowany",
    name: "groundOfStay5",
    value: values.groundOfStay5,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "6)azylu",
    name: "groundOfStay6",
    value: values.groundOfStay6,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "7)dokumentu uprawniaj\u0105cego do wjazdu i pobytu wydanego przez inne pa\u0144stwo obszaru Schengen",
    name: "groundOfStay7",
    value: values.groundOfStay7,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 9
    }
  }, "Typ wizy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "typeOfVisa",
    value: values.typeOfVisa,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 8,
    md: 4,
    lg: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 15
    }
  }, "Seria wizy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "visaSerie",
    value: values.visaSerie,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 15
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 15
    }
  }, "Numer wizy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "visaNumber",
    value: values.visaNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 15
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 15
    }
  }, "Data wydania wizy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.visaIssueDate && "input-error"}`,
    type: "date",
    name: "visaIssueDate",
    value: values.visaIssueDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 15
    }
  }), errors.visaIssueDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 17
    }
  }, errors.visaIssueDate))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 15
    }
  }, "Data up\u0142ywu wa\u017Cno\u015Bci wizy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.visaExpiryDate && "input-error"}`,
    type: "date",
    name: "visaExpiryDate",
    value: values.visaExpiryDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 15
    }
  }), errors.visaExpiryDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 17
    }
  }, errors.visaExpiryDate))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 8,
    md: 4,
    lg: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 15
    }
  }, "Okres pobytu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    maxLength: 3,
    name: "periodOfStay",
    value: values.periodOfStay,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 15
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 15
    }
  }, "Organ wydaj\u0105cy dokument ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 41
    }
  }), "wizy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "visaAuthority",
    value: values.visaAuthority,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 15
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 9
    }
  }, "Organ wydaj\u0105cy decyzj\u0119")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "decisionAuthority",
    value: values.decisionAuthority,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 9
    }
  }, "Data wydania decyzji")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.decisionIssueDate && "input-error"}`,
    type: "date",
    name: "decisionIssueDate",
    value: values.decisionIssueDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 9
    }
  }), errors.decisionIssueDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 11
    }
  }, errors.decisionIssueDate)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 9
    }
  }, "Karta pobytu lub dokument uprawniaj\u0105cy do wjazdu i pobytu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 8,
    md: 4,
    lg: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 15
    }
  }, "Seria dokumentu"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "resCardSerie",
    value: values.resCardSerie,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 15
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 15
    }
  }, "Numer dokumentu"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "resCardNumber",
    value: values.resCardNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 15
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 15
    }
  }, "Data wydania ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 30
    }
  }), "dokumentu"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resCardIssueDate && "input-error"}`,
    type: "date",
    name: "resCardIssueDate",
    value: values.resCardIssueDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 15
    }
  }), errors.resCardIssueDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 17
    }
  }, errors.resCardIssueDate))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 15
    }
  }, "Data up\u0142ywu wa\u017Cno\u015Bci dokumentu"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resCardExpiryDate && "input-error"}`,
    type: "date",
    name: "resCardExpiryDate",
    value: values.resCardExpiryDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 15
    }
  }), errors.resCardExpiryDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 17
    }
  }, errors.resCardExpiryDate))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 9
    }
  }, "Organ wydaj\u0105cy dokument")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "resCardAuthority",
    value: values.resCardAuthority,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 9
    }
  }, "II. Podr\xF3\u017Ce cudzoziemca i pobyty zagraniczne poza terytorium Rzeczpospolitej Polskiej w okresie ostatnich 5 lat (pa\u0144stwo, okres pobytu)")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "travelsAndStays",
    value: values.travelsAndStays,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 9
    }
  }, "III. Pobyt na terytorium innych pa\u0144stw cz\u0142onkowskich Unii Europejskiej na podstawie dokumentu pobytowego z adnotacj\u0105 \u201ENiebieska Karta UE\u201D wydanego przez inne ni\u017C Polska pa\u0144stwo cz\u0142onkowskie Unii Europejskiej oraz przerwy w tym pobycie (pa\u0144stwo, okres pobytu, seria, nr i okres wa\u017Cno\u015Bci dokumentu pobytowego z adnotacj\u0105 \u201ENiebieska Karta UE\u201D, pa\u0144stwo, kt\xF3re wyda\u0142o ten dokument, oraz okresy przerw w pobycie na terytorium Unii Europejskiej)")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "stayOnOtherTeritory",
    value: values.stayOnOtherTeritory,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 9
    }
  }, "IV. Zezwolenie na pobyt rezydenta d\u0142ugoterminowego Unii Europejskiej udzielone w innym pa\u0144stwie cz\u0142onkowskim Unii Europejskiej (kraj, data udzielenia, organ udzielaj\u0105cy)")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "longTermPermit",
    value: values.longTermPermit,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 9
    }
  }, "V. \u0179r\xF3d\u0142o dochodu wystarczaj\u0105cego do pokrycia koszt\xF3w utrzymania wnioskodawcy i cz\u0142onk\xF3w rodziny pozostaj\u0105cych na jego utrzymaniu oraz wysoko\u015B\u0107 dochodu w ci\u0105gu ostatnich 3 lat, a w przypadku cudzoziemca posiadaj\u0105cego zezwolenie na pobyt czasowy w celu wykonywania pracy w zawodzie wymagaj\u0105cym wysokich kwalifikacji, o kt\xF3rym mowa w art. 212 ust. 1 pkt 1 ustawy z dnia 12 grudnia 2013 r. o cudzoziemcach, w ci\u0105gu ostatnich 2 lat")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "sourceOfIncome",
    value: values.sourceOfIncome,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 9
    }
  }, "Liczba os\xF3b pozostaj\u0105cych na utrzymaniu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 8,
    md: 4,
    lg: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    maxLength: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 9
    }
  }, "VI. Cz\u0142onkowie rodziny cudzoziemca obecnie pozostaj\u0105cy na jego utrzymaniu, zamieszkuj\u0105cy na terytorium Rzeczypospolitej Polskiej")), __jsx(FamilyMember, {
    number: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 7
    }
  }), __jsx(FamilyMember, {
    number: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 7
    }
  }), __jsx(FamilyMember, {
    number: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 7
    }
  }), __jsx(FamilyMember, {
    number: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 7
    }
  }), __jsx(FamilyMember, {
    number: "5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 7
    }
  }), __jsx(FamilyMember, {
    number: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 7
    }
  }), __jsx(FamilyMember, {
    number: "7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 9
    }
  }, "VII. Posiadane ubezpieczenie zdrowotne")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "medicalInsurance",
    value: values.medicalInsurance,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 9
    }
  }, "VIII. Czy jest Pan (Pani) zatrzymany (-na), umieszczony (-na) w strze\u017Conym o\u015Brodku lub w areszcie dla cudzoziemc\xF3w lub czy zosta\u0142 wobec Pana (Pani) zastosowany \u015Brodek zapobiegawczy w postaci zakazu opuszczania kraju lub odbywa Pan (Pani) kar\u0119 pozbawienia wolno\u015Bci lub zastosowano wobec Pani (Pana) tymczasowe aresztowanie?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "custodyInPoland",
    value: values.custodyInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 9
    }
  }, "* pole jest wymagane"), errors.custodyInPoland && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 11
    }
  }, errors.custodyInPoland)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 9
    }
  }, "XI. Czy by\u0142(a) Pan (Pani) karany (-na) s\u0105downie na terytorium Rzeczypospolitej Polskiej?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 3,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Tak",
    value: "Y",
    id: "sentencedInPoland1",
    name: "sentencedInPoland",
    value: values.sentencedInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Nie",
    value: "N",
    id: "sentencedInPoland2",
    name: "sentencedInPoland",
    value: values.sentencedInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 9
    }
  }, "* pole jest wymagane"), errors.sentencedInPoland && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666,
      columnNumber: 11
    }
  }, errors.sentencedInPoland)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 9
    }
  }, "Kiedy, za jaki czyn, jaki zapad\u0142 wyrok i czy zosta\u0142 wykonany?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "sentencedDesc",
    value: values.sentencedDesc,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 9
    }
  }), errors.sentencedDesc && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 11
    }
  }, errors.sentencedDesc)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 9
    }
  }, "X. Czy toczy si\u0119 przeciwko Panu (Pani) post\u0119powanie karne lub post\u0119powanie w sprawach o wykroczenia na terytorium Rzeczypospolitej Polskiej?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 3,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Tak",
    value: "Y",
    id: "penalInPolan1",
    name: "penalInPoland",
    value: values.penalInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Nie",
    value: "N",
    id: "penalInPolan2",
    name: "penalInPoland",
    value: values.penalInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 9
    }
  }, "* pole jest wymagane"), errors.penalInPoland && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 11
    }
  }, errors.penalInPoland)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 9
    }
  }, "Jakie?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "penalDesc",
    value: values.penalDesc,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 9
    }
  })));
};

const InteractiveForm = props => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors
  } = Object(_useForm__WEBPACK_IMPORTED_MODULE_2__["default"])(submit, _Walidacja_validateForm__WEBPACK_IMPORTED_MODULE_3__["default"], initialState);

  function submit() {
    console.log("Form submitted successfuly!");
  }

  return __jsx("div", {
    className: "gray-box forms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit,
    noValidate: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 13
    }
  }, __jsx(_FormHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: props.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749,
      columnNumber: 15
    }
  }), __jsx(_AuthhoritySelection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750,
      columnNumber: 15
    }
  }), __jsx(_SectionA__WEBPACK_IMPORTED_MODULE_6__["default"], {
    values: values,
    errors: errors,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751,
      columnNumber: 15
    }
  }), __jsx(_SectionB__WEBPACK_IMPORTED_MODULE_7__["default"], {
    values: values,
    errors: errors,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756,
      columnNumber: 15
    }
  }), __jsx(_SectionC__WEBPACK_IMPORTED_MODULE_8__["default"], {
    values: values,
    errors: errors,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 15
    }
  }), __jsx(SectionD, {
    values: values,
    errors: errors,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766,
      columnNumber: 15
    }
  }), __jsx(_SectionF__WEBPACK_IMPORTED_MODULE_9__["default"], {
    values: values,
    errors: errors,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
      columnNumber: 15
    }
  }), __jsx(_Annexes__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 15
    }
  }), __jsx(_ButtonGenPDF__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (InteractiveForm);

/***/ }),

/***/ "./components/shared/Wnioski/Form2.js":
/*!********************************************!*\
  !*** ./components/shared/Wnioski/Form2.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useForm */ "./components/shared/Wnioski/useForm.js");
/* harmony import */ var _Walidacja_validateForm2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Walidacja/validateForm2 */ "./components/shared/Walidacja/validateForm2.js");
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\Form2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const initialState = {
  surname: "",
  previousName1: "",
  previousName2: "",
  familyName: "",
  name1: "",
  name2: "",
  previousName1: "",
  previousName2: "",
  fathersName: "",
  mothersName: "",
  mothersMaidenName: "",
  birthDate: "",
  sex: "",
  birthPlace: "",
  birthCountry: "",
  nationality: "",
  citizenShip: "",
  maritalStatus: "",
  education: "",
  lenght: "",
  eyesColour: "",
  specialMarks: "",
  pesel: "",
  phoneNumber: "",
  email: "",
  resInPoland: "",
  resCity: "",
  resStreet: "",
  resHomeNumber: "",
  resApartmentNumber: "",
  resPostalCode: "",
  goalOfStay1: "",
  goalOfStay2: "",
  goalOfStay3: "",
  goalOfStay4: "",
  goalOfStay5: "",
  goalOfStay6: "",
  goalOfStay7: "",
  goalOfStay8: "",
  goalOfStay9: "",
  goalOfStay10: "",
  goalOfStay11: "",
  goalOfStay12: "",
  goalOfStay13: "",
  goalOfStay14: "",
  goalOfStay15: "",
  goalOfStay16: "",
  goalOfStayDesc: "",
  FirstMemberFullName: "",
  FirstMemberBirthDate: "",
  FirstMemberCitizenShip: "",
  FirstMemberResPlace: "",
  FirstMemberKinshipDegree: "",
  FirstMembersex: "",
  FirstMemberWantPermit: "",
  FirstMemberIsSupporting: "",
  SecondMemberFullName: "",
  SecondMemberBirthDate: "",
  SecondMemberCitizenShip: "",
  SecondMemberResPlace: "",
  SecondMemberKinshipDegree: "",
  SecondMembersex: "",
  SecondMemberWantPermit: "",
  SecondMemberIsSupporting: "",
  ThirdMemberFullName: "",
  ThirdMemberBirthDate: "",
  ThirdMemberCitizenShip: "",
  ThirdMemberResPlace: "",
  ThirdMemberKinshipDegree: "",
  ThirdMembersex: "",
  ThirdMemberWantPermit: "",
  ThirdMemberIsSupporting: "",
  previousStays: "",
  stayInPoland: "",
  lastDateInPoland: "",
  purposeInPoland: "",
  groundOfStay1: "",
  groundOfStay2: "",
  groundOfStay3: "",
  groundOfStay4: "",
  travelsAndStays: "",
  financialMeans: "",
  medicalInsurance: "",
  custodyInPoland: "",
  sentencedInPoland: "",
  sentencedDesc: "",
  penalInPoland: "",
  penalDesc: "",
  obligations: "",
  obligationsDesc: ""
};

const InteractiveForm = props => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors
  } = Object(_useForm__WEBPACK_IMPORTED_MODULE_2__["default"])(submit, _Walidacja_validateForm2__WEBPACK_IMPORTED_MODULE_3__["default"], initialState);

  function submit() {
    console.log("Form submitted successfuly!");
  }

  return __jsx("div", {
    className: "gray-box forms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit,
    noValidate: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "form-header",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("hr", {
    className: "form-title-separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 19
    }
  }, props.title), __jsx("hr", {
    className: "form-title-separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, "Wniosek skierowany do"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 23
    }
  }, "Wojewoda Dolno\u015Bl\u0105ski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 23
    }
  }, "Wojewoda Kujawsko-Pomorski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 23
    }
  }, "Wojewoda Lubuski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 23
    }
  }, "Wojewoda Lubelski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 23
    }
  }, "Wojewoda Mazowiecki"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 23
    }
  }, "Wojewoda Ma\u0142opolski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 23
    }
  }, "Wojewoda Opolski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 23
    }
  }, "Wojewoda Podkarpacki"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 23
    }
  }, "Wojewoda Podlaski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 23
    }
  }, "Wojewoda Warmi\u0144sko-Mazurski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 23
    }
  }, "Wojewoda Pomorski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 23
    }
  }, "Wojewoda Wielkopolski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 23
    }
  }, "Wojewoda Zachodniopomorski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 23
    }
  }, "Wojewoda \u0141\xF3dzki"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 23
    }
  }, "Wojewoda \u015Al\u0105ski"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 23
    }
  }, "Wojewoda \u015Awi\u0119tokrzyski")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, "* pole jest wymagane")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }, "A. Dane osobowe cudzoziemca")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 23
    }
  }, "1. Nazwisko")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.surname && "input-error"}`,
    type: "text",
    name: "surname",
    value: values.surname,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.surname && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 25
    }
  }, errors.surname)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 23
    }
  }, "2. Nazwisko(a) poprzednie")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "previousSurname1",
    value: values.previousSurname1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 23
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "previousSurname2",
    value: values.previousSurname2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 23
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 23
    }
  }, "3. Nazwisko rodowe")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.familyName && "input-error"}`,
    type: "text",
    name: "familyName",
    value: values.familyName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.familyName && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 25
    }
  }, errors.familyName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 23
    }
  }, "4. Imi\u0119 (imiona)")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.name1 && "input-error"}`,
    type: "text",
    name: "name1",
    value: values.name1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.name1 && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 25
    }
  }, errors.name1)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "name2",
    value: values.name2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 23
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 23
    }
  }, "5. Imi\u0119 (imiona) poprzednie")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "previousName1",
    value: values.previousName1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 23
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "previousName2",
    value: values.previousName2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 23
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 23
    }
  }, "6. Imi\u0119 ojca")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.fathersName && "input-error"}`,
    type: "text",
    name: "fathersName",
    value: values.fathersName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.fathersName && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 25
    }
  }, errors.fathersName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 23
    }
  }, "7. Imi\u0119 matki")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.mothersName && "input-error"}`,
    type: "text",
    name: "mothersName",
    value: values.mothersName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.mothersName && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 25
    }
  }, errors.mothersName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 23
    }
  }, "8. Nazwisko rodowe matki")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.mothersMaidenName && "input-error"}`,
    type: "text",
    name: "mothersMaidenName",
    value: values.mothersMaidenName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.mothersMaidenName && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 25
    }
  }, errors.mothersMaidenName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 23
    }
  }, "9. Data urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 6,
    lg: 3,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.birthDate && "input-error"}`,
    name: "birthDate",
    value: values.birthDate,
    onChange: handleChange,
    type: "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.birthDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 25
    }
  }, errors.birthDate)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title sex",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 23
    }
  }, "10. P\u0142e\u0107")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 4,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "M\u0119\u017Cczyzna",
    name: "sex",
    value: "M",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 23
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 4,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Kobieta",
    name: "sex",
    value: "K",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.sex && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 38
    }
  }, errors.sex)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 23
    }
  }, "11. Miejsce urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.birthPlace && "input-error"}`,
    type: "text",
    name: "birthPlace",
    value: values.birthPlace,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.birthPlace && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 25
    }
  }, errors.birthPlace)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 23
    }
  }, "12. Pa\u0144stwo urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.birthCountry && "input-error"}`,
    type: "text",
    name: "birthCountry",
    value: values.birthCountry,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.birthCountry && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 25
    }
  }, errors.birthCountry)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 23
    }
  }, "13. Narodowo\u015B\u0107")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.nationality && "input-error"}`,
    type: "text",
    name: "nationality",
    value: values.nationality,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.nationality && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 25
    }
  }, errors.nationality)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 23
    }
  }, "14. Obywatelstwo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.citizenShip && "input-error"}`,
    type: "text",
    name: "citizenShip",
    value: values.citizenShip,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.citizenShip && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 25
    }
  }, errors.citizenShip)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 23
    }
  }, "15. Stan cywilny")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.maritalStatus && "input-error"}`,
    type: "text",
    name: "maritalStatus",
    value: values.maritalStatus,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.maritalStatus && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 25
    }
  }, errors.maritalStatus)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 23
    }
  }, "16. Wykszta\u0142cenie")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.education && "input-error"}`,
    type: "text",
    name: "education",
    value: values.education,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.education && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 25
    }
  }, errors.education)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 23
    }
  }, "17. Rysopis")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    s: 8,
    md: 4,
    lg: 2,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 25
    }
  }, "Wzrost")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 8,
    md: 4,
    lg: 2,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.length && "input-error"}`,
    type: "text",
    name: "length",
    value: values.length,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 25
    }
  }, "* pole jest wymagane"), errors.lenght && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 27
    }
  }, errors.lenght)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    s: 8,
    md: 4,
    lg: 2,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 25
    }
  }, "Kolor oczu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.eyesColour && "input-error"}`,
    type: "text",
    name: "eyesColour",
    value: values.eyesColour,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 25
    }
  }, "* pole jest wymagane"), errors.eyesColour && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 27
    }
  }, errors.eyesColour)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    s: 8,
    md: 4,
    lg: 2,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 25
    }
  }, "Znaki szczeg\xF3lne")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.specialMarks && "input-error"}`,
    type: "text",
    name: "specialMarks",
    value: values.specialMarks,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 25
    }
  }, "* pole jest wymagane"), errors.specialMarks && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 27
    }
  }, errors.specialMarks))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 23
    }
  }, "18. Numer PESEL")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.pesel && "input-error"}`,
    type: "text",
    name: "pesel",
    value: values.pesel,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.pesel && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 25
    }
  }, errors.pesel)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 23
    }
  }, "19. Numer telefonu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "phoneNumber",
    value: values.phoneNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 23
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 23
    }
  }, "20. Adres email")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "email",
    name: "email",
    value: values.email,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 23
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 19
    }
  }, "B. Miejsce pobytu cudzoziemca")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    name: "resInPoland",
    value: "X",
    type: "checkbox",
    label: "* Prosze zaznaczy\u0107 znakiem 'X', je\u017Celi cz\u0142onek rodziny przebywa na terytorium Rzeczpospolitej Polskiej",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 23
    }
  }, "1. Wojew\xF3dztwo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 23
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 23
    }
  }, "* pole jest wymagane")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 23
    }
  }, "2. Miejscowo\u015B\u0107")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resCity && "input-error"}`,
    type: "text",
    name: "resCity",
    value: values.resCity,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.resCity && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 25
    }
  }, errors.resCity)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 23
    }
  }, "3. Ulica")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resStreet && "input-error"}`,
    type: "text",
    name: "resStreet",
    value: values.resStreet,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.resStreet && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 25
    }
  }, errors.resStreet)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "three-inputs",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    lg: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 29
    }
  }, "4. Numer domu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resHomeNumber && "input-error"}`,
    type: "text",
    name: "resHomeNumber",
    value: values.resHomeNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 29
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 29
    }
  }, "* pole jest wymagane"), errors.resHomeNumber && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 31
    }
  }, errors.resHomeNumber))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 29
    }
  }, "5. Numer mieszkania")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resApartmentNumber && "input-error"}`,
    type: "text",
    name: "resApartmentNumber",
    value: values.resApartmentNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 29
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665,
      columnNumber: 29
    }
  }, "* pole jest wymagane"), errors.resApartmentNumber && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667,
      columnNumber: 31
    }
  }, errors.resApartmentNumber))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 29
    }
  }, "6. Kod pocztowy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resPostalCode && "input-error"}`,
    type: "text",
    placeholder: "nn-nnn",
    name: "resPostalCode",
    value: values.resPostalCode,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 29
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 29
    }
  }, "* pole jest wymagane"), errors.resPostalCode && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 31
    }
  }, errors.resPostalCode)))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 19
    }
  }, "C. Informacje dodatkowe")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 19
    }
  }, "I. G\u0142\xF3wny cel pobytu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "warning-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709,
      columnNumber: 19
    }
  }, "Uwaga! Nale\u017Cy wybra\u0107 tylko jeden cel pobytu na terytorium Rzeczpospolitej Polskiej.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "1)wykonywanie pracy",
    value: "goalOfStay1",
    name: "goalOfStay1",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "2)wykonywanie pracy w zawodzie wymagaj\u0105cym wysokich kwalifikacji",
    name: "goalOfStay2",
    value: "goalOfStay2",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "3)wykonywanie pracy przez cudzoziemca delegowanego przez pracodawc\u0119 zagranicznego na terytorium Rzeczpospolitej Polskiej",
    value: "goalOfStay3",
    name: "goalOfStay3",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "4)prowdzenie dzia\u0142alno\u015Bci gospodarczej",
    name: "goalOfStay4",
    value: "goalOfStay4",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "5)podj\u0119cie lub kontynuacja stacjonarnych studi\xF3w pierwszego stopnia, studi\xF3w drugiego stopnia lub jednolitych studi\xF3w magisterskich albo kszta\u0142cenie si\u0119 w szkole doktorskiej",
    name: "goalOfStay5",
    value: "goalOfStay5",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "6)prowadzenie bada\u0144 naukowych lub prac rozwojowych",
    name: "goalOfStay6",
    value: "goalOfStay6",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "7)mobilno\u015B\u0107 d\u0142ugoterminowa naukowca",
    name: "goalOfStay7",
    value: "goalOfStay7",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "8)odbycie sta\u017Cu",
    name: "goalOfStay8",
    value: "goalOfStay8",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "9)udzia\u0142 w porgramie wolontariatu europejskiego",
    name: "goalOfStay9",
    value: "goalOfStay9",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "10)pobyt z obywatelem Rzeczpospolitej Polskiej",
    name: "goalOfStay10",
    value: "goalOfStay10",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "11)pobyt z cudzoziemcem",
    name: "goalOfStay11",
    value: "goalOfStay11",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "12)mobilno\u015B\u0107 d\u0142ugoterminowa cz\u0142onka rodziny naukowca",
    name: "goalOfStay12",
    value: "goalOfStay12",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "13)okoliczno\u015Bci zwi\u0105zane z byciem ofiar\u0105 handlu lud\u017Ami",
    name: "goalOfStay13",
    value: "goalOfStay13",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "14)okoliczno\u015Bci wymagaj\u0105ce kr\xF3tkotrwa\u0142ego pobytu na terytorium Rzeczpospolitej Polskiej",
    name: "goalOfStay14",
    value: "goalOfStay14",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "15)przed\u0142u\u017Cenie pobytu na terytorium Rzeczpospolitej Polskiej ze wzgl\u0119du na prac\u0119 sezonow\u0105",
    name: "goalOfStay15",
    value: "goalOfStay15",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "16)inne okoliczno\u015Bci",
    name: "goalOfStay16",
    value: "goalOfStay16",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857,
      columnNumber: 19
    }
  }, "*pole jest wymagane")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    name: "goalOfStayDesc",
    value: values.goalOfStayDesc,
    onChange: handleChange,
    rows: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869,
      columnNumber: 19
    }
  }, "II. Cz\u0142onkowie rodziny cudzoziemca zamieszkuj\u0105cy na terytorium Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 875,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876,
      columnNumber: 19
    }
  }, "1. Pierwszy cz\u0142onek rodziny")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 882,
      columnNumber: 25
    }
  }, "Imi\u0119 i nazwisko")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "firstMemberFullName",
    value: values.firstMemberFullName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 885,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 25
    }
  }, "P\u0142e\u0107")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "M\u0119\u017Cczyzna",
    name: "firstMembersex",
    value: "M",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Kobieta",
    name: "firstMembersex",
    value: "K",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916,
      columnNumber: 25
    }
  }, "Data urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 918,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.FirstMemberBirthDate && "input-error"} `,
    name: "FirstMemberBirthDate",
    value: values.firstMemberBirthDate,
    onChange: handleChange,
    type: "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 919,
      columnNumber: 25
    }
  }), errors.FirstMemberBirthDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 929,
      columnNumber: 27
    }
  }, errors.FirstMemberBirthDate))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 936,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 937,
      columnNumber: 25
    }
  }, "Stopie\u0144 pokrewie\u0144stwa")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 939,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "firstMemberKinshipDegree",
    value: values.firstMemberKinshipDegree,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 940,
      columnNumber: 25
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 954,
      columnNumber: 25
    }
  }, "Obywatelstwo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "firstMemberCitizenShip",
    value: values.firstMemberCitizenShip,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 25
    }
  }, "Miejsce zamieszkania")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 970,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "firstMemberResPlace",
    value: values.firstMemberResPlace,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971,
      columnNumber: 27
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 980,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
      columnNumber: 25
    }
  }, "Czy ubiega si\u0119 o udzielenie zezwolenia na pobyt czasowy?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 987,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "firstMemberWantPermit",
    value: values.firstMemberWantPermit,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 996,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998,
      columnNumber: 25
    }
  }, "Czy pozostaje na utrzymaniu cudzoziemca?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "firstMemberIsSupporting",
    value: values.firstMemberIsSupporting,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003,
      columnNumber: 25
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015,
      columnNumber: 19
    }
  }, "2. Drugi cz\u0142onek rodziny")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 25
    }
  }, "Imi\u0119 i nazwisko")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1023,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "SecondMemberFullName",
    value: values.SecondMemberFullName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1024,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1032,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 25
    }
  }, "P\u0142e\u0107")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "M\u0119\u017Cczyzna",
    name: "SecondMemberSex",
    value: "M",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1037,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Kobieta",
    name: "SecondMemberSex",
    value: "K",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1044,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1053,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1054,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 25
    }
  }, "Data urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1057,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.SecondMemberBirthDate && "input-error"} `,
    type: "date",
    name: "SecondMemberBirthDate",
    value: values.SecondMemberBirthDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1058,
      columnNumber: 25
    }
  }), errors.SecondMemberBirthDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068,
      columnNumber: 27
    }
  }, errors.SecondMemberBirthDate))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1074,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1075,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1076,
      columnNumber: 25
    }
  }, "Stopie\u0144 pokrewie\u0144stwa")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1078,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "SecondMemberKinshipDegree",
    value: values.SecondMemberKinshipDegree,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079,
      columnNumber: 25
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1089,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1090,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1091,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1092,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1093,
      columnNumber: 25
    }
  }, "Obywatelstwo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1095,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "SecondMemberCitizenShip",
    value: values.SecondMemberCitizenShip,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1096,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1104,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1105,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1106,
      columnNumber: 25
    }
  }, "Miejsce zamieszkania")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1108,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1109,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "SecondMemberResPlace",
    value: values.SecondMemberResPlace,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1110,
      columnNumber: 27
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1119,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1120,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1121,
      columnNumber: 25
    }
  }, "Czy ubiega si\u0119 o udzielenie zezwolenia na pobyt czasowy?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1126,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "SecondMemberWantPermit",
    value: values.SecondMemberWantPermit,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1127,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1135,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1136,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1137,
      columnNumber: 25
    }
  }, "Czy pozostaje na utrzymaniu cudzoziemca?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1141,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "SecondMemberIsSupporting",
    value: values.SecondMemberIsSupporting,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1142,
      columnNumber: 25
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1153,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1154,
      columnNumber: 19
    }
  }, "3. Trzeci cz\u0142onek rodziny")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1156,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1157,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1158,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1159,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1160,
      columnNumber: 25
    }
  }, "Imi\u0119 i nazwisko")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1162,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "ThirdMemberFullName",
    value: values.ThirdMemberFullName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1163,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1171,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1172,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1173,
      columnNumber: 25
    }
  }, "P\u0142e\u0107")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1175,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "M\u0119\u017Cczyzna",
    name: "ThirdMemberSex",
    value: "M",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Kobieta",
    name: "ThirdMemberSex",
    value: "K",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1183,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1192,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1193,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1194,
      columnNumber: 25
    }
  }, "Data urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1196,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.ThirdMemberBirthDate && "input-error"} `,
    type: "date",
    name: "ThirdMemberBirthDate",
    value: values.ThirdMemberBirthDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1197,
      columnNumber: 25
    }
  }), errors.ThirdMemberBirthDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1207,
      columnNumber: 27
    }
  }, errors.SecondMemberBirthDate))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1213,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1214,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1215,
      columnNumber: 25
    }
  }, "Stopie\u0144 pokrewie\u0144stwa")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1217,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "ThirdMemberKinshipDegree",
    value: values.ThirdMemberKinshipDegree,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1218,
      columnNumber: 25
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1228,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1229,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1230,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1231,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1232,
      columnNumber: 25
    }
  }, "Obywatelstwo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1234,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "ThirdMemberCitizenShip",
    value: values.ThirdMemberCitizenShip,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1235,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1243,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1244,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1245,
      columnNumber: 25
    }
  }, "Miejsce zamieszkania")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1247,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1248,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "ThirdMemberResPlace",
    value: values.ThirdMemberResPlace,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1249,
      columnNumber: 27
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1258,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1259,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1260,
      columnNumber: 25
    }
  }, "Czy ubiega si\u0119 o udzielenie zezwolenia na pobyt czasowy?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1265,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "ThirdMemberWantPermit",
    value: values.ThirdMemberWantPermit,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1266,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1274,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1275,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1276,
      columnNumber: 25
    }
  }, "Czy pozostaje na utrzymaniu cudzoziemca?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1280,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "ThirdMemberIsSupporting",
    value: values.ThirdMemberIsSupporting,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281,
      columnNumber: 25
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1291,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1292,
      columnNumber: 19
    }
  }, "III. Pobyt cudzoziemca na terytorium Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1297,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1298,
      columnNumber: 19
    }
  }, "a) poprzednie pobyty na terytorium Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1302,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    name: "previousStays",
    value: values.previousStays,
    onChange: handleChange,
    rows: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1303,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1311,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1312,
      columnNumber: 19
    }
  }, "b) aktualny pobyt na terytorium Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1316,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1317,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1318,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1325,
      columnNumber: 23
    }
  }, "1. Czy przebywa Pan (Pani) na terytorium Rzeczpospolitej Polskiej?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1330,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Tak",
    id: "stayInPoland1",
    name: "stayInPoland",
    value: "Y",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1331,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Nie",
    id: "stayInPoland2",
    name: "stayInPoland",
    value: "N",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1339,
      columnNumber: 23
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1350,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1351,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1352,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1359,
      columnNumber: 23
    }
  }, "2. Prosz\u0119 poda\u0107 dat\u0119 ostatniego wjazdu Pana (Pani) na terytorium Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1364,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.lastDateInPoland && "input-error"}`,
    name: "lastDateInPoland",
    value: values.lastDateInPoland,
    onChange: handleChange,
    type: "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1365,
      columnNumber: 23
    }
  }), errors.lastDateInPoland && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1375,
      columnNumber: 25
    }
  }, errors.lastDateInPoland)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1380,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1381,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1382,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1383,
      columnNumber: 23
    }
  }, "3. W jakim celu?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1385,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "purposeInPoland",
    value: values.purposeInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1386,
      columnNumber: 23
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1395,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1396,
      columnNumber: 19
    }
  }, "4. Na jakiej podstawie?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1398,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "1)ruchu bezwizowego",
    name: "groundOfStay1",
    value: values.groundOfStay1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1399,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1407,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "2)wizy",
    name: "groundOfStay2",
    value: values.groundOfStay2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1408,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1416,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "3)zezwolenia na pobyt czasowy",
    name: "groundOfStay3",
    value: values.groundOfStay3,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1417,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1425,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "4)dokumentu uprawniaj\u0105cego do wjazdu i pobytu wydanego przez inne pa\u0144stwo obszaru Schengen",
    name: "groundOfStay4",
    value: values.groundOfStay4,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1426,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1434,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1435,
      columnNumber: 19
    }
  }, "IV. Podr\xF3\u017Ce i pobyty zagraniczne cudzoziemca poza terytorium Rzeczpospolitej Polskiej w okresie 5 lat (pa\u0144stwo, okres pobytu)")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1441,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    name: "travelsAndStays",
    value: values.travelsAndStays,
    onChange: handleChange,
    rows: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1442,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1450,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1451,
      columnNumber: 19
    }
  }, "V. Informacje o \u015Brodkach finansowych na pokrycie koszt\xF3w utrzymania cudzoziemca")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1456,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    name: "financialMeans",
    value: values.financialMeans,
    onChange: handleChange,
    rows: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1457,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1465,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1466,
      columnNumber: 19
    }
  }, "VI. Informacja o posiadanym przez cudzoziemca ubezpieczeniu zdrowotnym")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1471,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    name: "medicalInsurance",
    value: values.medicalInsurance,
    onChange: handleChange,
    rows: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1472,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1480,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1481,
      columnNumber: 19
    }
  }, "VII. Czy jest Pan (Pani) zatrzymany (-na), umieszczony (-na) w strze\u017Conym o\u015Brodku lub w areszcie dla cudzoziemc\xF3w lub czy zosta\u0142 wobec Pana (Pani) zastosowany \u015Brodek zapobiegawczy w postaci zakazu opuszczania kraju lub odbywa Pan (Pani) kar\u0119 pozbawienia wolno\u015Bci lub zastosowano wobec Pani (Pana) tymczasowe aresztowanie?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1490,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "custodyInPoland",
    value: values.custodyInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1491,
      columnNumber: 19
    }
  }), errors.custodyInPoland && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1499,
      columnNumber: 21
    }
  }, errors.custodyInPoland)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1502,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1503,
      columnNumber: 19
    }
  }, "VIII. Czy by\u0142(a) Pan (Pani) karany (-na) s\u0105downie na terytorium Rzeczypospolitej Polskiej?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 3,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1508,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Tak",
    id: "sentencedInPoland1",
    name: "sentencedInPoland",
    value: "Y",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1509,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Nie",
    id: "sentencedInPoland2",
    name: "sentencedInPoland",
    value: "N",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1517,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1525,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.sentencedInPoland && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1527,
      columnNumber: 21
    }
  }, errors.sentencedInPoland)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1530,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1531,
      columnNumber: 19
    }
  }, "Kiedy, za jaki czyn, jaki zapad\u0142 wyrok i czy zosta\u0142 wykonany?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1536,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "sentencedDesc",
    value: values.sentencedDesc,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1537,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1545,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1546,
      columnNumber: 19
    }
  }, "IX. Czy toczy si\u0119 przeciwko Panu (Pani) post\u0119powanie karne lub post\u0119powanie w sprawach o wykroczenia na terytorium Rzeczypospolitej Polskiej?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 3,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1552,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Tak",
    value: "Y",
    id: "penalInPolan1",
    name: "penalInPoland",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1553,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Nie",
    value: "N",
    id: "penalInPolan2",
    name: "penalInPoland",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1561,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1569,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.penalInPoland && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1571,
      columnNumber: 21
    }
  }, errors.penalInPoland)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1574,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1575,
      columnNumber: 19
    }
  }, "Jakie?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1577,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    name: "penalDesc",
    value: values.penalDesc,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1578,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1586,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1587,
      columnNumber: 19
    }
  }, "X. Czy ci\u0105\u017C\u0105 na Panu (Pani) zobowi\u0105zania wynikaj\u0105ce z orzecze\u0144 s\u0105dowych, postanowie\u0144 i decyzji administracyjnych, w tym zobowi\u0105zania alimentacyjne, na terytorium Rzeczpospolitej Polskiej lub poza tym terytorium?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 3,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1594,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Tak",
    name: "obligations",
    id: "obligations1",
    value: "Y",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1595,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Nie",
    name: "obligations",
    id: "obligations2",
    value: "N",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1603,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1611,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.obligations && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1613,
      columnNumber: 21
    }
  }, errors.obligations)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1616,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1617,
      columnNumber: 19
    }
  }, "Jakie?")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1619,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    name: "obligationsDesc",
    value: values.obligationsDesc,
    onChange: handleChange,
    rows: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1620,
      columnNumber: 19
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1629,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1630,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1631,
      columnNumber: 19
    }
  }, "Za\u0142\u0105czniki do wniosku")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1633,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    name: "annexes",
    rows: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1634,
      columnNumber: 19
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1641,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    className: "btn-lg pdf",
    variant: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1642,
      columnNumber: 17
    }
  }, "Generuj PDF")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (InteractiveForm);

/***/ }),

/***/ "./components/shared/Wnioski/Form3.js":
/*!********************************************!*\
  !*** ./components/shared/Wnioski/Form3.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useForm */ "./components/shared/Wnioski/useForm.js");
/* harmony import */ var _Walidacja_validateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Walidacja/validateForm */ "./components/shared/Walidacja/validateForm.js");
/* harmony import */ var _FormHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormHeader */ "./components/shared/Wnioski/FormHeader.js");
/* harmony import */ var _AuthhoritySelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthhoritySelection */ "./components/shared/Wnioski/AuthhoritySelection.js");
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\Form3.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const initialState = {
  surname: "",
  familyName: "",
  name1: "",
  fathersName: "",
  motherName: "",
  mothersMaidenName: "",
  birthDate: "",
  sex: "",
  birthPlace: "",
  birthCountry: "",
  nationality: "",
  citizenShip: "",
  maritalStatus: "",
  education: "",
  practisedProffesion: "",
  length: "",
  eyesColour: "",
  specialMarks: "",
  pesel: "",
  firstDateInPoland: "",
  stayPeriod: "",
  docSerie: "",
  docNumber: "",
  docIssueDate: "",
  docExpiryDate: "",
  docAuthority: "",
  docOthers: "",
  resDistrict: "",
  resMunicipality: "",
  resCity: "",
  resStreet: "",
  resHomeNumber: "",
  resApartmentNumber: "",
  resPostalCode: "",
  newVisaPeriod: "",
  toDate: "",
  visaType: "",
  financialResource: "",
  employerDesc: "",
  justification: ""
};

const InteractiveForm = props => {
  const visa = props.title.split(" ");
  const {
    handleChange,
    handleSubmit,
    values,
    errors
  } = Object(_useForm__WEBPACK_IMPORTED_MODULE_2__["default"])(submit, _Walidacja_validateForm__WEBPACK_IMPORTED_MODULE_3__["default"], initialState);

  function submit() {
    console.log("Form submitted successfuly!");
  }

  return __jsx("div", {
    className: "gray-box forms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit,
    noValidate: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(_FormHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: props.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }), __jsx(_AuthhoritySelection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, "A. Dane osobowe cudzoziemca")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 23
    }
  }, "1. Nazwisko")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.surname && "input-error"} `,
    type: "text",
    name: "surname",
    value: values.surname,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.surname && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, errors.surname)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 23
    }
  }, "2. Nazwisko(a) poprzednie")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "previousSurname1",
    value: values.previousSurname1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 23
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "previousSurname2",
    value: values.previousSurname2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 23
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 23
    }
  }, "3. Imi\u0119 (imiona)")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.name1 && "input-error"} `,
    type: "text",
    name: "name1",
    value: values.name1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.name1 && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }, errors.name1)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "name2",
    value: values.name2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 23
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 23
    }
  }, "4. Imi\u0119 ojca")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.fathersName && "input-error"} `,
    type: "text",
    name: "fathersName",
    value: values.fathersName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.fathersName && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }, errors.fathersName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 23
    }
  }, "5. Imi\u0119 matki")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.motherName && "input-error"} `,
    type: "text",
    name: "mothersName",
    value: values.motherName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.motherName && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 25
    }
  }, errors.motherName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 23
    }
  }, "6. Nazwisko rodowe matki")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.mothersMaidenName && "input-error"} `,
    type: "text",
    name: "mothersMaidenName",
    value: values.mothersMaidenName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.mothersMaidenName && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  }, errors.mothersMaidenName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 23
    }
  }, "7. Data urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 6,
    lg: 3,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.birthDate && "input-error"} `,
    type: "date",
    name: "birthDate",
    value: values.birthDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.birthDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 25
    }
  }, errors.birthDate)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title sex",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 23
    }
  }, "8. P\u0142e\u0107")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 4,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    id: "Male",
    type: "radio",
    label: "M\u0119\u017Cczyzna",
    name: "sex",
    value: "M",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 23
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 4,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    id: "Female",
    type: "radio",
    label: "Kobieta",
    name: "sex",
    value: "K",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.sex && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 38
    }
  }, errors.sex)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 23
    }
  }, "9. Miejsce urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.birthPlace && "input-error"} `,
    type: "text",
    name: "birthPlace",
    value: values.birthPlace,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.birthPlace && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 25
    }
  }, errors.birthPlace)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 23
    }
  }, "10. Pa\u0144stwo urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.birthCountry && "input-error"} `,
    type: "text",
    name: "birthCountry",
    value: values.birthCountry,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.birthCountry && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 25
    }
  }, errors.birthCountry)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 23
    }
  }, "11. Obywatelstwo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.citizenShip && "input-error"} `,
    type: "text",
    name: "citizenShip",
    value: values.citizenShip,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.citizenShip && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 25
    }
  }, errors.citizenShip)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 23
    }
  }, "12. Narodowo\u015B\u0107")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.nationality && "input-error"} `,
    type: "text",
    name: "nationality",
    value: values.nationality,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.nationality && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 25
    }
  }, errors.nationality)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 23
    }
  }, "13. Stan cywilny")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "kawaler/panna",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "\u017Conaty/zam\u0119\u017Cna",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "rowiedziona/rozwiedziony",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "wdowa/wdowiec",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "w separacji",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "inne",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.maritalStatus && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 25
    }
  }, errors.maritalStatus)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 23
    }
  }, "14. Wykszta\u0142cenie")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.education && "input-error"} `,
    type: "text",
    name: "education",
    value: values.education,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.education && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 25
    }
  }, errors.education)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 23
    }
  }, "15. Zaw\xF3d wykonywany")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.practisedProffesion && "input-error"} `,
    type: "text",
    name: "practisedProfession",
    value: values.practisedProffesion,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.practisedProffesion && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 25
    }
  }, errors.practisedProffesion))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 19
    }
  }, "B. Dokument podr\xF3\u017Cy cudzoziemca")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "section-B",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "section-B",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 8,
    md: 4,
    lg: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 29
    }
  }, "Seria dokumentu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docSerie && "input-error"} `,
    type: "text",
    name: "docSerie",
    value: values.docSerie,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 29
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 29
    }
  }, "* pole jest wymagane"), errors.docSerie && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 31
    }
  }, errors.docSerie))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "section-B",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 29
    }
  }, "Numer dokumentu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docNumber && "input-error"} `,
    type: "text",
    name: "docNumber",
    value: values.docNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 29
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 29
    }
  }, "* pole jest wymagane"), errors.docNumber && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 31
    }
  }, errors.docNumber))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "section-B",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 29
    }
  }, "Data wydania ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 44
    }
  }), "dokumentu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docIssueDate && "input-error"} `,
    type: "date",
    name: "docIssueDate",
    value: values.docIssueDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 29
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 29
    }
  }, "* pole jest wymagane"), errors.docIssueDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 31
    }
  }, errors.docIssueDate))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 29
    }
  }, "Data up\u0142ywu wa\u017Cno\u015Bci dokuemntu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docExpiryDate && "input-error"} `,
    type: "date",
    name: "docExpiryDate",
    value: values.docExpiryDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 29
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 29
    }
  }, "* pole jest wymagane"), errors.docExpiryDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 31
    }
  }, errors.docExpiryDate))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 23
    }
  }, "Organ wydaj\u0105cy dokument")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docAuthority && "input-error"} `,
    type: "text",
    name: "docAuthority",
    value: values.docAuthority,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.docAuthority && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 25
    }
  }, errors.docAuthority)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 23
    }
  }, "Liczba innych os\xF3b wpisanych do dokumentu podr\xF3\u017Cy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 8,
    md: 4,
    lg: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docOthers && "input-error"} `,
    type: "text",
    maxLength: 2,
    name: "docOthers",
    value: values.docOthers,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.docOthers && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 25
    }
  }, errors.docOthers))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 19
    }
  }, "C. Miejsce zamieszkania w Rzeczpospolitej Polskiej")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 23
    }
  }, "1. Miejscowo\u015B\u0107")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    xs: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resCity && "input-error"} `,
    type: "text",
    name: "resCity",
    value: values.resCity,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.resCity && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 25
    }
  }, errors.resCity)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 23
    }
  }, "2. Ulica")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resStreet && "input-error"} `,
    type: "text",
    name: "resStreet",
    value: values.resStreet,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.resStreet && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 25
    }
  }, errors.resStreet)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "three-inputs",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    lg: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 29
    }
  }, "3. Numer domu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resHomeNumber && "input-error"} `,
    type: "text",
    name: "resHomeNumber",
    value: values.resHomeNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 29
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 29
    }
  }, "* pole jest wymagane"), errors.resHomeNumber && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 31
    }
  }, errors.resHomeNumber))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 29
    }
  }, "4. Numer mieszkania")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resApartmentNumber && "input-error"} `,
    type: "text",
    name: "resApartmentNumber",
    value: values.resApartmentNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 29
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 29
    }
  }, "* pole jest wymagane"), errors.resApartmentNumber && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 31
    }
  }, errors.resApartmentNumber))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 29
    }
  }, "5. Kod pocztowy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 8,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 27
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resPostalCode && "input-error"} `,
    type: "text",
    maxLength: 6,
    placeholder: "nn-nnn",
    name: "resPostalCode",
    value: values.resPostalCode,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 29
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 29
    }
  }, "* pole jest wymagane"), errors.resPostalCode && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 31
    }
  }, errors.resPostalCode))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 23
    }
  }, "6. Wojew\xF3dztwo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
      columnNumber: 23
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 25
    }
  }, "dolno\u015Bl\u0105skie")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 23
    }
  }, "* pole jest wymagane")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 23
    }
  }, "7. Powiat")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resDistrict && "input-error"} `,
    type: "text",
    name: "resDistrict",
    value: values.resDistrict,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.resDistrict && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 25
    }
  }, errors.resDistrict)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665,
      columnNumber: 23
    }
  }, "8. Gmina")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resMunicipality && "input-error"} `,
    type: "text",
    name: "resMunicipality",
    value: values.resMunicipality,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 23
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 23
    }
  }, "* pole jest wymagane"), errors.resMunicipality && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 25
    }
  }, errors.resMunicipality))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 19
    }
  }, "D. Uzasadnienie wniosku")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 19
    }
  }, "1.Prosz\u0119 o przed\u0142u\u017Cenie wizy ", visa[visa.length - 1])), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 4,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 25
    }
  }, "na okres")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.newVisaPeriod && "input-error"}`,
    type: "text",
    name: "newVisaPeriod",
    value: values.newVisaPeriod,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 25
    }
  }, "*pole jest wymagane"), errors.newVisaPeriod && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 27
    }
  }, errors.newVisaPeriod))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 25
    }
  }, "Do")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.toDate && "input-error"}`,
    type: "date",
    name: "toDate",
    value: values.toDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 25
    }
  }, "*pole jest wymagane"), errors.toDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 27
    }
  }, errors.toDate))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "jednokrotnej",
    name: "visaType",
    value: "1",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "dwukrotnej",
    name: "visaType",
    value: "2",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "wielokrotnej",
    name: "visaType",
    value: "3",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
      columnNumber: 19
    }
  }, "*pole jest wymagane"), errors.visaType && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756,
      columnNumber: 21
    }
  }, errors.visaType)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 19
    }
  }, "2.Uzasadnienie wniosku")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.justification && "input-error"}`,
    as: "textarea",
    name: "justification",
    value: values.justification,
    onChange: handleChange,
    rows: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 19
    }
  }, "*pole jest wymagane"), errors.justification && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774,
      columnNumber: 21
    }
  }, errors.justification)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779,
      columnNumber: 19
    }
  }, "3. \u015Arodki finansowe na pokrycie koszt\xF3w utrzymania podczas pobytu w Rzeczpospolitej Polskiej (zaznaczy\u0107 wszystkie wyst\u0119puj\u0105ce mo\u017Cliwo\u015Bci)")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 785,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "got\xF3wka",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "karty kredytowe",
    name: "financialResource",
    value: "1",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "ubezpieczenie podr\xF3\u017Cne",
    name: "financialResource",
    value: "2",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "ubezpieczenie zdrowotne",
    name: "financialResource",
    value: "3",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "czeki podr\xF3\u017Cne",
    name: "financialResource",
    value: "4",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 816,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "inne",
    name: "financialResource",
    value: "5",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832,
      columnNumber: 19
    }
  }, "*pole jest wymagane"), errors.financialResource && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834,
      columnNumber: 21
    }
  }, errors.financialResource)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 838,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
      columnNumber: 19
    }
  }, "4. Dane o zatrudnieniu cudzoziemca na terytorium RP")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842,
      columnNumber: 19
    }
  }, "Podmiot powierzaj\u0105cy wykonywanie pracy cudzoziemcowi")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.employerDesc && "input-error"}`,
    as: "textarea",
    name: "employerDesc",
    values: values.employerDesc,
    onChange: handleChange,
    rows: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855,
      columnNumber: 19
    }
  }, "*pole jest wymagane"), errors.employerDesc && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857,
      columnNumber: 21
    }
  }, errors.employerDesc)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861,
      columnNumber: 19
    }
  }, "5. Pobyty i podr\xF3\u017Ce zagraniczne w ci\u0105gu ostatnich 5 lat (kraj, okres pobytu)")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 866,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 867,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870,
      columnNumber: 19
    }
  }, "6. Ostatnio wydana wiza krajowa")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 874,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 875,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876,
      columnNumber: 25
    }
  }, "Data pierwszego wjazdu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.firstDateInPoland && "input-error"}`,
    type: "date",
    name: "firstDateInPoland",
    value: values.firstDateInPoland,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888,
      columnNumber: 25
    }
  }, "*pole jest wymagane"), errors.firstDateInPoland && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890,
      columnNumber: 27
    }
  }, errors.firstDateInPoland))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898,
      columnNumber: 25
    }
  }, "Okres pobytu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 900,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.stayPeriod && "input-error"}`,
    type: "text",
    name: "stayPeriod",
    value: values.stayPeriod,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 901,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 25
    }
  }, "*pole jest wymagane"), errors.stayPeriod && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 910,
      columnNumber: 27
    }
  }, errors.stayPeriod))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 918,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 919,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 920,
      columnNumber: 25
    }
  }, "Seria dokumentu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 922,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docSerie && "input-error"}`,
    type: "text",
    name: "docSerie",
    value: values.docSerie,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 930,
      columnNumber: 25
    }
  }, "*pole jest wymagane"), errors.docSerie && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 932,
      columnNumber: 27
    }
  }, errors.docSerie))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 6,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 936,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 937,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938,
      columnNumber: 25
    }
  }, "Numer dokumentu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 940,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docNumber && "input-error"}`,
    type: "text",
    name: "docNumber",
    value: values.docNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 941,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 948,
      columnNumber: 25
    }
  }, "*pole jest wymagane"), errors.docNumber && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950,
      columnNumber: 27
    }
  }, errors.docNumber))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "section-B",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 960,
      columnNumber: 25
    }
  }, "Data wydania ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961,
      columnNumber: 40
    }
  }), "dokumentu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docIssueDate && "input-error"}`,
    type: "date",
    name: "docIssueDate",
    value: values.docIssueDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 973,
      columnNumber: 25
    }
  }, "* pole jest wymagane"), errors.docIssueDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 975,
      columnNumber: 27
    }
  }, errors.docIssueDate))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 979,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 980,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981,
      columnNumber: 25
    }
  }, "Data up\u0142ywu wa\u017Cno\u015Bci dokumentu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 983,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docExpiryDate && "input-error"}`,
    type: "date",
    name: "docExpiryDate",
    value: values.docExpiryDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 991,
      columnNumber: 25
    }
  }, "* pole jest wymagane"), errors.docExpiryDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 993,
      columnNumber: 27
    }
  }, errors.docExpiryDate))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000,
      columnNumber: 19
    }
  }, "Organ wydaj\u0105cy dokument")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docAuthority && "input-error"}`,
    type: "text",
    name: "docAuthority",
    value: values.docAuthority,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1010,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.docAuthority && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 21
    }
  }, errors.docAuthority))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1016,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 19
    }
  }, "Za\u0142\u0105czniki do wniosku")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    rows: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 19
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1024,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    className: "btn-lg pdf",
    variant: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1025,
      columnNumber: 17
    }
  }, "Generuj PDF")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (InteractiveForm);

/***/ }),

/***/ "./components/shared/Wnioski/FormBar.js":
/*!**********************************************!*\
  !*** ./components/shared/Wnioski/FormBar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_fontawesome_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/static/fontawesome/fontawesome */ "./public/static/fontawesome/fontawesome.js");
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\FormBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const FormBar = ({
  name,
  label,
  icon,
  span,
  reference
}) => {
  return __jsx("a", {
    download: "",
    href: reference,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("span", {
    id: name,
    className: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("span", {
    id: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, name)), __jsx("span", {
    className: span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, label), __jsx("span", {
    className: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "form-bar",
    icon: icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormBar);

/***/ }),

/***/ "./components/shared/Wnioski/FormHeader.js":
/*!*************************************************!*\
  !*** ./components/shared/Wnioski/FormHeader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\FormHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FormHeader = ({
  title
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "form-header",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("hr", {
    className: "form-title-separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, title), __jsx("hr", {
    className: "form-title-separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "language-info",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Uwaga! Wniosek nale\u017Cy wype\u0142ni\u0107 w j\u0119zyku polskim.")));
};

/* harmony default export */ __webpack_exports__["default"] = (FormHeader);

/***/ }),

/***/ "./components/shared/Wnioski/FormsMainContent.js":
/*!*******************************************************!*\
  !*** ./components/shared/Wnioski/FormsMainContent.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToFill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToFill */ "./components/shared/Wnioski/ToFill.js");
/* harmony import */ var _ToDownload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDownload */ "./components/shared/Wnioski/ToDownload.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form */ "./components/shared/Wnioski/Form.js");
/* harmony import */ var _Form1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form1 */ "./components/shared/Wnioski/Form1.js");
/* harmony import */ var _Form2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Form2 */ "./components/shared/Wnioski/Form2.js");
/* harmony import */ var _Form3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Form3 */ "./components/shared/Wnioski/Form3.js");
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\FormsMainContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const FormsMainContent = props => {
  if (props.content == "do pobrania") return __jsx(_ToDownload__WEBPACK_IMPORTED_MODULE_2__["default"], {
    span: "download",
    label: "Pobierz",
    icon: "file-download",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }
  });else if (props.content == "interaktywne") return __jsx(_ToFill__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: props.onClick,
    span: "fill",
    label: "Wype\u0142nij online",
    icon: "file-alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  });else if (props.content == "Wniosek o udzielenie cudzoziemcowi zezwolenia na pobyt stały") return __jsx(_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: props.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  });else if (props.content == "Wniosek o udzielenie cudzoziemcowi zezwolenia na pobyt rezydenta długoterminowego unii europejskiej") return __jsx(_Form1__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: props.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 12
    }
  });else if (props.content == "Wniosek o udzielenie cudzoziemcowi zezwolenia na pobyt czasowy") return __jsx(_Form2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: props.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }
  });else if (props.content == "Wniosek o przedłużenie wizy krajowej") return __jsx(_Form3__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: props.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 12
    }
  });else if (props.content == "Wniosek o przedłużenie wizy Schengen") return __jsx(_Form3__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: props.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 12
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FormsMainContent);

/***/ }),

/***/ "./components/shared/Wnioski/PhotoBanner.js":
/*!**************************************************!*\
  !*** ./components/shared/Wnioski/PhotoBanner.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\PhotoBanner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PhotoBanner = () => {
  return __jsx("section", {
    className: "front-page-slide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("article", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Interaktywne formularze online"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Dzi\u0119ki temu narz\u0119dziu w szybki i prosty spos\xF3b wype\u0142nisz dost\u0119pne formularze bez si\u0119gania po d\u0142ugopis. System ten zapewni Ci pe\u0142n\u0105 poprawno\u015B\u0107 ka\u017Cdego wype\u0142nionego wniosku.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (PhotoBanner);

/***/ }),

/***/ "./components/shared/Wnioski/SectionA.js":
/*!***********************************************!*\
  !*** ./components/shared/Wnioski/SectionA.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\SectionA.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SectionA = ({
  values,
  errors,
  handleChange
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "A. Dane osobowe cudzoziemca")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "1. Nazwisko")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.surname && "input-error"} `,
    type: "text",
    name: "surname",
    value: values.surname,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.surname && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 32
    }
  }, errors.surname)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "2. Nazwisko(a) poprzednie")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "previousSurname1",
    value: values.previousSurname1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "previousSurname2",
    value: values.previousSurname2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "3. Nazwisko rodowe")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.familyName && "input-error"} `,
    type: "text",
    name: "familyName",
    value: values.familyName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.familyName && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, errors.familyName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "4. Imi\u0119 (imiona)")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.name1 && "input-error"} `,
    type: "text",
    name: "name1",
    value: values.name1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.name1 && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 30
    }
  }, errors.name1)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "name2",
    value: values.name2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "5. Imi\u0119 (imiona) poprzednie")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "previousName1",
    value: values.previousName1,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "previousName2",
    value: values.previousName2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "6. Imi\u0119 ojca")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.fathersName && "input-error"} `,
    type: "text",
    name: "fathersName",
    value: values.fathersName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.fathersName && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, errors.fathersName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "7. Imi\u0119 matki")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.motherName && "input-error"} `,
    type: "text",
    name: "mothersName",
    value: values.motherName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.motherName && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, errors.motherName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, "8. Nazwisko rodowe matki")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.mothersMaidenName && "input-error"} `,
    type: "text",
    name: "mothersMaidenName",
    value: values.mothersMaidenName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.mothersMaidenName && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, errors.mothersMaidenName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, "9. Data urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 6,
    lg: 3,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.birthDate && "input-error"} `,
    type: "date",
    name: "birthDate",
    value: values.birthDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.birthDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, errors.birthDate)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title sex",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, "10. P\u0142e\u0107")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 4,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    id: "Male",
    type: "radio",
    label: "M\u0119\u017Cczyzna",
    name: "sex",
    value: "M",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "sex",
    s: 12,
    md: 6,
    lg: 4,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    id: "Female",
    type: "radio",
    label: "Kobieta",
    name: "sex",
    value: "K",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.sex && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 28
    }
  }, errors.sex)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, "11. Miejsce urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.birthPlace && "input-error"} `,
    type: "text",
    name: "birthPlace",
    value: values.birthPlace,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.birthPlace && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 15
    }
  }, errors.birthPlace)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, "12. Pa\u0144stwo urodzenia")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.birthCountry && "input-error"} `,
    type: "text",
    name: "birthCountry",
    value: values.birthCountry,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.birthCountry && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, errors.birthCountry)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, "13. Narodowo\u015B\u0107")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.nationality && "input-error"} `,
    type: "text",
    name: "nationality",
    value: values.nationality,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.nationality && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 15
    }
  }, errors.nationality)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, "14. Obywatelstwo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.citizenShip && "input-error"} `,
    type: "text",
    name: "citizenShip",
    value: values.citizenShip,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.citizenShip && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 15
    }
  }, errors.citizenShip)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  }, "15. Stan cywilny")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.maritalStatus && "input-error"} `,
    type: "text",
    name: "maritalStatus",
    value: values.maritalStatus,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.maritalStatus && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 15
    }
  }, errors.maritalStatus)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 13
    }
  }, "16. Wykszta\u0142cenie")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.education && "input-error"} `,
    type: "text",
    name: "education",
    value: values.education,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.education && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 15
    }
  }, errors.education)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }
  }, "17. Zaw\xF3d wykonywany")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.practisedProffesion && "input-error"} `,
    type: "text",
    name: "practisedProfession",
    value: values.practisedProffesion,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.practisedProffesion && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 15
    }
  }, errors.practisedProffesion)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 13
    }
  }, "18. Rysopis")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    s: 8,
    md: 4,
    lg: 2,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 15
    }
  }, "Wzrost")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 8,
    md: 4,
    lg: 2,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.length && "input-error"} `,
    type: "text",
    maxLength: 3,
    name: "length",
    value: values.length,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 15
    }
  }, "* pole jest wymagane"), errors.length && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 33
    }
  }, errors.length)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    s: 8,
    md: 4,
    lg: 2,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 15
    }
  }, "Kolor oczu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.eyesColour && "input-error"} `,
    type: "text",
    name: "eyesColour",
    value: values.eyesColour,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 15
    }
  }, "* pole jest wymagane"), errors.eyesColour && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 17
    }
  }, errors.eyesColour)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    s: 8,
    md: 4,
    lg: 2,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 15
    }
  }, "Znaki szczeg\xF3lne")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.specialMarks && "input-error"} `,
    type: "text",
    name: "specialMarks",
    value: values.specialMarks,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 15
    }
  }, "* pole jest wymagane"), errors.specialMarks && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 17
    }
  }, errors.specialMarks))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 13
    }
  }, "19. Numer PESEL (je\u015Bli zosta\u0142 nadany)")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.pesel && "input-error"} `,
    type: "text",
    maxLength: 11,
    name: "pesel",
    value: values.pesel,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 13
    }
  }), errors.pesel && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 30
    }
  }, errors.pesel)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 13
    }
  }, "20. Numer telefonu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "phoneNumber",
    value: values.phoneNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionA);

/***/ }),

/***/ "./components/shared/Wnioski/SectionB.js":
/*!***********************************************!*\
  !*** ./components/shared/Wnioski/SectionB.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\SectionB.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SectionB = ({
  values,
  errors,
  handleChange
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "B. Dokument podr\xF3\u017Cy cudzoziemca")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "section-B",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "section-B",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 8,
    md: 4,
    lg: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 19
    }
  }, "Seria dokumentu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docSerie && "input-error"} `,
    type: "text",
    name: "docSerie",
    value: values.docSerie,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.docSerie && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, errors.docSerie))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "section-B",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }, "Numer dokumentu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docNumber && "input-error"} `,
    type: "text",
    name: "docNumber",
    value: values.docNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.docNumber && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, errors.docNumber))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "section-B",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, "Data wydania ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 34
    }
  }), "dokumentu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docIssueDate && "input-error"} `,
    type: "date",
    name: "docIssueDate",
    value: values.docIssueDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.docIssueDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, errors.docIssueDate))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, "Data up\u0142ywu wa\u017Cno\u015Bci dokumentu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docExpiryDate && "input-error"} `,
    type: "date",
    name: "docExpiryDate",
    value: values.docExpiryDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.docExpiryDate && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, errors.docExpiryDate))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Organ wydaj\u0105cy dokument")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docAuthority && "input-error"} `,
    type: "text",
    name: "docAuthority",
    value: values.docAuthority,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.docAuthority && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, errors.docAuthority)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Liczba innych os\xF3b wpisanych do dokumentu podr\xF3\u017Cy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 8,
    md: 4,
    lg: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.docOthers && "input-error"} `,
    type: "text",
    maxLength: 2,
    name: "docOthers",
    value: values.docOthers,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.docOthers && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, errors.docOthers)))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionB);

/***/ }),

/***/ "./components/shared/Wnioski/SectionC.js":
/*!***********************************************!*\
  !*** ./components/shared/Wnioski/SectionC.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\SectionC.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SectionC = ({
  values,
  errors,
  handleChange
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "C. Miejsce pobytu cudzoziemca")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "1. Wojew\xF3dztwo")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, "dolno\u015Bl\u0105skie")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "* pole jest wymagane")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "2. Powiat")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resDistrict && "input-error"} `,
    type: "text",
    name: "resDistrict",
    value: values.resDistrict,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.resDistrict && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, errors.resDistrict)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "3. Gmina")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resMunicipality && "input-error"} `,
    type: "text",
    name: "resMunicipality",
    value: values.resMunicipality,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.resMunicipality && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, errors.resMunicipality)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "4. Miasto")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resCity && "input-error"} `,
    type: "text",
    name: "resCity",
    value: values.resCity,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.resCity && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 32
    }
  }, errors.resCity)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    xs: 12,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "5. Ulica")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    s: 12,
    md: 10,
    lg: 6,
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resStreet && "input-error"} `,
    type: "text",
    name: "resStreet",
    value: values.resStreet,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "* pole jest wymagane"), errors.resStreet && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, errors.resStreet)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "three-inputs",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    lg: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, "6. Numer domu")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resHomeNumber && "input-error"} `,
    type: "text",
    name: "resHomeNumber",
    value: values.resHomeNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.resHomeNumber && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, errors.resHomeNumber))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, "7. Numer mieszkania")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resApartmentNumber && "input-error"} `,
    type: "text",
    name: "resApartmentNumber",
    value: values.resApartmentNumber,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.resApartmentNumber && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, errors.resApartmentNumber))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    s: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, "8. Kod pocztowy")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.resPostalCode && "input-error"} `,
    type: "text",
    maxLength: 6,
    placeholder: "nn-nnn",
    name: "resPostalCode",
    value: values.resPostalCode,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 19
    }
  }, "* pole jest wymagane"), errors.resPostalCode && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, errors.resPostalCode))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    className: "filed-title",
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, "9. Tytu\u0142 prawny do zajmowania przez wnioskodawc\u0119 lokalu")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionC);

/***/ }),

/***/ "./components/shared/Wnioski/SectionF.js":
/*!***********************************************!*\
  !*** ./components/shared/Wnioski/SectionF.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\SectionF.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SectionF = ({
  values,
  errors,
  handleChange
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "F. Uzasadnienie wniosku")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    xs: 12,
    md: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: `${errors.justification && "input-error"} `,
    as: "textarea",
    rows: 7,
    name: "justification",
    value: values.justification,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "* pole jest wymagane"), errors.justification && __jsx("p", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, errors.justification)));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionF);

/***/ }),

/***/ "./components/shared/Wnioski/Tabs.js":
/*!*******************************************!*\
  !*** ./components/shared/Wnioski/Tabs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\Tabs.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Tab = props => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "tab-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: props.onClick,
    id: props.id,
    className: props.active == true ? "tab active" : "tab",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: props.active == true ? "active" : "",
    id: props.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, props.title)));
};

class Tabs extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "activeToggle", () => {
      const current_state = this.state;
      this.setState({
        tab1: !current_state.tab1,
        tab2: !current_state.tab2
      });
    });

    _defineProperty(this, "onClick", event => {
      this.props.onClick(event);

      if (!event.target.className.split(" ").includes("active")) {
        this.activeToggle();
      }
    });

    this.state = {
      tab1: true,
      tab2: false
    };
  }

  render() {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    }, __jsx(Tab, {
      active: this.state.tab1,
      onClick: this.onClick,
      id: "do pobrania",
      title: "Wnioski do pobrania",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }), __jsx(Tab, {
      active: this.state.tab2,
      onClick: this.onClick,
      id: "interaktywne",
      title: "Interaktywne formularze",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./components/shared/Wnioski/ToDownload.js":
/*!*************************************************!*\
  !*** ./components/shared/Wnioski/ToDownload.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_pagedata_wnioski__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/static/pagedata/wnioski */ "./public/static/pagedata/wnioski.js");
/* harmony import */ var _shared_Wnioski_FormBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Wnioski/FormBar */ "./components/shared/Wnioski/FormBar.js");
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\ToDownload.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ToDownload = ({
  label,
  icon,
  span
}) => {
  const {
    0: forms,
    1: setForms
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getForms();
  });

  const getForms = () => {
    setForms(_public_static_pagedata_wnioski__WEBPACK_IMPORTED_MODULE_1__["default"].do_pobrania);
  };

  return __jsx("div", {
    className: "grey-box forms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "grey-box-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, forms.map(form => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx("h4", {
      className: "form-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, form.tytul), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    }, __jsx("ul", {
      className: "forms-links",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, form.formularze.map(formularz => {
      return __jsx("li", {
        id: formularz,
        key: formularz,
        className: "single-form-link",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 23
        }
      }, __jsx(_shared_Wnioski_FormBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        reference: `../../static/pdfs/${formularz.replace(/ /g, "-")}.pdf`,
        span: span,
        name: formularz,
        label: label,
        icon: icon,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }
      }));
    }))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ToDownload);

/***/ }),

/***/ "./components/shared/Wnioski/ToFill.js":
/*!*********************************************!*\
  !*** ./components/shared/Wnioski/ToFill.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_pagedata_wnioski__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/static/pagedata/wnioski */ "./public/static/pagedata/wnioski.js");
/* harmony import */ var _shared_Wnioski_FormBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Wnioski/FormBar */ "./components/shared/Wnioski/FormBar.js");
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\components\\shared\\Wnioski\\ToFill.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ToFill = props => {
  const {
    0: forms,
    1: setForms
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getForms();
  });

  const getForms = () => {
    setForms(_public_static_pagedata_wnioski__WEBPACK_IMPORTED_MODULE_1__["default"].interaktywne.formularze);
  };

  return __jsx("div", {
    className: "grey-box forms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "grey-box-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "forms-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, forms.map(form => __jsx("li", {
    onClick: props.onClick,
    id: form,
    key: form,
    className: "single-form-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_shared_Wnioski_FormBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    span: props.span,
    name: form,
    label: props.label,
    icon: props.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ToFill);

/***/ }),

/***/ "./components/shared/Wnioski/useForm.js":
/*!**********************************************!*\
  !*** ./components/shared/Wnioski/useForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useForm = (callback, validate, initialState) => {
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  const {
    0: errors,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/wnioski.js":
/*!**************************!*\
  !*** ./pages/wnioski.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_FormsLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layouts/FormsLayout */ "./components/Layouts/FormsLayout.js");
/* harmony import */ var _public_static_fontawesome_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/fontawesome/fontawesome */ "./public/static/fontawesome/fontawesome.js");
var _jsxFileName = "C:\\Users\\Kamil Sty\u015B\\OneDrive\\Dokumenty\\PWr\\VII semestr\\Seminarium dyplomowe\\Projekt\\SprawaDlaImigranta\\pages\\wnioski.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Wnioski = () => {
  return __jsx(_components_Layouts_FormsLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Formularze Online | SprawaDlaImigranta.pl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Wnioski);

/***/ }),

/***/ "./public/static/fontawesome/fontawesome.js":
/*!**************************************************!*\
  !*** ./public/static/fontawesome/fontawesome.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);



_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCaretUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCaretDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserEdit"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserCheck"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faListAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFileAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFileDownload"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHome"]);

/***/ }),

/***/ "./public/static/pagedata/wnioski.js":
/*!*******************************************!*\
  !*** ./public/static/pagedata/wnioski.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const do_pobrania = [{
  tytul: "Ochrona międzynarodowa",
  formularze: ["Wniosek o wydanie lub wymianę tymczasowego zaświadczenia tożsamości cudzoziemca", "Wniosek o udzielenie ochrony międzynarodowej (tylko do straży granicznej)", "Wniosek o wydanie lub wymianę karty pobytu", "Formularz zgłoszenia utraty lub uszkodzenia dokumentów", "Wniosek o wydanie lub wymianę nowego dokumentu podróży przewidzianego w konwencji genewskiej"]
}, {
  tytul: "Legalizacja pobytu",
  formularze: ["Wniosek o udzielenie zezwolenia na pobyt rezydenta długoterminowego", "Wniosek o udzielenie zezwolenia na pobyt stały", "Wniosek o udzielenie cudzoziemcowi zezwolenia na pobyt czasowy"]
}, {
  tytul: "Wnioski UE",
  formularze: ["Wniosek o zarejestrowanie pobytu obywatela ue", "Wniosek o wydanie lub wymianę nowego zaświadczenia o zarejestrowaniu pobytu obywatela unii europejskiej", "Wniosek o wydanie lub wymianę dokumentu potwierdzającego prawo stałego pobytu", "Wniosek o wydanie lub wymianę karty pobytu członka rodziny obywatela unii europejskiej", "Wniosek o wydanie lub wymianę karty stałego pobytu członka rodziny obywatela unii europejskiej"]
}, {
  tytul: "Wizy",
  formularze: ["Wniosek o przedłużenie wizy krajowej", "Wniosek o przedłużenie wizy schengen"]
}, {
  tytul: "Wydania i wymiany dokumentów",
  formularze: ["Wniosek o wydanie lub wymianę dokumentu zgoda na pobyt tolerowany", "Wniosek o wydanie lub wymianę karty pobytu", "Wniosek o wydanie lub wymianę nowego dokumentu podróży przewidzianego w konwencji genewskiej", "Wniosek o wydanie lub wymianę polskiego dokumentu podróży dla cudzoziemca", "Wniosek o wydanie lub wymianę polskiego dokumentu tożsamości cudzoziemca", "Formularz zgłoszenia utraty lub uszkodzenia dokumentów", "Wniosek o wydanie lub wymianę tymczasowego polskiego dokumentu podróży cudzoziemca"]
}, {
  tytul: "Zaproszenia",
  formularze: ["Wniosek o wpisanie zaproszenia do ewidencji zaproszeń"]
}];
const interaktywne = {
  formularze: ["Wniosek o udzielenie cudzoziemcowi zezwolenia na pobyt stały", "Wniosek o udzielenie cudzoziemcowi zezwolenia na pobyt rezydenta długoterminowego unii europejskiej", "Wniosek o udzielenie cudzoziemcowi zezwolenia na pobyt czasowy", "Wniosek o przedłużenie wizy krajowej", "Wniosek o przedłużenie wizy Schengen"]
};
/* harmony default export */ __webpack_exports__["default"] = ({
  do_pobrania,
  interaktywne
});

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/wnioski.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kamil Styś\OneDrive\Dokumenty\PWr\VII semestr\Seminarium dyplomowe\Projekt\SprawaDlaImigranta\pages\wnioski.js */"./pages/wnioski.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-regular-svg-icons":
/*!******************************************************!*\
  !*** external "@fortawesome/free-regular-svg-icons" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=wnioski.js.map