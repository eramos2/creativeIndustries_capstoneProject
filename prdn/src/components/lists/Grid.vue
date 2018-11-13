<template>
    <div id="grid" class="tab-pane fade active show" role="tabpanel">
        <div class="shop-product-wrap box-module">
            <div class="row">
                
                <grid-single-item
                    v-for="(subcategory, key) in subcategories"
                    :key="key"
                    :subcategoryKey="key"
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
    /**
     * Returns object containing all available subcategories, it adds the parent category so
     * we can access it later for the route link parameter in the grid single item component
     */
    subcategories: function() {
      var subcategories = [];
      var categories = this.categories;
      for (var category in categories) {
        for (var subCat in categories[category].subcategories) {
          let subcategory = categories[category].subcategories[subCat];
          //Add the subcategory's parent so we can pass it to the router for each individual grid item
          subcategory["category"] = category;
          subcategories.push(subcategory);
        }
      }
      return subcategories;
    },
    categories() {
      //console.log("Inside computed category Grid ");
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
