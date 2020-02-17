import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/public.css'
Vue.use(Vant);






new Vue({
  render: h => h(App),
  
}).$mount('#app')
