"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-random-values-esm";
exports.ids = ["vendor-chunks/get-random-values-esm"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-random-values-esm/index.mjs":
/*!******************************************************!*\
  !*** ./node_modules/get-random-values-esm/index.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getRandomValues)\n/* harmony export */ });\n// Strict ESM env, designed to run outside Node.js in envs that provide WebCrypto (deno, browsers, etc)\n\nfunction getRandomValues(typedArray) {\n  const crypto =\n    typeof window !== 'undefined' && 'crypto' in window\n      ? window.crypto\n      : globalThis.crypto\n\n  if (!crypto || !crypto.getRandomValues) {\n    throw new Error('WebCrypto not available in this environment')\n  }\n\n  return crypto.getRandomValues(typedArray)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LXJhbmRvbS12YWx1ZXMtZXNtL2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiRTpcXEhhY2thdGhvbi0zLVNhaW1hS2hhbGFcXG5vZGVfbW9kdWxlc1xcZ2V0LXJhbmRvbS12YWx1ZXMtZXNtXFxpbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU3RyaWN0IEVTTSBlbnYsIGRlc2lnbmVkIHRvIHJ1biBvdXRzaWRlIE5vZGUuanMgaW4gZW52cyB0aGF0IHByb3ZpZGUgV2ViQ3J5cHRvIChkZW5vLCBicm93c2VycywgZXRjKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSYW5kb21WYWx1ZXModHlwZWRBcnJheSkge1xuICBjb25zdCBjcnlwdG8gPVxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdjcnlwdG8nIGluIHdpbmRvd1xuICAgICAgPyB3aW5kb3cuY3J5cHRvXG4gICAgICA6IGdsb2JhbFRoaXMuY3J5cHRvXG5cbiAgaWYgKCFjcnlwdG8gfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYkNyeXB0byBub3QgYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQnKVxuICB9XG5cbiAgcmV0dXJuIGNyeXB0by5nZXRSYW5kb21WYWx1ZXModHlwZWRBcnJheSlcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-random-values-esm/index.mjs\n");

/***/ })

};
;