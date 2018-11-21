<template>
    <form @submit.prevent="validateBeforeSubmit">  
                          
                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="manageadmin" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>Add Administrator</h3>

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
                                                    <label for="email" class="required">Email</label>
                                                     <input name ="email" v-validate="'required|email|max:20'" type="text" class="form-control" id="email" placeholder="Email">
                                                    <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                                                </div>
                                                <div class="row">
                                                     <div class="col-lg-6">
                                                <div class="single-input-item">
                                                    <label for="city" class="required">City</label>
                                                    <input name ="city" v-validate="'required|max:15'" type="text" class="form-control" id="city" placeholder="City">
                                                    <p class="text-danger" v-if="errors.has('city')">{{ errors.first('city') }}</p>
                                                </div>
                                                </div>
                                                 <div class="col-lg-6">
                                                <div class="single-input-item">
                                                    <label for="occupation" class="required">Occupation</label>
                                                    <input name ="occupation" v-validate="'required|max:20'" type="text" class="form-control" id="city" placeholder="Occupation">
                                                    <p class="text-danger" v-if="errors.has('occupation')">{{ errors.first('occupation') }}</p>
                                                </div>
                                                </div>
                                                 <div class="col-lg-6">
                                                <div class="single-input-item">
                                                    <label for="birthdate" class="required">Birthdate</label>
                                                    <input name ="birthdate" v-validate="'date_format:DD/MM/YYYY|date_between:01/01/1938,01/01/1997'" type="text" class="form-control" id="birthdate" placeholder="Birthdate DD/MM/YYYY">
                                                    <p class="text-danger" v-if="errors.has('birthdate')">{{ errors.first('birthdate') }}</p>
                                                </div>
                                                </div>


                                                </div>

                                                <fieldset>
                                                    <legend>Password</legend>
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
                                                   <!-- <button >Save Changes</button> -->
                                                   <button :disabled="errors.any()" type="submit">Save Changes</button>
                                                </div>
                                            </form>
                                        </div>

                                         <div class="row">
                                         </div>

                                        <h3>Remove Administrator</h3>
                                        <div class="row">
                                         </div>

                                        <removeadmin></removeadmin>
                                    </div>
                                </div>
                                <!-- Single Tab Content End -->
                                
            </form>
</template>
<script>
import Removeadmin from "./Removeadmin.vue";
export default {
  name: "app",
  components: {
    removeadmin: Removeadmin
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
</style>
