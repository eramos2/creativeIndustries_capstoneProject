<template>
  <div class="main-menu-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-8">
          <!-- top-search-area start -->
          <div class="top-search-area home-two-shearch">
            <div class="search-categories">
              <div class="form">
                <div class="search-form-input">
                  <multiselect
                    track-by="name"
                    label="name"
                    v-model="selected"
                    :options="searchOptions"
                    :searchable="false"
                    :close-on-select="true"
                    :show-labels="false"
                    :allow-empty="false"
                    :preselectFirst="true"
                    placeholder="Pick a Value"
                  >
                    <template
                      @change="onChange"
                      slot="singleLabel"
                      slot-scope="{ option }"
                    >{{ option.name }}</template>
                  </multiselect>
                  <!-- <select  id="select" name="select" class="nice-select" v-model="selectedType">
                                                  <option 
                                                      v-for="(option, key) in searchOptions" 
                                                      :key="key"
                                                      :value="option.value"
                                                      
                                                  > 
                                                  {{option.text}}
                                                  </option>
                                                
                                                    
                  </select>-->
                  <input id="search-input" type="text" placeholder="Search..." v-model="searchText">
                  <router-link
                    v-if="!onSearchPage"
                    :to="{
                     name: 'searchLink', 
                     params: {
                         resourceName: selected.value,
                         searchValue: searchText

                          }
                        }"
                    tag="button"
                    active-class="active"
                    class="top-search-btn"
                    type="button"
                  >
                    <i class="ion-ios-search-strong"></i> Search
                  </router-link>
                  <button
                    class="top-search-btn"
                    type="button"
                    v-if="onSearchPage"
                    @click="searchForBusinesses"
                  >
                    <i class="ion-ios-search-strong"></i> Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- top-search-area end -->
        </div>

        <!-- mobile-categorei-menu start -->
        <div class="container d-block d-lg-none">
          <div class="vertical-menu pb-30">
            <span class="categorie-title mobile-categorei-menu">All Categories</span>
            <nav>
              <div
                class="category-menu sidebar-menu sidbar-style mobile-categorei-menu-list menu-hidden"
                id="cate-mobile-toggle"
              >
                <ul>
                  <li class="has-sub">
                    <a href="#">Home</a>

                    <!-- category submenu end-->
                  </li>
                  <li class="has-sub">
                    <a href="#">Materials</a>
                    <ul class="category-sub">
                      <li class="menu-tile">Concrete</li>
                      <li>
                        <a href>Digital Concrete</a>
                      </li>
                      <li>
                        <a href>Geometrical Concrete</a>
                      </li>
                    </ul>
                    <!-- category submenu end-->
                  </li>
                  <li class="has-sub">
                    <a href="#">Processes</a>
                    <ul class="category-sub">
                      <li>
                        <a href="#">process a</a>
                      </li>
                      <li>
                        <a href="#">process b</a>
                      </li>
                    </ul>
                    <!-- category submenu end-->
                  </li>
                  <li class="has-sub">
                    <a href="#">Services</a>
                    <ul class="category-sub">
                      <li>
                        <a href="#">subservice a</a>
                      </li>
                      <li>
                        <a href="#">subservice b</a>
                      </li>
                    </ul>
                    <!-- category submenu end-->
                  </li>
                  <li>
                    <a href="#">Businesses</a>
                  </li>

                  <!--
                                    <li><a href="#">test</a></li>
                  <li><a href="#">test</a></li>-->
                </ul>
              </div>
              <!-- category-menu-end -->
            </nav>
          </div>
        </div>
        <!-- mobile-categorei-menu end -->
      </div>
    </div>
  </div>
</template>

<script>
import "popper.js";
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect
  },
  props: ["resources"],
  data() {
    return {
      selected: {
        name: "Materials",
        value: "materials"
      },
      searchText: "",
      selectedType: "businesses",
      searchOptions: [
        { name: "Materials", value: "materials" },
        { name: "Processes", value: "processes" },
        { name: "Services", value: "services" },
        { name: "Businesses", value: "businesses" }
      ]
    };
  },
  computed: {
    onSearchPage() {
      console.log(this.$route.name == "searchLink");
      return this.$route.name == "searchLink";
    },
    selectedTyp() {
      let selectElement = window.$(".nice-select")["0"];
      console.log(selectElement);
      if (selectElement != undefined) {
        let selectedIndex = selectElement.options.selectedIndex;
        this.selectedType = selectElement.options[selectedIndex].value;
      }
      return this.selectedType;
    },
    resourceName() {
      return this.selected.value;
    },
    test() {
      console.log(this.selectedType);
      return this.selectedType;
    }
  },
  methods: {
    onChange() {
      console.log("wiwwiso");
    },
    searchForBusinesses() {
      if (this.selected.value == "businesses") {
        console.log("searching for businesses");
        this.$route.params.resourceName = this.resourceName;
        this.$store.dispatch("getBusinessesByName", this.searchText);
      } else {
        let data = {
          name: this.searchText,
          resource: this.resourceName
        };
        this.$route.params.resourceName = this.resourceName;
        console.log("Searching for resources");
        console.log(data);
        this.$store.dispatch("getSubResourceByName", data);
      }
    },
    autoSearch() {
      console.log(this.selectedType);

      console.log(this.selectedType + " " + this.searchText);
    }
  },

  mounted() {
    /**Nice Select */
    //$(".nice-select").niceSelect();
    /*--
    02. jQuery MeanMenu
------------------------- */
    $("#mobile-menu-active").meanmenu({
      meanScreenWidth: "991",
      meanMenuContainer: ".mobile-menu-area .mobile-menu"
    });
    /*--
  Vertical-Menu Activation
-----------------------------*/
    $(".categorie-title,.mobile-categorei-menu").on("click", function() {
      $(".vertical-menu-list,.mobile-categorei-menu-list").slideToggle();
    });

    /*--
  Category menu Activation
------------------------------*/
    $("#cate-toggle li.has-sub>a,#cate-mobile-toggle li.has-sub>a").on(
      "click",
      function() {
        $(this).removeAttr("href");
        var element = $(this).parent("li");
        if (element.hasClass("open")) {
          element.removeClass("open");
          element.find("li").removeClass("open");
          element.find("ul").slideUp();
        } else {
          element.addClass("open");
          element.children("ul").slideDown();
          element
            .siblings("li")
            .children("ul")
            .slideUp();
          element.siblings("li").removeClass("open");
          element
            .siblings("li")
            .find("li")
            .removeClass("open");
          element
            .siblings("li")
            .find("ul")
            .slideUp();
        }
      }
    );
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900");
/* start multiselect style */
.multiselect {
  position: absolute;
  z-index: 9;
  width: 164px;
  margin-top: 0.095rem;
  margin-left: 0.2rem;
}
.multiselect__tags {
  min-height: 40px;
  display: block;
  padding: 0.65rem 40px 0 0.4rem;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  background: #fff;
  font-size: 14px;
  border-color: white;
  border-right-color: #ff6a00;
  border-right-width: 0.08rem;
  border-radius: 0;
}

.multiselect__select {
  padding-top: 0.55rem;
}
/* end multiselect style */
.top-search-area {
  margin: 27px 0;
  position: relative;
}

.top-search-area .search-form-input .nice-select {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: #f3f3f3 none repeat scroll 0 0;
  border-bottom: medium none;
  -o-border-image: none;
  border-image: none;
  border-radius: 25px 0 0 25px;
  border-right: 1px solid #cdcdcd;
  border-top: medium none;
  color: #000000;
  font-size: 13px;
  height: 45px;
  line-height: 45px;
  padding: 0 21px;
  position: absolute;
  top: 0;
  width: 174px;
  z-index: 9;
}

.top-search-area .search-form-input .nice-select .list {
  height: 320px;
  overflow-y: auto;
  margin: 0;
}

.top-search-area .search-form-input .nice-select .list li {
  font-size: 13px;
  padding: 0 28px;
}

.search-form-input input {
  border: medium none;
  border-radius: 25px;
  height: 45px;
  padding: 10px 55px 10px 185px;
  position: relative;
  width: 100%;
}

.search-form-input .top-search-btn {
  background: #333333 none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  height: 40px;
  position: absolute;
  right: 5px;
  top: 3px;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  width: 40px;
  font-size: 21px;
}

.search-form-input .top-search-btn:hover {
  background: #0879c9;
}

.home-two-shearch .search-form-input input {
  border: 2px solid #ff6a00;
  border-radius: 5px;
  height: 45px;
  padding: 10px 130px 10px 185px;
  position: relative;
  width: 100%;
}

/*----- home-two-shearch css ------*/
.top-search-area.home-two-shearch {
  margin: 0 0 30px;
}

.top-search-area.home-two-shearch .search-form-input .nice-select {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  border-radius: 0;
  box-shadow: none;
  color: #000000;
  height: 43px;
  left: 0px;
  line-height: 43px;
  padding: 0 21px;
  position: absolute;
  top: 0;
  width: 164px;
  z-index: 9;
}

.top-search-area.home-two-shearch .search-form-input .nice-select:before {
  background: #a1a1a1 none repeat scroll 0 0;
  content: "";
  height: 25px;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 1px;
}

.top-search-area.home-two-shearch .search-form-input .top-search-btn {
  background: #ff6a00 none repeat scroll 0 0;
  border: medium none;
  border-radius: 0 5px 5px 0;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  height: 45px;
  line-height: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  width: 120px;
}

.top-search-area.home-two-shearch .search-form-input .top-search-btn:hover {
  background: #222222;
}

.header-cart-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
  margin: 25px 0;
}

.dropdown-toggle:after {
  display: none;
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

/*---  setting-account css ----*/
.setting-account {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  margin-right: 20px;
  padding-right: 20px;
  position: relative;
}

.setting-account:after {
  background: #ffffff none repeat scroll 0 0;
  content: "";
  height: 20px;
  margin-top: -10px;
  position: absolute;
  right: 0;
  top: 50%;
  /*--width: 1px;--*/
}

.header-cart-box .btn-group .btn-link {
  color: black;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  padding: 5px 0;
  text-decoration: none;
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

/*-- header-cart-box-2 css --*/
.header-cart-box .setting-account.home-two-setting .btn-group .btn-link {
  color: #333333;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.header-cart-box.header-cart-box-2 {
  margin: 0 0 30px;
}

.header-cart-box .setting-account.home-two-setting .btn-group .btn-link:hover {
  color: #ff6a00;
}

.home-two-setting .btn-group .dropdown-menu li > a:hover {
  color: #ff6a00;
}

.header-cart-box-2 .setting-account:after {
  background: #333333 none repeat scroll 0 0;
}

#top-shopoing-cart .shopping-cart i {
  color: #ffffff;
  font-size: 32px;
  font-style: normal;
  line-height: 40px;
  vertical-align: middle;
}

#top-shopoing-cart .item-text-number {
  background: #e64545 none repeat scroll 0 0;
  border-radius: 100%;
  color: #000000;
  display: inline-block;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  height: 16px;
  left: 20px;
  line-height: 16px;
  position: absolute;
  text-align: center;
  top: 1px;
  vertical-align: top;
  width: 16px;
}

#top-shopoing-cart .top-cart-total {
  color: #ffffff;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  margin-left: 16px;
  padding: 5px 0;
  text-align: left;
  text-transform: capitalize;
  vertical-align: top;
}

#top-shopoing-cart .dropdown-menu {
  background: #ffffff none repeat scroll 0 0;
  border: 1px solid #eaecee;
  box-shadow: none;
  box-sizing: border-box;
  margin: 11px 0 0;
  padding: 10px 20px 30px !important;
  right: 0;
  top: 100%;
  -webkit-transform: translate3d(0px, 47px, 0px) !important;
  transform: translate3d(0px, 47px, 0px) !important;
  width: 350px;
}

#top-shopoing-cart .dropdown-menu:after {
  border-bottom-style: solid;
  content: "";
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}

#top-shopoing-cart .dropdown-menu:after {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #fff;
  -o-border-image: none;
  border-image: none;
  border-style: solid;
  border-width: 8px;
  right: 25px;
  top: -15px;
  z-index: 98;
}

#top-shopoing-cart .dropdown-menu li.single-cart {
  margin: 0;
  max-height: 300px;
  overflow: auto;
}

#top-shopoing-cart .dropdown-menu li.single-cart {
  border-bottom: 1px solid #ebebeb;
  display: block;
  padding-bottom: 20px;
  padding-top: 20px;
  position: relative;
}

#top-shopoing-cart .dropdown-menu .cart-info {
  float: left;
}

#top-shopoing-cart .dropdown-menu .cart-img {
  float: left;
  margin-right: 8px;
}

#top-shopoing-cart .dropdown-menu .cart-info > a {
  font-size: 14px;
}

#top-shopoing-cart .dropdown-menu .cart-info .cart-quantity {
  color: #333;
  display: block;
  font-size: 14px;
  line-height: 20px;
  padding: 5px 0;
  margin: 0;
}

#top-shopoing-cart .dropdown-menu .cart-info .cart-price {
  color: #e64545;
  display: block;
  font-size: 20px;
  font-weight: 600;
  padding-top: 2px;
  margin: 0;
}

#top-shopoing-cart .mini-cart-sub .cart-remove {
  background: #eaeaea none repeat scroll 0 0;
  border: medium none;
  border-radius: 500%;
  color: #000000;
  cursor: pointer;
  float: right;
  font-size: 18px;
  height: 20px;
  line-height: 22px;
  padding: 0;
  text-align: center;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  width: 20px;
}

#top-shopoing-cart .mini-cart-sub .cart-remove:hover {
  background: #0879c9;
  color: #fff;
}

#top-shopoing-cart .cart-total-box {
  padding: 20px 0;
}

#top-shopoing-cart .cart-total-box h5 {
  color: #333;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
}

#top-shopoing-cart .cart-total-box h5:last-child {
  margin-bottom: 0px;
}

#top-shopoing-cart .cart-total-box h5 span {
  color: #e64545;
  font-size: 18px;
  font-weight: 600;
}

.cart-button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

#top-shopoing-cart p {
  margin: 0;
}

#top-shopoing-cart p.cart-button a {
  background: #0879c9 none repeat scroll 0 0;
  border: medium none;
  border-radius: 20px;
  color: #ffffff;
  float: left;
  font-size: 14px;
  font-weight: 600;
  line-height: 40px;
  margin-top: 5px;
  padding: 0 33px;
  text-align: center;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

#top-shopoing-cart p.cart-button a:hover {
  background: #e64545;
}

/*------- home-2 css ----------*/
#top-shopoing-cart .top-cart-total.home-two {
  color: #333333;
}

#top-shopoing-cart .shopping-cart.home-two i {
  color: #333;
}

#top-shopoing-cart .home-two .item-text-number {
  background: #ff6a00;
}

#top-shopoing-cart .dropdown-menu .mini-cart-2 .cart-info > a:hover {
  color: #ff6a00;
}

#top-shopoing-cart .mini-cart-sub.mini-cart-2 .cart-remove:hover {
  background: #ff6a00 none repeat scroll 0 0;
}

#top-shopoing-cart .dropdown-menu .mini-cart-2 .cart-info .cart-price {
  color: #ff6a00;
}

#top-shopoing-cart .mini-cart-2 .cart-total-box h5 span {
  color: #ff6a00;
}

#top-shopoing-cart .mini-cart-2 p.cart-button a {
  background: #ff6a00;
}

#top-shopoing-cart .mini-cart-2 p.cart-button a:hover {
  background: #222222;
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

/*---- cate-mobile-toggle ------ */
.vertical-menu > span {
  background: #0879c9 none repeat scroll 0 0;
  color: #ffffff;
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  padding-left: 45px;
  position: relative;
  text-transform: uppercase;
}

#cate-mobile-toggle {
  height: 265px;
  overflow-y: auto;
}

#cate-mobile-toggle > ul {
  padding: 22px 0 0;
}

.sidbar-style ul li {
  padding-top: 10px;
}

#cate-mobile-toggle > ul li > a {
  font-size: 15px;
  padding-bottom: 3px;
  padding-top: 3px;
}

.sidebar-menu li:hover > a,
.sidebar-menu li.has-sub:hover > a,
.sidebar-menu li.has-sub.open > a {
  color: #0879c9;
}

.sidebar-menu .category-sub {
  padding-left: 10px;
}

#cate-mobile-toggle .category-sub li a {
  display: block;
  padding-left: 20px;
  position: relative;
}

#cate-mobile-toggle .category-sub > li > a:before {
  color: #0879c9;
  content: "";
  font-family: "Ionicons";
  font-size: 9px;
  left: 10px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.vertical-menu > span:after {
  content: "";
  font-family: "Ionicons";
  font-size: 27px;
  font-weight: normal;
  left: 16px;
  position: absolute;
}

.menu-hidden {
  display: none;
}

.category-menu ul.category-sub {
  display: none;
}

#cate-mobile-toggle > ul {
  background: #f1f1f1 none repeat scroll 0 0;
  padding: 20px 5px 20px 20px;
}

.sidbar-style > ul > li:first-child {
  padding-top: 0;
}

.sidebar-menu ul li {
  position: relative;
}

.sidbar-style li {
  -webkit-transition: all 300ms ease-in 0s;
  transition: all 300ms ease-in 0s;
}

#cate-mobile-toggle > ul li > a {
  font-size: 15px;
  padding-bottom: 3px;
  padding-top: 3px;
}

.category-menu.sidebar-menu .has-sub a span.holder:after,
.category-menu.sidebar-menu li.has-sub > a:after {
  content: "";
  font-family: "Ionicons";
  font-size: 14px;
  position: absolute;
  right: 20px;
}

.category-menu.sidebar-menu .has-sub.open a span.holder:after,
.category-menu.sidebar-menu li.has-sub.open > a:after {
  content: "";
}
</style>
