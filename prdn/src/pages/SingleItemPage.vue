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
