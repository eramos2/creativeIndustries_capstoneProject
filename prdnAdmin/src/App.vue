<template>
<div><account></account></div>
 
</template>

<script>
import Account from "./components/account/Account.vue";
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap";

export default {
  name: "app",
  components: {
    account: Account
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
