"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Flow/OwnerGraph.js":
/*!***************************************!*\
  !*** ./components/Flow/OwnerGraph.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_flow_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-flow-renderer */ \"../../.yarn/__virtual__/react-flow-renderer-virtual-bd98a61cb7/0/cache/react-flow-renderer-npm-10.3.17-39089f8020-caf7c67952.zip/node_modules/react-flow-renderer/dist/esm/index.js\");\n/* harmony import */ var _OwnerGraph_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OwnerGraph.styled */ \"./components/Flow/OwnerGraph.styled.js\");\nvar _this = undefined;\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c = function(param) {\n    var data = param.data, isConnectable = param.isConnectable;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_flow_renderer__WEBPACK_IMPORTED_MODULE_3__.Handle, {\n                type: \"target\",\n                position: \"left\",\n                style: {\n                    background: \"#555\"\n                },\n                onConnect: function(params) {\n                    return console.log(\"handle onConnect\", params);\n                },\n                isConnectable: isConnectable\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Denny\\\\Desktop\\\\Coding\\\\spctcl\\\\enoki-monorepo\\\\enoki\\\\packages\\\\enoki_core\\\\components\\\\Flow\\\\OwnerGraph.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OwnerGraph_styled__WEBPACK_IMPORTED_MODULE_2__.OwnerGraphCardTitle, {\n                children: [\n                    \"Owner Graph: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: data.color\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Denny\\\\Desktop\\\\Coding\\\\spctcl\\\\enoki-monorepo\\\\enoki\\\\packages\\\\enoki_core\\\\components\\\\Flow\\\\OwnerGraph.js\",\n                        lineNumber: 16,\n                        columnNumber: 22\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Denny\\\\Desktop\\\\Coding\\\\spctcl\\\\enoki-monorepo\\\\enoki\\\\packages\\\\enoki_core\\\\components\\\\Flow\\\\OwnerGraph.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OwnerGraph_styled__WEBPACK_IMPORTED_MODULE_2__.OwnerGraphCardInput, {\n                className: \"nodrag\",\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Denny\\\\Desktop\\\\Coding\\\\spctcl\\\\enoki-monorepo\\\\enoki\\\\packages\\\\enoki_core\\\\components\\\\Flow\\\\OwnerGraph.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"nodrag\",\n                type: \"color\",\n                onChange: data.onChange,\n                defaultValue: data.color\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Denny\\\\Desktop\\\\Coding\\\\spctcl\\\\enoki-monorepo\\\\enoki\\\\packages\\\\enoki_core\\\\components\\\\Flow\\\\OwnerGraph.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_flow_renderer__WEBPACK_IMPORTED_MODULE_3__.Handle, {\n                type: \"source\",\n                position: \"right\",\n                id: \"a\",\n                style: {\n                    top: 10,\n                    background: \"#555\"\n                },\n                isConnectable: isConnectable\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Denny\\\\Desktop\\\\Coding\\\\spctcl\\\\enoki-monorepo\\\\enoki\\\\packages\\\\enoki_core\\\\components\\\\Flow\\\\OwnerGraph.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_flow_renderer__WEBPACK_IMPORTED_MODULE_3__.Handle, {\n                type: \"source\",\n                position: \"right\",\n                id: \"b\",\n                style: {\n                    bottom: 10,\n                    top: \"auto\",\n                    background: \"#555\"\n                },\n                isConnectable: isConnectable\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Denny\\\\Desktop\\\\Coding\\\\spctcl\\\\enoki-monorepo\\\\enoki\\\\packages\\\\enoki_core\\\\components\\\\Flow\\\\OwnerGraph.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n}));\nvar _c, _c1;\n$RefreshReg$(_c, \"%default%$memo\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zsb3cvT3duZXJHcmFwaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQW9DO0FBRVM7QUFDa0M7QUFDL0UsNEVBQWVDLE1BQUFBLDJDQUFJLENBQUMscUJBQTZCO1FBQTFCSSxJQUFJLFNBQUpBLElBQUksRUFBRUMsYUFBYSxTQUFiQSxhQUFhO0lBQ3hDLHFCQUNFOzswQkFDRSw4REFBQ0osdURBQU07Z0JBQ0xLLElBQUksRUFBQyxRQUFRO2dCQUNiQyxRQUFRLEVBQUMsTUFBTTtnQkFDZkMsS0FBSyxFQUFFO29CQUFFQyxVQUFVLEVBQUUsTUFBTTtpQkFBRTtnQkFDN0JDLFNBQVMsRUFBRSxTQUFDQyxNQUFNOzJCQUFLQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRUYsTUFBTSxDQUFDO2lCQUFBO2dCQUM5RE4sYUFBYSxFQUFFQSxhQUFhOzs7OztxQkFDNUI7MEJBQ0YsOERBQUNGLG1FQUFtQjs7b0JBQUMsZUFDTjtrQ0FBQSw4REFBQ1csUUFBTTtrQ0FBRVYsSUFBSSxDQUFDVyxLQUFLOzs7Ozs2QkFBVTs7Ozs7O3FCQUN0QjswQkFDdEIsOERBQUNiLG1FQUFtQjtnQkFBQ2MsU0FBUyxFQUFDLFFBQVE7Z0JBQUNWLElBQUksRUFBQyxNQUFNOzs7OztxQkFBRzswQkFDdEQsOERBQUNXLE9BQUs7Z0JBQ0pELFNBQVMsRUFBQyxRQUFRO2dCQUNsQlYsSUFBSSxFQUFDLE9BQU87Z0JBQ1pZLFFBQVEsRUFBRWQsSUFBSSxDQUFDYyxRQUFRO2dCQUN2QkMsWUFBWSxFQUFFZixJQUFJLENBQUNXLEtBQUs7Ozs7O3FCQUN4QjswQkFFRiw4REFBQ2QsdURBQU07Z0JBQ0xLLElBQUksRUFBQyxRQUFRO2dCQUNiQyxRQUFRLEVBQUMsT0FBTztnQkFDaEJhLEVBQUUsRUFBQyxHQUFHO2dCQUNOWixLQUFLLEVBQUU7b0JBQUVhLEdBQUcsRUFBRSxFQUFFO29CQUFFWixVQUFVLEVBQUUsTUFBTTtpQkFBRTtnQkFDdENKLGFBQWEsRUFBRUEsYUFBYTs7Ozs7cUJBQzVCOzBCQUNGLDhEQUFDSix1REFBTTtnQkFDTEssSUFBSSxFQUFDLFFBQVE7Z0JBQ2JDLFFBQVEsRUFBQyxPQUFPO2dCQUNoQmEsRUFBRSxFQUFDLEdBQUc7Z0JBQ05aLEtBQUssRUFBRTtvQkFBRWMsTUFBTSxFQUFFLEVBQUU7b0JBQUVELEdBQUcsRUFBRSxNQUFNO29CQUFFWixVQUFVLEVBQUUsTUFBTTtpQkFBRTtnQkFDdERKLGFBQWEsRUFBRUEsYUFBYTs7Ozs7cUJBQzVCOztvQkFDRCxDQUNIO0FBQ0osQ0FBQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbG93L093bmVyR3JhcGguanM/MjZmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IEhhbmRsZSB9IGZyb20gJ3JlYWN0LWZsb3ctcmVuZGVyZXInO1xyXG5pbXBvcnQgeyBPd25lckdyYXBoQ2FyZElucHV0LCBPd25lckdyYXBoQ2FyZFRpdGxlIH0gZnJvbSAnLi9Pd25lckdyYXBoLnN0eWxlZCc7XHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oKHsgZGF0YSwgaXNDb25uZWN0YWJsZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIYW5kbGVcclxuICAgICAgICB0eXBlPVwidGFyZ2V0XCJcclxuICAgICAgICBwb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjNTU1JyB9fVxyXG4gICAgICAgIG9uQ29ubmVjdD17KHBhcmFtcykgPT4gY29uc29sZS5sb2coJ2hhbmRsZSBvbkNvbm5lY3QnLCBwYXJhbXMpfVxyXG4gICAgICAgIGlzQ29ubmVjdGFibGU9e2lzQ29ubmVjdGFibGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxPd25lckdyYXBoQ2FyZFRpdGxlPlxyXG4gICAgICAgIE93bmVyIEdyYXBoOiA8c3Ryb25nPntkYXRhLmNvbG9yfTwvc3Ryb25nPlxyXG4gICAgICA8L093bmVyR3JhcGhDYXJkVGl0bGU+XHJcbiAgICAgIDxPd25lckdyYXBoQ2FyZElucHV0IGNsYXNzTmFtZT1cIm5vZHJhZ1wiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibm9kcmFnXCJcclxuICAgICAgICB0eXBlPVwiY29sb3JcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtkYXRhLm9uQ2hhbmdlfVxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5jb2xvcn1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxIYW5kbGVcclxuICAgICAgICB0eXBlPVwic291cmNlXCJcclxuICAgICAgICBwb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICBpZD1cImFcIlxyXG4gICAgICAgIHN0eWxlPXt7IHRvcDogMTAsIGJhY2tncm91bmQ6ICcjNTU1JyB9fVxyXG4gICAgICAgIGlzQ29ubmVjdGFibGU9e2lzQ29ubmVjdGFibGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxIYW5kbGVcclxuICAgICAgICB0eXBlPVwic291cmNlXCJcclxuICAgICAgICBwb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICBpZD1cImJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJvdHRvbTogMTAsIHRvcDogJ2F1dG8nLCBiYWNrZ3JvdW5kOiAnIzU1NScgfX1cclxuICAgICAgICBpc0Nvbm5lY3RhYmxlPXtpc0Nvbm5lY3RhYmxlfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJIYW5kbGUiLCJPd25lckdyYXBoQ2FyZElucHV0IiwiT3duZXJHcmFwaENhcmRUaXRsZSIsImRhdGEiLCJpc0Nvbm5lY3RhYmxlIiwidHlwZSIsInBvc2l0aW9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwib25Db25uZWN0IiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsInN0cm9uZyIsImNvbG9yIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJvbkNoYW5nZSIsImRlZmF1bHRWYWx1ZSIsImlkIiwidG9wIiwiYm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Flow/OwnerGraph.js\n"));

/***/ })

});