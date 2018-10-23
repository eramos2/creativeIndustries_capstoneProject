<template>
  <div class="container">
    
    <side-menu :sideMenuItems="sideMenuItems"></side-menu>
    
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu.vue";

export default {
  name: "app",
  data: function() {
    return {
      sideMenuItems: ["This is a test"]
    };
  },
  components: {
    sideMenu: SideMenu
  }
};
</script>

<style>
</style>
