<template>
  <div id="app">
   <register></register>
  </div>
</template>

<script>
import Register from "../components/register/Register.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap";

export default {
  name: "app",
  components: {
    register: Register
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  display: block;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.meta {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.register-page-area {
  background: #fff;
  padding-top: 50px;
}

.form-register label {
  font-size: 14px;
  text-align: left;
}

.register-page-area fieldset {
  border: 0px solid #c0c0c0;
  margin: 0;
  padding: 0;
}

.form-register .form-group {
  margin-bottom: 20px;
}

.form-register .form-group input[type="password"] {
  font-size: 14px;
  height: 45px;
  padding: 10px;
}

.form-register .form-group input[type="radio"] {
  box-sizing: border-box;
  height: 20px;
  width: 20px;
  vertical-align: middle;
  margin: 10px;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="password"]:focus,
input[type="search"]:focus,
input[type="number"]:focus,
input[type="tel"]:focus,
input[type="range"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="week"]:focus,
input[type="time"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="color"]:focus,
textarea:focus {
  border-color: #12a4dd;
  box-shadow: none;
  outline: none;
}

label.radio-inline {
  margin-right: 15px;
}

.form-register legend {
  border-bottom: 1px solid #ededed;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  padding: 7px 0;
}

.agree {
  color: #12a4dd;
  font-size: 13px;
}

.terms input[type="checkbox"] {
  vertical-align: middle;
}
</style>
