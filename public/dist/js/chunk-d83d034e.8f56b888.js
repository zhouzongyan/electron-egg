(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d83d034e"],{"107c":function(e,t,n){var r=n("d039"),o=n("da84"),a=o.RegExp;e.exports=r((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var r=n("2ba4"),o=n("c65b"),a=n("e330"),c=n("d784"),i=n("44e7"),l=n("825a"),s=n("1d80"),u=n("4840"),p=n("8aa5"),d=n("50c4"),f=n("577e"),x=n("dc4a"),v=n("4dae"),g=n("14c3"),h=n("9263"),m=n("9f7f"),b=n("d039"),w=m.UNSUPPORTED_Y,k=4294967295,I=Math.min,S=[].push,E=a(/./.exec),y=a(S),R=a("".slice),_=!b((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));c("split",(function(e,t,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var a=f(s(this)),c=void 0===n?k:n>>>0;if(0===c)return[];if(void 0===e)return[a];if(!i(e))return o(t,a,e,c);var l,u,p,d=[],x=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,m=new RegExp(e.source,x+"g");while(l=o(h,m,a)){if(u=m.lastIndex,u>g&&(y(d,R(a,g,l.index)),l.length>1&&l.index<a.length&&r(S,d,v(l,1)),p=l[0].length,g=u,d.length>=c))break;m.lastIndex===l.index&&m.lastIndex++}return g===a.length?!p&&E(m,"")||y(d,""):y(d,R(a,g)),d.length>c?v(d,0,c):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:o(t,this,e,n)}:t,[function(t,n){var r=s(this),c=void 0==t?void 0:x(t,e);return c?o(c,t,r,n):o(a,f(r),t,n)},function(e,r){var o=l(this),c=f(e),i=n(a,o,c,r,a!==t);if(i.done)return i.value;var s=u(o,RegExp),x=o.unicode,v=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(w?"g":"y"),h=new s(w?"^(?:"+o.source+")":o,v),m=void 0===r?k:r>>>0;if(0===m)return[];if(0===c.length)return null===g(h,c)?[c]:[];var b=0,S=0,E=[];while(S<c.length){h.lastIndex=w?0:S;var _,C=g(h,w?R(c,S):c);if(null===C||(_=I(d(h.lastIndex+(w?S:0)),c.length))===b)S=p(c,S,x);else{if(y(E,R(c,b,S)),E.length===m)return E;for(var O=1;O<=C.length-1;O++)if(y(E,C[O]),E.length===m)return E;S=b=_}}return y(E,R(c,b)),E}]}),!_,w)},"14c3":function(e,t,n){var r=n("da84"),o=n("c65b"),a=n("825a"),c=n("1626"),i=n("c6b6"),l=n("9263"),s=r.TypeError;e.exports=function(e,t){var n=e.exec;if(c(n)){var r=o(n,e,t);return null!==r&&a(r),r}if("RegExp"===i(e))return o(l,e,t);throw s("RegExp#exec called on incompatible receiver")}},"3db9":function(e,t,n){"use strict";n("7092")},"44e7":function(e,t,n){var r=n("861d"),o=n("c6b6"),a=n("b622"),c=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==o(e))}},"4dae":function(e,t,n){var r=n("da84"),o=n("23cb"),a=n("07fa"),c=n("8418"),i=r.Array,l=Math.max;e.exports=function(e,t,n){for(var r=a(e),s=o(t,r),u=o(void 0===n?r:n,r),p=i(l(u-s,0)),d=0;s<u;s++,d++)c(p,d,e[s]);return p.length=d,p}},7092:function(e,t,n){},8418:function(e,t,n){"use strict";var r=n("a04b"),o=n("9bf2"),a=n("5c6c");e.exports=function(e,t,n){var c=r(t);c in e?o.f(e,c,a(0,n)):e[c]=n}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8f7f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-demo-window"}},[e._m(0),n("div",{staticClass:"one-block-2"},[n("a-space",[n("a-button",{on:{click:function(t){return e.checkForUpdater()}}},[e._v("检查更新")]),n("a-button",{on:{click:function(t){return e.download()}}},[e._v("下载并安装")])],1)],1),e._m(1),n("div",{staticClass:"one-block-2"},[n("a-progress",{attrs:{percent:e.percentNumber,status:"active"}}),n("a-space",[e._v(" "+e._s(e.progress)+" ")])],1)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"one-block-1"},[n("span",[e._v(" 1. 自动更新 ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"one-block-1"},[n("span",[e._v(" 2. 下载进度 ")])])}],a=n("a358"),c={data:function(){return{status:0,progress:"",percentNumber:0}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.$ipc.removeAllListeners(a["c"].appUpdater),this.$ipc.on(a["c"].appUpdater,(function(t,n){n=JSON.parse(n),e.status=n.status,3==n.status?(e.progress=n.desc,e.percentNumber=n.percentNumber):e.$message.info(n.desc)}))},checkForUpdater:function(){this.$ipcInvoke(a["a"].checkForUpdater).then((function(e){console.log(e)}))},download:function(){1===this.status?this.$ipcInvoke(a["a"].downloadApp).then((function(e){console.log(e)})):this.$message.info("没有可用版本")}}},i=c,l=(n("3db9"),n("2877")),s=Object(l["a"])(i,r,o,!1,null,"489510a6",null);t["default"]=s.exports},9263:function(e,t,n){"use strict";var r=n("c65b"),o=n("e330"),a=n("577e"),c=n("ad6d"),i=n("9f7f"),l=n("5692"),s=n("7c73"),u=n("69f3").get,p=n("fce3"),d=n("107c"),f=l("native-string-replace",String.prototype.replace),x=RegExp.prototype.exec,v=x,g=o("".charAt),h=o("".indexOf),m=o("".replace),b=o("".slice),w=function(){var e=/a/,t=/b*/g;return r(x,e,"a"),r(x,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),k=i.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],S=w||I||k||p||d;S&&(v=function(e){var t,n,o,i,l,p,d,S=this,E=u(S),y=a(e),R=E.raw;if(R)return R.lastIndex=S.lastIndex,t=r(v,R,y),S.lastIndex=R.lastIndex,t;var _=E.groups,C=k&&S.sticky,O=r(c,S),A=S.source,U=0,M=y;if(C&&(O=m(O,"y",""),-1===h(O,"g")&&(O+="g"),M=b(y,S.lastIndex),S.lastIndex>0&&(!S.multiline||S.multiline&&"\n"!==g(y,S.lastIndex-1))&&(A="(?: "+A+")",M=" "+M,U++),n=new RegExp("^(?:"+A+")",O)),I&&(n=new RegExp("^"+A+"$(?!\\s)",O)),w&&(o=S.lastIndex),i=r(x,C?n:S,M),C?i?(i.input=b(i.input,U),i[0]=b(i[0],U),i.index=S.lastIndex,S.lastIndex+=i[0].length):S.lastIndex=0:w&&i&&(S.lastIndex=S.global?i.index+i[0].length:o),I&&i&&i.length>1&&r(f,i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i&&_)for(i.groups=p=s(null),l=0;l<_.length;l++)d=_[l],p[d[0]]=i[d[1]];return i}),e.exports=v},"9f7f":function(e,t,n){var r=n("d039"),o=n("da84"),a=o.RegExp,c=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),i=c||r((function(){return!a("a","y").sticky})),l=c||r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:l,MISSED_STICKY:i,UNSUPPORTED_Y:c}},a15b:function(e,t,n){"use strict";var r=n("23e7"),o=n("e330"),a=n("44ad"),c=n("fc6a"),i=n("a640"),l=o([].join),s=a!=Object,u=i("join",",");r({target:"Array",proto:!0,forced:s||!u},{join:function(e){return l(c(this),void 0===e?",":e)}})},a358:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return l}));n("a15b"),n("ac1f"),n("1276");var r=n("cff8"),o=n.n(r),a=n("b775"),c={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",hello:"controller.example.hello"},i={appUpdater:"app.updater"},l=function(e,t){var n=o.a.get("httpServiceConfig"),r=n.server||"http://127.0.0.1:7071",c=e.split(".").join("/");return c=r+"/"+c,console.log("url:",c),Object(a["b"])({url:c,method:"post",data:t,params:{},timeout:6e4})}},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){return 1},1)}))}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),o=n("6eeb"),a=n("9263"),c=n("d039"),i=n("b622"),l=n("9112"),s=i("species"),u=RegExp.prototype;e.exports=function(e,t,n,p){var d=i(e),f=!c((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),x=f&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!x||n){var v=r(/./[d]),g=t(d,""[e],(function(e,t,n,o,c){var i=r(e),l=t.exec;return l===a||l===u.exec?f&&!c?{done:!0,value:v(t,n,o)}:{done:!0,value:i(n,t,o)}:{done:!1}}));o(String.prototype,e,g[0]),o(u,d,g[1])}p&&l(u[d],"sham",!0)}},fce3:function(e,t,n){var r=n("d039"),o=n("da84"),a=o.RegExp;e.exports=r((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-d83d034e.8f56b888.js.map