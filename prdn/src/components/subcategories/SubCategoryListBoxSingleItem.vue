<template>
    <router-link :to="subcatLink" tag="li" active-class="active"><a><slot></slot></a></router-link>
</template>


<script>
export default {
  props: ["subcategory"],
  computed: {
    subcatLink() {
      return (
        "/" +
        this.$route.params.resourceName +
        "/" +
        this.$route.params.categoryName +
        "/" +
        this.subcategory
      );
    }
  }
};
</script>


<style>
</style>


