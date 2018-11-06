<template>
    <!-- cart page content -->
            <div class="login-page-area">
                <div class="container">
                    <div class="login-area">
                    <login-new-customer> </login-new-customer>
                    <login-returning-customer> </login-returning-customer>

                    </div>
                    </div>
            </div>

</template>

<script>
import LoginNewCustomer from "./LoginNewCustomer.vue";
import LoginReturningCustomer from "./LoginReturningCustomer.vue";
import Vue from "vue";
import VuePassword from "vue-password";

Vue.component(VuePassword);

export default {
  components: {
    loginNewCustomer: LoginNewCustomer,
    loginReturningCustomer: LoginReturningCustomer
  }
};
</script>

<style>
.custom-title {
  color: #333333;
  font-size: 25px;
  font-weight: 600;
  text-transform: capitalize;
}

.well {
  background-color: #fff;
  border: 1px solid #ededed;
  border-radius: 4px;
  padding: 20px;
}

.login-area {
  background: #fff;
  padding: 50px 30px;
  margin-bottom: 70px;
}

.log-in p strong {
  color: #444444;
  font-weight: 500;
}

.customer-btn,
.return-customer-btn {
  background: #12a4dd none repeat scroll 0 0;
  border: medium none;
  color: #ffffff;
  display: inline-block;
  font-weight: 500;
  font-size: 15px;
  margin-top: 20px;
  padding: 10px 30px;
  text-align: center;
  text-transform: uppercase;
  -webkit-transition: all 300ms ease-in 0s;
  transition: all 300ms ease-in 0s;
  cursor: pointer;
}

.return-customer-btn {
  background: #1b81c5;
}

a:hover {
  text-decoration: none;
}

.return-customer-btn:hover {
  background: #12a4dd;
  color: #fff;
  border: 1px solid #12a4dd !important;
  text-decoration: none;
}

.customer-btn:hover {
  background: #1b81c5;
  color: #fff;
}

.return-customer label {
  font-weight: 500;
  color: #444;
  font-size: 14px;
}

.return-customer input {
  font-size: 14px;
}

.lost-password a {
  color: #555;
  font-weight: 500;
  font-size: 13px;
}

.lost-password a:hover {
  color: #1b81c5;
}
</style>