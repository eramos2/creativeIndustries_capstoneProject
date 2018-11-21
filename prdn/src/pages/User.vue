<template>
 <!-- My Account page content Start -->
            <div id="myaccount-page-content">
                <div class="container">
                    <div class="account-text-wrapper">
                        <div class="row">
                        <div class="col-md-3">
                            <div class="myaccount-tab-menu nav" role="tablist">
                                <!-- <a href="#dashboad" class="active" data-toggle="tab"><i class="fa fa-dashboard"></i>
                                    Home</a> -->
                                <a href="#account-info" data-toggle="tab"><i class="fa fa-user"></i> Account Details</a>
                                <a href="#orders" data-toggle="tab"><i class="fa fa-user"></i> My Projects</a>
                                <a href="#dashboard" data-toggle="tab"><i class="fa fa-user"></i>New Business</a>

                                <a href="login.html"><i class="fa fa-sign-out"></i> Logout</a>
                            </div>
                        </div>
                         <!-- My Account Tab Content Start -->
                        <div class="col-md-9 mt-15 mt-lg-0">
                            <div class="tab-content" id="myaccountContent">
                                   <useraccount></useraccount> 
                                    <!-- <userprojects></userprojects> -->
                                    <!-- <usernewbusiness></usernewbusiness> -->
                        </div>
                        </div>
                         <!-- My Account Tab Content End -->
                         </div>
                        </div>
                         </div>
                        </div>
                        <!-- My Account Tab Menu End -->
</template>
<script>
import UserAccount from "../components/user/UserAccount.vue";
import UserProjects from "../components/user/UserProjects.vue";
import UserNewBusiness from "../components/user/UserNewBusiness.vue";

export default {
  components: {
    useraccount: UserAccount,
    userprojects: UserProjects,
    usernewbusiness: UserNewBusiness
  },
  data: () => ({
    firstName: "",
    password: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("Submitted");
          return;
        }
        alert("Empty Field(s)");
      });
    }
  }
};
</script>
<style>
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
</style>
