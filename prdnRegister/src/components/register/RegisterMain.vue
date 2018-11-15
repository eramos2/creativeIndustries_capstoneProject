<template>
        <div class="row">
                        <div class="col-sm-12">
                            <!-- <form class="form-register" action="#"> -->
                                <div>
                                <form @submit.prevent="validateBeforeSubmit"> 
                                <fieldset>          
                                    <legend>Personal Details</legend>
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('firstName') }">
                                        <label class="control-label col-md-2" for="firstName"><span class="require"></span>First Name</label>
                                        <div class="col-md-10">
                                            <input name="firstName" v-validate="'required|alpha'" type="text"  id = "firstName"  placeholder="First Name" class="form-control" >
                                            <p class="text-danger" v-if="errors.has('firstName')">{{ errors.first('firstName') }}</p>
                                        </div>
                                    </div>
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('lastName') }">
                                        <label class="control-label col-md-2" for="lastName"><span class="require"></span>Last Name</label>
                                        <div class="col-md-10">
                                            <input name ="lastName" v-validate="'required|alpha'" type="text" class="form-control" id="lastName" placeholder="Last Name">
                                            <p class="text-danger" v-if="errors.has('lastName')">{{ errors.first('lastName') }}</p>
                                        </div>
                                    </div>
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('email') }">
                                        <label class="control-label col-md-2" for="email"><span class="require"></span>Email</label>
                                        <div class="col-md-10">
                                            <input name ="email" v-validate="'required|email'" type="email" class="form-control" id="email" placeholder="Email">
                                            <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                                        </div>
                                    </div>
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('occupation') }">
                                        <label class="control-label col-md-2" for="occupation"><span class="require"></span>Occupation</label>
                                        <div class="col-md-10">
                                            <input name ="occupation" v-validate="'required|max:15|alpha'"  type="text" class="form-control" id="occupation" placeholder="Occupation">
                                            <p class="text-danger" v-if="errors.has('occupation')">{{ errors.first('occupation') }}</p>
                                        </div>
                                    </div>
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('city') }">
                                        <label class="control-label col-md-2" for="city"><span class="require"></span>City</label>
                                        <div class="col-md-10">
                                            <input name ="city" v-validate="'required|min:4|max:15|alpha'" type="text" class="form-control" id="city" placeholder="City">
                                            <p class="text-danger" v-if="errors.has('city')">{{ errors.first('city') }}</p>
                                        </div>
                                    </div>
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('birthday') }">
                                        <label class="control-label col-md-2" for="birthday"><span class="require"></span>Birthday</label>
                                        <div class="col-md-10">
                                            <input name ="birthday" v-validate="'date_format:DD/MM/YYYY|date_between:01/01/1938,01/01/1997'" type="text" class="form-control" id="birthday" placeholder="Birthdate DD/MM/YYYY">
                                            <p class="text-danger" v-if="errors.has('birthday')">{{ errors.first('birthday') }}</p>
                                        </div>
                                    </div>
                                    
                                </fieldset>
                                <fieldset>
                                    <legend>Your Password</legend>
                                    <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('password') }">
                                        <label class="control-label col-md-2" for="password"><span class="require"></span>Password</label>
                                        <div class="col-md-10">
                                            <input name ="password"  v-validate="'required|min:8|max:10'" type="password" class="form-control" id="password" placeholder="Password" ref="password">
                                            <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                                        </div>
                                    </div>
                                     <div :class="{'form-group d-md-flex align-items-md-center': true, 'has-error': errors.has('active') }">
                                        <label class="control-label col-md-2" for="active"><span class="require"></span>Confirm Password</label>
                                        <div class="col-md-10">
                                            <input name ="active"  v-validate="'required|min:8|max:10|confirmed:password'"  type="password" class="form-control" id="active" placeholder="Confirm Password">
                                            <p class="text-danger" v-if="errors.has('active')">{{ errors.first('active') }}</p>
                                        </div>
                                    </div>
                                    <button>Submit</button>
                                </fieldset>
                             </form>
                            </div>
                        </div>
        </div>
</template>
<script>
export default {
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    birthday: "",
    password: "",
    active: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("Registration Submitted");
          return;
        }

        alert("Empty Field(s)");
      });
    }
  }
};
//   data() {
//     return {
//       firstName: "",
//       lastName: "",
//       email: "",
//       telephone: "",
//       occupation: "",
//       birthdate: "",
//       city: "",
//       password: "",
//       passwordconfirmation: ""
//     };
//   },
//   methods: {
//     submit() {
//       console.log(
//         "Name: " +
//           this.firstName +
//           " Last Name: " +
//           this.lastName +
//           " Email: " +
//           this.email +
//           " Telephone: " +
//           this.telephone +
//           " Occupation: " +
//           this.occupation +
//           " Birthdate: " +
//           this.birthdate +
//           " City: " +
//           this.city +
//           " Password: " +
//           this.password +
//           " Confirm Password: " +
//           this.passwordconfirmation
//       );
//     }
//   }
</script>
<style>
</style>
