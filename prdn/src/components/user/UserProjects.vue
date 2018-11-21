<template>
    
                                    <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="orders" role="tabpanel">
                                    <div class="myaccount-content">
                                      <form @submit.prevent="validateBeforeSubmit">  
                                        <h3>My Projects Details</h3>

                                        <div class="account-details-form checkout-form-list">
                                            <form action="#">
                                                        <div class="single-input-item">
                                                            <label for="projectName" class="required">Project Name</label>
                                                             <input name="projectName" v-validate="'required|max:15'" type="text"  id = "projectName"  placeholder="Project Name" class="form-control" >
                                                             <p class="text-danger" v-if="errors.has('projectName')">
                                                                 {{errors.first('projectName')}}
                                                                 </p>
                                                        </div>
                                                 <!-- <div class="col-md-12"> -->
                                                <div class="single-input-item">
                                                    <label for="description" class="required">Description</label>
                                                     <input name ="description" v-validate="'required|max:80'" type="text" class="form-control" id="description" placeholder="Brief Description">
                                                    <p class="text-danger" v-if="errors.has('description')">{{ errors.first('description') }}</p>
                                                </div>
                                                <!-- </div> -->
                                                <fieldset>
                                                    <legend>Select tags for your Project</legend>
                                                <div class="single-input-item">
                                                    <label for="tag1" class="required">Tag#1</label>
                                                    <!-- <input name ="tag1" v-validate="'required'" type="text" class="form-control" id="tag1" placeholder="Tag 1">
                                                    <p class="text-danger" v-if="errors.has('tag1')">{{ errors.first('tag1') }}</p> -->
                                                    <select class="form-control" onchange="addMat()" id="matTypes">
                                                    <option disabled selected>Choose Tag #1</option>
                                                    </select>
                                                </div>
                                                <div class="single-input-item">
                                                    <label for="tag2" class="required">Tag #2</label>
                                                    <!-- <input name ="tag2" v-validate="'required'" type="text" class="form-control" id="tag2" placeholder="Tag 2 ">
                                                    <p class="text-danger" v-if="errors.has('tag2')">{{ errors.first('tag2') }}</p> -->
                                                    <select class="form-control" onchange="addMat()" id="matTypes">
                                                    <option disabled selected>Choose Tag #2</option>
                                                    </select>
                                                </div>
                                                <div class="single-input-item">
                                                    <label for="tag3" class="required">Tag#3</label>
                                                    <!-- <input name ="tag3" v-validate="'required'" type="text" class="form-control" id="tag3" placeholder="Tag 3">
                                                    <p class="text-danger" v-if="errors.has('tag3')">{{ errors.first('tag3') }}</p> -->
                                                    <select class="form-control" onchange="addMat()" id="matTypes">
                                                    <option disabled selected>Choose Tag#3</option>
                                                    </select>
                                                </div>
                                                </fieldset>
                                                <div class="single-input-item">
                                                    <!-- <button class="btn">Save Changes</button> -->
                                                    <button :disabled="errors.any()" type="submit">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                        </form>
                                    </div>
                                </div>

                                            
                                <!-- Single Tab Content End -->
</template>
<script>
/**
 * Custom Messages for messages if an error appear after validation
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
  data: () => ({
    firstName: "",
    password: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("Submitted");
          return;
        }
        alert("Empty Field(s)");
      });
    }
  }
};
</script>
<style>
.myaccount-content {
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #ededed;
  padding: 30px;
}
.myaccount-content form {
  margin-top: -20px;
}
@media only screen and (max-width: 575px) {
  .myaccount-content {
    padding: 20px 15px;
  }
}
.myaccount-content h3 {
  font-size: 22px;
  line-height: 1.5;
  border-bottom: 1px dashed #777;
  padding-bottom: 10px;
  margin-bottom: 25px;
  margin-top: 0;
}
.myaccount-content .welcome p {
  color: #000;
}
.myaccount-content .welcome a {
  color: #000;
}
.myaccount-content .welcome a:hover {
  color: #12a4dd;
}
.myaccount-content .welcome strong {
  font-weight: 600;
  color: #39b0ff;
}
</style>
