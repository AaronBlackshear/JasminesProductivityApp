webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Calendar.js":
/*!********************************!*\
  !*** ./components/Calendar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CalendarComponents_EventsModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CalendarComponents/EventsModal */ "./components/CalendarComponents/EventsModal.js");
/* harmony import */ var _css_calendar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/calendar.css */ "./css/calendar.css");
/* harmony import */ var _css_calendar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_calendar_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_changeCalendarNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/changeCalendarNames */ "./utils/changeCalendarNames.js");
/* harmony import */ var _redux_reducers_calendarReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/reducers/calendarReducer */ "./redux/reducers/calendarReducer.js");
/* harmony import */ var _utils_setCalendarEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/setCalendarEvents */ "./utils/setCalendarEvents.js");
var _jsxFileName = "/Users/aaronblackshear/PersonalProjects/JasminesProductivityApp/components/Calendar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var CalendarComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarComponent, _Component);

  function CalendarComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      currentYear: null,
      currentMonth: null,
      currentDate: null,
      selectedDate: null,
      showModal: false,
      categories: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeDate", function (value) {
      _this.setState({
        currentYear: value.year(),
        currentMonth: value.month() + 1,
        currentDate: value.date(),
        selectedDate: value.format("MM-DD-YYYY")
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleModal", function (bool) {
      _this.setState({
        showModal: bool
      });
    });

    return _this;
  }

  _createClass(CalendarComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      var currentUser = JSON.parse(localStorage.getItem('user'));
      Object(_utils_changeCalendarNames__WEBPACK_IMPORTED_MODULE_6__["default"])();
      this.changeDate(moment__WEBPACK_IMPORTED_MODULE_3___default()(Date.now()));
      dispatch(Object(_redux_reducers_calendarReducer__WEBPACK_IMPORTED_MODULE_7__["getAllEvents"])(currentUser.userIdentifier));
      dispatch(Object(_redux_reducers_calendarReducer__WEBPACK_IMPORTED_MODULE_7__["getCategories"])(currentUser.userIdentifier));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          currentMonth = _this$state.currentMonth,
          currentYear = _this$state.currentYear,
          showModal = _this$state.showModal,
          selectedDate = _this$state.selectedDate;
      var calendar = this.props.calendar;

      var dateCellRender = function dateCellRender(value) {
        var dateEvents = Object(_utils_setCalendarEvents__WEBPACK_IMPORTED_MODULE_8__["default"])(value, calendar.events, currentMonth);

        if (dateEvents) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
            className: "events",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          }, dateEvents.map(function (event) {
            var category = calendar.categories.find(function (category) {
              return category.category_name === event.category;
            });
            console.log(category); // return <li key={event.id}>
            //   <Badge status={category.color || 'success'} text={event.event_body} />
            // </li>
          }));
        }
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, monthNames[currentMonth - 1]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, currentYear)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CalendarComponents_EventsModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
        visible: showModal,
        toggleModal: this.toggleModal,
        selectedDate: selectedDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Calendar"], {
        dateCellRender: dateCellRender,
        onChange: function onChange(e) {
          return _this2.changeDate(e);
        },
        onSelect: function onSelect(e) {
          return _this2.changeDate(e), _this2.toggleModal(true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }));
    }
  }]);

  return CalendarComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    calendar: state.calendarReducer
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(CalendarComponent));

/***/ })

})
//# sourceMappingURL=index.js.887b3354b3034386aeff.hot-update.js.map