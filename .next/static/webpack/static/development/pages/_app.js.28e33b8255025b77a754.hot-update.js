webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/userReducer */ "./redux/reducers/userReducer.js");
/* harmony import */ var _reducers_calendarReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/calendarReducer */ "./redux/reducers/calendarReducer.js");



 // export default store;

function initializeStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    userReducer: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
    calendarReducer: _reducers_calendarReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(Object(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_1__["default"])()));
}

/***/ })

})
//# sourceMappingURL=_app.js.28e33b8255025b77a754.hot-update.js.map