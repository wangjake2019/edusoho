!function(s){function e(e){for(var t,a,n=e[0],r=e[1],o=e[2],l=0,i=[];l<n.length;l++)a=n[l],Object.prototype.hasOwnProperty.call(d,a)&&d[a]&&i.push(d[a][0]),d[a]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(s[t]=r[t]);for(p&&p(e);i.length;)i.shift()();return u.push.apply(u,o||[]),c()}function c(){for(var e,t=0;t<u.length;t++){for(var a=u[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==d[o]&&(n=!1)}n&&(u.splice(t--,1),e=l(l.s=a[0]))}return e}var a={},d={90:0},u=[];function l(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=s,l.c=a,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var p=n;u.push([810,0]),c()}({810:function(e,t,a){"use strict";a.r(t);var n,r=a(21),o=a.n(r),l={data:function(){return{showCKEditorData:{publicPath:$("[name=ckeditor_path]").val(),filebrowserImageUploadUrl:$("[name=ckeditor_image_upload_url]").val(),filebrowserImageDownloadUrl:$("[name=ckeditor_image_download_url]").val(),language:"zh_CN"===document.documentElement.lang?"zh-cn":document.documentElement.lang,jqueryPath:$("[name=jquery_path]").val()},cdnHost:$("[name=cdn_host]").val(),fileId:0}},created:function(){this.assessment=JSON.parse($("[name=assessment]").val()),this.answerSceneReport=JSON.parse($("[name=answer_scene_report]").val()),this.answerScene=JSON.parse($("[name=answer_scene]").val())},methods:{previewAttachment:function(e){this.fileId=e},downloadAttachment:function(e){this.fileId=e},previewAttachmentCallback:function(){var e=this,a=this;return new o.a(function(t){$.ajax({url:$("[name=preview-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){console.log(app),console.log(e),e.data.sdkBaseUri=app.cloudSdkBaseUri,e.data.disableDataUpload=app.cloudDisableLogReport,e.data.disableSentry=app.cloudDisableLogReport,t(e),a.fileId=0})})},downloadAttachmentCallback:function(){var e=this,a=this;return new o.a(function(t){$.ajax({url:$("[name=download-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){t(e),a.fileId=0})})}}},i=a(20),s=Object(i.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ibs-vue",attrs:{id:"app"}},[a("scene-report",{attrs:{cdnHost:"cdnHost",assessment:e.assessment,answerScene:e.answerScene,answerSceneReport:e.answerSceneReport,previewAttachmentCallback:e.previewAttachmentCallback,downloadAttachmentCallback:e.downloadAttachmentCallback},on:{previewAttachment:e.previewAttachment,downloadAttachment:e.downloadAttachment}})],1)},[],!1,null,null,null).exports;jQuery.support.cors=!0,Vue.config.productionTip=!1,"en"==app.lang&&(n=local.default,itemBank.default.install(Vue,{locale:n})),new Vue({render:function(e){return e(s)}}).$mount("#app");var c,d=$(".js-testpaper-container").data("needJob"),u=$(".js-testpaper-container").data("jobSync");d&&(u?($(".js-data-large-loading").show(),c=setInterval(function(){$.get($(".js-data-large-loading-btn").data("checkUrl"),function(e){e&&(clearInterval(c),$(".js-data-large-loading").hide(),$(".js-data-large-finish").show(),setTimeout(function(){$(".js-data-large-finish").hide(),window.location.reload()},3e3))})},5e3)):$(".js-data-large-info").show()),$(".js-data-large-loading-btn").on("click",function(){$.get($(".js-data-large-loading-btn").data("url"),function(e){$(".js-data-large-info").hide(),$(".js-data-large-loading").show();var t=setInterval(function(){$.get($(".js-data-large-loading-btn").data("checkUrl"),function(e){e&&(clearInterval(t),$(".js-data-large-loading").hide(),$(".js-data-large-finish").show(),setTimeout(function(){$(".js-data-large-finish").hide(),window.location.reload()},3e3))})},5e3)})})}});