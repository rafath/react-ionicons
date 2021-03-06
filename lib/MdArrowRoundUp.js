'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVG = require('./SVG');

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdArrowRoundUp = function MdArrowRoundUp(props) {
  return _react2.default.createElement(
    _SVG2.default,
    {
      style: props.style,
      className: props.className,
      fill: props.color,
      width: props.fontSize,
      height: props.fontSize,
      viewBox: '0 0 1024 1024',
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0
    },
    _react2.default.createElement('path', { d: 'M825.2 454.2l-268-276.2c-11.6-12-27.4-18-44.8-18h-0.8c-17.4 0-33.2 6-44.8 18l-268 276.2c-25 24-25 62.6 0 86.4s65.4 23.8 90.4 0l158.8-166v428c0 33.8 28.6 61.2 64 61.2 36 0 64-27.4 64-61.2v-428l158.8 166c25 23.8 65.4 23.8 90.4 0s25-62.4 0-86.4z' })
  );
};

MdArrowRoundUp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdArrowRoundUp.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = MdArrowRoundUp;
module.exports = exports['default'];
//# sourceMappingURL=MdArrowRoundUp.js.map