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

/***/ "(app-pages-browser)/./src/app/news/page.jsx":
/*!*******************************!*\
  !*** ./src/app/news/page.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"(app-pages-browser)/./src/app/components/Navbar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"(app-pages-browser)/./src/app/components/Footer.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NewsPage() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //const navigate = useNavigate();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getNews();\n    }, []);\n    const getNews = async ()=>{\n        try {\n            //const response = await axios.get(\"http://localhost:5050/api/projects/latest-news\");\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(\"https://projectbackend-b7c8c2247c9a.herokuapp.com\", \"/api/projects/latest-news\"));\n            setData(response.data.articles);\n        } catch (error) {\n            console.error(\"Error fetching projects:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-r from-customGreenStart via-customGreenMiddle to-customGreenEnd\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\news\\\\page.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-white text-3xl ml-40 animate-rotate-x animate-twice animate-duration-[6000ms]\",\n                children: \"News\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\news\\\\page.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"news-container flex flex-wrap justify-center items-center\",\n                children: [\n                    data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card text-justify inline-block m-8 h-450 w-400 overflow-hidden rounded bg-cream hover:shadow-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row p-4 \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: item.url,\n                                        target: \"_blank\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: item.urlToImage || \"/nophoto.png\",\n                                            alt: item.title || \"Noticia\",\n                                            className: \"inline w-full h-44 object-cover rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\news\\\\page.jsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 14\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\news\\\\page.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 14\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\news\\\\page.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-4 mb-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mb-1\",\n                                            children: item.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\news\\\\page.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: item.description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\news\\\\page.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: item.url,\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            className: \"block overflow-hidden overflow-ellipsis whitespace-nowrap text-blue-600 mb-2.5\",\n                                            children: item.url\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\news\\\\page.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 9\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\news\\\\page.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, item._id, true, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\news\\\\page.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\news\\\\page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\news\\\\page.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\news\\\\page.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(NewsPage, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = NewsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsPage);\nvar _c;\n$RefreshReg$(_c, \"NewsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbmV3cy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDbUQ7QUFDekI7QUFDMkI7QUFDWDtBQUNBO0FBRTFDLFNBQVNROztJQUNQLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLGlDQUFpQztJQUVqQ0MsZ0RBQVNBLENBQUM7UUFDUlM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxVQUFVO1FBQ2QsSUFBSTtZQUNGLHFGQUFxRjtZQUNyRixNQUFNQyxXQUFXLE1BQU1ULDZDQUFLQSxDQUFDVSxHQUFHLENBQUMsR0FBdUMsT0FBcENDLG1EQUFtQyxFQUFDO1lBQ3hFSixRQUFRRSxTQUFTSCxJQUFJLENBQUNRLFFBQVE7UUFDaEMsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzVDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNmLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNnQjtnQkFBR0QsV0FBVTswQkFBcUY7Ozs7OzswQkFDbkcsOERBQUNEO2dCQUFJQyxXQUFVOztvQkFDWlosS0FBS2MsR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDSjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNkLDRFQUFDSTt3Q0FBRUMsTUFBTUYsS0FBS0csR0FBRzt3Q0FBRUMsUUFBTztrREFDMUIsNEVBQUNDOzRDQUNBQyxLQUFLTixLQUFLTyxVQUFVLElBQUk7NENBQ3hCQyxLQUFLUixLQUFLUyxLQUFLLElBQUk7NENBQ25CWixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzhDQU1sQiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDYTs0Q0FBRWIsV0FBVTtzREFBUUcsS0FBS1MsS0FBSzs7Ozs7O3NEQUMvQiw4REFBQ0M7c0RBQUdWLEtBQUtXLFdBQVc7Ozs7OztzREFDcEIsOERBQUNWOzRDQUFFQyxNQUFNRixLQUFLRyxHQUFHOzRDQUNqQkMsUUFBTzs0Q0FDUFEsS0FBSTs0Q0FDSmYsV0FBVTtzREFFVEcsS0FBS0csR0FBRzs7Ozs7Ozs7Ozs7OzsyQkFwQitHSCxLQUFLYSxHQUFHOzs7OztrQ0F5QmhJLDhEQUFDOUIsMERBQU1BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtmO0dBdERTQztLQUFBQTtBQXdEVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL25ld3MvcGFnZS5qc3g/OGU4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuZnVuY3Rpb24gTmV3c1BhZ2UoKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TmV3cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0TmV3cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvYXBpL3Byb2plY3RzL2xhdGVzdC1uZXdzXCIpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTH0vYXBpL3Byb2plY3RzL2xhdGVzdC1uZXdzYCk7XHJcbiAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YS5hcnRpY2xlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcHJvamVjdHM6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tY3VzdG9tR3JlZW5TdGFydCB2aWEtY3VzdG9tR3JlZW5NaWRkbGUgdG8tY3VzdG9tR3JlZW5FbmRcIj5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTN4bCBtbC00MCBhbmltYXRlLXJvdGF0ZS14IGFuaW1hdGUtdHdpY2UgYW5pbWF0ZS1kdXJhdGlvbi1bNjAwMG1zXVwiPk5ld3M8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtY29udGFpbmVyIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtanVzdGlmeSBpbmxpbmUtYmxvY2sgbS04IGgtNDUwIHctNDAwIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkIGJnLWNyZWFtIGhvdmVyOnNoYWRvdy1sZ1wiIGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwLTQgXCI+XHJcbiAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgPlxyXG4gICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICBzcmM9e2l0ZW0udXJsVG9JbWFnZSB8fCAnL25vcGhvdG8ucG5nJ31cclxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGUgfHwgJ05vdGljaWEnfSBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUgdy1mdWxsIGgtNDQgb2JqZWN0LWNvdmVyIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbWItNlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTFcIj57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxhIGhyZWY9e2l0ZW0udXJsfSBcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiBcclxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgb3ZlcmZsb3ctaGlkZGVuIG92ZXJmbG93LWVsbGlwc2lzIHdoaXRlc3BhY2Utbm93cmFwIHRleHQtYmx1ZS02MDAgbWItMi41XCJcclxuICAgICAgICA+XHJcbiAgICAgICAge2l0ZW0udXJsfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VOYXZpZ2F0ZSIsIkxpbmsiLCJOYXZiYXIiLCJGb290ZXIiLCJOZXdzUGFnZSIsImRhdGEiLCJzZXREYXRhIiwiZ2V0TmV3cyIsInJlc3BvbnNlIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMIiwiYXJ0aWNsZXMiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsIml0ZW0iLCJhIiwiaHJlZiIsInVybCIsInRhcmdldCIsImltZyIsInNyYyIsInVybFRvSW1hZ2UiLCJhbHQiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsInJlbCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/news/page.jsx\n"));

/***/ })

});