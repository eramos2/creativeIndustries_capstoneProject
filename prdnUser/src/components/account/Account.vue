<template>
<form @submit.prevent="validateBeforeSubmit"> 
 <!-- My Account page content Start -->
            <div id="myaccount-page-content">
                <div class="container">
                    <div class="account-text-wrapper">
                        <div class="row">
                        <div class="col-md-3">
                            <div class="myaccount-tab-menu nav" role="tablist">
                                <a href="#dashboad" class="active" data-toggle="tab"><i class="fa fa-dashboard"></i>
                                    Home</a>
                                <a href="#account-info" data-toggle="tab"><i class="fa fa-user"></i> Account Details</a>
                                <a href="#orders" data-toggle="tab"><i class="fa fa-user"></i> My Projects</a>

                                <a href="login.html"><i class="fa fa-sign-out"></i> Logout</a>
                            </div>
                        </div>
                        <!-- My Account Tab Menu End -->

                        <!-- My Account Tab Content Start -->
                        <div class="col-md-9 mt-15 mt-lg-0">
                            <div class="tab-content" id="myaccountContent">
                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>Home</h3>

                                        <div class="welcome">
                                            <p>Hello, <strong></strong> <a
                                                    href="login.html" class="logout"> </a></p>
                                        </div>

                                        <p class="mb-0">Manage your Account Details</p>
                                    </div>
                                </div>
                                <!-- Single Tab Content End -->

                              
                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="account-info" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>Account Details</h3>

                                        <div class="account-details-form checkout-form-list">
                                            <form action="#">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="single-input-item">
                                                            <label for="firstName" class="required">First Name</label>
                                                             <input name="firstName" v-validate="'required|alpha|max:15'" type="text"  id = "firstName"  placeholder="First Name" class="form-control" >
                                                             <p class="text-danger" v-if="errors.has('firstName')">
                                                                 {{errors.first('firstName')}}
                                                                 </p>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <div class="single-input-item">
                                                            <label for="lastName" class="required">Last Name</label>
                                                             <input name ="lastName" v-validate="'required|alpha|max:15'" type="text" class="form-control" id="lastName" placeholder="Last Name">
                                                            <p class="text-danger" v-if="errors.has('lastName')">{{ errors.first('lastName') }}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="single-input-item">
                                                    <label for="userID" class="required">Username</label>
                                                     <input name ="userID" v-validate="'required|max:15'" type="text" class="form-control" id="userID" placeholder="Username">
                                                    <p class="text-danger" v-if="errors.has('userID')">{{ errors.first('userID') }}</p>
                                                </div>

                                                <div class="single-input-item">
                                                    <label for="email" class="required">Email Address</label>
                                                    <input name ="email" v-validate="'required|email'" type="email" class="form-control" id="email" placeholder="Email">
                                                    <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                                                </div>

                                                <fieldset>
                                                    <legend>Password change</legend>
                                                    <div class="single-input-item">
                                                        <label for="current-pwd" class="required">Current
                                                            Password</label>
                                                        <input name ="password"  v-validate="'required|min:8|max:10'" type="password" class="form-control" id="password" placeholder="Password" >
                                                        <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="single-input-item">
                                                                <label for="new-pwd" class="required">New
                                                                    Password</label>
                                                                <input name ="password"  v-validate="'required|min:8|max:10'" type="password" class="form-control" id="password" placeholder="Password" ref="password">
                                                                <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-6">
                                                            <div class="single-input-item">
                                                                <label for="confirm-pwd" class="required">Confirm
                                                                    Password</label>
                                                                 <input name ="active"  v-validate="'required|min:8|max:10|confirmed:password'"  type="password" class="form-control" id="active" placeholder="Confirm Password">
                                                                <p class="text-danger" v-if="errors.has('active')">{{ errors.first('active') }}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>

                                                <div class="single-input-item">
                                                    <!-- <button class="btn">Save Changes</button> -->
                                                   <button >Save Changes</button>
                                                    
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- Single Tab Content End -->

                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="orders" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>My Projects Details</h3>

                                        <div class="account-details-form checkout-form-list">
                                            <form action="#">
                                                        <div class="single-input-item">
                                                            <label for="projectName" class="required">Project Name</label>
                                                             <input name="projectName" v-validate="'required|max:15'" type="text"  id = "projectName"  placeholder="Project Name" class="form-control" >
                                                             <p class="text-danger" v-if="errors.has('projectName')">
                                                                 {{errors.first('projectName')}}
                                                                 </p>
                                                        </div>
                                                 <div class="col-md-12">
                                                <div class="single-input-item">
                                                    <label for="description" class="required">Description</label>
                                                     <input name ="description" v-validate="'required|max:40'" type="text" class="form-control" id="description" placeholder="Brief Description">
                                                    <p class="text-danger" v-if="errors.has('description')">{{ errors.first('description') }}</p>
                                                </div>
                                                </div>
                                                <fieldset>
                                                    <legend>Select 3 tags for your Project</legend>
                                                <div class="single-input-item">
                                                    <label for="tag1" class="required">Tag#1</label>
                                                    <input name ="tag1" v-validate="'required'" type="text" class="form-control" id="tag1" placeholder="Tag 1">
                                                    <p class="text-danger" v-if="errors.has('tag1')">{{ errors.first('tag1') }}</p>
                                                </div>
                                                <div class="single-input-item">
                                                    <label for="tag2" class="required">Tag#2</label>
                                                    <input name ="tag2" v-validate="'required'" type="text" class="form-control" id="tag2" placeholder="Tag 2 ">
                                                    <p class="text-danger" v-if="errors.has('tag2')">{{ errors.first('tag2') }}</p>
                                                </div>
                                                <div class="single-input-item">
                                                    <label for="tag3" class="required">Tag#3</label>
                                                    <input name ="tag3" v-validate="'required'" type="text" class="form-control" id="tag3" placeholder="Tag 3">
                                                    <p class="text-danger" v-if="errors.has('tag3')">{{ errors.first('tag3') }}</p>
                                                </div>
                                                </fieldset>
                                                <div class="single-input-item">
                                                    <!-- <button class="btn">Save Changes</button> -->
                                                    <button :disabled="errors.any()" type="submit">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- Single Tab Content End -->
                                
                            </div>
                        </div>
                        <!-- My Account Tab Content End -->
                    </div>
                    </div>
                </div>
            </div>
            </form>
</template>
<script>
export default {
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
// export default {
//   data() {
//     return {
//       firstName: "",
//       lastName: "",
//       displayName: "",
//       email: "",
//       currentPassword: "",
//       newPassword: "",
//       confirmPassword: ""
//     };
//   },
//   methods: {
//     submit() {
//       console.log(
//         "Name: " +
//           this.firstName +
//           " Last Name: " +
//           this.lastName +
//           " Display Name: " +
//           this.displayName +
//           " Email: " +
//           this.email +
//           " Current Password: " +
//           this.currentPassword +
//           " New Password: " +
//           this.newPassword +
//           " Confirm Password: " +
//           this.confirmPassword
//       );
//     }
//   }
// };
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

