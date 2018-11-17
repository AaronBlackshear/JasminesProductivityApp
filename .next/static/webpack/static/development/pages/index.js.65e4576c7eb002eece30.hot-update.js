webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/reducers/calendarReducer.js":
/*!*******************************************!*\
  !*** ./redux/reducers/calendarReducer.js ***!
  \*******************************************/
/*! exports provided: addCalendarBackground, addEvent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCalendarBackground", function() { return addCalendarBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var base_url = 'http://localhost:3001/api';
var initialState = {
  calendarBackgroundImages: {}
};
var ADD_CALENDAR_BACKGROUND = 'ADD_CALENDAR_BACKGROUND';
var ADD_EVENT = 'ADD_EVENT';

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_CALENDAR_BACKGROUND:
      var _action$payload = action.payload,
          date = _action$payload.date,
          image = _action$payload.image;
      return _objectSpread({}, state, {
        calendarBackgroundImages: _objectSpread({}, state.calendarBackgroundImages, _defineProperty({}, date, image))
      });

    case "".concat(ADD_EVENT, "_FULFILLED"):
      console.log(action.payload);
      return _objectSpread({}, state);

    default:
      return _objectSpread({}, state);
  }
}

var addCalendarBackground = function addCalendarBackground(date, image) {
  return {
    type: ADD_CALENDAR_BACKGROUND,
    payload: {
      date: date,
      image: image
    }
  };
};
var addEvent = function addEvent(event, category, date, startTime, endTime) {
  var localUser = JSON.parse(localStorage.getItem('user'));
  return {
    type: ADD_EVENT,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(base_url, "/add_event"), {
      event: event,
      category: category,
      date: date,
      startTime: startTime,
      endTime: endTime
    }, {
      headers: {
        email: localUser.email,
        password: localUser.password,
        authToken: localUser.authTokenOne
      }
    })
  };
};
/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ })

})
//# sourceMappingURL=index.js.65e4576c7eb002eece30.hot-update.js.map