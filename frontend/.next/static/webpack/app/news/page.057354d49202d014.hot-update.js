"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/news/page",{

/***/ "(app-pages-browser)/./src/app/components/Navbar.jsx":
/*!***************************************!*\
  !*** ./src/app/components/Navbar.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMenu = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex justify-center items-center p-5 mb-20 lg:mb-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-white block lg:hidden\",\n                onClick: toggleMenu,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"w-6 h-6\",\n                    fill: \"none\",\n                    stroke: \"currentColor\",\n                    viewBox: \"0 0 24 24\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeWidth: \"2\",\n                        d: \"M4 6h16M4 12h16M4 18h16\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"lg:flex lg:justify-evenly absolute lg:relative w-full lg:w-auto text-white lg:bg-transparent transition-transform duration-300 ease-in-out \".concat(isOpen ? \"top-20\" : \"-top-full\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"m-2 mr-5 lg:m-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"m-2 mr-5 lg:m-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/projects\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer\",\n                                children: \"Proyectos\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"m-2 mr-5 lg:m-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/news\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer\",\n                                children: \"Noticias\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"m-2 mr-5 lg:m-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/contact\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer\",\n                                children: \"Contacto\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(Navbar, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDaUM7QUFDSjtBQUU3QixTQUFTRTs7SUFDTCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUM7SUFFckMsTUFBTUssYUFBYTtRQUNmRCxVQUFVLENBQUNEO0lBQ2Y7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNDO2dCQUFPRCxXQUFVO2dCQUE2QkUsU0FBU0o7MEJBQ3BELDRFQUFDSztvQkFBSUgsV0FBVTtvQkFBVUksTUFBSztvQkFBT0MsUUFBTztvQkFBZUMsU0FBUTtvQkFBWUMsT0FBTTs4QkFDakYsNEVBQUNDO3dCQUFLQyxlQUFjO3dCQUFRQyxnQkFBZTt3QkFBUUMsYUFBWTt3QkFBSUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJN0UsOERBQUNDO2dCQUFHYixXQUFXLDhJQUE4SyxPQUFoQ0osU0FBUyxXQUFXOztrQ0FDN0ssOERBQUNrQjt3QkFBR2QsV0FBVTtrQ0FDViw0RUFBQ04saURBQUlBOzRCQUFDcUIsTUFBSzs0QkFBSUMsUUFBUTtzQ0FDbkIsNEVBQUNDO2dDQUFLakIsV0FBVTswQ0FBaUY7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pHLDhEQUFDYzt3QkFBR2QsV0FBVTtrQ0FDViw0RUFBQ04saURBQUlBOzRCQUFDcUIsTUFBSzs0QkFBWUMsUUFBUTtzQ0FDM0IsNEVBQUNDO2dDQUFLakIsV0FBVTswQ0FBaUY7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pHLDhEQUFDYzt3QkFBR2QsV0FBVTtrQ0FDViw0RUFBQ04saURBQUlBOzRCQUFDcUIsTUFBSzs0QkFBUUMsUUFBUTtzQ0FDdkIsNEVBQUNDO2dDQUFLakIsV0FBVTswQ0FBaUY7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pHLDhEQUFDYzt3QkFBR2QsV0FBVTtrQ0FDViw0RUFBQ04saURBQUlBOzRCQUFDcUIsTUFBSzs0QkFBV0MsUUFBUTtzQ0FDMUIsNEVBQUNDO2dDQUFLakIsV0FBVTswQ0FBaUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekg7R0F4Q1NMO0tBQUFBO0FBMENULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIuanN4PzE5NzQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtNSBtYi0yMCBsZzptYi0wXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmxvY2sgbGc6aGlkZGVuXCIgb25DbGljaz17dG9nZ2xlTWVudX0+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNiBoLTZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BsZzpmbGV4IGxnOmp1c3RpZnktZXZlbmx5IGFic29sdXRlIGxnOnJlbGF0aXZlIHctZnVsbCBsZzp3LWF1dG8gdGV4dC13aGl0ZSBsZzpiZy10cmFuc3BhcmVudCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHtpc09wZW4gPyBcInRvcC0yMFwiIDogXCItdG9wLWZ1bGxcIn1gfT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtLTIgbXItNSBsZzptLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaG92ZXI6dGV4dC1ibHVlLTUwMCBmb2N1czp0ZXh0LWJsdWUtNTAwIGN1cnNvci1wb2ludGVyXCI+SG9tZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm0tMiBtci01IGxnOm0tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGhvdmVyOnRleHQtYmx1ZS01MDAgZm9jdXM6dGV4dC1ibHVlLTUwMCBjdXJzb3ItcG9pbnRlclwiPlByb3llY3Rvczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm0tMiBtci01IGxnOm0tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ld3NcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaG92ZXI6dGV4dC1ibHVlLTUwMCBmb2N1czp0ZXh0LWJsdWUtNTAwIGN1cnNvci1wb2ludGVyXCI+Tm90aWNpYXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtLTIgbXItNSBsZzptLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGhvdmVyOnRleHQtYmx1ZS01MDAgZm9jdXM6dGV4dC1ibHVlLTUwMCBjdXJzb3ItcG9pbnRlclwiPkNvbnRhY3RvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJOYXZiYXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVNZW51IiwibmF2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsImZpbGwiLCJzdHJva2UiLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwidWwiLCJsaSIsImhyZWYiLCJwYXNzSHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Navbar.jsx\n"));

/***/ })

});