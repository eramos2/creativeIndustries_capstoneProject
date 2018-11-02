<template>
  <div id="app">
   <account></account>
  </div>
</template>

<script>
import Account from "./components/account/Account.vue";

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

.myaccount-content {
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #ededed;
  padding: 30px;
}

.myaccount-content form {
  margin-top: -20px;
}

.myaccount-content h3 {
  font-size: 22px;
  line-height: 1.5;
  border-bottom: 1px dashed #777;
  padding-bottom: 10px;
  margin-bottom: 25px;
  margin-top: 0;
}

.myaccount-content .welcome p {
  color: #000;
}

.myaccount-content .welcome a {
  color: #000;
}

.myaccount-content .welcome a:hover {
  color: #12a4dd;
}

.myaccount-content .welcome strong {
  font-weight: 600;
  color: #39b0ff;
}
</style>
