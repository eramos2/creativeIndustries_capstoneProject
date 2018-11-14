<template>
    <router-link :to="crumbLink" tag="li" active-class="active" :class="crumbClass"><a><slot></slot></a></router-link>
</template>

<script>
export default {
  props: ["crumb"],
  data: function() {
    return {
      routeParms: {}
    };
  },
  computed: {
    crumbLink() {
      //console.log("Inside BreadcrumbLink");
      //console.log(this.crumb);
      //console.log(this.$route.params);
      let lnk = "";
      if (this.$route.params.resourceName === this.crumb) {
        this.routeParms["resourceName"] = this.$route.params.resourceName;
      }
      if (this.$route.params.categoryName === this.crumb) {
        this.routeParms["resourceName"] = this.$route.params.resourceName;
        this.routeParms["categoryName"] = this.$route.params.categoryName;
      }
      if (this.$route.params.subcategoryName === this.crumb) {
        this.routeParms["resourceName"] = this.$route.params.resourceName;
        this.routeParms["categoryName"] = this.$route.params.categoryName;
        this.routeParms["subcategoryName"] = this.$route.params.subcategoryName;
      }
      if (typeof this.routeParms.subcategoryName !== "undefined") {
        lnk = lnk + "/" + this.routeParms["resourceName"];
        lnk = lnk + "/" + this.routeParms["categoryName"];
        lnk = lnk + "/" + this.routeParms["subcategoryName"];
      } else if (typeof this.routeParms.categoryName !== "undefined") {
        lnk = lnk + "/" + this.routeParms["resourceName"];
        lnk = lnk + "/" + this.routeParms["categoryName"];
      } else if (typeof this.routeParms.resourceName !== "undefined") {
        lnk = lnk + "/" + this.routeParms["resourceName"];
      }

      //console.log(this.routeParms);
      return lnk;
    },
    crumbClass() {
      return "breadcrumb-item";
    }
  }
};
</script>

<style>
</style>
