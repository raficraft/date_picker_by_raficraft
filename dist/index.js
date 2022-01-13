"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePicker = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useClickOutside = require("./hooks/useClickOutside");

var _DatePickerBody = require("./DatePickerBody/DatePickerBody");

require("./DatePicker.scss");

var _calendarArray = require("./data/calendarArray");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DatePicker = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    label = "date picker",
    forHtml = "datePicker",
    format = "date",
    language = "gb",
    start = new Date().getFullYear() - 50,
    end = new Date().getFullYear() + 50,
    autocomplete = "off"
  } = props;
  const {
    visible,
    setVisible,
    refOutsideClick
  } = (0, _useClickOutside.useClickOutside)(false);
  const inputDate = (0, _react.useRef)({
    fullDate: false,
    date: false,
    month: {
      name: false,
      abbr: false
    },
    monthKey: false,
    year: false
  });
  const errorMessage = (0, _react.useRef)(null);
  const placeholder = _calendarArray.date_format[language].placeholder;

  const handleClick = e => {
    e.preventDefault();
    setVisible(!visible);
  };

  const setInput = day => {
    inputDate.current.value = day.fullDate;
    inputDate.current.dataset.date = day.date;
    inputDate.current.dataset.month = day.month.name;
    inputDate.current.dataset.abbr = day.month.abbr;
    inputDate.current.dataset.year = day.year;
    inputDate.current.dataset.month_key = day.monthKey;
    setVisible(!visible);
  };

  (0, _react.useImperativeHandle)(ref, () => ({
    focus: () => {
      inputDate.current.focus();
    },

    get input() {
      return inputDate.current;
    },

    get error() {
      return errorMessage.current;
    }

  }));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container_dataPicker_by_raficraft",
    ref: refOutsideClick
  }, /*#__PURE__*/_react.default.createElement("label", {
    forhtml: forHtml
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "fakeInput",
    placeholder: placeholder,
    onClick: handleClick,
    ref: inputDate,
    name: forHtml,
    id: forHtml,
    "data-format": format,
    autoComplete: autocomplete,
    "data-date": _react.useRef.date,
    "data-month": _react.useRef.month,
    "data-month_key": _react.useRef.monthKey,
    "data-abbr": _react.useRef.attr,
    "data-year": _react.useRef.year
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "error_message_container"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "error_message",
    ref: errorMessage
  })), visible && /*#__PURE__*/_react.default.createElement(_DatePickerBody.DatePickerBody, {
    setInput: setInput,
    inputVal: inputDate.current.value,
    currentInput: inputDate.current,
    language: language,
    startCalendar: start,
    endCalendar: end
  }));
});
exports.DatePicker = DatePicker;