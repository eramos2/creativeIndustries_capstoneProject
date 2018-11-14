<template>
  <div class="row" v-if="anySubcategory">
    <div class="col">
        <div class="related-products box-module mb-60">
          <div class="row">
            <div class="col-lg-12">
              <div class="secton-title">
                <!-- @slot Carousel Title Header -->
                <h2><slot></slot></h2>
              </div>
            </div>
          </div>
          <div class="row">
            <!--  Carousel  -->
            <div class="prodict-two-active owl-carousel">
              <!-- Carousel Items -->
              <medium-carousel-item
                v-for="(subcat, key) in businessSubcategories"
                :key="key"
                :subcategory="subcat"
              >
              </medium-carousel-item> 
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import MediumCarouselItem from "./MediumCarouselItem.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "MediumCarousel",
  data() {
    return { curBus: "" };
  },
  beforeMount() {},
  components: {
    mediumCarouselItem: MediumCarouselItem
  },
  methods: {
    ...mapActions(["setSubCategoryBusinesses", "setResources"]),
    ...mapGetters([
      "getBusinesses",
      "getCurrentBusiness",
      "getCategorySubCategories",
      "getCurrentBusinessSubCategories"
    ]),
    startCarousel() {
      this.$nextTick(function() {
        // DOM updated
        //Remove any previous existing carousel
        $(".prodict-two-active").owlCarousel("destroy");

        //Start Carousel
        $(".prodict-two-active").owlCarousel({
          loop: false,
          margin: 10,
          items: 5,
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
      });
    }
  },
  computed: {
    anySubcategory() {
      if ($.isEmptyObject(this.getCurrentBusiness().subcategories)) {
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
    businessSubcategories() {
      //$(".prodict-two-active").owlCarousel("destroy");
      console.log("currentBusiness");
      //console.log(this.curBus !== this.$route.params.businessName);
      // if (this.curBus !== this.$route.params.businessName) {
      //   console.log("This is curBus " + this.curBus);
      //   console.log("This is businessNam " + this.$route.params.businessName);
      //   $(".prodict-two-activeds").owlCarousel("destroy");

      //   this.curBus = this.$route.params.businessName;
      // }
      if ($.isEmptyObject(this.getCurrentBusiness().subcategories) == true) {
        console.log("undef");
        console.log($.isEmptyObject(this.getCurrentBusiness().subcategories));
        return {};
      } else {
        this.$nextTick(function() {
          console.log("Entered next tick in single item business");
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
        });
      }

      console.log("Curren Subcategories");
      console.log(this.getCurrentBusinessSubCategories());
      return this.getCurrentBusinessSubCategories();
    }
  }
};
</script>

<style>
.related-products .prodict-two-active .owl-nav button {
  top: -70px;
}
</style>
