<template>
    <div id="grid" class="tab-pane fade active show" role="tabpanel">
        <div class="shop-product-wrap box-module">
            <div class="row">
                
                <subcategory-grid-single-item
                    v-for="(subcategory, index) in subcategories"
                    :key="index"
                    :subcategory="subcategory"   
                >
                </subcategory-grid-single-item>
               
            </div>
        </div>
    </div>
</template>

<script>
import SubCategoryGridSingleItem from "./SubCategoryGridSingleItem.vue";
export default {
  components: {
    subcategoryGridSingleItem: SubCategoryGridSingleItem
  },
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
    }
  }
};
</script>

<style>
</style>
