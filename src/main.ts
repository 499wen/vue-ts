import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI); 
import ResetMessage from './plugins/resetMessage'
Vue.prototype.$message = ResetMessage

// 引入axios
import $http from './plugins/axios'
Vue.prototype.$http = $http

// 引入axios
import './API/api'


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
