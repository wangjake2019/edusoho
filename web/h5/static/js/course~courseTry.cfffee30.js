(window.webpackJsonp=window.webpackJsonp||[]).push([["course~courseTry"],{"07b4":function(t,e,i){"use strict";i("8e6e"),i("ac6a"),i("456d"),i("e7e5");var s=i("d399"),n=i("bd86"),a=i("3ce7"),o=i("2164"),r=i("2f62"),c=i("faa5");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){Object(n.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h={name:"finish-dialog",mixins:[o.a],inject:["reload"],data:function(){return{show:!0,path:""}},props:{finishResult:{type:Object,default:function(){return{}}},courseId:{type:String,default:""}},computed:u(u({},Object(r.e)("course",{allTask:function(t){return t.allTask}})),{},{rate:function(){return this.finishResult?"".concat(parseInt(this.finishResult.completionRate),"%"):"0%"},title:function(){return this.finishResult?this.allTask[this.finishResult.result.courseTaskId].title:""}}),created:function(){this.path=this.$route.path},methods:u(u({},Object(r.d)("course",{setSourceType:c.x})),{},{goNextTask:function(){var t=this;if(!this.finishResult.nextTask)return Object(s.a)("没有下一课"),void(this.show=!1);var e={courseId:this.courseId,taskId:this.finishResult.nextTask.id};a.a.getCourseData({query:e}).then((function(e){t.toLearnTask(e)}))},toLearnTask:function(t){if("create"!==t.status){var e={id:t.id};this.$store.commit("course/".concat(c.h),{nextTask:e}),this.showTypeDetail(t),this.show=!1,this.setSourceType({sourceType:"img",taskId:t.id})}else Object(s.a)("课时创建中，敬请期待")},showTypeDetail:function(t){if("published"===t.status)switch(t.type){case"video":this.playVedio(t);break;case"audio":this.playAudio(t);break;case"text":case"ppt":case"doc":this.$router.push({name:"course_web",query:{courseId:this.courseId,taskId:t.id,type:t.type,backUrl:"/course/".concat(this.courseId)}}),this.reload();break;case"live":var e=new Date,i=new Date(1e3*t.endTime),n=(new Date(1e3*t.startTime),!1);if(e>i){if(t.activity&&"videoGenerated"===t.activity.replayStatus)return void("self"===t.mediaSource?this.setSourceType({sourceType:"video",taskId:t.id}):this.copyPcUrl(t.courseUrl));if(t.activity&&"ungenerated"===t.activity.replayStatus)return void Object(s.a)("暂无回放");n=!0}this.$router.push({name:"live",query:{courseId:this.courseId,taskId:t.id,type:t.type,title:t.title,replay:n}});break;case"testpaper":var a=t.activity.testpaperInfo.testpaperId;this.$router.push({name:"testpaperIntro",query:{testId:a,targetId:t.id}});break;case"homework":this.$router.push({name:"homeworkIntro",query:{courseId:this.courseId,taskId:t.id}});break;case"exercise":this.$router.push({name:"exerciseIntro",query:{courseId:this.courseId,taskId:t.id}});break;default:this.copyPcUrl(t.courseUrl)}else Object(s.a)("敬请期待")},playVedio:function(t){if("self"===t.mediaSource){var e="/course/".concat(this.courseId);this.$route.path===e?this.setSourceType({sourceType:"video",taskId:t.id}):this.$router.push({path:e,query:{sourceType:"video",taskId:t.id}})}else this.copyPcUrl(t.courseUrl)},playAudio:function(t){var e="/course/".concat(this.courseId);this.$route.path===e?this.setSourceType({sourceType:"audio",taskId:t.id}):this.$router.push({path:e,query:{sourceType:"audio",taskId:t.id}})},closeFinishDialog:function(){this.show=!1,this.$emit("closeFinishDialog")}})},d=i("a6c2"),p=Object(d.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("van-overlay",{attrs:{show:t.show,"z-index":9999}},[i("div",{staticClass:"finish-dialog "},[i("div",{staticClass:"finish-dialog-content clearfix"},[i("div",{staticClass:"finish-dialog-top"},[i("img",{staticClass:"finish-dialog-img",attrs:{src:"static/images/reportDialog.png"}}),i("div",{staticClass:"finish-dialog-top--text"},[t._v("学习完成")])]),i("div",{staticClass:"finish-dialog-close",on:{click:t.closeFinishDialog}},[i("i",{staticClass:"iconfont icon-guanbi"})]),i("div",{staticClass:"progress-bar"},[i("div",{staticClass:"progress-bar__content"},[i("div",{staticClass:"progress-bar__rate",style:{width:t.rate}})]),i("div",{staticClass:"progress-bar__text"},[t._v(t._s(t.rate))])]),i("p",{staticClass:"finish-dialog-text"},[t._v("恭喜完成")]),[i("p",{staticClass:"text-overflow"},[t._v(t._s(t.title))]),i("div",{staticClass:"finish-dialog-btn",on:{click:t.goNextTask}},[t._v("下一课")])]],2)])])}),[],!1,null,null,null);e.a=p.exports},"202a":function(t,e,i){"use strict";i("8e6e"),i("ac6a"),i("456d"),i("e17f");var s=i("2241"),n=(i("e7e5"),i("d399")),a=(i("c5f6"),i("96cf"),i("3b8d")),o=(i("3b2b"),i("4917"),i("7f7f"),i("6762"),i("2fdb"),i("bd86")),r=i("32e6"),c=i.n(r),l=i("2f62"),u=i("3ce7"),h=i("fd23"),d=i("bced"),p=i("07b4"),f=i("4328"),v=i.n(f),m=i("c8a5"),y={props:{type:{type:String,default:""},isShow:{type:Boolean,default:!1},reportType:{type:String,default:""}},methods:{onKeepLearning:function(t){this.$emit("outFocusMask",t)}}},g=i("a6c2"),k=Object(g.a)(y,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShow?i("div",{staticClass:"video-report-mask"},["ineffective_learning"===t.type&&"video"===t.reportType?[i("div",{staticClass:"content"},[t._m(0),i("van-button",{attrs:{color:"#43bc60",size:"small"},on:{click:function(e){return t.onKeepLearning("ineffective_learning")}}},[t._v("\n        继续学习\n      ")])],1)]:t._e(),"kick_previous"===t.type?[i("div",{staticClass:"content"},[t._m(1),i("van-button",{attrs:{color:"#43bc60",size:"small"},on:{click:function(e){return t.onKeepLearning("kick_previous")}}},[t._v("\n        继续学习\n      ")])],1)]:t._e(),"reject_current"===t.type?[t._m(2)]:t._e()],2):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tips"},[e("p",{staticClass:"ineffective-learning"},[this._v("学累了可以休息一会 :D")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tips"},[e("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),e("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"tips"},[e("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),e("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])])}],!1,null,null,null).exports;function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function T(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){Object(o.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var w={components:{countDown:h.a,tagLink:d.a,finishDialog:p.a,VideoReportMask:k},mixins:[m.a],props:{courseSet:{type:Object,default:function(){return{}}},seckillActivities:{type:Object,default:null}},data:function(){return{finishCondition:void 0,learnMode:!1,enableFinish:!1,isEncryptionPlus:!1,isCoverOpen:!1,isPlaying:!1,player:null,counting:!0,isEmpty:!1,textContent:null,tagData:{earnings:0,isShow:!1,link:"",className:"course-tag",minDirectRewardRatio:0},timeChangingList:[],bindAgencyRelation:{},finishResult:null,finishDialog:!1,lastWatchTime:0,nowWatchTime:0}},computed:T(T(T({},Object(l.e)(["DrpSwitch"])),Object(l.e)("course",{sourceType:function(t){return t.sourceType},selectedPlanId:function(t){return t.selectedPlanId},taskId:function(t){return t.taskId},details:function(t){return t.details},joinStatus:function(t){return t.joinStatus},user:function(t){var e;return(null===(e=t.joinStatus)||void 0===e?void 0:e.user)||{}},allTask:function(t){return t.allTask}})),{},{showLearnBtn:function(){return this.joinStatus&&["video","audio"].includes(this.sourceType)}}),watch:{taskId:function(t,e){("course"!==this.$route.name||this.joinStatus)&&t>0&&this.initHead()},selectedPlanId:function(t){("course"!==this.$route.name||this.joinStatus)&&t>0&&this.initHead()}},created:function(){this.initHead(),this.showTagLink()},beforeDestroy:function(){this.sign.length>0&&localStorage.setItem("flowSign",this.sign),this.player&&this.player.destory&&this.player.destory(),this.clearComputeWatchTime()},methods:{toToast:function(){var t=this.finishCondition;if(t){var e="";if(["time","watchTime"].includes(t.type)){var i=Math.ceil((60*t.data-this.learnedTime)/60);e=i>0?"\n剩余 ".concat(i," 分完成"):"\n恭喜！你已完成该任务"}this.$toast({message:"完成条件：".concat(t.text).concat(e),position:"bottom"})}},isAndroid:function(){return!!navigator.userAgent.match(new RegExp("android","i"))},initHead:function(){["video","audio"].includes(this.sourceType)&&(window.scrollTo(0,0),this.joinStatus&&(this.initReport(),this.clearComputeWatchTime(),this.lastWatchTime=0,this.nowWatchTime=0),this.initData())},initReport:function(){this.finishDialog=!1,this.getFinishCondition(),this.IsLivePlayback()},getFinishCondition:function(){var t=this;this.getCourseData(this.selectedPlanId,this.taskId).then((function(e){t.finishCondition=e.activity&&e.activity.finishCondition}))},IsLivePlayback:function(){"live"===this.allTask[this.taskId].type&&this.reprtData({eventName:"finish"})},viewAudioDoc:function(){this.isCoverOpen=!0},hideAudioDoc:function(){this.isCoverOpen=!1},handlePlayer:function(){return this.isPlaying?this.player&&this.player.pause():this.player&&this.player.play()},getParams:function(){return this.joinStatus?{query:{courseId:this.selectedPlanId,taskId:this.taskId},params:{version:"escloud"}}:{query:{courseId:this.selectedPlanId,taskId:this.taskId},params:{preview:1,version:"escloud"}}},initData:function(){this.isShowOutFocusMask=!1,this.sign.length>0&&(localStorage.setItem("flowSign",this.sign),this.sign=""),this.$refs.video&&(this.$refs.video.innerHTML=""),this.enableFinish=!!parseInt(this.details.enableFinish),this.player&&this.player.destory&&this.player.destory(),this.getData()},getData:function(){var t=this;u.a.getMedia(this.getParams()).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(i){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("audio"!==i.mediaType){e.next=4;break}t.formateAudioData(i),e.next=12;break;case 4:if("video"!==i.mediaType){e.next=12;break}if("local-video-player"!==i.media.jsPlayer){e.next=11;break}return e.next=8,u.a.getLocalMediaLive({query:{taskId:t.taskId},params:{hls_encryption:1}});case 8:s=e.sent,delete i.media.resNo,i.media.url=s.mediaUri;case 11:t.formateVedioData(i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var i=Number(t.details.id);4040101==e.code&&t.$router.push({name:"login",query:{redirect:"/course/".concat(i)}}),n.a.fail(e.message)}))},formateAudioData:function(t){var e=t.media;if(e.isFinishConvert)if(this.isEncryptionPlus=e.isEncryptionPlus,e.isEncryptionPlus)Object(n.a)("该浏览器不支持云视频播放，请下载App");else{this.textContent=e.text;var i={id:"course-detail__head--video",user:this.user,resNo:e.resNo,token:e.token,autoplay:!0,disableDataUpload:!0,watermark:{pos:"top.right",width:30,height:30},rememberLastPos:!0};this.$store.commit("UPDATE_LOADING_STATUS",!0),this.initPlayer(i)}else Object(n.a)("课程内容准备中，请稍候查看")},formateVedioData:function(t){var e=t.media,i=e.timeLimit,s=!this.joinStatus&&Number(this.details.tryLookable);if(e.isFinishConvert)if(this.isEncryptionPlus=e.isEncryptionPlus,e.isEncryptionPlus)Object(n.a)("该浏览器不支持云视频播放，请下载App");else{var a={id:"course-detail__head--video",user:this.user,autoplay:!0,disableFullscreen:"audio"===this.sourceType,strictMode:!e.supportMobile,pluck:{timelimit:i},resNo:e.resNo,disableDataUpload:!0,watermark:{pos:"top.right",width:30,height:30},token:e.token,rememberLastPos:!0,playlist:e.url};s||delete a.pluck,this.$store.commit("UPDATE_LOADING_STATUS",!0),this.initPlayer(a)}else Object(n.a)("课程内容准备中，请稍候查看")},initPlayer:function(t){var e=this,i="//service-cdn.qiqiuyun.net/js-sdk-v2/sdk-v1.js?"+~~(Date.now()/1e3/60);c()(i,(function(i){if(e.$store.commit("UPDATE_LOADING_STATUS",!1),i)throw i;var n=new window.QiQiuYun.Player(t);e.player=n,n.on("unablePlay",(function(){e.$refs.video.innerHTML="",s.a.alert({message:"当前内容不支持该手机浏览器观看，建议您使用Chrome、Safari浏览器观看。"}).then((function(){}))})),n.on("ready",(function(){e.initReportData(e.selectedPlanId,e.taskId,e.sourceType)})),n.on("playing",(function(){e.isPlaying=!0,e.computeWatchTime()})),n.on("paused",(function(t){e.isPlaying=!1,e.clearComputeWatchTime(),e.reprtData({eventName:"doing",ContinuousReport:!0})})),n.on("ended",(function(){e.clearComputeWatchTime(),e.finishCondition&&"end"===e.finishCondition.type&&e.reprtData({eventName:"finish"})}))}))},expire:function(){this.counting=!1},sellOut:function(){this.isEmpty=!0,this.$emit("goodsEmpty")},showTagLink:function(){this.DrpSwitch?(this.initTagData(),this.getAgencyBindRelation()):this.tagData.isShow=!1},getAgencyBindRelation:function(){var t=this;u.a.getAgencyBindRelation().then((function(e){e.agencyId?(t.bindAgencyRelation=e,t.tagData.isShow=!0):t.tagData.isShow=!1}))},initTagData:function(){var t=this;u.a.getDrpSetting().then((function(e){t.drpSetting=e,t.tagData.minDirectRewardRatio=e.minDirectRewardRatio;var i={type:"course",id:t.details.id,merchant_id:t.drpSetting.merchantId};t.tagData.link=t.drpSetting.distributor_template_url+"?"+v.a.stringify(i);var s=t.drpSetting.minDirectRewardRatio/100*t.details.price;t.tagData.earnings=(Math.floor(100*s)/100).toFixed(2)}))},toLearned:function(){var t=this;this.reprtData({eventName:"finish"}).then((function(e){t.finishResult=e,t.finishDialog=!0}))},computeWatchTime:function(){var t=this;this.intervalWatchTime=setInterval((function(){t.nowWatchTime++}),1e3)},clearComputeWatchTime:function(){clearInterval(this.intervalWatchTime)},closeFinishDialog:function(){this.finishDialog=!1}}},_=Object(g.a)(w,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"course-detail__head pos-rl",attrs:{id:"course-detail__head"}},[i("video-report-mask",{attrs:{type:t.outFocusMaskType,isShow:t.isShowOutFocusMask,reportType:t.reportType},on:{outFocusMask:t.outFocusMask}}),t.textContent?i("div",{directives:[{name:"show",rawName:"v-show",value:["audio"].includes(t.sourceType)&&!t.isEncryptionPlus&&!t.isCoverOpen,expression:"\n      ['audio'].includes(sourceType) && !isEncryptionPlus && !isCoverOpen\n    "}],staticClass:"course-detail__nav--btn",on:{click:t.viewAudioDoc}},[t._v("\n    文稿\n  ")]):t._e(),t.textContent?i("div",{directives:[{name:"show",rawName:"v-show",value:["audio"].includes(t.sourceType)&&!t.isEncryptionPlus,expression:"['audio'].includes(sourceType) && !isEncryptionPlus"}],staticClass:"course-detail__nav--cover web-view",class:{opened:t.isCoverOpen}},[i("div",{staticClass:"media-text",domProps:{innerHTML:t._s(t.textContent)}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isCoverOpen,expression:"isCoverOpen"}],staticClass:"course-detail__nav--cover-control",on:{click:t.handlePlayer}},[i("i",{staticClass:"iconfont",class:t.isPlaying?"icon-zanting":"icon-bofang"})]),i("div",{staticClass:"course-detail__nav--cover-close-btn",on:{click:t.hideAudioDoc}},[i("i",{staticClass:"van-icon van-icon-arrow van-nav-bar__arrow"})])]):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:"img"===t.sourceType||t.isEncryptionPlus||t.finishDialog,expression:"sourceType === 'img' || isEncryptionPlus || finishDialog"}],staticClass:"course-detail__head--img",attrs:{id:"course-detail__head--img"}},[t.courseSet.cover?i("img",{attrs:{src:t.courseSet.cover.large,alt:""}}):t._e(),t.seckillActivities&&"ongoing"===t.seckillActivities.status&&t.counting&&!t.isEmpty?i("countDown",{attrs:{activity:t.seckillActivities},on:{timesUp:t.expire,sellOut:t.sellOut}}):t._e()],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowOutFocusMask,expression:"!isShowOutFocusMask"}]},[i("div",{directives:[{name:"show",rawName:"v-show",value:["video","audio"].includes(t.sourceType)&&!t.isEncryptionPlus&&!t.finishDialog,expression:"\n        ['video', 'audio'].includes(sourceType) &&\n          !isEncryptionPlus &&\n          !finishDialog\n      "}],ref:"video",attrs:{id:"course-detail__head--video"}})]),t.showLearnBtn?[t.isFinish?i("div",{staticClass:"course-detail__head--btn course-detail__head--activebtn"},[i("i",{staticClass:"iconfont icon-markdone"}),t._v("\n      学过了\n    ")]):t._e(),t.isFinish?t._e():i("div",[t.enableFinish?i("div",{staticClass:"course-detail__head--btn",on:{click:t.toLearned}},[t._v("\n        学过了\n      ")]):t._e(),t.enableFinish?t._e():i("div",{staticClass:"course-detail__head--btn",on:{click:t.toToast}},[t._v("\n        完成条件\n      ")])])]:t._e(),i("tagLink",{attrs:{"tag-data":t.tagData}}),t.finishDialog?i("finishDialog",{attrs:{finishResult:t.finishResult,courseId:t.selectedPlanId},on:{closeFinishDialog:t.closeFinishDialog}}):t._e()],2)}),[],!1,null,null,null);e.a=_.exports},2164:function(t,e,i){"use strict";i("e17f");var s=i("2241");e.a={methods:{copyPcUrl:function(t){var e=this,i="移动端暂不支持此类课程学习。请移步至电脑「".concat(t,"」完成课程。");s.a.alert({title:"暂不支持",message:i,messageAlign:"left",confirmButtonText:"复制链接"}).then((function(){e.$copyText(t).then((function(t){}))}))}}}},"32e6":function(t,e){function i(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function s(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,n){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");"function"==typeof e&&(n=e,e={}),e=e||{},n=n||function(){},o.type=e.type||"text/javascript",o.charset=e.charset||"utf8",o.async=!("async"in e)||!!e.async,o.src=t,e.attrs&&function(t,e){for(var i in e)t.setAttribute(i,e[i])}(o,e.attrs),e.text&&(o.text=""+e.text),("onload"in o?i:s)(o,n),o.onload||i(o,n),a.appendChild(o)}},c8a5:function(t,e,i){"use strict";i("6762"),i("2fdb");var s=i("3ce7"),n=i("faa5");e.a={data:function(){return{reportIntervalTime:null,reportLearnTime:null,reportFinishCondition:null,reportData:{courseId:null,taskId:null},reportResult:null,isFinish:!1,reportType:null,learnTime:0,isShowOutFocusMask:!1,outFocusMaskType:"",sign:"",record:{},absorbed:0,learnedTime:0}},beforeRouteLeave:function(t,e,i){this.sign.length>0&&localStorage.setItem("flowSign",this.sign),i()},beforeDestroy:function(){this.clearReportIntervalTime(),window.removeEventListener("beforeunload",this.onbeforeunloadFlowSign),this.toggleReportMaskHidden("remove")},methods:{initReportData:function(t,e,i){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.clearReportIntervalTime(),this.reportData={courseId:t,taskId:e},this.reportType=i,this.isFinish=!1,this.reportIntervalTime=null,this.reportLearnTime=null,this.reportResult=null,this.learnTime=0,this.reportFinishCondition=null,s&&this.initReportEvent(),this.onbeforeunload()},initReportEvent:function(){this.reprtData(),this.intervalReportData(),this.intervalReportLearnTime()},getCourseData:function(t,e){var i=this,n={courseId:t,taskId:e};return new Promise((function(t,e){s.a.getCourseData({query:n}).then((function(e){i.reportFinishCondition=e.activity.finishCondition,t(e)})).catch((function(t){e(t)}))}))},reprtData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{eventName:"doing",ContinuousReport:!1,watchTime:null};if(null!==this.reportData.courseId&&null!==this.reportData.taskId&&(!this.isFinish||t.ContinuousReport))if(""===this.sign){var e={client:"h5"},i=localStorage.getItem("flowSign");i&&(e.lastSign=i,localStorage.removeItem("flowSign")),this.start(t,e)}else this.reportTaskEvent(t)},start:function(t,e){var i=this;s.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:"start"},data:e}).then((function(e){if(i.handleReportResult(e),e.learnControl.allowLearn)i.sign=e.record.flowSign,i.record=e.record,i.reportTaskEvent(t);else{var s=e.learnControl.denyReason;i.reportJudge(s)}}))},reportTaskEvent:function(t){var e=this;if(0!==this.sign.length){var i={client:"h5",sign:this.sign,duration:this.learnTime,status:this.absorbed};if(t.reActive&&(i.reActive=t.reActive),this.sourceType&&"video"===this.sourceType){var n=parseInt(this.nowWatchTime-this.lastWatchTime);this.lastWatchTime=this.nowWatchTime;var a={watchData:{duration:n}};i=Object.assign(i,a)}this.learnTime=0,s.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:t.eventName},data:i}).then((function(t){if(e.handleReportResult(t),e.record=t.record,e.absorbed=0,e.sign=t.record.flowSign,!t.learnControl.allowLearn){var i=t.learnControl.denyReason;e.reportJudge(i)}})).catch((function(t){e.clearReportIntervalTime()}))}},handleReportResult:function(t){this.reportResult=t,this.learnedTime=t.learnedTime,t.taskResult&&"finish"===t.taskResult.status?(this.isFinish=!0,this.$store.commit(n.y,"finish"),this.$store.commit("course/".concat(n.C),t.completionRate)):this.$store.commit(n.y,"start")},intervalReportLearnTime:function(){var t=this;this.reportLearnTime=setInterval((function(){t.checkoutTime(),t.learnTime++}),1e3)},intervalReportData:function(){var t=this,e=60*(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*1e3;this.reportIntervalTime=setInterval((function(){t.reprtData({eventName:"doing",ContinuousReport:!0})}),e)},checkoutTime:function(){this.reportFinishCondition&&["time","watchTime"].includes(this.reportFinishCondition.type)&&parseInt(this.learnTime/60,10)>=parseInt(this.reportFinishCondition.data,10)&&this.reprtData({eventName:"finish",ContinuousReport:!0})},clearReportIntervalTime:function(){clearInterval(this.reportIntervalTime),clearInterval(this.reportLearnTime),this.reportIntervalTime=null,this.reportLearnTime=null},reportJudge:function(t){"kick_previous"===t?this.kickEachOther("kick_previous"):"reject_current"===t&&(this.clearReportIntervalTime(),this.kickEachOther("reject_current"))},outFocusMask:function(t){this.absorbed=1,this.isShowOutFocusMask=!1,!this.player||"video"!==this.reportType&&"audio"!==this.reportType||this.player.play(),this.toggleReportMaskHidden("remove"),this.reprtData({eventName:"doing",ContinuousReport:!0,reActive:1})},kickEachOther:function(t){if(this.absorbed=1,"testpaper"!==this.reportType&&"live"!==this.reportType&&"homework"!==this.reportType||"kick_previous"!==t){if(this.isShowOutFocusMask=!0,this.outFocusMaskType=t,"video"===this.reportType||"audio"===this.reportType){if(this.player&&this.player.destory&&"reject_current"===t)return void this.player.destory();this.player&&this.player.pause&&this.player.pause()}this.toggleReportMaskHidden("add")}},ineffectiveLearning:function(t){this.isShowOutFocusMask||(this.absorbed=0,this.isShowOutFocusMask=!0,this.outFocusMaskType=t,this.player&&"video"===this.reportType&&this.player.pause(),this.reprtData({eventName:"doing",ContinuousReport:!0}))},toggleReportMaskHidden:function(t){"video"!==this.reportType&&"audio"!==this.reportType&&("add"===t?document.getElementsByTagName("body")[0].classList.add("report-mask-hidden"):"remove"===t&&document.getElementsByTagName("body")[0].classList.remove("report-mask-hidden"))},initVisibilitychange:function(){document.addEventListener("visibilitychange",this.visibilityState)},visibilityState:function(){"video"===this.reportType&&("hidden"===document.visibilityState?this.ineffectiveLearning("ineffective_learning"):"visible"===document.visibilityState&&this.player.pause())},onbeforeunload:function(){window.addEventListener("beforeunload",this.onbeforeunloadFlowSign)},onbeforeunloadFlowSign:function(){this.sign.length>0&&localStorage.setItem("flowSign",this.sign)}}}}}]);