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
    console.log("This is a Test");
    //this.setResources();
    let rKey = this.$route.params.resourceName;
    let scKey = this.$route.params.subcategoryName;
    let payload = { rK: rKey, scK: scKey };

    //this.setSubCategoryBusinesses(payload);
  }
};
</script>

<style>
.related-products .prodict-two-active .owl-nav button {
  top: -70px;
}
</style>
