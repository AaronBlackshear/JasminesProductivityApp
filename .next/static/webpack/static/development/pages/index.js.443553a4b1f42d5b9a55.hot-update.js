webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/setCalendarEvents.js":
/*!************************************!*\
  !*** ./utils/setCalendarEvents.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);


var setCalendarEvents = function setCalendarEvents(value, events, currentMonth) {
  var filteredEvents = events.filter(function (event) {
    console.log(moment__WEBPACK_IMPORTED_MODULE_0___default()(event.event_date).date(), value.date());
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(event.event_date).date() === value.date();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (setCalendarEvents);

/***/ })

})
//# sourceMappingURL=index.js.443553a4b1f42d5b9a55.hot-update.js.map