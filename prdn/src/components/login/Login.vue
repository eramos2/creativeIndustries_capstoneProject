<template>
    <!-- cart page content -->
            <div class="login-page-area">
                <div class="container">
                    <div class="login-area">
                      <router-view></router-view>
                    <!-- <login-returning-customer > </login-returning-customer> -->
                    <!-- <login-admin></login-admin> -->
                    <!-- <recoverpassword></recoverpassword> -->
                    <!-- <changepassword></changepassword> -->

                    </div>
                    </div>
            </div>

</template>

<script>
import LoginReturningCustomer from "./LoginReturningCustomer.vue";
import LoginAdmin from "./LoginAdmin.vue";
import RecoverPassword from "./RecoverPassword.vue";
import ChangePassword from "./ChangePassword.vue";

export default {
  components: {
    loginReturningCustomer: LoginReturningCustomer,
    loginadmin: LoginAdmin,
    recoverpassword: RecoverPassword,
    changepassword: ChangePassword
  }
};
</script>

<style>
</style>