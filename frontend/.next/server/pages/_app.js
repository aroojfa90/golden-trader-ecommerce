/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/CartContext.js":
/*!********************************!*\
  !*** ./context/CartContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction CartProvider({ children }) {\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Load cart from localStorage on mount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedCart = localStorage.getItem(\"cart\");\n        if (savedCart) {\n            setCart(JSON.parse(savedCart));\n        }\n    }, []);\n    // Save cart to localStorage when it changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"cart\", JSON.stringify(cart));\n    }, [\n        cart\n    ]);\n    const addToCart = (product, quantity = 1)=>{\n        setCart((prevCart)=>{\n            const existingItem = prevCart.find((item)=>item.id === product.id);\n            if (existingItem) {\n                return prevCart.map((item)=>item.id === product.id ? {\n                        ...item,\n                        quantity: item.quantity + quantity\n                    } : item);\n            }\n            return [\n                ...prevCart,\n                {\n                    ...product,\n                    quantity\n                }\n            ];\n        });\n    };\n    const removeFromCart = (productId)=>{\n        setCart((prevCart)=>prevCart.filter((item)=>item.id !== productId));\n    };\n    const updateQuantity = (productId, quantity)=>{\n        setCart((prevCart)=>prevCart.map((item)=>item.id === productId ? {\n                    ...item,\n                    quantity\n                } : item));\n    };\n    const clearCart = ()=>{\n        setCart([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addToCart,\n            removeFromCart,\n            updateQuantity,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\golden-trader\\\\frontend\\\\context\\\\CartContext.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\nfunction useCart() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0NhcnRDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUU7QUFFdkUsTUFBTUksNEJBQWNKLG9EQUFhQTtBQUUxQixTQUFTSyxhQUFhLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUVuQyx1Q0FBdUM7SUFDdkNDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sWUFBWUMsYUFBYUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUlGLFdBQVc7WUFDYkQsUUFBUUksS0FBS0MsS0FBSyxDQUFDSjtRQUNyQjtJQUNGLEdBQUcsRUFBRTtJQUVMLDRDQUE0QztJQUM1Q04sZ0RBQVNBLENBQUM7UUFDUk8sYUFBYUksT0FBTyxDQUFDLFFBQVFGLEtBQUtHLFNBQVMsQ0FBQ1I7SUFDOUMsR0FBRztRQUFDQTtLQUFLO0lBRVQsTUFBTVMsWUFBWSxDQUFDQyxTQUFTQyxXQUFXLENBQUM7UUFDdENWLFFBQVFXLENBQUFBO1lBQ04sTUFBTUMsZUFBZUQsU0FBU0UsSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxFQUFFLEtBQUtOLFFBQVFNLEVBQUU7WUFFakUsSUFBSUgsY0FBYztnQkFDaEIsT0FBT0QsU0FBU0ssR0FBRyxDQUFDRixDQUFBQSxPQUNsQkEsS0FBS0MsRUFBRSxLQUFLTixRQUFRTSxFQUFFLEdBQ2xCO3dCQUFFLEdBQUdELElBQUk7d0JBQUVKLFVBQVVJLEtBQUtKLFFBQVEsR0FBR0E7b0JBQVMsSUFDOUNJO1lBRVI7WUFFQSxPQUFPO21CQUFJSDtnQkFBVTtvQkFBRSxHQUFHRixPQUFPO29CQUFFQztnQkFBUzthQUFFO1FBQ2hEO0lBQ0Y7SUFFQSxNQUFNTyxpQkFBaUIsQ0FBQ0M7UUFDdEJsQixRQUFRVyxDQUFBQSxXQUFZQSxTQUFTUSxNQUFNLENBQUNMLENBQUFBLE9BQVFBLEtBQUtDLEVBQUUsS0FBS0c7SUFDMUQ7SUFFQSxNQUFNRSxpQkFBaUIsQ0FBQ0YsV0FBV1I7UUFDakNWLFFBQVFXLENBQUFBLFdBQ05BLFNBQVNLLEdBQUcsQ0FBQ0YsQ0FBQUEsT0FDWEEsS0FBS0MsRUFBRSxLQUFLRyxZQUNSO29CQUFFLEdBQUdKLElBQUk7b0JBQUVKO2dCQUFTLElBQ3BCSTtJQUdWO0lBRUEsTUFBTU8sWUFBWTtRQUNoQnJCLFFBQVEsRUFBRTtJQUNaO0lBRUEscUJBQ0UsOERBQUNKLFlBQVkwQixRQUFRO1FBQUNDLE9BQU87WUFDM0J4QjtZQUNBUztZQUNBUztZQUNBRztZQUNBQztRQUNGO2tCQUNHdkI7Ozs7OztBQUdQO0FBRU8sU0FBUzBCO0lBQ2QsT0FBTy9CLGlEQUFVQSxDQUFDRztBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29udGV4dC9DYXJ0Q29udGV4dC5qcz9jMzk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyBMb2FkIGNhcnQgZnJvbSBsb2NhbFN0b3JhZ2Ugb24gbW91bnRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2F2ZWRDYXJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKTtcclxuICAgIGlmIChzYXZlZENhcnQpIHtcclxuICAgICAgc2V0Q2FydChKU09OLnBhcnNlKHNhdmVkQ2FydCkpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gU2F2ZSBjYXJ0IHRvIGxvY2FsU3RvcmFnZSB3aGVuIGl0IGNoYW5nZXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbiAgfSwgW2NhcnRdKTtcclxuXHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIHF1YW50aXR5ID0gMSkgPT4ge1xyXG4gICAgc2V0Q2FydChwcmV2Q2FydCA9PiB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IHByZXZDYXJ0LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcclxuICAgICAgXHJcbiAgICAgIGlmIChleGlzdGluZ0l0ZW0pIHtcclxuICAgICAgICByZXR1cm4gcHJldkNhcnQubWFwKGl0ZW0gPT5cclxuICAgICAgICAgIGl0ZW0uaWQgPT09IHByb2R1Y3QuaWRcclxuICAgICAgICAgICAgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgcXVhbnRpdHkgfVxyXG4gICAgICAgICAgICA6IGl0ZW1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gWy4uLnByZXZDYXJ0LCB7IC4uLnByb2R1Y3QsIHF1YW50aXR5IH1dO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAocHJvZHVjdElkKSA9PiB7XHJcbiAgICBzZXRDYXJ0KHByZXZDYXJ0ID0+IHByZXZDYXJ0LmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IHByb2R1Y3RJZCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVF1YW50aXR5ID0gKHByb2R1Y3RJZCwgcXVhbnRpdHkpID0+IHtcclxuICAgIHNldENhcnQocHJldkNhcnQgPT5cclxuICAgICAgcHJldkNhcnQubWFwKGl0ZW0gPT5cclxuICAgICAgICBpdGVtLmlkID09PSBwcm9kdWN0SWRcclxuICAgICAgICAgID8geyAuLi5pdGVtLCBxdWFudGl0eSB9XHJcbiAgICAgICAgICA6IGl0ZW1cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGVhckNhcnQgPSAoKSA9PiB7XHJcbiAgICBzZXRDYXJ0KFtdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgIGNhcnQsXHJcbiAgICAgIGFkZFRvQ2FydCxcclxuICAgICAgcmVtb3ZlRnJvbUNhcnQsXHJcbiAgICAgIHVwZGF0ZVF1YW50aXR5LFxyXG4gICAgICBjbGVhckNhcnRcclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDYXJ0KCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcclxufSAiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhcnRDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJ0Iiwic2V0Q2FydCIsInNhdmVkQ2FydCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInF1YW50aXR5IiwicHJldkNhcnQiLCJleGlzdGluZ0l0ZW0iLCJmaW5kIiwiaXRlbSIsImlkIiwibWFwIiwicmVtb3ZlRnJvbUNhcnQiLCJwcm9kdWN0SWQiLCJmaWx0ZXIiLCJ1cGRhdGVRdWFudGl0eSIsImNsZWFyQ2FydCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globalStyles */ \"./styles/globalStyles.js\");\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/CartContext */ \"./context/CartContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst theme = {\n    colors: {\n        primary: \"#b8860b\",\n        text: \"#333\",\n        background: \"#fff\",\n        accent: \"#1a1a1a\"\n    },\n    fonts: {\n        body: \"'Poppins', sans-serif\",\n        heading: \"'Playfair Display', serif\"\n    }\n};\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\golden-trader\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CartContext__WEBPACK_IMPORTED_MODULE_3__.CartProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\golden-trader\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\golden-trader\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\golden-trader\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDRDtBQUNLO0FBQ3ZCO0FBRTlCLE1BQU1HLFFBQVE7SUFDWkMsUUFBUTtRQUNOQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsWUFBWTtRQUNaQyxRQUFRO0lBQ1Y7SUFDQUMsT0FBTztRQUNMQyxNQUFNO1FBQ05DLFNBQVM7SUFDWDtBQUNGO0FBRUEsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ2QsNERBQWFBO1FBQUNHLE9BQU9BOzswQkFDcEIsOERBQUNGLDREQUFXQTs7Ozs7MEJBQ1osOERBQUNDLDhEQUFZQTswQkFDWCw0RUFBQ1c7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJy4uL3N0eWxlcy9nbG9iYWxTdHlsZXMnXHJcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQ2FydENvbnRleHQnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBwcmltYXJ5OiAnI2I4ODYwYicsXHJcbiAgICB0ZXh0OiAnIzMzMycsXHJcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICBhY2NlbnQ6ICcjMWExYTFhJyxcclxuICB9LFxyXG4gIGZvbnRzOiB7XHJcbiAgICBib2R5OiBcIidQb3BwaW5zJywgc2Fucy1zZXJpZlwiLFxyXG4gICAgaGVhZGluZzogXCInUGxheWZhaXIgRGlzcGxheScsIHNlcmlmXCIsXHJcbiAgfSxcclxufVxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICA8Q2FydFByb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9DYXJ0UHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsIkdsb2JhbFN0eWxlIiwiQ2FydFByb3ZpZGVyIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwidGV4dCIsImJhY2tncm91bmQiLCJhY2NlbnQiLCJmb250cyIsImJvZHkiLCJoZWFkaW5nIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globalStyles.js":
/*!********************************!*\
  !*** ./styles/globalStyles.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\r\n  * {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  body {\r\n    font-family: ${(props)=>props.theme.fonts.primary};\r\n    background: ${(props)=>props.theme.colors.background};\r\n    color: ${(props)=>props.theme.colors.dark};\r\n  }\r\n\r\n  h1, h2, h3, h4, h5, h6 {\r\n    font-family: ${(props)=>props.theme.fonts.secondary};\r\n  }\r\n\r\n  a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n\r\n  button {\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n  }\r\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFsU3R5bGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDtBQUV0RCxNQUFNQyxjQUFjRCxnRUFBaUIsQ0FBQzs7Ozs7Ozs7aUJBUXJCLEVBQUVFLENBQUFBLFFBQVNBLE1BQU1DLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLENBQUM7Z0JBQ3RDLEVBQUVILENBQUFBLFFBQVNBLE1BQU1DLEtBQUssQ0FBQ0csTUFBTSxDQUFDQyxVQUFVLENBQUM7V0FDOUMsRUFBRUwsQ0FBQUEsUUFBU0EsTUFBTUMsS0FBSyxDQUFDRyxNQUFNLENBQUNFLElBQUksQ0FBQzs7OztpQkFJN0IsRUFBRU4sQ0FBQUEsUUFBU0EsTUFBTUMsS0FBSyxDQUFDQyxLQUFLLENBQUNLLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWF4RCxDQUFDO0FBRUQsaUVBQWVSLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3N0eWxlcy9nbG9iYWxTdHlsZXMuanM/Y2FiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250cy5wcmltYXJ5fTtcclxuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmRhcmt9O1xyXG4gIH1cclxuXHJcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250cy5zZWNvbmRhcnl9O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJHbG9iYWxTdHlsZSIsInByb3BzIiwidGhlbWUiLCJmb250cyIsInByaW1hcnkiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwiZGFyayIsInNlY29uZGFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/globalStyles.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();