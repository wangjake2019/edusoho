(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{107:function(t,e,a){t.exports=a(358)},1387:function(t,e,a){},1389:function(t,e,a){"use strict";var r={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0}}},n=(a(1390),a(30)),i=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aside-layout"},[a("div",{staticClass:"aside-layout-header"},[a("a-breadcrumb",{staticClass:"pull-left",attrs:{separator:"/"}},t._l(t.breadcrumbs,(function(e,r){return a("a-breadcrumb-item",{key:r},[e.href?[a("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.name))])]:e.pathName?[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.$router.push({name:e.pathName})}}},[t._v(t._s(e.name))])]:[t._v("\n          "+t._s(e.name)+"\n        ")]],2)})),1)],1),t._v(" "),a("div",{staticClass:"aside-layout-main"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=i.exports},1390:function(t,e,a){"use strict";var r=a(1387);a.n(r).a},1393:function(t,e,a){},1398:function(t,e,a){},1399:function(t,e,a){"use strict";var r=a(1393);a.n(r).a},1400:function(t,e,a){},1411:function(t,e,a){"use strict";var r={name:"Empty",props:{description:{type:String,default:"暂无数据"},image:{type:String,default:"/static-dist/app/img/vue/empty.png"},imageStyle:{type:Object,default:function(){return{height:"200px"}}}}},n=(a(1399),a(30)),i=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-empty",{staticClass:"custom-empty",attrs:{image:t.image,"image-style":t.imageStyle}},[a("span",{staticClass:"custom-empty__description",attrs:{slot:"description"},slot:"description"},[t._v(t._s(t.description))])])}),[],!1,null,null,null);e.a=i.exports},1415:function(t,e,a){"use strict";var r=a(1398);a.n(r).a},1416:function(t,e,a){"use strict";var r=a(1400);a.n(r).a},224:function(t,e,a){a(225);var r=a(51).Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},225:function(t,e,a){var r=a(137),n=a(185).f;a(357)("getOwnPropertyDescriptor",(function(){return function(t,e){return n(r(t),e)}}))},357:function(t,e,a){var r=a(76),n=a(51),i=a(326);t.exports=function(t,e){var a=(n.Object||{})[t]||Object[t],s={};s[t]=e(a),r(r.S+r.F*i((function(){a(1)})),"Object",s)}},358:function(t,e,a){a(359);var r=a(51).Object;t.exports=function(t,e){return r.defineProperties(t,e)}},359:function(t,e,a){var r=a(76);r(r.S+r.F*!a(143),"Object",{defineProperties:a(408)})},360:function(t,e,a){a(361),t.exports=a(51).Object.getOwnPropertyDescriptors},361:function(t,e,a){var r=a(76),n=a(362),i=a(137),s=a(185),o=a(410);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,a,r=i(t),c=s.f,u=n(r),l={},d=0;u.length>d;)void 0!==(a=c(r,e=u[d++]))&&o(l,e,a);return l}})},362:function(t,e,a){var r=a(380),n=a(364),i=a(135),s=a(100).Reflect;t.exports=s&&s.ownKeys||function(t){var e=r.f(i(t)),a=n.f;return a?e.concat(a(t)):e}},363:function(t,e,a){a(409),t.exports=a(51).Object.getOwnPropertySymbols},39:function(t,e,a){var r=a(130);t.exports=function(t,e,a){return e in t?r(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},47:function(t,e,a){t.exports=a(667)},667:function(t,e,a){a(668),t.exports=a(51).Object.keys},668:function(t,e,a){var r=a(378),n=a(379);a(357)("keys",(function(){return function(t){return n(r(t))}}))},74:function(t,e,a){t.exports=a(224)},81:function(t,e,a){t.exports=a(360)},82:function(t,e,a){t.exports=a(363)},929:function(t,e,a){"use strict";a.r(e);var r=a(130),n=a.n(r),i=a(107),s=a.n(i),o=a(81),c=a.n(o),u=a(74),l=a.n(u),d=a(82),p=a.n(d),f=a(47),v=a.n(f),m=a(39),g=a.n(m),h=a(29),_=a.n(h),x=a(44),C=a.n(x),b=a(1389),k=a(68),y=a.n(k),P=a(553),w={name:"ProductCard",props:{product:{type:Object,required:!0}},data:function(){return{}},methods:{editMultiClassProduct:function(){this.$emit("edit",this.product)},deleteMultiClassProduct:function(){var t=this;if("default"!==this.product.type)if(this.product.multiClassNum)this.$message.warning("该产品含有班课，不能删除");else{var e=this.product.title;this.$confirm({content:"确认要删除-".concat(e),okType:"danger",okText:"确认",cancelText:"取消",icon:"close-circle",maskClosable:!0,onOk:function(){t.$emit("delete",t.product)}})}},lookoverMultiClass:function(){this.$emit("lookover",this.product)}}},L=(a(1415),a(30)),M=Object(L.a)(w,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-card"},[a("div",{staticStyle:{position:"relative","padding-right":"60px"}},[a("div",{staticClass:"product-card__title text-overflow"},[t._v(t._s(t.product.title))]),t._v(" "),a("div",{staticClass:"product-card__remark text-overflow"},[t._v(t._s(t.product.remark))]),t._v(" "),a("div",{staticClass:"product-card__operation"},[a("i",{staticClass:"es-icon es-icon-bianjimian mr6 color-primary",on:{click:t.editMultiClassProduct}}),t._v(" "),"default"!==t.product.type?a("i",{staticClass:"es-icon es-icon-shanchu1 color-danger",on:{click:t.deleteMultiClassProduct}}):t._e()])]),t._v(" "),a("a-row",{staticClass:"mt6"},[a("a-col",{attrs:{span:6}},[a("div",{staticClass:"gray-darker text-24"},[t._v(t._s(t.product.income))]),t._v(" "),a("div",{staticClass:"color-gray text-14 mt1"},[t._v("预估收入")])]),t._v(" "),a("a-col",{attrs:{span:6}},[a("div",{staticClass:"gray-darker text-24"},[t._v(t._s(t.product.studentNum))]),t._v(" "),a("div",{staticClass:"color-gray text-14 mt1"},[t._v("学习人数")])]),t._v(" "),a("a-col",{attrs:{span:6}},[a("div",{staticClass:"gray-darker text-24"},[t._v(t._s(t.product.taskNum))]),t._v(" "),a("div",{staticClass:"color-gray text-14 mt1"},[t._v("总课时")])]),t._v(" "),a("a-col",{attrs:{span:6}},[a("div",{staticClass:"gray-darker text-24"},[t._v(t._s(t.product.multiClassNum))]),t._v(" "),a("div",{staticClass:"color-gray text-14 mt1"},[t._v("班课")])])],1),t._v(" "),a("div",{staticClass:"product-card__lookover-multiclass",on:{click:t.lookoverMultiClass}},[t._v("\n    查看班课列表\n  ")])],1)}),[],!1,null,null,null).exports,j=[{title:"班课名称",dataIndex:"title",scopedSlots:{customRender:"class_title"}},{title:"课程名称",dataIndex:"course",scopedSlots:{customRender:"course"}},{title:"价格",dataIndex:"price"},{title:"已完成/课时",dataIndex:"taskNum",scopedSlots:{customRender:"taskNum"}},{title:"授课老师",dataIndex:"teacher"},{title:"助教老师",dataIndex:"assistant",scopedSlots:{customRender:"assistant"}},{title:"已报班人数",dataIndex:"studentNum",scopedSlots:{customRender:"studentNum"}},{title:"创建时间",dataIndex:"createdTime",scopedSlots:{customRender:"createdTime"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],O={props:{product:{type:Object,required:!0},visible:{type:Boolean,required:!0,default:!1}},data:function(){return{multiClassList:[],paging:[],ajaxLoading:!1,columns:j}},watch:{product:{immediate:!0,handler:"searchMultiClassList"}},created:function(){},methods:{handleCancel:function(){this.$emit("close",!1)},searchMultiClassList:function(){var t=this;return C()(_.a.mark((function e(){var a,r,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.product){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t.ajaxLoading=!0,e.next=6,P.h.search({productId:t.product.id});case 6:a=e.sent,r=a.data,n=a.paging,t.multiClassList=r,t.paging=n;case 11:return e.prev=11,t.ajaxLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,,11,14]])})))()},goToMultiClassManage:function(t){window.location.href="/admin/v2/multi_class/index#/course_manage/".concat(t)},goToEditMultiClass:function(t){window.location.href="/admin/v2/multi_class/index#/create?id=".concat(t)},goToMultiClassDataPreview:function(t){window.location.href="/admin/v2/multi_class/index#/course_manage/".concat(t,"/data_preview")}}},T=Object(L.a)(O,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.product.title+"-班课列表",width:1240,footer:null,visible:t.visible},on:{cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.ajaxLoading}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.multiClassList,pagination:t.paging},scopedSlots:t._u([{key:"class_title",fn:function(e,r){return a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.goToMultiClassManage(r.id)}}},[t._v("\n        "+t._s(e)+"\n      ")])}},{key:"course",fn:function(e,r){return a("a",{attrs:{href:"/course/"+r.courseId,target:"_blank"}},[t._v("\n        "+t._s(r.course?r.course.courseSetTitle:"")+"\n      ")])}},{key:"taskNum",fn:function(e,r){return a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.goToMultiClassManage(r.id)}}},[t._v("\n        "+t._s(r.endTaskNum)+"/"+t._s(r.taskNum)+"\n      ")])}},{key:"assistant",fn:function(e){return[t._v("\n        "+t._s(e?e.join("、"):"")+"\n      ")]}},{key:"createdTime",fn:function(e){return[t._v("\n        "+t._s(t.$dateFormat(e,"YYYY-MM-DD HH:mm"))+"\n      ")]}},{key:"studentNum",fn:function(e,r){return a("a",{attrs:{href:"/admin/v2/multi_class/index#/course_manage/"+r.id+"/student_manage"}},[t._v("\n        "+t._s(e)+"\n      ")])}},{key:"action",fn:function(e,r){return[a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.goToMultiClassManage(r.id)}}},[t._v("查看")]),t._v(" "),a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.goToEditMultiClass(r.id)}}},[t._v("编辑")]),t._v(" "),a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.goToMultiClassDataPreview(r.id)}}},[t._v("数据概览")])]}}])})],1)],1)}),[],!1,null,null,null).exports,S=a(1411);function N(t,e){var a=v()(t);if(p.a){var r=p()(t);e&&(r=r.filter((function(e){return l()(t,e).enumerable}))),a.push.apply(a,r)}return a}function $(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?N(Object(a),!0).forEach((function(e){g()(t,e,a[e])})):c.a?s()(t,c()(a)):N(Object(a)).forEach((function(e){n()(t,e,l()(a,e))}))}return t}var E={name:"MultiClassProduct",components:{ProductCard:M,MultiClassModal:T,AsideLayout:b.a,Empty:S.a},props:{},data:function(){return{modalVisible:!1,multiClassModalVisible:!1,form:this.$form.createForm(this),productList:[],paging:{offset:0,limit:9,total:0},title:"",getListLoading:!1,ajaxProductLoading:!1,editingProduct:null,currentProduct:{},modalTitle:""}},created:function(){this.getProductList()},methods:{getProductList:function(){var t=arguments,e=this;return C()(_.a.mark((function a(){var r,n,i,s;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:{},e.getListLoading=!0,a.prev=2,a.next=5,P.j.search({keywords:r.title||e.title,offset:r.offset||e.paging.offset||0,limit:r.limit||e.paging.limit||9});case 5:n=a.sent,i=n.data,(s=n.paging).page=s.offset/s.limit+1,e.productList=i,e.paging=s;case 11:return a.prev=11,e.getListLoading=!1,a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[2,,11,14]])})))()},searchProductList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.getProductList({title:t})},createMultiClassProduct:function(){this.modalVisible=!0,this.modalTitle="新建产品"},validatorTitle:y.a.debounce(function(){var t=C()(_.a.mark((function t(e,a,r){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.p.search({type:"multiClassProduct",title:a});case 2:n=t.sent,n.result||r("产品名称不能与已创建的相同"),r();case 6:case"end":return t.stop()}}),t)})));return function(e,a,r){return t.apply(this,arguments)}}(),300),validatorLen:function(t,e,a){this.calculateByteLength(e)>40&&a("产品名称不能超过40个字符，一个中文字算2个字符"),a()},calculateByteLength:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.length,a=0;a<t.length;a++)t.charCodeAt(a)>127&&e++;return e},ajaxMultiClassProduct:function(t){t.preventDefault(),this.editingProduct?this.editMultiClassProduct():this.addMultiClassProduct()},addMultiClassProduct:function(){var t=this;return C()(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.form.validateFields(function(){var e=C()(_.a.mark((function e(a,r){var n,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t.ajaxProductLoading=!0,e.next=6,P.j.add(r);case 6:n=e.sent,i=n.error,t.modalVisible=!1,t.form.resetFields(),i||t.getProductList({title:t.title});case 11:return e.prev=11,t.ajaxProductLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,,11,14]])})));return function(t,a){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))()},startEditMultiClassProduct:function(t){var e=this;this.editingProduct=t,this.modalVisible=!0,this.modalTitle="编辑产品",this.$nextTick((function(){e.form.setFieldsValue({title:t.title||"",remark:t.remark||""})}))},editMultiClassProduct:function(){var t=this;this.form.validateFields(function(){var e=C()(_.a.mark((function e(a,r){var n,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=2;break}return e.abrupt("return");case 2:return t.ajaxProductLoading=!0,e.prev=3,e.next=6,P.j.update($($({},r),{},{id:t.editingProduct.id}));case 6:n=e.sent,i=n.error,t.editingProduct=null,t.modalVisible=!1,t.form.resetFields(),i||t.getProductList({title:t.title});case 12:return e.prev=12,t.ajaxProductLoading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[3,,12,15]])})));return function(t,a){return e.apply(this,arguments)}}())},deleteMultiClassProduct:function(t){var e=this;return C()(_.a.mark((function a(){var r,n;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=t.id,t.title,a.next=3,P.j.delete({id:r});case 3:n=a.sent,n.success&&e.getProductList();case 6:case"end":return a.stop()}}),a)})))()},lookoverMultiClass:function(t){var e=this;return C()(_.a.mark((function a(){return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.currentProduct=t,e.multiClassModalVisible=!0;case 2:case"end":return a.stop()}}),a)})))()},closeModal:function(){this.form.resetFields(),this.modalVisible=!1,this.editingProduct=null},onChangePagination:function(t){this.paging.offset=(t-1)*this.paging.limit,this.getProductList()}}},V=(a(1416),Object(L.a)(E,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside-layout",{attrs:{breadcrumbs:[{name:"产品库"}]}},[a("a-spin",{staticClass:"multi-class-product",attrs:{spinning:t.getListLoading||t.ajaxProductLoading}},[a("div",{staticClass:"clearfix"},[a("a-input-search",{staticStyle:{width:"262px"},attrs:{placeholder:"请输入产品名称",allowClear:!0},on:{search:t.searchProductList},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),a("a-button",{staticClass:"pull-right",attrs:{type:"primary"},on:{click:t.createMultiClassProduct}},[t._v("\n        新建产品\n      ")])],1),t._v(" "),a("a-row",{attrs:{gutter:24}},t._l(t.productList,(function(e){return a("a-col",{key:e.id,attrs:{sm:24,lg:12,xl:8}},[a("product-card",{attrs:{product:e},on:{edit:t.startEditMultiClassProduct,delete:t.deleteMultiClassProduct,lookover:t.lookoverMultiClass}})],1)})),1),t._v(" "),a("div",{staticClass:"text-center"},[t.paging&&t.productList.length>0?a("a-pagination",{staticClass:"mt6",attrs:{total:t.paging.total,"show-less-items":""},on:{change:t.onChangePagination},model:{value:t.paging.page,callback:function(e){t.$set(t.paging,"page",e)},expression:"paging.page"}}):t._e()],1),t._v(" "),a("a-modal",{attrs:{title:t.modalTitle,okText:"确认",cancelText:"取消",width:920,visible:t.modalVisible},on:{cancel:t.closeModal}},[a("a-form",{attrs:{form:t.form,"label-col":{span:3},"wrapper-col":{span:21}}},[a("a-form-item",{attrs:{label:"产品名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"产品名称不能为空"},{validator:t.validatorTitle},{validator:t.validatorLen}]}],expression:"['title', { rules: [\n              { required: true, message: '产品名称不能为空' },\n              { validator: validatorTitle },\n              { validator: validatorLen },\n            ] }]"}],attrs:{placeholder:"请输入产品名称"}})],1),t._v(" "),a("a-form-item",{attrs:{label:"备注"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark",{rules:[{max:30,message:"备注不能超过30个字"}]}],expression:"['remark', { rules: [{ max: 30, message: '备注不能超过30个字' }] }]"}],attrs:{placeholder:"备注30个字以内"}})],1)],1),t._v(" "),a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:t.closeModal}},[t._v("\n          取消\n        ")]),t._v(" "),a("a-button",{key:"submit",attrs:{type:"primary",loading:t.ajaxProductLoading},on:{click:t.ajaxMultiClassProduct}},[t._v("\n          确认\n        ")])],1)],2),t._v(" "),a("MultiClassModal",{attrs:{product:t.currentProduct,visible:t.multiClassModalVisible},on:{close:function(e){return t.multiClassModalVisible=e}}}),t._v(" "),t.getListLoading||t.ajaxProductLoading||t.productList.length?t._e():a("empty")],1)],1)}),[],!1,null,null,null));e.default=V.exports}}]);