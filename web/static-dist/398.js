(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{107:function(t,e,n){t.exports=n(358)},1388:function(t,e,n){t.exports=function(t,e){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var s=n(t),r=n(e);function i(...t){class e{constructor(){for(let e of t)a(this,new e)}}for(let n of t)a(e,n),a(e.prototype,n.prototype);return e}function a(t,e){for(let n of Reflect.ownKeys(e))if("constructor"!==n&&"prototype"!==n&&"name"!==n){let s=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,s)}}class o extends(i(s.default,r.default)){}return o}(n(68),n(1391))},1391:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",s="hour",r="day",i="week",a="month",o="quarter",u="year",c="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},p={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+h(s,2,"0")+":"+h(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(s,a),i=n-r<0,o=e.clone().add(s+(i?-1:1),a);return+(-(s+(n-r)/(i?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:a,y:u,w:i,d:r,D:c,h:s,m:n,s:e,ms:t,Q:o}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",v={};v[m]=f;var y=function(t){return t instanceof S},g=function(t,e,n){var s;if(!t)return m;if("string"==typeof t)v[t]&&(s=t),e&&(v[t]=e,s=t);else{var r=t.name;v[r]=t,s=r}return!n&&s&&(m=s),s||!n&&m},_=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},$=p;$.l=g,$.i=y,$.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function f(t){this.$L=g(t.locale,null,!0),this.parse(t)}var h=f.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(l);if(s){var r=s[2]-1||0,i=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return $},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=_(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return _(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<_(t)},h.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,o){var l=this,d=!!$.u(o)||o,f=$.p(t),h=function(t,e){var n=$.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return d?n:n.endOf(r)},p=function(t,e){return $.w(l.toDate()[t].apply(l.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},m=this.$W,v=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case u:return d?h(1,0):h(31,11);case a:return d?h(1,v):h(0,v+1);case i:var _=this.$locale().weekStart||0,S=(m<_?m+7:m)-_;return h(d?y-S:y+(6-S),v);case r:case c:return p(g+"Hours",0);case s:return p(g+"Minutes",1);case n:return p(g+"Seconds",2);case e:return p(g+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(i,o){var l,d=$.p(i),f="set"+(this.$u?"UTC":""),h=(l={},l[r]=f+"Date",l[c]=f+"Date",l[a]=f+"Month",l[u]=f+"FullYear",l[s]=f+"Hours",l[n]=f+"Minutes",l[e]=f+"Seconds",l[t]=f+"Milliseconds",l)[d],p=d===r?this.$D+(o-this.$W):o;if(d===a||d===u){var m=this.clone().set(c,1);m.$d[h](p),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[$.p(t)]()},h.add=function(t,o){var c,l=this;t=Number(t);var d=$.p(o),f=function(e){var n=_(l);return $.w(n.date(n.date()+Math.round(e*t)),l)};if(d===a)return this.set(a,this.$M+t);if(d===u)return this.set(u,this.$y+t);if(d===r)return f(1);if(d===i)return f(7);var h=(c={},c[n]=6e4,c[s]=36e5,c[e]=1e3,c)[d]||1,p=this.$d.getTime()+t*h;return $.w(p,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=$.z(this),r=this.$locale(),i=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,l=function(t,s,r,i){return t&&(t[s]||t(e,n))||r[s].substr(0,i)},f=function(t){return $.s(i%12||12,t,"0")},h=r.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:l(r.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,u,2),ddd:l(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:$.s(i,2,"0"),h:f(1),hh:f(2),a:h(i,a,!0),A:h(i,a,!1),m:String(a),mm:$.s(a,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:s};return n.replace(d,(function(t,e){return e||p[t]||s.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,l){var d,f=$.p(c),h=_(t),p=6e4*(h.utcOffset()-this.utcOffset()),m=this-h,v=$.m(this,h);return v=(d={},d[u]=v/12,d[a]=v,d[o]=v/3,d[i]=(m-p)/6048e5,d[r]=(m-p)/864e5,d[s]=m/36e5,d[n]=m/6e4,d[e]=m/1e3,d)[f]||m,l?v:$.a(v)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return v[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=g(t,e,!0);return s&&(n.$L=s),n},h.clone=function(){return $.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),k=S.prototype;return _.prototype=k,[["$ms",t],["$s",e],["$m",n],["$H",s],["$W",r],["$M",a],["$y",u],["$D",c]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,S,_),t.$i=!0),_},_.locale=g,_.isDayjs=y,_.unix=function(t){return _(1e3*t)},_.en=v[m],_.Ls=v,_.p={},_}()},1392:function(t,e,n){},1394:function(t,e,n){"use strict";var s=n(1392);n.n(s).a},1396:function(t,e,n){"use strict";var s=n(68),r=n.n(s),i={name:"Assistant",props:{assistant:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{ellipsis:!1}},computed:{assistants:function(){if(!r.a.size(this.assistant))return"- -";var t=[];return r.a.forEach(this.assistant,(function(e,n){e.nickname?t.push(e.nickname):t.push(e)})),r.a.join(t,"、")}},mounted:function(){var t=this.$refs.assistant;this.ellipsis=t.scrollWidth>t.clientWidth}},a=(n(1394),n(30)),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"assistant",class:[t.ellipsis?"assistant":"","text-overflow"]},[t._v("\n  "+t._s(t.assistants)+"\n\n  "),t.ellipsis?n("a-tooltip",{staticClass:"assistant-all",attrs:{placement:"bottom"}},[n("template",{slot:"title"},[n("span",[t._v(t._s(t.assistants))])]),t._v(" "),n("svg-icon",{staticStyle:{color:"#979797"},attrs:{icon:"icon-more"}})],2):t._e()],1)}),[],!1,null,"7274aa3a",null);e.a=o.exports},1406:function(t,e,n){},1412:function(t,e,n){"use strict";var s={name:"ClassName",props:{record:{type:Object,required:!0,default:function(){return{}}}},computed:{className:function(){var t=this.record,e=t.chapterTitle,n=t.unitTitle,s=t.number,r=t.title,i=t.tasks,a="";if("lesson"===i.mode)a="".concat(s,". ").concat(r);else{var o=i.number.split("-");a="".concat(s,".").concat(o[1]-1," [任务]").concat(i.title)}return n&&(a="".concat(n," ").concat(a)),e&&(a=n?"".concat(e," - ").concat(a):"".concat(e," ").concat(a)),a}}},r=n(30),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-overflow"},[n("span",{attrs:{title:t.className}},[t._v(t._s(t.className))]),t._v(" "),n("br"),t._v(" "),"published"!=t.record.tasks.status?n("a-tag",{staticStyle:{"margin-top":"4px"}},[t._v("未发布")]):t._e()],1)}),[],!1,null,null,null);e.a=i.exports},1425:function(t,e,n){"use strict";var s=n(1406);n.n(s).a},224:function(t,e,n){n(225);var s=n(51).Object;t.exports=function(t,e){return s.getOwnPropertyDescriptor(t,e)}},225:function(t,e,n){var s=n(137),r=n(185).f;n(357)("getOwnPropertyDescriptor",(function(){return function(t,e){return r(s(t),e)}}))},357:function(t,e,n){var s=n(76),r=n(51),i=n(326);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),s(s.S+s.F*i((function(){n(1)})),"Object",a)}},358:function(t,e,n){n(359);var s=n(51).Object;t.exports=function(t,e){return s.defineProperties(t,e)}},359:function(t,e,n){var s=n(76);s(s.S+s.F*!n(143),"Object",{defineProperties:n(408)})},360:function(t,e,n){n(361),t.exports=n(51).Object.getOwnPropertyDescriptors},361:function(t,e,n){var s=n(76),r=n(362),i=n(137),a=n(185),o=n(410);s(s.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,s=i(t),u=a.f,c=r(s),l={},d=0;c.length>d;)void 0!==(n=u(s,e=c[d++]))&&o(l,e,n);return l}})},362:function(t,e,n){var s=n(380),r=n(364),i=n(135),a=n(100).Reflect;t.exports=a&&a.ownKeys||function(t){var e=s.f(i(t)),n=r.f;return n?e.concat(n(t)):e}},363:function(t,e,n){n(409),t.exports=n(51).Object.getOwnPropertySymbols},39:function(t,e,n){var s=n(130);t.exports=function(t,e,n){return e in t?s(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},47:function(t,e,n){t.exports=n(667)},667:function(t,e,n){n(668),t.exports=n(51).Object.keys},668:function(t,e,n){var s=n(378),r=n(379);n(357)("keys",(function(){return function(t){return r(s(t))}}))},74:function(t,e,n){t.exports=n(224)},81:function(t,e,n){t.exports=n(360)},82:function(t,e,n){t.exports=n(363)},933:function(t,e,n){"use strict";n.r(e);var s=n(130),r=n.n(s),i=n(107),a=n.n(i),o=n(81),u=n.n(o),c=n(74),l=n.n(c),d=n(82),f=n.n(d),h=n(47),p=n.n(h),m=n(39),v=n.n(m),y=n(1388),g=n.n(y),_=n(553),S=n(1412),k={video:"视频",audio:"音频",live:"直播",discuss:"讨论",flash:"Flash",doc:"文档",ppt:"PPT",testpaper:"考试",homework:"作业",exercise:"练习",download:"下载资料",text:"图文"},b={name:"TeachMode",filters:{teachType:function(t){return k[t]}},props:{record:{type:Object,required:!0,default:function(){return{}}}},computed:{replayStatus:function(){var t=this.record.tasks,e=t.type,n=t.activity.ext;return"live"==e&&"videoGenerate"==n.replayStatus},progressStatus:function(){var t=this.record.tasks,e=t.type,n=t.activity.ext;return"live"==e?n.progressStatus:""}}},w=n(30),x=Object(w.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  "+t._s(t._f("teachType")(t.record.tasks.type))+"\n\n  "),t.progressStatus?[n("a-divider",{attrs:{type:"vertical"}}),t._v(" "),"created"==t.progressStatus?n("a-checkable-tag",{staticStyle:{color:"#fb8d4d"}},[t._v("未开始")]):"start"==t.progressStatus?n("a-checkable-tag",{staticStyle:{color:"#43bc60"}},[t._v("直播中")]):"closed"==t.progressStatus?n("a-checkable-tag",[t._v("已结束")]):t._e()]:t._e(),t._v(" "),t.replayStatus?[n("br"),t._v(" "),n("a-tag",{staticStyle:{"margin-top":"4px"},attrs:{color:"green"}},[t._v("有回放")])]:t._e()],2)}),[],!1,null,null,null).exports,M=n(1396);function O(t,e){var n=p()(t);if(f.a){var s=f()(t);e&&(s=s.filter((function(e){return l()(t,e).enumerable}))),n.push.apply(n,s)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){v()(t,e,n[e])})):u.a?a()(t,u()(n)):O(Object(n)).forEach((function(e){r()(t,e,l()(n,e))}))}return t}var T=[{title:"课时名称",dataIndex:"name",width:"15%",scopedSlots:{customRender:"name"}},{title:"教学模式",dataIndex:"mode",filters:[{text:"视频",value:"video"},{text:"音频",value:"audio"},{text:"直播",value:"live"},{text:"讨论",value:"discuss"},{text:"文档",value:"doc"},{text:"PPT",value:"ppt"},{text:"考试",value:"testpaper"},{text:"作业",value:"homework"},{text:"练习",value:"exercise"},{text:"下载资料",value:"download"},{text:"图文",value:"text"}],width:"12%",scopedSlots:{customRender:"mode"}},{title:"开课时间",dataIndex:"startTime",width:"13%",scopedSlots:{customRender:"startTime"}},{title:"时长",width:"10%",dataIndex:"time",scopedSlots:{customRender:"time"}},{title:"授课老师",width:"10%",ellipsis:!0,dataIndex:"teacher",scopedSlots:{customRender:"teacher"}},{title:"助教老师",width:"10%",ellipsis:!0,dataIndex:"assistant",scopedSlots:{customRender:"assistant"}},{title:"问题讨论",width:"10%",dataIndex:"questionNum",scopedSlots:{customRender:"questionNum"}},{title:"学习人数",width:"10%",dataIndex:"studyStudentNum",scopedSlots:{customRender:"studyStudentNum"}},{title:"操作",width:"10%",dataIndex:"actions",scopedSlots:{customRender:"actions"}}],I={components:{ClassName:S.a,TeachMode:x,Assistant:M.a},data:function(){return{data:[],pagination:{},loading:!1,columns:T,locale:{filterConfirm:"确定",filterReset:"重置"},multiClassId:this.$route.params.id,keywords:"",courseId:0,courseSetId:0}},mounted:function(){var t=this;this.fetchLessons(),this.fetchMultiClass(),$("#modal").on("hide.bs.modal",(function(){var e={limit:10,offset:10*(t.pagination.current-1)};t.fetchLessons(e)}))},filters:{timeTransfer:function(t){var e=g.a.floor(t/60),n=t%60,s="".concat(e,"min ");return n&&(s+="".concat(n,"s")),s}},methods:{handleTableChange:function(t,e,n){var s=n.order,r=D({},this.pagination);r.current=t.current,this.pagination=r;var i={limit:t.pageSize,offset:(t.current-1)*t.pageSize};g.a.size(e)&&(i.types=e.mode),s&&(i.sort="ascend"==s?"ASC":"DESC"),this.fetchLessons(i)},fetchMultiClass:function(){var t=this;_.i.get(this.multiClassId).then((function(e){var n=e.course,s=n.id,r=n.courseSetId;t.courseId=s,t.courseSetId=r}))},fetchLessons:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,_.i.getLessons(this.multiClassId,D({limit:10,titleLike:this.keywords},e)).then((function(e){var n=D({},t.pagination);n.total=e.paging.total,t.loading=!1,t.data=e.data,t.pagination=n}))},onSearch:function(t){this.keywords=t,this.pagination.current=1,this.fetchLessons()},handleMenuClick:function(t,e){"copy"!==t?["publish","unpublish"].includes(t)?this.updateTaskStatus(t,e):"delete"===t&&this.deleteTask(e):this.copy(e)},copy:function(t){this.$clipboard(this.copyTaskUrl(t)),this.$message.success("复制成功")},updateTaskStatus:function(t,e){var n=this,s=e.tasks,r=s.courseId,i=s.id,a="publish"==t?"发布成功":"取消发布成功";_.c.updateTaskStatus(r,i,{type:t}).then((function(){n.$message.success(a),g.a.forEach(n.data,(function(e){e.tasks.id==i&&(e.tasks.status="publish"===t?"published":"create")}))}))},deleteTask:function(t){var e=this,n=t.tasks,s=n.courseId,r=n.id;this.$confirm({title:"删除",content:"是否确定删除该课时吗?",okType:"danger",onOk:function(){_.c.deleteTask(s,r).then((function(t){t.success&&(e.$message.success("删除成功"),g.a.forEach(e.data,(function(t,n){t.tasks.id==r&&e.data.splice(n,1)})))}))}})},copyTaskUrl:function(t){return"".concat(window.location.origin,"/course/").concat(t.courseId)},goToEditorLesson:function(){this.$router.push({name:"MultiClassEditorLesson",params:{id:this.courseId},query:{courseSetId:this.courseSetId,multiClassId:this.multiClassId}})}}},C=(n(1425),Object(w.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"class-info"},[n("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"16px"}},[n("a-input-search",{staticClass:"pull-left",staticStyle:{width:"260px"},attrs:{placeholder:"请输入课时关键字搜索"},on:{search:t.onSearch}}),t._v(" "),t.isPermission("course_lesson_manage")?n("a-button",{staticClass:"pull-right",attrs:{type:"primary"},on:{click:t.goToEditorLesson}},[t._v("\n      重排课时/新增课时\n    ")]):t._e()],1),t._v(" "),n("a-table",{attrs:{columns:t.columns,"row-key":function(t){return t.id},"data-source":t.data,loading:t.loading,pagination:t.pagination,locale:t.locale},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"name",fn:function(t,e){return n("class-name",{attrs:{record:e}})}},{key:"mode",fn:function(t,e){return n("teach-mode",{attrs:{record:e}})}},{key:"startTime",fn:function(e,n){return["live"===n.tasks.type?[t._v("\n        "+t._s(t.$dateFormat(n.tasks.startTime,"YYYY-MM-DD HH:mm"))+"\n      ")]:[t._v(" -- ")]]}},{key:"time",fn:function(e,n){return["video"===n.tasks.type?[t._v("\n        "+t._s((n.tasks.length/60).toFixed(2))+"min\n      ")]:"live"===n.tasks.type?[t._v(t._s(n.tasks.length)+"min")]:[t._v("--")]]}},{key:"teacher",fn:function(e){return[t._v(t._s(e.nickname))]}},{key:"assistant",fn:function(t){return n("assistant",{attrs:{assistant:t}})}},{key:"questionNum",fn:function(e,s){return n("a",{attrs:{href:"/my/course/"+s.tasks.courseId+"/question?type=question",target:"_blank"}},[t._v(t._s(e))])}},{key:"studyStudentNum",fn:function(e,n){return[t._v("\n      "+t._s(e)+"/"+t._s(n.totalStudentNum)+"\n    ")]}},{key:"actions",fn:function(e,s){return[n("a-dropdown",{staticStyle:{"margin-right":"12px"},attrs:{trigger:["hover"],placement:"bottomRight"}},[n("a-button",{attrs:{type:"link"},on:{click:function(t){return t.preventDefault()}}},[n("a-icon",{attrs:{type:"copy"}})],1),t._v(" "),n("a-menu",{attrs:{slot:"overlay"},on:{click:function(e){var n=e.key;return t.handleMenuClick(n,s)}},slot:"overlay"},[n("a-menu-item",{key:"copy"},[t._v("\n            复制课程链接\n          ")])],1)],1),t._v(" "),t.isPermission("course_lesson_edit")?n("a-button",{attrs:{type:"link","data-toggle":"modal","data-target":"#modal","data-url":"/course/"+s.courseId+"/task/"+s.tasks.id+"/update"}},[t._v("编辑")]):t._e(),t._v(" "),t.isPermission("course_lesson_manage")?n("a-dropdown",{attrs:{trigger:["hover"],placement:"bottomRight"}},[n("a",{staticClass:"ant-dropdown-link",on:{click:function(t){return t.preventDefault()}}},[n("a-icon",{attrs:{type:"caret-down"}})],1),t._v(" "),n("a-menu",{attrs:{slot:"overlay"},on:{click:function(e){var n=e.key;return t.handleMenuClick(n,s)}},slot:"overlay"},["published"==s.tasks.status&&t.isPermission("course_lesson_manage")?n("a-menu-item",{key:"unpublish"},[t._v("\n            取消发布\n          ")]):[t.isPermission("course_lesson_manage")?n("a-menu-item",{key:"publish"},[t._v("\n              立即发布\n            ")]):t._e(),t._v(" "),t.isPermission("course_lesson_manage")?n("a-menu-item",{key:"delete"},[t._v("\n              删除\n            ")]):t._e()]],2)],1):t._e()]}}])})],1)}),[],!1,null,null,null));e.default=C.exports}}]);