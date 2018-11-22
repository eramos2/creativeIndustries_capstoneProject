<template>
    <div class="container">
        <div class="row">
             <div class="col-sm-12">
                 <form @submit.prevent="validateBeforeSubmit">  
            <h2 class="marginTop"><span class="glyphicon glyphicon-envelope"></span> Recover Password</h2>
            <p class="lead">Enter your email address in the field and press submit. An email
                will be sent to you with instructions to reset your password.</p>
           
                <div class="input-group">
                    <!-- <span class="input-group-addon">@</span> -->
                    <input type="email" name="recPassEmail" class="form-control" v-validate="'required|email'" id="recPassEmail" v-model="recPassEmail" data-vv-delay="10000" placeholder="Enter your email"/>
                    <p class="text-danger" v-if="errors.has('recPassEmail')">{{ errors.first('recPassEmail') }}</p>
                </div>
                <button :disabled="errors.any()"  class="btn btn-default wide" type="submit"  onClick="checkRecPassEmail(this.form)">Send</button>
                           
            </form>

            <div id="passwordRecoverNotificationArea" style="color:#f96145; padding: 10px; text-align: right; font-size: 17px">
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
    recPassEmail: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("Email Sent");
          this.test();
          return;
        }

        alert("Empty Field(s)");
      });
    },
    test() {
      let data = {
        recPassEmail: this.recPassEmail
      };
      console.log(data);
    }
  }
};
</script>
<style>
</style>
