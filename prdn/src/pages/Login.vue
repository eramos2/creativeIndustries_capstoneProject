<template>
  <div id="app">
   <login></login>
  </div>
</template>

<script>
import Login from "../components/login/Login.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap";

export default {
  name: "app",
  components: {
    login: Login
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
.custom-title {
  color: #333333;
  font-size: 25px;
  font-weight: 600;
  text-transform: capitalize;
}

.well {
  background-color: #fff;
  border: 1px solid #ededed;
  border-radius: 4px;
  padding: 20px;
}

.login-area {
  background: #fff;
  padding: 50px 30px;
  margin-bottom: 70px;
}

.log-in p strong {
  color: #444444;
  font-weight: 500;
}

.customer-btn,
.return-customer-btn {
  background: #12a4dd none repeat scroll 0 0;
  border: medium none;
  color: #ffffff;
  display: inline-block;
  font-weight: 500;
  font-size: 15px;
  margin-top: 20px;
  padding: 10px 30px;
  text-align: center;
  text-transform: uppercase;
  -webkit-transition: all 300ms ease-in 0s;
  transition: all 300ms ease-in 0s;
  cursor: pointer;
}

.return-customer-btn {
  background: #1b81c5;
}

a:hover {
  text-decoration: none;
}

.return-customer-btn:hover {
  background: #12a4dd;
  color: #fff;
  border: 1px solid #12a4dd !important;
  text-decoration: none;
}

.customer-btn:hover {
  background: #1b81c5;
  color: #fff;
}

.return-customer label {
  font-weight: 500;
  color: #444;
  font-size: 14px;
}

.return-customer input {
  font-size: 14px;
}

.lost-password a {
  color: #555;
  font-weight: 500;
  font-size: 13px;
}

.lost-password a:hover {
  color: #1b81c5;
}
.buttonHolder {
  text-align: center;
}
#centerbuttons {
  width: 250px;
  margin: 0 auto;
}
form {
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;
}
</style>
