/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cart.js":
/*!*****************!*\
  !*** ./cart.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet cart = {\r\n    data() {\r\n      return {\r\n        totalPrice: 'не работает',\r\n        isVisible: false\r\n      }\r\n    },\r\n    template: `\r\n      <div class=\"cart\">\r\n        <button class=\"cart-button\" type=\"button\" v-on:click=changeVisible() v-show=\"isVisible\">Скрыть корзину</button>\r\n        <button class=\"cart-button\" type=\"button\" v-on:click=changeVisible() v-show=\"!isVisible\">Показать корзину</button>\r\n        <div  v-show=\"isVisible\">\r\n          <table>\r\n            <thead>\r\n              <tr>\r\n                <th>Название товара</th>\r\n                <th>Количество</th>\r\n                <th>Цена за шт.</th>\r\n                <th>Итого</th>\r\n                <th>Действие</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr v-for=\"item in $root.goodsInCart\">\r\n                <td>{{item.product.product_name}}</td>\r\n                <td>{{item.count}}</td>\r\n                <td>{{item.product.price}}</td>\r\n                <td>{{item.count * item.product.price}}</td>\r\n                <td><button type=\"button\" v-on:click=$root.deleteFromCart(item.product)>-</button></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table class=\"totalprice\">\r\n            <tr>\r\n                <th>Товаров в корзине на сумму:</th>\r\n                <th id=\"total\">{{totalPrice}}</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>  \r\n    `,\r\n    methods: {\r\n      changeVisible(){\r\n        this.isVisible = this.isVisible == false;\r\n      }\r\n    }\r\n  };\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    cart: cart\r\n  });\n\n//# sourceURL=webpack://JS2/./cart.js?");

/***/ }),

/***/ "./goods-item.js":
/*!***********************!*\
  !*** ./goods-item.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet goodsItem =  {\r\n    props: ['good'],\r\n    template: `\r\n      <div class=\"goods-item\">\r\n        <h3>{{ good.product_name }}</h3>\r\n        <p>{{ good.price }}</p>\r\n        <button id =\"addToCart\" v-on:click=\"$root.addToCart(good)\" >Add to Cart</button></div>\r\n      </div>\r\n    `\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    goodsItem: goodsItem\r\n});\n\n//# sourceURL=webpack://JS2/./goods-item.js?");

/***/ }),

/***/ "./goods-list.js":
/*!***********************!*\
  !*** ./goods-list.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet goodsList = {\r\n    props: ['goods'],\r\n    template: `\r\n      <div class=\"goods-list\">\r\n        <goods-item v-for=\"good in goods\" :good=\"good\"></goods-item>\r\n      </div>\r\n    `\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    goodsList: goodsList\r\n});\n\n//# sourceURL=webpack://JS2/./goods-list.js?");

/***/ }),

/***/ "./goods-search.js":
/*!*************************!*\
  !*** ./goods-search.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet goodsSearch = {\r\n    props: ['goods'],\r\n    date() {\r\n      return {\r\n        searchLine: ''\r\n      }\r\n    },\r\n    template: `\r\n      <div class=\"search\">\r\n        <input type=\"text\" class=\"goods-search\" v-model=\"searchLine\"/>\r\n        <button class=\"search-button\" type=\"button\" v-on:click=filterGoods()>Искать</button>  \r\n      </div>`,\r\n    data() {\r\n      return {\r\n        searchLine: '',\r\n      }\r\n    },  \r\n    methods: {\r\n      filterGoods() {\r\n        const regexp = new RegExp(this.searchLine, 'i');\r\n        this.$root.filteredGoods = this.$root.goods.filter(good => regexp.test(good.product_name));\r\n      }\r\n    } \r\n  };\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    goodsSearch: goodsSearch\r\n});\n\n//# sourceURL=webpack://JS2/./goods-search.js?");

/***/ }),

/***/ "./header-component.js":
/*!*****************************!*\
  !*** ./header-component.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet headerComponent =  {\r\n    template: `\r\n      <div class=\"header-component\"> \r\n        <goods-search></goods-search>\r\n        <cart></cart>\r\n      </div>\r\n    `\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    headerComponent: headerComponent\r\n});\n\n//# sourceURL=webpack://JS2/./header-component.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./cart.js\");\n/* harmony import */ var _goods_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods-search */ \"./goods-search.js\");\n/* harmony import */ var _goods_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods-item */ \"./goods-item.js\");\n/* harmony import */ var _goods_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goods-list */ \"./goods-list.js\");\n/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-component */ \"./header-component.js\");\n\r\n\r\n;\r\n\r\n\r\n\r\n\r\n\r\nVue.component('cart', _cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cart);\r\nVue.component('goods-search', _goods_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"].goodsSearch);\r\nVue.component('goods-item', _goods_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"].goodsItem);\r\nVue.component('goods-list', _goods_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"].goodsList);\r\nVue.component('header-component', _header_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"].headerComponent);\r\n\r\nconst postResponse = async (url, data) => {\r\n  return await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers: {\r\n      'Content-Type': 'application/json'\r\n    },\r\n  });\r\n}\r\n\r\nconst API_URL = 'http://localhost:3000';\r\n// 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\r\n        \r\nconst app = new Vue({\r\n  el: '#vue',\r\n  data: {\r\n    goods: [],\r\n    filteredGoods: [],\r\n    goodsInCart: [],\r\n    totalPrice: 0,\r\n  },\r\n  methods: {\r\n    makeGETRequest(url) {\r\n      return new Promise((resolve) => {\r\n        var xhr;\r\n\r\n      if (window.XMLHttpRequest) {\r\n        xhr = new XMLHttpRequest();\r\n      } else if (window.ActiveXObject) { \r\n        xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\r\n      }\r\n\r\n      xhr.onreadystatechange = function () {\r\n        if (xhr.readyState === 4) {\r\n          resolve(xhr.response);\r\n        }\r\n      }\r\n      xhr.open('GET', url, true);\r\n      xhr.send();\r\n      }\r\n    )},\r\n\r\n    addToCart(good) {\r\n      const item = {product: good, count: 1};\r\n      postResponse('/addToCart', item).then((result) => {\r\n        console.log(result);\r\n      });\r\n      this.upDateCart();\r\n    },\r\n\r\n    deleteFromCart(good) {\r\n      postResponse('/deleteFromCart', good).then((result) => {\r\n        console.log(result);\r\n      });\r\n      this.upDateCart();\r\n    },\r\n\r\n    upDateCart(){\r\n      this.makeGETRequest(`${API_URL}/cart`).then( (goods) => {\r\n        this.goodsInCart = JSON.parse(goods);\r\n      });\r\n    }\r\n  },\r\n\r\n  mounted() {\r\n    this.makeGETRequest(`${API_URL}/catalog`).then( (goods) => {\r\n      this.goods = JSON.parse(goods);\r\n      this.filteredGoods = JSON.parse(goods);\r\n    });\r\n    this.upDateCart();\r\n  }\r\n});\n\n//# sourceURL=webpack://JS2/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;