<template>
    <form @submit.prevent="validateBeforeSubmit">  
                          
                                <!-- Single Tab Content Start -->
                                <div class="" id="manageadmin" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>Add Administrator</h3>

                                        <div class="account-details-form checkout-form-list">
                                           
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="single-input-item">
                                                            <label for="firstName" class="required">First Name</label>
                                                             <input name="firstName" v-validate="'required|alpha_dash|max:20'" type="text"  id = "firstName" v-model="firstName"  placeholder="First Name" class="form-control" >
                                                             <p class="text-danger" v-if="errors.has('firstName')">
                                                                 {{errors.first('firstName')}}
                                                                 </p>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <div class="single-input-item">
                                                            <label for="lastName" class="required">Last Name</label>
                                                             <input name ="lastName" v-validate="'required|alpha_dash|max:20'" type="text" class="form-control" id="lastName"  v-model="lastName" placeholder="Last Name">
                                                            <p class="text-danger" v-if="errors.has('lastName')">{{ errors.first('lastName') }}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="single-input-item">
                                                    <label for="email" class="required">Email</label>
                                                     <input name ="email" v-validate="'required|email'" type="text" class="form-control" id="email" v-model="email" placeholder="Email">
                                                    <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                                                </div>
                                                <div class="row">
                                                     <div class="col-lg-6">
                                                <div class="single-input-item">
                                                    <label for="acity" class="required">City</label>
                                                    <input name ="acity" v-validate="'required|max:15'" type="text" class="form-control" id="acity" v-model="acity"  placeholder="City">
                                                    <p class="text-danger" v-if="errors.has('acity')">{{ errors.first('acity') }}</p>
                                                </div>
                                                </div>
                                                 <div class="col-lg-6">
                                                <div class="single-input-item">
                                                    <label for="occupation" class="required">Occupation</label>
                                                    <input name ="occupation" v-validate="'required|max:20'" type="text" class="form-control" id="occupation" v-model="occupation"  placeholder="Occupation">
                                                    <p class="text-danger" v-if="errors.has('occupation')">{{ errors.first('occupation') }}</p>
                                                </div>
                                                </div>
                                                 <div class="col-lg-6">
                                                <div class="single-input-item">
                                                    <label for="birthdate" class="required">Birthdate</label>
                                                    <input name ="birthdate" v-validate="'required|max:10|min:10|date_format:YYYY-MM-DD|date_between:1938-01-01,2000-01-01'" v-model="birthdate"  type="text" class="form-control" id="birthdate" placeholder="Birthdate YYYY-MM-DD">
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
                                                                <input name ="password"  v-validate="'required|min:8|max:15'" type="password" class="form-control" id="password" v-model="password" placeholder="Password" ref="password">
                                                                <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-6">
                                                            <div class="single-input-item">
                                                                <label for="confirm-pwd" class="required">Confirm
                                                                    Password</label>
                                                                 <input name ="confirmedpassword"  v-validate="'required|min:8|max:10|confirmed:password'" v-model="confirmedpassword"   type="password" class="form-control" id="confirmedpassword" placeholder="Confirm Password">
                                                                <p class="text-danger" v-if="errors.has('confirmedpassword')">{{ errors.first('confirmedpassword') }}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                

                                                
                                                    <!-- <button class="btn">Save Changes</button> -->
                                                   <!-- <button >Save Changes</button> -->
                                                   <button :disabled="errors.any()" type="submit">Save Changes</button>
                                                   <b-modal  v-model="modalShow" id="modal-center" @ok="okModal"  centered title="Registered">
                                                    <p class="my-4">{{email}}</p>
                                                    </b-modal>
                                                    <b-modal ok-variant="danger" v-model="modalShowFail"  id="modal-center" centered title="ERROR">
                                                    <p class="my-4">Try Again</p>
                                                    </b-modal>
                                                    <b-modal ok-variant="danger" v-model="modalShowCred" id="modal-center" centered title="ERROR">
                                                    <p class="my-4">Email/password combination failed</p>
                                                    </b-modal>
                                                    </fieldset>
                                              
                                          
                                        </div>
                                    </div>
                                </div>
                                <!-- Single Tab Content End -->
                                
            </form>
</template>
<script>
import { Validator } from "vee-validate";
import Removeadmin from "./Removeadmin.vue";
export default {
  name: "app",
  components: {
    removeadmin: Removeadmin
  },
  data: () => ({
    modalShow: false,
    modalShowFail: false,
    modalShowCred: false,
    firstName: "",
    lastName: "",
    email: null,
    occupation: "",
    acity: "",
    birthdate: "",
    password: "",
    confirmedpassword: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          let userData = {
            email: this.email,
            pass: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            occupation: this.occupation,
            birthday: this.birthdate,
            city: this.acity
          };
          this.$store
            .dispatch("addNewAdmin", userData)
            .then(response => {
              console.log("This is the response");
              console.log(response);
              if (response > 0) {
                return { modalShow: true, modalShowCred: false };
              } else {
                return { modalShow: false, modalShowCred: true };
              }
            })
            .then(data => {
              this.modalShow = data.modalShow;
              this.modalShowCred = data.modalShowCred;
              this.$validator.reset();
            });
          this.$validator.reset();
          return;
        } else {
          this.modalShowFail = true;
        }
      });
    },
    okModal() {
      this.$router.replace("/");
    }
  }
};
</script>
<style>
</style>
