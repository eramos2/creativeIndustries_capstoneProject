<template>
    <router-link :to="resourceKey" tag="li" active-class="active" exact><a><slot></slot>
    <span><i class="fa fa-angle-right"></i></span></a>
    <ul class="right-mega-menu">

        <sub-category-menu
            v-for="(category, key) in resource.categories"
            :key="key"
            :cKey="key | addWhitespace"
            :rKey="resourceKey | addWhitespace" 
            :category="category"
        >
            {{category.name }}
        </sub-category-menu>
       
    </ul>
    
    </router-link>
   <!-- <li><a href="#"><slot></slot> <span><i class="fa fa-angle-right"></i></span></a>
    <ul class="right-mega-menu">

        <sub-category-menu
            v-for="(category, key) in resource.categories"
            :key="key"
            :cKey="key"
            :rKey="resourceKey" 
            :category="category"
        >
            {{category.name}}
        </sub-category-menu>
       
    </ul>
</li>-->

</template>

<script>
import SliderSubCategoryMenu from "./SliderSubCategoryMenu.vue";
import { mapGetters } from "vuex";
export default {
  props: ["resourceKey", "resource"],
  components: {
    subCategoryMenu: SliderSubCategoryMenu
  },
  computed: {
    resourceCategories: function() {
      console.log("Inside computed before getResourceCategories");
      console.log(this.$store.state.resources[this.resourceKey]);
      return this.$store.state.resources[this.resourceKey];
    }
  },
  methods: {
    ...mapGetters(["getResourceCategories"])
  }
};
</script>

<style>
</style>

