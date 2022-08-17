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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --font-color: rgb(123, 95, 67);\n    --background-color: rgb(233,213,193);\n    --shadow: rgba(0,0,0,0.16) 6px 6px 5px;\n}\nbody{\n    margin: 0;\n    color: var(--font-color);\n    font-family: monospace;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    margin: 0;\n    justify-content: space-between;\n}\nheader{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: var(--background-color);\n    margin: 0;\n    box-shadow: rgba(0,0,0,0.16) 0px 6px 5px;;\n}\n.shop-name{\n    color: var(--font-color);\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\n.nav-bar{\n    padding: 10px;\n    display: flex;\n    gap: 10px;\n}\n\n.nav-btn{\n    border: none;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    cursor: pointer;\n    \n}\n.nav-btn.active{\n    border-bottom: 2px solid var(--font-color);\n    font-size: 18px;\n}\n.nav-btn:hover{\n    transform: translateY(10%);\n}\n\n/* home */\n.home{\n    display: flex;\n    gap: 100px;\n}\n.main-left{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n}\n.welcome{\n    margin-bottom: 0;\n    font-size: 30px;\n}\n.quote{\n    margin-top: 0;\n}\n.shop-img{\n    width: 550px;\n    margin-top: 10px;\n}\n\n/* menu */\n.menu{\n    margin-top: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.coffee, .croffle{\n    margin-top: 20px;\n    border: 1px solid var(--font-color);\n    border-radius: 10px 20px;\n    width: 750px;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: var(--shadow)\n}\n.img-container{\n    display: flex;\n    gap: 0;\n    margin-top: 0;\n}\n.coffee-img{\n    width: 360px;\n}\n.menu-title{\n    font-size: 35px;\n    margin-top: 0;\n    margin-bottom: 10px;\n    border-bottom: 1px solid var(--font-color);\n    width: 90px;\n    margin-left: -600px;\n}\n.items{\n    display: flex;\n    justify-content: space-between;\n    width: 700px;\n    align-items: center;\n    margin-left: 10px;\n}\n.item-container{\n    display: flex;\n    justify-content: space-between;\n    width: 300px;\n}\n.croffle-img{\n    width: 650px;\n}\n\n/*contact*/\n.contact, .contact-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.contact-container{\n    border: 1px solid var(--font-color);\n    border-radius: 10px;\n    background-color: var(--background-color);\n    width: 350px;\n    padding: 10px;\n    box-shadow: var(--shadow)\n}\n\n.contact-img{\n    width: 300px;\n    margin: 10px;\n}\n.contact-header{\n    font-size: 30px;\n    margin: 0;\n}\n.phone{\n    margin-left: -148px;\n    margin-top: 0;\n}\n.day{\n    display: flex;\n    justify-content: space-between;\n    margin-left: -86px;\n    margin-top: 0;\n    gap: 10px;\n}\nfooter{\n    margin-bottom: 10px;\n    margin-top: 50px;\n}\n.github{\n    width: 20px;\n    transition: transform 0.3s ease-in-out;\n    margin-left: 3px;\n}\n.github:hover{\n    transform: rotate(360deg);\n}\n\n@media only screen and (max-width: 1280px){\n    .home{\n        margin: 0 100px;\n    }\n    \n}\n\n@media only screen and (max-width: 820px){\n    .home{\n        flex-direction: column;\n        margin: 0 20px;\n        justify-content: center;\n        align-items: center;\n        gap: 0;\n    }\n    .shop-img{\n        width: 550px;\n        margin: 0;\n    }\n    .coffee, .croffle{\n        width: 500px;\n        padding: 35px;\n    }\n    .coffee-img{\n        width: 240px;\n    }\n    .menu-title{\n    font-size: 20px;\n    margin-bottom: 10px;\n    width: 90px;\n    margin-left: -430px;\n    }\n    .items{\n    width: 460px;\n    margin-left: -60px;\n    }\n    .item-container{\n        width: 150px;\n    }\n    .croffle-img{\n        width: 550px;\n    }\n}\n\n@media only screen and (max-width: 600px){\n    .home{\n        flex-direction: column;\n        margin: 0 20px;\n        justify-content: center;\n        align-items: center;\n        gap: 0;\n    }\n    .welcome{\n        font-size: 20px;\n    }\n    .shop-img{\n        width: 350px;\n        margin: 0;\n    }\n    .coffee, .croffle{\n        width: 280px;\n        padding: 20px 40px;\n    }\n    .coffee-img{\n        width: 160px;\n    }\n    .menu-title{\n    font-size: 18px;\n    margin-bottom: 10px;\n    width: 70px;\n    margin-left: -230px;\n    }\n    .items{\n    width: 300px;\n    margin-left: 3px;\n    }\n    .item-container{\n        width: 130px;\n        font-size: 12px;\n    }\n    .croffle-img{\n        width: 280px;\n    }\n    .contact-container{\n        width: 250px;\n        padding: 10px;\n    }\n    \n    .contact-img{\n        width: 250px;\n        margin: 10px;\n    }\n    .contact-header{\n        font-size: 25px;\n        margin: 0;\n    }\n    .phone{\n        margin-left: -108px;\n        margin-top: 0;\n    }\n    .day{\n        display: flex;\n        justify-content: space-between;\n        margin-left: -46px;\n        margin-top: 0;\n        gap: 10px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,oCAAoC;IACpC,sCAAsC;AAC1C;AACA;IACI,SAAS;IACT,wBAAwB;IACxB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;IACT,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,yCAAyC;IACzC,SAAS;IACT,wCAAwC;AAC5C;AACA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,yCAAyC;IACzC,wBAAwB;IACxB,eAAe;;AAEnB;AACA;IACI,0CAA0C;IAC1C,eAAe;AACnB;AACA;IACI,0BAA0B;AAC9B;;AAEA,SAAS;AACT;IACI,aAAa;IACb,UAAU;AACd;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA,SAAS;AACT;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,mCAAmC;IACnC,wBAAwB;IACxB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB;AACJ;AACA;IACI,aAAa;IACb,MAAM;IACN,aAAa;AACjB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,0CAA0C;IAC1C,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;AACA;IACI,YAAY;AAChB;;AAEA,UAAU;AACV;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,mCAAmC;IACnC,mBAAmB;IACnB,yCAAyC;IACzC,YAAY;IACZ,aAAa;IACb;AACJ;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,eAAe;IACf,SAAS;AACb;AACA;IACI,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;AACA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,sCAAsC;IACtC,gBAAgB;AACpB;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI;QACI,eAAe;IACnB;;AAEJ;;AAEA;IACI;QACI,sBAAsB;QACtB,cAAc;QACd,uBAAuB;QACvB,mBAAmB;QACnB,MAAM;IACV;IACA;QACI,YAAY;QACZ,SAAS;IACb;IACA;QACI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;IACA,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,mBAAmB;IACnB;IACA;IACA,YAAY;IACZ,kBAAkB;IAClB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,sBAAsB;QACtB,cAAc;QACd,uBAAuB;QACvB,mBAAmB;QACnB,MAAM;IACV;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;QACZ,SAAS;IACb;IACA;QACI,YAAY;QACZ,kBAAkB;IACtB;IACA;QACI,YAAY;IAChB;IACA;IACA,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,mBAAmB;IACnB;IACA;IACA,YAAY;IACZ,gBAAgB;IAChB;IACA;QACI,YAAY;QACZ,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;QACZ,aAAa;IACjB;;IAEA;QACI,YAAY;QACZ,YAAY;IAChB;IACA;QACI,eAAe;QACf,SAAS;IACb;IACA;QACI,mBAAmB;QACnB,aAAa;IACjB;IACA;QACI,aAAa;QACb,8BAA8B;QAC9B,kBAAkB;QAClB,aAAa;QACb,SAAS;IACb;AACJ","sourcesContent":[":root{\n    --font-color: rgb(123, 95, 67);\n    --background-color: rgb(233,213,193);\n    --shadow: rgba(0,0,0,0.16) 6px 6px 5px;\n}\nbody{\n    margin: 0;\n    color: var(--font-color);\n    font-family: monospace;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    margin: 0;\n    justify-content: space-between;\n}\nheader{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: var(--background-color);\n    margin: 0;\n    box-shadow: rgba(0,0,0,0.16) 0px 6px 5px;;\n}\n.shop-name{\n    color: var(--font-color);\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\n.nav-bar{\n    padding: 10px;\n    display: flex;\n    gap: 10px;\n}\n\n.nav-btn{\n    border: none;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    cursor: pointer;\n    \n}\n.nav-btn.active{\n    border-bottom: 2px solid var(--font-color);\n    font-size: 18px;\n}\n.nav-btn:hover{\n    transform: translateY(10%);\n}\n\n/* home */\n.home{\n    display: flex;\n    gap: 100px;\n}\n.main-left{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n}\n.welcome{\n    margin-bottom: 0;\n    font-size: 30px;\n}\n.quote{\n    margin-top: 0;\n}\n.shop-img{\n    width: 550px;\n    margin-top: 10px;\n}\n\n/* menu */\n.menu{\n    margin-top: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.coffee, .croffle{\n    margin-top: 20px;\n    border: 1px solid var(--font-color);\n    border-radius: 10px 20px;\n    width: 750px;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: var(--shadow)\n}\n.img-container{\n    display: flex;\n    gap: 0;\n    margin-top: 0;\n}\n.coffee-img{\n    width: 360px;\n}\n.menu-title{\n    font-size: 35px;\n    margin-top: 0;\n    margin-bottom: 10px;\n    border-bottom: 1px solid var(--font-color);\n    width: 90px;\n    margin-left: -600px;\n}\n.items{\n    display: flex;\n    justify-content: space-between;\n    width: 700px;\n    align-items: center;\n    margin-left: 10px;\n}\n.item-container{\n    display: flex;\n    justify-content: space-between;\n    width: 300px;\n}\n.croffle-img{\n    width: 650px;\n}\n\n/*contact*/\n.contact, .contact-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.contact-container{\n    border: 1px solid var(--font-color);\n    border-radius: 10px;\n    background-color: var(--background-color);\n    width: 350px;\n    padding: 10px;\n    box-shadow: var(--shadow)\n}\n\n.contact-img{\n    width: 300px;\n    margin: 10px;\n}\n.contact-header{\n    font-size: 30px;\n    margin: 0;\n}\n.phone{\n    margin-left: -148px;\n    margin-top: 0;\n}\n.day{\n    display: flex;\n    justify-content: space-between;\n    margin-left: -86px;\n    margin-top: 0;\n    gap: 10px;\n}\nfooter{\n    margin-bottom: 10px;\n    margin-top: 50px;\n}\n.github{\n    width: 20px;\n    transition: transform 0.3s ease-in-out;\n    margin-left: 3px;\n}\n.github:hover{\n    transform: rotate(360deg);\n}\n\n@media only screen and (max-width: 1280px){\n    .home{\n        margin: 0 100px;\n    }\n    \n}\n\n@media only screen and (max-width: 820px){\n    .home{\n        flex-direction: column;\n        margin: 0 20px;\n        justify-content: center;\n        align-items: center;\n        gap: 0;\n    }\n    .shop-img{\n        width: 550px;\n        margin: 0;\n    }\n    .coffee, .croffle{\n        width: 500px;\n        padding: 35px;\n    }\n    .coffee-img{\n        width: 240px;\n    }\n    .menu-title{\n    font-size: 20px;\n    margin-bottom: 10px;\n    width: 90px;\n    margin-left: -430px;\n    }\n    .items{\n    width: 460px;\n    margin-left: -60px;\n    }\n    .item-container{\n        width: 150px;\n    }\n    .croffle-img{\n        width: 550px;\n    }\n}\n\n@media only screen and (max-width: 600px){\n    .home{\n        flex-direction: column;\n        margin: 0 20px;\n        justify-content: center;\n        align-items: center;\n        gap: 0;\n    }\n    .welcome{\n        font-size: 20px;\n    }\n    .shop-img{\n        width: 350px;\n        margin: 0;\n    }\n    .coffee, .croffle{\n        width: 280px;\n        padding: 20px 40px;\n    }\n    .coffee-img{\n        width: 160px;\n    }\n    .menu-title{\n    font-size: 18px;\n    margin-bottom: 10px;\n    width: 70px;\n    margin-left: -230px;\n    }\n    .items{\n    width: 300px;\n    margin-left: 3px;\n    }\n    .item-container{\n        width: 130px;\n        font-size: 12px;\n    }\n    .croffle-img{\n        width: 280px;\n    }\n    .contact-container{\n        width: 250px;\n        padding: 10px;\n    }\n    \n    .contact-img{\n        width: 250px;\n        margin: 10px;\n    }\n    .contact-header{\n        font-size: 25px;\n        margin: 0;\n    }\n    .phone{\n        margin-left: -108px;\n        margin-top: 0;\n    }\n    .day{\n        display: flex;\n        justify-content: space-between;\n        margin-left: -46px;\n        margin-top: 0;\n        gap: 10px;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFHMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7OztBQ0FvQzs7QUFFcEMsb0RBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2UvLi9zcmMvd2VicGFnZS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWVzaG9wLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvZmZlZXNob3AtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY29mZmVlc2hvcC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tZm9udC1jb2xvcjogcmdiKDEyMywgOTUsIDY3KTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLDIxMywxOTMpO1xcbiAgICAtLXNoYWRvdzogcmdiYSgwLDAsMCwwLjE2KSA2cHggNnB4IDVweDtcXG59XFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMTYpIDBweCA2cHggNXB4OztcXG59XFxuLnNob3AtbmFtZXtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5uYXYtYmFye1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5uYXYtYnRue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxufVxcbi5uYXYtYnRuLmFjdGl2ZXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5uYXYtYnRuOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcXG59XFxuXFxuLyogaG9tZSAqL1xcbi5ob21le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG4ubWFpbi1sZWZ0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi53ZWxjb21le1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5xdW90ZXtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuLnNob3AtaW1ne1xcbiAgICB3aWR0aDogNTUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi8qIG1lbnUgKi9cXG4ubWVudXtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb2ZmZWUsIC5jcm9mZmxle1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAyMHB4O1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpXFxufVxcbi5pbWctY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDA7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5jb2ZmZWUtaW1ne1xcbiAgICB3aWR0aDogMzYwcHg7XFxufVxcbi5tZW51LXRpdGxle1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNjAwcHg7XFxufVxcbi5pdGVtc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uaXRlbS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG4uY3JvZmZsZS1pbWd7XFxuICAgIHdpZHRoOiA2NTBweDtcXG59XFxuXFxuLypjb250YWN0Ki9cXG4uY29udGFjdCwgLmNvbnRhY3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbnRhY3QtY29udGFpbmVye1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KVxcbn1cXG5cXG4uY29udGFjdC1pbWd7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG4uY29udGFjdC1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4ucGhvbmV7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTQ4cHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5kYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWxlZnQ6IC04NnB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmZvb3RlcntcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuLmdpdGh1YntcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xcbn1cXG4uZ2l0aHViOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCl7XFxuICAgIC5ob21le1xcbiAgICAgICAgbWFyZ2luOiAwIDEwMHB4O1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KXtcXG4gICAgLmhvbWV7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDA7XFxuICAgIH1cXG4gICAgLnNob3AtaW1ne1xcbiAgICAgICAgd2lkdGg6IDU1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgIC5jb2ZmZWUsIC5jcm9mZmxle1xcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMzVweDtcXG4gICAgfVxcbiAgICAuY29mZmVlLWltZ3tcXG4gICAgICAgIHdpZHRoOiAyNDBweDtcXG4gICAgfVxcbiAgICAubWVudS10aXRsZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC00MzBweDtcXG4gICAgfVxcbiAgICAuaXRlbXN7XFxuICAgIHdpZHRoOiA0NjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xcbiAgICB9XFxuICAgIC5pdGVtLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgfVxcbiAgICAuY3JvZmZsZS1pbWd7XFxuICAgICAgICB3aWR0aDogNTUwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XFxuICAgIC5ob21le1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICB9XFxuICAgIC53ZWxjb21le1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuICAgIC5zaG9wLWltZ3tcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbiAgICAuY29mZmVlLCAuY3JvZmZsZXtcXG4gICAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgfVxcbiAgICAuY29mZmVlLWltZ3tcXG4gICAgICAgIHdpZHRoOiAxNjBweDtcXG4gICAgfVxcbiAgICAubWVudS10aXRsZXtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMzBweDtcXG4gICAgfVxcbiAgICAuaXRlbXN7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgfVxcbiAgICAuaXRlbS1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG4gICAgLmNyb2ZmbGUtaW1ne1xcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xcbiAgICB9XFxuICAgIC5jb250YWN0LWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5jb250YWN0LWltZ3tcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgfVxcbiAgICAuY29udGFjdC1oZWFkZXJ7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gICAgLnBob25le1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMDhweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG4gICAgLmRheXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTQ2cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksU0FBUztJQUNULHdCQUF3QjtJQUN4QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsU0FBUztJQUNULHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsd0JBQXdCO0lBQ3hCLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBLFNBQVM7QUFDVDtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLE1BQU07SUFDTixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLFVBQVU7QUFDVjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0FBQ2I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztBQUNiO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztBQUVKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsTUFBTTtJQUNWO0lBQ0E7UUFDSSxZQUFZO1FBQ1osU0FBUztJQUNiO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO0lBQ0EsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CO0lBQ0E7SUFDQSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixNQUFNO0lBQ1Y7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7UUFDWixTQUFTO0lBQ2I7SUFDQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtJQUNBLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQjtJQUNBO0lBQ0EsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7UUFDZixTQUFTO0lBQ2I7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tZm9udC1jb2xvcjogcmdiKDEyMywgOTUsIDY3KTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLDIxMywxOTMpO1xcbiAgICAtLXNoYWRvdzogcmdiYSgwLDAsMCwwLjE2KSA2cHggNnB4IDVweDtcXG59XFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMTYpIDBweCA2cHggNXB4OztcXG59XFxuLnNob3AtbmFtZXtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5uYXYtYmFye1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5uYXYtYnRue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxufVxcbi5uYXYtYnRuLmFjdGl2ZXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5uYXYtYnRuOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcXG59XFxuXFxuLyogaG9tZSAqL1xcbi5ob21le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG4ubWFpbi1sZWZ0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi53ZWxjb21le1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5xdW90ZXtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuLnNob3AtaW1ne1xcbiAgICB3aWR0aDogNTUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi8qIG1lbnUgKi9cXG4ubWVudXtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb2ZmZWUsIC5jcm9mZmxle1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAyMHB4O1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpXFxufVxcbi5pbWctY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDA7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5jb2ZmZWUtaW1ne1xcbiAgICB3aWR0aDogMzYwcHg7XFxufVxcbi5tZW51LXRpdGxle1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNjAwcHg7XFxufVxcbi5pdGVtc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uaXRlbS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG4uY3JvZmZsZS1pbWd7XFxuICAgIHdpZHRoOiA2NTBweDtcXG59XFxuXFxuLypjb250YWN0Ki9cXG4uY29udGFjdCwgLmNvbnRhY3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbnRhY3QtY29udGFpbmVye1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KVxcbn1cXG5cXG4uY29udGFjdC1pbWd7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG4uY29udGFjdC1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4ucGhvbmV7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTQ4cHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5kYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWxlZnQ6IC04NnB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmZvb3RlcntcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuLmdpdGh1YntcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xcbn1cXG4uZ2l0aHViOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCl7XFxuICAgIC5ob21le1xcbiAgICAgICAgbWFyZ2luOiAwIDEwMHB4O1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KXtcXG4gICAgLmhvbWV7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDA7XFxuICAgIH1cXG4gICAgLnNob3AtaW1ne1xcbiAgICAgICAgd2lkdGg6IDU1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgIC5jb2ZmZWUsIC5jcm9mZmxle1xcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMzVweDtcXG4gICAgfVxcbiAgICAuY29mZmVlLWltZ3tcXG4gICAgICAgIHdpZHRoOiAyNDBweDtcXG4gICAgfVxcbiAgICAubWVudS10aXRsZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC00MzBweDtcXG4gICAgfVxcbiAgICAuaXRlbXN7XFxuICAgIHdpZHRoOiA0NjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xcbiAgICB9XFxuICAgIC5pdGVtLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgfVxcbiAgICAuY3JvZmZsZS1pbWd7XFxuICAgICAgICB3aWR0aDogNTUwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XFxuICAgIC5ob21le1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICB9XFxuICAgIC53ZWxjb21le1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuICAgIC5zaG9wLWltZ3tcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbiAgICAuY29mZmVlLCAuY3JvZmZsZXtcXG4gICAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgfVxcbiAgICAuY29mZmVlLWltZ3tcXG4gICAgICAgIHdpZHRoOiAxNjBweDtcXG4gICAgfVxcbiAgICAubWVudS10aXRsZXtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMzBweDtcXG4gICAgfVxcbiAgICAuaXRlbXN7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgfVxcbiAgICAuaXRlbS1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG4gICAgLmNyb2ZmbGUtaW1ne1xcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xcbiAgICB9XFxuICAgIC5jb250YWN0LWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5jb250YWN0LWltZ3tcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgfVxcbiAgICAuY29udGFjdC1oZWFkZXJ7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gICAgLnBob25le1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMDhweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG4gICAgLmRheXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTQ2cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNhZmZlZVdhbGxsZSBmcm9tICcuLi9pbWcvY29mZmVld2FmZmxlLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpbWUoZGF0ZSxzdGFydCxlbmQpe1xuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYXkuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XG4gICAgXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUtZGl2Jyk7XG4gICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IGAke2RhdGV9OiBgO1xuXG4gICAgY29uc3QgaG91cnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaG91cnNEaXYuY2xhc3NMaXN0LmFkZCgnaG91cnMtZGl2Jyk7XG4gICAgaG91cnNEaXYudGV4dENvbnRlbnQgPSBgJHtzdGFydH1hbSAtICR7ZW5kfXBtYDtcblxuICAgIGRheS5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgICBkYXkuYXBwZW5kQ2hpbGQoaG91cnNEaXYpO1xuXG4gICAgcmV0dXJuIGRheTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpe1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWhlYWRlcicpO1xuICAgIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnaGkhIHZpc2l0IHVzIGF0Oic7XG5cbiAgICBjb25zdCBjb250YWN0SW1nID0gbmV3IEltYWdlKCk7XG4gICAgY29udGFjdEltZy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWltZycpO1xuICAgIGNvbnRhY3RJbWcuc3JjID0gY2FmZmVlV2FsbGxlO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MnKTtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ2FkZHJlc3M6IDEzMDYgY29mZmVlIGF2ZSwgc2VhdHRsZSwgd2EnO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZCgncGhvbmUnKTtcbiAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICdwaG9uZTogMTIzIDQ1NiA3ODknO1xuXG4gICAgY29uc3Qgb3BlbkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3BlbkhvdXJzLmFwcGVuZENoaWxkKGNyZWF0ZVRpbWUoJ21vbmRheS1mcmlkYXknLCc4JywnNicpKTtcbiAgICBvcGVuSG91cnMuYXBwZW5kQ2hpbGQoY3JlYXRlVGltZSgnc2F0dXJkYXktc3VuZGF5JywnOScsJzYnKSk7XG5cbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGFpbmVyJyk7XG5cbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuSG91cnMpO1xuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0SW1nKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7XG5cbiIsImltcG9ydCBjb2ZmZWVTaG9wIGZyb20gJy4uL2ltZy9jb2ZmZWVzaG9wLmpwZWcnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCl7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gICAgLy9sZWZ0IHNpZGUgb2YgaG9tZVxuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ21haW4tbGVmdCcpO1xuXG4gICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcbiAgICB3ZWxjb21lLnRleHRDb250ZW50ID0gJ2hlbGxvLCdcblxuICAgIGNvbnN0IHF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHF1b3RlLmNsYXNzTGlzdC5hZGQoJ3F1b3RlJyk7XG4gICAgcXVvdGUudGV4dENvbnRlbnQgPSAnd2UgYXJlIGhlcmUgdG8gZnVlbCB5b3Ugd2l0aCBoYXBweSB0aG91Z2h0cyBhbmQgQ09GRkVFIDopJztcblxuICAgIGxlZnQuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG4gICAgbGVmdC5hcHBlbmRDaGlsZChxdW90ZSk7XG5cbiAgICAvL3JpZ2h0IHNpZGUgb2YgaG9tZVxuXG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHNob3AgPSBuZXcgSW1hZ2UoKTtcbiAgICBzaG9wLmNsYXNzTGlzdC5hZGQoJ3Nob3AtaW1nJylcbiAgICBzaG9wLnNyYyA9IGNvZmZlZVNob3A7XG5cbiAgICByaWdodC5hcHBlbmRDaGlsZChzaG9wKTtcblxuICAgIC8vYXBwZW5kIGxlZnQgYW5kIHJpZ2h0IHRvIGhvbWVcbiAgICBob21lLmFwcGVuZENoaWxkKGxlZnQpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQocmlnaHQpO1xuXG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiaW1wb3J0IGNvZmZlZTEgZnJvbSAnLi4vaW1nL2NvZmZlZTEucG5nJztcbmltcG9ydCBjb2ZmZWUyIGZyb20gJy4uL2ltZy9jb2ZmZWUyLnBuZyc7XG5pbXBvcnQgY3JvZmZsZWltZyBmcm9tICcuLi9pbWcvY3JvZmZsZS5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBwcmljZSl7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcblxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUobmFtZSl7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGl0bGUnKTtcbiAgICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKXtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICAvL2NvZmZlZSBtZW51XG4gICAgY29uc3QgY29mZmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29mZmVlLmNsYXNzTGlzdC5hZGQoJ2NvZmZlZScpO1xuXG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltZy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGNvZmZlZUltZzEgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb2ZmZWVJbWcxLmNsYXNzTGlzdC5hZGQoJ2NvZmZlZS1pbWcnKTtcbiAgICBjb2ZmZWVJbWcxLnNyYyA9IGNvZmZlZTE7XG4gICAgY29uc3QgY29mZmVlSW1nMiA9IG5ldyBJbWFnZSgpO1xuICAgIGNvZmZlZUltZzIuY2xhc3NMaXN0LmFkZCgnY29mZmVlLWltZycpO1xuICAgIGNvZmZlZUltZzIuc3JjID0gY29mZmVlMjtcblxuICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb2ZmZWVJbWcxKTtcbiAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoY29mZmVlSW1nMik7XG5cbiAgICBjb25zdCBjb2ZmZWVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvZmZlZUl0ZW1zLmNsYXNzTGlzdC5hZGQoJ2l0ZW1zJyk7XG4gICAgY29uc3QgY29mZmVlTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvZmZlZUxlZnQuY2xhc3NMaXN0LmFkZCgnY29mZmVlLWxlZnQnKTtcbiAgICBcbiAgICBjb2ZmZWVMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdlc3ByZXNzbycsICc0JykpO1xuICAgIGNvZmZlZUxlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2NhcHB1Y2Npbm8nLCAnNScpKTtcbiAgICBjb2ZmZWVMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdhbWVyaWNhbm8nLCAnNScpKTtcbiAgICBjb2ZmZWVMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdjb2NvYScsICc1JykpO1xuICAgIGNvZmZlZUxlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2xhdHRlJywgJzYnKSk7XG5cbiAgICBjb25zdCBjb2ZmZWVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvZmZlZVJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2NvZmZlZS1yaWdodCcpO1xuICAgIGNvZmZlZVJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdsYXR0ZSBtYWNjaGlhdG8nLCAnNicpKTtcbiAgICBjb2ZmZWVSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnZnJhcHBlJywgJzYnKSk7XG4gICAgY29mZmVlUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2ljZWQgZnJhcHBlJywgJzYnKSk7XG4gICAgY29mZmVlUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2dsYWNlJywgJzYnKSk7XG4gICAgY29mZmVlUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ21vY2hhJywgJzYnKSk7XG5cbiAgICBjb2ZmZWVJdGVtcy5hcHBlbmRDaGlsZChjb2ZmZWVMZWZ0KTtcbiAgICBjb2ZmZWVJdGVtcy5hcHBlbmRDaGlsZChjb2ZmZWVSaWdodCk7XG5cbiAgICBjb2ZmZWUuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcbiAgICBjb2ZmZWUuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoJ2NvZmZlZScpKTtcbiAgICBjb2ZmZWUuYXBwZW5kQ2hpbGQoY29mZmVlSXRlbXMpO1xuICAgIFxuICAgIC8vY3JvZmZsZSBtZW51XG5cbiAgICBjb25zdCBjcm9mZmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3JvZmZsZS5jbGFzc0xpc3QuYWRkKCdjcm9mZmxlJyk7XG5cbiAgICBjb25zdCBjcm9mZmxlSW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3JvZmZsZUltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWctY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBjcm9mZmxlSW1nID0gbmV3IEltYWdlKCk7XG4gICAgY3JvZmZsZUltZy5zcmMgPSBjcm9mZmxlaW1nO1xuICAgIGNyb2ZmbGVJbWcuY2xhc3NMaXN0LmFkZCgnY3JvZmZsZS1pbWcnKTtcblxuICAgIGNyb2ZmbGVJbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JvZmZsZUltZyk7XG5cbiAgICBjb25zdCBjcm9mZmxlSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcm9mZmxlSXRlbXMuY2xhc3NMaXN0LmFkZCgnaXRlbXMnKTtcbiAgICBjb25zdCBjcm9mZmxlTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyb2ZmbGVMZWZ0LmNsYXNzTGlzdC5hZGQoJ2Nyb2ZmbGUtbGVmdCcpO1xuICAgIGNyb2ZmbGVMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdvcmlnaW5hbCcsICc0JykpO1xuICAgIGNyb2ZmbGVMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdzdHJhd2JlcnJ5JywgJzUnKSk7XG4gICAgY3JvZmZsZUxlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2Nob2NvYmFuYScsICc1JykpO1xuICAgIGNyb2ZmbGVMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdjaG9jb2xhdGUnLCAnNScpKTtcbiAgICBjcm9mZmxlTGVmdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnYmx1ZWJlcnJ5JywgJzUnKSk7XG5cbiAgICBjb25zdCBjcm9mZmxlUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcm9mZmxlUmlnaHQuY2xhc3NMaXN0LmFkZCgnY3JvZmZsZS1yaWdodCcpO1xuICAgIGNyb2ZmbGVSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgncmFzcGJlcnJ5JywgJzUnKSk7XG4gICAgY3JvZmZsZVJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdob25leScsICc1JykpO1xuICAgIGNyb2ZmbGVSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnc3ByZWFkIGJ1dHRlcicsICc1JykpO1xuICAgIGNyb2ZmbGVSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnY3ViZSBidXR0ZXInLCAnNScpKTtcblxuICAgIGNyb2ZmbGVJdGVtcy5hcHBlbmRDaGlsZChjcm9mZmxlTGVmdCk7XG4gICAgY3JvZmZsZUl0ZW1zLmFwcGVuZENoaWxkKGNyb2ZmbGVSaWdodCk7XG4gICAgXG4gICAgY3JvZmZsZS5hcHBlbmRDaGlsZChjcm9mZmxlSW1nQ29udGFpbmVyKTtcbiAgICBjcm9mZmxlLmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKCdjcm9mZmxlJykpO1xuICAgIGNyb2ZmbGUuYXBwZW5kQ2hpbGQoY3JvZmZsZUl0ZW1zKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY29mZmVlKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGNyb2ZmbGUpO1xuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdpdGh1Ykljb24gZnJvbSAnLi9naXRodWIucG5nJztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgLy9Db2ZmZWUgU2hvcCBOYW1lXG4gICAgY29uc3QgY29mZmVzaG9wTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29mZmVzaG9wTmFtZS5jbGFzc0xpc3QuYWRkKCdzaG9wLW5hbWUnKTtcbiAgICBjb2ZmZXNob3BOYW1lLnRleHRDb250ZW50ID0gJ215IGNvZmZlZSBzaG9wJztcblxuICAgIC8vbmF2aWdhdGlvbiBiYXJcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpO1xuXG4gICAgLy9ob21lIGJ1dHRvblxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBob21lQnRuLnRleHRDb250ZW50ID0gJ2hvbWUnO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZEFjdGl2ZUNsYXNzKGhvbWVCdG4pO1xuICAgICAgICBsb2FkSG9tZSgpO1xuICAgIH0pO1xuXG4gICAgLy9tZW51IGJ1dHRvblxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKVxuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnbWVudSc7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkQWN0aXZlQ2xhc3MobWVudUJ0bik7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgfSk7XG5cbiAgICAvL2NvbnRhY3QgYnV0dG9uXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnY29udGFjdCc7XG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkQWN0aXZlQ2xhc3MoY29udGFjdEJ0bik7XG4gICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgfSk7XG5cbiAgICAvL2FwcGVuZCBidXR0b25zIHRvIG5hdmlnYXRpb24gYmFyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgICAvL2FwcGVuZCBjb2ZmZWUgc2hvcCBuYW1lIGFuZCBuYXZpZ2F0aW9uIGJhciB0byBoZWFkZXJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29mZmVzaG9wTmFtZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBhZGRBY3RpdmVDbGFzcyhhY3RpdmVCdG4pe1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ0bicpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgaWYoYnV0dG9uICE9IHRoaXMpe1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBhY3RpdmVCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnbWFpbic7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ8KpIDIwMjIgVHJ1YyBQaGFuJ1xuICAgIFxuICAgIGNvbnN0IHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBzb3VyY2UuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3RoYW5odHJ1Y3BoYW4xMzYvQ29mZmVlU2hvcC1QYWdlXCI7XG4gICAgc291cmNlLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gICAgaWNvbi5zcmMgPSBnaXRodWJJY29uO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZ2l0aHViJyk7XG4gICAgc291cmNlLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHNvdXJjZSk7XG5cbiAgICByZXR1cm4gZm9vdGVyXG5cbn1cblxuZnVuY3Rpb24gbG9hZFdlYnBhZ2UoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgICBhZGRBY3RpdmVDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJ0bicpKTtcbiAgICBsb2FkSG9tZSgpO1xufVxuZXhwb3J0IGRlZmF1bHQgbG9hZFdlYnBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb2FkV2VicGFnZSBmcm9tICcuL3dlYnBhZ2UnO1xuXG5sb2FkV2VicGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==