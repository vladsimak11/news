!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire0124;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire0124=a);var o=a("bpxeT"),c=a("2TvXO"),u=a("dIxxU");function i(e,t,n){return s.apply(this,arguments)}function s(){return(s=e(o)(e(c).mark((function t(n,r,a){var o,i,s,l,p,d,f,h,w,m,g,v,y;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(r,"&appid=").concat(a,"&units=metric"),e.prev=1,e.next=4,u.default.get(o);case 4:i=e.sent,s=i.data,l=new Date,p={day:"numeric",month:"long",year:"numeric"},d=l.toLocaleDateString("en-GB",p),f=l.toLocaleString("en-US",{weekday:"long"}),h=document.querySelector(".degrees"),w=document.querySelector(".whats-the-weather"),m=document.querySelector(".week-day"),g=document.querySelector(".weather-date"),v=document.querySelector(".weather-icon"),h.innerHTML="".concat(Math.round(s.main.temp),"°"),w.innerHTML=s.weather[0].description.charAt(0).toUpperCase()+s.weather[0].description.slice(1),m.innerHTML=f,g.innerHTML=d,y="http://openweathermap.org/img/w/".concat(s.weather[0].icon,".png"),v.setAttribute("src",y),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(1),console.log(e.t0);case 26:case"end":return e.stop()}}),t,null,[[1,23]])})))).apply(this,arguments)}function l(e,t){return p.apply(this,arguments)}function p(){return(p=e(o)(e(c).mark((function t(n,r){var a,o,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://nominatim.openstreetmap.org/reverse?lat=".concat(n,"&lon=").concat(r,"&format=jsonv2"),e.prev=1,e.next=4,u.default.get(a);case 4:return o=e.sent,i=o.data,e.abrupt("return",i.address.city);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function d(e,t,n){return f.apply(this,arguments)}function f(){return(f=e(o)(e(c).mark((function t(n,r,a){var o,i,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="https://api.openweathermap.org/data/2.5/forecast?lat=".concat(n,"&lon=").concat(r,"&appid=").concat(a,"&units=metric"),e.prev=1,e.next=4,u.default.get(o);case 4:i=e.sent,s=i.data,s.list.forEach((function(e){new Date(1e3*e.dt)})),document.querySelector(".show-on-map").addEventListener("click",(function(){return m(s.city.name)})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}var h,w=(h=e(o)(e(c).mark((function t(){var n,r,a,o,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,t){navigator.geolocation.getCurrentPosition((function(t){return e(t)}),(function(t){e(null)}))})).then((function(e){return e||{coords:{latitude:50.4501,longitude:30.5234}}}));case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return");case 6:return r=n.coords.latitude,a=n.coords.longitude,o="ba95449c69063d2989b1d45f265b0f98",e.next=11,l(r,a);case 11:return u=e.sent,document.querySelector(".location").innerHTML=u,e.next=16,i(r,a,o);case 16:return e.next=18,d(r,a,o);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),t,null,[[0,20]])}))),function(){return h.apply(this,arguments)});function m(e){void 0===e&&(e="Kyiv");var t="https://www.google.com/maps/place/".concat(e);window.open(t,"_blank")}w()}();
//# sourceMappingURL=index.0657f53e.js.map