<template>
  <div class="categories-box sidebar-categores-box">
    <div class="secton-title">
      <h2>{{resource}}</h2>
    </div>
    <div class="sidebar-categores-inner">
      <ul>
        <category-list-box-singleitem
          v-for="(category, key, index) in categories"
          :key="index"
          :category="key"
        >{{category.name}}</category-list-box-singleitem>
      </ul>
      <!--<div class="filter-group">
                <a 
                    href="#"
                    v-for="(category, index) in categories"
                    :key="index"
                >   
                {{category.name}}
                </a>
      </div>-->
    </div>
  </div>
</template>

<script>
import CategoryListBoxSingleItem from "./CategoryListBoxSingleItem.vue";

export default {
  components: {
    categoryListBoxSingleitem: CategoryListBoxSingleItem
  },
  computed: {
    categories() {
      //console.log("Inside computed category ListBox ");
      //return this.getResources();
      return this.$store.getters.getResourceCategories(
        this.$route.params.resourceName
      );
    },
    resource() {
      let resources = this.$store.getters.getResources;
      return resources[this.$route.params.resourceName].name;
    }
  }
};
</script>

<style>
</style>
