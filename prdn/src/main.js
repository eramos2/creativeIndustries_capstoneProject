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

Vue.http.options.root = "http://www.uprm.edu/creativeindustries/Server/prds.php";

const router = new VueRouter({
  routes: routes
});



//Vue.use(BootstrapVue);



Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')