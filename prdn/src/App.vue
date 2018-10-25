<template>
  <div>
    
    <app-header></app-header>
    
    <side-bar :sideBarItems="sideBarItems"></side-bar>
    
  </div>
</template>


<script>
import SideBar from "./components/SideBar.vue";
import AppHeader from "./components/header/AppHeader.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap";

export default {
  name: "app",
  data: function() {
    return {
      sideBarItems: ["This is a test"]
    };
  },
  components: {
    sideBar: SideBar,
    appHeader: AppHeader
  }
};
</script>

<style>
</style>
