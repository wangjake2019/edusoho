!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/static-dist/",n(n.s=1138)}({1138:function(e,t,n){"use strict";n.r(t);var o=n(431);$(".js-toggle-show").on("click",(function(e){var t=$(e.target).closest(".js-sortable-item");t.nextUntil(".js-sortable-item").animate({height:"toggle",opacity:"toggle"},"normal"),Object(o.b)(t,"cd-icon-add","cd-icon-remove")})),$(document).ready((function(){var e=$(".js-category-search.active");e.length>0&&(e.parents(".js-sortable-list").show(),e.parents(".js-sortable-list.question-category-panel__list").find(".js-toggle-show").removeClass("cd-icon-add").addClass("cd-icon-remove"),e.parents(".js-sortable-list.question-category-panel__list").prev().find(".js-toggle-show").removeClass("cd-icon-add").addClass("cd-icon-remove"))}))},431:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var o=function(e,t,n){var o=e.find(".js-remove-icon"),r=e.find(".js-remove-text");o.hasClass(t)?(o.removeClass(t).addClass(n),r&&r.text(Translator.trans("收起"))):(o.removeClass(n).addClass(t),r&&r.text(Translator.trans("展开")))},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-task-chapter",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"es-icon-remove",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"es-icon-anonymous-iconfont";$(e).on("click",t,(function(e){var a=$(e.currentTarget);a.nextUntil(t).animate({height:"toggle",opacity:"toggle"},"normal"),o(a,n,r)}))}}});