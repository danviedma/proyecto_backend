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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const toggleMenu = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex justify-between items-center p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold text-xl\",\n                        children: \"Mi Sitio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-white block lg:hidden\",\n                onClick: toggleMenu,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"w-6 h-6\",\n                    fill: \"none\",\n                    stroke: \"currentColor\",\n                    viewBox: \"0 0 24 24\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeWidth: \"2\",\n                        d: \"M4 6h16M4 12h16M4 18h16\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"lg:flex lg:items-center lg:justify-evenly absolute lg:relative w-full lg:w-auto bg-black lg:bg-transparent transition-transform duration-300 ease-in-out \".concat(isOpen ? \"top-20\" : \"-top-full\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"m-10 mr-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"m-10 mr-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/projects\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer\",\n                                children: \"Proyectos\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"m-10 mr-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/news\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer\",\n                                children: \"Noticias\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"m-10 mr-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/contact\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer\",\n                                children: \"Contacto\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\components\\\\Navbar.jsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(Navbar, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHNkI7QUFFSTtBQUdqQyxTQUFTRTs7SUFDTCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFFckMsTUFBTUksYUFBYTtRQUNmRCxVQUFVLENBQUNEO0lBQ2Y7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFJRCxXQUFVOztvQkFBYTtrQ0FDeEIsOERBQUNFO3dCQUFLRixXQUFVO2tDQUFvQjs7Ozs7Ozs7Ozs7OzBCQUl4Qyw4REFBQ0c7Z0JBQU9ILFdBQVU7Z0JBQTZCSSxTQUFTTjswQkFDcEQsNEVBQUNPO29CQUFJTCxXQUFVO29CQUFVTSxNQUFLO29CQUFPQyxRQUFPO29CQUFlQyxTQUFRO29CQUFZQyxPQUFNOzhCQUNqRiw0RUFBQ0M7d0JBQUtDLGVBQWM7d0JBQVFDLGdCQUFlO3dCQUFRQyxhQUFZO3dCQUFJQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUs3RSw4REFBQ0M7Z0JBQUdmLFdBQVcsNEpBQTRMLE9BQWhDSixTQUFTLFdBQVc7O2tDQUMzTCw4REFBQ29CO3dCQUFHaEIsV0FBVTtrQ0FDViw0RUFBQ1AsaURBQUlBOzRCQUFDd0IsTUFBSzs0QkFBSUMsUUFBUTtzQ0FDbkIsNEVBQUNoQjtnQ0FBS0YsV0FBVTswQ0FBaUY7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pHLDhEQUFDZ0I7d0JBQUdoQixXQUFVO2tDQUNWLDRFQUFDUCxpREFBSUE7NEJBQUN3QixNQUFLOzRCQUFZQyxRQUFRO3NDQUMzQiw0RUFBQ2hCO2dDQUFLRixXQUFVOzBDQUFpRjs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHekcsOERBQUNnQjt3QkFBR2hCLFdBQVU7a0NBQ1YsNEVBQUNQLGlEQUFJQTs0QkFBQ3dCLE1BQUs7NEJBQVFDLFFBQVE7c0NBQ3ZCLDRFQUFDaEI7Z0NBQUtGLFdBQVU7MENBQWlGOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUd6Ryw4REFBQ2dCO3dCQUFHaEIsV0FBVTtrQ0FDViw0RUFBQ1AsaURBQUlBOzRCQUFDd0IsTUFBSzs0QkFBV0MsUUFBUTtzQ0FDMUIsNEVBQUNoQjtnQ0FBS0YsV0FBVTswQ0FBaUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekg7R0E3Q1NMO0tBQUFBO0FBK0NULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIuanN4PzE5NzQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+IHsvKiBBcXXDrSBwb2Ryw61hIGlyIHR1IGxvZ28gbyBub21icmUgZGVsIHNpdGlvICovfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGxcIj5NaSBTaXRpbzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogQm90w7NuIGRlbCBtZW7DuiBoYW1idXJndWVzYSAqL31cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJsb2NrIGxnOmhpZGRlblwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTYgaC02XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICB7LyogTmF2ZWdhY2nDs24gKi99XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BsZzpmbGV4IGxnOml0ZW1zLWNlbnRlciBsZzpqdXN0aWZ5LWV2ZW5seSBhYnNvbHV0ZSBsZzpyZWxhdGl2ZSB3LWZ1bGwgbGc6dy1hdXRvIGJnLWJsYWNrIGxnOmJnLXRyYW5zcGFyZW50IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCAke2lzT3BlbiA/IFwidG9wLTIwXCIgOiBcIi10b3AtZnVsbFwifWB9PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm0tMTAgbXItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGhvdmVyOnRleHQtYmx1ZS01MDAgZm9jdXM6dGV4dC1ibHVlLTUwMCBjdXJzb3ItcG9pbnRlclwiPkhvbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtLTEwIG1yLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGhvdmVyOnRleHQtYmx1ZS01MDAgZm9jdXM6dGV4dC1ibHVlLTUwMCBjdXJzb3ItcG9pbnRlclwiPlByb3llY3Rvczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm0tMTAgbXItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3c1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBob3Zlcjp0ZXh0LWJsdWUtNTAwIGZvY3VzOnRleHQtYmx1ZS01MDAgY3Vyc29yLXBvaW50ZXJcIj5Ob3RpY2lhczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm0tMTAgbXItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBob3Zlcjp0ZXh0LWJsdWUtNTAwIGZvY3VzOnRleHQtYmx1ZS01MDAgY3Vyc29yLXBvaW50ZXJcIj5Db250YWN0bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiTmF2YmFyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlTWVudSIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwiZmlsbCIsInN0cm9rZSIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJ1bCIsImxpIiwiaHJlZiIsInBhc3NIcmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Navbar.jsx\n"));

/***/ })

});