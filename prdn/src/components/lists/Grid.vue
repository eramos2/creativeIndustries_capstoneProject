<template>
    <div id="grid" class="tab-pane fade active show" role="tabpanel">
        <div class="shop-product-wrap box-module">
            <div class="row">
                
                <grid-single-item
                    v-for="(subcategory, index) in subcategories"
                    :key="index"
                    :subcategory="subcategory"   
                >
                </grid-single-item>
               
            </div>
        </div>
    </div>
</template>

<script>
import GridSingleItem from "./GridSingleItem.vue";
export default {
  components: {
    gridSingleItem: GridSingleItem
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
