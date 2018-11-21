import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
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

Vue.use(VueResource);
Vue.use(VueRouter);

//For production build
//Vue.http.options.root = "http://www.uprm.edu/creativeindustries/Server/prds.php";
//For local Development
Vue.http.options.root = "http://localhost/Server/";

const router = new VueRouter({
  routes: routes
});


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