<template>

<router-link :to="{
    name: 'subcategoriesLink', 
    params: {
        resourceName: rKey,
        categoryName: cKey
        }
    }" tag="li" active-class="active" exact>
    <a><slot></slot></a>
    <ul>
            <slider-sub-category-menu-single-item
                v-for="(subcategory, key) in category.subcategories"
                :key="key"
                :cKey="cKey"
                :rKey="rKey"
                :subcategoryKey="key"
            >
            {{subcategory.name}}
            </slider-sub-category-menu-single-item>
            <!--<li
                v-for="(subcategory, index) in category.subcategories"
                :key="index"
                :subcategory="subcategory"
            >
            <a href="#">{{subcategory.name}}</a>
            </li>-->
        </ul>
    </router-link>

</template>

<script>
import { mapGetters } from "vuex";
import SliderSubCategoryMenuSingleItem from "./SliderSubCategoryMenuSingleItem.vue";

export default {
  props: ["cKey", "rKey", "category"],
  components: {
    sliderSubCategoryMenuSingleItem: SliderSubCategoryMenuSingleItem
  },
  computed: {
    ...mapGetters(["getCategorySubCategories"])
  }
};
</script>

<style>
</style>
