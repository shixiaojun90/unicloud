(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0eac":function(t,n,e){"use strict";e.r(n);var o=e("5158"),u=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=u.a},5158:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(e("66fd"));function u(t){return t&&t.__esModule?t:{default:t}}var r={onLaunch:function(){t.getSystemInfo({success:function(t){o.default.prototype.StatusBar=t.statusBarHeight;var n=wx.getMenuButtonBoundingClientRect();o.default.prototype.Custom=n,o.default.prototype.CustomBar=n.bottom+n.top-t.statusBarHeight}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=r}).call(this,e("543d")["default"])},"637c":function(t,n,e){},aa6d:function(t,n,e){"use strict";(function(t){e("647f"),e("921b");var n=u(e("66fd")),o=u(e("e203"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){c(t,n,e[n])})}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var a=function(){return e.e("colorui/components/cu-custom").then(e.bind(null,"845e"))};n.default.component("cu-custom",a);var f=function(){return e.e("colorui/components/drag-button").then(e.bind(null,"72d5"))};n.default.component("drag-button",f);var l=function(){return e.e("colorui/components/fen-xiang").then(e.bind(null,"59d3"))};n.default.component("fen-xiang",l),n.default.config.productionTip=!1,o.default.mpType="app";var i=new n.default(r({},o.default));t(i).$mount()}).call(this,e("543d")["createApp"])},ae0b:function(t,n,e){"use strict";var o=e("637c"),u=e.n(o);u.a},e203:function(t,n,e){"use strict";e.r(n);var o=e("0eac");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("ae0b");var r,c,a,f,l=e("f0c5"),i=Object(l["a"])(o["default"],r,c,!1,null,null,null,!1,a,f);n["default"]=i.exports}},[["aa6d","common/runtime","common/vendor"]]]);