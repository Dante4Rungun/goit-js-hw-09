!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("iU1Pc"),u=(document.querySelector("amount"),document.querySelector("delay"),document.querySelector("step"),document.querySelector(".form")),a=(u.querySelector("button"),0),c=0,l=0;function d(e,t){var n=Math.random()>.3;return console.log(t),new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}u.addEventListener("input",(function(e){"delay"===e.target.getAttribute("name")&&(a=Number(e.target.value)),"step"===e.target.getAttribute("name")&&(c=Number(e.target.value)),"amount"===e.target.getAttribute("name")&&(l=Number(e.target.value))})),u.addEventListener("click",(function(t){t.preventDefault(),"submit"===t.target.getAttribute("type")&&(!function(){for(var t=0;t<l;t++)console.log("prom"),d(t,a+t*c).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"))}))}(),console.log("+"))}))}();
//# sourceMappingURL=03-promises.7b4db964.js.map
