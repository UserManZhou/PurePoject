import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import qs from 'qs'
/*import 'assets/js/starter'*/
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false
Vue.prototype.$qs = qs
/*Vue.prototype.$ = $*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
