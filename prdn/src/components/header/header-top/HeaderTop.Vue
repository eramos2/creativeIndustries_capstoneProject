<template>
    
        <div class="header-area sticky-header bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-5">
                        <!-- logo start -->
                        
                        <router-link to="/" tag="div" class="logo" active-class="active" exact><a><img src="https://via.placeholder.com/178x52?text=PRDN LOGO" alt=""></a></router-link>
                        <!--<div class="logo">
                          
                            <a href="index.html"><img src="https://via.placeholder.com/178x52?text=PRDN LOGO" alt=""></a>
                        </div>-->
                        <!-- logo end -->
                    </div>
                    <div class="col-lg-6 d-none d-lg-block">
                        <div class="main-menu main-menu-style-2">
                            <nav>
                                <ul>
                                    <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
                                    <router-link to="/materials" tag="li" active-class="active"><a>Materials</a></router-link>
                                    <router-link to="/services" tag="li" active-class="active"><a>Services</a></router-link>
                                    <router-link to="/processes" tag="li" active-class="active"><a>Processes</a></router-link>
                                    
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-7">
                        <!-- top-box-lang start -->
                        <div class="top-box-lang top-box-lang-2 text-right">
                            <ul>
                                <li class="currency">
                                            <div class="btn-group">
                                                <button class="btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                   My Account <i class="fa fa-angle-down"></i>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <ul>
                                                       <router-link to="/user" tag="li" active-class="active"><a>Register</a></router-link>
                                                  <router-link to="/" tag="li" active-class="active"><a>Login</a></router-link>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                <li class="language">
                                    <div class="btn-group">
                                        <button class="btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src="https://www.fixaflat.com/images/flag-us.png" alt=""> English <i class="fa fa-angle-down"></i>
                                        </button>
                                        <div class="dropdown-menu">
                                            <ul>
                                                <li><a href="#"><img src="https://www.fixaflat.com/images/flag-us.png" alt=""> English</a></li>
                                                <li><a href="#"><img src="http://www.calatayudvirtual.com/tienda/img/l/4.jpg" alt=""> Spanish</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- top-box-lang end -->
                    </div>
                </div>
                
            </div>
        </div>
        
    
</template>

<script>
import "popper.js";

export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900");

.wrapper header {
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.12);
}

.logo {
  margin: 24px 0;
}

.btn-group .btn-link {
  border: 0 none;
  color: #222222;
  cursor: pointer;
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 25px;
  overflow: hidden;
  padding: 12px 0;
  text-align: left;
  text-decoration: none;
  text-shadow: none;
  text-transform: capitalize;
}

.btn-group .dropdown-menu {
  background: #ffffff none repeat scroll 0 0;
  border: 1px solid #eaecee;
  border-radius: 0;
  box-shadow: none;
  left: auto !important;
  margin: 0;
  padding: 0 20px;
  position: absolute;
  right: 0;
  text-align: left;
}

.btn-group .dropdown-menu li > a {
  border-bottom: 1px solid #eeeeee;
  border-radius: 0;
  color: #222222;
  display: block;
  font-size: 13px;
  font-weight: normal;
  height: inherit;
  line-height: 24px;
  padding: 12px 0;
  text-align: left;
  text-transform: capitalize;
}

.btn-group .dropdown-menu li > a:hover {
  color: #0879c9;
}

.sticky-header.sticky {
  -webkit-animation: 600ms ease-in-out 0s normal none 1 running fadeInDown;
  animation: 600ms ease-in-out 0s normal none 1 running fadeInDown;
  background: #f4f4f4 none repeat scroll 0 0;
  box-shadow: 0 1px 3px rgba(50, 50, 50, 0.4);
  left: 0;
  margin: auto;
  opacity: 0.9;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.home-2 .sticky-header.sticky .logo {
  margin: 8px 0;
}

.home-2 .sticky-header.sticky .main-menu.main-menu-style-2 {
  margin: 8px 0;
}

.home-2 .sticky-header.sticky .top-box-lang.top-box-lang-2 {
  margin: 8px 0;
}

.border--top {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.main-menu ul > li {
  display: inline-block;
  position: relative;
}

.main-menu ul > li > a {
  display: block;
  font-size: 14px;
  font-weight: 500;
  padding: 16px 18px;
}

.main-menu ul > li:first-child a {
  padding-left: 0;
}

/*--- dorpdown-menu css ---*/
.main-menu ul > li > ul.dorpdown-menu,
.main-menu ul > li > ul.mega-menu {
  background: #ffffff none repeat scroll 0 0;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.12);
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  position: absolute;
  top: 120%;
  visibility: hidden;
  width: 180px;
  z-index: 99;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.main-menu ul > li > ul.dorpdown-menu {
  padding: 10px 0;
}

.main-menu ul > li > ul.dorpdown-menu li {
  display: block;
}

.main-menu ul > li > ul.dorpdown-menu li > a {
  display: block;
  font-size: 14px;
  font-weight: 400;
  padding: 7px 15px;
}

.main-menu ul > li > ul.mega-menu {
  padding: 20px;
  width: 630px;
  z-index: 99999;
}

.main-menu ul > li > ul.mega-menu li {
  display: block;
  float: left;
  padding: 0;
  width: 33.3333%;
}

.main-menu ul > li > ul.mega-menu li a {
  color: #333333;
  font-size: 15px;
  margin-bottom: 10px;
  padding: 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.main-menu ul > li > ul.mega-menu li a:hover {
  color: #0879c9;
}

.main-menu ul > li > ul.mega-menu li ul li {
  display: block;
  padding: 0;
  width: 100%;
}

.main-menu ul > li > ul.mega-menu li ul li a {
  display: block;
  font-size: 14px;
  font-weight: 400;
  padding: 5px 0;
  margin: 0;
}

.main-menu ul > li:hover ul.dorpdown-menu,
.main-menu ul > li:hover ul.mega-menu {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  visibility: visible;
  top: 100%;
}

/*--- main-menu-style-2 css ----*/
.main-menu.main-menu-style-2 {
  margin: 24px 0;
}

.top-box-lang.top-box-lang-2 {
  margin: 24px 0;
}

.main-menu.main-menu-style-2 ul > li > a:hover {
  color: #ff6a00;
}

/*--- top-box-lang css ----*/
.top-box-lang ul li button {
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.top-box-lang ul li button:hover {
  color: #0879c9;
}

.top-box-lang ul li {
  display: inline-block;
}

.top-box-lang .dropdown-menu li {
  display: block;
}

.top-box-lang .language img {
  margin-right: 5px;
}

.top-box-lang.top-box-lang-2 ul li button:hover {
  color: #ff6a00;
}

.top-box-lang-2 .btn-group .dropdown-menu li > a:hover {
  color: #ff6a00;
}

.top-box-lang.top-box-lang-3 ul li button {
  color: #fff;
}

.top-box-lang.top-box-lang-3 ul li button:hover {
  color: #ffc833;
}

.top-box-lang-3 .btn-group .dropdown-menu li > a:hover {
  color: #ffc833;
}

.top-box-lang.top-box-lang-4 ul li button:hover {
  color: #e54545;
}

.top-box-lang.top-box-lang-4 .btn-group .dropdown-menu li > a:hover {
  color: #e54545;
}
</style>
