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
/* .register-page-area fieldset {
  border: 0px solid #c0c0c0;
  margin: 0;
  padding: 0;
}
fieldset {
  display: block;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
} */
</style>
