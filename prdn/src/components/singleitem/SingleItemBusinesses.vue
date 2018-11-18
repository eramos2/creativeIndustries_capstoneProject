<template>
  <div class="row" v-if="anyBusiness">
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
            <!-- Featured Businesses Carousel  -->
            <div class="prodict-two-active owl-carousel">
              <singleitem-business
                v-for="(business, key) in subcategoryBusinesses"
                :key="key"
                :bKey="key"
                :business="business"
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
  name: "SingleItemBusinesses",
  components: {
    singleitemBusiness: SingleItemBusiness
  },
  beforeMount() {
    let rKey = this.$route.params.resourceName;
    let scKey = this.$route.params.subcategoryName;
    let payload = { rK: rKey, scK: scKey };
    //console.log("beforeMOunt this is the payload:");
    //console.log(payload);
    //this.setResources();
    this.setSubCategoryBusinesses(payload);
  },
  methods: {
    ...mapActions(["setSubCategoryBusinesses", "setResources"]),
    ...mapGetters(["getBusinesses", "getResources", "getCategorySubCategories"])
  },
  computed: {
    anyBusiness() {
      if ($.isEmptyObject(this.getBusinesses())) {
        return false;
      } else {
        return true;
      }
    },
    /**
     * Checks if this subcategory's businesses have been set
     * and returns it. Prepares carousel after DOM is updated with nextTick hook.
     *
     * @name subcategoryBusinesses
     * @public
     * @returns {object} - Array containing businesses that offer this subcategory
     */
    subcategoryBusinesses() {
      //console.log("Entered subcategoryBusiness in Singleitembusiness");
      if ($.isEmptyObject(this.getBusinesses()) == true) {
        //console.log("undef");
        //console.log($.isEmptyObject(this.getBusinesses()));
        //console.log(this.getBusinesses());
        return {};
      } else {
        this.$nextTick(function() {
          //console.log("Entered next tick in single item business");
          //console.log(this.getBusinesses());
          var $owl = $(".prodict-two-active");
          $owl.trigger("destroy.owl.carousel");
          // After destory, the markup is still not the same with the initial.
          // The differences are:
          //   1. The initial content was wrapped by a 'div.owl-stage-outer';
          //   2. The '.owl-carousel' itself has an '.owl-loaded' class attached;
          //   We have to remove that before the new initialization.
          $owl
            .html($owl.find(".owl-stage-outer").html())
            .removeClass("owl-loaded");
          $owl.owlCarousel({
            // your initial option here, again.
            loop: false,
            margin: 10,
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
          // When DOM updated
          //Remove any previous existing carousel
          //$(".prodict-two-active").owlCarousel("destroy");
          //Start Carousel
          // $(".prodict-two-active").owlCarousel({
          //   loop: false,
          //   margin: 10,
          //   items: 4,
          //   dots: false,
          //   lazyLoad: true,
          //   nav: true,
          //   navText: [
          //     '<i class="fa fa-angle-left"></i>',
          //     '<i class="fa fa-angle-right"></i>'
          //   ],
          //   responsive: {
          //     0: { items: 1 },
          //     480: { items: 2 },
          //     768: { items: 3 },
          //     992: { items: 4 },
          //     1200: { items: 5 }
          //   }
          // });
        });
        return this.getBusinesses();
      }
    }
  }
};
</script>

<style>
.related-products .prodict-two-active .owl-nav button {
  top: -70px;
}
</style>
