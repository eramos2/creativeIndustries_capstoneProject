<template>
  <div class="row">
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
                v-for="(carouselItem, key) in carouselItems"
                :key="key"
                :itemKey="key"
                :item="carouselItem"
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
  props: ["carouselItems"],
  components: {
    mediumCarouselItem: MediumCarouselItem
  },
  methods: {
    ...mapActions(["setSubCategoryBusinesses", "setResources"]),
    ...mapGetters(["getBusinesses", "getResources", "getCategorySubCategories"])
  },
  computed: {
    /**
     * Checks if this subcategory's businesses have been set
     * and returns it. Prepares carousel after DOM is updated with nextTick hook.
     *
     * @name subcategoryBusinesses
     * @public
     * @returns {object} - Array containing businesses that offer this subcategory
     */
    subcategoryBusinesses() {
      if ($.isEmptyObject(this.getBusinesses()) == true) {
        console.log("undef");
        console.log($.isEmptyObject(this.getBusinesses()));
        return {};
      } else {
        this.$nextTick(function() {
          // DOM updated
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
        });
        return this.getBusinesses();
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      // DOM updated
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
    });
  }
};
</script>

<style>
.related-products .prodict-two-active .owl-nav button {
  top: -70px;
}
</style>
