!function(e){function t(t){for(var n,l,i=t[0],s=t[1],c=t[2],u=0,p=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(d&&d(t);p.length;)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={115:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=s;o.push([1204,0]),a()}({1204:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a.n(n),o={data:function(){return{showCKEditorData:{publicPath:$("[name=ckeditor_path]").val(),filebrowserImageUploadUrl:$("[name=ckeditor_image_upload_url]").val(),filebrowserImageDownloadUrl:$("[name=ckeditor_image_download_url]").val(),language:"zh_CN"===document.documentElement.lang?"zh-cn":document.documentElement.lang,jqueryPath:$("[name=jquery_path]").val()},cdnHost:$("[name=cdn_host]").val(),fileId:0}},created:function(){this.assessment=JSON.parse($("[name=assessment]").val()),this.answerSceneReport=JSON.parse($("[name=answer_scene_report]").val()),this.answerScene=JSON.parse($("[name=answer_scene]").val())},methods:{previewAttachment:function(e){this.fileId=e},downloadAttachment:function(e){this.fileId=e},previewAttachmentCallback:function(){var e=this,t=this;return new r.a((function(a){$.ajax({url:$("[name=preview-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){console.log(app),console.log(e),e.data.sdkBaseUri=app.cloudSdkBaseUri,e.data.disableDataUpload=app.cloudDisableLogReport,e.data.disableSentry=app.cloudDisableLogReport,a(e),t.fileId=0}))}))},downloadAttachmentCallback:function(){var e=this,t=this;return new r.a((function(a){$.ajax({url:$("[name=download-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){a(e),t.fileId=0}))}))}}},l=a(30),i=Object(l.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ibs-vue",attrs:{id:"app"}},[a("scene-report",{attrs:{cdnHost:"cdnHost",assessment:e.assessment,answerScene:e.answerScene,answerSceneReport:e.answerSceneReport,previewAttachmentCallback:e.previewAttachmentCallback,downloadAttachmentCallback:e.downloadAttachmentCallback},on:{previewAttachment:e.previewAttachment,downloadAttachment:e.downloadAttachment}})],1)}),[],!1,null,null,null).exports;if(jQuery.support.cors=!0,Vue.config.productionTip=!1,"en"==app.lang){var s=local.default;itemBank.default.install(Vue,{locale:s})}new Vue({render:function(e){return e(i)}}).$mount("#app");var c=$(".js-testpaper-container").data("needJob"),d=$(".js-testpaper-container").data("jobSync");if(c)if(d){$(".js-data-large-loading").show();var u=setInterval((function(){$.get($(".js-data-large-loading-btn").data("checkUrl"),(function(e){e&&(clearInterval(u),$(".js-data-large-loading").hide(),$(".js-data-large-finish").show(),setTimeout((function(){$(".js-data-large-finish").hide(),window.location.reload()}),3e3))}))}),5e3)}else $(".js-data-large-info").show();$(".js-data-large-loading-btn").on("click",(function(){$.get($(".js-data-large-loading-btn").data("url"),(function(e){$(".js-data-large-info").hide(),$(".js-data-large-loading").show();var t=setInterval((function(){$.get($(".js-data-large-loading-btn").data("checkUrl"),(function(e){e&&(clearInterval(t),$(".js-data-large-loading").hide(),$(".js-data-large-finish").show(),setTimeout((function(){$(".js-data-large-finish").hide(),window.location.reload()}),3e3))}))}),5e3)}))}))}});