import Vue from 'vue'
import App from './App'
import headerBar from './pages/components/handerBar'
import footerBar from "./pages/components/footerBar"
import mainContent from "./pages/components/mainContent"
import mkUpload from "./pages/components/mk-upload/mk-upload"
import BiaofunDatetimePicker from "./components/biaofun-datetime-picker/biaofun-datetime-picker";

Vue.config.productionTip = false

App.mpType = 'app'
Vue.component('header-bar', headerBar)
Vue.component('footer-bar',footerBar)
Vue.component('main-content',mainContent)
Vue.component('mk-upload', mkUpload)
Vue.component('biaofun-datetime-picker',BiaofunDatetimePicker)

const app = new Vue({
  ...App
})
app.$mount()
