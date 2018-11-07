<template>
    <div class="categories-box sidebar-categores-box">
        <div class="secton-title">
            <h2>{{category}}</h2>
        </div>
        <div class="sidebar-categores-inner">
            <div class="filter-group">
                <a 
                    href="#"
                    v-for="(subcategory, index) in subcategories"
                    :key="index"
                >   
                {{subcategory.name}}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    subcategories() {
      console.log(
        "Inside computed before getCategorySubCategories in SubcategoryGrid "
      );
      //return this.getResources();
      return this.$store.getters.getCategorySubCategories({
        rK: this.$route.params.resourceName,
        cK: this.$route.params.categoryName
      });
    },
    category() {
      return this.$route.params.categoryName;
    }
  }
};
</script>

<style>
</style>
