webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/getMonthName.js":
/*!*******************************!*\
  !*** ./utils/getMonthName.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_months_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/months.json */ "./constants/months.json");
var _constants_months_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/months.json */ "./constants/months.json", 1);


var getMonthName = function getMonthName() {
  var abbr = document.getElementsByClassName('ant-select-selection-selected-value')[1].innerHTML;
  setTimeout(function () {
    return _constants_months_json__WEBPACK_IMPORTED_MODULE_0__[abbr];
  }, 0);
};

/* harmony default export */ __webpack_exports__["default"] = (getMonthName);

/***/ })

})
//# sourceMappingURL=index.js.c0dbabc3533ed3336272.hot-update.js.map