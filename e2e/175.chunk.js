(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[175],{

/***/ "../../storybook/stories/grids/1_basic.story.tsx":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/elastic-charts/elastic-charts/storybook/stories/grids/1_basic.story.tsx ***!
  \*************************************************************************************************/
/*! exports provided: Example */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Example\", function() { return Example; });\n/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/addon-knobs */ \"./mocks/@storybook/addon-knobs/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elastic_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/charts */ \"../../packages/charts/src/index.ts\");\n/* harmony import */ var _use_base_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../use_base_theme */ \"../../storybook/use_base_theme.ts\");\n/*\n * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one\n * or more contributor license agreements. Licensed under the Elastic License\n * 2.0 and the Server Side Public License, v 1; you may not use this file except\n * in compliance with, at your election, the Elastic License 2.0 or the Server\n * Side Public License, v 1.\n */\n\n\n\n\nfunction generateGridLineStyle(group, gridColor = 'purple') {\n    const groupId = `${group} axis`;\n    return {\n        visible: true,\n        stroke: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"color\"])(`${groupId} grid line stroke color`, gridColor, groupId),\n        strokeWidth: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"number\"])(`${groupId} grid line stroke width`, 1, {\n            range: true,\n            min: 0,\n            max: 10,\n            step: 1,\n        }, groupId),\n        opacity: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"number\"])(`${groupId} grid line stroke opacity`, 1, {\n            range: true,\n            min: 0,\n            max: 1,\n            step: 0.01,\n        }, groupId),\n        dash: [\n            Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"number\"])(`${groupId} grid line dash length`, 1, {\n                range: true,\n                min: 0,\n                max: 10,\n                step: 1,\n            }, groupId),\n            Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"number\"])(`${groupId} grid line dash spacing`, 1, {\n                range: true,\n                min: 0,\n                max: 10,\n                step: 1,\n            }, groupId),\n        ],\n    };\n}\nconst Example = () => {\n    const leftAxisGridLineStyle = generateGridLineStyle(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Position\"].Left, 'lightblue');\n    const rightAxisGridLineStyle = generateGridLineStyle(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Position\"].Right, 'red');\n    const topAxisGridLineStyle = generateGridLineStyle(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Position\"].Top, 'teal');\n    const bottomAxisGridLineStyle = generateGridLineStyle(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Position\"].Bottom, 'blue');\n    const toggleBottomAxisGridLineStyle = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('use axis gridLine vertically', false, 'bottom axis');\n    const toggleHorizontalAxisGridLineStyle = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('use axis gridLine horizontally', false, 'left axis');\n    const bottomAxisThemeGridLineStyle = generateGridLineStyle('Vertical Axis Theme', 'violet');\n    const leftAxisThemeGridLineStyle = generateGridLineStyle('Horizontal Axis Theme', 'hotpink');\n    const theme = {\n        axes: {\n            gridLine: { vertical: leftAxisThemeGridLineStyle, horizontal: bottomAxisThemeGridLineStyle },\n        },\n    };\n    const integersOnlyLeft = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('left axis show only integer values', false, 'left axis');\n    const integersOnlyRight = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('right axis show only intger values', false, 'right axis');\n    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Chart\"], null,\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Settings\"], { debug: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('debug', false), theme: theme, baseTheme: Object(_use_base_theme__WEBPACK_IMPORTED_MODULE_3__[\"useBaseTheme\"])() }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Axis\"], { id: \"bottom\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Position\"].Bottom, title: \"Bottom axis\", showOverlappingTicks: true, showGridLines: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('show bottom axis grid lines', false, 'bottom axis'), gridLine: toggleBottomAxisGridLineStyle ? bottomAxisGridLineStyle : undefined, integersOnly: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('bottom axis show only integer values', false, 'bottom axis') }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Axis\"], { id: \"left1\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Position\"].Left, title: \"Left axis 1\", tickFormat: integersOnlyLeft ? (d) => Number(d).toFixed(0) : (d) => Number(d).toFixed(2), showGridLines: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('show left axis grid lines', false, 'left axis'), gridLine: toggleHorizontalAxisGridLineStyle ? leftAxisGridLineStyle : undefined, integersOnly: integersOnlyLeft }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Axis\"], { id: \"top\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Position\"].Top, title: \"Top axis\", showOverlappingTicks: true, showGridLines: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('show top axis grid lines', false, 'top axis'), gridLine: topAxisGridLineStyle, integersOnly: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('top axis show only integer values', false, 'top axis') }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Axis\"], { id: \"right\", title: \"Right axis\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Position\"].Right, tickFormat: integersOnlyRight ? (d) => Number(d).toFixed(0) : (d) => Number(d).toFixed(2), showGridLines: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('show right axis grid lines', false, 'right axis'), gridLine: rightAxisGridLineStyle, integersOnly: integersOnlyRight }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"BarSeries\"], { id: \"bars\", xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"ScaleType\"].Linear, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"ScaleType\"].Linear, xAccessor: \"x\", yAccessors: ['y'], data: [\n                { x: 0, y: 2 },\n                { x: 1, y: 7 },\n                { x: 2, y: 3 },\n                { x: 3, y: 6 },\n            ] }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"LineSeries\"], { id: \"lines\", xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"ScaleType\"].Linear, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"ScaleType\"].Linear, groupId: \"group2\", xAccessor: \"x\", yAccessors: ['y'], stackAccessors: ['x'], data: [\n                { x: 0, y: 3 },\n                { x: 1, y: 2 },\n                { x: 2, y: 4 },\n                { x: 3, y: 10 },\n            ] })));\n};\n\n\n//# sourceURL=webpack:////home/runner/work/elastic-charts/elastic-charts/storybook/stories/grids/1_basic.story.tsx?");

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