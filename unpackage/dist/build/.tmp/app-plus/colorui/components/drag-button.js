(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/drag-button"],{"035e":function(t,e,i){"use strict";var n=i("9af9"),o=i.n(n);o.a},"3d99":function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement;t._self._c},h=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return h}),i.d(e,"a",function(){return n})},"72d5":function(t,e,i){"use strict";i.r(e);var n=i("3d99"),o=i("eb41");for(var h in o)"default"!==h&&function(t){i.d(e,t,function(){return o[t]})}(h);i("035e");var d,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],d);e["default"]=u.exports},9563:function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"drag-button",props:{isDock:{type:Boolean,default:!1},existTabBar:{type:Boolean,default:!1}},data:function(){return{top:0,left:0,width:0,height:0,offsetWidth:0,offsetHeight:0,windowWidth:0,windowHeight:0,isMove:!0,edge:10,text:"分享",modalName:null}},mounted:function(){var e=this,n=t.getSystemInfoSync();this.windowWidth=n.windowWidth,this.windowHeight=n.windowHeight,this.existTabBar&&(this.windowHeight-=50),n.windowTop&&(this.windowHeight+=n.windowTop),i("log",n," at colorui\\components\\drag-button.vue:65");var o=t.createSelectorQuery().in(this);o.select("#_drag_button").boundingClientRect(function(t){e.width=t.width,e.height=t.height,e.offsetWidth=t.width/2,e.offsetHeight=t.height/2,e.left=e.windowWidth-e.width-e.edge,e.top=e.windowHeight-e.height-e.edge}).exec()},methods:{hideModal:function(t){this.modalName=null},click:function(t){this.modalName=t.currentTarget.dataset.target,this.$emit("btnClick")},touchstart:function(t){this.$emit("btnTouchstart")},touchmove:function(t){if(1!==t.touches.length)return!1;this.isMove=!0,this.left=t.touches[0].clientX-this.offsetWidth;var e=t.touches[0].clientY-this.offsetHeight,i=this.windowHeight-this.height-this.edge;e<this.edge?this.top=this.edge:this.top=e>i?i:e},touchend:function(t){if(this.isDock){var e=this.windowWidth-this.width-this.edge;this.left<this.windowWidth/2-this.offsetWidth?this.left=this.edge:this.left=e}this.isMove=!1,this.$emit("btnTouchend")}}};e.default=n}).call(this,i("6e42")["default"],i("0de9")["default"])},"9af9":function(t,e,i){},eb41:function(t,e,i){"use strict";i.r(e);var n=i("9563"),o=i.n(n);for(var h in n)"default"!==h&&function(t){i.d(e,t,function(){return n[t]})}(h);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/drag-button-create-component',
    {
        'colorui/components/drag-button-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("72d5"))
        })
    },
    [['colorui/components/drag-button-create-component']]
]);