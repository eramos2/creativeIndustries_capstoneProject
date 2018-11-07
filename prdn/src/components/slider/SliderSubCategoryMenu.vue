<template>

    <li><a href="#"><slot></slot></a>
        <ul>
            <li
                v-for="(subcategory, index) in category.subcategories"
                :key="index"
            >
            <a href="#">{{subcategory.name}}</a>
            </li>
        </ul>
    </li>

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
