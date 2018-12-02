<template>
  <!-- Returning Customer Start -->
  <div class="content">
    <div class="col-md-12">
      <div class="well">
        <div class="return-customer">
          <h2>Login</h2>
          <p class="mb-10">
            <strong></strong>
          </p>
          <form @submit.prevent="validateBeforeSubmit">
            <div>
              <!-- EMAIL -->
              <div class="form-group">
                <div :class="{'form-group': true, 'has-error': errors.has('email') }">
                  <h4>Email</h4>
                  <input
                    name="email"
                    v-validate="'required|email'"
                    type="email"
                    v-model="email"
                    id="email"
                    data-vv-delay="500"
                    placeholder="Email address"
                    class="form-control"
                  >
                  <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                </div>
              </div>
              <!-- PASSWORD -->
              <!-- MUST BE MIN 8 CHARACTERS AND MAX 15 CHARACTERS -->
              <div class="form-group">
                <div :class="{'form-group': true, 'has-error': errors.has('password') }">
                  <h4>Password</h4>
                  <input
                    name="password"
                    type="password"
                    v-validate="'required|min:8|max:15'"
                    placeholder="Password"
                    id="password"
                    data-vv-delay="500"
                    v-model="password"
                    class="form-control"
                  >
                  <p
                    class="text-danger"
                    v-if="errors.has('password')"
                  >{{ errors.first('password') }}</p>
                </div>
              </div>

              <!-- <b-btn @click="modalShow = errors.any() ">Login</b-btn> -->
              <button :disabled="errors.any()" type="submit">Login</button>
              <b-modal
                v-model="modalShow"
                id="modal-center"
                @ok="okModal"
                centered
                title="Welcome Back"
              >
                <p class="my-4">{{email}}</p>
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
                <p class="my-4">Please create an account</p>
              </b-modal>
              <p class="lost-password">
                <a class="pull-left" type="submit" @click="forgotPasscode">Forgot password?</a>
                
                <a class="pull-right" type="submit" @click="havePasscode">Have a passcode?</a>
              </p>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Returning Customer End -->
</template>
       

<script>
import { Validator } from "vee-validate";
import { mapActions } from "vuex";
const emailsDB = ["test@upr.edu"];

export default {
  data: () => ({
    modalShow: false,
    modalShowFail: false,
    modalShowCred: false,
    email: "",
    password: "",
    testEmail: "test@upr.edu"
  }),
  methods: {
    validateBeforeSubmit: function(e) {
      e.preventDefault();

      this.$validator.validateAll().then(result => {
        if (result) {
          let data = {
            email: this.email,
            password: this.password
          };
          this.$store
            .dispatch("loginUser", data)
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
        }
      });
    },
    okModal() {
      this.$router.replace("/");
    },
    forgotPasscode() {
      this.$router.replace("/login/recoverpassword");
    },
    havePasscode() {
      this.$router.replace("/login/changePassword");
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

