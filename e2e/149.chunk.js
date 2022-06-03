(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[149],{

/***/ "../../storybook/stories/axes/13_label_formatting.story.tsx":
/*!************************************************************************************************************!*\
  !*** /home/runner/work/elastic-charts/elastic-charts/storybook/stories/axes/13_label_formatting.story.tsx ***!
  \************************************************************************************************************/
/*! exports provided: Example */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Example\", function() { return Example; });\n/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/addon-knobs */ \"./mocks/@storybook/addon-knobs/index.ts\");\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ \"../../node_modules/numeral/numeral.js\");\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _elastic_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/charts */ \"../../packages/charts/src/index.ts\");\n/* harmony import */ var _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/charts/src/utils/data_samples/test_dataset_kibana */ \"../../packages/charts/src/utils/data_samples/test_dataset_kibana.ts\");\n/* harmony import */ var _use_base_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../use_base_theme */ \"../../storybook/use_base_theme.ts\");\n/*\n * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one\n * or more contributor license agreements. Licensed under the Elastic License\n * 2.0 and the Server Side Public License, v 1; you may not use this file except\n * in compliance with, at your election, the Elastic License 2.0 or the Server\n * Side Public License, v 1.\n */\n\n\n\n\n\n\nconst Example = () => {\n    const tickFormatBottom = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"text\"])('tickFormat bottom', '0.0000');\n    const labelFormatBottom = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"text\"])('labelFormat bottom', '0.0');\n    const tickFormatLeft = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"text\"])('tickFormat left', '$ 0,0[.]00');\n    const labelFormatLeft = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"text\"])('labelFormat left', '$ 0,0');\n    const start = _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_4__[\"KIBANA_METRICS\"].metrics.kibana_os_load[0].data[0][0];\n    const data = _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_4__[\"KIBANA_METRICS\"].metrics.kibana_os_load[0].data.slice(0, 20).map((d) => [(d[0] - start) / 30000, d[1]]);\n    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_3__[\"Chart\"], null,\n        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_3__[\"Settings\"], { baseTheme: Object(_use_base_theme__WEBPACK_IMPORTED_MODULE_5__[\"useBaseTheme\"])() }),\n        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_3__[\"Axis\"], { id: \"bottom\", title: \"Weight\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_3__[\"Position\"].Bottom, showOverlappingTicks: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('showOverlappingTicks bottom axis', false), showOverlappingLabels: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('showOverlappingLabels bottom axis', false), tickFormat: (d) => numeral__WEBPACK_IMPORTED_MODULE_1___default()(d).format(tickFormatBottom), labelFormat: (d) => numeral__WEBPACK_IMPORTED_MODULE_1___default()(d).format(labelFormatBottom) }),\n        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_3__[\"Axis\"], { id: \"left\", title: \"Price\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_3__[\"Position\"].Left, tickFormat: (d) => numeral__WEBPACK_IMPORTED_MODULE_1___default()(d).format(tickFormatLeft), labelFormat: (d) => numeral__WEBPACK_IMPORTED_MODULE_1___default()(d).format(labelFormatLeft) }),\n        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_3__[\"AreaSeries\"], { id: \"areas\", xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_3__[\"ScaleType\"].Linear, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_3__[\"ScaleType\"].Linear, xAccessor: 0, yAccessors: [1], data: data, curve: _elastic_charts__WEBPACK_IMPORTED_MODULE_3__[\"CurveType\"].CURVE_MONOTONE_X })));\n};\nExample.parameters = {\n    markdown: `You can apply different formatter between tick values in the tooltip and legend by using\n      different values for \\`tickFormat\\` and \\`labelFormat\\`.\n\nUse a [numeraljs](http://numeraljs.com/) format with the knobs to see the difference`,\n};\n\n\n//# sourceURL=webpack:////home/runner/work/elastic-charts/elastic-charts/storybook/stories/axes/13_label_formatting.story.tsx?");

/***/ }),

/***/ "./mocks/@storybook/addon-knobs/index.ts":
/*!***********************************************!*\
  !*** ./mocks/@storybook/addon-knobs/index.ts ***!
  \***********************************************/
/*! exports provided: boolean, number, radios, color, select, text, array, optionsKnob, button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boolean\", function() { return boolean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"number\", function() { return number; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"radios\", function() { return radios; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"color\", function() { return color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"text\", function() { return text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"array\", function() { return array; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"optionsKnob\", function() { return optionsKnob; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"button\", function() { return button; });\n/*\n * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one\n * or more contributor license agreements. Licensed under the Elastic License\n * 2.0 and the Server Side Public License, v 1; you may not use this file except\n * in compliance with, at your election, the Elastic License 2.0 or the Server\n * Side Public License, v 1.\n */\nfunction getParams() {\n    return new URL(window.location.toString()).searchParams;\n}\nfunction getKnobKey(name, groupId) {\n    return `knob-${name}${groupId !== undefined ? `_${groupId}` : ''}`;\n}\nfunction boolean(name, dftValue, groupId) {\n    const param = getParams().get(getKnobKey(name, groupId));\n    return param ? param === 'true' : dftValue;\n}\nfunction number(name, dftValue, options, groupId) {\n    var _a;\n    const params = getParams();\n    const key = getKnobKey(name, groupId);\n    return Number.parseFloat((_a = params.get(key)) !== null && _a !== void 0 ? _a : `${dftValue}`);\n}\nfunction radios(name, options, dftValue, groupId) {\n    return text(name, dftValue, groupId);\n}\nfunction color(name, dftValue, groupId) {\n    return text(name, dftValue, groupId);\n}\nfunction select(name, b, dftValue, groupId) {\n    return text(name, dftValue, groupId);\n}\nfunction text(name, dftValue, groupId) {\n    const value = getParams().get(getKnobKey(name, groupId));\n    // the # used for the color knob needs to be escaped on the URL and unescaped here\n    return value === null ? dftValue : unescape(value);\n}\nfunction array(name, dftValues, options, groupId) {\n    const params = getParams();\n    const values = [];\n    params.forEach((value, key) => {\n        if (key.startsWith(`${getKnobKey(name, groupId)}[`)) {\n            values.push(value);\n        }\n    });\n    if (values.length === 0) {\n        return dftValues;\n    }\n    return values;\n}\nfunction optionsKnob(name, values, dftValues, options, groupId) {\n    return array(name, dftValues, options, groupId);\n}\nfunction button() {\n    // NOP\n}\n\n\n//# sourceURL=webpack:///./mocks/@storybook/addon-knobs/index.ts?");

/***/ })

}]);