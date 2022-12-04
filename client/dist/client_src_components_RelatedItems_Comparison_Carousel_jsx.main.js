"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["client_src_components_RelatedItems_Comparison_Carousel_jsx"],{

/***/ "./client/src/components/RelatedItems_Comparison/Carousel.jsx":
/*!********************************************************************!*\
  !*** ./client/src/components/RelatedItems_Comparison/Carousel.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst withCarousel = (WrappedComponent, widget) => {\n  class Carousel extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n    constructor(props) {\n      super(props);\n      this.state = {\n        start: 0,\n        prev: '',\n        next: ''\n      };\n    }\n\n    render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, this.props);\n    }\n\n  }\n\n  return Carousel;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withCarousel);\n\n//# sourceURL=webpack://my-webpack-project/./client/src/components/RelatedItems_Comparison/Carousel.jsx?");

/***/ })

}]);