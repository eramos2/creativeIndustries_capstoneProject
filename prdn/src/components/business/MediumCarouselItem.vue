<template>
    <div class="col-lg-3">
        <!-- sinle-product-item start -->
        <div class="sinle-product-item">
            <div class="product-thumb">
                <router-link 
                  :to="{
                    name: 'singleitemLink', 
                    params: {
                        resourceName: subcat.resName,
                        categoryName: subcat.catName, 
                        subcategoryName: subcat.name
                    }
                  }" 
                  tag="a" 
                  active-class="active"
                  class="product-name"
                >
                  <img alt="" :src="imgUrl" class="primary-image">
                </router-link>
                
                <div class="action-links">
                    <a class="action-btn btn-wishlist" href="#"><i class="ion-android-favorite-outline"></i></a>
                    <!--<a class="action-btn btn-compare" href="#"><i class="ion-arrow-swap"></i></a>-->
                </div>
                <div class="add-to-cart">
                    <a class="btn-cart" href="#"><span> Learn More </span></a>
                </div>
            </div>
            <div class="product-info">
                <router-link 
                  :to="{
                    name: 'singleitemLink', 
                    params: {
                      resourceName: subcat.resName,
                      categoryName: subcat.catName, 
                      subcategoryName: subcat.name
                    }
                  }" 
                  tag="h4" 
                  active-class="active"
                  class="product-name"
                >
                  <!-- @slot Subcategory Name-->
                  <a>{{subcat.name}}</a>
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

/**
 * This component is used to display a business logo and name in the single item(subcategory) component
 */
export default {
  props: ["bKey", "subcategory"],
  computed: {
    subcat() {
      return this.subcategory;
    },
    /**
     * Returns subcategory image url by appending the image id to the google drive folder url
     * @name imgUrl
     */
    imgUrl() {
      return this.$store.state.driveUrl + this.subcat.subcatImage;
    }
  }
};
</script>

<style>
</style>