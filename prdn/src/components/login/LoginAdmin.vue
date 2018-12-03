<template>
  <!-- Admin Login Start -->
  <div class="content">
    <div class="col-md-12">
      <div class="well">
        <div class="return-customer">
          <h2>Administrator Login</h2>
          <p class="mb-10">
            <strong></strong>
          </p>
          <form @submit.prevent="validateBeforeSubmit">
            <div>
              <div class="form-group">
                <div :class="{'form-group': true, 'has-error': errors.has('adminEmail') }">
                  <h4>Administrator Email</h4>
                  <input
                    name="adminEmail"
                    v-validate="'required|email'"
                    type="email"
                    id="adminEmail"
                    v-model="adminEmail"
                    placeholder="Email address"
                    class="form-control"
                  >
                  <p
                    class="text-danger"
                    v-if="errors.has('adminEmail')"
                  >{{ errors.first('adminEmail') }}</p>
                </div>
              </div>

              <div class="form-group">
                <div :class="{'form-group': true, 'has-error': errors.has('password') }">
                  <h4>Password</h4>
                  <input
                    name="password"
                    type="password"
                    v-validate="'required|min:8|max:15'"
                    placeholder="Password"
                    id="password"
                    v-model="password"
                    class="form-control"
                  >
                  <p
                    class="text-danger"
                    v-if="errors.has('password')"
                  >{{ errors.first('password') }}</p>
                </div>
              </div>
              <button :disabled="errors.any()" type="submit">Login</button>
              <b-modal
                v-model="modalShow"
                id="modal-center"
                @ok="okModal"
                centered
                title="Welcome Back"
              >
                <p class="my-4">{{adminEmail}}</p>
              </b-modal>
              <b-modal
                ok-variant="danger"
                v-model="modalShowFail"
                id="modal-center"
                centered
                title="ERROR"
              >
                <p class="my-4">Try Again</p>
              </b-modal>
              <b-modal
                ok-variant="danger"
                v-model="modalShowCred"
                id="modal-center"
                centered
                title="ERROR"
              >
                <p class="my-4">Youre not an Admin</p>
              </b-modal>

              <p class="lost-password">
                <a class="pull-left" type="submit" @click="forgotPasscode">Forgot password?</a>
                
                <a class="pull-right" type="submit" @click="havePasscode">Have a passcode?</a>
              </p>
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
    password: "",
    modalShow: false,
    modalShowFail: false,
    modalShowCred: false
  }),
  methods: {
    validateBeforeSubmit: function(e) {
      e.preventDefault();

      this.$validator.validateAll().then(result => {
        if (result) {
          let data = {
            email: this.adminEmail,
            password: this.password
          };
          this.$store
            .dispatch("loginAdmin", data)
            .then(response => {
              console.log(response);
              if (response.length > 0) {
                return { modalShow: true, modalShowCred: false };
              } else {
                return { modalShow: false, modalShowCred: true };
              }
            })
            .then(data => {
              this.modalShow = data.modalShow;
              this.modalShowCred = data.modalShowCred;
            });
          this.$validator.reset();
          return;
        } else {
          this.modalShowFail = true;
          this.adminEmail = "";
        }
      });
    },
    okModal() {
      this.$router.replace("/admin");
    },
    forgotPasscode() {
      this.$router.replace("/login/recoverpasswordadmin");
    },
    havePasscode() {
      this.$router.replace("/login/changepasswordadmin");
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
