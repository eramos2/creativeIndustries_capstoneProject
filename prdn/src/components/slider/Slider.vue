<template>
    <div class="slider-main-area pt-60 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    
                    <div class="row sub-row bg-white">
                        <slider-resources-menu></slider-resources-menu>
                        
                        <div class="sub-col col-lg-9"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SliderResourcesMenu from "./SliderResourcesMenu.vue";

export default {
  components: {
    sliderResourcesMenu: SliderResourcesMenu
  }
};
</script>

<style>
.slider-text-info.style-3 .title-1,
.slider-text-info.style-4 .title-2 {
  color: #ffffff;
  font-size: 60px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0;
  margin-top: 0;
  text-transform: uppercase;
}

.slider-text-info.style-3 p,
.slider-text-info.style-4 p {
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 0;
  margin-top: 10px;
  padding: 0;
  text-transform: capitalize;
}

.slider-text-info.style-3 .slier-btn-1 a,
.slider-text-info.style-4 .slier-btn-1 a {
  border: 2px solid #fff;
  color: #fff;
}

.slider-text-info.style-3 .slier-btn-1 a:hover,
.slider-text-info.style-4 .slier-btn-1 a:hover {
  background: #ff6a00;
  border: 2px solid #ff6a00;
  color: #fff;
}

.slider-text-info.style-4 .title-2 {
  font-size: 46px;
}

.slider-text-info.style-3 {
  padding: 93px 0 93px 0px;
}

.slider-text-info.style-4 {
  padding: 77px 0 77px 30px;
}

.slider-active-2 .owl-nav button {
  background: rgba(0, 0, 0, 0.3) !important;
  font-size: 20px !important;
  height: 60px;
  color: #fff !important;
  line-height: 60px !important;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 60px;
  border-radius: 50%;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.slider-active-2 .owl-nav button:hover {
  background: rgba(0, 0, 0, 0.5) !important;
}

.slider-active-2 .owl-nav button.owl-prev {
  left: 10px;
}

.slider-active-2 .owl-nav button.owl-next {
  right: 10px;
}

.slider-active-2 .owl-dots {
  padding: 5px 0 15px;
  text-align: center;
}

.slider-active-2 .owl-dots .owl-dot {
  background: #cecece none repeat scroll 0 0;
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  margin: 0 4px;
  width: 10px;
}

.slider-active-2 .owl-dots .owl-dot.active {
  background: #ff6a00 none repeat scroll 0 0;
}

.slider-main-area .sub-col {
  padding: 0;
}

.slider-main-area .sub-col:nth-child(1) {
  padding-right: 10px;
}

.slider-main-area .sub-col:nth-child(2) {
  padding-right: 20px;
}

.slider-main-area .row.sub-row {
  border: 1px solid #eaecee;
  margin-left: 0;
  margin-right: 0;
}
</style>

