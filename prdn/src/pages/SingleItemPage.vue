<template>
<div>
    <breadcrumbs>
    </breadcrumbs>
    <singleitem-list></singleitem-list>
    </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
import SingleItemList from "../components/singleitem/SingleItemList.vue";
import { mapActions } from "vuex";

export default {
  components: {
    breadcrumbs: Breadcrumbs,
    singleitemList: SingleItemList
  },
  methods: {
    ...mapActions(["setResources", "setSubCategoryBusinesses"])
  },
  mounted() {
    //console.log("Inside mount of categoriespage");
    let rKey = this.$route.params.resourceName;
    let scKey = this.$route.params.subcategoryName;
    let payload = { rK: rKey, scK: scKey };
    //this.setResources();
    //this.setSubCategoryBusinesses(payload);
  }
};
</script>

<style>
</style>
