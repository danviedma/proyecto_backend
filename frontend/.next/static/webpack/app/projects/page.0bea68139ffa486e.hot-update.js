"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/page",{

/***/ "(app-pages-browser)/./src/app/components/Navbar.jsx":
/*!***************************************!*\
  !*** ./src/app/components/Navbar.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const toggleMenu = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-white block lg:hidden\",\n                onClick: toggleMenu,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"w-6 h-6\",\n                    fill: \"none\",\n                    stroke: \"currentColor\",\n                    viewBox: \"0 0 24 24\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeWidth: \"2\",\n                        d: \"M4 6h16M4 12h16M4 18h16\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"text-white mt-0 lg:flex lg:items-center lg:justify-evenly absolute lg:relative w-full lg:w-auto lg:bg-transparent transition-transform duration-300 ease-in-out \".concat(isOpen ? \"top-20\" : \"-top-full\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"m-10 mr-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"m-10 mr-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/projects\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer\",\n                                children: \"Proyectos\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"m-10 mr-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/news\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer\",\n                                children: \"Noticias\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"m-10 mr-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/contact\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer\",\n                                children: \"Contacto\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDNkI7QUFDSTtBQUVqQyxTQUFTRTs7SUFDTCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFFckMsTUFBTUksYUFBYTtRQUNmRCxVQUFVLENBQUNEO0lBQ2Y7SUFDRixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFPRCxXQUFVO2dCQUE2QkUsU0FBU0o7MEJBQ2hELDRFQUFDSztvQkFBSUgsV0FBVTtvQkFBVUksTUFBSztvQkFBT0MsUUFBTztvQkFBZUMsU0FBUTtvQkFBWUMsT0FBTTs4QkFDakYsNEVBQUNDO3dCQUFLQyxlQUFjO3dCQUFRQyxnQkFBZTt3QkFBUUMsYUFBWTt3QkFBSUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJakYsOERBQUNDO2dCQUFHYixXQUFXLG1LQUFtTSxPQUFoQ0osU0FBUyxXQUFXOztrQ0FDbE0sOERBQUNrQjt3QkFBR2QsV0FBVTtrQ0FDViw0RUFBQ1AsaURBQUlBOzRCQUFDc0IsTUFBSzs0QkFBSUMsUUFBUTtzQ0FDbkIsNEVBQUNDO2dDQUFLakIsV0FBVTswQ0FBaUY7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pHLDhEQUFDYzt3QkFBR2QsV0FBVTtrQ0FDViw0RUFBQ1AsaURBQUlBOzRCQUFDc0IsTUFBSzs0QkFBWUMsUUFBUTtzQ0FDM0IsNEVBQUNDO2dDQUFLakIsV0FBVTswQ0FBaUY7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pHLDhEQUFDYzt3QkFBR2QsV0FBVTtrQ0FDViw0RUFBQ1AsaURBQUlBOzRCQUFDc0IsTUFBSzs0QkFBUUMsUUFBUTtzQ0FDdkIsNEVBQUNDO2dDQUFLakIsV0FBVTswQ0FBaUY7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pHLDhEQUFDYzt3QkFBR2QsV0FBVTtrQ0FDViw0RUFBQ1AsaURBQUlBOzRCQUFDc0IsTUFBSzs0QkFBV0MsUUFBUTtzQ0FDMUIsNEVBQUNDO2dDQUFLakIsV0FBVTswQ0FBaUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckg7R0F0Q1NMO0tBQUFBO0FBd0NULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIuanN4PzE5NzQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmxvY2sgbGc6aGlkZGVuXCIgb25DbGljaz17dG9nZ2xlTWVudX0+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNiBoLTZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgey8qPHVsIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1ldmVubHkgdGV4dC13aGl0ZVwiPiovfVxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIG10LTAgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6anVzdGlmeS1ldmVubHkgYWJzb2x1dGUgbGc6cmVsYXRpdmUgdy1mdWxsIGxnOnctYXV0byBsZzpiZy10cmFuc3BhcmVudCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHtpc09wZW4gPyBcInRvcC0yMFwiIDogXCItdG9wLWZ1bGxcIn1gfT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm0tMTAgbXItNVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBob3Zlcjp0ZXh0LWJsdWUtNTAwIGZvY3VzOnRleHQtYmx1ZS01MDAgY3Vyc29yLXBvaW50ZXJcIj5Ib21lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibS0xMCBtci01XCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaG92ZXI6dGV4dC1ibHVlLTUwMCBmb2N1czp0ZXh0LWJsdWUtNTAwIGN1cnNvci1wb2ludGVyXCI+UHJveWVjdG9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibS0xMCBtci01XCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ld3NcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBob3Zlcjp0ZXh0LWJsdWUtNTAwIGZvY3VzOnRleHQtYmx1ZS01MDAgY3Vyc29yLXBvaW50ZXJcIj5Ob3RpY2lhczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm0tMTAgbXItNVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaG92ZXI6dGV4dC1ibHVlLTUwMCBmb2N1czp0ZXh0LWJsdWUtNTAwIGN1cnNvci1wb2ludGVyXCI+Q29udGFjdG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIk5hdmJhciIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZU1lbnUiLCJuYXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwiZmlsbCIsInN0cm9rZSIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJ1bCIsImxpIiwiaHJlZiIsInBhc3NIcmVmIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Navbar.jsx\n"));

/***/ })

});