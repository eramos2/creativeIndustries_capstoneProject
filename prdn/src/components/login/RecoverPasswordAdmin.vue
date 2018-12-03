<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <form @submit.prevent="validateBeforeSubmit">
          <h2 class="marginTop">
            <span class="glyphicon glyphicon-envelope"></span> Recover Password
          </h2>
          <p class="lead">
            Enter your email address in the field and press submit. An email
            will be sent to you with instructions to reset your password.
          </p>

          <div class="input-group">
            <!-- <span class="input-group-addon">@</span> -->
            <input
              type="email"
              name="recPassEmail"
              class="form-control"
              v-validate="'required|email'"
              id="recPassEmail"
              v-model="email"
              data-vv-delay="1000"
              placeholder="Enter your email"
            >
            <p
              class="text-danger"
              v-if="errors.has('recPassEmail')"
            >{{ errors.first('recPassEmail') }}</p>
          </div>
          <button
            :disabled="errors.any()"
            class="btn btn-default wide"
            @click="havePasscode"
            type="submit"
          >Send</button>
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
            <p class="my-4">This email is incorrect</p>
          </b-modal>
        </form>

        <div
          id="passwordRecoverNotificationArea"
          style="color:#f96145; padding: 10px; text-align: right; font-size: 17px"
        ></div>
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
      recPassEmail: {
        required: "Please enter your email.",
        email: "The email field must be a valid email."
      }
    }
  }
};

Validator.localize(dictionary);

export default {
  data: () => ({
    recPassEmail: "",
    email: "",
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
            email: this.email
          };
          this.$store
            .dispatch("sendAdminPasscode", data)
            .then(response => {
              console.log(response);
              if (response > 0) {
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
          this.email = "";
          return;
        } else {
          this.modalShowFail = true;
        }
      });
    },
    okModal() {
      this.$router.replace("/");
    },
    havePasscode() {
      this.$router.replace("/login/changePasswordAdmin");
    }
  }
};
</script>
<style>
</style>
