import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
//import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import '../public/css/responsive.css'
import App from './App.vue'
import {
  routes
} from './routes.js';
import {
  store
} from './store/store.js';
import VueCookie from 'vue-cookie';
import {
  Modal
} from 'bootstrap-vue/es/components';

Vue.use(Modal);
Vue.use(VueCookie);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VeeValidate);

//For production build
// Vue.http.options.root = "http://www.uprm.edu/creativeindustries/Server/";
//For local Development
Vue.http.options.root = "http://localhost/Server/";

const router = new VueRouter({
  routes: routes,
  //mode: 'history'
});

export default router
/** 
 * Adds a global filter for replacing %20 with whitespace in a string.
 */
Vue.filter('addWhitespace', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.replace(/%20/g, " ");
});



Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')