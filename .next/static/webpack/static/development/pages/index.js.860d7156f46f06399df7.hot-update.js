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
  var year = document.getElementsByClassName('ant-select-selection-selected-value')[0].innerHTML;
  var abbr = document.getElementsByClassName('ant-select-selection-selected-value')[1].innerHTML;
  return {
    month: _constants_months_json__WEBPACK_IMPORTED_MODULE_0__[abbr],
    year: year
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getMonthName);

/***/ })

})
//# sourceMappingURL=index.js.860d7156f46f06399df7.hot-update.js.map