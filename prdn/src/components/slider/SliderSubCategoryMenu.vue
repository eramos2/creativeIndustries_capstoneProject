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
            <li
                v-for="(subcategory, index) in category.subcategories"
                :key="index"
            >
            <a href="#">{{subcategory.name}}</a>
            </li>
        </ul>
    </router-link>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["cKey", "rKey", "category"],

  computed: {
    ...mapGetters(["getCategorySubCategories"])
  }
};
</script>

<style>
</style>
