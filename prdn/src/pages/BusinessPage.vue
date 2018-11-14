<template>
<div :key="curBusiness">
    <!--<breadcrumbs></breadcrumbs>-->
    <div class="content-wraper bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="sinlge-product-wrap box-module">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="single-product-tab">
                                            <div class="zoomWrapper">
                                                <div id="img-1" class="zoomWrapper single-zoom">
                                                    <a href="#">
                                                        <img id="zoom1" src="img/product/larg-1.jpg" data-zoom-image="img/product/larg-1.jpg" alt="big-1">
                                                    </a>
                                                </div>
                                                <div class="single-zoom-thumb">
                                                    <ul class="s-tab-zoom single-product-active owl-carousel" id="gallery_01">
                                                        <li>
                                                            <a href="#" class="elevatezoom-gallery active" data-update="" data-image="img/product/larg-1.jpg" data-zoom-image="img/product/larg-1.jpg"><img src="img/product/larg-1.jpg" alt="zo-th-1"/></a>
                                                        </li>
                                                        <li class="">
                                                            <a href="#" class="elevatezoom-gallery" data-image="img/product/larg-2.jpg" data-zoom-image="img/product/larg-2.jpg"><img src="img/product/larg-2.jpg" alt="zo-th-2"></a>
                                                        </li>
                                                        <li class="">
                                                            <a href="#" class="elevatezoom-gallery" data-image="img/product/larg-3.jpg" data-zoom-image="img/product/larg-3.jpg"><img src="img/product/larg-3.jpg" alt="ex-big-3" /></a>
                                                        </li>
                                                        <li class="">
                                                            <a href="#" class="elevatezoom-gallery" data-image="img/product/larg-4.jpg" data-zoom-image="img/product/larg-4.jpg"><img src="img/product/larg-4.jpg" alt="zo-th-4"></a>
                                                        </li>
                                                        <li class="">
                                                            <a href="#" class="elevatezoom-gallery" data-image="img/product/larg-5.jpg" data-zoom-image="img/product/larg-5.jpg"><img src="img/product/larg-5.jpg" alt="zo-th-5"></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-lg-6">
                                        <!-- product-thumbnail-content start -->
                                        <div class="quick-view-content">
                                            <div class="product-info">
                                                <h2>{{currentBusiness.companyName}}</h2>
                                                <!--<div class="rating-box">
                                                    <ul class="rating d-flex">
                                                        <li><i class="ion-ios-star"></i></li>
                                                        <li><i class="ion-ios-star"></i></li>
                                                        <li><i class="ion-ios-star"></i></li>
                                                        <li><i class="ion-android-star-outline"></i></li>
                                                        <li><i class="ion-android-star-outline"></i></li>
                                                    </ul>
                                                </div>-->
                                                <!--<div class="price-box">
                                                   <span class="new-price">$25.50</span>
                                                   <span class="old-price">$30.50</span>
                                               </div>-->
                                               <ul class="list-unstyled">
                                                    <li>Telephone: <a href="#">{{currentBusiness.phone}}</a></li>
                                                    <li>Website: <a href="#">{{currentBusiness.website}}</a></li>
                                                    <li>E-mail: {{currentBusiness.email}}</li>
                                                    <li>Address: {{currentBusiness.line}} {{currentBusiness.city}}, PR {{currentBusiness.zipcode}}</li>
                                                    <li>Description:  {{currentBusiness.description}}</li>
                                                </ul>
                                                <!--
                                               <div class="quick-add-to-cart">
                                                    <form class="modal-cart">
                                                        <div class="quantity">
                                                            <label>Quantity</label>
                                                            <div class="cart-plus-minus">
                                                                <input type="number" value="1" min="0" step="1" class="input-box">
                                                            </div>
                                                        </div>
                                                        <button class="add-to-cart" type="submit">Add to cart</button>
                                                        <ul class="wishlist-compare-btn">
                                                            <li><a class="wishlist" href="#"><i class="ion-heart"></i>Add to Wish List</a></li>
                                                            <li><a class="compare" href="#"><i class="ion-arrow-swap"></i> Compare this Product</a></li>
                                                        </ul>
                                                    </form>
                                               </div>-->
                                            </div>
                                        </div>
                                        <!-- product-thumbnail-content end -->
                                    </div>
                                </div><!--
                                <div class="row">
                                    <div class="col">
                                        <div class="product-info-detailed">
                                            <div class="discription-tab-menu">
                                                <ul role="tablist" class="nav">
                                                    <li class="active"><a href="#description" data-toggle="tab" class="active show">Description</a></li>
                                                    <li><a href="#review" data-toggle="tab">Reviews (1)</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="discription-content">
                                            <div class="tab-content">
                                                <div class="tab-pane fade in active show" id="description">
                                                    <div class="description-content">
                                                        <p>iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automatically syncs all your contacts from a PC, Mac, or Internet service. And it lets you select and listen to voicemail messages in whatever order you want just like email.</p>
                                                    </div>
                                                </div>
                                                <div id="review" class="tab-pane fade">
                                                    <form class="form-review">
							                            <div class="review">
                                                            <table class="table table-striped table-bordered table-responsive">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="table-name"><strong>Palora Themes</strong></td>
                                                                        <td class="text-right">08/05/2018</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <p>It’s both good and bad. If Nikon had achieved a high-quality wide lens camera with a 1 inch sensor, that would have been a very competitive product. So in that sense, it’s good for us. But actually, from the perspective of driving the 1 inch sensor market, we want to stimulate this market and that means multiple manufacturers.</p>    
                                                                            <ul>
                                                                                <li><i class="fa fa-star-o"></i></li>
                                                                                <li><i class="fa fa-star-o"></i></li>
                                                                                <li><i class="fa fa-star-o"></i></li>
                                                                                <li><i class="fa fa-star-o"></i></li>
                                                                                <li><i class="fa fa-star-o"></i></li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="review-wrap">
                                                            <h2>Write a review</h2>
                                                            <div class="form-group row">
                                                                <div class="col">
                                                                    <label class="control-label">Your Name</label>
                                                                    <input type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <div class="col">
                                                                    <label class="control-label">Your Review</label>
                                                                    <textarea class="form-control"></textarea>
                                                                    <div class="help-block"><span class="text-danger">Note:</span> HTML is not translated!</div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <div class="col">
                                                                    <label class="control-label">Rating</label>
                                                                    &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                                                    <input type="radio" value="1" name="rating">
                                                                    &nbsp;
                                                                    <input type="radio" value="2" name="rating">
                                                                    &nbsp;
                                                                    <input type="radio" value="3" name="rating">
                                                                    &nbsp;
                                                                    <input type="radio" value="4" name="rating">
                                                                    &nbsp;
                                                                    <input type="radio" value="5" name="rating">
                                                                    &nbsp;Good
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="buttons clearfix">
                                                            <div class="pull-right">
                                                                <button class="button-review"   type="button">Continue</button>
                                                            </div>
                                                        </div>
													</form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>-->
                            </div>
                        </div>
                    </div>

                    <medium-carousel
                      :key="curBusiness"
                    >
                        All Resources
                    </medium-carousel>

                </div>
            </div>
</div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
import MediumCarousel from "../components/business/MediumCarousel.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    breadcrumbs: Breadcrumbs,
    mediumCarousel: MediumCarousel
  },
  data() {
    return {
      curBusiness: this.$route.params.businessName.toLowerCase()
    };
  },
  methods: {
    ...mapActions(["setResources", "setCurrentBusiness"]),
    ...mapGetters(["getCurrentBusiness"])
  },
  computed: {
    currentBusiness() {
      return this.getCurrentBusiness();
    },
    currentBusinessSubcategories() {
      let subcategories = [];

      for (subcategory in this.getCurrentBusiness().submaterials) {
        resources.push(resource);
      }
    }
  },
  beforeMount() {
    let businessName = this.$route.params.businessName;
    console.log(businessName);
    this.setCurrentBusiness(businessName);
  },
  mounted() {
    console.log("Inside mount of Businesspage");
    //this.setResources();

    $(".single-product-active").owlCarousel({
      loop: false,
      items: 4,
      margin: 15,
      dots: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ],
      responsive: {
        0: { items: 2 },
        480: { items: 3 },
        768: { items: 4 },
        992: { items: 4 },
        1200: { items: 4 }
      }
    });
  }
};
</script>

<style>
.sinle-product-item .product-thumb {
  overflow: hidden;
  position: relative;
}

.sinle-product-item .product-thumb > a {
  display: block;
}

.sinle-product-item .product-thumb > a img.secondary-image {
  left: 0;
  position: absolute;
  top: 0;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.sinle-product-item:hover .product-thumb img.secondary-image {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

.sinle-product-item .action-links {
  position: absolute;
  right: -10px;
  top: 10px;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  z-index: 5;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  visibility: hidden;
}

.sinle-product-item .action-links .action-btn {
  background: rgba(34, 34, 34, 0.6) none repeat scroll 0 0;
  border-radius: 100%;
  color: #ffffff;
  display: inline-block;
  font-size: 18px;
  height: 40px;
  line-height: 41px;
  margin-right: 5px;
  padding: 0;
  text-align: center;
  width: 40px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.sinle-product-item .action-links .action-btn:hover {
  background: #0879c9;
}

.home-2 .sinle-product-item .action-links .action-btn:hover {
  background: #ff6a00;
}

.home-3 .sinle-product-item .action-links .action-btn:hover {
  background: #ffc833;
  color: #333;
}

.home-4 .sinle-product-item .action-links .action-btn:hover {
  background: #e64545;
}

.sinle-product-item:hover .action-links {
  right: 6px;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  visibility: visible;
}

.sinle-product-item .add-to-cart .btn-cart {
  background: rgba(8, 121, 201, 0.7) none repeat scroll 0 0;
  border-radius: 0;
  bottom: -10px;
  color: #ffffff;
  left: 0;
  line-height: 40px;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  overflow: hidden;
  padding: 0 10px;
  position: absolute;
  right: 0;
  text-align: center;
  width: 100%;
  z-index: 5;
}

.home-2 .sinle-product-item .add-to-cart .btn-cart {
  background: rgba(255, 106, 0, 0.7) none repeat scroll 0 0;
}

.home-3 .sinle-product-item .add-to-cart .btn-cart {
  background: rgba(35, 47, 62, 0.7) none repeat scroll 0 0;
}

.home-4 .sinle-product-item .add-to-cart .btn-cart {
  background: rgba(229, 69, 69, 0.7) none repeat scroll 0 0;
}

.sinle-product-item:hover .add-to-cart .btn-cart {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  visibility: visible;
  bottom: 0;
}

.sinle-product-item .add-to-cart .btn-cart:before {
  content: "\F44D";
  display: inline-block;
  font-family: "Ionicons";
  font-size: 22px;
  left: 0;
  line-height: inherit;
  position: absolute;
  right: 0;
  top: 100%;
  -webkit-transition: all 300ms ease-in-out 0s;
  transition: all 300ms ease-in-out 0s;
  vertical-align: top;
  width: 100%;
}

.sinle-product-item .add-to-cart .btn-cart span {
  display: block;
  line-height: inherit;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.sinle-product-item .add-to-cart .btn-cart:hover span {
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
}

.sinle-product-item .add-to-cart .btn-cart:hover:before {
  top: 0;
}

.sinle-product-item .add-to-cart .btn-cart:hover {
  background: #0879c9 none repeat scroll 0 0;
}

.home-2 .sinle-product-item .add-to-cart .btn-cart:hover {
  background: #ff6a00 none repeat scroll 0 0;
}

.home-3 .sinle-product-item .add-to-cart .btn-cart:hover {
  background: #ffc833 none repeat scroll 0 0;
  color: #333;
}

.home-4 .sinle-product-item .add-to-cart .btn-cart:hover {
  background: #e64545 none repeat scroll 0 0;
}

.sinle-product-item .product-info {
  text-align: center;
  padding: 20px 0 5px;
}

.sinle-product-item .product-info .rating {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.sinlge-product-wrap .price-box {
  margin-top: 15px;
}

.sinlge-product-wrap .price-box .new-price {
  font-size: 28px;
}

.sinlge-product-wrap .price-box .old-price {
  font-size: 26px;
}

.sinlge-product-wrap .wishlist-compare-btn a {
  font-size: 16px;
}

.sinlge-product-wrap .wishlist-compare-btn a i {
  margin-right: 5px;
}

.sinlge-product-wrap .quick-view-content .add-to-cart {
  font-weight: 600;
  padding: 0 25px;
  text-transform: uppercase;
}

.product-info-detailed {
  background: #f5f7fa none repeat scroll 0 0;
  display: block;
  margin-bottom: 30px;
  margin-top: 60px;
  padding: 12px 0;
}

.discription-tab-menu .nav {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.discription-tab-menu ul li {
  margin-right: 10px;
}

.discription-tab-menu li a {
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 25px;
  text-transform: uppercase;
}

.description-content > p {
  line-height: 24px;
}

.discription-tab-menu li a.active {
  color: #0879c9;
}

.form-review .table-striped li {
  display: inline-block;
  margin-right: 7px;
}

.table-name {
  width: 50%;
}

.review-wrap {
  margin-top: 30px;
}

.review-wrap > h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.review-wrap .control-label:before {
  color: #ff0000;
  content: "* ";
  font-weight: bold;
}

.form-control:focus {
  box-shadow: none;
  outline: 0 none;
}

.review-wrap .help-block {
  margin: 10px 0 0;
}

.button-review {
  background: #0879c9 none repeat scroll 0 0;
  border: medium none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  height: 40px;
  padding: 0 25px;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.button-review:hover {
  background: #333;
}

.sinlge-product-wrap .tab-content .tab-pane.active {
  display: block;
}

.sinlge-product-wrap .tab-content .tab-pane {
  display: none;
  height: auto;
}

.related-products .prodict-two-active .owl-nav button {
  top: -70px;
}
.modal-wrapper .modal-dialog {
  margin: 28px auto;
  margin: 28px auto;
  margin: 1.75rem auto;
  max-width: 1000px;
}

.modal-wrapper .modal-body {
  padding: 48px 16px;
  padding: 48px 16px;
  padding: 3rem 1rem;
}

.modal-wrapper button.close {
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #333333;
  border-radius: 3px;
  font-weight: 300;
  height: 30px;
  line-height: 30px;
  position: relative;
  top: -32px;
  width: 30px;
}

#img-1 > a {
  border: 1px solid #eaebee;
  display: block;
  overflow: hidden;
}

.single-product-active li a {
  border: 1px solid #eaebee;
  display: block;
}

.single-product-active {
  margin: 20px 0 0 0;
}

.single-product-active {
  display: block;
  padding: 0 19px;
}

.single-product-active .owl-nav button {
  font-size: 30px !important;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.single-product-active .owl-nav button:hover {
  color: #0879c9;
}

.single-product-active .owl-nav button.owl-prev {
  left: 0;
}

.single-product-active .owl-nav button.owl-next {
  right: 0;
}

.quick-view-content .product-info > p {
  font-size: 14px;
  margin: 15px 0;
}

.quick-view-content .price-box .new-price {
  font-size: 24px;
}

.quick-view-content .price-box .old-price {
  font-size: 16px;
  margin-left: 15px;
}

.list-unstyled {
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
  margin: 15px 0;
  padding: 15px 0;
}

.list-unstyled > li {
  line-height: 25px;
}

.list-unstyled li a {
  color: #239d60;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.list-unstyled li a:hover {
  text-decoration: underline;
}

.quick-view-content .quantity > label {
  display: inline-block;
  margin: 0 10px 0 0;
}

.cart-plus-minus {
  display: inline-block;
}

.cart-plus-minus .input-box {
  border: 1px solid #222222;
  height: 35px;
  text-align: center;
  width: 50px;
}

.quick-view-content .quantity {
  margin: 20px 0;
}

.quick-view-content .add-to-cart {
  background: #0879c9 none repeat scroll 0 0;
  border: medium none;
  border-radius: 25px;
  color: #ffffff;
  display: block;
  height: 40px;
  padding: 0 25px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.quick-view-content .add-to-cart:hover {
  background: #222;
}

.quick-view-content .wishlist-compare-btn {
  margin: 20px 0 0 0;
}

.quick-view-content .wishlist-compare-btn > li {
  display: inline-block;
  margin: 0 15px 0 0;
}
</style>
