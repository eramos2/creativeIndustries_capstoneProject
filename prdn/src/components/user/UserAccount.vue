<template>
  <!-- Single Tab Content Start -->
  <!-- <div class="tab-pane fade" id="account-info" role="tabpanel"> -->
  <div class id="account-info" href="#editUserData" role="tabpanel">
    <div class="myaccount-content">
      <form @submit.prevent="validateBeforeSubmit">
        <h3>Account Details</h3>

        <div class="account-details-form checkout-form-list">
          <!-- <form action="#"> -->
          <!--  FIRST NAME -->
          <div class="row">
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="firstName" class="required">First Name</label>
                <input
                  name="firstName"
                  v-validate="'required|alpha_spaces|max:15|alpha_dash'"
                  type="text"
                  id="firstName"
                  v-model="firstName"
                  placeholder="First Name"
                  class="form-control"
                >
                <p class="text-danger" v-if="errors.has('firstName')">{{errors.first('firstName')}}</p>
              </div>
            </div>
            <!--  LAST NAME -->
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="lastName" class="required">Last Name</label>
                <input
                  name="lastName"
                  v-validate="'required|alpha_spaces|max:15'"
                  type="text"
                  v-model="lastName"
                  class="form-control"
                  id="lastName"
                  placeholder="Last Name"
                >
                <p class="text-danger" v-if="errors.has('lastName')">{{ errors.first('lastName') }}</p>
              </div>
            </div>
          </div>
          <!--  OCCUPATION -->
          <div class="single-input-item">
            <label for="occupation" class="required">Occupation</label>
            <input
              name="occupation"
              v-validate="'required|max:15|alpha_spaces'"
              type="text"
              class="form-control"
              v-model="occupation"
              id="occupation"
              placeholder="Occupation"
            >
            <p class="text-danger" v-if="errors.has('occupation')">{{ errors.first('occupation') }}</p>
          </div>
          <!--  CITY -->
          <div class="single-input-item">
            <label for="city" class="required">City</label>
            <input
              name="city"
              v-validate="'required|max:15|alpha_spaces'"
              type="text"
              class="form-control"
              v-model="city"
              id="city"
              placeholder="City"
            >
            <p class="text-danger" v-if="errors.has('city')">{{ errors.first('city') }}</p>
          </div>

          <fieldset>
            <legend>Password change</legend>
            <!--  NEW PASSWORD -->
            <div class="row">
              <div class="col-lg-6">
                <div class="single-input-item">
                  <label for="new-pwd">
                    New
                    Password
                  </label>
                  <input
                    name="password"
                    v-validate="'min:8|max:15'"
                    type="password"
                    v-model="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    ref="password"
                  >
                  <p
                    class="text-danger"
                    v-if="errors.has('password')"
                  >{{ errors.first('password') }}</p>
                </div>
              </div>
              <!--  CONFIRM PASSWORD -->
              <div class="col-lg-6">
                <div class="single-input-item">
                  <label for="confirmedpassword">
                    Confirm
                    Password
                  </label>
                  <input
                    name="confirmedpassword"
                    v-validate="'min:8|max:15|confirmed:password'"
                    data-vv-delay="2000"
                    type="password"
                    class="form-control"
                    id="confirmedpassword"
                    placeholder="Confirm Password"
                  >
                  <p
                    class="text-danger"
                    v-if="errors.has('confirmedpassword')"
                  >{{ errors.first('confirmedpassword') }}</p>
                </div>
              </div>
            </div>
          </fieldset>

          <div class="single-input-item">
            <!-- <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#basicModal">Remove</button> -->
            <button :disabled="errors.any()" type="submit" id="saves-btn">Save Changes</button>
            <b-modal
              v-model="modalShow"
              id="modal-center"
              @ok="okModal"
              centered
              title="Received, thank you."
            >
              <p class="my-4">{{firstName +" " + lastName}}</p>
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
              <p class="my-4">Email/password combination failed</p>
            </b-modal>
          </div>
        </div>
      </form>
      <!-- <button>Populate</button> -->
    </div>
  </div>
  <!-- Single Tab Content End -->
</template>
<script>
/**
 * Custom Messages for Alerts if an error appear after validation
 */
import { Validator } from "vee-validate";
const dictionary = {
  en: {
    custom: {
      firstName: {
        required: "Please enter your first name.",
        alpha: "The first name field may only contain alphabetic characters.",
        max: "The first name field may not be greater than 15 characters."
      },
      lastName: {
        required: "Please enter your last name.",
        alpha: "The last name field may only contain alphabetic characters.",
        max: "The last name field may not be greater than 15 characters."
      },
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
  data() {
    return {
      modalShow: false,
      modalShowFail: false,
      modalShowCred: false,
      firstName: "",
      lastName: "",
      occupation: "",
      city: "",
      password: "",
      confirmedpassword: ""
    };
  },
  mounted() {
    this.firstName = this.$store.state.users.user.firstName;
    this.lastName = this.$store.state.users.user.lastName;
    this.occupation = this.$store.state.users.user.occupation;
    this.city = this.$store.state.users.user.city;
  },
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
          let userData = {
            id: this.$store.state.users.user.userId,
            firstName: this.firstName,
            lastName: this.lastName,
            occupation: this.occupation,
            city: this.city,
            pass: this.password,
            email: this.email
          };
          this.$store
            .dispatch("editUserInfo", userData)
            .then(response => {
              console.log(response);
              if (response.length > 0) {
                return { modalShow: true, modalShowCred: false };
              } else {
                return { modalShow: false, modalShowCred: true };
              }
              // this.$store
              //   .dispatch("changeUserPassword", userData)
              //   .then(response => {});
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
      this.$router.replace("/user");
    },

    test() {
      let userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        occupation: this.occupation,
        city: this.city,
        password: this.password
      };
      firstName = "";
      lastName = "";
      occupation = "";
      city = "";
      password = "";
      console.log(data);
    },
    editUserData() {
      let data = {
        firstName: "Emmanuel",
        lastName: "Ramos",
        occupation: "student",
        city: "Naranjito"
      };
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.occupation = data.occupation;
      this.city = data.city;
      this.password = data.password;
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.users.user;
    }
  }
};
</script>
<style>
#saves-btn {
  margin-top: 1.5rem;
}
</style>


