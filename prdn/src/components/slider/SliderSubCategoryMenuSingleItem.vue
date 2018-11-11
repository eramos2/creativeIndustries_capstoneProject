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
   *
   * @alias HomePageSubCategoryMenuLink
   *
   * @description Menu entry for a subcategory, Displays subcategory name and contains router link to the subcategory page.
   *
   * @prop {String} rKey - resource Key i.e. materials
   * @prop {String} cKey - category Key i.e. concrete
   * @prop {String} subcategoryKey - subcategory Key i.e. digital concrete
   */
  props: ["rKey", "cKey", "subcategoryKey"]
};
</script>


<style>
</style>


