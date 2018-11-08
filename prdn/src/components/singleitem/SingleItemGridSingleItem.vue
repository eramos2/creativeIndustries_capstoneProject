<template>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="sinle-product-item mb-20">
            <div class="product-thumb">
                <a href="single-product.html">
                    <img alt="" src="img/product/3.jpg" class="primary-image">
                </a>
                <div class="action-links">
                    <a href="#" class="action-btn btn-wishlist"><i class="ion-android-favorite-outline"></i></a>
                    <!--<a href="#" class="action-btn btn-compare"><i class="ion-arrow-swap"></i></a>
                    <a href="#" data-target="#exampleModalCenter" data-toggle="modal" class="action-btn btn-quickview"><i class="ion ion-ios-eye"></i></a>-->
                </div>
                <div class="add-to-cart">
                    <a href="#" class="btn-cart"><span> Learn More </span></a>
                </div>
            </div>
            <div class="product-info"><!--
                <div class="rating-box">
                    <ul class="rating d-flex">
                        <li><i class="ion-ios-star"></i></li>
                        <li><i class="ion-ios-star"></i></li>
                        <li><i class="ion-ios-star"></i></li>
                        <li><i class="ion-ios-star"></i></li>
                        <li><i class="ion-android-star-outline"></i></li>
                    </ul>
                </div>-->
                <h4 class="product-name"><a href="single-product.html">{{subcategory.name}}</a></h4>
                <!--<div class="price-box">
                    <span class="new-price">$98.00</span>
                </div>-->
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
