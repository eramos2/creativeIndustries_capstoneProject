<template>
  <div class="categories-box sidebar-categores-box">
    <div class="secton-title">
      <h2>
        <slot></slot>
      </h2>
    </div>
    <div class="sidebar-categores-inner">
      <div class>
        <!-- Default unchecked -->
        <div class="form-check" v-for="(tag, index) in tags" :key="index">
          <input
            type="checkbox"
            class="form-check-input"
            :id="tag.name + 'Label'"
            v-model="tids"
            @change="localFilter()"
            :value="tag.id"
          >
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
      selected: "",
      tids: []
    };
  },
  props: ["tagCategory"],
  methods: {
    ...mapActions(["setResources"]),
    localFilter() {
      let subcatBusinesses = Object.values(
        this.$store.state.businesses.subcatBusinesses.businesses
      );
      let localFilter = Object.values(
        this.$store.state.businesses.subcatBusinesses.businesses
      );

      //console.log(subcatBusinesses);
      // console.log(localFilter);
      // console.log(this.tids.length > 0);
      if (this.tids.length > 0) {
        // console.log("entered if in filter");
        localFilter = subcatBusinesses.filter(business => {
          // console.log(business);
          // console.log(this.tids);
          // console.log(this.tids.includes(business.tagId));
          if (typeof business.tags != "undefined") {
            for (let tag of Object.values(business.tags)) {
              if (this.tids.includes(tag.tagId)) {
                return business;
              }
            }
          }
        });
        let filterBusiness = this.$store.state.businesses.subcatBusinesses
          .filterBusinesses;
        console.log(typeof filterBusiness);
        if (typeof filterBusiness === "undefined") {
          console.log("filter business is undefined");
          console.log(localFilter);
          this.$store.state.businesses.subcatBusinesses.filterBusinesses = Object.assign(
            {},
            localFilter
          );
        } else {
          console.log("filter business is not undefined");
          let filterB = Object.values(
            this.$store.state.businesses.subcatBusinesses.filterBusinesses
          );
          console.log("this is filterB");
          console.log(filterB);
          let notLocal;
          notLocal = filterB.filter(business => {
            console.log("index of business");
            console.log(localFilter.indexOf(business));
            if (localFilter.indexOf(business) >= 0) {
              console.log("business in filterB is part of local filter");
              console.log(business);
              console.log(true);
            } else {
              console.log("business in filterB is not part of local filter");
              console.log(business);
              console.log(false);
              return business;
            }
          });

          console.log(notLocal);
        }
      }
      //No tags selected of this category
      else {
        console.log("Entered Else in filter");
        if (
          typeof this.$store.state.businesses.subcatBusinesses
            .filterBusinesses != "undefined"
        ) {
        }
        //Check that no tags from this category are on the filtered business array
        localFilter = localFilter.filter(business => {
          let tagArr = Object.values(this.tagCategory.tags);
          console.log(business);
          console.log(this.tags);
          console.log(tagArr);
          if (typeof business.tags != "undefined") {
            for (let tag of Object.values(business.tags)) {
              if (!tagArr.includes(tag.tagId)) {
                console.log("returning business in else ");
                console.log(business);
                console.log(tagArr);
                return business;
              }
            }
          }
        });
      }
      // console.log(localFilter);

      // this.$store.state.businesses.subcatBusinesses.filterBusinesses = Object.assign(
      //   {},
      //   localFilter
      // );
      // console.log(localFilter);
      // console.log(
      //   this.$store.state.businesses.subcatBusinesses.filterBusinesses
      // );
      //return filterBusinesses;
    },

    filterBusinesses() {
      let filterBusinesses = Object.values(
        this.$store.state.businesses.subcatBusinesses.businesses
      );
      console.log(filterBusinesses);
      console.log(this.tids.length > 0);
      if (this.tids.length > 0) {
        filterBusinesses = filterBusinesses.filter(business => {
          console.log(business);
          console.log(this.tids);
          console.log(this.tids.includes(business.tagId));
          if (typeof business.tags != "undefined") {
            for (let tag of Object.values(business.tags)) {
              if (this.tids.includes(tag.tagId)) {
                return business;
              }
            }
          }
        });
      }
      console.log(filterBusinesses);
      return filterBusinesses;
    }
  },

  beforeMount() {
    this.setResources();
  },
  watch: {},
  computed: {
    business() {
      let filterBusinesses = Object.values(
        this.$store.state.businesses.subcatBusinesses.businesses
      );
      console.log(filterBusinesses);
      console.log(this.tids.length > 0);
      if (this.tids.length > 0) {
        filterBusinesses = filterBusinesses.filter(business => {
          console.log(business);
          console.log(this.tids);
          console.log(this.tids.includes(business.tagId));
          if (typeof business.tags != "undefined") {
            for (let tag of Object.values(business.tags)) {
              if (this.tids.includes(tag.tagId)) {
                return business;
              }
            }
          }
        });
      }
      console.log(filterBusinesses);
      return filterBusinesses;
    },
    filterBusinesses1() {
      let filterBusinesses = Object.values(
        this.$store.state.businesses.subcatBusinesses.businesses
      );
      console.log(filterBusinesses);
      if (this.tids.length > 0) {
        filterBusinesses = filterBusinesses.filter(business => {
          console.log(business);
          console.log(this.tids);
          console.log(this.tids.includes(business.tagId));
          if (typeof business.tags != "undefined") {
            for (let tag of Object.values(business.tags)) {
              if (this.tids.includes(tag.tagId)) {
                return business;
              }
            }
          }
        });
      }
      console.log(filterBusinesses);
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
