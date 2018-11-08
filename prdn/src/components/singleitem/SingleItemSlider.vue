<template>
        <div class="slider-active-2 owl-carousel mt-60">
            <!-- slider-wrapper start -->
            <div class="slider-wrapper" style="background-image:url(img/slider/acrylic-850-390-2.png)">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-lg-11 col-md-11">
                            <div class="slider-text-info style-3 acrylic slider-text-animation">
                                <h1 class="title-1">SubCategory A</h1>
                                <div class="slider-1-des">
                                    <p>Compared to glass of the same thickness, <br>The weight is less than half! </p>
                                </div>
                                <div class="slier-btn-1">
                                    <a title="shop now" href="#" class="shop-btn">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- slider-wrapper end -->
            <!-- slider-wrapper start -->
            <div class="slider-wrapper" style="background-image:url(img/slider/sandblasted-850-390.png)">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-lg-7 col-md-7 col-10">
                            <div class="slider-text-info style-3 sand-blasted slider-text-animation">
                                <h1 class="title-1">SubCategory B</h1>
                      
                                <div class="slider-1-des">
                                    <p>Remove Rust And Prepare Surfaces <br> for High Performance Coating</p>
                                </div>
                                <div class="slier-btn-1">
                                    <a title="shop now" href="#" class="shop-btn">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- slider-wrapper end -->
        </div>
</template>

<script>
export default {
  mounted() {
    $(".slider-active-2").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: true,
      navText: [
        '<i class="ion-chevron-left"></i>',
        '<i class="ion-chevron-right"></i>'
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 },
        1200: { items: 1 }
      }
    });
  }
};
</script>

<style>
.slider-text-info.style-1,
.slider-text-info.style-2 {
  padding: 98px 0;
}

.slider-text-info .title-1,
.slider-text-info .title-2 {
  color: #222222;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.1;
  margin: 0;
  text-transform: uppercase;
}

.slider-text-info .slider-1-des p {
  color: #666666;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0;
  margin-top: 17px;
  padding: 0;
  text-transform: uppercase;
}

.slider-text-info .slider-1-des p span {
  color: #0879c9;
  display: block;
  font-size: 60px;
}

.slider-text-info .slier-btn-1 a {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: 2px solid #0879c9;
  border-radius: 3px;
  color: #0879c9;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  margin-top: 30px;
  padding: 0 20px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  vertical-align: top;
}

.slider-text-info.style-3.acrylic .slier-btn-1 a {
  margin-top: 10px;
  margin-bottom: 20px;
}

.slider-text-info.style-3.sand-blasted .slier-btn-1 a {
  margin-top: 15px;
  margin-block-end: 15px;
}

.slider-text-info .slier-btn-1 a:hover {
  background: #0879c9;
  border-color: #0879c9;
  color: #fff;
}

.slider-text-info.style-2 .slider-1-des p span {
  color: #e64545;
}

.slider-text-info.style-2 .slier-btn-1 a {
  border: 2px solid #e64545;
  color: #e64545;
}

.slider-text-info.style-2 .slier-btn-1 a:hover {
  background: #e64545;
  border-color: #e64545;
  color: #fff;
}

.slider-active .owl-dots {
  bottom: 20px;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.slider-active .owl-dots .owl-dot {
  background: #fff none repeat scroll 0 0;
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  margin: 0 4px;
  width: 10px;
}

.slider-active .owl-dots .owl-dot.active {
  background: #0879c9 none repeat scroll 0 0;
}

.active .slider-wrapper .slider-text-animation * {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.owl-item.active .slider-text-animation h1 {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

.owl-item.active .slider-text-animation h2 {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

.owl-item.active .slider-text-animation .slider-1-des {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

.owl-item.active .slider-text-animation .slier-btn-1 {
  -webkit-animation-delay: 1.4s;
  animation-delay: 1.4s;
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

/*--------- Home-2 slider css  -----------*/
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

.slider-text-info.style-3.sand-blasted .title-1 {
  font-size: 52px;
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

.slider-text-info.style-3.sand-blasted {
  padding: 13px 0 163px 0px;
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
</style>
