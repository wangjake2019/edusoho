!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/static-dist/",n(n.s=1047)}({1047:function(e,t){var n=$(".js-thread-setting-save-btn");$("#user_content_control_thread").validate({rules:{},ajax:!0,submitSuccess:function(e){cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),n.button("reset")}});n.on("click",(function(e){$(e.currentTarget).button("loading"),$("#user_content_control_thread").submit()})),$('input[name="enable_thread"]').change((function(e){var t=$(e.currentTarget),n=$(".js-sub-management");"0"===t.val()?n.addClass("hidden"):"1"===t.val()&&n.removeClass("hidden")}))}});