"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useClickOutside = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const useClickOutside = init => {
  const refOutsideClick = (0, _react.useRef)(null);
  const [visible, setVisible] = (0, _react.useState)(init);

  const handleClickOutside = event => {
    if (refOutsideClick.current && !refOutsideClick.current.contains(event.target)) {
      setVisible(false);
    }
  };

  (0, _react.useEffect)(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [refOutsideClick]);
  return {
    visible,
    setVisible,
    refOutsideClick
  };
};

exports.useClickOutside = useClickOutside;