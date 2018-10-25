<template>
    <div  class="col-xl-3 col-lg-3 hidden-md hidden-sm pull-left category-wrapper">
        <div class="category-menu">
        <span class="category-title">Categories</span>
        <nav>
            <ul class="category-menu-list menu-hidden">
                <li><a href="shop.html"><span><img src="../../assets/images/icons/1.png" alt="menu-icon"></span>Materials<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                <!-- category Mega-Menu Start -->
                <ul class="ht-dropdown megamenu first-megamenu">
                    <!-- Single Column Start -->
                    <li class="single-megamenu">
                        <ul>
                            <li class="menu-tile">Cameras</li>
                            <li><a href="shop.html">Cords and Cables</a></li>
                            <li><a href="shop.html">gps accessories</a></li>
                            <li><a href="shop.html">Microphones</a></li>
                            <li><a href="shop.html">Wireless Transmitters</a></li>
                        </ul>
                    </li>
                </ul>
                <li><a href="shop.html"><span><img src="../../assets/images/icons/2.png" alt="menu-icon"></span>Services<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                    <!-- category Mega-Menu Start -->
                    <ul class="ht-dropdown megamenu megamenu-two">
                        <!-- Single Column Start -->
                        <li class="single-megamenu">
                            <ul>
                                <li class="menu-tile">Men’s Fashion</li>
                                <li><a href="shop.html">Blazers</a></li>
                                <li><a href="shop.html">Boots</a></li>
                                <li><a href="shop.html">pants</a></li>
                                <li><a href="shop.html">Tops & Tees</a></li>
                            </ul>
                        </li>
                        <!-- Single Column End -->
                        <!-- Single Column Start -->
                        <li class="single-megamenu">
                            <ul>
                                <li class="menu-tile">Women’s Fashion</li>
                                <li><a href="shop.html">Bags</a></li>
                                <li><a href="shop.html">Bottoms</a></li>
                                <li><a href="shop.html">Shirts</a></li>
                                <li><a href="shop.html">Tailored</a></li>
                            </ul>
                        </li>
                        <!-- Single Column End -->
                    </ul>
                    <!-- category Mega-Menu End -->
                </li>
            </ul>  
        </nav>
        </div>  
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-bottom-area {
  background-color: #12a4dd;
}

.header-bottom-area .category-wrapper {
  max-width: 16.67%;
}

.category-menu {
  background: #16b8f6 none repeat scroll 0 0;
  border-radius: 5px 5px 0 0;
  position: relative;
}

.category-menu > span::after {
  content: "";
  font-family: "Ionicons";
  font-size: 27px;
  font-weight: normal;
  left: 20px;
  position: absolute;
}

.category-menu > span > i {
  font-size: 20px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}

.category-menu-list > li > a i {
  position: absolute;
  right: 0;
  top: 13px;
}

.category-menu > span {
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  line-height: 58px;
  margin-left: 50px;
  text-transform: uppercase;
}

.category-menu-list {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: #ffffff none repeat scroll 0 0;
  border-color: #ededed;
  border-image: none;
  border-style: solid;
  border-width: 0 1px 1px;
  left: 0;
  padding: 10px 0;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 99;
}

.home-two .category-menu-list {
  position: relative;
}

.category-menu-list li {
  position: relative;
}

.category-menu-list > li a {
  background: #ffffff none repeat scroll 0 0;
  color: #2c2c2c;
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 5px 20px;
  position: relative;
  text-transform: capitalize;
}

.category-menu-list li span {
  display: inline-block;
  margin-right: 10px;
  width: 30px;
}

.category-menu-list > li a {
  color: #2c2c2c;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  overflow-wrap: break-word;
  text-transform: capitalize;
}

ul {
  list-style: outside none none;
}

.category-menu-list .ht-dropdown::before {
  background-color: #ffffff;
  border-color: #f1f1f1 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #f1f1f1;
  border-image: none;
  border-style: solid;
  border-width: 1px;
  content: "";
  display: block;
  height: 15px;
  left: -8px;
  position: absolute;
  top: 15px;
  transform: rotate(-45deg);
  width: 15px;
}

.category-menu-list > li ul.first-megamenu {
  width: 605px;
}

.category-menu-list .ht-dropdown {
  display: flex;
}

.megamenu {
  background: #ffffff none repeat scroll 0 0;
  border: 1px solid #e5e5e3;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  left: 100%;
  padding: 20px 35px;
  top: 0;
}

.ht-dropdown {
  background: #ffffff none repeat scroll 0 0;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
  left: 92%;
  opacity: 0;
  padding: 10px 0;
  position: absolute;
  top: 0;
  transform: scaleY(0);
  transform-origin: 0 0 0;
  transition: all 0.5s ease 0s;
  visibility: hidden;
  width: 120px;
  z-index: 999;
}

.category-menu-list li {
  position: relative;
}

.ht-dropdown {
  visibility: hidden;
}

.category-menu-list li {
  position: relative;
}

.menu-tile {
  border-bottom: 1px solid #ededed;
  color: #2c2c2c;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
}

.single-megamenu ul li a {
  color: #666666;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  padding: 0;
  text-transform: capitalize;
}

.category-menu-list > li a {
  background: #ffffff none repeat scroll 0 0;
  color: #2c2c2c;
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 5px 20px;
  position: relative;
  text-transform: capitalize;
}

.first-megamenu li.megamenu-img {
  flex-basis: 40%;
}

.category-menu-list li {
  padding: 0 20px;
  position: relative;
}

.category-menu-list li ul li {
  padding: 15px 20px 10px 30px;
}

.category-menu-list li ul li ul {
  margin: 0;
}

.category-menu-list li ul li ul li {
  padding: 0;
  margin: 0;
}

.category-menu-list li ul li ul li.menu-tile {
  padding-bottom: 10px;
}

.category-menu-list li ul li a {
  border-bottom: 0px solid transparent;
}

li.megamenu-img a {
  padding: 0;
}

.category-menu-list > li a {
  background: #ffffff none repeat scroll 0 0;
  border-bottom: 1px solid #ededed;
  color: #2c2c2c;
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 5px 0;
  text-decoration: none;
  position: relative;
  text-transform: capitalize;
}

.home-one .category-menu-list > li a:hover {
  color: #12a4dd;
}

.home-two .category-menu-list > li a:hover {
  color: #46b7b9;
}

.category-menu-list > li:last-child a {
  border-bottom: 0 solid rgba(0, 0, 0, 0);
}

.header-top-left > ul > li:hover ul.ht-dropdown,
.cart-box ul li:hover ul.ht-dropdown,
.category-menu-list > li:hover ul.ht-dropdown,
.header-bottom-list li:hover ul.ht-dropdown {
  opacity: 1;
  transform: scaleY(1);
  visibility: visible;
}

.category-menu-list > li ul.megamenu-two {
  width: 420px;
}

/*main-menu*/
.main-menu ul {
  margin-bottom: 0;
}

.main-menu ul li {
  display: inline-block;
  position: relative;
  list-style: none;
}

.main-menu ul li:hover a {
  text-decoration: none;
}

.main-menu nav > ul > li > a {
  color: #ffffff;
  display: block;
  font-size: 16px;
  font-weight: 600;
  height: 58px;
  line-height: 58px;
  padding: 0 20px;
  text-transform: uppercase;
}

.main-menu nav > ul > li:first-child > a {
  padding-left: 0;
}

.main-menu nav > ul > li:hover > a {
  color: #292929;
}

.main-menu nav > ul > li ul {
  position: absolute;
  padding: 10px 0;
  width: 255px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
  left: 0;
  z-index: 9;
  background-color: #fff;
  margin-left: 0;
  -webkit-transform: perspective(600px) rotateX(-90deg);
  -moz-transform: perspective(600px) rotateX(-90deg);
  -ms-transform: perspective(600px) rotateX(-90deg);
  -o-transform: perspective(600px) rotateX(-90deg);
  transform: perspective(600px) rotateX(-90deg);
  -webkit-transform-origin: 100% 0%;
  -moz-transform-origin: 100% 0%;
  -ms-transform-origin: 100% 0%;
  -o-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.main-menu nav > ul > li:last-child ul {
  left: auto;
  right: 0;
}

.main-menu nav > ul > li ul li {
  display: block;
}

.main-menu nav > ul > li ul li a {
  padding: 7px 10px 7px 25px;
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #444444;
  text-transform: capitalize;
}

.main-menu nav > ul > li ul li a:hover {
  color: #12a4dd;
}

.home-three .main-menu nav > ul > li ul li a:hover {
  color: #d94939;
}

.home-three .main-menu nav > ul > li:hover > a {
  color: #d94939 !important;
}

.home-two .main-menu nav > ul > li ul li a:hover {
  color: #ffcd51;
}

.home-two .menu-my-account-container ul li a:hover {
  color: #46b7b9;
}

/*megamenu-3-column*/
.main-menu nav > ul > li ul.megamenu-3-column {
  width: 600px;
  -webkit-transform: perspective(600px) rotateX(-90deg);
  -moz-transform: perspective(600px) rotateX(-90deg);
  -ms-transform: perspective(600px) rotateX(-90deg);
  -o-transform: perspective(600px) rotateX(-90deg);
  transform: perspective(600px) rotateX(-90deg);
  -webkit-transform-origin: 100% 0%;
  -moz-transform-origin: 100% 0%;
  -ms-transform-origin: 100% 0%;
  -o-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.main-menu nav > ul > li ul.megamenu-3-column > li {
  width: 33%;
  float: left;
}

.main-menu nav > ul > li ul.megamenu-3-column > li > a {
  font-size: 16px;
  font-weight: 700;
  color: #292929;
  padding-bottom: 0;
}

.main-menu nav > ul > li ul.megamenu-3-column > li ul {
  width: auto;
  box-shadow: none;
  position: inherit;
}

.main-menu nav > ul > li ul {
  opacity: 0;
  visibility: hidden;
}

.main-menu nav > ul > li:hover ul {
  opacity: 1;
  visibility: visible;
  -webkit-transform: perspective(600px) rotateX(0deg);
  -moz-transform: perspective(600px) rotateX(0deg);
  -ms-transform: perspective(600px) rotateX(0deg);
  -o-transform: perspective(600px) rotateX(0deg);
  transform: perspective(600px) rotateX(0deg);
}

/*hotline*/
.hotline {
  padding-top: 15px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 20px;
  height: 65px;
}

.hotline-icon {
  float: left;
  padding-top: 3px;
  padding-right: 3px;
}

.hotline-icon i {
  color: #f82e56;
  font-size: 40px;
}

.hotline-number {
  overflow: hidden;
}

.hotline-number span {
  display: block;
  line-height: 1.4;
}

.mobile-menu-area {
  display: none;
}

.mobile-menu-area {
  margin: 0 10px;
}

.mobile-menu-area .mean-bar .mean-nav .menu-overflow {
  overflow-y: auto;
  height: 301px;
}

.mean-bar .mean-nav {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
  float: left;
  height: auto;
  left: 0;
  max-width: 100%;
  overflow: hidden;
  position: absolute;
  top: 60px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  z-index: 99;
}

.mobile-menu-area::after {
  content: "MENU";
  position: absolute;
  top: 16px;
  left: 18px;
  color: #fff;
  font-size: 18px;
  display: block;
  z-index: 1;
}

.mean-container .mean-bar {
  background: #34baee;
  padding: 15px 10px;
  right: 10px;
}

.home-three .mean-container .mean-bar {
  background: #ec5a4a;
  top: 15px;
}

.home-three .mobile-menu-area .mean-container .mean-nav ul li a:hover {
  color: #ec5a4a;
}

.home-three .mobile-menu-area::after {
  top: 31px;
  left: 10px;
}

.mean-container a.meanmenu-reveal {
  position: relative;
  top: 0;
  outline: none;
}

.mean-container a.meanmenu-reveal span {
  background: #fff;
  height: 3px;
  margin-top: 3px;
}

.mobile-menu-area {
  position: relative;
  z-index: 9999;
}

.mobile-menu-area .mean-container .mean-nav ul li a {
  outline: none;
}

.mobile-menu-area .mean-container .mean-nav ul li a {
  background: #f8f8f8 none repeat scroll 0 0;
  color: #666;
  display: block;
  float: left;
  font-size: 14px;
  margin: 0;
  padding: 1em 5%;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: normal;
}

.mobile-menu-area .mean-container .mean-nav ul li a:hover {
  color: #12a4dd;
}

.mobile-menu-area .mean-container .mean-nav ul li li a {
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  opacity: 1;
  padding: 1em 7%;
  text-shadow: none !important;
  visibility: visible;
  font-weight: normal;
  text-transform: capitalize;
  color: #444;
  font-size: 14px;
}

.mobile-menu-area .mean-container .mean-nav ul li li li a {
  padding: 1em 11%;
}

.home-four .mean-container .mean-bar {
  background: #57e0f9;
  top: 15px;
}

.home-four .mobile-menu-area .mean-container .mean-nav ul li a:hover {
  color: #57e0f9;
}
</style>
