!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash/get")):"function"==typeof define&&define.amd?define(["lodash/get"],t):"object"==typeof exports?exports.webpackLibraryBoilerplate=t(require("lodash/get")):e.webpackLibraryBoilerplate=t(e["lodash/get"])}(window,function(n){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t,n){},,function(e,t){e.exports=n},function(e,t,n){"use strict";n.r(t);var r=function(e,t){return e+t};n(0),n(2);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}console.log("2 + 2 =",r(2,2)),console.log("4 + 4 =",r(4,4));var u=function(){function n(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.message=["What does the lib say:"].concat(o((t=e,Array.from(new Set(t.split(" "))))))}var e,t,r;return e=n,(t=[{key:"toString",value:function(){return'"'.concat(this.message.join(" "),'"')}}])&&i(e.prototype,t),r&&i(e,r),n}();t.default=function(){var e=document.createElement("h1");return e.innerHTML=new u("Good bye! bye!"),document.body.appendChild(e),e.innerHTML}}]).default});
//# sourceMappingURL=webpackLibraryBoilerplate.umd.js.map