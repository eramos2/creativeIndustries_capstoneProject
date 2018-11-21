<template>
<!-- <form @submit.prevent="validateBeforeSubmit">  -->
<!-- My Account page content Start -->
            <div id="myaccount-page-content">
                <div class="container">
                    <div class="account-text-wrapper">
                        <div class="row">
                        <div class="col-md-3">
                            <div class="myaccount-tab-menu nav" role="tablist">
                                <a href="#dashboad" class="active" data-toggle="tab"><i class="fa fa-unlock-alt"></i>
                                    Super Admininistrator</a>

                                <a href="#manageadmin" data-toggle="tab"><i class="fa fa-star"></i> Manage Administrator</a>

                                <a href="#add" data-toggle="tab"><i class="fa fa-star"></i> Add</a>

                                <a href="#edit" data-toggle="tab"><i class="fa fa-star"></i> Edit</a>

                                <a href="#remove" data-toggle="tab"><i class="fa fa-star"></i> Remove</a>

                                <a href="#pending-requests" data-toggle="tab"><i class="fa fa-star"></i> Pending Requests</a>

                                

                            </div>
                        </div>
                        <!-- My Account Tab Content Start -->
                        <div class="col-md-9 mt-15 mt-lg-0">
                            <div class="tab-content" id="myaccountContent">
                                    <welcomeadmin></welcomeadmin>
                                    <manageadmin></manageadmin>
                                    <add></add>
                                    <edit></edit>
                                    <remove></remove>
                                    <pending></pending>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <!-- My Account page content end -->
 
</template>

<script>
import WelcomeAdmin from "../components/superadmin/WelcomeAdmin.vue";
import Add from "../components/superadmin/add/Add.vue";
import Edit from "../components/superadmin/edit/Edit.vue";
import Remove from "../components/superadmin/remove/Remove.vue";
import Pending from "../components/superadmin/pending/Pending.vue";
import Manageadmin from "../components/superadmin/manageadmin/Manageadmin.vue";
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap";

export default {
  name: "app",
  components: {
    // account: Account
    welcomeadmin: WelcomeAdmin,
    add: Add,
    edit: Edit,
    remove: Remove,
    pending: Pending,
    manageadmin: Manageadmin
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.myaccount-content {
  font-size: 14px;
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
@media (min-width: 786px) {
  .col-md-4 {
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 33.3%;
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

.row {
  margin-bottom: 2.5rem;
  margin-top: 2px;
}
</style>
