<template>
     <!-- Admin Login Start -->
          <div class="content">
            <div class="col-md-12">
                          
                                <div class="well">
                                    <div class="return-customer">
                                        <h2>Administrator Login</h2>
                                        <p class="mb-10"><strong></strong></p>
                                        <form @submit.prevent="validateBeforeSubmit">
                                        <div>
                                             
                                            <div class="form-group">
                                                <div :class="{'form-group': true, 'has-error': errors.has('adminEmail') }">
                                                <h4>Administrator Email</h4>
                                                <input name="adminEmail" v-validate="'required|email'"  type="email" id="adminEmail" placeholder="Email address" class="form-control"  >
                                                <p class="text-danger" v-if="errors.has('adminEmail')">{{ errors.first('adminEmail') }}</p>
                                                </div>
                                            </div>
                                            
                                            <div class="form-group">
                                                <div :class="{'form-group': true, 'has-error': errors.has('password') }">
                                                <h4>Password</h4>
                                                <input name="password" type="password" v-validate="'required|min:8|max:10'"  placeholder="Password" id="password" v-model="password" class="form-control">
                                                <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                                            </div>
                                            </div>
                                            <p class="lost-password"><a href="forgot-password.html">Forgot password?</a>
                                             </p>
                                            <button :disabled="errors.any()" type="submit">Login</button>
                                            <p class="lost-password"><a href="forgot-password.html">Forgot password?</a>
                                             <a class="pull-right" onclick="loadPage('changePassword')">Have a passcode?</a></p> 
                                            <!-- <button>Login</button> -->
                                            <!-- <p ><a onclick="loadPage('recoverPassword')">Forgot Password?</a>-->
                                           
                                          <!-- <button class="btn btn-default wide" type="button" value="Submit" onClick="validateAdminLogin()">Login</button> -->
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            </div>
                           
                            <!-- Admin Login End -->
</template>
<script>
/**
 * Custom Messages for Alerts if an error appear after validation
 */
import { Validator } from "vee-validate";
const dictionary = {
  en: {
    custom: {
      adminEmail: {
        required: "Please enter your administrator email.",
        email: "The email field must be a valid email."
      }
    }
  }
};

Validator.localize(dictionary);

export default {
  data: () => ({
    adminEmail: "",
    password: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("Welcome Back");
          this.test();
          return;
        }

        alert("Empty Field(s)");
      });
    },
    test() {
      let data = {
        adminEmail: this.adminEmail,
        password: this.password
      };
      console.log(data);
    }
  }
};
</script>
<style>
</style>
