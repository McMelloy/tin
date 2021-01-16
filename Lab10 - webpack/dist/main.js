/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F_to_C": () => /* binding */ F_to_C,
/* harmony export */   "F_to_K": () => /* binding */ F_to_K,
/* harmony export */   "C_to_F": () => /* binding */ C_to_F,
/* harmony export */   "C_to_K": () => /* binding */ C_to_K,
/* harmony export */   "K_to_F": () => /* binding */ K_to_F,
/* harmony export */   "K_to_C": () => /* binding */ K_to_C
/* harmony export */ });
const F_to_C = (valNum) => {
    return (valNum-32) / 1.8;
}
const F_to_K = (valNum) => {
    return ((valNum-32)/1.8)+273.15;
}

const C_to_F = (valNum) => {
    return (valNum*1.8)+32;
}
const C_to_K = (valNum) => {
    return valNum+273.15;
}

const K_to_F = (valNum) => {
    return ((valNum-273.15)*1.8)+32;
}
const K_to_C = (valNum) => {
    return valNum-273.15;
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiToKm": () => /* binding */ MiToKm,
/* harmony export */   "KmToMi": () => /* binding */ KmToMi
/* harmony export */ });
const MiToKm = (valNum) => {
    return valNum*1.609;
}
const KmToMi = (valNum) => {
    return valNum/1.609;
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
(() => {
const temp_conv = __webpack_require__(1);
const dist_conv = __webpack_require__(2);


window.FahrenheitConverter = function(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("inputCelsius").value = temp_conv.F_to_C(valNum);
    document.getElementById("inputKelvin").value = temp_conv.F_to_K(valNum);
  } 
window.CelsiusConverter = function(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("inputFahrenheit").value = temp_conv.C_to_F(valNum);
    document.getElementById("inputKelvin").value = temp_conv.C_to_K(valNum);
  } 
window.KelvinConverter = function(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("inputFahrenheit").value = temp_conv.K_to_F(valNum);
    document.getElementById("inputCelsius").value = temp_conv.K_to_C(valNum);
  } 
window.MilesConverter = function(valNum) {
    document.getElementById("inputKilometers").value = dist_conv.MiToKm(parseFloat(valNum));
  } 
window.KilometersConverter = function(valNum) {
    document.getElementById("inputMiles").value = dist_conv.KmToMi(parseFloat(valNum));
  } 
})();

/******/ })()
;