'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var React = require('react');
var base_dist_reactSelect = require('../../dist/Select-adc36f9b.cjs.dev.js');
var useStateManager = require('../../dist/useStateManager-afed46ed.cjs.dev.js');
var useCreatable = require('../../dist/useCreatable-17931e7d.cjs.dev.js');
require('../../dist/index-ea860ca4.cjs.dev.js');
require('@emotion/react');
require('@babel/runtime/helpers/taggedTemplateLiteral');
require('@babel/runtime/helpers/objectWithoutProperties');
require('@babel/runtime/helpers/typeof');
require('react-input-autosize');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/inherits');
require('@babel/runtime/helpers/defineProperty');
require('react-dom');
require('@babel/runtime/helpers/toConsumableArray');
require('memoize-one');
require('@babel/runtime/helpers/slicedToArray');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefault(_extends);
var React__default = /*#__PURE__*/_interopDefault(React);

var CreatableSelect = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var creatableProps = useStateManager.useStateManager(props);
  var selectProps = useCreatable.useCreatable(creatableProps);
  return /*#__PURE__*/React__default['default'].createElement(base_dist_reactSelect.Select, _extends__default['default']({
    ref: ref
  }, selectProps));
});

exports.default = CreatableSelect;
