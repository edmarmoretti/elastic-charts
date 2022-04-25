(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[272],{

/***/ "../../storybook/stories/bar/47_stacked_only_grouped.story.tsx":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/elastic-charts/elastic-charts/storybook/stories/bar/47_stacked_only_grouped.story.tsx ***!
  \***************************************************************************************************************/
/*! exports provided: Example */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Example\", function() { return Example; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elastic_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/charts */ \"../../packages/charts/src/index.ts\");\n/* harmony import */ var _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/charts/src/utils/data_samples/test_dataset_kibana */ \"../../packages/charts/src/utils/data_samples/test_dataset_kibana.ts\");\n/* harmony import */ var _use_base_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../use_base_theme */ \"../../storybook/use_base_theme.ts\");\n/*\n * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one\n * or more contributor license agreements. Licensed under the Elastic License\n * 2.0 and the Server Side Public License, v 1; you may not use this file except\n * in compliance with, at your election, the Elastic License 2.0 or the Server\n * Side Public License, v 1.\n */\n\n\n\n\nconst Example = () => {\n    const data1 = [\n        [1, 2],\n        [2, 2],\n        [3, 3],\n        [4, 5],\n        [5, 5],\n        [6, 3],\n        [7, 8],\n        [8, 2],\n        [9, 1],\n    ];\n    const data2 = [\n        [1, 1],\n        [2, 2],\n        [3, 3],\n        [4, 4],\n        [5, 5],\n        [6, 4],\n        [7, 3],\n        [8, 2],\n        [9, 4],\n    ];\n    const data3 = [\n        [1, 6],\n        [2, 6],\n        [3, 3],\n        [4, 2],\n        [5, 1],\n        [6, 1],\n        [7, 5],\n        [8, 6],\n        [9, 7],\n    ];\n    const data4 = [\n        [1, 2],\n        [2, 6],\n        [3, 2],\n        [4, 9],\n        [5, 2],\n        [6, 3],\n        [7, 1],\n        [8, 2],\n        [9, 7],\n    ];\n    const data5 = [\n        [1, 1],\n        [2, 7],\n        [3, 5],\n        [4, 6],\n        [5, 5],\n        [6, 4],\n        [7, 2],\n        [8, 4],\n        [9, 8],\n    ];\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"], { renderer: \"canvas\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Settings\"], { baseTheme: Object(_use_base_theme__WEBPACK_IMPORTED_MODULE_3__[\"useBaseTheme\"])() }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Axis\"], { id: \"bottom\", title: \"index\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Position\"].Bottom }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Axis\"], { id: \"left\", title: _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_2__[\"KIBANA_METRICS\"].metrics.kibana_os_load[0].metric.title, position: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Position\"].Left, tickFormat: (d) => Number(d).toFixed(2), domain: { min: 0, max: 15 } }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Axis\"], { id: \"left group b\", groupId: \"gb\", title: _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_2__[\"KIBANA_METRICS\"].metrics.kibana_os_load[0].metric.title, position: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Position\"].Left, tickFormat: (d) => Number(d).toFixed(2), hide: true, domain: { min: 0, max: 15 } }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"BarSeries\"], { id: \"stacked bar 1\", xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, xAccessor: 0, yAccessors: [1], stackAccessors: [0], data: data1 }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"BarSeries\"], { id: \"stacked bar 2\", xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, xAccessor: 0, yAccessors: [1], stackAccessors: [0], data: data2 }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"BarSeries\"], { id: \"stacked bar A\", groupId: \"gb\", xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, xAccessor: 0, yAccessors: [1], stackAccessors: [0], data: data4 }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"BarSeries\"], { id: \"stacked bar B\", groupId: \"gb\", xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, xAccessor: 0, yAccessors: [1], stackAccessors: [0], data: data5 }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"BarSeries\"], { id: \"non stacked bar\", xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, xAccessor: 0, yAccessors: [1], data: data3 })));\n};\n\n\n//# sourceURL=webpack:////home/runner/work/elastic-charts/elastic-charts/storybook/stories/bar/47_stacked_only_grouped.story.tsx?");

/***/ })

}]);