(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{1387:function(e,a,t){},1388:function(e,a,t){"use strict";var s={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0}}},n=(t(1389),t(30)),r=Object(n.a)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"aside-layout"},[t("div",{staticClass:"aside-layout-header"},[t("a-breadcrumb",{staticClass:"pull-left",attrs:{separator:"/"}},e._l(e.breadcrumbs,(function(a,s){return t("a-breadcrumb-item",{key:s},[a.href?[t("a",{attrs:{href:a.href,target:"_blank"}},[e._v(e._s(a.name))])]:a.pathName?[t("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.$router.push({name:a.pathName})}}},[e._v(e._s(a.name))])]:[e._v("\n          "+e._s(a.name)+"\n        ")]],2)})),1)],1),e._v(" "),t("div",{staticClass:"aside-layout-main"},[e._t("default")],2)])}),[],!1,null,null,null);a.a=r.exports},1389:function(e,a,t){"use strict";var s=t(1387);t.n(s).a},1403:function(e,a,t){},1422:function(e,a,t){"use strict";var s=t(1403);t.n(s).a},936:function(e,a,t){"use strict";t.r(a);var s=t(29),n=t.n(s),r=t(43),i=t.n(r),u=t(553),m={name:"MultiClassCourseManage",components:{AsideLayout:t(1388).a},data:function(){return{current:["class-info"],id:this.$route.params.id,multiClass:{}}},befeoreRouteUpdate:function(e,a,t){this.id=e.params.id,t()},created:function(){this.current=[this.$route.meta.current],this.getMultiClass()},methods:{getMultiClass:function(){var e=this;return i()(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.i.get(e.id);case 2:e.multiClass=a.sent;case 3:case"end":return a.stop()}}),a)})))()}}},l=(t(1422),t(30)),o=Object(l.a)(m,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("aside-layout",{staticClass:"course-manage",attrs:{breadcrumbs:[{name:"班课",pathName:"MultiClass"},{name:e.multiClass.title}]}},[t("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"16px"}},[t("a-menu",{staticClass:"manage-menu pull-left",attrs:{mode:"horizontal"},model:{value:e.current,callback:function(a){e.current=a},expression:"current"}},[t("a-menu-item",{key:"class-info",staticClass:"manage-menu-item"},[t("router-link",{attrs:{to:{name:"MultiClassCourseManage"}}},[e._v("课时管理")])],1),e._v(" "),t("a-menu-item",{key:"student-manage",staticClass:"manage-menu-item"},[t("router-link",{attrs:{to:{name:"MultiClassStudentManage"}}},[e._v("学员管理")])],1),e._v(" "),t("a-menu-item",{key:"homework-review",staticClass:"manage-menu-item"},[e.isPermission("course_homework_review")||e.isPermission("course_exam_review")?t("router-link",{attrs:{to:{name:"MultiClassHomewordReview"}}},[e._v("作业批阅")]):e._e()],1),e._v(" "),t("a-menu-item",{key:"data-preview",staticClass:"manage-menu-item manage-menu-item--space"},[e.isPermission("course_statistics_view")?t("router-link",{attrs:{to:{name:"MultiClassDataPreview"}}},[e._v("数据预览")]):e._e()],1)],1),e._v(" "),e.multiClass.course?t("a-menu",{staticClass:"manage-menu manage-menu-blank pull-right",attrs:{selectable:!1,mode:"horizontal"}},[t("a-menu-item",{staticClass:"manage-menu-item"},[e.isPermission("course_announcement_manage")?t("a",{attrs:{href:"/announcement/course/"+e.multiClass.course.id+"/list",target:"_blank"}},[e._v("公告管理")]):e._e()]),e._v(" "),t("a-menu-item",{staticClass:"manage-menu-item"},[e.isPermission("course_replay_manage")?t("a",{attrs:{href:"/course_set/"+e.multiClass.course.courseSetId+"/manage/course/"+e.multiClass.course.id+"/replay",target:"_blank"}},[e._v("录播管理")]):e._e()]),e._v(" "),t("a-menu-item",{staticClass:"manage-menu-item manage-menu-item--space"},[e.isPermission("course_order_manage")?t("a",{attrs:{href:"/course_set/"+e.multiClass.course.courseSetId+"/manage/course/"+e.multiClass.course.id+"/orders",target:"_blank"}},[e._v("订单管理")]):e._e()])],1):e._e()],1),e._v(" "),t("router-view")],1)}),[],!1,null,null,null);a.default=o.exports}}]);