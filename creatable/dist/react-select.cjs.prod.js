"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _extends = require("@babel/runtime/helpers/extends"), React = require("react"), base_dist_reactSelect = require("../../dist/Select-f184109d.cjs.prod.js"), useStateManager = require("../../dist/useStateManager-fb77b8ff.cjs.prod.js"), useCreatable = require("../../dist/useCreatable-6f7004b6.cjs.prod.js");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

require("../../dist/index-074ba08d.cjs.prod.js"), require("@emotion/react"), require("@babel/runtime/helpers/taggedTemplateLiteral"), 
require("@babel/runtime/helpers/objectWithoutProperties"), require("@babel/runtime/helpers/typeof"), 
require("react-input-autosize"), require("@babel/runtime/helpers/classCallCheck"), 
require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/inherits"), 
require("@babel/runtime/helpers/defineProperty"), require("react-dom"), require("@babel/runtime/helpers/toConsumableArray"), 
require("memoize-one"), require("@babel/runtime/helpers/slicedToArray");

var _extends__default = _interopDefault(_extends), React__default = _interopDefault(React), CreatableSelect = React__default.default.forwardRef((function(props, ref) {
  var creatableProps = useStateManager.useStateManager(props), selectProps = useCreatable.useCreatable(creatableProps);
  return React__default.default.createElement(base_dist_reactSelect.Select, _extends__default.default({
    ref: ref
  }, selectProps));
}));

exports.default = CreatableSelect;
