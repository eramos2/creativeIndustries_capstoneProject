<template>
    <router-link :to="subcatLink" tag="li" active-class="active"><a><slot></slot></a></router-link>
</template>


<script>
export default {
  props: ["rKey", "cKey", "subcategoryKey"],
  computed: {
    subcatLink() {
      return "/" + this.rKey + "/" + this.cKey + "/" + this.subcategoryKey;
    }
  }
};
</script>


<style>
</style>


