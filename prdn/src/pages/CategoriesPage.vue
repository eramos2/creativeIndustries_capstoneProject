<template>
<div>
    <breadcrumbs>
    </breadcrumbs>
    <category-list></category-list>
    </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
import CategoryList from "../components/lists/CategoryList.vue";
import { mapActions } from "vuex";

export default {
  components: {
    breadcrumbs: Breadcrumbs,
    categoryList: CategoryList
  },
  methods: {
    ...mapActions(["setResources"])
  },
  mounted() {
    console.log("Inside mount of categoriespage");
    this.setResources();
  }
};
</script>

<style>
</style>
