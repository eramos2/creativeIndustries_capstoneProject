<template>
    <div class="row">
                        <div class="col">
                            <div class="related-products box-module mb-60">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="secton-title">
                                            <h2>Featured Businesses</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="prodict-two-active owl-carousel">
                                       <singleitem-business
                                          v-for="(business, key) in businesses"
                                          :key="key"
                                          :bKey="key"
                                          >
                                          </singleitem-business> 
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
</template>

<script>
import SingleItemBusiness from "./SingleItemBusinessesSingleItem.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    singleitemBusiness: SingleItemBusiness
  },
  methods: {
    ...mapActions(["setSubCategoryBusinesses", "setResources"]),
    ...mapGetters(["getBusinesses", "getResources", "getCategorySubCategories"])
  },
  computed: {
    businesses() {
      console.log("inside computed businesses in SingleItembusinesses.vue");
      console.log(this.getBusinesses());
      console.log(this.$store.state.businesses);
      return this.getBusinesses();
    }
  },
  mounted() {
    console.log("This is a Test");
    this.setResources();
    let rKey = this.$route.params.resourceName;
    let cKey = this.$route.params.categoryName;
    let sbKey = this.$route.params.subcategoryName;
    let payload = { rK: rKey, cK: cKey };
    let categories = this.$store.state.resources.resources[rKey].categories;
    console.log(categories);
    console.log(this.$store.state.resources.resources[rKey].categories[cKey]);
    let subcategories = this.$store.state.resources.resources[rKey].categories[
      cKey
    ].subcategories;
    let subcategoryId = subcategories[sbKey].id;
    console.log(subcategoryId);
    // console.log(rKey + " " + cKey + " " + sbKey);
    // console.log(this.$store.state.resources.resources[rKey].categories['concrete']);
    // console.log(categories[cKey]);
    // console.log(subcategories[sbKey]);
    //console.log(subcategoryId);

    this.setSubCategoryBusinesses({ rK: rKey, scId: subcategoryId });
    // window.addEventListener("load", function(event) {
    //   console.log("inside listener");
    //   $(".prodict-two-active").owlCarousel({
    //     loop: true,
    //     items: 4,
    //     dots: false,
    //     lazyLoad: true,
    //     nav: true,
    //     navText: [
    //       '<i class="fa fa-angle-left"></i>',
    //       '<i class="fa fa-angle-right"></i>'
    //     ],
    //     responsive: {
    //       0: { items: 1 },
    //       480: { items: 2 },
    //       768: { items: 3 },
    //       992: { items: 4 },
    //       1200: { items: 5 }
    //     }
    //   });
    // });
    $(".prodict-two-active").owlCarousel({
      loop: true,
      items: 4,
      dots: false,
      lazyLoad: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
        1200: { items: 5 }
      }
    });
  }
};
</script>

<style>
.related-products .prodict-two-active .owl-nav button {
  top: -70px;
}
</style>
