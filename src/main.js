import Vue from 'vue';
import App from './app/app';
import router from './app/router/router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
