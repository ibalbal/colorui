import Vue from 'vue'
import App from './App'
import headerBar from './pages/components/handerBar'
import footerBar from "./pages/components/footerBar"
import mainContent from "./pages/components/mainContent"
import mkUpload from "./pages/components/mk-upload/mk-upload"
// import uniTable from "./uni_modules/uni-table/components/uni-table/uni-table"
// import uniTr from "./uni_modules/uni-table/components/uni-tr/uni-tr"
// import uniTh from "./uni_modules/uni-table/components/uni-th/uni-th"
// import uniTd from "./uni_modules/uni-table/components/uni-td/uni-td"

Vue.config.productionTip = false

App.mpType = 'app'
Vue.component('header-bar', headerBar)
Vue.component('footer-bar',footerBar)
Vue.component('main-content',mainContent)
Vue.component('mk-upload', mkUpload)
// Vue.component('uni-table', uniTable)
// Vue.component('uni-tr', uniTr)
// Vue.component('uni-th', uniTh)
// Vue.component('uni-td', uniTd)
const app = new Vue({
  ...App
})
app.$mount()
