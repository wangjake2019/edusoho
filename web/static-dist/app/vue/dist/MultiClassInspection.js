(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{1314:function(t,e,i){},1315:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(32),s=i.n(n),a=(i(26),i(74)),c=i.n(a),r=i(60),o=c.a.create({timeout:15e3}),l=document.getElementsByTagName("meta")["csrf-token"];l&&localStorage.setItem("csrf-token",l.content),o.interceptors.request.use((function(t){return t.headers["X-Requested-With"]="XMLHttpRequest",t.headers["X-CSRF-Token"]=localStorage.getItem("csrf-token"),t.headers.Accept="application/vnd.edusoho.v2+json",t}),(function(t){return s.a.reject(t)})),o.interceptors.response.use((function(t){return t.data}),(function(t){try{r.a.prototype.$message.error(t.response.data.error.message)}catch(t){}return s.a.reject(t)}))},1318:function(t,e,i){"use strict";var n={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0},headerTitle:{type:String,default:""},headerTip:{type:String,default:""}}},s=(i(1319),i(30)),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aside-layout"},[i("div",{staticClass:"aside-layout-header"},[i("a-breadcrumb",{staticClass:"pull-left aside-layout-header__breadcrumb",attrs:{separator:"/"}},t._l(t.breadcrumbs,(function(e,n){return i("a-breadcrumb-item",{key:n},[e.href?[i("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.name))])]:e.pathName?[i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return t.$router.push({name:e.pathName})}}},[t._v(t._s(e.name))])]:[t._v("\n          "+t._s(e.name)+"\n        ")]],2)})),1),t._v(" "),t.headerTip?i("a-popover",{attrs:{placement:"bottomLeft"}},[i("template",{slot:"content"},[i("div",{staticClass:"aside-header-tip",domProps:{innerHTML:t._s(t.headerTip)}})]),t._v(" "),i("span",{staticClass:"aside-header-title-icon"},[i("a-icon",{attrs:{theme:"filled",type:"question-circle"}}),i("span",{staticClass:"icon-circle"},[t._v(t._s(t.headerTitle))])],1)],2):t._e()],1),t._v(" "),i("div",{staticClass:"aside-layout-main"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=a.exports},1319:function(t,e,i){"use strict";var n=i(1314);i.n(n).a},1322:function(t,e,i){},1332:function(t,e,i){"use strict";var n={name:"Empty",props:{description:{type:String,default:"暂无数据"},image:{type:String,default:"/static-dist/app/img/vue/empty.png"},imageStyle:{type:Object,default:function(){return{height:"200px"}}}}},s=(i(1333),i(30)),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-empty",{staticClass:"custom-empty",attrs:{image:t.image,"image-style":t.imageStyle}},[i("span",{staticClass:"custom-empty__description",attrs:{slot:"description"},slot:"description"},[t._v(t._s(t.description))])])}),[],!1,null,null,null);e.a=a.exports},1333:function(t,e,i){"use strict";var n=i(1322);i.n(n).a},1356:function(t,e,i){"use strict";var n=i(1315);e.a={search:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(t.query,t.params),i=void 0===e?{}:e;t.data;return n.a.get("/api/multi_class_inspection",{params:i})},getLiveInfoById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.query,i=void 0===e?{}:e,s=t.params,a=void 0===s?{}:s;t.data;return n.a.get("/api/multi_class_inspection_live_info/".concat(i.id),{params:a})}}},1383:function(t,e,i){},1488:function(t,e,i){"use strict";var n=i(1383);i.n(n).a},623:function(t,e,i){"use strict";i.r(e);var n=i(338),s=i.n(n),a=i(32),c=i.n(a),r=i(441),o=i.n(r),l=i(1318),u=i(1332),p=i(382),v=i.n(p),d={name:"InspectionCard",components:{},props:{inspection:{type:Object,require:!0},liveInfo:{type:Object,require:!0}},data:function(){return{}},computed:{},created:function(){},methods:{assistantAttend:function(t){return v.a.find(this.liveInfo.onlineAssistants,["userId",Number(t)])}}},f=(i(1488),i(30)),m=Object(f.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inspection-card"},[i("div",{staticClass:"inspection-card__info"},[i("div",{staticClass:"inspection-card__title info text-overflow"},[t._v("班课名称："+t._s(t.inspection.multiClass.title))]),t._v(" "),i("div",{staticClass:"inspection-card__item info text-overflow"},[t._v("课时名称："+t._s(t.inspection.title))]),t._v(" "),i("div",{staticClass:"inspection-card__item info"},[t._v("开课时间："+t._s(t.$dateFormat(t.inspection.startTime,"YYYY-MM-DD HH:mm")))]),t._v(" "),i("div",{staticClass:"inspection-card__item info"},[t._v("课程时长："+t._s(t.inspection.length)+"分钟")]),t._v(" "),i("div",{staticClass:"inspection-card__item info"},[t._v("实时学员人数："+t._s(t.liveInfo.info.viewerOnlineNum?t.liveInfo.info.viewerOnlineNum:0)+"/"+t._s(t.inspection.studentNum))]),t._v(" "),i("div",{staticClass:"inspection-card__item info"},[t._v("授课教师：\n      "),i("span",{staticClass:"teacher"},[t._v("\n        "+t._s(t.inspection.teacherInfo.nickname)+"\n        "),"unstart"===t.liveInfo.info.status||"notOnTime"===t.liveInfo.info.status?i("svg-icon",{staticClass:"icon-a-closecircle",attrs:{icon:"icon-a-closecircle"}}):i("svg-icon",{staticClass:"icon-check-circle",attrs:{icon:"icon-check-circle"}})],1)]),t._v(" "),i("div",{staticClass:"inspection-card__item info"},[t._v("助教出席：\n      "),t._l(t.inspection.assistantInfo,(function(e){return i("span",{key:e.id,staticClass:"teacher"},[t._v("\n        "+t._s(e.nickname)+"\n        "),t.assistantAttend(e.id)?i("svg-icon",{staticClass:"icon-check-circle",attrs:{icon:"icon-check-circle"}}):i("svg-icon",{staticClass:"icon-a-closecircle",attrs:{icon:"icon-a-closecircle"}})],1)}))],2)]),t._v(" "),i("div",{staticClass:"inspection-card__button"},["notOnTime"===t.liveInfo.info.status?i("div",{staticClass:"inspection-card__button not-live-start"},[t._v("\n      直播未按时开始\n    ")]):t._e(),t._v(" "),"living"===t.liveInfo.info.status?i("div",{staticClass:"inspection-card__button"},[i("a",{staticClass:"live-start url-block",attrs:{href:t.liveInfo.info.viewUrl}},[i("svg-icon",{staticClass:"icon-live",attrs:{icon:"icon-live"}}),t._v("\n        进入直播\n      ")],1)]):t._e(),t._v(" "),"finished"===t.liveInfo.info.status&&"ungenerated"!==t.inspection.activityInfo.ext.replayStatus?i("div",{staticClass:"inspection-card__button live-start"},[i("a",{staticClass:"live-start url-block",attrs:{href:t.liveInfo.info.viewUrl}},[i("svg-icon",{staticClass:"icon-live",attrs:{icon:"icon-live-playback"}}),t._v("\n        查看回放\n      ")],1)]):t._e(),t._v(" "),"finished"===t.liveInfo.info.status&&"ungenerated"===t.inspection.activityInfo.ext.replayStatus?i("div",{staticClass:"inspection-card__button live-start"},[i("a",{staticClass:"live-start url-block",attrs:{href:t.liveInfo.info.viewUrl}},[i("svg-icon",{staticClass:"icon-live",attrs:{icon:"icon-live-playback"}}),t._v("\n        直播已结束，回放生成中\n      ")],1)]):t._e(),t._v(" "),"unstart"===t.liveInfo.info.status?i("div",{staticClass:"inspection-card__button no-start-live"},[i("svg-icon",{staticClass:"icon-live",staticStyle:{width:"24px",height:"24px",top:"4px"},attrs:{icon:"icon-no-start-live"}}),t._v("\n      直播未开始\n    ")],1):t._e()])])}),[],!1,null,"657564c0",null).exports,h=i(1356),g={name:"index",components:{AsideLayout:l.a,Empty:u.a,InspectionCard:m},data:function(){return{inspectionList:[],getListLoading:!1,headerTip:"班课巡检仅展示今天所有直播课",liveInfo:[]}},computed:{},created:function(){this.getMultiClassInspectionList()},methods:{getMultiClassInspectionList:function(){var t=this;return o()(s.a.mark((function e(){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.getListLoading=!0,e.prev=1,e.next=4,h.a.search();case 4:return t.inspectionList=e.sent,i=_.map(t.inspectionList,(function(t){return h.a.getLiveInfoById({query:{id:t.activityId}})})),e.next=8,c.a.all(i);case 8:t.liveInfo=e.sent;case 9:return e.prev=9,t.getListLoading=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[1,,9,12]])})))()}}},y=Object(f.a)(g,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside-layout",{attrs:{breadcrumbs:[{name:"班课巡检"}],headerTip:t.headerTip}},[i("a-spin",{staticClass:"multi-class-inspection",attrs:{spinning:t.getListLoading}},[i("a-row",{attrs:{gutter:[24,24]}},t._l(t.inspectionList,(function(e,n){return i("a-col",{key:e.id,attrs:{sm:24,lg:12,xl:8,xxl:6}},[i("inspection-card",{attrs:{inspection:e,liveInfo:t.liveInfo[n]}})],1)})),1),t._v(" "),t.getListLoading||t.inspectionList.length?t._e():i("empty")],1)],1)}),[],!1,null,"fa0b350a",null);e.default=y.exports}}]);