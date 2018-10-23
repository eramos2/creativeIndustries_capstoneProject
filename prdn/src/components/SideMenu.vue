<template>
    <div class="col-sm-4">
        <side-menu-item 
            v-for="(menuItem, index) in sideMenuItems"
            :key="index"
        >
                {{ menuItem }}
        </side-menu-item>
    </div>
</template>

<script>
import SideMenuItem from "./SideMenuItem.vue";

export default {
  props: ["sideMenuItems"],
  components: {
    sideMenuItem: SideMenuItem
  }
};
</script>


<style scoped>
</style>
