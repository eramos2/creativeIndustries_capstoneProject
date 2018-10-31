<template>
  <div class="wrapper home-2">
    
    <!--<app-header></app-header>-->
    <slider></slider>
    
    <!--<side-bar :sideBarItems="sideBarItems"></side-bar>-->
    
  </div>
</template>


<script>
import SideBar from "./components/SideBar.vue";
import AppHeader from "./components/header/AppHeader.vue";
import Slider from "./components/slider/Slider.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap";

export default {
  name: "app",
  data: function() {
    return {
      sideBarItems: ["This is a test"]
    };
  },
  components: {
    sideBar: SideBar,
    appHeader: AppHeader,
    slider: Slider
  }
};
</script>

<style>
@import "../public/style.css";
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900");

html,
body {
  height: 100%;
}

.floatleft {
  float: left;
}

.floatright {
  float: right;
}

.alignleft {
  float: left;
  margin-right: 15px;
  margin-bottom: 15px;
}

.alignright {
  float: right;
  margin-left: 15px;
  margin-bottom: 15px;
}

.aligncenter {
  display: block;
  margin: 0 auto 15px;
}

a:focus {
  outline: 0px solid;
}

img {
  max-width: 100%;
  height: auto;
}

.fix {
  overflow: hidden;
}

p {
  margin: 0 0 15px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 10px;
  color: #2c2c2c;
  line-height: 1.35;
}

a {
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  color: #2c2c2c;
}

a:hover {
  color: #0879c9;
  text-decoration: none;
}

a:active,
a:hover {
  outline: 0 none;
}

button:focus,
input:focus,
textarea:focus {
  outline: none;
}

ul {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}

.clear {
  clear: both;
}

body {
  color: #222;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857;
}

.ptb-10 {
  padding: 10px 0;
}

.ptb-20 {
  padding: 20px 0;
}

.ptb-30 {
  padding: 30px 0;
}

.ptb-40 {
  padding: 40px 0;
}

.ptb-50 {
  padding: 50px 0;
}

.ptb-60 {
  padding: 60px 0;
}

.ptb-70 {
  padding: 70px 0;
}

.ptb-90 {
  padding: 90px 0;
}

.pb-10 {
  padding-bottom: 10px;
}

.pb-20 {
  padding-bottom: 20px;
}

.pb-30 {
  padding-bottom: 30px;
}

.pb-50 {
  padding-bottom: 50px;
}

.pb-60 {
  padding-bottom: 60px;
}

.pt-60 {
  padding-top: 60px;
}

.mtb-20 {
  margin: 20px 0;
}

.mtb-30 {
  margin: 30px 0;
}

.mtb-40 {
  margin: 40px 0;
}

.mtb-50 {
  margin: 50px 0;
}

.mtb-60 {
  margin: 60px 0;
}

.mtb-70 {
  margin: 70px 0;
}

.mtb-80 {
  margin: 80px 0;
}

.mt-10 {
  margin: 10px 0 0 0;
}

.mt-20 {
  margin: 20px 0 0 0;
}

.mt-30 {
  margin: 30px 0 0 0;
}

.mt-40 {
  margin: 40px 0 0 0;
}

.mt-50 {
  margin: 50px 0 0 0;
}

.mt-60 {
  margin: 60px 0 0 0;
}

.mb-20 {
  margin: 0 0 20px 0;
}

.mb-30 {
  margin: 0 0 30px 0;
}

.mb-60 {
  margin: 0 0 60px 0;
}

.mb-80 {
  margin: 0 0 80px 0;
}

.mb-90 {
  margin: 0 0 90px 0;
}

.bg-gray {
  background: #f5f7fa;
}

.bg-blue {
  background: #0879c9;
}

.bg-white {
  background: #fff;
}

.bg-black {
  background: #232f3e;
}

.bg-orange {
  background: #ff6a00;
}

.bg-yellow {
  background: #ffc833;
}

.bg-brown {
  background: #e54545;
}

#scrollUp {
  background: #333333 none repeat scroll 0 0;
  bottom: 30px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 18px;
  height: 40px;
  line-height: 38px;
  right: 20px;
  text-align: center;
  -webkit-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  width: 40px;
}

#scrollUp:hover {
  background: #0879c9;
}
</style>
