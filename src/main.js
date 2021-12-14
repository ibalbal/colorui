import Vue from 'vue'
import App from './App'
import headerBar from './pages/components/handerBar'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.component('header-bar', headerBar)
const app = new Vue({
  ...App
})
app.$mount()
