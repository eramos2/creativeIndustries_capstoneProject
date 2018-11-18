<template>
    <div id="list" class="tab-pane fade" role="tabpanel">
                                        <div class="shop-product-list-wrap box-module">
                                            <div class="row">
                                                <div class="col">
                                                    <subcategory-row-list-single-item
                                                        v-for="(subcategory, index) in subcategories"
                                                        :key="index"
                                                        :subcategory="subcategory"
                                                    ></subcategory-row-list-single-item>
                                                
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
</template>

<script>
import SubCategoryRowListSingleItem from "./SubCategoryRowListSingleItem.vue";
export default {
  props: ["categories"],
  components: {
    subcategoryRowListSingleItem: SubCategoryRowListSingleItem
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
