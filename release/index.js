parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({5:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.get=function(e,r){if(""===r)return e;var t=r.split("."),i=e;if(i)for(var n in t){if(i=i[t[n]],Number(n)!==t.length-1){if(i)continue;return}return i}};
},{}],3:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&c.return&&c.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();exports.default=o;var n=require("./util");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function i(t,e){r(this,i),this.config=e,this.context=t}return e(i,[{key:"data",value:function(){return"function"==typeof this.config.data?this.config.data():this.config.data}},{key:"injectRawData",value:function(){var t=this.data();return Object.assign(this.context,t)}},{key:"injectComputed",value:function(){var e=this,n=this.config.computed||{},r=function(t,n){if("function"!=typeof n)return e.context[t]=n,"continue";Object.defineProperty(e.context,t,{get:function(){return n.call(e.context)}})},i=!0,o=!1,a=void 0;try{for(var c,u=Object.entries(n)[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var f=c.value,l=t(f,2);r(l[0],l[1])}}catch(t){o=!0,a=t}finally{try{!i&&u.return&&u.return()}finally{if(o)throw a}}}},{key:"injectWatch",value:function(){var e=this.config.watch||{},n=!0,r=!1,i=void 0;try{for(var o,a=Object.entries(e)[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var c=o.value,u=t(c,2),f=u[0],l=u[1];"function"==typeof l&&this.setWatch(f,l)}}catch(t){r=!0,i=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}}},{key:"setWatch",value:function(t,e){var r=this,i=t.split("."),o=i.pop(),a=i.join("."),c=(0,n.get)(this.context,a);if(c){var u=c[o];delete c[o],Object.defineProperty(c,o,{get:function(){return u},set:function(t){return e.call(r.context,t,u),u=t,t}})}}},{key:"unWatch",value:function(t){var e=t.split("."),r=(e.pop(),e.join("."));(0,n.get)(this.context,r)&&console.error(new Error("sorry, we are not implement yet"))}}]),i}();function o(t){this.__store__=new i(this,t);var e=this.__store__;e.injectRawData(),e.injectComputed(),e.injectWatch(),this.$watch=e.setWatch.bind(e),this.$unwatch=e.unWatch.bind(e)}
},{"./util":5}],1:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./Store"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}exports.default=t.default;
},{"./Store":3}]},{},[1], null)