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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --font-color: rgb(123, 95, 67);\n    --background-color: rgb(233,213,193);\n    --shadow: rgba(0,0,0,0.16) 6px 6px 5px;\n}\nbody{\n    margin: 0;\n    color: var(--font-color);\n    font-family: monospace;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    margin: 0;\n    justify-content: space-between;\n}\nheader{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: var(--background-color);\n    margin: 0;\n    box-shadow: rgba(0,0,0,0.16) 0px 6px 5px;;\n}\n.shop-name{\n    color: var(--font-color);\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\n.nav-bar{\n    padding: 10px;\n    display: flex;\n    gap: 10px;\n}\n\n.nav-btn{\n    border: none;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    cursor: pointer;\n    \n}\n.nav-btn.active{\n    border-bottom: 2px solid var(--font-color);\n    font-size: 18px;\n}\n.nav-btn:hover{\n    transform: translateY(10%);\n}\n\n/* home */\n.home{\n    display: flex;\n    gap: 100px;\n}\n.main-left{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n}\n.welcome{\n    margin-bottom: 0;\n    font-size: 30px;\n}\n.quote{\n    margin-top: 0;\n}\n.shop-img{\n    width: 550px;\n    margin-top: 10px;\n}\n\n/* menu */\n.menu{\n    margin-top: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.coffee, .croffle{\n    margin-top: 20px;\n    border: 1px solid var(--font-color);\n    border-radius: 10px 20px;\n    width: 750px;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: var(--shadow)\n}\n.img-container{\n    display: flex;\n    gap: 0;\n    margin-top: 0;\n}\n.coffee-img{\n    width: 360px;\n}\n.menu-title{\n    font-size: 35px;\n    margin-top: 0;\n    margin-bottom: 10px;\n    border-bottom: 1px solid var(--font-color);\n    width: 90px;\n    margin-left: -600px;\n}\n.items{\n    display: flex;\n    justify-content: space-between;\n    width: 700px;\n    align-items: center;\n    margin-left: 10px;\n}\n.item-container{\n    display: flex;\n    justify-content: space-between;\n    width: 300px;\n}\n.croffle-img{\n    width: 650px;\n}\n\n/*contact*/\n.contact, .contact-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.contact-container{\n    border: 1px solid var(--font-color);\n    border-radius: 10px;\n    background-color: var(--background-color);\n    width: 350px;\n    padding: 10px;\n    box-shadow: var(--shadow)\n}\n\n.contact-img{\n    width: 300px;\n    margin: 10px;\n}\n.contact-header{\n    font-size: 30px;\n    margin: 0;\n}\n.phone{\n    margin-left: -148px;\n    margin-top: 0;\n}\n.day{\n    display: flex;\n    justify-content: space-between;\n    margin-left: -86px;\n    margin-top: 0;\n    gap: 10px;\n}\nfooter{\n    margin-bottom: 10px;\n    margin-top: 50px;\n}\n.github{\n    width: 20px;\n    transition: transform 0.3s ease-in-out;\n    margin-left: 3px;\n}\n.github:hover{\n    transform: rotate(360deg);\n}\n\n@media only screen and (max-width: 1280px){\n    .home{\n        margin: 0 100px;\n    }\n    \n}\n\n@media only screen and (max-width: 820px){\n    .home{\n        flex-direction: column;\n        margin: 0 20px;\n        justify-content: center;\n        align-items: center;\n        gap: 0;\n    }\n    .shop-img{\n        width: 550px;\n        margin: 0;\n    }\n    .coffee, .croffle{\n        width: 500px;\n        padding: 35px;\n    }\n    .coffee-img{\n        width: 240px;\n    }\n    .menu-title{\n    font-size: 20px;\n    margin-bottom: 10px;\n    width: 90px;\n    margin-left: -430px;\n    }\n    .items{\n    width: 460px;\n    margin-left: -60px;\n    }\n    .item-container{\n        width: 150px;\n    }\n    .croffle-img{\n        width: 550px;\n    }\n}\n\n@media only screen and (max-width: 600px){\n    .home{\n        flex-direction: column;\n        margin: 0 20px;\n        justify-content: center;\n        align-items: center;\n        gap: 0;\n    }\n    .welcome{\n        font-size: 20px;\n    }\n    .shop-img{\n        width: 350px;\n        margin: 0;\n    }\n    .coffee, .croffle{\n        width: 280px;\n        padding: 20px;\n    }\n    .coffee-img{\n        width: 160px;\n    }\n    .menu-title{\n    font-size: 18px;\n    margin-bottom: 10px;\n    width: 70px;\n    margin-left: -230px;\n    }\n    .items{\n    width: 300px;\n    margin-left: 3px;\n    }\n    .item-container{\n        width: 120px;\n    }\n    .croffle-img{\n        width: 280px;\n    }\n    .contact-container{\n        width: 250px;\n        padding: 10px;\n    }\n    \n    .contact-img{\n        width: 250px;\n        margin: 10px;\n    }\n    .contact-header{\n        font-size: 25px;\n        margin: 0;\n    }\n    .phone{\n        margin-left: -108px;\n        margin-top: 0;\n    }\n    .day{\n        display: flex;\n        justify-content: space-between;\n        margin-left: -46px;\n        margin-top: 0;\n        gap: 10px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,oCAAoC;IACpC,sCAAsC;AAC1C;AACA;IACI,SAAS;IACT,wBAAwB;IACxB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;IACT,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,yCAAyC;IACzC,SAAS;IACT,wCAAwC;AAC5C;AACA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,yCAAyC;IACzC,wBAAwB;IACxB,eAAe;;AAEnB;AACA;IACI,0CAA0C;IAC1C,eAAe;AACnB;AACA;IACI,0BAA0B;AAC9B;;AAEA,SAAS;AACT;IACI,aAAa;IACb,UAAU;AACd;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA,SAAS;AACT;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,mCAAmC;IACnC,wBAAwB;IACxB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB;AACJ;AACA;IACI,aAAa;IACb,MAAM;IACN,aAAa;AACjB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,0CAA0C;IAC1C,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;AACA;IACI,YAAY;AAChB;;AAEA,UAAU;AACV;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,mCAAmC;IACnC,mBAAmB;IACnB,yCAAyC;IACzC,YAAY;IACZ,aAAa;IACb;AACJ;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,eAAe;IACf,SAAS;AACb;AACA;IACI,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;AACA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,sCAAsC;IACtC,gBAAgB;AACpB;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI;QACI,eAAe;IACnB;;AAEJ;;AAEA;IACI;QACI,sBAAsB;QACtB,cAAc;QACd,uBAAuB;QACvB,mBAAmB;QACnB,MAAM;IACV;IACA;QACI,YAAY;QACZ,SAAS;IACb;IACA;QACI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;IACA,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,mBAAmB;IACnB;IACA;IACA,YAAY;IACZ,kBAAkB;IAClB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,sBAAsB;QACtB,cAAc;QACd,uBAAuB;QACvB,mBAAmB;QACnB,MAAM;IACV;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;QACZ,SAAS;IACb;IACA;QACI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;IACA,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,mBAAmB;IACnB;IACA;IACA,YAAY;IACZ,gBAAgB;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;QACZ,aAAa;IACjB;;IAEA;QACI,YAAY;QACZ,YAAY;IAChB;IACA;QACI,eAAe;QACf,SAAS;IACb;IACA;QACI,mBAAmB;QACnB,aAAa;IACjB;IACA;QACI,aAAa;QACb,8BAA8B;QAC9B,kBAAkB;QAClB,aAAa;QACb,SAAS;IACb;AACJ","sourcesContent":[":root{\n    --font-color: rgb(123, 95, 67);\n    --background-color: rgb(233,213,193);\n    --shadow: rgba(0,0,0,0.16) 6px 6px 5px;\n}\nbody{\n    margin: 0;\n    color: var(--font-color);\n    font-family: monospace;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    margin: 0;\n    justify-content: space-between;\n}\nheader{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: var(--background-color);\n    margin: 0;\n    box-shadow: rgba(0,0,0,0.16) 0px 6px 5px;;\n}\n.shop-name{\n    color: var(--font-color);\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\n.nav-bar{\n    padding: 10px;\n    display: flex;\n    gap: 10px;\n}\n\n.nav-btn{\n    border: none;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    cursor: pointer;\n    \n}\n.nav-btn.active{\n    border-bottom: 2px solid var(--font-color);\n    font-size: 18px;\n}\n.nav-btn:hover{\n    transform: translateY(10%);\n}\n\n/* home */\n.home{\n    display: flex;\n    gap: 100px;\n}\n.main-left{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n}\n.welcome{\n    margin-bottom: 0;\n    font-size: 30px;\n}\n.quote{\n    margin-top: 0;\n}\n.shop-img{\n    width: 550px;\n    margin-top: 10px;\n}\n\n/* menu */\n.menu{\n    margin-top: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.coffee, .croffle{\n    margin-top: 20px;\n    border: 1px solid var(--font-color);\n    border-radius: 10px 20px;\n    width: 750px;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: var(--shadow)\n}\n.img-container{\n    display: flex;\n    gap: 0;\n    margin-top: 0;\n}\n.coffee-img{\n    width: 360px;\n}\n.menu-title{\n    font-size: 35px;\n    margin-top: 0;\n    margin-bottom: 10px;\n    border-bottom: 1px solid var(--font-color);\n    width: 90px;\n    margin-left: -600px;\n}\n.items{\n    display: flex;\n    justify-content: space-between;\n    width: 700px;\n    align-items: center;\n    margin-left: 10px;\n}\n.item-container{\n    display: flex;\n    justify-content: space-between;\n    width: 300px;\n}\n.croffle-img{\n    width: 650px;\n}\n\n/*contact*/\n.contact, .contact-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.contact-container{\n    border: 1px solid var(--font-color);\n    border-radius: 10px;\n    background-color: var(--background-color);\n    width: 350px;\n    padding: 10px;\n    box-shadow: var(--shadow)\n}\n\n.contact-img{\n    width: 300px;\n    margin: 10px;\n}\n.contact-header{\n    font-size: 30px;\n    margin: 0;\n}\n.phone{\n    margin-left: -148px;\n    margin-top: 0;\n}\n.day{\n    display: flex;\n    justify-content: space-between;\n    margin-left: -86px;\n    margin-top: 0;\n    gap: 10px;\n}\nfooter{\n    margin-bottom: 10px;\n    margin-top: 50px;\n}\n.github{\n    width: 20px;\n    transition: transform 0.3s ease-in-out;\n    margin-left: 3px;\n}\n.github:hover{\n    transform: rotate(360deg);\n}\n\n@media only screen and (max-width: 1280px){\n    .home{\n        margin: 0 100px;\n    }\n    \n}\n\n@media only screen and (max-width: 820px){\n    .home{\n        flex-direction: column;\n        margin: 0 20px;\n        justify-content: center;\n        align-items: center;\n        gap: 0;\n    }\n    .shop-img{\n        width: 550px;\n        margin: 0;\n    }\n    .coffee, .croffle{\n        width: 500px;\n        padding: 35px;\n    }\n    .coffee-img{\n        width: 240px;\n    }\n    .menu-title{\n    font-size: 20px;\n    margin-bottom: 10px;\n    width: 90px;\n    margin-left: -430px;\n    }\n    .items{\n    width: 460px;\n    margin-left: -60px;\n    }\n    .item-container{\n        width: 150px;\n    }\n    .croffle-img{\n        width: 550px;\n    }\n}\n\n@media only screen and (max-width: 600px){\n    .home{\n        flex-direction: column;\n        margin: 0 20px;\n        justify-content: center;\n        align-items: center;\n        gap: 0;\n    }\n    .welcome{\n        font-size: 20px;\n    }\n    .shop-img{\n        width: 350px;\n        margin: 0;\n    }\n    .coffee, .croffle{\n        width: 280px;\n        padding: 20px;\n    }\n    .coffee-img{\n        width: 160px;\n    }\n    .menu-title{\n    font-size: 18px;\n    margin-bottom: 10px;\n    width: 70px;\n    margin-left: -230px;\n    }\n    .items{\n    width: 300px;\n    margin-left: 3px;\n    }\n    .item-container{\n        width: 120px;\n    }\n    .croffle-img{\n        width: 280px;\n    }\n    .contact-container{\n        width: 250px;\n        padding: 10px;\n    }\n    \n    .contact-img{\n        width: 250px;\n        margin: 10px;\n    }\n    .contact-header{\n        font-size: 25px;\n        margin: 0;\n    }\n    .phone{\n        margin-left: -108px;\n        margin-top: 0;\n    }\n    .day{\n        display: flex;\n        justify-content: space-between;\n        margin-left: -46px;\n        margin-top: 0;\n        gap: 10px;\n    }\n}"],"sourceRoot":""}]);
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
    quote.textContent = 'we are here to fuel you happy thoughts and COFFEE :)';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDZCQUE2Qix3QkFBd0Isb0JBQW9CLE9BQU8sR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxV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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUcxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7O0FDQW9DOztBQUVwQyxvREFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL3NyYy93ZWJwYWdlLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1mb250LWNvbG9yOiByZ2IoMTIzLCA5NSwgNjcpO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsMjEzLDE5Myk7XFxuICAgIC0tc2hhZG93OiByZ2JhKDAsMCwwLDAuMTYpIDZweCA2cHggNXB4O1xcbn1cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xNikgMHB4IDZweCA1cHg7O1xcbn1cXG4uc2hvcC1uYW1le1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLm5hdi1iYXJ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm5hdi1idG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG59XFxuLm5hdi1idG4uYWN0aXZle1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLm5hdi1idG46aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xcbn1cXG5cXG4vKiBob21lICovXFxuLmhvbWV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcbi5tYWluLWxlZnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLndlbGNvbWV7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLnF1b3Rle1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4uc2hvcC1pbWd7XFxuICAgIHdpZHRoOiA1NTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLyogbWVudSAqL1xcbi5tZW51e1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvZmZlZSwgLmNyb2ZmbGV7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDIwcHg7XFxuICAgIHdpZHRoOiA3NTBweDtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdylcXG59XFxuLmltZy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuLmNvZmZlZS1pbWd7XFxuICAgIHdpZHRoOiAzNjBweDtcXG59XFxuLm1lbnUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC02MDBweDtcXG59XFxuLml0ZW1ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5pdGVtLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcbi5jcm9mZmxlLWltZ3tcXG4gICAgd2lkdGg6IDY1MHB4O1xcbn1cXG5cXG4vKmNvbnRhY3QqL1xcbi5jb250YWN0LCAuY29udGFjdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY29udGFjdC1jb250YWluZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpXFxufVxcblxcbi5jb250YWN0LWltZ3tcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbi5jb250YWN0LWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5waG9uZXtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNDhweDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuLmRheXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tbGVmdDogLTg2cHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGdhcDogMTBweDtcXG59XFxuZm9vdGVye1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG4uZ2l0aHVie1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxufVxcbi5naXRodWI6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KXtcXG4gICAgLmhvbWV7XFxuICAgICAgICBtYXJnaW46IDAgMTAwcHg7XFxuICAgIH1cXG4gICAgXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpe1xcbiAgICAuaG9tZXtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMDtcXG4gICAgfVxcbiAgICAuc2hvcC1pbWd7XFxuICAgICAgICB3aWR0aDogNTUwcHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gICAgLmNvZmZlZSwgLmNyb2ZmbGV7XFxuICAgICAgICB3aWR0aDogNTAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAzNXB4O1xcbiAgICB9XFxuICAgIC5jb2ZmZWUtaW1ne1xcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICB9XFxuICAgIC5tZW51LXRpdGxle1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTQzMHB4O1xcbiAgICB9XFxuICAgIC5pdGVtc3tcXG4gICAgd2lkdGg6IDQ2MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XFxuICAgIH1cXG4gICAgLml0ZW0tY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICB9XFxuICAgIC5jcm9mZmxlLWltZ3tcXG4gICAgICAgIHdpZHRoOiA1NTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcXG4gICAgLmhvbWV7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDA7XFxuICAgIH1cXG4gICAgLndlbGNvbWV7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLnNob3AtaW1ne1xcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgIC5jb2ZmZWUsIC5jcm9mZmxle1xcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgfVxcbiAgICAuY29mZmVlLWltZ3tcXG4gICAgICAgIHdpZHRoOiAxNjBweDtcXG4gICAgfVxcbiAgICAubWVudS10aXRsZXtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMzBweDtcXG4gICAgfVxcbiAgICAuaXRlbXN7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgfVxcbiAgICAuaXRlbS1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTIwcHg7XFxuICAgIH1cXG4gICAgLmNyb2ZmbGUtaW1ne1xcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xcbiAgICB9XFxuICAgIC5jb250YWN0LWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5jb250YWN0LWltZ3tcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgfVxcbiAgICAuY29udGFjdC1oZWFkZXJ7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gICAgLnBob25le1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMDhweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG4gICAgLmRheXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTQ2cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsb0NB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O0lBQ1osa0JBQWtCO0lBQ2xCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixNQUFNO0lBQ1Y7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7UUFDWixTQUFTO0lBQ2I7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7SUFDQSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkI7SUFDQTtJQUNBLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7UUFDZixTQUFTO0lBQ2I7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tZm9udC1jb2xvcjogcmdiKDEyMywgOTUsIDY3KTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLDIxMywxOTMpO1xcbiAgICAtLXNoYWRvdzogcmdiYSgwLDAsMCwwLjE2KSA2cHggNnB4IDVweDtcXG59XFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMTYpIDBweCA2cHggNXB4OztcXG59XFxuLnNob3AtbmFtZXtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5uYXYtYmFye1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5uYXYtYnRue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxufVxcbi5uYXYtYnRuLmFjdGl2ZXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5uYXYtYnRuOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcXG59XFxuXFxuLyogaG9tZSAqL1xcbi5ob21le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG4ubWFpbi1sZWZ0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi53ZWxjb21le1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5xdW90ZXtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuLnNob3AtaW1ne1xcbiAgICB3aWR0aDogNTUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi8qIG1lbnUgKi9cXG4ubWVudXtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb2ZmZWUsIC5jcm9mZmxle1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAyMHB4O1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpXFxufVxcbi5pbWctY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDA7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5jb2ZmZWUtaW1ne1xcbiAgICB3aWR0aDogMzYwcHg7XFxufVxcbi5tZW51LXRpdGxle1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNjAwcHg7XFxufVxcbi5pdGVtc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uaXRlbS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG4uY3JvZmZsZS1pbWd7XFxuICAgIHdpZHRoOiA2NTBweDtcXG59XFxuXFxuLypjb250YWN0Ki9cXG4uY29udGFjdCwgLmNvbnRhY3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbnRhY3QtY29udGFpbmVye1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KVxcbn1cXG5cXG4uY29udGFjdC1pbWd7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG4uY29udGFjdC1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4ucGhvbmV7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTQ4cHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5kYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWxlZnQ6IC04NnB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmZvb3RlcntcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuLmdpdGh1YntcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xcbn1cXG4uZ2l0aHViOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCl7XFxuICAgIC5ob21le1xcbiAgICAgICAgbWFyZ2luOiAwIDEwMHB4O1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KXtcXG4gICAgLmhvbWV7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDA7XFxuICAgIH1cXG4gICAgLnNob3AtaW1ne1xcbiAgICAgICAgd2lkdGg6IDU1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgIC5jb2ZmZWUsIC5jcm9mZmxle1xcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMzVweDtcXG4gICAgfVxcbiAgICAuY29mZmVlLWltZ3tcXG4gICAgICAgIHdpZHRoOiAyNDBweDtcXG4gICAgfVxcbiAgICAubWVudS10aXRsZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC00MzBweDtcXG4gICAgfVxcbiAgICAuaXRlbXN7XFxuICAgIHdpZHRoOiA0NjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xcbiAgICB9XFxuICAgIC5pdGVtLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgfVxcbiAgICAuY3JvZmZsZS1pbWd7XFxuICAgICAgICB3aWR0aDogNTUwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XFxuICAgIC5ob21le1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICB9XFxuICAgIC53ZWxjb21le1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuICAgIC5zaG9wLWltZ3tcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbiAgICAuY29mZmVlLCAuY3JvZmZsZXtcXG4gICAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIH1cXG4gICAgLmNvZmZlZS1pbWd7XFxuICAgICAgICB3aWR0aDogMTYwcHg7XFxuICAgIH1cXG4gICAgLm1lbnUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjMwcHg7XFxuICAgIH1cXG4gICAgLml0ZW1ze1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIH1cXG4gICAgLml0ZW0tY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xcbiAgICB9XFxuICAgIC5jcm9mZmxlLWltZ3tcXG4gICAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgfVxcbiAgICAuY29udGFjdC1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuY29udGFjdC1pbWd7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRhY3QtaGVhZGVye1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgIC5waG9uZXtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTA4cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB9XFxuICAgIC5kYXl7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00NnB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjYWZmZWVXYWxsbGUgZnJvbSAnLi4vaW1nL2NvZmZlZXdhZmZsZS5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVUaW1lKGRhdGUsc3RhcnQsZW5kKXtcbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgIFxuICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlLWRpdicpO1xuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgJHtkYXRlfTogYDtcblxuICAgIGNvbnN0IGhvdXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhvdXJzRGl2LmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWRpdicpO1xuICAgIGhvdXJzRGl2LnRleHRDb250ZW50ID0gYCR7c3RhcnR9YW0gLSAke2VuZH1wbWA7XG5cbiAgICBkYXkuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gICAgZGF5LmFwcGVuZENoaWxkKGhvdXJzRGl2KTtcblxuICAgIHJldHVybiBkYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKXtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkZXInKTtcbiAgICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ2hpISB2aXNpdCB1cyBhdDonO1xuXG4gICAgY29uc3QgY29udGFjdEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnRhY3RJbWcuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbWcnKTtcbiAgICBjb250YWN0SW1nLnNyYyA9IGNhZmZlZVdhbGxsZTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICdhZGRyZXNzOiAxMzA2IGNvZmZlZSBhdmUsIHNlYXR0bGUsIHdhJztcblxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ3Bob25lJyk7XG4gICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAncGhvbmU6IDEyMyA0NTYgNzg5JztcblxuICAgIGNvbnN0IG9wZW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wZW5Ib3Vycy5hcHBlbmRDaGlsZChjcmVhdGVUaW1lKCdtb25kYXktZnJpZGF5JywnOCcsJzYnKSk7XG4gICAgb3BlbkhvdXJzLmFwcGVuZENoaWxkKGNyZWF0ZVRpbWUoJ3NhdHVyZGF5LXN1bmRheScsJzknLCc2JykpO1xuXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpO1xuXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQob3BlbkhvdXJzKTtcblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEltZyk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0O1xuXG4iLCJpbXBvcnQgY29mZmVlU2hvcCBmcm9tICcuLi9pbWcvY29mZmVlc2hvcC5qcGVnJztcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICAgIC8vbGVmdCBzaWRlIG9mIGhvbWVcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdC5jbGFzc0xpc3QuYWRkKCdtYWluLWxlZnQnKTtcblxuICAgIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2VsY29tZS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJyk7XG4gICAgd2VsY29tZS50ZXh0Q29udGVudCA9ICdoZWxsbywnXG5cbiAgICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBxdW90ZS5jbGFzc0xpc3QuYWRkKCdxdW90ZScpO1xuICAgIHF1b3RlLnRleHRDb250ZW50ID0gJ3dlIGFyZSBoZXJlIHRvIGZ1ZWwgeW91IGhhcHB5IHRob3VnaHRzIGFuZCBDT0ZGRUUgOiknO1xuXG4gICAgbGVmdC5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbiAgICBsZWZ0LmFwcGVuZENoaWxkKHF1b3RlKTtcblxuICAgIC8vcmlnaHQgc2lkZSBvZiBob21lXG5cbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3Qgc2hvcCA9IG5ldyBJbWFnZSgpO1xuICAgIHNob3AuY2xhc3NMaXN0LmFkZCgnc2hvcC1pbWcnKVxuICAgIHNob3Auc3JjID0gY29mZmVlU2hvcDtcblxuICAgIHJpZ2h0LmFwcGVuZENoaWxkKHNob3ApO1xuXG4gICAgLy9hcHBlbmQgbGVmdCBhbmQgcmlnaHQgdG8gaG9tZVxuICAgIGhvbWUuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChyaWdodCk7XG5cbiAgICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJpbXBvcnQgY29mZmVlMSBmcm9tICcuLi9pbWcvY29mZmVlMS5wbmcnO1xuaW1wb3J0IGNvZmZlZTIgZnJvbSAnLi4vaW1nL2NvZmZlZTIucG5nJztcbmltcG9ydCBjcm9mZmxlaW1nIGZyb20gJy4uL2ltZy9jcm9mZmxlLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIHByaWNlKXtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcblxuICAgIHJldHVybiBpdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZShuYW1lKXtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS10aXRsZScpO1xuICAgIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIC8vY29mZmVlIG1lbnVcbiAgICBjb25zdCBjb2ZmZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2ZmZWUuY2xhc3NMaXN0LmFkZCgnY29mZmVlJyk7XG5cbiAgICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1nLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY29mZmVlSW1nMSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvZmZlZUltZzEuY2xhc3NMaXN0LmFkZCgnY29mZmVlLWltZycpO1xuICAgIGNvZmZlZUltZzEuc3JjID0gY29mZmVlMTtcbiAgICBjb25zdCBjb2ZmZWVJbWcyID0gbmV3IEltYWdlKCk7XG4gICAgY29mZmVlSW1nMi5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUtaW1nJyk7XG4gICAgY29mZmVlSW1nMi5zcmMgPSBjb2ZmZWUyO1xuXG4gICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvZmZlZUltZzEpO1xuICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb2ZmZWVJbWcyKTtcblxuICAgIGNvbnN0IGNvZmZlZUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29mZmVlSXRlbXMuY2xhc3NMaXN0LmFkZCgnaXRlbXMnKTtcbiAgICBjb25zdCBjb2ZmZWVMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29mZmVlTGVmdC5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUtbGVmdCcpO1xuICAgIFxuICAgIGNvZmZlZUxlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2VzcHJlc3NvJywgJzQnKSk7XG4gICAgY29mZmVlTGVmdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnY2FwcHVjY2lubycsICc1JykpO1xuICAgIGNvZmZlZUxlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2FtZXJpY2FubycsICc1JykpO1xuICAgIGNvZmZlZUxlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2NvY29hJywgJzUnKSk7XG4gICAgY29mZmVlTGVmdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnbGF0dGUnLCAnNicpKTtcblxuICAgIGNvbnN0IGNvZmZlZVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29mZmVlUmlnaHQuY2xhc3NMaXN0LmFkZCgnY29mZmVlLXJpZ2h0Jyk7XG4gICAgY29mZmVlUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2xhdHRlIG1hY2NoaWF0bycsICc2JykpO1xuICAgIGNvZmZlZVJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdmcmFwcGUnLCAnNicpKTtcbiAgICBjb2ZmZWVSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnaWNlZCBmcmFwcGUnLCAnNicpKTtcbiAgICBjb2ZmZWVSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnZ2xhY2UnLCAnNicpKTtcbiAgICBjb2ZmZWVSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnbW9jaGEnLCAnNicpKTtcblxuICAgIGNvZmZlZUl0ZW1zLmFwcGVuZENoaWxkKGNvZmZlZUxlZnQpO1xuICAgIGNvZmZlZUl0ZW1zLmFwcGVuZENoaWxkKGNvZmZlZVJpZ2h0KTtcblxuICAgIGNvZmZlZS5hcHBlbmRDaGlsZChpbWdDb250YWluZXIpO1xuICAgIGNvZmZlZS5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZSgnY29mZmVlJykpO1xuICAgIGNvZmZlZS5hcHBlbmRDaGlsZChjb2ZmZWVJdGVtcyk7XG4gICAgXG4gICAgLy9jcm9mZmxlIG1lbnVcblxuICAgIGNvbnN0IGNyb2ZmbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcm9mZmxlLmNsYXNzTGlzdC5hZGQoJ2Nyb2ZmbGUnKTtcblxuICAgIGNvbnN0IGNyb2ZmbGVJbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcm9mZmxlSW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltZy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGNyb2ZmbGVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBjcm9mZmxlSW1nLnNyYyA9IGNyb2ZmbGVpbWc7XG4gICAgY3JvZmZsZUltZy5jbGFzc0xpc3QuYWRkKCdjcm9mZmxlLWltZycpO1xuXG4gICAgY3JvZmZsZUltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcm9mZmxlSW1nKTtcblxuICAgIGNvbnN0IGNyb2ZmbGVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyb2ZmbGVJdGVtcy5jbGFzc0xpc3QuYWRkKCdpdGVtcycpO1xuICAgIGNvbnN0IGNyb2ZmbGVMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3JvZmZsZUxlZnQuY2xhc3NMaXN0LmFkZCgnY3JvZmZsZS1sZWZ0Jyk7XG4gICAgY3JvZmZsZUxlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ29yaWdpbmFsJywgJzQnKSk7XG4gICAgY3JvZmZsZUxlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ3N0cmF3YmVycnknLCAnNScpKTtcbiAgICBjcm9mZmxlTGVmdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnY2hvY29iYW5hJywgJzUnKSk7XG4gICAgY3JvZmZsZUxlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2Nob2NvbGF0ZScsICc1JykpO1xuICAgIGNyb2ZmbGVMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdibHVlYmVycnknLCAnNScpKTtcblxuICAgIGNvbnN0IGNyb2ZmbGVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyb2ZmbGVSaWdodC5jbGFzc0xpc3QuYWRkKCdjcm9mZmxlLXJpZ2h0Jyk7XG4gICAgY3JvZmZsZVJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdyYXNwYmVycnknLCAnNScpKTtcbiAgICBjcm9mZmxlUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2hvbmV5JywgJzUnKSk7XG4gICAgY3JvZmZsZVJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdzcHJlYWQgYnV0dGVyJywgJzUnKSk7XG4gICAgY3JvZmZsZVJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdjdWJlIGJ1dHRlcicsICc1JykpO1xuXG4gICAgY3JvZmZsZUl0ZW1zLmFwcGVuZENoaWxkKGNyb2ZmbGVMZWZ0KTtcbiAgICBjcm9mZmxlSXRlbXMuYXBwZW5kQ2hpbGQoY3JvZmZsZVJpZ2h0KTtcbiAgICBcbiAgICBjcm9mZmxlLmFwcGVuZENoaWxkKGNyb2ZmbGVJbWdDb250YWluZXIpO1xuICAgIGNyb2ZmbGUuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoJ2Nyb2ZmbGUnKSk7XG4gICAgY3JvZmZsZS5hcHBlbmRDaGlsZChjcm9mZmxlSXRlbXMpO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChjb2ZmZWUpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JvZmZsZSk7XG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2l0aHViSWNvbiBmcm9tICcuL2dpdGh1Yi5wbmcnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICAvL0NvZmZlZSBTaG9wIE5hbWVcbiAgICBjb25zdCBjb2ZmZXNob3BOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb2ZmZXNob3BOYW1lLmNsYXNzTGlzdC5hZGQoJ3Nob3AtbmFtZScpO1xuICAgIGNvZmZlc2hvcE5hbWUudGV4dENvbnRlbnQgPSAnbXkgY29mZmVlIHNob3AnO1xuXG4gICAgLy9uYXZpZ2F0aW9uIGJhclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJyk7XG5cbiAgICAvL2hvbWUgYnV0dG9uXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnaG9tZSc7XG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkQWN0aXZlQ2xhc3MoaG9tZUJ0bik7XG4gICAgICAgIGxvYWRIb21lKCk7XG4gICAgfSk7XG5cbiAgICAvL21lbnUgYnV0dG9uXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpXG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdtZW51JztcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRBY3RpdmVDbGFzcyhtZW51QnRuKTtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KTtcblxuICAgIC8vY29udGFjdCBidXR0b25cbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdjb250YWN0JztcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRBY3RpdmVDbGFzcyhjb250YWN0QnRuKTtcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICB9KTtcblxuICAgIC8vYXBwZW5kIGJ1dHRvbnMgdG8gbmF2aWdhdGlvbiBiYXJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICAgIC8vYXBwZW5kIGNvZmZlZSBzaG9wIG5hbWUgYW5kIG5hdmlnYXRpb24gYmFyIHRvIGhlYWRlclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb2ZmZXNob3BOYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGFkZEFjdGl2ZUNsYXNzKGFjdGl2ZUJ0bil7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtYnRuJyk7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZihidXR0b24gIT0gdGhpcyl7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGFjdGl2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICdtYWluJztcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnwqkgMjAyMiBUcnVjIFBoYW4nXG4gICAgXG4gICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHNvdXJjZS5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vdGhhbmh0cnVjcGhhbjEzNi9Db2ZmZWVTaG9wLVBhZ2VcIjtcbiAgICBzb3VyY2UudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblxuICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBpY29uLnNyYyA9IGdpdGh1Ykljb247XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdnaXRodWInKTtcbiAgICBzb3VyY2UuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoc291cmNlKTtcblxuICAgIHJldHVybiBmb290ZXJcblxufVxuXG5mdW5jdGlvbiBsb2FkV2VicGFnZSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIGFkZEFjdGl2ZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYnRuJykpO1xuICAgIGxvYWRIb21lKCk7XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkV2VicGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWRXZWJwYWdlIGZyb20gJy4vd2VicGFnZSc7XG5cbmxvYWRXZWJwYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9