<template>
    <div class="categories-box sidebar-categores-box">
        <div class="secton-title">
            <h2>Categories</h2>
        </div>
        <div class="sidebar-categores-inner">
            <div class="filter-group">
                <a 
                    href="#"
                    v-for="(category, index) in categories"
                    :key="index"
                >   
                {{category.name}}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
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
