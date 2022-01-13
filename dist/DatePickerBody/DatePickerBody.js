"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerBody = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.parse-int.js");

var _getCalendar = require("./../getCalendar");

var _react = _interopRequireWildcard(require("react"));

var _ri = require("react-icons/ri");

var _vsc = require("react-icons/vsc");

var _calendarArray = require("./../data/calendarArray");

require("./DatePickerBody.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DatePickerBody = _ref => {
  let {
    setInput,
    inputVal,
    currentInput,
    language,
    startCalendar,
    endCalendar
  } = _ref;
  const datePicker = new _getCalendar.GetCalendar(startCalendar, endCalendar, language);
  const calendar = datePicker.calendarArray; // clean calendar keys

  delete calendar["month"];
  delete calendar["day"];
  const calendarYear = Object.keys(calendar);
  const monthArray = datePicker.monthArray[language];
  let [currentDate, setCurrentDate] = (0, _react.useState)(_objectSpread({}, datePicker.currentDate)); //Redifined the monthArray to get the exactly number of day in february

  datePicker.redifineMonthArray(currentDate.year);
  currentDate.monthLengthArray = [...datePicker.monthLengthArray];
  (0, _react.useLayoutEffect)(() => {
    if (inputVal) {
      setCurrentDate(_objectSpread(_objectSpread({}, currentDate), {}, {
        monthName: {
          abbr: currentInput.dataset.abbr,
          name: currentInput.dataset.month
        },
        month: currentInput.dataset.month_key,
        year: currentInput.dataset.year,
        date: currentInput.dataset.date
      }));
    }
  }, []); //DATEPICKER ENGINE

  const handleChangeMonth = e => {
    const selectMonth = e.target.value;
    const monthKey = datePicker.getMonthKeyByName(e.target.value);
    setCurrentDate(_objectSpread(_objectSpread({}, currentDate), {}, {
      monthName: selectMonth,
      month: monthKey
    }));
  };

  const handleChangeYear = e => {
    const selectYear = e.target.value;
    setCurrentDate(_objectSpread(_objectSpread({}, currentDate), {}, {
      year: parseInt(selectYear)
    }));
  };

  const prevMonth = () => {
    /* const selectMonth = e.target.value;*/
    const newMonthKey = currentDate.month - 1 < 0 ? 11 : currentDate.month - 1;
    const selectMonth = datePicker.getMonthName(newMonthKey);
    const newYear = currentDate.month - 1 < 0 ? currentDate.year - 1 < startCalendar ? endCalendar : currentDate.year - 1 : currentDate.year;
    setCurrentDate(_objectSpread(_objectSpread({}, currentDate), {}, {
      monthName: selectMonth,
      month: newMonthKey,
      year: newYear
    }));
  };

  const nextMonth = () => {
    const newMonthKey = currentDate.month + 1 > 11 ? 0 : currentDate.month + 1;
    const selectMonth = datePicker.getMonthName(newMonthKey);
    const newYear = currentDate.month + 1 > 11 ? currentDate.year + 1 > endCalendar ? startCalendar : currentDate.year + 1 : currentDate.year;
    setCurrentDate(_objectSpread(_objectSpread({}, currentDate), {}, {
      monthName: selectMonth,
      month: newMonthKey,
      year: newYear
    }));
  };

  const homeCalendar = () => {
    const month = datePicker.currentDate.month;
    setCurrentDate(_objectSpread(_objectSpread({}, currentDate), {}, {
      monthName: datePicker.getMonthName(month),
      month: datePicker.currentDate.month,
      year: datePicker.currentDate.year
    }));
  }; //INTERNAL COMPONENT


  const createSelectMonth = months => {
    return /*#__PURE__*/_react.default.createElement("select", {
      value: currentDate.monthName.name,
      onChange: handleChangeMonth
    }, months.map((month, index) => {
      return /*#__PURE__*/_react.default.createElement("option", {
        value: month.name,
        key: index
      }, month.name);
    }));
  };

  const createSelectYear = years => {
    return /*#__PURE__*/_react.default.createElement("select", {
      value: currentDate.year,
      onChange: handleChangeYear
    }, years.map((year, index) => {
      return /*#__PURE__*/_react.default.createElement("option", {
        value: year,
        key: index
      }, year);
    }));
  };

  const createHeadCurrentCalendar = () => {
    return _calendarArray.dayArrayTable[language].map((item, index) => {
      return /*#__PURE__*/_react.default.createElement("th", {
        key: index
      }, item.abbr);
    });
  };

  const showDate = day => {
    setInput(day);
  };

  const createBodyCurrentCalendar = () => {
    const allWeeks = calendar[currentDate.year].month[currentDate.month].weeks;
    return allWeeks.map((week, key) => /*#__PURE__*/_react.default.createElement("tr", {
      key: key
    }, week.map((day, index) => day.date === parseInt(currentDate.date) && day.style === "current" ? /*#__PURE__*/_react.default.createElement("td", {
      className: "currentDay",
      key: index,
      "data-fulldate": day.fullDate,
      "data-year": day.year,
      "data-month": day.month.name,
      onClick: () => {
        showDate(day);
      }
    }, day.date) : /*#__PURE__*/_react.default.createElement("td", {
      className: "".concat(day.style),
      key: index,
      "data-fulldate": day.fullDate,
      "data-year": day.year,
      "data-month": day.month.name,
      onClick: () => {
        showDate(day);
      }
    }, day.date))));
  };

  const currentCalendar = () => {
    return /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, createHeadCurrentCalendar())), /*#__PURE__*/_react.default.createElement("tbody", null, createBodyCurrentCalendar()));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "date_picker_by_raficraft"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "head"
  }, /*#__PURE__*/_react.default.createElement(_ri.RiArrowLeftSFill, {
    onClick: prevMonth,
    className: "btn_carousel"
  }), /*#__PURE__*/_react.default.createElement(_vsc.VscHome, {
    onClick: homeCalendar,
    className: "home_icon"
  }), createSelectMonth(monthArray)
  /*Select Month*/
  , createSelectYear(calendarYear)
  /*Select year*/
  , /*#__PURE__*/_react.default.createElement(_ri.RiArrowRightSFill, {
    onClick: nextMonth,
    className: "btn_carousel"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel_container"
  }, currentCalendar())));
};

exports.DatePickerBody = DatePickerBody;