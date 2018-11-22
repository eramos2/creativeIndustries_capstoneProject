<template>
<form @submit.prevent="validateBeforeSubmit"> 
    <div class="register-page-area">
        <div class="container">
        <div class="row">
                        <div class="col-sm-12">
                            <!-- <form class="form-register" action="#"> -->
                                <div>
                                    <h2>Register</h2>

                                <fieldset>          
                                    <legend>Personal Details</legend>
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('firstName') }">
                                        <label class="control-label col-md-2" for="firstName"><span class="require"></span>First Name</label>
                                        <div class="col-md-10">
                                            <!-- FIRST NAME -->
                                            <input name="firstName" v-validate="'required|alpha_dash|max:20'" type="text"  id = "firstName" v-model="firstName" placeholder="First Name" data-vv-delay="100" class="form-control" >
                                            <p class="text-danger" v-if="errors.has('firstName')">{{ errors.first('firstName') }}</p>
                                        </div>
                                    </div>
                                                <!-- LAST NAME -->
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('lastName') }">
                                        <label class="control-label col-md-2" for="lastName"><span class="require"></span>Last Name</label>
                                        <div class="col-md-10">
                                            <input name ="lastName" v-validate="'required|alpha_dash|max:20'" type="text" class="form-control" id="lastName" data-vv-delay="100" v-model="lastName" placeholder="Last Name">
                                            <p class="text-danger" v-if="errors.has('lastName')">{{ errors.first('lastName') }}</p>
                                        </div>
                                    </div>
                                                    <!-- EMAIL -->
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('email') }">
                                        <label class="control-label col-md-2" for="email"><span class="require"></span>Email</label>
                                        <div class="col-md-10">
                                            <input name ="email" v-validate="'required|email'" type="email" class="form-control" id="email" data-vv-delay="2000" v-model="email" placeholder="Email">
                                            <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                                        </div>
                                    </div>
                                                        <!-- OCCUPATION -->
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('occupation') }">
                                        <label class="control-label col-md-2" for="occupation"><span class="require"></span>Occupation</label>
                                        <div class="col-md-10">
                                            <input name ="occupation" v-validate="'required|max:15|alpha'" data-vv-delay="500"   type="text" class="form-control" id="occupation" v-model="occupation" placeholder="Occupation">
                                            <p class="text-danger" v-if="errors.has('occupation')">{{ errors.first('occupation') }}</p>
                                        </div>
                                    </div>
                                                        <!-- CITY -->
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('city') }">
                                        <label class="control-label col-md-2" for="city"><span class="require"></span>City</label>
                                        <div class="col-md-10">
                                            <input name ="city" v-validate="'required|min:4|max:15|alpha'" data-vv-delay="500"  type="text" class="form-control" id="city" v-model="city" placeholder="City">
                                            <p class="text-danger" v-if="errors.has('city')">{{ errors.first('city') }}</p>
                                        </div>
                                    </div>
                                                            <!-- BIRTHDATE -->
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('birthdate') }">
                                        <label class="control-label col-md-2" for="birthdate"><span class="require"></span>Birthdate</label>
                                        <div class="col-md-10">
                                            <input name ="birthdate" v-validate="'date_format:DD/MM/YYYY|date_between:01/01/1938,01/01/1997'" data-vv-delay="2000"  type="text" v-model="birthdate" class="form-control" id="birthdate" placeholder="Birthdate DD/MM/YYYY">
                                            <p class="text-danger" v-if="errors.has('birthdate')">{{ errors.first('birthdate') }}</p>
                                        </div>
                                    </div>
                                    
                                </fieldset>
                                <fieldset>
                                                        <!-- PASSWORD AND CONFIRMED PASSWORD -->
                                    <legend>Your Password</legend>
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('password') }">
                                        <label class="control-label col-md-2" for="password"><span class="require"></span>Password</label>
                                        <div class="col-md-10">
                                            <input name ="password"  v-validate="'required|min:8|max:10'" type="password"  data-vv-delay="1000" class="form-control" id="password" v-model="password" placeholder="Password" ref="password">
                                            <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                                        </div>
                                    </div>
                                     <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('confirmedpassword') }">
                                        <label class="control-label col-md-2" for="confirmedpassword"><span class="require"></span>Confirm Password</label>
                                        <div class="col-md-10">
                                            <input name ="confirmedpassword"  v-validate="'required|min:8|max:10|confirmed:password'"  type="password" data-vv-delay="1000" class="form-control" id="confirmedpassword" v-model="confirmedpassword" placeholder="Confirm Password">
                                            <p class="text-danger" v-if="errors.has('confirmedpassword')">{{ errors.first('confirmedpassword') }}</p>
                                        </div>
                                    </div>
                                    <!-- <button>Submit</button> -->
                                     <button :disabled="errors.any()" type="submit">Submit</button>
                                </fieldset>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
</template>
<script>
/**
 * Custom Messages for Alerts if an error appear after validation
 */
import { Validator } from "vee-validate";
const dictionary = {
  en: {
    custom: {
      firstName: {
        required: "Please enter your first name.",
        alpha: "The first name field may only contain alphabetic characters.",
        max: "The first name field may not be greater than 15 characters.",
        regex: "The first name field format is invalid.",
        alpha_dash:
          "The first name field may contain alpha-numeric characters as well as dashes and underscores."
      },
      lastName: {
        required: "Please enter your last name.",
        alpha: "The last name field may only contain alphabetic characters.",
        max: "The last name field may not be greater than 15 characters.",
        alpha_dash:
          "The last name field may contain alpha-numeric characters as well as dashes and underscores."
      },
      confirmedpassword: {
        required: " The confirm password field is required.",
        min: " The confirm password field must be at least 8 characters",
        max:
          " The confirm password field may not be greater than 10 characters.",
        confirmed: "The confirmed password confirmation does not match."
      }
    }
  }
};

Validator.localize(dictionary);

export default {
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    birthdate: "",
    password: "",
    confirmedpassword: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("Registration Form Submitted");
          this.test();
          return;
        }

        alert("Empty Field(s)");
      });
    },

    test() {
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        occupation: this.occupation,
        city: this.city,
        birthdate: this.birthdate,
        password: this.password,
        confirmedpassword: this.confirmedpassword
      };
      console.log(data);
    }
  }
};
</script>
<style>
</style>
