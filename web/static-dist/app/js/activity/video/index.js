!function(t){function e(e){for(var r,o,l=e[0],c=e[1],u=e[2],p=0,y=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&y.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(s&&s(e);y.length;)y.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var c=n[l];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={50:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=c;a.push([1227,0]),n()}({1227:function(t,e,n){"use strict";n.r(e);var r=n(4),i=n.n(r),a=n(5),o=n.n(a),l=(n(146),function(){function t(e){i()(this,t),this.container=e,this.interval=$(this.container).data("watchTimeSec"),this.playerCounter=0,this.activityId=$(this.container).data("id")}return o()(t,[{key:"addVideoPlayerCounter",value:function(t,e){var n=store.get("activity_id_"+this.activityId+"_playing_counter");if(n||(this.playerCounter=0),!e||!e.playing)return!1;n>=this.interval?this.watching(t):e.playing&&this.playerCounter++,store.set("activity_id_"+this.activityId+"_playing_counter",this.playerCounter)}},{key:"watching",value:function(t){var e=store.get("activity_id_"+this.activityId+"_playing_counter");console.log(e),t.emit("watching",{watchTime:e}).then((function(){var t=$("#video-content").data("watchUrl");$.post(t,(function(t){t&&"error"==t.status&&window.location.reload()}))})).catch((function(t){console.error(t)})),this.playerCounter=0}}]),t}()),c=n(142),u=n.n(c),s=n(190),p=n(255);new(function(){function t(e){i()(this,t),this.player={},this.intervalId=null,this.recorder=e,this.emitter=new p.a}return o()(t,[{key:"play",value:function(){$("#swf-player").length?this._playerSwf():this._playVideo(),this.record()}},{key:"record",value:function(){var t=this;this.intervalId=setInterval((function(){t.recorder.addVideoPlayerCounter(t.emitter,t.player)}),1e3)}},{key:"getPlay",value:function(){return this.player}},{key:"_playerSwf",value:function(){var t="swf-player";u.a.embedSWF($("#"+t).data("url"),t,"100%","100%","9.0.0",null,null,{wmode:"opaque",allowFullScreen:"true"})}},{key:"_playVideo",value:function(){var t=this,e=new s.a({name:"partner",project:"PlayerProject",children:[],type:"parent"});e.on("ended",(function(e){t.player.playing=!1,t._onFinishLearnTask(e)})),e.on("playing",(function(e){t.player.playing=!0})),e.on("paused",(function(e){t.player.playing=!1,t.recorder.watching(t.emitter)})),e.on("timechange",(function(e){t.player.currentTime=e.currentTime}))}},{key:"_onFinishLearnTask",value:function(t){var e=this;this.emitter.emit("finish",{data:t}).then((function(){clearInterval(e.intervalId)})).catch((function(t){console.error(t)}))}}]),t}())(new l("#video-content")).play()}});