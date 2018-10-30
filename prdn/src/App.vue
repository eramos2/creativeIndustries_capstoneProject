<template>
  <div id="app">
   <login></login>
   <footer></footer>
  </div>
</template>

<script>
import Login from "./components/login/Login.vue";
import Footer from "./components/footer/Footer.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap";

export default {
  name: "app",
  components: {
    login: Login,
    footer: Footer
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
