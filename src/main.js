import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './app/app';
import router from './app/router/router';
import './styles/main.scss';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
