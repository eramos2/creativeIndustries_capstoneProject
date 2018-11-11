<template>
    <div class="col-lg-3">
        <!-- sinle-product-item start -->
        <div class="sinle-product-item">
            <div class="product-thumb">
                <a href="single-product.html" >
                    <img class="primary-image" src="img/product/11.jpg" alt="">
                </a>
                <div class="action-links">
                    <a class="action-btn btn-wishlist" href="#"><i class="ion-android-favorite-outline"></i></a>
                    <!--<a class="action-btn btn-compare" href="#"><i class="ion-arrow-swap"></i></a>-->
                </div>
                <div class="add-to-cart">
                    <a class="btn-cart" href="#"><span> Learn More </span></a>
                </div>
            </div>
            <div class="product-info">
                <!--<div class="rating-box">
                    <ul class="rating d-flex">
                        <li><i class="ion-ios-star"></i></li>
                        <li><i class="ion-ios-star"></i></li>
                        <li><i class="ion-ios-star"></i></li>
                        <li><i class="ion-android-star-outline"></i></li>
                        <li><i class="ion-android-star-outline"></i></li>
                    </ul>
                </div>-->
                <router-link 
                  :to="{
                    name: 'businessLink', 
                    params: {
                      businessName: businessName
                    }
                  }" 
                  tag="h4" 
                  active-class="active"
                  class="product-name"
                >
                  <!-- @slot Subcategory Name-->
                  <a>{{businessName}}</a>
                </router-link>
                <!--<h4 class="product-name"><a href="single-product.html">{{businessName}}</a></h4>-->
                <!--<div class="price-box">
                    <span class="new-price">$116.00</span>
                </div>-->
            </div>
        </div>
        <!-- sinle-product-item end -->
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["bKey", "business"],
  methods: {
    ...mapGetters(["getBusinesses"])
  },
  computed: {
    businessName() {
      console.log("computed business SingleItemBusinessesSingleItem.vue");
      console.log(this.business);
      let businesses = this.$store.state.businesses;
      if (typeof this.business === "undefined") {
        console.log("undef");
        return "";
      } else {
        return this.business.companyName;
      }
    }
  }
};
</script>

<style>
</style>
