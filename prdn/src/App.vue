<template>
  <div>
   <login></login>
   <!-- <user></user> -->
   <!-- <admin></admin> -->
   <!-- <superadmin></superadmin> -->
   <!-- <register></register> -->
    
    </div>
</template>

<script>
import Login from "./pages/Login.vue";
import User from "./pages/User.vue";
import Admin from "./pages/Admin.vue";
import Superadmin from "./pages/Superadmin.vue";
import Register from "./pages/Register.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap";

export default {
  name: "app",
  components: {
    login: Login,
    user: User,
    admin: Admin,
    superadmin: Superadmin,
    register: Register
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
