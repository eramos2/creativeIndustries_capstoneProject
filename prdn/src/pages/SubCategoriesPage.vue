<template>
<div>
    <breadcrumbs>
    </breadcrumbs>
    <subcategory-list></subcategory-list>
    </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
import SubCategoryList from "../components/subcategories/SubCategoryList.vue";
import { mapActions } from "vuex";

export default {
  components: {
    breadcrumbs: Breadcrumbs,
    subcategoryList: SubCategoryList
  },
  methods: {
    ...mapActions(["setResources"])
  },
  mounted() {
    console.log("Inside mount of subcategoriespage");
    this.setResources();
  }
};
</script>

<style>
</style>
