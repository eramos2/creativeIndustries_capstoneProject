<template>
  <!-- Returning Customer Start -->
  <div class="content">
    <div class="col-md-12">
      <div class="well">
        <div class="return-customer">
          <h2 class="changePassmarginTop">
            <span class="glyphicon glyphicon-pencil"></span> Change your password
          </h2>
          <p class="lead">Please check your email for the recover passcode.</p>
          <p class="mb-10">
            <strong></strong>
          </p>
          <form @submit.prevent="validateBeforeSubmit">
            <div>
              <!-- EMAIL -->
              <div class="form-group">
                <div :class="{'form-group': true, 'has-error': errors.has('email') }">
                  <div class="pull-left">
                    <h4>Email</h4>
                  </div>
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
                  <div class="pull-left">
                    <h4>New Password</h4>
                  </div>
                  <input
                    name="password"
                    type="password"
                    v-validate="'required|min:8|max:15'"
                    placeholder="Password"
                    id="password"
                    data-vv-delay="500"
                    v-model="password"
                    ref="password"
                    class="form-control"
                  >
                  <p
                    class="text-danger"
                    v-if="errors.has('password')"
                  >{{ errors.first('password') }}</p>
                </div>
              </div>
              <!-- CONFIRM NEW PASSWORD -->
              <div class="form-group">
                <div :class="{'form-group': true, 'has-error': errors.has('confirmpassword') }">
                  <div class="pull-left">
                    <h4>Confirm New Password</h4>
                  </div>
                  <input
                    name="confirmpassword"
                    type="password"
                    v-validate="'required|min:8|max:15|confirmed:password'"
                    placeholder="Confirm Password"
                    id="confirmpassword"
                    data-vv-delay="500"
                    data-vv-as="confirm password"
                    v-model="confirmpassword"
                    class="form-control"
                  >
                  <p
                    class="text-danger"
                    v-if="errors.has('confirmpassword')"
                  >{{ errors.first('confirmpassword') }}</p>
                </div>
              </div>
              <!-- PASSCODE -->
              <div class="form-group">
                <div :class="{'form-group': true, 'has-error': errors.has('passcode') }">
                  <div class="pull-left">
                    <h4>Enter Passcode</h4>
                  </div>
                  <input
                    name="passcode"
                    type="text"
                    v-validate="'required|min:8|max:15'"
                    placeholder="Passcode"
                    id="passcode"
                    data-vv-delay="500"
                    v-model="passcode"
                    class="form-control"
                  >
                  <p
                    class="text-danger"
                    v-if="errors.has('passcode')"
                  >{{ errors.first('passcode') }}</p>
                </div>
              </div>

              <!-- <b-btn @click="modalShow = errors.any() ">Login</b-btn> -->
              <button :disabled="errors.any()" type="submit">Submit</button>
              <b-modal
                v-model="modalShow"
                id="modal-center"
                @ok="okModal"
                ok-only
                centered
                title="Welcome Back"
              >
                <p class="my-4">{{email}}</p>
              </b-modal>
              <b-modal
                ok-variant="danger"
                ok-only
                v-model="modalShowFail"
                id="modal-center"
                centered
                title="ERROR"
              >
                <p class="my-4">Try Again</p>
              </b-modal>
              <b-modal
                ok-variant="danger"
                ok-only
                v-model="modalShowCred"
                id="modal-center"
                centered
                title="ERROR"
              >
                <p class="my-4">Something went wrong!</p>
              </b-modal>
            </div>
          </form>
          <div></div>
        </div>
      </div>
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
    modalShow: false,
    modalShowFail: false,
    modalShowCred: false,
    email: "",
    password: "",
    confirmpassword: "",
    passcode: ""
  }),
  methods: {
    /**
     * Validate the input data from the User using v-validate rules such as
     * required, max, min, password
     * @return Submitted Alert if result is true else Empty Field(s) Alert
     */
    validateBeforeSubmit: function(e) {
      e.preventDefault();

      this.$validator.validateAll().then(result => {
        if (result) {
          let data = {
            id: 47,
            email: this.email,
            password: this.password,
            confirmpassword: this.confirmpassword,
            passcode: this.passcode
          };
          console.log(data);
          this.$store
            .dispatch("recoverAdminPassword", data)
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
    }
  }
};
</script>
<style>
</style>
