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
                          <img id="zoom1" :src="businessLogo" alt="big-1">
                        </a>
                      </div>
                      <div class="single-zoom-thumb">
                        <ul class="s-tab-zoom single-product-active owl-carousel" id="gallery_01">
                          <business-carousel-image
                            v-for="(image,key) in currentBusinessImages"
                            :key="key"
                            :image="image.image"
                            :imageName="image.imageName"
                            :imageType="image.imageType"
                            :companyName="currentBusiness.companyName"
                          ></business-carousel-image>
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

                      <ul class="list-unstyled">
                        <li>
                          Telephone:
                          <a href="#">{{currentBusiness.phone}}</a>
                        </li>
                        <li>
                          Website:
                          <a href="#">{{currentBusiness.website}}</a>
                        </li>
                        <li>E-mail: {{currentBusiness.email}}</li>
                        <li
                          v-if="currentBusiness.videoURL != null && currentBusiness.videoURL != '' "
                        >
                          Video URL:
                          <a href="#">{{currentBusiness.videoURL}}</a>
                        </li>
                        <li>Address: {{currentBusiness.line}} {{currentBusiness.city}}, PR {{currentBusiness.zipcode}}</li>
                        <li>Description: {{currentBusiness.description}}</li>
                        <div class="row">
                          <h5 id="tagsHeader" class="col">{{currentBusiness.companyName}} - Tags:</h5>
                        </div>

                        <div class="row">
                          <div
                            class="col-md-4 businessTags"
                            v-for="(tag, key) in companyTags"
                            :key="key"
                          >
                            <button
                              v-show="!userTags(tag.tagId)"
                              class="btn btn-primary"
                              @click="endorseTag(tag.tagId)"
                              :value="tag.tagId"
                            >
                              {{tag.tagName}}
                              <span :class="'badge badge-light'">{{tag.endorsements}}</span>
                            </button>
                            <button
                              v-show="userTags(tag.tagId)"
                              class="btn btn-primary"
                              @click="removeEndorsement(tag.tagId)"
                              :value="tag.tagId"
                            >
                              {{tag.tagName}}
                              <span
                                :class="'badge badge-success'"
                              >{{tag.endorsements}}</span>
                            </button>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <!-- product-thumbnail-content end -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row box-module">
          <div class="col-md-3 businessTags" v-for="(tag, key) in tids" :key="key">
            <button type="button" class="btn btn-primary">
              {{tag.tagName}}
              <span class="badge badge-light">{{tag.count}}</span>
            </button>
          </div>
        </div>-->
        <medium-carousel :key="curBusiness">All Resources</medium-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
import BusinessImageCarousel from "../components/business/BusinessCarouselImage.vue";
import MediumCarousel from "../components/business/MediumCarousel.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    breadcrumbs: Breadcrumbs,
    businessCarouselImage: BusinessImageCarousel,
    mediumCarousel: MediumCarousel
  },
  data() {
    return {
      curBusiness: this.$route.params.businessName.toLowerCase(),
      testtids: [
        { tagName: "Fast Delivery", count: "5" },
        { tagName: "Collaboration", count: "5" },
        { tagName: "Cutting", count: "5" },
        { tagName: "Fast Delivery", count: "5" },
        { tagName: "Collaboration", count: "5" }
      ]
    };
  },
  methods: {
    ...mapActions(["setResources", "setCurrentBusiness"]),
    ...mapGetters(["getCurrentBusiness"]),
    endorseTag(tid) {
      console.log(this.userID && !this.userTags(tid));
      if (this.userID && !this.userTags(tid)) {
        //user is logged in and it dosnt have endorsement on this tag
        let data = {
          companyId: this.currentBusiness.companyId,
          userId: this.userID,
          tagId: tid
        };
        this.$store.dispatch("giveEndorsement", data).then(response => {
          console.log(response);
          if (response.length > 0) {
            let businessArr = this.currentBusiness.tags;
            //Also add endorsement++ from company locally
            let filtered = businessArr.filter(function(tag, index, arr) {
              if (tag.tagId == tid) {
                tag.endorsements = (parseInt(tag.endorsements) + 1).toString();
                return tag;
              }
              return tag;
            });
            console.log(filtered);
            //Also add tad id endorsement from user locally
            let userArr = this.$store.state.users.user.endorsedTags;
            userArr.push({ tagId: tid });
            this.$store.state.users.user.endorsedTags = userArr;
            console.log(this.$store.state.users.user.endorsedTags);
            // this.$store
            //   .dispatch("setCurrentBusiness", this.currentBusiness.companyName)
            //   .then(response => {
            //     console.log(response);
            //   });
          }
        });
      }
    },
    removeEndorsement(tid) {
      if (this.userID && this.userTags(tid)) {
        console.log("Removing tag");
        //user is logged in and has endorsement on this tag
        let data = {
          companyId: this.currentBusiness.companyId,
          userId: this.userID,
          tagId: tid
        };
        this.$store.dispatch("removeEndorsement", data).then(response => {
          console.log(response);
          if (response.length > 0) {
            let businessArr = this.currentBusiness.tags;
            //Also remove endorsement from company locally
            let filtered = businessArr.filter(function(tag, index, arr) {
              if (tag.tagId == tid) {
                tag.endorsements = (parseInt(tag.endorsements) - 1).toString();
                return tag;
              }
              return tag;
            });
            this.currentBusiness.tags = filtered;
            //Also remove endorsement from user locally
            let userArr = this.$store.state.users.user.endorsedTags;
            let userfiltered = userArr.filter(function(tag, index, arr) {
              return tag.tagId != tid;
            });
            console.log(userfiltered);
            this.$store.state.users.user.endorsedTags = userfiltered;
          }
        });
      }
    },
    userTags(tid) {
      console.log(tid);
      if (tid != undefined) {
        let endorsements = this.$store.state.users.user.endorsedTags;
        console.log(endorsements);
        if (endorsements != undefined) {
          for (let key of endorsements) {
            console.log(key);
            if (key.tagId == tid) {
              return true;
            }
          }
        } else {
          return false;
        }
      }
      return false;
    }
  },
  computed: {
    companyTags() {
      return this.$store.state.businesses.currentBusiness.tags;
    },

    userID() {
      return this.$store.state.users.user.userId;
    },
    currentBusiness() {
      return this.getCurrentBusiness();
    },
    currentBusinessImages() {
      console.log(this.getCurrentBusiness());
      console.log(this.getCurrentBusiness().images);
      console.log("Is it empty?");
      console.log($.isEmptyObject(this.getCurrentBusiness().images));
      if ($.isEmptyObject(this.getCurrentBusiness().images) == true) {
        //console.log("undef");
        //console.log($.isEmptyObject(this.getCurrentBusiness().subcategories));
        return {};
      } else {
        this.$nextTick(function() {
          //console.log("Entered next tick in single item business");
          var $owl = $(".single-product-active");
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
            loop: true,
            items: 1,
            margin: 15,
            dots: false,
            lazyLoad: true,
            nav: true,
            navText: [
              '<i class="fa fa-angle-left"></i>',
              '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
              0: { items: 1 },
              480: { items: 1 },
              768: { items: 1 },
              992: { items: 1 },
              1200: { items: 1 }
            }
          });
        });
      }
      return this.getCurrentBusiness().images;
    },
    currentBusinessSubcategories() {
      let subcategories = [];

      for (subcategory in this.getCurrentBusiness().submaterials) {
        resources.push(resource);
      }
    },
    /**
     * Returns business logo blob(base64) for the img src div to display it
     */
    businessLogo() {
      if (this.currentBusiness.logo != null) {
        //business has a blob logo// prdn1.0
        return (
          "data:" +
          this.currentBusiness.logoType +
          ";base64," +
          this.currentBusiness.logo
        );
      } else if (this.currentBusiness.logoName != "") {
        //business has cloudinary url //prdn2.0
        return this.currentBusiness.logoName;
      } else {
        //business doesnt have any image on system return a placeholder with the business name
        return (
          "https://via.placeholder.com/178x52?text=" +
          this.currentBusiness.companyName
        );
      }
    }
  },
  beforeMount() {
    let businessName = this.$route.params.businessName;
    console.log(businessName);
    console.log("before mount");
    console.log(this.$store.state.users.user.userId);
  },
  mounted() {
    let businessName = this.$route.params.businessName;
    console.log(businessName);
    console.log("before mount");
    console.log(this.$store.state.users.user.userId);
    this.setCurrentBusiness(businessName).then(response => {
      console.log(this.$store.state.users.user.userId);
      if (this.$store.state.users.user.userId) {
        console.log("Before calling endorsemnts for business");
        let data = {
          companyName: this.currentBusiness.companyName,
          id: this.$store.state.users.user.userId
        };
        this.$store.dispatch("getEndorsementsToBusiness", data);
      }
    });

    //console.log("Inside mount of Businesspage");
    //this.setResources();
  }
};
</script>

<style>
#tagsHeader {
  padding-top: 1rem;
}
.businessTags {
  margin-left: auto;
}
#tag-second-line {
  margin-top: 1rem;
}
#zoom1 {
  max-height: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
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
