import _extends from '@babel/runtime/helpers/esm/extends';
import React from 'react';
import { S as Select } from '../../dist/Select-d7a93e43.esm.js';
import { u as useStateManager } from '../../dist/useStateManager-7be7389a.esm.js';
import { u as useAsync } from '../../dist/useAsync-ce8579d2.esm.js';
import '../../dist/index-bd7e8faa.esm.js';
import '@emotion/react';
import '@babel/runtime/helpers/taggedTemplateLiteral';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/typeof';
import 'react-input-autosize';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/inherits';
import '@babel/runtime/helpers/defineProperty';
import 'react-dom';
import '@babel/runtime/helpers/toConsumableArray';
import 'memoize-one';
import '@babel/runtime/helpers/slicedToArray';

var AsyncSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var stateManagedProps = useAsync(props);
  var selectProps = useStateManager(stateManagedProps);
  return /*#__PURE__*/React.createElement(Select, _extends({
    ref: ref
  }, selectProps));
});

export default AsyncSelect;
