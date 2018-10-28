<template>

    <li><a href="#"><slot></slot></a>
        <ul>
            <sub-category
                v-for="(subcategory, index) in category.subcategories"
                :key="index"
            >
            {{subcategory}}
            </sub-category>
        </ul>
    </li>

</template>

<script>
import SliderSubCategoryMenuEntry from "./SliderSubCategoryMenuEntry.vue";
export default {
  props: ["category"],
  components: {
    subCategory: SliderSubCategoryMenuEntry
  }
};
</script>

<style>
</style>
