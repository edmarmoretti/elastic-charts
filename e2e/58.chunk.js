(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "../../packages/charts/src/mocks/utils.ts":
/*!******************************************************************************************!*\
  !*** /home/runner/work/elastic-charts/elastic-charts/packages/charts/src/mocks/utils.ts ***!
  \******************************************************************************************/
/*! exports provided: forcedType, getRNGSeed, getRandomNumberGenerator, SeededDataGenerator, getRandomEntryFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forcedType\", function() { return forcedType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRNGSeed\", function() { return getRNGSeed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomNumberGenerator\", function() { return getRandomNumberGenerator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SeededDataGenerator\", function() { return SeededDataGenerator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomEntryFn\", function() { return getRandomEntryFn; });\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seedrandom */ \"../../node_modules/seedrandom/index.js\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_data_generators_data_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/data_generators/data_generator */ \"../../packages/charts/src/utils/data_generators/data_generator.ts\");\n/*\n * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one\n * or more contributor license agreements. Licensed under the Elastic License\n * 2.0 and the Server Side Public License, v 1; you may not use this file except\n * in compliance with, at your election, the Elastic License 2.0 or the Server\n * Side Public License, v 1.\n */\n\n\n/**\n * Forces object to be partial type for mocking tests\n *\n * SHOULD NOT BE USED OUTSIDE OF TESTS!!!\n *\n * @param obj partial object type\n * @internal\n */\nconst forcedType = (obj) => obj;\n/**\n * Returns rng seed from `process.env`\n * @internal\n */\nconst getRNGSeed = (fallback) => { var _a; return (_a = \"elastic-charts\") !== null && _a !== void 0 ? _a : ( true ? 'elastic-charts' : undefined); };\n/**\n * Returns rng function with optional `min`, `max` and `fractionDigits` params\n *\n * @param string seed for deterministic algorithm\n * @internal\n */\nconst getRandomNumberGenerator = (seed = getRNGSeed()) => {\n    const rng = seedrandom__WEBPACK_IMPORTED_MODULE_0___default()(seed);\n    /**\n     * Random number generator\n     *\n     * @param  {} min=0\n     * @param  {} max=1\n     * @param  {} fractionDigits=0\n     */\n    return function randomNumberGenerator(min = 0, max = 1, fractionDigits = 0, inclusive = true) {\n        const precision = Math.pow(10, Math.max(fractionDigits, 0));\n        const scaledMax = max * precision;\n        const scaledMin = min * precision;\n        const offset = inclusive ? 1 : 0;\n        const num = Math.floor(rng() * (scaledMax - scaledMin + offset)) + scaledMin;\n        return num / precision;\n    };\n};\n/** @internal */\nclass SeededDataGenerator extends _utils_data_generators_data_generator__WEBPACK_IMPORTED_MODULE_1__[\"DataGenerator\"] {\n    constructor(frequency = 500) {\n        super(frequency, getRandomNumberGenerator());\n    }\n}\n/**\n * Returns random array or object value\n * @internal\n */\nconst getRandomEntryFn = (seed = getRNGSeed()) => {\n    const rng = seedrandom__WEBPACK_IMPORTED_MODULE_0___default()(seed);\n    return function getRandomEntryClosure(entries) {\n        if (Array.isArray(entries)) {\n            const index = Math.floor(rng() * entries.length);\n            return entries[index];\n        }\n        const keys = Object.keys(entries);\n        const index = Math.floor(rng() * keys.length);\n        const key = keys[index];\n        return entries[key];\n    };\n};\n\n\n//# sourceURL=webpack:////home/runner/work/elastic-charts/elastic-charts/packages/charts/src/mocks/utils.ts?");

/***/ }),

/***/ "../../storybook/stories/stylings/4_theme_styling.story.tsx":
/*!************************************************************************************************************!*\
  !*** /home/runner/work/elastic-charts/elastic-charts/storybook/stories/stylings/4_theme_styling.story.tsx ***!
  \************************************************************************************************************/
/*! exports provided: Example */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Example\", function() { return Example; });\n/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/addon-knobs */ \"./mocks/@storybook/addon-knobs/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elastic_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/charts */ \"../../packages/charts/src/index.ts\");\n/* harmony import */ var _elastic_charts_src_mocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/charts/src/mocks/utils */ \"../../packages/charts/src/mocks/utils.ts\");\n/* harmony import */ var _elastic_charts_src_utils_themes_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/charts/src/utils/themes/colors */ \"../../packages/charts/src/utils/themes/colors.ts\");\n/* harmony import */ var _use_base_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../use_base_theme */ \"../../storybook/use_base_theme.ts\");\n/*\n * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one\n * or more contributor license agreements. Licensed under the Elastic License\n * 2.0 and the Server Side Public License, v 1; you may not use this file except\n * in compliance with, at your election, the Elastic License 2.0 or the Server\n * Side Public License, v 1.\n */\n\n\n\n\n\n\nfunction range(title, min, max, value, groupId, step = 1) {\n    return Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"number\"])(title, value, {\n        range: true,\n        min,\n        max,\n        step,\n    }, groupId);\n}\nconst dg = new _elastic_charts_src_mocks_utils__WEBPACK_IMPORTED_MODULE_3__[\"SeededDataGenerator\"]();\nconst data1 = dg.generateGroupedSeries(40, 4);\nconst data2 = dg.generateSimpleSeries(40);\nconst data3 = dg.generateSimpleSeries(40);\nconst Example = () => {\n    const customizeLineStroke = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('customizeLineStroke', false, 'line');\n    const customizePointStroke = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('customizeLinePointStroke', false, 'line');\n    const customizeAreaFill = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('customizeAreaFill', false, 'area');\n    const customizeAreaLineStroke = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('customizeAreaLineStroke', false, 'area');\n    const customizeRectFill = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('customizeRectFill', false, 'bar');\n    const theme = {\n        chartMargins: {\n            left: range('margin left', 0, 50, 10, 'Margins'),\n            right: range('margin right', 0, 50, 10, 'Margins'),\n            top: range('margin top', 0, 50, 10, 'Margins'),\n            bottom: range('margin bottom', 0, 50, 10, 'Margins'),\n        },\n        chartPaddings: {\n            left: range('padding left', 0, 50, 10, 'Paddings'),\n            right: range('padding right', 0, 50, 10, 'Paddings'),\n            top: range('padding top', 0, 50, 10, 'Paddings'),\n            bottom: range('padding bottom', 0, 50, 10, 'Paddings'),\n        },\n        lineSeriesStyle: {\n            line: {\n                stroke: customizeLineStroke ? Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"color\"])('customLineStroke', 'red', 'line') : undefined,\n                strokeWidth: range('lineStrokeWidth', 0, 10, 1, 'line'),\n                visible: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('lineVisible', true, 'line'),\n            },\n            point: {\n                visible: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('linePointVisible', true, 'line'),\n                radius: range('linePointRadius', 0, 20, 1, 'line', 0.5),\n                fill: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"color\"])('linePointFill', 'white', 'line'),\n                stroke: customizePointStroke ? Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"color\"])('customLinePointStroke', 'red', 'line') : undefined,\n                strokeWidth: range('linePointStrokeWidth', 0, 20, 0.5, 'line'),\n                opacity: range('linePointOpacity', 0, 1, 1, 'line', 0.01),\n            },\n        },\n        areaSeriesStyle: {\n            area: {\n                fill: customizeAreaFill ? Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"color\"])('customAreaFill', 'red', 'area') : undefined,\n                visible: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('aAreaVisible', true, 'area'),\n                opacity: range('aAreaOpacity', 0, 1, 1, 'area'),\n            },\n            line: {\n                stroke: customizeAreaLineStroke ? Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"color\"])('customAreaLineStroke', 'red', 'area') : undefined,\n                strokeWidth: range('aStrokeWidth', 0, 10, 1, 'area'),\n                visible: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('aLineVisible', true, 'area'),\n            },\n            point: {\n                visible: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('aPointVisible', true, 'area'),\n                fill: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"color\"])('aPointFill', 'white', 'area'),\n                radius: range('aPointRadius', 0, 20, 1, 'area'),\n                stroke: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"color\"])('aPointStroke', 'white', 'area'),\n                strokeWidth: range('aPointStrokeWidth', 0, 20, 0.5, 'area'),\n                opacity: range('aPointOpacity', 0, 1, 0.01, 'area'),\n            },\n        },\n        barSeriesStyle: {\n            rect: {\n                fill: customizeRectFill ? Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"color\"])('recCustomFull', 'red', 'bar') : undefined,\n                opacity: range('rectOpacity', 0, 1, 0.5, 'bar', 0.1),\n            },\n            rectBorder: {\n                stroke: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"color\"])('bBorderStroke', 'white', 'bar'),\n                strokeWidth: range('bStrokeWidth', 0, 10, 1, 'bar'),\n                visible: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('bBorderVisible', true, 'bar'),\n            },\n        },\n        sharedStyle: {\n            default: {\n                opacity: range('sOpacity', 0, 1, 1, 'Shared', 0.05),\n            },\n            highlighted: {\n                opacity: range('sHighlighted', 0, 1, 1, 'Shared', 0.05),\n            },\n            unhighlighted: {\n                opacity: range('sUnhighlighted', 0, 1, 0.25, 'Shared', 0.05),\n            },\n        },\n        colors: {\n            vizColors: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"select\"])('vizColors', {\n                colorBlind: _elastic_charts_src_utils_themes_colors__WEBPACK_IMPORTED_MODULE_4__[\"palettes\"].echPaletteColorBlind.colors,\n                darkBackground: _elastic_charts_src_utils_themes_colors__WEBPACK_IMPORTED_MODULE_4__[\"palettes\"].echPaletteForDarkBackground.colors,\n                lightBackground: _elastic_charts_src_utils_themes_colors__WEBPACK_IMPORTED_MODULE_4__[\"palettes\"].echPaletteForLightBackground.colors,\n                forStatus: _elastic_charts_src_utils_themes_colors__WEBPACK_IMPORTED_MODULE_4__[\"palettes\"].echPaletteForStatus.colors,\n            }, _elastic_charts_src_utils_themes_colors__WEBPACK_IMPORTED_MODULE_4__[\"palettes\"].echPaletteColorBlind.colors, 'Colors'),\n            defaultVizColor: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"DEFAULT_MISSING_COLOR\"],\n        },\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Chart\"], null,\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Settings\"], { theme: theme, baseTheme: Object(_use_base_theme__WEBPACK_IMPORTED_MODULE_5__[\"useBaseTheme\"])(), debug: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__[\"boolean\"])('debug', false), showLegend: true, showLegendExtra: true, legendPosition: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Position\"].Right }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Axis\"], { id: \"bottom\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Position\"].Bottom, title: \"Bottom axis\", showOverlappingTicks: true }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Axis\"], { id: \"left2\", title: \"Left axis\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Position\"].Left, tickFormat: (d) => Number(d).toFixed(2) }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Axis\"], { id: \"top\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Position\"].Top, title: \"Top axis\", showOverlappingTicks: true }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Axis\"], { id: \"right\", title: \"Right axis\", position: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"Position\"].Right, tickFormat: (d) => Number(d).toFixed(2) }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"BarSeries\"], { id: \"bars\", xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"ScaleType\"].Linear, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"ScaleType\"].Linear, xAccessor: \"x\", yAccessors: ['y'], splitSeriesAccessors: ['g'], stackAccessors: ['x'], data: data1 }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"LineSeries\"], { id: \"lines\", xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"ScaleType\"].Linear, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"ScaleType\"].Linear, xAccessor: \"x\", yAccessors: ['y'], curve: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"CurveType\"].CURVE_MONOTONE_X, data: data2 }),\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"AreaSeries\"], { id: \"areas\", xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"ScaleType\"].Linear, yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"ScaleType\"].Linear, xAccessor: \"x\", yAccessors: ['y'], curve: _elastic_charts__WEBPACK_IMPORTED_MODULE_2__[\"CurveType\"].CURVE_MONOTONE_X, data: data3 })));\n};\n\n\n//# sourceURL=webpack:////home/runner/work/elastic-charts/elastic-charts/storybook/stories/stylings/4_theme_styling.story.tsx?");

/***/ }),

/***/ "./mocks/@storybook/addon-knobs/index.ts":
/*!***********************************************!*\
  !*** ./mocks/@storybook/addon-knobs/index.ts ***!
  \***********************************************/
/*! exports provided: boolean, number, radios, color, select, text, array, optionsKnob, button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boolean\", function() { return boolean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"number\", function() { return number; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"radios\", function() { return radios; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"color\", function() { return color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"text\", function() { return text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"array\", function() { return array; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"optionsKnob\", function() { return optionsKnob; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"button\", function() { return button; });\n/*\n * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one\n * or more contributor license agreements. Licensed under the Elastic License\n * 2.0 and the Server Side Public License, v 1; you may not use this file except\n * in compliance with, at your election, the Elastic License 2.0 or the Server\n * Side Public License, v 1.\n */\nfunction getParams() {\n    return new URL(window.location.toString()).searchParams;\n}\nfunction getKnobKey(name, groupId) {\n    return `knob-${name}${groupId !== undefined ? `_${groupId}` : ''}`;\n}\nfunction boolean(name, dftValue, groupId) {\n    const param = getParams().get(getKnobKey(name, groupId));\n    return param ? param === 'true' : dftValue;\n}\nfunction number(name, dftValue, options, groupId) {\n    var _a;\n    const params = getParams();\n    const key = getKnobKey(name, groupId);\n    return Number.parseFloat((_a = params.get(key)) !== null && _a !== void 0 ? _a : `${dftValue}`);\n}\nfunction radios(name, options, dftValue, groupId) {\n    return text(name, dftValue, groupId);\n}\nfunction color(name, dftValue, groupId) {\n    return text(name, dftValue, groupId);\n}\nfunction select(name, b, dftValue, groupId) {\n    return text(name, dftValue, groupId);\n}\nfunction text(name, dftValue, groupId) {\n    const value = getParams().get(getKnobKey(name, groupId));\n    // the # used for the color knob needs to be escaped on the URL and unescaped here\n    return value === null ? dftValue : unescape(value);\n}\nfunction array(name, dftValues, options, groupId) {\n    const params = getParams();\n    const values = [];\n    params.forEach((value, key) => {\n        if (key.startsWith(`${getKnobKey(name, groupId)}[`)) {\n            values.push(value);\n        }\n    });\n    if (values.length === 0) {\n        return dftValues;\n    }\n    return values;\n}\nfunction optionsKnob(name, values, dftValues, options, groupId) {\n    return array(name, dftValues, options, groupId);\n}\nfunction button() {\n    // NOP\n}\n\n\n//# sourceURL=webpack:///./mocks/@storybook/addon-knobs/index.ts?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ })

}]);