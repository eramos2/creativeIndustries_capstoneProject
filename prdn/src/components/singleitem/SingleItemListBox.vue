<template>
  <div class="categories-box sidebar-categores-box">
    <div class="secton-title">
      <h2>
        <slot></slot>  {{filterBusinesses}}
      </h2>
    </div>
    <div class="sidebar-categores-inner">
      <div class="">
        <!-- Default unchecked -->
<div class="form-check" v-for="(tag, index) in tags" :key="index" >
    <input type="checkbox" class="form-check-input" :id="tag.name + 'Label'" v-model="tids" :value="tag.id">
    <label class="form-check-label" :for="tag.name + 'Label'">{{tag.name}}</label>
</div>
        <!-- <a v-for="(tag, index) in tags" :key="index">{{tag.name}}</a> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      tids: [],
      selected: ""
    }
  },
  props: ["tagCategory"],
  methods: {
    ...mapActions(["setResources"]),

    filterBusinesses1(){
      let filterBusinesses = this.$store.state.businesses.subcatBusinesses.businesses;
      console.log(filterBusinesses);
      if(this.tids.length > 0){
        filterBusinesses = filterBusinesses.filter(business => {
          this.tids.includes(business.tagId);
        });
      }
      return filterBusinesses;

    }
  },

  beforeMount() {
    this.setResources();
  },
  computed: {
    filterBusinesses(){
      let filterBusinesses = Object.values(this.$store.state.businesses.subcatBusinesses.businesses);
      console.log(filterBusinesses);
      if(this.tids.length > 0){
        filterBusinesses = filterBusinesses.filter(business => {
          this.tids.includes(business.tagId);
        });
      }
      return filterBusinesses;

    },
    tags() {
      console.log("Wowowow");
      console.log(this.tagCategory.tags);
      return this.tagCategory.tags;
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
