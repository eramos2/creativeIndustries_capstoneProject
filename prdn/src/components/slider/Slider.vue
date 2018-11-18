<template>
    <div class="slider-main-area pt-60 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    
                    <div class="row sub-row bg-white">
                        <slider-resources-menu></slider-resources-menu>
                        <slider-carousel></slider-carousel>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SliderResourcesMenu from "./SliderResourcesMenu.vue";
import SliderCarousel from "./SliderCarousel.vue";

export default {
  props: ["resources"],
  components: {
    sliderResourcesMenu: SliderResourcesMenu,
    sliderCarousel: SliderCarousel
  }
};
</script>

<style>
.slider-main-area .sub-col {
  padding: 0;
}

.slider-main-area .sub-col:nth-child(1) {
  padding-right: 10px;
}

.slider-main-area .sub-col:nth-child(2) {
  padding-right: 20px;
}

.all-categories-menu-2 .categories-toggler-menu {
  background: #ffffff none repeat scroll 0 0;
  color: #ff6a00;
}

.all-categories-menu-2 .vertical-menu-list {
  border: none;
  padding: 0 0 10px 10px;
}

.slider-main-area .row.sub-row {
  border: 1px solid #eaecee;
  margin-left: 0;
  margin-right: 0;
}
</style>

