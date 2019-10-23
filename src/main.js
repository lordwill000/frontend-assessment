import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import router from '@/router';
import store from '@/store';
import '@/assets/scss/main.scss';
import App from '@/App.vue';
import './registerServiceWorker';

Vue.use(VueLazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
