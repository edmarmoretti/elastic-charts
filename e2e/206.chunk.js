(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[206],{

/***/ "../../packages/charts/src/utils/data_samples/test_dataset.ts":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/elastic-charts/elastic-charts/packages/charts/src/utils/data_samples/test_dataset.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BARCHART_1Y0G, BARCHART_1Y0G_LINEAR, BARCHART_1Y1G, BARCHART_1Y1G_ORDINAL, BARCHART_1Y1G_LINEAR, BARCHART_1Y2G, BARCHART_2Y0G, CHART_ORDINAL_2Y0G, BARCHART_2Y1G, BARCHART_2Y2G, BARCHART_2Y3G, TIME_CHART_2Y0G */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BARCHART_1Y0G\", function() { return BARCHART_1Y0G; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BARCHART_1Y0G_LINEAR\", function() { return BARCHART_1Y0G_LINEAR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BARCHART_1Y1G\", function() { return BARCHART_1Y1G; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BARCHART_1Y1G_ORDINAL\", function() { return BARCHART_1Y1G_ORDINAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BARCHART_1Y1G_LINEAR\", function() { return BARCHART_1Y1G_LINEAR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BARCHART_1Y2G\", function() { return BARCHART_1Y2G; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BARCHART_2Y0G\", function() { return BARCHART_2Y0G; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHART_ORDINAL_2Y0G\", function() { return CHART_ORDINAL_2Y0G; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BARCHART_2Y1G\", function() { return BARCHART_2Y1G; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BARCHART_2Y2G\", function() { return BARCHART_2Y2G; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BARCHART_2Y3G\", function() { return BARCHART_2Y3G; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TIME_CHART_2Y0G\", function() { return TIME_CHART_2Y0G; });\n/*\n * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one\n * or more contributor license agreements. Licensed under the Elastic License\n * 2.0 and the Server Side Public License, v 1; you may not use this file except\n * in compliance with, at your election, the Elastic License 2.0 or the Server\n * Side Public License, v 1.\n */\n/** @internal */\nconst BARCHART_1Y0G = [\n    { x: 0, y: 1 },\n    { x: 1, y: 2 },\n    { x: 2, y: 10 },\n    { x: 3, y: 6 },\n];\n/** @internal */\nconst BARCHART_1Y0G_LINEAR = [\n    { x: 0, y: 1 },\n    { x: 1, y: 2 },\n    { x: 2.5, y: 10 },\n    { x: 3.5, y: 6 },\n];\n/** @internal */\nconst BARCHART_1Y1G = [\n    { x: 0, g: 'a', y: 1 },\n    { x: 0, g: 'b', y: 2 },\n    { x: 1, g: 'a', y: 2 },\n    { x: 1, g: 'b', y: 3 },\n    { x: 2, g: 'a', y: 3 },\n    { x: 2, g: 'b', y: 4 },\n    { x: 3, g: 'a', y: 4 },\n    { x: 3, g: 'b', y: 5 },\n];\n/** @internal */\nconst BARCHART_1Y1G_ORDINAL = [\n    { x: 'a', g: 'a', y: 1 },\n    { x: 'a', g: 'b', y: 2 },\n    { x: 'b', g: 'a', y: 2 },\n    { x: 'b', g: 'b', y: 3 },\n    { x: 'c', g: 'a', y: 3 },\n    { x: 'd', g: 'b', y: 4 },\n    { x: 'e', g: 'a', y: 4 },\n    { x: 'e', g: 'b', y: 5 },\n];\n/** @internal */\nconst BARCHART_1Y1G_LINEAR = [\n    { x: 0, g: 'a', y: 1 },\n    { x: 0, g: 'b', y: 1 },\n    { x: 1, g: 'a', y: 2 },\n    { x: 1, g: 'b', y: 2 },\n    { x: 2, g: 'a', y: 10 },\n    { x: 2, g: 'b', y: 20 },\n    { x: 3, g: 'a', y: 6 },\n    { x: 5, g: 'a', y: 2 },\n    { x: 7, g: 'b', y: 3 },\n];\n/** @internal */\nconst BARCHART_1Y2G = [\n    { x: 0, g1: 'a', g2: 's', y: 1 },\n    { x: 0, g1: 'a', g2: 'p', y: 1 },\n    { x: 0, g1: 'b', g2: 's', y: 1 },\n    { x: 0, g1: 'b', g2: 'p', y: 1 },\n    { x: 1, g1: 'a', g2: 's', y: 2 },\n    { x: 1, g1: 'a', g2: 'p', y: 2 },\n    { x: 1, g1: 'b', g2: 's', y: 2 },\n    { x: 1, g1: 'b', g2: 'p', y: 2 },\n    { x: 2, g1: 'a', g2: 's', y: 1 },\n    { x: 2, g1: 'a', g2: 'p', y: 2 },\n    { x: 2, g1: 'b', g2: 's', y: 3 },\n    { x: 2, g1: 'b', g2: 'p', y: 4 },\n    { x: 3, g1: 'a', g2: 's', y: 6 },\n    { x: 3, g1: 'a', g2: 'p', y: 6 },\n    { x: 3, g1: 'b', g2: 's', y: 6 },\n    { x: 3, g1: 'b', g2: 'p', y: 6 },\n];\n/** @internal */\nconst BARCHART_2Y0G = [\n    { x: 0, y1: 1, y2: 3 },\n    { x: 1, y1: 2, y2: 7 },\n    { x: 2, y1: 1, y2: 2 },\n    { x: 3, y1: 6, y2: 10 },\n];\n/** @internal */\nconst CHART_ORDINAL_2Y0G = [\n    { x: 'a', y1: 1, y2: 3 },\n    { x: 'b', y1: 2, y2: 7 },\n    { x: 'c', y1: 1, y2: 2 },\n    { x: 'd', y1: 6, y2: 10 },\n];\n/** @internal */\nconst BARCHART_2Y1G = [\n    { x: 0, g: 'a', y1: 1, y2: 4 },\n    { x: 0, g: 'b', y1: 3, y2: 6 },\n    { x: 1, g: 'a', y1: 2, y2: 1 },\n    { x: 1, g: 'b', y1: 2, y2: 5 },\n    { x: 2, g: 'a', y1: 10, y2: 5 },\n    { x: 2, g: 'b', y1: 3, y2: 1 },\n    { x: 3, g: 'a', y1: 7, y2: 3 },\n    { x: 3, g: 'b', y1: 6, y2: 4 },\n];\n/** @internal */\nconst BARCHART_2Y2G = [\n    { x: 0, g1: 'cdn.google.com', g2: 'direct-cdn', y1: 1, y2: 4 },\n    { x: 0, g1: 'cdn.google.com', g2: 'indirect-cdn', y1: 1, y2: 4 },\n    { x: 0, g1: 'cloudflare.com', g2: 'direct-cdn', y1: 3, y2: 6 },\n    { x: 0, g1: 'cloudflare.com', g2: 'indirect-cdn', y1: 3, y2: 6 },\n    { x: 1, g1: 'cdn.google.com', g2: 'direct-cdn', y1: 2, y2: 1 },\n    { x: 1, g1: 'cdn.google.com', g2: 'indirect-cdn', y1: 2, y2: 1 },\n    { x: 1, g1: 'cloudflare.com', g2: 'direct-cdn', y1: 2, y2: 5 },\n    { x: 1, g1: 'cloudflare.com', g2: 'indirect-cdn', y1: 2, y2: 5 },\n    { x: 2, g1: 'cdn.google.com', g2: 'direct-cdn', y1: 10, y2: 5 },\n    { x: 2, g1: 'cdn.google.com', g2: 'indirect-cdn', y1: 10, y2: 5 },\n    { x: 2, g1: 'cloudflare.com', g2: 'direct-cdn', y1: 3, y2: 1 },\n    { x: 2, g1: 'cloudflare.com', g2: 'indirect-cdn', y1: 3, y2: 1 },\n    { x: 3, g1: 'cdn.google.com', g2: 'direct-cdn', y1: 7, y2: 3 },\n    { x: 3, g1: 'cdn.google.com', g2: 'indirect-cdn', y1: 7, y2: 3 },\n    { x: 3, g1: 'cloudflare.com', g2: 'direct-cdn', y1: 6, y2: 4 },\n    { x: 3, g1: 'cloudflare.com', g2: 'indirect-cdn', y1: 6, y2: 4 },\n    { x: 6, g1: 'cdn.google.com', g2: 'direct-cdn', y1: 7, y2: 3 },\n    { x: 6, g1: 'cdn.google.com', g2: 'indirect-cdn', y1: 7, y2: 3 },\n    { x: 6, g1: 'cloudflare.com', g2: 'direct-cdn', y1: 6, y2: 4 },\n    { x: 6, g1: 'cloudflare.com', g2: 'indirect-cdn', y1: 6, y2: 4 },\n];\n/** @internal */\nconst BARCHART_2Y3G = [\n    { x: 0, g1: 'cdn.google.com', g2: 'direct-cdn', y1: 1, y2: 4, g3: 'somevalue' },\n    { x: 0, g1: 'cdn.google.com', g2: 'indirect-cdn', y1: 1, y2: 4, g3: 'newvalue' },\n    { x: 0, g1: 'cloudflare.com', g2: 'direct-cdn', y1: 3, y2: 6, g3: 'somevalue' },\n    { x: 0, g1: 'cloudflare.com', g2: 'indirect-cdn', y1: 3, y2: 6, g3: 'newvalue' },\n    { x: 1, g1: 'cdn.google.com', g2: 'direct-cdn', y1: 2, y2: 1, g3: 'somevalue' },\n    { x: 1, g1: 'cdn.google.com', g2: 'indirect-cdn', y1: 2, y2: 1, g3: 'newvalue' },\n    { x: 1, g1: 'cloudflare.com', g2: 'direct-cdn', y1: 2, y2: 5, g3: 'somevalue' },\n    { x: 1, g1: 'cloudflare.com', g2: 'indirect-cdn', y1: 2, y2: 5, g3: 'newvalue' },\n    { x: 2, g1: 'cdn.google.com', g2: 'direct-cdn', y1: 10, y2: 5, g3: 'somevalue' },\n    { x: 2, g1: 'cdn.google.com', g2: 'indirect-cdn', y1: 10, y2: 5, g3: 'newvalue' },\n    { x: 2, g1: 'cloudflare.com', g2: 'direct-cdn', y1: 3, y2: 1, g3: 'somevalue' },\n    { x: 2, g1: 'cloudflare.com', g2: 'indirect-cdn', y1: 3, y2: 1, g3: 'newvalue' },\n    { x: 3, g1: 'cdn.google.com', g2: 'direct-cdn', y1: 7, y2: 3, g3: 'somevalue' },\n    { x: 3, g1: 'cdn.google.com', g2: 'indirect-cdn', y1: 7, y2: 3, g3: 'newvalue' },\n    { x: 3, g1: 'cloudflare.com', g2: 'direct-cdn', y1: 6, y2: 4, g3: 'somevalue' },\n    { x: 3, g1: 'cloudflare.com', g2: 'indirect-cdn', y1: 6, y2: 4, g3: 'newvalue' },\n    { x: 6, g1: 'cdn.google.com', g2: 'direct-cdn', y1: 7, y2: 3, g3: 'somevalue' },\n    { x: 6, g1: 'cdn.google.com', g2: 'indirect-cdn', y1: 7, y2: 3, g3: 'newvalue' },\n    { x: 6, g1: 'cloudflare.com', g2: 'direct-cdn', y1: 6, y2: 4, g3: 'somevalue' },\n    { x: 6, g1: 'cloudflare.com', g2: 'indirect-cdn', y1: 6, y2: 4, g3: 'newvalue' },\n];\nconst NOW = Date.now();\nconst DAY = 24 * 60 * 60 * 1000;\n/** @internal */\nconst TIME_CHART_2Y0G = [\n    { x: NOW, y1: 1, y2: 3 },\n    { x: NOW + DAY, y1: 2, y2: 7 },\n    { x: NOW + DAY * 2, y1: 1, y2: 2 },\n    { x: NOW + DAY * 3, y1: 6, y2: 10 },\n];\n\n\n//# sourceURL=webpack:////home/runner/work/elastic-charts/elastic-charts/packages/charts/src/utils/data_samples/test_dataset.ts?");

/***/ }),

/***/ "../../storybook/stories/bar/21_bar_chart_2y0g.story.tsx":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/elastic-charts/elastic-charts/storybook/stories/bar/21_bar_chart_2y0g.story.tsx ***!
  \*********************************************************************************************************/
/*! exports provided: Example */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Example\", function() { return Example; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elastic_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/charts */ \"../../packages/charts/src/index.ts\");\n/* harmony import */ var _elastic_charts_src_utils_data_samples_test_dataset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/charts/src/utils/data_samples/test_dataset */ \"../../packages/charts/src/utils/data_samples/test_dataset.ts\");\n/* harmony import */ var _use_base_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../use_base_theme */ \"../../storybook/use_base_theme.ts\");\n/*\n * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one\n * or more contributor license agreements. Licensed under the Elastic License\n * 2.0 and the Server Side Public License, v 1; you may not use this file except\n * in compliance with, at your election, the Elastic License 2.0 or the Server\n * Side Public License, v 1.\n */\n\n\n\n\nconst Example = () => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"], null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Settings\"], { showLegend: true, showLegendExtra: true, legendPosition: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Position\"].Right, baseTheme: Object(_use_base_theme__WEBPACK_IMPORTED_MODULE_3__[\"useBaseTheme\"])() }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Axis\"], { id: \"bottom\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Position\"].Bottom, title: \"Bottom axis\", showOverlappingTicks: true }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Axis\"], { id: \"left2\", title: \"Left axis\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Position\"].Left, tickFormat: (d) => Number(d).toFixed(2) }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"BarSeries\"], { id: \"bars1\", xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Ordinal, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"ScaleType\"].Linear, xAccessor: \"x\", yAccessors: ['y1', 'y2'], data: _elastic_charts_src_utils_data_samples_test_dataset__WEBPACK_IMPORTED_MODULE_2__[\"BARCHART_2Y0G\"] })));\n\n\n//# sourceURL=webpack:////home/runner/work/elastic-charts/elastic-charts/storybook/stories/bar/21_bar_chart_2y0g.story.tsx?");

/***/ })

}]);