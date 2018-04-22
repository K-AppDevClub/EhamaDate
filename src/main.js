// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ja';
import * as VueGoogleMaps from 'vue2-google-maps';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import VueRouter from 'vue-router';
import App from './App';
import routes from './routes';

Vue.config.productionTip = false;

Vue.use(Element, { locale });
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC3FN2Ff1tNSnNyGMTgx2fR7-OB-4wPOWE',
    libraries: 'places',
  },
});
Vue.use(VueOnsen);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: window.location.href,
  routes, // short for `routes: routes`
});

new Vue({
  components: {
    App,
  },
  template: '<App/>',
  router,
}).$mount('#app');


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   router,
//   components: { App },
// });
