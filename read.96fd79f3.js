var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},n=e.parcelRequire0124;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in l){var n=l[e];delete l[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){l[e]=t},e.parcelRequire0124=n);var o=n("9hK8P");let i=document.querySelector(".revision-date-arrow"),r=document.querySelector(".gallery-text");const s=document.querySelector(".revision-date-title");i.addEventListener("click",(()=>{i.classList.contains("up")?(i.classList.add("down"),i.classList.remove("up")):(i.classList.add("up"),i.classList.remove("down")),r.style.maxHeight?r.style.maxHeight=null:(r.style.maxHeight=null,r.style.maxHeight=r.scrollHeight+"px")})),function(){const e=new Date;s.firstChild.textContent=(0,o.default)(e,"dd/mm/yyyy")}();
//# sourceMappingURL=read.96fd79f3.js.map