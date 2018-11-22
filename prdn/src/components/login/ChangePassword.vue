<template>
  
         <div class="container">
        <div class="row">
                 <form @submit.prevent="validateBeforeSubmit">  
            <h2 class="changePassmarginTop"><span class="glyphicon glyphicon-pencil"></span> Change your password</h2>
            <p class="lead">Please check your email for the recover passcode.</p>
            <div id="error"></div>
                <div class="single-input-item">
                <input type="text" name="email" id="email" v-validate="'required|email'" v-model="email" placeholder="Email">
                <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                </div>
                 <div class="row">
                    <div class="col-lg-6">
                        <div class="single-input-item">
                            <label for="password" class="required">New Password</label>
                                <input name ="password"  v-validate="'required|min:8|max:10'" type="password" v-model="password" data-vv-delay="10000"  class="form-control" id="password" placeholder="Password" ref="password">
                                    <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                                        </div>
                                            </div>
                                     <!--  CONFIRM PASSWORD -->
                <div class="col-lg-6">
                    <div class="single-input-item">
                        <label for="confirmedpassword" class="required">Confirm Password</label>
                            <input name ="confirmedpassword"  v-validate="'required|min:8|max:10|confirmed:password'" data-vv-delay="10000"  type="password" class="form-control" id="confirmedpassword" placeholder="Confirm Password">
                                <p class="text-danger" v-if="errors.has('confirmedpassword')">{{ errors.first('confirmedpassword') }}</p>
                                         </div>
                                    </div>
                             </div>
                <div class="single-input-item">
                <input type="text" name="passcode" v-validate="'required|max:10|min:10'" data-vv-delay="1000"  id="passcode" placeholder="Enter Passcode" >
                <p class="text-danger" v-if="errors.has('passcode')">{{ errors.first('passcode') }}</p>
                </div>
                <button :disabled="errors.any()" class="btn btn-default wide" type="submit" value="Submit" onClick="getChngPassInputs(this.form)">Submit</button>  
            </form>
        </div>

    </div>

</template>
<script>
/**
 * Custom Messages for Alerts if an error appear after validation
 */
import { Validator } from "vee-validate";
const dictionary = {
  en: {
    custom: {
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
    email: "",
    password: "",
    confirmedpassword: "",
    passcode: ""
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
        email: this.email,
        password: this.password,
        confirmedpassword: this.confirmedpassword,
        passcode: this.passcode
      };
      console.log(data);
    }
  }
};
</script>
<style>
</style>
