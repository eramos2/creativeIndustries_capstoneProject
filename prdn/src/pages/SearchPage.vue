<template>
    <!-- content-wraper start -->
            <div class="content-wraper bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="table-content table-responsive cart-table mt-60">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <!--<th class="plantmore-product-remove">remove</th>-->
                                                <th class="plantmore-product-thumbnail">Business</th>
                                                <th class="cart-product-name">Description</th>
                                                <th class="plantmore-product-price">City</th>
                                                <!--<th class="plantmore-product-quantity">Quantity</th>
                                                <th class="plantmore-product-subtotal">Total</th>-->
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            <search-row-business
                                                v-for="(business,key) in businesses"
                                                :key="key"
                                                :name="business.companyName"
                                                :description="business.description"
                                                :city="business.city"
                                            >
                                            </search-row-business>
                                        </tbody>
                                    </table>
                                </div>
                               
                            
                        </div>
                    </div>
                </div>
            </div>
            <!-- content-wraper end -->
</template>

<script>
import SearchRowBusiness from "../components/search/SearchRowBusiness.vue";

import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    searchRowBusiness: SearchRowBusiness
  },
  methods: {
    ...mapActions(["setBusinesses", "getBusinessesByName"]),
    ...mapGetters(["getBusinesses"])
  },
  beforeMount() {
    // this.setBusinesses();
    this.getBusinessesByName("Cast");
  },
  computed: {
    businesses() {
      return this.getBusinesses();
    },
    searchForBusinesses(keyword) {
      this.getBusinessesByName("Cast");
    }
  }
};
</script>

<style>
.table-content table {
  background: #ffffff none repeat scroll 0 0;
  border-color: #ebebeb;
  border-radius: 0;
  border-style: solid;
  border-width: 1px 0 0 1px;
  margin-bottom: 0;
  text-align: center;
  width: 100%;
}

.table-content table {
  text-align: center;
}

thead {
  background-color: #f6f6f6;
}

.table-content table th {
  border-top: medium none;
  font-size: 15px;
  font-weight: 500;
  padding: 20px 10px;
  text-align: center;
  text-transform: capitalize;
  vertical-align: middle;
  white-space: nowrap;
}

.table-content table td.plantmore-product-remove {
  font-size: 20px;
}

.table-content table td {
  border-top: medium none;
  font-size: 13px;
  padding: 20px 10px;
  vertical-align: middle;
}

.table-content table th,
.table-content table td {
  border-bottom: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
}

.table-content table td {
  font-size: 15px;
}

.plantmore-product-quantity > input {
  text-align: center;
  width: 48px;
}

.cart-table .coupon-all {
  margin-top: 50px;
}

.cart-table .coupon {
  float: left;
}

.cart-table .coupon2 {
  float: right;
}

.cart-table .coupon input {
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #dddddd;
  border-radius: 0;
  color: #333333;
  font-size: 13px;
  height: 42px;
  padding: 10px;
  width: 120px;
  margin-right: 10px;
}

.cart-table .coupon-all input.button {
  background-color: #333333;
  border: 0 none;
  border-radius: 2px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  height: 42px;
  letter-spacing: 1px;
  line-height: 42px;
  padding: 0 25px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  width: inherit;
}

.cart-table .coupon-all input.button:hover {
  background-color: #0879c9;
}

.cart-page-total {
  padding-top: 50px;
  margin-bottom: 60px;
}

.cart-page-total > h2 {
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: capitalize;
}

.cart-page-total > ul {
  border: 1px solid #dddddd;
}

.cart-page-total > ul > li {
  border-bottom: 1px solid #ebebeb;
  color: #252525;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 700;
  list-style: outside none none;
  padding: 10px 30px;
}

.cart-page-total ul > li > span {
  float: right;
}

.cart-page-total li:last-child {
  border-bottom: 0 none;
}

.cart-page-total > a {
  background-color: #333333;
  border: 1px solid #333333;
  color: #ffffff;
  display: inline-block;
  margin-top: 30px;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: capitalize;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.cart-page-total > a:hover {
  background-color: #0879c9;
  border: 1px solid #0879c9;
}

.plantmore-product-stock-status span.in-stock,
.plantmore-product-stock-status span.out-stock {
  color: #30b878;
  font-size: 12px;
  text-transform: capitalize;
}

.plantmore-product-stock-status span.out-stock {
  color: #eb3e32;
}

.plantmore-product-add-cart > a {
  background: #333333 none repeat scroll 0 0;
  border-radius: 5px;
  color: #ffffff;
  display: inline-block;
  font-size: 14px;
  height: 41px;
  line-height: 40px;
  padding: 0 20px;
  text-transform: capitalize;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  width: 180px;
}

.plantmore-product-add-cart > a:hover {
  background: #0879c9;
}
</style>
