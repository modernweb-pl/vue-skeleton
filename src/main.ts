import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import VueGtag from 'vue-gtag';
import App from './app.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './styles/main.scss';

const { NODE_ENV, GTAG_ID } = process.env;

Vue.config.productionTip = NODE_ENV === 'production';

Vue.use(BootstrapVue);
if (GTAG_ID) {
  Vue.use(VueGtag, { config: { id: GTAG_ID } }, router);
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
