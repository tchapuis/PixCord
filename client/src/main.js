import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/css/main.css';

import './validators/validators';

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'localhost:3000',
}));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
