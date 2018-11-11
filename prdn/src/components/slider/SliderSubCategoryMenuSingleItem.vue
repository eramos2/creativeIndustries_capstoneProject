<template>
    <router-link 
      :to="{
        name: 'singleitemLink', 
        params: {
          resourceName: rKey,
          categoryName: cKey,
          subcategoryName: this.subcategoryKey
        }
      }" 
      tag="li" 
      active-class="active"
    >
      <!-- @slot Subcategory Name-->
      <a><slot></slot></a>
    </router-link>
</template>


<script>
export default {
  /**
   * Home page menu entry for a subcategory.
   */
  props: {
    /**
     * Resource key i.e. materials
     */
    rKey: {
      type: String,
      default: ""
    },
    /**
     * Category Key i.e. concrete
     */
    cKey: {
      type: String,
      default: ""
    },
    /**
     * Subcategory Key i.e. digital concrete
     */
    subcategoryKey: {
      type: String,
      default: ""
    }
  }
};
</script>


<style>
</style>


