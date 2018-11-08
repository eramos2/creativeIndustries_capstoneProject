<template>
    <!-- Returning Customer Start -->
                            <div class="col-md-6">
                                <div class="well">
                                    <div class="return-customer">
                                        <h3 class="mb-10 custom-title">Login</h3>
                                        <p class="mb-10"><strong></strong></p>
                                        <div>
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="text" name="email" placeholder="Email address" id="input-email" v-model="email" class="form-control">
                                                
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" name="pass" placeholder="Password" id="input-password" v-model="password" class="form-control">
                                            </div>
                                            <p class="lost-password"><a href="forgot-password.html">Forgot password?</a></p>
                                            <button @click="loginuser">Login</button>
                                            <!-- <input type="submit" value="Login" class="return-customer-btn"> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Returning Customer End -->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginuser() {
      console.log(
        "This is the Email " +
          this.email +
          " This is the password " +
          this.password
      );
    }
  }
};
</script>

<style>
</style>