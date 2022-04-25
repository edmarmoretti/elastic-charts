(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[257],{

/***/ "../../storybook/stories/area/9_stacked_separate_specs.story.tsx":
/*!*****************************************************************************************************************!*\
  !*** /home/runner/work/elastic-charts/elastic-charts/storybook/stories/area/9_stacked_separate_specs.story.tsx ***!
  \*****************************************************************************************************************/
/*! exports provided: Example */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Example\", function() { return Example; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elastic_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/charts */ \"../../packages/charts/src/index.ts\");\n/* harmony import */ var _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/charts/src/utils/data_samples/test_dataset_kibana */ \"../../packages/charts/src/utils/data_samples/test_dataset_kibana.ts\");\n/* harmony import */ var _use_base_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../use_base_theme */ \"../../storybook/use_base_theme.ts\");\n/*\n * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one\n * or more contributor license agreements. Licensed under the Elastic License\n * 2.0 and the Server Side Public License, v 1; you may not use this file except\n * in compliance with, at your election, the Elastic License 2.0 or the Server\n * Side Public License, v 1.\n */\n\n\n\n\nconst dateFormatter = Object(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"timeFormatter\"])('HH:mm');\nconst Example = () => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"], null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Settings\"], { showLegend: true, showLegendExtra: true, legendPosition: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Position\"].Right, baseTheme: Object(_use_base_theme__WEBPACK_IMPORTED_MODULE_3__[\"useBaseTheme\"])() }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Axis\"], { id: \"bottom\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Position\"].Bottom, title: \"timestamp per 1 minute\", showOverlappingTicks: true, tickFormat: dateFormatter }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Axis\"], { id: \"left\", title: _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_2__[\"KIBANA_METRICS\"].metrics.kibana_os_load[0].metric.title, position: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Position\"].Left, tickFormat: (d) => Number(d).toFixed(2) }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"AreaSeries\"], { id: \"1\", name: _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_2__[\"KIBANA_METRICS\"].metrics.kibana_os_load[2].metric.label, xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Time, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, xAccessor: 0, yAccessors: [1], stackAccessors: [0], data: _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_2__[\"KIBANA_METRICS\"].metrics.kibana_os_load[2].data }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"AreaSeries\"], { id: \"2\", name: _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_2__[\"KIBANA_METRICS\"].metrics.kibana_os_load[1].metric.label, xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Time, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, xAccessor: 0, yAccessors: [1], stackAccessors: [0], data: _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_2__[\"KIBANA_METRICS\"].metrics.kibana_os_load[1].data }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"AreaSeries\"], { id: \"3\", name: _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_2__[\"KIBANA_METRICS\"].metrics.kibana_os_load[0].metric.label, xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Time, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, xAccessor: 0, yAccessors: [1], stackAccessors: [0], data: _elastic_charts_src_utils_data_samples_test_dataset_kibana__WEBPACK_IMPORTED_MODULE_2__[\"KIBANA_METRICS\"].metrics.kibana_os_load[0].data })));\n\n\n//# sourceURL=webpack:////home/runner/work/elastic-charts/elastic-charts/storybook/stories/area/9_stacked_separate_specs.story.tsx?");

/***/ })

}]);