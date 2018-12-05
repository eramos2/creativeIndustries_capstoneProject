<template>
  <!-- <form @submit.prevent="validateBeforeSubmit">  -->
  <!-- My Account page content Start -->
  <div id="myaccount-page-content">
    <div class="container">
      <div class="account-text-wrapper">
        <div class="row">
          <div class="col-md-3">
            <div class="myaccount-tab-menu nav" role="tablist">
              <!-- <a href="#dashboad" class="active" data-toggle="tab">
                                  <i class="fa fa-unlock-alt"></i>
              Admininistrator</a>-->
              <router-link to="/admin" tag="a" active-class="active" exact>
                <i class="fa fa-unlock-alt"></i>
                Admininistrator
              </router-link>
              <router-link to="/admin/add" tag="a" active-class="active" exact>
                <i class="fa fa-star"></i> Add
              </router-link>
              <router-link to="/admin/edit" tag="a" active-class="active" exact>
                <i class="fa fa-star"></i> Edit
              </router-link>
              <router-link to="/admin/remove" tag="a" active-class="active" exact>
                <i class="fa fa-star"></i> Remove
              </router-link>
              <router-link to="/admin/requests" tag="a" active-class="active" exact>
                <i class="fa fa-star"></i> Pending Requests
              </router-link>
              <!-- <a href="#add" data-toggle="tab"><i class="fa fa-star"></i> Add</a> -->
              <!-- <a href="#edit" data-toggle="tab"><i class="fa fa-star"></i> Edit</a> -->
              <!-- <a href="#remove" data-toggle="tab"><i class="fa fa-star"></i> Remove</a> -->
              <!-- <a href="#pending-requests" data-toggle="tab"><i class="fa fa-star"></i> Pending Requests</a> -->
            </div>
          </div>
          <!-- My Account Tab Content Start -->
          <div class="col-md-9 mt-15 mt-lg-0">
            <div class="tab-content" id="myaccountContent">
              <router-view :adminAuthenticated="adminAuthenticated" :key="$route.fullPath"></router-view>
              <!-- <welcomeadmin></welcomeadmin> -->
              <!-- <add></add> -->
              <!-- <edit></edit> -->
              <!-- <remove></remove> -->
              <!-- <pending></pending> -->
              <!-- <newrequest></newrequest> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- My Account page content end -->
</template>

<script>
// import Account from "./components/account/Account.vue";
import WelcomeAdmin from "../components/admin/WelcomeAdmin.vue";
import Add from "../components/admin/add/Add.vue";
import Edit from "../components/admin/edit/Edit.vue";
import Remove from "../components/admin/remove/Remove.vue";
import Pending from "../components/admin/pending/Pending.vue";
import NewRequest from "../components/admin/pending/NewRequest.vue";
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap";

export default {
  name: "app",
  props: ["adminAuthenticated"],
  components: {
    // account: Account
    welcomeadmin: WelcomeAdmin,
    add: Add,
    edit: Edit,
    remove: Remove,
    pending: Pending
  }
};
</script>

<style>
.account-text-wrapper {
  background-color: #fff;
  padding: 50px 30px;
}
.myaccount-tab-menu {
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.myaccount-tab-menu a {
  border: 1px solid #ededed;
  border-bottom: none;
  color: #727272;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  display: block;
  padding: 15px;
  text-transform: uppercase;
}

.myaccount-tab-menu a:last-child {
  border-bottom: 1px solid #ededed;
}

.myaccount-tab-menu a:hover,
.myaccount-tab-menu a.active {
  background-color: #12a4dd;
  color: #fff;
}

.myaccount-tab-menu a i.fa {
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  width: 25px;
}

.myaccount-content {
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #ededed;
  padding: 30px;
}

.myaccount-content form {
  margin-top: -20px;
}

@media only screen and (max-width: 575px) {
  .myaccount-content {
    padding: 20px 15px;
  }
}

.myaccount-content h3 {
  font-size: 22px;
  line-height: 1.5;
  border-bottom: 1px dashed #777;
  padding-bottom: 10px;
  margin-bottom: 25px;
  margin-top: 0;
}

.myaccount-content .welcome p {
  color: #000;
}

.myaccount-content .welcome a {
  color: #000;
}

.myaccount-content .welcome a:hover {
  color: #12a4dd;
}

.myaccount-content .welcome strong {
  font-weight: 600;
  color: #39b0ff;
}

.myaccount-table {
  white-space: nowrap;
  font-size: 15px;
  line-height: 1.5;
}

.myaccount-table table th,
.myaccount-table .table th {
  color: #262626;
  padding: 10px;
}

.myaccount-table table td,
.myaccount-table .table td {
  padding: 15px 10px;
  vertical-align: middle;
}

.myaccount-table table .btn,
.myaccount-table .table .btn {
  padding: 10px 20px;
}

.saved-message {
  background-color: #e9ecef;
  border-top: 3px solid #12a4dd;
  -webkit-border-radius: 5px 5px 0 0;
  -moz-border-radius: 5px 5px 0 0;
  border-radius: 5px 5px 0 0;
  font-weight: 600;
  font-size: 13px;
  line-height: 1.5;
  color: #262626;
  padding: 20px;
}

#myaccount-page-content fieldset {
  border: none;
  padding: 0;
}

#myaccount-page-content fieldset legend {
  border-bottom: 1px solid #c5c5c5;
  color: #000;
  font-size: 24px;
  line-height: 1.5;
  padding-bottom: 10px;
  text-transform: capitalize;
  margin-bottom: 0;
}

#myaccount-page-content .btn {
  background: #12a4dd;
  color: #fff;
  padding: 8px 15px;
  border-radius: 0;
}

#myaccount-page-content fieldset .single-input-item {
  margin-top: 30px;
}

#myaccount-page-content .single-input-item input[type="password"] {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 0;
  width: 100%;
  padding: 0 0 0 10px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
  height: 45px;
}

.account-details-form {
  margin-top: 50px;
}

.account-details-form .btn {
  margin-top: 30px;
}
</style>
