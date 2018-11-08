<template>
     <div class="row">
                        <div class="col-sm-12">
                            <form class="form-register" action="#">
                                <fieldset>
                                    <legend>Personal Details</legend>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="f-name"><span class="require"></span>First Name</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" id="f-name" v-model="firstName" placeholder="First Name">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="l-name"><span class="require"></span>Last Name</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" id="l-name" v-model="lastName" placeholder="Last Name">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="email"><span class="require"></span>Email address</label>
                                        <div class="col-md-10">
                                            <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter you email address here">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="number"><span class="require"></span>Telephone</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" id="number" v-model="telephone" placeholder="Telephone">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="occupation"><span class="require"></span>Occupation</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" id="occupation" v-model="occupation" placeholder="Occupation">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="Birthdate"><span class="require"></span>Birthdate</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" id="birthdate" v-model="birthdate"  placeholder="Birthdate yyyy-mm-dd">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="city"><span class="require"></span>City</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" id="city" v-model="city" placeholder="City">
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Your Password</legend>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="pwd"><span class="require"></span>Password:</label>
                                        <div class="col-md-10">
                                            <input type="password" class="form-control" id="pwd" v-model="password"  placeholder="Password">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="pwd-confirm"><span class="require"></span>Confirm Password</label>
                                        <div class="col-md-10">
                                            <input type="password" class="form-control" id="pwd-confirm" v-model="confirmPassword" placeholder="Confirm password">
                                        </div>
                                    </div>
                                    <button @click="submit">Submit</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      occupation: "",
      birthdate: "",
      city: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    submit() {
      console.log(
        "Name: " +
          this.firstName +
          " Last Name: " +
          this.lastName +
          " Email: " +
          this.email +
          " Telephone: " +
          this.telephone +
          " Occupation: " +
          this.occupation +
          " Birthdate: " +
          this.birthdate +
          " City: " +
          this.city +
          " Password: " +
          this.password +
          " Confirm Password: " +
          this.confirmPassword
      );
    }
  }
};
</script>
<style>
</style>
