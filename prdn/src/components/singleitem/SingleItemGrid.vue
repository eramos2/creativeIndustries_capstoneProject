<template>
    <div id="grid" class="tab-pane fade active show" role="tabpanel">
        <div class="shop-product-wrap box-module">
            <div class="row">
                
                <singleitem-grid-single-item
                    v-for="(subcategory, index) in subcategories"
                    :key="index"
                    :subcategory="subcategory"   
                >
                </singleitem-grid-single-item>
               
            </div>
        </div>
    </div>
</template>

<script>
import SingleItemGridSingleItem from "./SingleItemGridSingleItem.vue";
export default {
  components: {
    singleitemGridSingleItem: SingleItemGridSingleItem
  },
  computed: {
    subcategories: function() {
      var subcategories = [];
      var categories = this.categories;
      for (var category in categories) {
        for (var subCat in categories[category].subcategories) {
          subcategories.push(categories[category].subcategories[subCat]);
        }
      }
      return subcategories;
    },
    categories() {
      console.log("Inside computed category ListBox ");
      //return this.getResources();
      return this.$store.getters.getResourceCategories(
        this.$route.params.resourceName
      );
    }
  }
};
</script>

<style>
</style>
