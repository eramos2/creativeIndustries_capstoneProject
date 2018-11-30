<template>
    
                                    <!-- Single Tab Content Start -->
                                <!-- <div class="tab-pane fade" id="orders" role="tabpanel"> -->
                                  <div class="" id="orders" role="tabpanel">
                                    <div class="myaccount-content">
                                      <form @submit.prevent="validateBeforeSubmit">  
                                        <h3>Select your Project</h3> 
                                        <div class="row">
                                            <div class="form-group">
                                          <select class="form-control" v-model="value"  onchange="addServ()" id="servTypes">
                                              <option value="none" disabled selected>Choose Your Project</option>
                                              <option value="1">My Project</option>
                                          </select>
                                         </div>
                                         </div>
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
                                                   <div class="row">
                                                     <div class="col-md-12 categoryList" id="tag-column-project">
                                                        <div style="overflow-y: scroll; height:400px;">
                                                          <ul class="list-group navList" id="editMatProcCons">
                                                            <h3>Select 3 Tags to describe your project</h3>
                                                            <li class="input-group" name="tags" value="2"><strong>Applications</strong></li>
                                                                <li class="catMargins">
                                                                    <div class="checkbox">
                                                                      <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="tags" :disabled="spids.length > 2 && spids.indexOf(0)==-1" v-model="spids" :value="0" />Tubing</label></div></li>
                                                                     <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="tags" :disabled="spids.length > 2 && spids.indexOf(1)==-1" v-model="spids" :value="1" />Ornaments</label></div></li>
                                                                     <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="tags" :disabled="spids.length > 2 && spids.indexOf(2)==-1" v-model="spids" :value="2" />Decorative</label></div></li>
                                                                    <li class="input-group" name="tags" value="2"><strong>Qualities</strong></li>
                                                                    <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="tags" :disabled="spids.length > 2 && spids.indexOf(3)==-1" v-model="spids" :value="3" />Opaque</label></div></li>
                                                                    <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="tags" :disabled="spids.length > 2 && spids.indexOf(4)==-1" v-model="spids" :value="4" />Breathable</label></div></li>
                                                                    <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="tags" :disabled="spids.length > 2 && spids.indexOf(5)==-1" v-model="spids" :value="5" />Long Lasting</label></div></li>                                             
                                                                  </div> 
                                                                </li>  
                                                                </ul>     
                                                          </div>
                                                     </div>
                                                   </div>
                                                   
                                                </fieldset>
                                                <div class="single-input-item">
                                                    <button :disabled="errors.any()" type="submit">Submit</button>
                                                    <b-modal  v-model="modalShow" id="modal-center" @ok="okModal"  centered title="Welcome Back">
                                                    <p class="my-4">{{email}}</p>
                                                    </b-modal>
                                                    <b-modal ok-variant="danger" v-model="modalShowFail"  id="modal-center" centered title="ERROR">
                                                    <p class="my-4">Try Again</p>
                                                     </b-modal>
                                                    <b-modal ok-variant="danger" v-model="modalShowCred" id="modal-center" centered title="ERROR">
                                                     <p class="my-4">Email/password combination failed</p>
                                               </b-modal>
                                                </div>
                                              
                                        </div>
                                        </form>
                                    <singleitems id="single-item-column"></singleitems>

                                    </div>
                                </div>

                                            
                                <!-- Single Tab Content End -->
</template>
<script>
/**
 * Custom Messages for messages if an error appear after validation
 */
import { Validator } from "vee-validate";
import SingleItems from "./UserSingleItemBusinesses.vue";

const dictionary = {
  en: {
    custom: {
      singleitems: SingleItems,
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
  data() {
    return {
      projectName: "",
      description: "",
      spids: []
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("Submitted");
          this.test();
          this.$validator.reset();
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
      projectName = "";
      description = "";
      console.log(data);
    }
  },
  components: {
    singleitems: SingleItems
  }
};
</script>
<style>
#single-item-column {
  padding-top: 1.5rem;
}
#tag-column-project {
  padding-top: 1.5rem;
}
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
