<template>

    <li><a href="#"><slot></slot> <span><i class="fa fa-angle-right"></i></span></a>
    <ul class="right-mega-menu">

        <sub-category-menu
            v-for="(category, index) in resource.categories"
            :key="index"
            :category="category"
        >
            {{category.name}}
        </sub-category-menu>
       
    </ul>
</li>

</template>

<script>
import SliderSubCategoryMenu from "./SliderSubCategoryMenu.vue";

export default {
  props: ["resource"],
  components: {
    subCategoryMenu: SliderSubCategoryMenu
  }
};
</script>

<style>
</style>

