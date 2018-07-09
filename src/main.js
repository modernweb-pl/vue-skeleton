import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './app/app';
import router from './app/router/router';
import './styles/main.scss';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

Vue.use(BootstrapVue);
library.add(faHome, faAngleDoubleRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
