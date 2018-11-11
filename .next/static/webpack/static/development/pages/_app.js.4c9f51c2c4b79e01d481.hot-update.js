webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/reducers/userReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/userReducer.js ***!
  \***************************************/
/*! exports provided: loginUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var base_url = 'http://localhost:3001/api';
var initialState = {
  user: {},
  loggedIn: false,
  loading: false
};
var LOGIN_USER = 'LOGIN_USER';

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "".concat(LOGIN_USER, "_PENDING"):
      return _objectSpread({}, state, {
        loading: true
      });

    case "".concat(LOGIN_USER, "_FULFILLED"):
      var _action$payload$data$ = action.payload.data[0],
          username = _action$payload$data$.username,
          email = _action$payload$data$.email,
          password = _action$payload$data$.password,
          authTokenOne = _action$payload$data$.authTokenOne,
          authTokenTwo = _action$payload$data$.authTokenTwo,
          userIdentifier = _action$payload$data$.userIdentifier,
          emailVerified = _action$payload$data$.emailVerified;
      localStorage.setItem('user', JSON.stringify({
        username: username,
        email: email,
        password: password,
        authTokenOne: authTokenOne,
        authTokenTwo: authTokenTwo,
        userIdentifier: userIdentifier,
        emailVerified: emailVerified
      }));
      return _objectSpread({}, state, {
        user: action.payload.data[0],
        loading: false,
        loggedIn: true
      });

    default:
      return _objectSpread({}, state);
  }
}

var loginUser = function loginUser(username, password) {
  return {
    type: LOGIN_USER,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(base_url + '/login_user', {
      username: username,
      password: password
    })
  };
};
/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ })

})
//# sourceMappingURL=_app.js.4c9f51c2c4b79e01d481.hot-update.js.map