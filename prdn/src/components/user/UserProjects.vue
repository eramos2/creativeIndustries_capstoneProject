<template>
    
                                    <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="orders" role="tabpanel">
                                    <div class="myaccount-content">
                                      <form @submit.prevent="validateBeforeSubmit">  
                                        <h3>My Projects Details</h3>

                                        <div class="account-details-form checkout-form-list">
                                          <!-- PROJECT NAME -->
                                                        <div class="single-input-item">
                                                            <label for="projectName" class="required">Project Name</label>
                                                             <input name="projectName" v-validate="'required|max:20|alpha_spaces'" v-model="projectName" type="text"  id = "projectName"  placeholder="Project Name" class="form-control" >
                                                             <p class="text-danger" v-if="errors.has('projectName')">
                                                                 {{errors.first('projectName')}}
                                                                 </p>
                                                        </div>
                                                        <!-- DESCRIPTION -->
                                                <div class="single-input-item">
                                                    <label for="description" class="required">Description</label>
                                                     <input name ="description" v-validate="'required|max:80|alpha_spaces'" v-model="description" type="text" class="form-control" id="description" placeholder="Brief Description">
                                                    <p class="text-danger" v-if="errors.has('description')">{{ errors.first('description') }}</p>
                                                </div>
                                                <fieldset>
                                                  <!-- SELECT TAGS TO DESCRIBE PROJECT -->
                                                    <legend>Select tags for your Project</legend>
                                                <div class="single-input-item">
                                                    <label for="tag1" class="required">Tag#1</label>
                                                    <select class="form-control" onchange="addMat()" id="matTypes">
                                                    <option disabled selected>Choose Tag #1</option>
                                                    </select>
                                                </div>
                                                <div class="single-input-item">
                                                    <label for="tag2" class="required">Tag #2</label>
                                                    <select class="form-control" onchange="addMat()" id="matTypes">
                                                    <option disabled selected>Choose Tag #2</option>
                                                    </select>
                                                </div>
                                                <div class="single-input-item">
                                                    <label for="tag3" class="required">Tag#3</label>
                                                    <select class="form-control" onchange="addMat()" id="matTypes">
                                                    <option disabled selected>Choose Tag#3</option>
                                                    </select>
                                                </div>
                                                </fieldset>
                                                <div class="single-input-item">
                                                    <button :disabled="errors.any()" type="submit">Submit</button>
                                                </div>
                                       
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
      projectName: {
        required: "Please enter your project name.",
        alpha_spaces:
          "The project name field may only contain alphabetic characters.",
        max: "The project name field may not be greater than 15 characters."
      },
      description: {
        required: "Please enter a brief description for your project.",
        // alpha_spaces:
        //   "The description field may only contain alphabetic characters.",
        max: "The last name field may not be greater than 15 characters."
      }
    }
  }
};

Validator.localize(dictionary);

export default {
  data: () => ({
    projectName: "",
    description: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("Submitted");
          this.test();
          return;
        }
        alert("Empty Field(s)");
      });
    },
    test() {
      let data = {
        projectName: this.projectName,
        description: this.description
      };
      console.log(data);
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
