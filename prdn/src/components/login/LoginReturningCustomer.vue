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
                                             
                                            <div class="form-group">
                                                <div :class="{'form-group': true, 'has-error': errors.has('email') }">
                                                <h4>Email</h4>
                                                <input name="email" v-validate="'required|email'"  type="text" id="email" placeholder="Email address" class="form-control"  >
                                                <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                                                </div>
                                            </div>
                                            
                                            <div class="form-group">
                                                <div :class="{'form-group': true, 'has-error': errors.has('password') }">
                                                <h4>Password</h4>
                                                <input name="password" type="password" v-validate="'required|min:8|max:10'"  placeholder="Password" id="password" v-model="password" class="form-control">
                                                <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                                            </div>
                                            </div>
                                            <p class="lost-password"><a href="forgot-password.html">Forgot password?</a></p>
                                            <button :disabled="errors.any()" type="submit">Login</button>
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
export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("Welcome Back");
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

