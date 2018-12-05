<template>
  <form @submit.prevent="validateBeforeSubmit">
    <div class="register-page-area">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <!-- <form class="form-register" action="#"> -->
            <div>
              <h2>Register</h2>

              <fieldset>
                <div class="row">
                  <div class="pull-left">
                    <h2>Personal Details</h2>
                  </div>
                </div>
                <div
                  :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('firstName') }"
                >
                  <label class="control-label col-md-2">
                    <span class="require"></span>First Name:*
                  </label>
                  <div class="col-md-10">
                    <!-- FIRST NAME -->
                    <input
                      name="firstName"
                      v-validate="'required|max:20|alpha_spaces'"
                      type="text"
                      id="firstName"
                      v-model="firstName"
                      placeholder="First Name*"
                      class="form-control"
                    >
                    <p
                      class="text-danger"
                      v-if="errors.has('firstName')"
                    >{{ errors.first('firstName') }}</p>
                  </div>
                </div>
                <!-- LAST NAME -->
                <div
                  :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('lastName') }"
                >
                  <label class="control-label col-md-2">
                    <span class="require"></span>Last Name:*
                  </label>
                  <div class="col-md-10">
                    <input
                      name="lastName"
                      v-validate="'required|max:20|alpha_spaces'"
                      type="text"
                      class="form-control"
                      id="lastName"
                      v-model="lastName"
                      placeholder="Last Name*"
                    >
                    <p
                      class="text-danger"
                      v-if="errors.has('lastName')"
                    >{{ errors.first('lastName') }}</p>
                  </div>
                </div>
                <!-- EMAIL -->
                <div
                  :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('email') }"
                >
                  <label class="control-label col-md-2">
                    <span class="require"></span>Email:*
                  </label>
                  <div class="col-md-10">
                    <input
                      name="email"
                      v-validate="'required|email'"
                      :class="{'input': true, 'is-danger': errors.has('email') }"
                      type="email"
                      v-model="email"
                      id="email"
                      placeholder="Email address*"
                      class="form-control"
                    >
                    <i v-show="errors.has('email')" class="text-danger"></i>
                    <span
                      v-show="errors.has('email')"
                      class="text-danger"
                    >{{ errors.first('email') }}</span>
                  </div>
                </div>
                <!-- OCCUPATION -->
                <div
                  :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('occupation') }"
                >
                  <label class="control-label col-md-2">
                    <span class="require"></span>Occupation:*
                  </label>
                  <div class="col-md-10">
                    <input
                      name="occupation"
                      v-validate="'required|max:15|alpha_spaces'"
                      type="text"
                      class="form-control"
                      id="occupation"
                      v-model="occupation"
                      placeholder="Occupation*"
                    >
                    <p
                      class="text-danger"
                      v-if="errors.has('occupation')"
                    >{{ errors.first('occupation') }}</p>
                  </div>
                </div>
                <!-- CITY -->
                <div
                  :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('city') }"
                >
                  <label class="control-label col-md-2">
                    <span class="require"></span>City:*
                  </label>
                  <div class="col-md-10">
                    <input
                      name="city"
                      v-validate="'required|max:15|alpha_spaces'"
                      type="text"
                      class="form-control"
                      id="city"
                      v-model="city"
                      placeholder="City*"
                    >
                    <p class="text-danger" v-if="errors.has('city')">{{ errors.first('city') }}</p>
                  </div>
                </div>
                <!-- BIRTHDATE -->
                <div
                  :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('birthdate') }"
                >
                  <label class="control-label col-md-2">
                    <span class="require"></span>Birthdate:*
                  </label>
                  <div class="col-md-10">
                    <input
                      name="birthdate"
                      v-validate="'required|max:10|min:10|date_format:YYYY-MM-DD|date_between:' +afterDate + ',' + beforeDate "
                      type="text"
                      v-model="birthdate"
                      class="form-control"
                      id="birthdate"
                      placeholder="Birthdate* YYYY-MM-DD"
                    >
                    <p
                      class="text-danger"
                      v-if="errors.has('birthdate')"
                    >{{ errors.first('birthdate') }}</p>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <!-- PASSWORD AND CONFIRMED PASSWORD -->
                <div class="row">
                  <div class="pull-left">
                    <h2>Your Password</h2>
                  </div>
                </div>
                <div
                  :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('password') }"
                >
                  <label class="control-label col-md-2">
                    <span class="require"></span>Password:*
                  </label>
                  <div class="col-md-10">
                    <input
                      name="password"
                      v-validate="'required|min:8|max:15|verify_password'"
                      type="password"
                      class="form-control"
                      id="password"
                      v-model="password"
                      placeholder="Password"
                      ref="password"
                    >
                    <p
                      class="text-danger"
                      v-if="errors.has('password')"
                    >{{ errors.first('password') }}</p>
                  </div>
                </div>
                <div
                  :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('confirmedpassword') }"
                >
                  <label class="control-label col-md-2">
                    <span class="require"></span>Confirm Password:*
                  </label>
                  <div class="col-md-10">
                    <input
                      name="confirmedpassword"
                      v-validate="'required|verify_password|min:8|max:15|confirmed:password'"
                      type="password"
                      class="form-control"
                      id="confirmedpassword"
                      v-model="confirmedpassword"
                      placeholder="Confirm Password"
                    >
                    <p
                      class="text-danger"
                      v-if="errors.has('confirmedpassword')"
                    >{{ errors.first('confirmedpassword') }}</p>
                  </div>
                </div>
                <!-- <button>Submit</button> -->
                <button :disabled="errors.any()" type="submit">Submit</button>
                <b-modal
                  v-model="modalShow"
                  id="modal-center"
                  @ok="okModal"
                  ok-only
                  centered
                  title="Welcome"
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
                  <p class="my-4">Verify your email or any empty or invalid field(s)</p>
                </b-modal>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
/**
 * Custom Messages for Alerts if an error appear after validation
 */
import { Validator } from "vee-validate";
import { restElement } from "babel-types";
import Vue from "vue";
import VeeValidate from "vee-validate";
const dictionary = {
  en: {
    custom: {
      firstName: {
        required: "Please enter your first name.",
        alpha: "The first name field may only contain alphabetic characters.",
        max: "The first name field may not be greater than 15 characters.",
        regex: "The first name field format is invalid.",
        alpha_dash:
          "The first name field may contain alpha-numeric characters as well as dashes and underscores."
      },
      lastName: {
        required: "Please enter your last name.",
        alpha: "The last name field may only contain alphabetic characters.",
        max: "The last name field may not be greater than 15 characters.",
        alpha_dash:
          "The last name field may contain alpha-numeric characters as well as dashes and underscores."
      },
      confirmedpassword: {
        required: " The confirm password field is required.",
        min: " The confirm password field must be at least 8 characters",
        max:
          " The confirm password field may not be greater than 10 characters.",
        confirmed: "The confirmed password confirmation does not match."
      },
      birthdate: {
        max: "The birthdate field must be in the format: YYYY-MM-DD. ",
        min: "The birthdate field must be in the format: YYYY-MM-DD. ",
        date_between: "You must be 18 or older to register in this website "
      }
    }
  }
};

Validator.localize(dictionary);

const emailsDB = ["test@upr.edu", "carlos.rodriguez75@upr.edu"];

Vue.use(VeeValidate);

VeeValidate.Validator.extend("verify_password", {
  getMessage: field =>
    `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. @, . _ & ? etc)`,
  validate: value => {
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return strongRegex.test(value);
  }
});

export default {
  name: "backend-example",
  data: () => ({
    modalShow: false,
    modalShowFail: false,
    modalShowCred: false,
    firstName: "",
    lastName: "",
    email: null,
    occupation: "",
    city: "",
    birthdate: "",
    password: "",
    confirmedpassword: ""
  }),
  dataCollected() {
    return { registerId: [] };
  },
  methods: {
    validateBeforeSubmit: function(e) {
      e.preventDefault();

      this.$validator.validateAll().then(result => {
        if (result) {
          //Input fields are valid
          let userData = {
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            occupation: this.occupation,
            birthday: this.birthdate,
            city: this.city
          };
          this.$store
            .dispatch("registerNewUser", userData)
            .then(response => {
              console.log("This is the response");
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
              this.$validator.reset();
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
    /**
     * Return all Data the user enter for credentials
     * Clear all the variables after the user finish
     * the registration
     */
    register() {
      let userData = {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        occupation: this.occupation,
        birthday: "1991-10-10",
        city: this.city
      };
      console.log("Registering user");
      console.log(userData);
      this.$store.dispatch("registerNewUser", userData);
    },
    test() {
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        occupation: this.occupation,
        city: this.city,
        birthdate: this.birthdate,
        password: this.password,
        confirmedpassword: this.confirmedpassword
      };
      this.firstName = "";
      this.lastName = "";
      this.occupation = "";
      this.city = "";
      this.birthdate = "";
      this.password = "";
      this.confirmedpassword = "";
      console.log(data);
    }
  },
  computed: {
    beforeDate() {
      let date = new Date();
      let beforeDate =
        date.getFullYear() -
        18 +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2);
      console.log(beforeDate + "before");
      return beforeDate;
    },
    afterDate() {
      let date = new Date();
      let afterDate = date.getFullYear() - 100 + "-01-01";
      console.log(afterDate + "After");
      return afterDate;
    }
  }
};
</script>
<style>
</style>
