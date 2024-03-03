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

/***/ "(app-pages-browser)/./src/app/projects/page.jsx":
/*!***********************************!*\
  !*** ./src/app/projects/page.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"(app-pages-browser)/./src/app/components/Navbar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"(app-pages-browser)/./src/app/components/Footer.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProjectsPage() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //const navigate = useNavigate();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getProjects();\n    }, []);\n    const getProjects = async ()=>{\n        try {\n            // const response = await axios.get(\"http://localhost:5050/api/projects/\");\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(\"https://projectbackend-b7c8c2247c9a.herokuapp.com/\", \"/api/projects/\"));\n            setData(response.data);\n            console.log(response.data);\n        } catch (error) {\n            console.error(\"Error fetching projects:\", error);\n        }\n    };\n    const deleteProject = async (id)=>{\n        try {\n            //await axios.delete(`http://localhost:5050/api/projects/${id}`);\n            await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].delete(\"process.env.NEXT_PUBLIC_BACKEND_URL/api/projects/\".concat(id));\n            alert(\"Proyecto borrado\");\n            setData(data.filter((item)=>item._id !== id));\n        } catch (error) {\n            console.error(\"Error deleting project:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-customGreenStart h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-white text-3xl ml-40 animate-rotate-x animate-twice animate-duration-[6000ms]\",\n                        children: \" Proyectos realizados \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"self-end text-white mr-32 hover:text-blue-500\",\n                        href: \"/addproject\",\n                        children: \"Agregar Proyecto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center items-center\",\n                children: [\n                    data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card m-8 h-500 w-400 overflow-hidden rounded bg-cream hover:shadow-lg flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.imageUrl || \"/nophoto.png\",\n                                    alt: item.title || \"Noticia\",\n                                    className: \"h-44 object-cover rounded w-full\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 6\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-4 flex-grow\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mb-1\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Nombre:\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 28\n                                                }, this),\n                                                \" \",\n                                                item.title\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mb-1\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Descripcion:\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 28\n                                                }, this),\n                                                \" \",\n                                                item.description\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mb-1\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Tecnologias:\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 28\n                                                }, this),\n                                                \" \",\n                                                item.technologies\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mb-1\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: \"A\\xf1o:\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 28\n                                                }, this),\n                                                \" \",\n                                                item.year\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-bold\",\n                                            children: [\n                                                \"GitHub repo: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"{item.repositoryUrl}\",\n                                                    className: \"text-blue-700\",\n                                                    children: item.repositoryUrl\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 46\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 8\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 6\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center\",\n                                        children: [\n                                            item._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                href: \"/editproject/\".concat(item._id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"w-20 mr-4 bg-blue-400 p-3 rounded\",\n                                                    children: \"Editar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 14\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 12\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"w-20 bg-blue-400 p-3 rounded\",\n                                                onClick: ()=>deleteProject(item._id),\n                                                children: \"Borrar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 10\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 8\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 6\n                                }, this)\n                            ]\n                        }, item._id, true, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 6\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Diplomado2023\\\\ProyectoBackend\\\\my-portfolio-project\\\\frontend\\\\src\\\\app\\\\projects\\\\page.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectsPage, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = ProjectsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsPage);\nvar _c;\n$RefreshReg$(_c, \"ProjectsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvamVjdHMvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUN6QjtBQUNHO0FBQ2E7QUFDQTtBQUUxQyxTQUFTTzs7SUFFUCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxpQ0FBaUM7SUFFakNDLGdEQUFTQSxDQUFDO1FBQ1JRO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsY0FBYztRQUNsQixJQUFJO1lBQ0gsMkVBQTJFO1lBQzNFLE1BQU1DLFdBQVcsTUFBTVIsNkNBQUtBLENBQUNTLEdBQUcsQ0FBQyxHQUF1QyxPQUFwQ0Msb0RBQW1DLEVBQUM7WUFDdkVKLFFBQVFFLFNBQVNILElBQUk7WUFDckJRLFFBQVFDLEdBQUcsQ0FBQ04sU0FBU0gsSUFBSTtRQUMzQixFQUFFLE9BQU9VLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLDRCQUE0QkE7UUFFNUM7SUFDRjtJQUVBLE1BQU1DLGdCQUFnQixPQUFPQztRQUMzQixJQUFJO1lBQ0YsaUVBQWlFO1lBQ2pFLE1BQU1qQiw2Q0FBS0EsQ0FBQ2tCLE1BQU0sQ0FBQyxvREFBdUQsT0FBSEQ7WUFDdkVFLE1BQU07WUFDTmIsUUFBUUQsS0FBS2UsTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxHQUFHLEtBQUtMO1FBQzNDLEVBQUUsT0FBT0YsT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsMkJBQTJCQTtRQUUzQztJQUNGO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDdEIsMERBQU1BOzs7OzswQkFDUCw4REFBQ3FCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXFGOzs7Ozs7a0NBQ25HLDhEQUFDdkIsaURBQUlBO3dCQUFDdUIsV0FBVzt3QkFBZ0RFLE1BQUs7a0NBQWM7Ozs7Ozs7Ozs7OzswQkFFdEYsOERBQUNIO2dCQUFJQyxXQUFVOztvQkFDWm5CLEtBQUtzQixHQUFHLENBQUMsQ0FBQ04scUJBQ2QsOERBQUNFOzRCQUFJQyxXQUFVOzs4Q0FDZiw4REFBQ0k7b0NBQ0NDLEtBQUtSLEtBQUtTLFFBQVEsSUFBSTtvQ0FDdEJDLEtBQUtWLEtBQUtXLEtBQUssSUFBSTtvQ0FDbkJSLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDUzs0Q0FBRVQsV0FBVTs7OERBQU8sOERBQUNVO29EQUFLVixXQUFVOzhEQUFZOzs7Ozs7Z0RBQWM7Z0RBQUVILEtBQUtXLEtBQUs7Ozs7Ozs7c0RBQzFFLDhEQUFDQzs0Q0FBRVQsV0FBVTs7OERBQU8sOERBQUNVO29EQUFLVixXQUFVOzhEQUFZOzs7Ozs7Z0RBQW1CO2dEQUFFSCxLQUFLYyxXQUFXOzs7Ozs7O3NEQUNyRiw4REFBQ0Y7NENBQUVULFdBQVU7OzhEQUFPLDhEQUFDVTtvREFBS1YsV0FBVTs4REFBWTs7Ozs7O2dEQUFtQjtnREFBRUgsS0FBS2UsWUFBWTs7Ozs7OztzREFDdEYsOERBQUNIOzRDQUFFVCxXQUFVOzs4REFBTyw4REFBQ1U7b0RBQUtWLFdBQVU7OERBQVk7Ozs7OztnREFBVztnREFBRUgsS0FBS2dCLElBQUk7Ozs7Ozs7c0RBQ3RFLDhEQUFDSjs0Q0FBRVQsV0FBVTs7Z0RBQVk7OERBQWEsOERBQUNjO29EQUFFWixNQUFLO29EQUF1QkYsV0FBVTs4REFBaUJILEtBQUtrQixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBRXBILDhEQUFDaEI7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNEO3dDQUFJQyxXQUFVOzs0Q0FDWkgsS0FBS0MsR0FBRyxrQkFDUCw4REFBQ3JCLGlEQUFJQTtnREFBQ3lCLE1BQU0sZ0JBQXlCLE9BQVRMLEtBQUtDLEdBQUc7MERBQ2xDLDRFQUFDa0I7b0RBQU9oQixXQUFVOzhEQUFvQzs7Ozs7Ozs7Ozs7MERBRzFELDhEQUFDZ0I7Z0RBQU9oQixXQUFVO2dEQUErQmlCLFNBQVMsSUFBTXpCLGNBQWNLLEtBQUtDLEdBQUc7MERBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFwQmFELEtBQUtDLEdBQUc7Ozs7O2tDQXlCL0csOERBQUNuQiwwREFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWY7R0F2RVNDO0tBQUFBO0FBeUVULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvamVjdHMvcGFnZS5qc3g/MzhiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0c1BhZ2UoKSB7XHJcbiAgXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UHJvamVjdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldFByb2plY3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9hcGkvcHJvamVjdHMvXCIpO1xyXG4gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGkvcHJvamVjdHMvYCk7XHJcbiAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHByb2plY3RzOlwiLCBlcnJvcik7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjUwNTAvYXBpL3Byb2plY3RzLyR7aWR9YCk7XHJcbiAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkwvYXBpL3Byb2plY3RzLyR7aWR9YCk7XHJcbiAgICAgIGFsZXJ0KCdQcm95ZWN0byBib3JyYWRvJyk7XHJcbiAgICAgIHNldERhdGEoZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCAhPT0gaWQpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBwcm9qZWN0OlwiLCBlcnJvcik7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWN1c3RvbUdyZWVuU3RhcnQgaC1mdWxsXCI+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTN4bCBtbC00MCBhbmltYXRlLXJvdGF0ZS14IGFuaW1hdGUtdHdpY2UgYW5pbWF0ZS1kdXJhdGlvbi1bNjAwMG1zXVwiPiBQcm95ZWN0b3MgcmVhbGl6YWRvcyA8L2gyPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT0gXCJzZWxmLWVuZCB0ZXh0LXdoaXRlIG1yLTMyIGhvdmVyOnRleHQtYmx1ZS01MDBcIiBocmVmPVwiL2FkZHByb2plY3RcIj5BZ3JlZ2FyIFByb3llY3RvPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbS04IGgtNTAwIHctNDAwIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkIGJnLWNyZWFtIGhvdmVyOnNoYWRvdy1sZyBmbGV4IGZsZXgtY29sXCIga2V5PXtpdGVtLl9pZH0+XHJcbiAgICAgPGltZyBcclxuICAgICAgIHNyYz17aXRlbS5pbWFnZVVybCB8fCAnL25vcGhvdG8ucG5nJ31cclxuICAgICAgIGFsdD17aXRlbS50aXRsZSB8fCAnTm90aWNpYSd9IFxyXG4gICAgICAgY2xhc3NOYW1lPVwiaC00NCBvYmplY3QtY292ZXIgcm91bmRlZCB3LWZ1bGxcIiBcclxuICAgICAvPlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgPHAgY2xhc3NOYW1lPVwibWItMVwiPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPk5vbWJyZTo8L3NwYW4+IHtpdGVtLnRpdGxlfTwvcD5cclxuICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTFcIj48c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5EZXNjcmlwY2lvbjo8L3NwYW4+IHtpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTFcIj48c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5UZWNub2xvZ2lhczo8L3NwYW4+IHtpdGVtLnRlY2hub2xvZ2llc308L3A+XHJcbiAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xXCI+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+QcOxbzo8L3NwYW4+IHtpdGVtLnllYXJ9PC9wPlxyXG4gICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+R2l0SHViIHJlcG86IDxhIGhyZWY9XCJ7aXRlbS5yZXBvc2l0b3J5VXJsfVwiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDBcIj57aXRlbS5yZXBvc2l0b3J5VXJsfTwvYT48L3A+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9J3AtNCc+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgIHtpdGVtLl9pZCAmJiAoXHJcbiAgICAgICAgICAgPExpbmsgaHJlZj17YC9lZGl0cHJvamVjdC8ke2l0ZW0uX2lkfWB9PlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTIwIG1yLTQgYmctYmx1ZS00MDAgcC0zIHJvdW5kZWRcIj5FZGl0YXI8L2J1dHRvbj5cclxuICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICl9IFxyXG4gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctMjAgYmctYmx1ZS00MDAgcC0zIHJvdW5kZWRcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVQcm9qZWN0KGl0ZW0uX2lkKX0+Qm9ycmFyPC9idXR0b24+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiTGluayIsIk5hdmJhciIsIkZvb3RlciIsIlByb2plY3RzUGFnZSIsImRhdGEiLCJzZXREYXRhIiwiZ2V0UHJvamVjdHMiLCJyZXNwb25zZSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRlbGV0ZVByb2plY3QiLCJpZCIsImRlbGV0ZSIsImFsZXJ0IiwiZmlsdGVyIiwiaXRlbSIsIl9pZCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiaHJlZiIsIm1hcCIsImltZyIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwidGl0bGUiLCJwIiwic3BhbiIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzIiwieWVhciIsImEiLCJyZXBvc2l0b3J5VXJsIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/projects/page.jsx\n"));

/***/ })

});