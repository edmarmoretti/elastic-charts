(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[283],{

/***/ "../../storybook/stories/goal/14_one_third.story.tsx":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/elastic-charts/elastic-charts/storybook/stories/goal/14_one_third.story.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: Example */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Example\", function() { return Example; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elastic_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/charts */ \"../../packages/charts/src/index.ts\");\n/* harmony import */ var _elastic_charts_src_chart_types_goal_chart_specs_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/charts/src/chart_types/goal_chart/specs/constants */ \"../../packages/charts/src/chart_types/goal_chart/specs/constants.ts\");\n/* harmony import */ var _use_base_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../use_base_theme */ \"../../storybook/use_base_theme.ts\");\n/*\n * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one\n * or more contributor license agreements. Licensed under the Elastic License\n * 2.0 and the Server Side Public License, v 1; you may not use this file except\n * in compliance with, at your election, the Elastic License 2.0 or the Server\n * Side Public License, v 1.\n */\n\n\n\n\nconst subtype = _elastic_charts_src_chart_types_goal_chart_specs_constants__WEBPACK_IMPORTED_MODULE_2__[\"GoalSubtype\"].Goal;\nconst colorMap = {\n    200: '#fc8d62',\n    250: 'lightgrey',\n    300: '#66c2a5',\n};\nconst bandFillColor = (x) => colorMap[x];\nconst Example = () => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"], null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Settings\"], { baseTheme: Object(_use_base_theme__WEBPACK_IMPORTED_MODULE_3__[\"useBaseTheme\"])() }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_1__[\"Goal\"], { id: \"spec_1\", subtype: subtype, base: 0, target: 260, actual: 280, domain: { min: 0, max: 300 }, bands: [200, 250, 300], ticks: [0, 50, 100, 150, 200, 250, 300], tickValueFormatter: ({ value }) => String(value), bandFillColor: ({ value }) => bandFillColor(value), labelMajor: \"\", labelMinor: \"\", centralMajor: \"280 MB/s\", centralMinor: \"\", angleStart: Math.PI - (Math.PI - (2 * Math.PI) / 3) / 2, angleEnd: (Math.PI - (2 * Math.PI) / 3) / 2 })));\n\n\n//# sourceURL=webpack:////home/runner/work/elastic-charts/elastic-charts/storybook/stories/goal/14_one_third.story.tsx?");

/***/ })

}]);