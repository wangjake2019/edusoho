!function(u){function t(t){for(var e,n,r=t[0],o=t[1],i=t[2],a=0,c=[];a<r.length;a++)n=r[a],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&c.push(s[n][0]),s[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(u[e]=o[e]);for(d&&d(t);c.length;)c.shift()();return f.push.apply(f,i||[]),l()}function l(){for(var t,e=0;e<f.length;e++){for(var n=f[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==s[i]&&(r=!1)}r&&(f.splice(e--,1),t=a(a.s=n[0]))}return t}var n={},s={64:0},f=[];function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return u[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=u,a.c=n,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var d=r;f.push([553,0]),l()}({15:function(t,e){t.exports=jQuery},553:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return l});var r=n(0),o=n.n(r),i=n(1),a=n.n(i),c=n(4),u=$("#modal"),l=function(){function t(){o()(this,t),this.init()}return a()(t,[{key:"init",value:function(){0<$(".js-loading-text").length&&$.post($(".js-loading-text").data("url"),function(t){var e='<img class="mll" src="data:image/png;base64,'+t+'" width="520px" />';$(".js-loading-text").remove(),$(".js-certificate-image").html(e)});var n=$("#cancel-certificate");n.on("click",function(t){if(!confirm(Translator.trans("admin_v2.certificate.record.cancel.hint")))return!1;var e=n.data("url");n.button("loading"),$.post(e,function(t){u.modal("hide"),Object(c.a)("success",Translator.trans("admin_v2.certificate.record.cancel.success_hint")),window.location.reload()}).error(function(){Object(c.a)("success",Translator.trans("admin_v2.certificate.record.cancel.failure_hint"))})})}}]),t}();new l}});