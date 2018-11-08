<template>
    <!-- content-wraper start -->
            <div class="content-wraper bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 order-2 order-lg-1">
                            <category-list-box></category-list-box>
                        
                
                            <!-- single-benner start -->
                            <div class="single-benner mt-30 text-center">
                                <a href="#">
                                    <img alt="" src="img/benner/home-04-5.jpg">
                                </a>
                            </div>
                            <!-- single-benner start -->
                        </div>
                        <div class="col-lg-9 order-1 order-lg-2">
                          <!--
                            <div class="row">
                                <div class="col">
                                    <div class="shop-top-bar mt-60">
                                        <div class="shop-bar-inner">
                                            <div class="product-view-mode" >
                                                <ul role="tablist" class="nav shop-item-filter-list">
                                                    <li role="presentation" class="active"><a href="#grid" aria-controls="grid" role="tab" data-toggle="tab" class="active show" aria-selected="true"><i class="fa fa-th"></i></a></li>
                                                    <li role="presentation"><a href="#list" aria-controls="list" role="tab" data-toggle="tab"><i class="fa fa-th-list"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="toolbar-amount">
                                                <span>Showing 1 to 9 of 15</span>
                                            </div>
                                        </div>
                                        <div class="product-select-box">
                                            <div class="product-show">
                                                <p>Show:</p>
                                                <select class="nice-select" name="showing" style="display: none;">
                                                    <option value="1">8</option>
                                                    <option value="2">12</option>
                                                    <option value="3">16</option>
                                                    <option value="4">20</option>
                                                    <option value="5">24</option>
                                                </select>
                                            </div>
                                            <div class="product-short">
                                                <p>Sort By:</p>
                                                <select class="nice-select" name="sortby" style="display: none;">
                                                    <option value="trending">Default</option>
                                                    <option value="sales">Name (A - Z)</option>
                                                    <option value="sales">Name (Z - A)</option>
                                                    <option value="rating">Price (Low > High)</option>
                                                    <option value="date">Rating (Lowest)</option>
                                                    <option value="price-asc">Model (A - Z)</option>
                                                    <option value="price-asc">Model (Z - A)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>-->
                            <div class="shop-products-wrapper">
                                <div class="tab-content">
                                    <grid :categories="resources.materials.categories"></grid>
                                    
                                    <row-list :categories="resources.materials.categories"></row-list>
                                    
                                    <!-- paginatoin-area start -->
                                    <div class="paginatoin-area">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <p>Showing 10-13 of 13 item(s) </p>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <ul class="pagination-box">
                                                    <li><a href="#" class="Previous"> <i class="fa fa-angle-double-left"></i> </a>
                                                    </li>
                                                    <li><a href="#" class="active">1</a></li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li>
                                                      <a href="#" class="Next"> <i class="fa fa-angle-double-right"></i> </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- paginatoin-area end -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- content-wraper end -->
</template>

<script>
import CategoryListBox from "./CategoryListBox.vue";
import Grid from "./Grid.vue";
import RowList from "./RowList.vue";

export default {
  components: {
    categoryListBox: CategoryListBox,
    grid: Grid,
    rowList: RowList
  },
  computed: {
    resources() {
      //console.log("Inside computed before getResources ");
      //return this.getResources();
      return this.$store.getters.getResources;
    }
  }
};
</script>

<style>
.other-page-categoriy .vertical-menu-list {
  display: none;
  position: absolute;
  z-index: 9;
  background: #fff;
}

.sidebar-categores-box {
  background: #ffffff none repeat scroll 0 0;
  border: 1px solid #eaecee;
  margin: 60px 0 30px 0;
  padding: 20px;
}

.sidebar-categores-box .secton-title {
  margin-bottom: 17px;
}

.shop .box-module,
.shop-fullwith .box-module {
  margin-top: 30px;
}

/*--- widget content ----*/
.ui-widget-content {
  background: #333333 none repeat scroll 0 0;
  border: medium none;
  border-radius: 4px;
  height: 6px;
  margin: 25px 0 25px;
}

.ui-slider-range {
  background: #e64545 none repeat scroll 0 0;
}

.ui-state-default,
.ui-widget-content .ui-state-default,
.ui-widget-header .ui-state-default {
  background: #e64545 none repeat scroll 0 0;
  border: 2px solid #e64545;
  border-radius: 50%;
  box-shadow: none;
  color: #ffffff;
  font-weight: normal;
  width: 14px;
  height: 14px;
  cursor: pointer;
}

.ui-widget-content .ui-state-default:hover {
  background: #fff;
}

.filter-price-cont {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
}

.filter-price-cont .input-type > input {
  border: medium none;
  padding: 0 8px 0 0;
  text-align: center;
  width: 50px;
}

.filter-group a:before {
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0);
  content: "";
  display: inline-block;
  font-family: "Ionicons";
  height: 15px;
  line-height: 13px;
  margin-right: 10px;
  text-align: center;
  width: 15px;
}

.filter-group a:hover:before {
  color: #0879c9;
}

.filter-group > a {
  display: block;
  padding: 5px 0;
}

.product-select-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.product-show {
  margin-right: 20px;
}

.product-view-mode {
  margin-right: 20px;
}

.product-view-mode ul li {
  margin-right: 15px;
  margin-top: 4px;
}

.product-view-mode ul li a {
  display: block;
  font-size: 20px;
}

.product-view-mode ul li a:hover {
  color: #0879c9;
}

.product-view-mode ul li a.active {
  color: #0879c9;
}

.shop-products-wrapper .tab-content .tab-pane.active {
  display: block;
}

.shop-bar-inner {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.shop-products-wrapper .tab-content .tab-pane {
  display: none;
  height: auto;
}

.shop-top-bar {
  background: #ffffff none repeat scroll 0 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid #eaecee;
}

.product-short,
.product-show {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.product-short > p,
.product-show p {
  margin: 5px 10px 0 0;
}

.product-short .nice-select,
.product-show .nice-select {
  height: 34px;
  line-height: 31px;
}

.product-short .nice-select {
  width: 168px;
}

.product-show .nice-select {
  width: 168px;
}

.product-show .nice-select {
  width: 76px;
}

.toolbar-amount > span {
  display: block;
  margin-top: 5px;
}

.product-layout-list .price-box .new-price {
  font-size: 18px;
}

.product-layout-list .product-des {
  line-height: 24px;
  margin-bottom: 0;
  margin-top: 0;
  padding: 15px 0;
}

.product-layout-list .list-btn-cart {
  background: #0879c9 none repeat scroll 0 0;
  border: 0 none;
  color: #ffffff;
  display: inline-block;
  font-weight: 600;
  padding: 0 25px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  border-radius: 20px;
  font-size: 14px;
  line-height: 40px;
  margin-top: 5px;
  cursor: pointer;
}

.product-layout-list .list-btn-cart:hover {
  background: #e64545;
}

.product-layout-list:hover .action-links {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  right: 6px;
  visibility: visible;
}

.product-layout-list {
  margin-bottom: 30px;
}

.shop-products-wrapper {
  margin-bottom: 60px;
}

.paginatoin-area {
  margin: 30px 0 0;
}

.pagination-box {
  float: right;
}

.pagination-box > li {
  display: inline-block;
  margin-right: 5px;
}

.pagination-box li a {
  background: #ffffff none repeat scroll 0 0;
  border: 1px solid #ededed;
  border-radius: 2px;
  color: #222222;
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 40px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.pagination-box li a:hover {
  background: #0879c9;
  color: #fff;
}

.pagination-box li a.active {
  background: #0879c9;
  color: #fff;
}

.paginatoin-area p {
  margin: 10px 0;
}
</style>
