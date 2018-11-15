<template>
   
          <!-- Returning Customer Start -->
                            <div class="col-md-6">
                                <div class="well">
                                    <div class="return-customer">
                                        <h3 class="mb-10 custom-title">Login</h3>
                                        <p class="mb-10"><strong></strong></p>
                                        <form @submit.prevent="validateBeforeSubmit">
                                        <div>
                                             
                                            <div class="form-group">
                                                <div :class="{'form-group': true, 'has-error': errors.has('email') }">
                                                <label>Email</label>
                                                <input name="email" v-validate="'required|email'"  type="text" id="email" placeholder="Email address" class="form-control"  >
                                                <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                                                </div>
                                            </div>
                                            
                                            <div class="form-group">
                                                <div :class="{'form-group': true, 'has-error': errors.has('password') }">
                                                <label>Password</label>
                                                <input name="password" type="password" v-validate="'required|min:8|max:10'"  placeholder="Password" id="password" v-model="password" class="form-control">
                                                <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                                            </div>
                                            </div>
                                            <p class="lost-password"><a href="forgot-password.html">Forgot password?</a></p>
                                            <button>Login</button>
                                        </div>
                                        </form>
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
