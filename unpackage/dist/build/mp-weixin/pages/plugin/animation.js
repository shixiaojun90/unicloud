(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/animation"],{"050c":function(e,n,t){"use strict";t.r(n);var o=t("cd20"),a=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,function(){return o[e]})}(c);n["default"]=a.a},"4b3b":function(e,n,t){"use strict";t.r(n);var o=t("af7d"),a=t("050c");for(var c in a)"default"!==c&&function(e){t.d(n,e,function(){return a[e]})}(c);t("b614");var u,r=t("f0c5"),i=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=i.exports},"9c2f":function(e,n,t){"use strict";(function(e){t("295e"),t("921b");o(t("66fd"));var n=o(t("4b3b"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},af7d:function(e,n,t){"use strict";var o,a=function(){var e=this,n=e.$createElement;e._self._c},c=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return c}),t.d(n,"a",function(){return o})},b614:function(e,n,t){"use strict";var o=t("e21e"),a=t.n(o);a.a},cd20:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{animation:"",list:[{name:"fade",color:"red"},{name:"scale-up",color:"orange"},{name:"scale-down",color:"olive"},{name:"slide-top",color:"green"},{name:"slide-bottom",color:"cyan"},{name:"slide-left",color:"blue"},{name:"slide-right",color:"purple"},{name:"shake",color:"mauve"}],toggleDelay:!1}},methods:{Toggle:function(e){var n=this,t=e.currentTarget.dataset.class;this.animation=t,setTimeout(function(){n.animation=""},1e3)},ToggleDelay:function(){var e=this;this.toggleDelay=!0,setTimeout(function(){e.toggleDelay=!1},1e3)}}};n.default=o},e21e:function(e,n,t){}},[["9c2f","common/runtime","common/vendor"]]]);