<template>
   
          <!-- Returning Customer Start -->
          <div class="content">
            <div class="col-md-12">
                          
                                <div class="well">
                                    <div class="return-customer">
                                        <h2>Login</h2>
                                        <p class="mb-10"><strong></strong></p>
                                        <form @submit.prevent="validateBeforeSubmit">
                                        <div>
                                             <!-- EMAIL -->
                                            <div class="form-group">
                                                <div :class="{'form-group': true, 'has-error': errors.has('email') }">
                                                <h4>Email</h4>
                                                <input name="email" v-validate="'required|email'"  type="email" v-model="email" id="email" data-vv-delay="500" placeholder="Email address" class="form-control"  >
                                                <!-- <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p> -->
                                                <i v-show="errors.has('email')" class="fa fa-warning"></i>
                                               <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                                                </div>
                                            </div>
                                                             <!-- PASSWORD -->
                                              <!-- MUST BE MIN 8 CHARACTERS AND MAX 15 CHARACTERS -->
                                            <div class="form-group">
                                                <div :class="{'form-group': true, 'has-error': errors.has('password') }">
                                                <h4>Password</h4>
                                                <input name="password" type="password" v-validate="'required|min:8|max:15'"  placeholder="Password"  id="password" data-vv-delay="500"  v-model="password" class="form-control">
                                                <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                                            </div>
                                            </div>
                                            <button  :disabled="errors.any()" type="submit">Login</button>
                                            <p class="lost-password">
                                              <a class="pull-left" href="forgot-password.html">Forgot password?</a>
                                          
                                             <a class="pull-right" onclick="loadPage('changePassword')">Have a passcode?</a></p> 
                                            <!-- <button>Login</button> -->
                                            <!-- <p ><a onclick="loadPage('recoverPassword')">Forgot Password?</a>
                                            <a class="pull-right" onclick="loadPage('changePassword')">Have a passcode?</a></p> -->
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            </div>
                           
                            <!-- Returning Customer End -->
                            
</template>
       

<script>
import { Validator } from "vee-validate";

const emailsDB = ["test@upr.edu"];

export default {
  data: () => ({
    email: "",
    password: "",
    testEmail: "test@upr.edu"
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.login(this.email, this.password).then(datatt => {
            console.log(datatt);
            this.$validator.reset();
            this.$router.replace("/");
            console.log(this.$store.state.users.user);
            alert("Login Sucessful");
          });
        } else {
          alert("There are some empty Field(s)");
        }
      });
    },
    login(email, pass) {
      console.log(email + pass);
      return this.$store.dispatch("loginUser", {
        email: email,
        password: pass
      });
    },
    test() {
      let data = {
        email: this.email,
        password: this.password
      };
      this.email = "";
      this.password = "";
      console.log(data);
    }
  }
};
</script>
<style>
</style>

