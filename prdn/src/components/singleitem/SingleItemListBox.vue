<template>
    <div class="categories-box sidebar-categores-box">
        <div class="secton-title">
            <h2><slot></slot></h2>
        </div>
        <div class="sidebar-categores-inner">
            <div class="filter-group">
                <a 
                    href="#"
                    v-for="(tag, index) in tags"
                    :key="index"
                >   
                {{tag[0]}}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["setResources"])
  },
  beforeMount() {
    this.setResources();
  },
  computed: {
    tags() {
      //console.log("Inside computed category ListBox ");
      //return this.getResources();
      //return this.$store.getters.getResourceCategories(this.$route.params.resourceName);
      let tags = {
          applications: ["Cavity Filling", "Insulation", "Soil Stabilization"],
          cost: ["High", "Moderate", "Low"],
          qualities: ["Clear", "Opaque", "Vivid Colors"] 
      };
      return tags;
    },
    subcategoryName() {
      let rKey = this.$route.params.resourceName;
      let cKey = this.$route.params.categoryName;
      //console.log("before let");
      //console.log(rKey);
      //console.log(cKey);
      //console.log(this.$store.getters.getCategorySubCategories({cK: cKey,rK: rKey}));
      let subcategories = this.$store.getters.getCategorySubCategories({
        cK: cKey,
        rK: rKey
      });
      //console.log("after let");
      //console.log(subcategories);
      //console.log(this.$route.params.subcategoryName);
      if (Object.keys(subcategories).length === 0) {
        return "";
      } else {
        return subcategories[this.$route.params.subcategoryName].name;
      }
    }
  }
};
</script>

<style>
</style>
