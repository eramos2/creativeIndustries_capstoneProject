<template>
  <div class="row product-layout-list">
    <div class="col-lg-5 col-md-5">
      <!-- sinle-product-item start -->
      <div class="sinle-product-item">
        <div class="product-thumb">
          <a href="single-product.html">
            <img alt src="img/product/10.jpg" class="primary-image">
            <img alt src="img/product/9.jpg" class="secondary-image">
          </a>
          <div class="action-links">
            <a href="#" class="action-btn btn-wishlist">
              <i class="ion-android-favorite-outline"></i>
            </a>
            <!--<a href="#" class="action-btn btn-compare"><i class="ion-arrow-swap"></i></a>
            <a href="#" data-target="#exampleModalCenter" data-toggle="modal" class="action-btn btn-quickview"><i class="ion ion-ios-eye"></i></a>-->
          </div>
        </div>
      </div>
      <!-- sinle-product-item end -->
    </div>
    <div class="col-lg-7 col-md-7">
      <div class="product-info">
        <!--<div class="rating-box">
                    <ul class="rating d-flex">
                        <li><i class="ion-ios-star"></i></li>
                        <li><i class="ion-ios-star"></i></li>
                        <li><i class="ion-ios-star"></i></li>
                        <li><i class="ion-ios-star"></i></li>
                        <li><i class="ion-android-star-outline"></i></li>
                    </ul>
        </div>-->
        <h4 class="product-name">
          <a href="single-product.html">{{subcategory.name}}</a>
        </h4>
        <!--<div class="price-box">
                    <span class="new-price">$224.00</span>
        </div>-->
        <!-- <p class="product-des">Imagine the advantages of going big without slowing down. The big 19" 941BW monitor combines wide aspect ratio with fast pixel response time, for bigger images, more room to work and crisp motion..</p> -->
        <button class="list-btn-cart">
          <span>Learn More</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["subcategory"]
};
</script>

<style>
</style>
