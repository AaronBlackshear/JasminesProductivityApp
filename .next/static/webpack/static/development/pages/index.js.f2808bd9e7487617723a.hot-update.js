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
  var monthName;
  setTimeout(function () {
    return monthName = _constants_months_json__WEBPACK_IMPORTED_MODULE_0__[abbr];
  }, 0);
  console.log(monthName);
  return monthName;
};

/* harmony default export */ __webpack_exports__["default"] = (getMonthName);

/***/ })

})
//# sourceMappingURL=index.js.f2808bd9e7487617723a.hot-update.js.map