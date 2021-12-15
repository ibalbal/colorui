import Vue from 'vue'
import App from './App'
import headerBar from './pages/components/handerBar'
import footerBar from "./pages/components/footerBar";
Vue.config.productionTip = false

App.mpType = 'app'
Vue.component('header-bar', headerBar)
Vue.component('footer-bar',footerBar)
const app = new Vue({
  ...App
})
app.$mount()
