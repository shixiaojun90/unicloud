import Vue from 'vue'
import App from './App'

// import basics from './pages/basics/home.vue'
// Vue.component('basics',basics)

// import components from './pages/component/home.vue'
// Vue.component('components',components)

// import plugin from './pages/plugin/home.vue'
// Vue.component('plugin',plugin)
//header
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

//悬浮按钮
import dragButton from './colorui/components/drag-button.vue'
Vue.component('drag-button',dragButton)

//分享页面
import fenXiang from './colorui/components/fen-xiang.vue'
Vue.component('fen-xiang',fenXiang)

import eDitor from './colorui/editor/editor.vue'
Vue.component('myeditor',eDitor)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



