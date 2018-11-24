<template>

                          
                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="account-info" role="tabpanel">
                                    <div class="myaccount-content">
                                        <form @submit.prevent="validateBeforeSubmit">  
                                        <h3>Account Details</h3>

                                        <div class="account-details-form checkout-form-list">
                                            <!-- <form action="#"> -->
                                                <!--  FIRST NAME -->
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="single-input-item">
                                                            <label for="firstName" class="required">First Name</label>
                                                             <input name="firstName" v-validate="'required|alpha_spaces|max:15|alpha_dash'" type="text"  id = "firstName" v-model="firstName"  placeholder="First Name" class="form-control" >
                                                             <p class="text-danger" v-if="errors.has('firstName')">
                                                                 {{errors.first('firstName')}}
                                                                 </p>
                                                        </div>
                                                    </div>
                                                     <!--  LAST NAME -->
                                                    <div class="col-lg-6">
                                                        <div class="single-input-item">
                                                            <label for="lastName" class="required">Last Name</label>
                                                             <input name ="lastName" v-validate="'required|alpha_spaces|max:15'" type="text" v-model="lastName" class="form-control" id="lastName" placeholder="Last Name">
                                                            <p class="text-danger" v-if="errors.has('lastName')">{{ errors.first('lastName') }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--  OCCUPATION -->
                                                <div class="single-input-item">
                                                    <label for="occupation" class="required">Occupation</label>
                                                     <input name ="occupation" v-validate="'required|max:15|alpha_spaces'" type="text" class="form-control" v-model="occupation" id="occupation" placeholder="Occupation">
                                                    <p class="text-danger" v-if="errors.has('occupation')">{{ errors.first('occupation') }}</p>
                                                </div>
                                                <!--  CITY -->
                                                <div class="single-input-item">
                                                    <label for="city" class="required">City</label>
                                                    <input name ="city" v-validate="'required|max:15|alpha_spaces'" type="text" class="form-control" v-model="city" id="city" placeholder="City">
                                                    <p class="text-danger" v-if="errors.has('city')">{{ errors.first('city') }}</p>
                                                </div>
                                                
                                                <fieldset>
                                                    <legend>Password change</legend>
                                                    <!--  NEW PASSWORD -->
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="single-input-item">
                                                                <label for="new-pwd" class="required">New
                                                                    Password</label>
                                                                <input name ="password"  v-validate="'required|min:8|max:15'" type="password" v-model="password" class="form-control" id="password" placeholder="Password" ref="password">
                                                                <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                                                            </div>
                                                        </div>
                                                        <!--  CONFIRM PASSWORD -->
                                                        <div class="col-lg-6">
                                                            <div class="single-input-item">
                                                                <label for="confirmedpassword" class="required">Confirm
                                                                    Password</label>
                                                                 <input name ="confirmedpassword"  v-validate="'required|min:8|max:15|confirmed:password'" data-vv-delay="10000"  type="password" class="form-control" id="confirmedpassword" placeholder="Confirm Password">
                                                                <p class="text-danger" v-if="errors.has('confirmedpassword')">{{ errors.first('confirmedpassword') }}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>

                                                <div class="single-input-item">
                                                   <button :disabled="errors.any()" type="submit">Save Changes</button>
                                                   <!-- <button class="btn btn-primary" @click.prevent="test"> </button> -->

                                                </div>
                                            <!-- </form> -->
                                        </div>
                                        </form>
                                    </div>
                                </div>
                                <!-- Single Tab Content End -->
            
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
        max: "The first name field may not be greater than 15 characters."
      },
      lastName: {
        required: "Please enter your last name.",
        alpha: "The last name field may only contain alphabetic characters.",
        max: "The last name field may not be greater than 15 characters."
      },
      confirmedpassword: {
        required: " The confirmed password field is required.",
        min: " The confirmed password field must be at least 8 characters",
        max:
          " The confirmed password field may not be greater than 10 characters.",
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
    occupation: "",
    city: "",
    password: "",
    confirmedpassword: ""
  }),
  methods: {
    /**
     * Validate the input data from the User using v-validate rules such as
     * required, max, min, password
     * @return Submitted Alert if result is true else Empty Field(s) Alert
     */
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log(result);
          alert("Submitted");
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
        password: this.password
      };
      console.log(data);
    }
  }
};
</script>
<style>
</style>


