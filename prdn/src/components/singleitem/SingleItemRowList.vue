<template>
    <div id="list" class="tab-pane fade" role="tabpanel">
                                        <div class="shop-product-list-wrap box-module">
                                            <div class="row">
                                                <div class="col">
                                                    <singleitem-row-list-single-item
                                                        v-for="(subcategory, index) in subcategories"
                                                        :key="index"
                                                        :subcategory="subcategory"
                                                    ></singleitem-row-list-single-item>
                                                
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
</template>

<script>
import SingleItemRowListSingleItem from "./SingleItemRowListSingleItem.vue";
export default {
  props: ["categories"],
  components: {
    singleitemRowListSingleItem: SingleItemRowListSingleItem
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
    }
  }
};
</script>

<style>
</style>
