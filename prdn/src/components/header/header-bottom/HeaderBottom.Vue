<template>
    <div>
      <div class="header-bottom-area">
        <div class="container">
          <div class="row">
            <header-bottom-category-menu></header-bottom-category-menu>
          </div>
        </div>
      </div>
    </div>    
</template>

<script>
import HeaderBottomCategoryMenu from "./header-bottom-category-menu/HeaderBottomCategoryMenu.vue";

export default {
  components: {
    headerBottomCategoryMenu: HeaderBottomCategoryMenu
  }
};
</script>

<style>
.header-bottom-area {
  background-color: #12a4dd;
}
</style>
