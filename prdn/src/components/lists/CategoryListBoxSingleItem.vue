<template>
    <router-link :to="catLink" tag="li" active-class="active"><a><slot></slot></a></router-link>
</template>


<script>
export default {
  props: ["category"],
  computed: {
    catLink() {
      return "/" + this.$route.params.resourceName + "/" + this.category;
    }
  }
};
</script>


<style>
</style>


