<template>
  <div class="col-lg-4 col-md-4 col-sm-6">
    <div class="sinle-product-item mb-20">
      <div class="product-thumb">
        <router-link
          :to="{
                    name: 'singleitemLink', 
                    params: {
                        resourceName: this.$route.params.resourceName,
                        categoryName: subcategory.category, 
                      subcategoryName: subcategory.name.toLowerCase()
                    }
                  }"
          tag="a"
          active-class="active"
          class="product-name"
        >
          <img alt :src="imgUrl" class="primary-image">
        </router-link>
        <!-- <div class="action-links">
                    <a href="#" class="action-btn btn-wishlist"><i class="ion-android-favorite-outline"></i></a>
                    <a href="#" class="action-btn btn-compare"><i class="ion-arrow-swap"></i></a>
                    <a href="#" data-target="#exampleModalCenter" data-toggle="modal" class="action-btn btn-quickview"><i class="ion ion-ios-eye"></i></a>
        </div>-->
        <div class="add-to-cart">
          <router-link
            :to="{
                    name: 'singleitemLink', 
                    params: {
                        resourceName: this.$route.params.resourceName,
                        categoryName: subcategory.category, 
                      subcategoryName: subcategory.name.toLowerCase()
                    }
                  }"
            tag="a"
            active-class="active"
            class="btn-cart"
          >
            <span>Learn More</span>
          </router-link>
        </div>
      </div>
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
        <!--<router-link to="/" tag="h4" active-class="active" class="product-name"><a>{{subcategory.name}}</a></router-link>-->
        <h4 class="product-name">
          <!-- <a style="cursor: pointer;" @click="scLink">{{subcategory.name}}</a> -->
          <router-link
            :to="{
                    name: 'singleitemLink', 
                    params: {
                        resourceName: this.$route.params.resourceName,
                        categoryName: subcategory.category, 
                      subcategoryName: subcategory.name.toLowerCase()
                    }
                  }"
            tag="a"
            active-class="active"
            class
            style="cursor: pointer;"
          >{{subcategory.name}}</router-link>
        </h4>
        <!--<div class="price-box">
                    <span class="new-price">$98.00</span>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["subcategory", "subcategoryKey"],
  methods: {
    scLink() {
      console.log("Go To subcategory page of " + this.subcategory.name);
    }
  },
  computed: {
    /**
     * Returns subcategory image url by appending the image id to the google drive folder url
     * @name imgUrl
     */
    imgUrl() {
      return this.$store.state.driveUrl + this.subcategory.image;
    }
  }
};
</script>

<style>
</style>
