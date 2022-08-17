/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --font-color: rgb(123, 95, 67);\n    --background-color: rgb(233,213,193);\n    --shadow: rgba(0,0,0,0.16) 6px 6px 5px;\n}\nbody{\n    margin: 0;\n    color: var(--font-color);\n    font-family: monospace;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    margin: 0;\n    justify-content: space-between;\n}\nheader{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: var(--background-color);\n    margin: 0;\n    box-shadow: rgba(0,0,0,0.16) 0px 6px 5px;;\n}\n.shop-name{\n    color: var(--font-color);\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\n.nav-bar{\n    padding: 10px;\n    display: flex;\n    gap: 10px;\n}\n\n.nav-btn{\n    border: none;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    cursor: pointer;\n    \n}\n.nav-btn.active{\n    border-bottom: 2px solid var(--font-color);\n    font-size: 18px;\n}\n.nav-btn:hover{\n    transform: translateY(10%);\n}\n\n/* home */\n.home{\n    display: flex;\n    gap: 100px;\n}\n.main-left{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n}\n.welcome{\n    margin-bottom: 0;\n    font-size: 30px;\n}\n.quote{\n    margin-top: 0;\n}\n.shop-img{\n    width: 550px;\n    margin-top: 10px;\n}\n\n/* menu */\n.menu{\n    margin-top: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.coffee, .croffle{\n    margin-top: 20px;\n    border: 1px solid var(--font-color);\n    border-radius: 10px 20px;\n    width: 750px;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: var(--shadow)\n}\n.img-container{\n    display: flex;\n    gap: 0;\n    margin-top: 0;\n}\n.coffee-img{\n    width: 360px;\n}\n.menu-title{\n    font-size: 35px;\n    margin-top: 0;\n    margin-bottom: 10px;\n    border-bottom: 1px solid var(--font-color);\n    width: 90px;\n    margin-left: -600px;\n}\n.items{\n    display: flex;\n    justify-content: space-between;\n    width: 700px;\n    align-items: center;\n    margin-left: 10px;\n}\n.item-container{\n    display: flex;\n    justify-content: space-between;\n    width: 300px;\n}\n.croffle-img{\n    width: 650px;\n}\n\n/*contact*/\n.contact, .contact-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.contact-container{\n    border: 1px solid var(--font-color);\n    border-radius: 10px;\n    background-color: var(--background-color);\n    width: 350px;\n    padding: 10px;\n    box-shadow: var(--shadow)\n}\n\n.contact-img{\n    width: 300px;\n    margin: 10px;\n}\n.contact-header{\n    font-size: 30px;\n    margin: 0;\n}\n.phone{\n    margin-left: -148px;\n    margin-top: 0;\n}\n.day{\n    display: flex;\n    justify-content: space-between;\n    margin-left: -86px;\n    margin-top: 0;\n    gap: 10px;\n}\nfooter{\n    margin-bottom: 10px;\n    margin-top: 50px;\n}\n.github{\n    width: 20px;\n    transition: transform 0.3s ease-in-out;\n    margin-left: 3px;\n}\n.github:hover{\n    transform: rotate(360deg);\n}\n\n@media only screen and (max-width: 1280px){\n    .home{\n        margin: 0 100px;\n    }\n    \n}\n\n@media only screen and (max-width: 820px){\n    .home{\n        flex-direction: column;\n        margin: 0 20px;\n        justify-content: center;\n        align-items: center;\n        gap: 0;\n    }\n    .shop-img{\n        width: 550px;\n        margin: 0;\n    }\n    .coffee, .croffle{\n        width: 500px;\n        padding: 35px;\n    }\n    .coffee-img{\n        width: 240px;\n    }\n    .menu-title{\n    font-size: 20px;\n    margin-bottom: 10px;\n    width: 90px;\n    margin-left: -430px;\n    }\n    .items{\n    width: 460px;\n    margin-left: -60px;\n    }\n    .item-container{\n        width: 150px;\n    }\n    .croffle-img{\n        width: 550px;\n    }\n}\n\n@media only screen and (max-width: 600px){\n    .home{\n        flex-direction: column;\n        margin: 0 20px;\n        justify-content: center;\n        align-items: center;\n        gap: 0;\n    }\n    .welcome{\n        font-size: 20px;\n    }\n    .shop-img{\n        width: 350px;\n        margin: 0;\n    }\n    .coffee, .croffle{\n        width: 280px;\n        padding: 20px 40px;\n    }\n    .coffee-img{\n        width: 160px;\n    }\n    .menu-title{\n    font-size: 18px;\n    margin-bottom: 10px;\n    width: 70px;\n    margin-left: -230px;\n    }\n    .items{\n    width: 300px;\n    margin-left: 3px;\n    }\n    .item-container{\n        width: 130px;\n    }\n    .croffle-img{\n        width: 280px;\n    }\n    .contact-container{\n        width: 250px;\n        padding: 10px;\n    }\n    \n    .contact-img{\n        width: 250px;\n        margin: 10px;\n    }\n    .contact-header{\n        font-size: 25px;\n        margin: 0;\n    }\n    .phone{\n        margin-left: -108px;\n        margin-top: 0;\n    }\n    .day{\n        display: flex;\n        justify-content: space-between;\n        margin-left: -46px;\n        margin-top: 0;\n        gap: 10px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,oCAAoC;IACpC,sCAAsC;AAC1C;AACA;IACI,SAAS;IACT,wBAAwB;IACxB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;IACT,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,yCAAyC;IACzC,SAAS;IACT,wCAAwC;AAC5C;AACA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,yCAAyC;IACzC,wBAAwB;IACxB,eAAe;;AAEnB;AACA;IACI,0CAA0C;IAC1C,eAAe;AACnB;AACA;IACI,0BAA0B;AAC9B;;AAEA,SAAS;AACT;IACI,aAAa;IACb,UAAU;AACd;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA,SAAS;AACT;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,mCAAmC;IACnC,wBAAwB;IACxB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB;AACJ;AACA;IACI,aAAa;IACb,MAAM;IACN,aAAa;AACjB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,0CAA0C;IAC1C,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;AACA;IACI,YAAY;AAChB;;AAEA,UAAU;AACV;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,mCAAmC;IACnC,mBAAmB;IACnB,yCAAyC;IACzC,YAAY;IACZ,aAAa;IACb;AACJ;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,eAAe;IACf,SAAS;AACb;AACA;IACI,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;AACA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,sCAAsC;IACtC,gBAAgB;AACpB;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI;QACI,eAAe;IACnB;;AAEJ;;AAEA;IACI;QACI,sBAAsB;QACtB,cAAc;QACd,uBAAuB;QACvB,mBAAmB;QACnB,MAAM;IACV;IACA;QACI,YAAY;QACZ,SAAS;IACb;IACA;QACI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;IACA,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,mBAAmB;IACnB;IACA;IACA,YAAY;IACZ,kBAAkB;IAClB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,sBAAsB;QACtB,cAAc;QACd,uBAAuB;QACvB,mBAAmB;QACnB,MAAM;IACV;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;QACZ,SAAS;IACb;IACA;QACI,YAAY;QACZ,kBAAkB;IACtB;IACA;QACI,YAAY;IAChB;IACA;IACA,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,mBAAmB;IACnB;IACA;IACA,YAAY;IACZ,gBAAgB;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;QACZ,aAAa;IACjB;;IAEA;QACI,YAAY;QACZ,YAAY;IAChB;IACA;QACI,eAAe;QACf,SAAS;IACb;IACA;QACI,mBAAmB;QACnB,aAAa;IACjB;IACA;QACI,aAAa;QACb,8BAA8B;QAC9B,kBAAkB;QAClB,aAAa;QACb,SAAS;IACb;AACJ","sourcesContent":[":root{\n    --font-color: rgb(123, 95, 67);\n    --background-color: rgb(233,213,193);\n    --shadow: rgba(0,0,0,0.16) 6px 6px 5px;\n}\nbody{\n    margin: 0;\n    color: var(--font-color);\n    font-family: monospace;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    margin: 0;\n    justify-content: space-between;\n}\nheader{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: var(--background-color);\n    margin: 0;\n    box-shadow: rgba(0,0,0,0.16) 0px 6px 5px;;\n}\n.shop-name{\n    color: var(--font-color);\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\n.nav-bar{\n    padding: 10px;\n    display: flex;\n    gap: 10px;\n}\n\n.nav-btn{\n    border: none;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    cursor: pointer;\n    \n}\n.nav-btn.active{\n    border-bottom: 2px solid var(--font-color);\n    font-size: 18px;\n}\n.nav-btn:hover{\n    transform: translateY(10%);\n}\n\n/* home */\n.home{\n    display: flex;\n    gap: 100px;\n}\n.main-left{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n}\n.welcome{\n    margin-bottom: 0;\n    font-size: 30px;\n}\n.quote{\n    margin-top: 0;\n}\n.shop-img{\n    width: 550px;\n    margin-top: 10px;\n}\n\n/* menu */\n.menu{\n    margin-top: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.coffee, .croffle{\n    margin-top: 20px;\n    border: 1px solid var(--font-color);\n    border-radius: 10px 20px;\n    width: 750px;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: var(--shadow)\n}\n.img-container{\n    display: flex;\n    gap: 0;\n    margin-top: 0;\n}\n.coffee-img{\n    width: 360px;\n}\n.menu-title{\n    font-size: 35px;\n    margin-top: 0;\n    margin-bottom: 10px;\n    border-bottom: 1px solid var(--font-color);\n    width: 90px;\n    margin-left: -600px;\n}\n.items{\n    display: flex;\n    justify-content: space-between;\n    width: 700px;\n    align-items: center;\n    margin-left: 10px;\n}\n.item-container{\n    display: flex;\n    justify-content: space-between;\n    width: 300px;\n}\n.croffle-img{\n    width: 650px;\n}\n\n/*contact*/\n.contact, .contact-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.contact-container{\n    border: 1px solid var(--font-color);\n    border-radius: 10px;\n    background-color: var(--background-color);\n    width: 350px;\n    padding: 10px;\n    box-shadow: var(--shadow)\n}\n\n.contact-img{\n    width: 300px;\n    margin: 10px;\n}\n.contact-header{\n    font-size: 30px;\n    margin: 0;\n}\n.phone{\n    margin-left: -148px;\n    margin-top: 0;\n}\n.day{\n    display: flex;\n    justify-content: space-between;\n    margin-left: -86px;\n    margin-top: 0;\n    gap: 10px;\n}\nfooter{\n    margin-bottom: 10px;\n    margin-top: 50px;\n}\n.github{\n    width: 20px;\n    transition: transform 0.3s ease-in-out;\n    margin-left: 3px;\n}\n.github:hover{\n    transform: rotate(360deg);\n}\n\n@media only screen and (max-width: 1280px){\n    .home{\n        margin: 0 100px;\n    }\n    \n}\n\n@media only screen and (max-width: 820px){\n    .home{\n        flex-direction: column;\n        margin: 0 20px;\n        justify-content: center;\n        align-items: center;\n        gap: 0;\n    }\n    .shop-img{\n        width: 550px;\n        margin: 0;\n    }\n    .coffee, .croffle{\n        width: 500px;\n        padding: 35px;\n    }\n    .coffee-img{\n        width: 240px;\n    }\n    .menu-title{\n    font-size: 20px;\n    margin-bottom: 10px;\n    width: 90px;\n    margin-left: -430px;\n    }\n    .items{\n    width: 460px;\n    margin-left: -60px;\n    }\n    .item-container{\n        width: 150px;\n    }\n    .croffle-img{\n        width: 550px;\n    }\n}\n\n@media only screen and (max-width: 600px){\n    .home{\n        flex-direction: column;\n        margin: 0 20px;\n        justify-content: center;\n        align-items: center;\n        gap: 0;\n    }\n    .welcome{\n        font-size: 20px;\n    }\n    .shop-img{\n        width: 350px;\n        margin: 0;\n    }\n    .coffee, .croffle{\n        width: 280px;\n        padding: 20px 40px;\n    }\n    .coffee-img{\n        width: 160px;\n    }\n    .menu-title{\n    font-size: 18px;\n    margin-bottom: 10px;\n    width: 70px;\n    margin-left: -230px;\n    }\n    .items{\n    width: 300px;\n    margin-left: 3px;\n    }\n    .item-container{\n        width: 130px;\n    }\n    .croffle-img{\n        width: 280px;\n    }\n    .contact-container{\n        width: 250px;\n        padding: 10px;\n    }\n    \n    .contact-img{\n        width: 250px;\n        margin: 10px;\n    }\n    .contact-header{\n        font-size: 25px;\n        margin: 0;\n    }\n    .phone{\n        margin-left: -108px;\n        margin-top: 0;\n    }\n    .day{\n        display: flex;\n        justify-content: space-between;\n        margin-left: -46px;\n        margin-top: 0;\n        gap: 10px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_coffeewaffle_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/coffeewaffle.png */ "./img/coffeewaffle.png");


function createTime(date,start,end){
    const day = document.createElement('p');
    day.classList.add('day');
    
    const dateDiv = document.createElement('span');
    dateDiv.classList.add('date-div');
    dateDiv.textContent = `${date}: `;

    const hoursDiv = document.createElement('span');
    hoursDiv.classList.add('hours-div');
    hoursDiv.textContent = `${start}am - ${end}pm`;

    day.appendChild(dateDiv);
    day.appendChild(hoursDiv);

    return day;
}

function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactHeader = document.createElement('p');
    contactHeader.classList.add('contact-header');
    contactHeader.textContent = 'hi! visit us at:';

    const contactImg = new Image();
    contactImg.classList.add('contact-img');
    contactImg.src = _img_coffeewaffle_png__WEBPACK_IMPORTED_MODULE_0__;

    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = 'address: 1306 coffee ave, seattle, wa';

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('phone');
    phoneNumber.textContent = 'phone: 123 456 789';

    const openHours = document.createElement('div');
    openHours.appendChild(createTime('monday-friday','8','6'));
    openHours.appendChild(createTime('saturday-sunday','9','6'));

    const contactContainer =document.createElement('div');
    contactContainer.classList.add('contact-container');

    contactContainer.appendChild(contactHeader);
    contactContainer.appendChild(address);
    contactContainer.appendChild(phoneNumber);
    contactContainer.appendChild(openHours);

    contact.appendChild(contactImg);
    contact.appendChild(contactContainer);

    return contact;
}

function loadContact(){
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_coffeeshop_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/coffeeshop.jpeg */ "./img/coffeeshop.jpeg");


function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    //left side of home
    const left = document.createElement('div');
    left.classList.add('main-left');

    const welcome = document.createElement('p');
    welcome.classList.add('welcome');
    welcome.textContent = 'hello,'

    const quote = document.createElement('p');
    quote.classList.add('quote');
    quote.textContent = 'we are here to fuel you with happy thoughts and COFFEE :)';

    left.appendChild(welcome);
    left.appendChild(quote);

    //right side of home

    const right = document.createElement('div');

    const shop = new Image();
    shop.classList.add('shop-img')
    shop.src = _img_coffeeshop_jpeg__WEBPACK_IMPORTED_MODULE_0__;

    right.appendChild(shop);

    //append left and right to home
    home.appendChild(left);
    home.appendChild(right);

    return home;
}

function loadHome(){
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_coffee1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/coffee1.png */ "./img/coffee1.png");
/* harmony import */ var _img_coffee2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/coffee2.png */ "./img/coffee2.png");
/* harmony import */ var _img_croffle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/croffle.png */ "./img/croffle.png");




function createMenuItem(name, price){
    const item = document.createElement('div');
    item.classList.add('item-container');

    const itemName = document.createElement('span');
    itemName.textContent = name;
    item.classList.add('item');

    const itemPrice = document.createElement('span');
    itemPrice.textContent = price;
    item.classList.add('price');

    item.appendChild(itemName);
    item.appendChild(itemPrice);

    return item;
}

function createTitle(name){
    const title = document.createElement('p');
    title.textContent = name;
    title.classList.add('menu-title');
    return title;
}

function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //coffee menu
    const coffee = document.createElement('div');
    coffee.classList.add('coffee');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const coffeeImg1 = new Image();
    coffeeImg1.classList.add('coffee-img');
    coffeeImg1.src = _img_coffee1_png__WEBPACK_IMPORTED_MODULE_0__;
    const coffeeImg2 = new Image();
    coffeeImg2.classList.add('coffee-img');
    coffeeImg2.src = _img_coffee2_png__WEBPACK_IMPORTED_MODULE_1__;

    imgContainer.appendChild(coffeeImg1);
    imgContainer.appendChild(coffeeImg2);

    const coffeeItems = document.createElement('div');
    coffeeItems.classList.add('items');
    const coffeeLeft = document.createElement('div');
    coffeeLeft.classList.add('coffee-left');
    
    coffeeLeft.appendChild(createMenuItem('espresso', '4'));
    coffeeLeft.appendChild(createMenuItem('cappuccino', '5'));
    coffeeLeft.appendChild(createMenuItem('americano', '5'));
    coffeeLeft.appendChild(createMenuItem('cocoa', '5'));
    coffeeLeft.appendChild(createMenuItem('latte', '6'));

    const coffeeRight = document.createElement('div');
    coffeeRight.classList.add('coffee-right');
    coffeeRight.appendChild(createMenuItem('latte macchiato', '6'));
    coffeeRight.appendChild(createMenuItem('frappe', '6'));
    coffeeRight.appendChild(createMenuItem('iced frappe', '6'));
    coffeeRight.appendChild(createMenuItem('glace', '6'));
    coffeeRight.appendChild(createMenuItem('mocha', '6'));

    coffeeItems.appendChild(coffeeLeft);
    coffeeItems.appendChild(coffeeRight);

    coffee.appendChild(imgContainer);
    coffee.appendChild(createTitle('coffee'));
    coffee.appendChild(coffeeItems);
    
    //croffle menu

    const croffle = document.createElement('div');
    croffle.classList.add('croffle');

    const croffleImgContainer = document.createElement('div');
    croffleImgContainer.classList.add('img-container');

    const croffleImg = new Image();
    croffleImg.src = _img_croffle_png__WEBPACK_IMPORTED_MODULE_2__;
    croffleImg.classList.add('croffle-img');

    croffleImgContainer.appendChild(croffleImg);

    const croffleItems = document.createElement('div');
    croffleItems.classList.add('items');
    const croffleLeft = document.createElement('div');
    croffleLeft.classList.add('croffle-left');
    croffleLeft.appendChild(createMenuItem('original', '4'));
    croffleLeft.appendChild(createMenuItem('strawberry', '5'));
    croffleLeft.appendChild(createMenuItem('chocobana', '5'));
    croffleLeft.appendChild(createMenuItem('chocolate', '5'));
    croffleLeft.appendChild(createMenuItem('blueberry', '5'));

    const croffleRight = document.createElement('div');
    croffleRight.classList.add('croffle-right');
    croffleRight.appendChild(createMenuItem('raspberry', '5'));
    croffleRight.appendChild(createMenuItem('honey', '5'));
    croffleRight.appendChild(createMenuItem('spread butter', '5'));
    croffleRight.appendChild(createMenuItem('cube butter', '5'));

    croffleItems.appendChild(croffleLeft);
    croffleItems.appendChild(croffleRight);
    
    croffle.appendChild(croffleImgContainer);
    croffle.appendChild(createTitle('croffle'));
    croffle.appendChild(croffleItems);

    menu.appendChild(coffee);
    menu.appendChild(croffle);
    return menu;
}

function loadMenu(){
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github.png */ "./src/github.png");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');

    //Coffee Shop Name
    const coffeshopName = document.createElement('h1');
    coffeshopName.classList.add('shop-name');
    coffeshopName.textContent = 'my coffee shop';

    //navigation bar
    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');

    //home button
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-btn');
    homeBtn.textContent = 'home';
    homeBtn.addEventListener('click', () => {
        addActiveClass(homeBtn);
        (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });

    //menu button
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-btn')
    menuBtn.textContent = 'menu';
    menuBtn.addEventListener('click', () => {
        addActiveClass(menuBtn);
        (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
    });

    //contact button
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-btn');
    contactBtn.textContent = 'contact';
    contactBtn.addEventListener('click', () => {
        addActiveClass(contactBtn);
        (0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])();
    });

    //append buttons to navigation bar
    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);

    //append coffee shop name and navigation bar to header
    header.appendChild(coffeshopName);
    header.appendChild(navBar);

    return header;
}

function addActiveClass(activeBtn){
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach((button) => {
        if(button != this){
            button.classList.remove('active');
        }
    });

    activeBtn.classList.add('active');
}

function createMain(){
    const main = document.createElement('main');
    main.classList.add('main');
    main.textContent = 'main';
    return main;
}

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('main');
    footer.textContent = '© 2022 Truc Phan'
    
    const source = document.createElement('a');
    source.href = "https://github.com/thanhtrucphan136/CoffeeShop-Page";
    source.target = "_blank";

    const icon = new Image();
    icon.src = _github_png__WEBPACK_IMPORTED_MODULE_1__;
    icon.classList.add('github');
    source.appendChild(icon);

    footer.appendChild(source);

    return footer

}

function loadWebpage(){
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    addActiveClass(document.querySelector('.nav-btn'));
    (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebpage);

/***/ }),

/***/ "./img/coffee1.png":
/*!*************************!*\
  !*** ./img/coffee1.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc3a279ea3b63e2bc199.png";

/***/ }),

/***/ "./img/coffee2.png":
/*!*************************!*\
  !*** ./img/coffee2.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea0f33544ba8a3767a70.png";

/***/ }),

/***/ "./img/coffeeshop.jpeg":
/*!*****************************!*\
  !*** ./img/coffeeshop.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1566ba80c0301be2d66e.jpeg";

/***/ }),

/***/ "./img/coffeewaffle.png":
/*!******************************!*\
  !*** ./img/coffeewaffle.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3fe1dec118f46d69319.png";

/***/ }),

/***/ "./img/croffle.png":
/*!*************************!*\
  !*** ./img/croffle.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ae48df14042ca013f59.png";

/***/ }),

/***/ "./src/github.png":
/*!************************!*\
  !*** ./src/github.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0035c307a36c17babb8d.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");


(0,_webpage__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDZCQUE2Qix3QkFBd0Isb0JBQW9CLE9BQU8sR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxV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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUcxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7O0FDQW9DOztBQUVwQyxvREFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL3NyYy93ZWJwYWdlLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1mb250LWNvbG9yOiByZ2IoMTIzLCA5NSwgNjcpO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsMjEzLDE5Myk7XFxuICAgIC0tc2hhZG93OiByZ2JhKDAsMCwwLDAuMTYpIDZweCA2cHggNXB4O1xcbn1cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xNikgMHB4IDZweCA1cHg7O1xcbn1cXG4uc2hvcC1uYW1le1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLm5hdi1iYXJ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm5hdi1idG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG59XFxuLm5hdi1idG4uYWN0aXZle1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLm5hdi1idG46aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xcbn1cXG5cXG4vKiBob21lICovXFxuLmhvbWV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcbi5tYWluLWxlZnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLndlbGNvbWV7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLnF1b3Rle1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4uc2hvcC1pbWd7XFxuICAgIHdpZHRoOiA1NTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLyogbWVudSAqL1xcbi5tZW51e1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvZmZlZSwgLmNyb2ZmbGV7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDIwcHg7XFxuICAgIHdpZHRoOiA3NTBweDtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdylcXG59XFxuLmltZy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuLmNvZmZlZS1pbWd7XFxuICAgIHdpZHRoOiAzNjBweDtcXG59XFxuLm1lbnUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC02MDBweDtcXG59XFxuLml0ZW1ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5pdGVtLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcbi5jcm9mZmxlLWltZ3tcXG4gICAgd2lkdGg6IDY1MHB4O1xcbn1cXG5cXG4vKmNvbnRhY3QqL1xcbi5jb250YWN0LCAuY29udGFjdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY29udGFjdC1jb250YWluZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpXFxufVxcblxcbi5jb250YWN0LWltZ3tcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbi5jb250YWN0LWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5waG9uZXtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNDhweDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuLmRheXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tbGVmdDogLTg2cHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGdhcDogMTBweDtcXG59XFxuZm9vdGVye1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG4uZ2l0aHVie1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxufVxcbi5naXRodWI6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KXtcXG4gICAgLmhvbWV7XFxuICAgICAgICBtYXJnaW46IDAgMTAwcHg7XFxuICAgIH1cXG4gICAgXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpe1xcbiAgICAuaG9tZXtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMDtcXG4gICAgfVxcbiAgICAuc2hvcC1pbWd7XFxuICAgICAgICB3aWR0aDogNTUwcHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gICAgLmNvZmZlZSwgLmNyb2ZmbGV7XFxuICAgICAgICB3aWR0aDogNTAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAzNXB4O1xcbiAgICB9XFxuICAgIC5jb2ZmZWUtaW1ne1xcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICB9XFxuICAgIC5tZW51LXRpdGxle1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTQzMHB4O1xcbiAgICB9XFxuICAgIC5pdGVtc3tcXG4gICAgd2lkdGg6IDQ2MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XFxuICAgIH1cXG4gICAgLml0ZW0tY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICB9XFxuICAgIC5jcm9mZmxlLWltZ3tcXG4gICAgICAgIHdpZHRoOiA1NTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcXG4gICAgLmhvbWV7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDA7XFxuICAgIH1cXG4gICAgLndlbGNvbWV7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLnNob3AtaW1ne1xcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgIC5jb2ZmZWUsIC5jcm9mZmxle1xcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICB9XFxuICAgIC5jb2ZmZWUtaW1ne1xcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xcbiAgICB9XFxuICAgIC5tZW51LXRpdGxle1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTIzMHB4O1xcbiAgICB9XFxuICAgIC5pdGVtc3tcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgICB9XFxuICAgIC5pdGVtLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxMzBweDtcXG4gICAgfVxcbiAgICAuY3JvZmZsZS1pbWd7XFxuICAgICAgICB3aWR0aDogMjgwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRhY3QtY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmNvbnRhY3QtaW1ne1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICB9XFxuICAgIC5jb250YWN0LWhlYWRlcntcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbiAgICAucGhvbmV7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTEwOHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcbiAgICAuZGF5e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDZweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlDQUF5QztJQUN6QyxTQUFTO0lBQ1Qsd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQjtBQUNKO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsTUFBTTtJQUNOLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsVUFBVTtBQUNWO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7QUFDYjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0FBQ2I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixNQUFNO0lBQ1Y7SUFDQTtRQUNJLFlBQVk7UUFDWixTQUFTO0lBQ2I7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7SUFDQSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkI7SUFDQTtJQUNBLFlBQVk7SUFDWixrQkFBa0I7SUFDbEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLE1BQU07SUFDVjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFNBQVM7SUFDYjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO0lBQ0EsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CO0lBQ0E7SUFDQSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsU0FBUztJQUNiO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWZvbnQtY29sb3I6IHJnYigxMjMsIDk1LCA2Nyk7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywyMTMsMTkzKTtcXG4gICAgLS1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xNikgNnB4IDZweCA1cHg7XFxufVxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjE2KSAwcHggNnB4IDVweDs7XFxufVxcbi5zaG9wLW5hbWV7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ubmF2LWJhcntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmF2LWJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbn1cXG4ubmF2LWJ0bi5hY3RpdmV7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4ubmF2LWJ0bjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSk7XFxufVxcblxcbi8qIGhvbWUgKi9cXG4uaG9tZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuLm1haW4tbGVmdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ud2VsY29tZXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4ucXVvdGV7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5zaG9wLWltZ3tcXG4gICAgd2lkdGg6IDU1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4vKiBtZW51ICovXFxuLm1lbnV7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY29mZmVlLCAuY3JvZmZsZXtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMjBweDtcXG4gICAgd2lkdGg6IDc1MHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KVxcbn1cXG4uaW1nLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4uY29mZmVlLWltZ3tcXG4gICAgd2lkdGg6IDM2MHB4O1xcbn1cXG4ubWVudS10aXRsZXtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTYwMHB4O1xcbn1cXG4uaXRlbXN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLml0ZW0tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuLmNyb2ZmbGUtaW1ne1xcbiAgICB3aWR0aDogNjUwcHg7XFxufVxcblxcbi8qY29udGFjdCovXFxuLmNvbnRhY3QsIC5jb250YWN0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb250YWN0LWNvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdylcXG59XFxuXFxuLmNvbnRhY3QtaW1ne1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuLmNvbnRhY3QtaGVhZGVye1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLnBob25le1xcbiAgICBtYXJnaW4tbGVmdDogLTE0OHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4uZGF5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1sZWZ0OiAtODZweDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5mb290ZXJ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbi5naXRodWJ7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG59XFxuLmdpdGh1Yjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpe1xcbiAgICAuaG9tZXtcXG4gICAgICAgIG1hcmdpbjogMCAxMDBweDtcXG4gICAgfVxcbiAgICBcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCl7XFxuICAgIC5ob21le1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICB9XFxuICAgIC5zaG9wLWltZ3tcXG4gICAgICAgIHdpZHRoOiA1NTBweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbiAgICAuY29mZmVlLCAuY3JvZmZsZXtcXG4gICAgICAgIHdpZHRoOiA1MDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDM1cHg7XFxuICAgIH1cXG4gICAgLmNvZmZlZS1pbWd7XFxuICAgICAgICB3aWR0aDogMjQwcHg7XFxuICAgIH1cXG4gICAgLm1lbnUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNDMwcHg7XFxuICAgIH1cXG4gICAgLml0ZW1ze1xcbiAgICB3aWR0aDogNDYwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcXG4gICAgfVxcbiAgICAuaXRlbS1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgIH1cXG4gICAgLmNyb2ZmbGUtaW1ne1xcbiAgICAgICAgd2lkdGg6IDU1MHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xcbiAgICAuaG9tZXtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMDtcXG4gICAgfVxcbiAgICAud2VsY29tZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbiAgICAuc2hvcC1pbWd7XFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gICAgLmNvZmZlZSwgLmNyb2ZmbGV7XFxuICAgICAgICB3aWR0aDogMjgwcHg7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICAgIH1cXG4gICAgLmNvZmZlZS1pbWd7XFxuICAgICAgICB3aWR0aDogMTYwcHg7XFxuICAgIH1cXG4gICAgLm1lbnUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjMwcHg7XFxuICAgIH1cXG4gICAgLml0ZW1ze1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIH1cXG4gICAgLml0ZW0tY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICB9XFxuICAgIC5jcm9mZmxlLWltZ3tcXG4gICAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgfVxcbiAgICAuY29udGFjdC1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuY29udGFjdC1pbWd7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRhY3QtaGVhZGVye1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgIC5waG9uZXtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTA4cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB9XFxuICAgIC5kYXl7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00NnB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjYWZmZWVXYWxsbGUgZnJvbSAnLi4vaW1nL2NvZmZlZXdhZmZsZS5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVUaW1lKGRhdGUsc3RhcnQsZW5kKXtcbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgIFxuICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlLWRpdicpO1xuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgJHtkYXRlfTogYDtcblxuICAgIGNvbnN0IGhvdXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhvdXJzRGl2LmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWRpdicpO1xuICAgIGhvdXJzRGl2LnRleHRDb250ZW50ID0gYCR7c3RhcnR9YW0gLSAke2VuZH1wbWA7XG5cbiAgICBkYXkuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gICAgZGF5LmFwcGVuZENoaWxkKGhvdXJzRGl2KTtcblxuICAgIHJldHVybiBkYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKXtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkZXInKTtcbiAgICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ2hpISB2aXNpdCB1cyBhdDonO1xuXG4gICAgY29uc3QgY29udGFjdEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnRhY3RJbWcuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbWcnKTtcbiAgICBjb250YWN0SW1nLnNyYyA9IGNhZmZlZVdhbGxsZTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICdhZGRyZXNzOiAxMzA2IGNvZmZlZSBhdmUsIHNlYXR0bGUsIHdhJztcblxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ3Bob25lJyk7XG4gICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAncGhvbmU6IDEyMyA0NTYgNzg5JztcblxuICAgIGNvbnN0IG9wZW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wZW5Ib3Vycy5hcHBlbmRDaGlsZChjcmVhdGVUaW1lKCdtb25kYXktZnJpZGF5JywnOCcsJzYnKSk7XG4gICAgb3BlbkhvdXJzLmFwcGVuZENoaWxkKGNyZWF0ZVRpbWUoJ3NhdHVyZGF5LXN1bmRheScsJzknLCc2JykpO1xuXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpO1xuXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQob3BlbkhvdXJzKTtcblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEltZyk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0O1xuXG4iLCJpbXBvcnQgY29mZmVlU2hvcCBmcm9tICcuLi9pbWcvY29mZmVlc2hvcC5qcGVnJztcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICAgIC8vbGVmdCBzaWRlIG9mIGhvbWVcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdC5jbGFzc0xpc3QuYWRkKCdtYWluLWxlZnQnKTtcblxuICAgIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2VsY29tZS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJyk7XG4gICAgd2VsY29tZS50ZXh0Q29udGVudCA9ICdoZWxsbywnXG5cbiAgICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBxdW90ZS5jbGFzc0xpc3QuYWRkKCdxdW90ZScpO1xuICAgIHF1b3RlLnRleHRDb250ZW50ID0gJ3dlIGFyZSBoZXJlIHRvIGZ1ZWwgeW91IHdpdGggaGFwcHkgdGhvdWdodHMgYW5kIENPRkZFRSA6KSc7XG5cbiAgICBsZWZ0LmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuICAgIGxlZnQuYXBwZW5kQ2hpbGQocXVvdGUpO1xuXG4gICAgLy9yaWdodCBzaWRlIG9mIGhvbWVcblxuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBzaG9wID0gbmV3IEltYWdlKCk7XG4gICAgc2hvcC5jbGFzc0xpc3QuYWRkKCdzaG9wLWltZycpXG4gICAgc2hvcC5zcmMgPSBjb2ZmZWVTaG9wO1xuXG4gICAgcmlnaHQuYXBwZW5kQ2hpbGQoc2hvcCk7XG5cbiAgICAvL2FwcGVuZCBsZWZ0IGFuZCByaWdodCB0byBob21lXG4gICAgaG9tZS5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgICBob21lLmFwcGVuZENoaWxkKHJpZ2h0KTtcblxuICAgIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImltcG9ydCBjb2ZmZWUxIGZyb20gJy4uL2ltZy9jb2ZmZWUxLnBuZyc7XG5pbXBvcnQgY29mZmVlMiBmcm9tICcuLi9pbWcvY29mZmVlMi5wbmcnO1xuaW1wb3J0IGNyb2ZmbGVpbWcgZnJvbSAnLi4vaW1nL2Nyb2ZmbGUucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgcHJpY2Upe1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG5cbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKG5hbWUpe1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG4gICAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgLy9jb2ZmZWUgbWVudVxuICAgIGNvbnN0IGNvZmZlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvZmZlZS5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUnKTtcblxuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWctY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBjb2ZmZWVJbWcxID0gbmV3IEltYWdlKCk7XG4gICAgY29mZmVlSW1nMS5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUtaW1nJyk7XG4gICAgY29mZmVlSW1nMS5zcmMgPSBjb2ZmZWUxO1xuICAgIGNvbnN0IGNvZmZlZUltZzIgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb2ZmZWVJbWcyLmNsYXNzTGlzdC5hZGQoJ2NvZmZlZS1pbWcnKTtcbiAgICBjb2ZmZWVJbWcyLnNyYyA9IGNvZmZlZTI7XG5cbiAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoY29mZmVlSW1nMSk7XG4gICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvZmZlZUltZzIpO1xuXG4gICAgY29uc3QgY29mZmVlSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2ZmZWVJdGVtcy5jbGFzc0xpc3QuYWRkKCdpdGVtcycpO1xuICAgIGNvbnN0IGNvZmZlZUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2ZmZWVMZWZ0LmNsYXNzTGlzdC5hZGQoJ2NvZmZlZS1sZWZ0Jyk7XG4gICAgXG4gICAgY29mZmVlTGVmdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnZXNwcmVzc28nLCAnNCcpKTtcbiAgICBjb2ZmZWVMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdjYXBwdWNjaW5vJywgJzUnKSk7XG4gICAgY29mZmVlTGVmdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnYW1lcmljYW5vJywgJzUnKSk7XG4gICAgY29mZmVlTGVmdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnY29jb2EnLCAnNScpKTtcbiAgICBjb2ZmZWVMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdsYXR0ZScsICc2JykpO1xuXG4gICAgY29uc3QgY29mZmVlUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2ZmZWVSaWdodC5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUtcmlnaHQnKTtcbiAgICBjb2ZmZWVSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnbGF0dGUgbWFjY2hpYXRvJywgJzYnKSk7XG4gICAgY29mZmVlUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2ZyYXBwZScsICc2JykpO1xuICAgIGNvZmZlZVJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdpY2VkIGZyYXBwZScsICc2JykpO1xuICAgIGNvZmZlZVJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdnbGFjZScsICc2JykpO1xuICAgIGNvZmZlZVJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdtb2NoYScsICc2JykpO1xuXG4gICAgY29mZmVlSXRlbXMuYXBwZW5kQ2hpbGQoY29mZmVlTGVmdCk7XG4gICAgY29mZmVlSXRlbXMuYXBwZW5kQ2hpbGQoY29mZmVlUmlnaHQpO1xuXG4gICAgY29mZmVlLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XG4gICAgY29mZmVlLmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKCdjb2ZmZWUnKSk7XG4gICAgY29mZmVlLmFwcGVuZENoaWxkKGNvZmZlZUl0ZW1zKTtcbiAgICBcbiAgICAvL2Nyb2ZmbGUgbWVudVxuXG4gICAgY29uc3QgY3JvZmZsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyb2ZmbGUuY2xhc3NMaXN0LmFkZCgnY3JvZmZsZScpO1xuXG4gICAgY29uc3QgY3JvZmZsZUltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyb2ZmbGVJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1nLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY3JvZmZsZUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGNyb2ZmbGVJbWcuc3JjID0gY3JvZmZsZWltZztcbiAgICBjcm9mZmxlSW1nLmNsYXNzTGlzdC5hZGQoJ2Nyb2ZmbGUtaW1nJyk7XG5cbiAgICBjcm9mZmxlSW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyb2ZmbGVJbWcpO1xuXG4gICAgY29uc3QgY3JvZmZsZUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3JvZmZsZUl0ZW1zLmNsYXNzTGlzdC5hZGQoJ2l0ZW1zJyk7XG4gICAgY29uc3QgY3JvZmZsZUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcm9mZmxlTGVmdC5jbGFzc0xpc3QuYWRkKCdjcm9mZmxlLWxlZnQnKTtcbiAgICBjcm9mZmxlTGVmdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnb3JpZ2luYWwnLCAnNCcpKTtcbiAgICBjcm9mZmxlTGVmdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnc3RyYXdiZXJyeScsICc1JykpO1xuICAgIGNyb2ZmbGVMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdjaG9jb2JhbmEnLCAnNScpKTtcbiAgICBjcm9mZmxlTGVmdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnY2hvY29sYXRlJywgJzUnKSk7XG4gICAgY3JvZmZsZUxlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2JsdWViZXJyeScsICc1JykpO1xuXG4gICAgY29uc3QgY3JvZmZsZVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3JvZmZsZVJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Nyb2ZmbGUtcmlnaHQnKTtcbiAgICBjcm9mZmxlUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ3Jhc3BiZXJyeScsICc1JykpO1xuICAgIGNyb2ZmbGVSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnaG9uZXknLCAnNScpKTtcbiAgICBjcm9mZmxlUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ3NwcmVhZCBidXR0ZXInLCAnNScpKTtcbiAgICBjcm9mZmxlUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2N1YmUgYnV0dGVyJywgJzUnKSk7XG5cbiAgICBjcm9mZmxlSXRlbXMuYXBwZW5kQ2hpbGQoY3JvZmZsZUxlZnQpO1xuICAgIGNyb2ZmbGVJdGVtcy5hcHBlbmRDaGlsZChjcm9mZmxlUmlnaHQpO1xuICAgIFxuICAgIGNyb2ZmbGUuYXBwZW5kQ2hpbGQoY3JvZmZsZUltZ0NvbnRhaW5lcik7XG4gICAgY3JvZmZsZS5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZSgnY3JvZmZsZScpKTtcbiAgICBjcm9mZmxlLmFwcGVuZENoaWxkKGNyb2ZmbGVJdGVtcyk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGNvZmZlZSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjcm9mZmxlKTtcbiAgICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnaXRodWJJY29uIGZyb20gJy4vZ2l0aHViLnBuZyc7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIC8vQ29mZmVlIFNob3AgTmFtZVxuICAgIGNvbnN0IGNvZmZlc2hvcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvZmZlc2hvcE5hbWUuY2xhc3NMaXN0LmFkZCgnc2hvcC1uYW1lJyk7XG4gICAgY29mZmVzaG9wTmFtZS50ZXh0Q29udGVudCA9ICdteSBjb2ZmZWUgc2hvcCc7XG5cbiAgICAvL25hdmlnYXRpb24gYmFyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdi1iYXInKTtcblxuICAgIC8vaG9tZSBidXR0b25cbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdob21lJztcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRBY3RpdmVDbGFzcyhob21lQnRuKTtcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICB9KTtcblxuICAgIC8vbWVudSBidXR0b25cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJylcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ21lbnUnO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZEFjdGl2ZUNsYXNzKG1lbnVCdG4pO1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH0pO1xuXG4gICAgLy9jb250YWN0IGJ1dHRvblxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZEFjdGl2ZUNsYXNzKGNvbnRhY3RCdG4pO1xuICAgICAgICBsb2FkQ29udGFjdCgpO1xuICAgIH0pO1xuXG4gICAgLy9hcHBlbmQgYnV0dG9ucyB0byBuYXZpZ2F0aW9uIGJhclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gICAgLy9hcHBlbmQgY29mZmVlIHNob3AgbmFtZSBhbmQgbmF2aWdhdGlvbiBiYXIgdG8gaGVhZGVyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvZmZlc2hvcE5hbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gYWRkQWN0aXZlQ2xhc3MoYWN0aXZlQnRuKXtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idG4nKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmKGJ1dHRvbiAhPSB0aGlzKXtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYWN0aXZlQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJ21haW4nO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICfCqSAyMDIyIFRydWMgUGhhbidcbiAgICBcbiAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgc291cmNlLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS90aGFuaHRydWNwaGFuMTM2L0NvZmZlZVNob3AtUGFnZVwiO1xuICAgIHNvdXJjZS50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGljb24uc3JjID0gZ2l0aHViSWNvbjtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2dpdGh1YicpO1xuICAgIHNvdXJjZS5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChzb3VyY2UpO1xuXG4gICAgcmV0dXJuIGZvb3RlclxuXG59XG5cbmZ1bmN0aW9uIGxvYWRXZWJwYWdlKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgYWRkQWN0aXZlQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1idG4nKSk7XG4gICAgbG9hZEhvbWUoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGxvYWRXZWJwYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9hZFdlYnBhZ2UgZnJvbSAnLi93ZWJwYWdlJztcblxubG9hZFdlYnBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=