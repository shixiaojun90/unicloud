(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0eac":function(t,n,e){"use strict";e.r(n);var o=e("5158"),u=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=u.a},5158:function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(e("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}var a={onLaunch:function(){t.getSystemInfo({success:function(t){u.default.prototype.StatusBar=t.statusBarHeight,"android"==t.platform?u.default.prototype.CustomBar=t.statusBarHeight+50:u.default.prototype.CustomBar=t.statusBarHeight+45}})},onShow:function(){o("log","App Show"," at App.vue:109")},onHide:function(){o("log","App Hide"," at App.vue:112")}};n.default=a}).call(this,e("6e42")["default"],e("0de9")["default"])},"637c":function(t,n,e){},aa6d:function(t,n,e){"use strict";(function(t){e("647f"),e("921b");var n=u(e("66fd")),o=u(e("e203"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){a(t,n,e[n])})}return t}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c=function(){return e.e("colorui/components/cu-custom").then(e.bind(null,"845e"))};n.default.component("cu-custom",c);var i=function(){return e.e("colorui/components/drag-button").then(e.bind(null,"72d5"))};n.default.component("drag-button",i);var f=function(){return e.e("colorui/components/fen-xiang").then(e.bind(null,"59d3"))};n.default.component("fen-xiang",f);var l=function(){return e.e("colorui/editor/editor").then(e.bind(null,"77ec"))};n.default.component("myeditor",l),n.default.config.productionTip=!1,o.default.mpType="app";var d=new n.default(r({},o.default));t(d).$mount()}).call(this,e("6e42")["createApp"])},ae0b:function(t,n,e){"use strict";var o=e("637c"),u=e.n(o);u.a},e203:function(t,n,e){"use strict";e.r(n);var o=e("0eac");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("ae0b");var r,a,c,i,f=e("f0c5"),l=Object(f["a"])(o["default"],r,a,!1,null,null,null,!1,c,i);n["default"]=l.exports}},[["aa6d","common/runtime","common/vendor"]]]);