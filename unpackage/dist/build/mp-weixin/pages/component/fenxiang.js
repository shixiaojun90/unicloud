(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/fenxiang"],{3201:function(e,n,t){"use strict";(function(e){t("647f"),t("921b");i(t("66fd"));var n=i(t("54fe"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"54fe":function(e,n,t){"use strict";t.r(n);var i=t("66c3"),o=t("fb5a");for(var s in o)"default"!==s&&function(e){t.d(n,e,function(){return o[e]})}(s);t("63f9");var c,r=t("f0c5"),a=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);n["default"]=a.exports},"63f9":function(e,n,t){"use strict";var i=t("c8aa"),o=t.n(i);o.a},"66c3":function(e,n,t){"use strict";var i,o=function(){var e=this,n=e.$createElement;e._self._c},s=[];t.d(n,"b",function(){return o}),t.d(n,"c",function(){return s}),t.d(n,"a",function(){return i})},"687d":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{providerList:[],sourceLink:"http://yunzhujiao.cn/bind_pub/index.html",type:0}},onLoad:function(){var n=this;this.version=plus.runtime.version,e.getProvider({service:"share",success:function(e){for(var t=[],i=0;i<e.provider.length;i++)switch(e.provider[i]){case"weixin":t.push({name:"分享到微信好友",id:"weixin"}),t.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":t.push({name:"分享到QQ",id:"qq"});break;default:break}n.providerList=t},fail:function(e){console.log("获取登录通道失败"+JSON.stringify(e))}})},methods:{sharurl:function(){e.setClipboardData({data:"http://sishuquan.com?id=3228969",success:function(){console.log("success"),e.showModal({title:"复制成功",content:"内容已复制到粘贴板，可前往其他应用粘贴查看。",showCancel:!1,success:function(e){e.confirm||e.cancel}})}})},save:function(){e.showActionSheet({itemList:["保存图片到相册"],success:function(){plus.gallery.save("http://pds.jyt123.com/wxtest/logo.png",function(){e.showToast({title:"保存成功",icon:"none"})},function(){e.showToast({title:"保存失败，请重试！",icon:"none"})})}})},share:function(n){var t=this;if(0!==this.providerList.length){var i=this.providerList.map(function(e){return e.name});console.log(i),e.showActionSheet({itemList:i,success:function(n){console.log(t.providerList[n.tapIndex].id),"qq"==t.providerList[n.tapIndex].id?t.type=1:t.type=0,e.share({provider:t.providerList[n.tapIndex].id,scene:t.providerList[n.tapIndex].type&&"WXSenceTimeline"===t.providerList[n.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:t.type,title:"耘助教",summary:"耘助教是一个在线教育应用平台",imageUrl:"../../static/logo.png",href:"https://m3w.cn/uniapp",success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(n){e.showModal({content:n.errMsg,showCancel:!1})}})}})}else e.showModal({title:"当前环境无分享渠道!",showCancel:!1})},openLink:function(){plus.runtime.openWeb(this.sourceLink)}}};n.default=t}).call(this,t("543d")["default"])},c8aa:function(e,n,t){},fb5a:function(e,n,t){"use strict";t.r(n);var i=t("687d"),o=t.n(i);for(var s in i)"default"!==s&&function(e){t.d(n,e,function(){return i[e]})}(s);n["default"]=o.a}},[["3201","common/runtime","common/vendor"]]]);