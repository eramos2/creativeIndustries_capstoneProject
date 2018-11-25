<template>
 <form @submit.prevent="validateBeforeSubmit">  
       <!-- Single Tab Content Start -->
    <div class="tab-pane fade" id="add" role="tabpanel">
        <div class="myaccount-content">
            <h3>Add</h3>

        <div class="container" id="addBsnPage">
        <div class="row marginTop">
            <h2><span class="glyphicon glyphicon-plus-sign marginTop"></span> Add New Business</h2>
            
        </div>
    <div id="error"></div>
    <!-- <form name="addBsnForm"> -->
                <!-- COMPANY NAME -->
                <div>
       
            <div class="single-input-item">
                <!-- <div class="single-input-item"> -->
                <label for="companyName" class="required">Company Name</label>
                    <input name="companyName" v-validate="'required|max:20'" type="text" v-model="companyName" id = "companyName"  placeholder="Company Name" class="form-control" >
                        <p class="text-danger" v-if="errors.has('companyName')">{{ errors.first('companyName') }}</p>
                        </div>
                   <!-- ADDRESS -->

           <!-- <div class="single-input-item"> -->
             <div class="single-input-item">
            <label for="addressID" class="required">Address</label>
                <input name="addressID" v-validate="'required|max:40'" type="text"  id = "addressID" v-model="addressID" placeholder="Address" class="form-control" >
                    <p class="text-danger" v-if="errors.has('addressID')">{{ errors.first('addressID') }}</p>
                        </div>

<!-- <div class="row"> -->
    <div class="row">
         <div class="col-lg-6">
             <div class="single-input-item">
            <!-- <div class="single-input-item"> -->
                <label for="city" class="required">City</label>
                    <input name="city" v-validate="'required|max:15'" type="text"  id = "city"  placeholder="City" v-model="city" class="form-control" >
                        <p class="text-danger" v-if="errors.has('city')">{{ errors.first('city') }}</p>
                            </div>
                            </div>
                                <!-- </div> -->
        <div class="col-lg-6">
            <div class="single-input-item">
             <!-- <div class="single-input-item"> -->
                    <label for="country" class="required">Country</label>
                        <input name="country" v-validate="'required|max:15'" type="text"  id = "country"  v-model="country" placeholder="Country" class="form-control" >
                            <p class="text-danger" v-if="errors.has('country')">{{ errors.first('country') }}</p>
                                        </div>
                                        </div>
                                    <!-- </div> -->
        <div class="col-lg-6">
                 <!-- <div class="single-input-item"> -->
                    <label for="zipcode" class="required">ZipCode</label>
                        <input name="zipcode" v-validate="'required|numeric|max:5|min:5'" type="text"  id = "zipcode"  v-model="zipcode" placeholder="ZipCode" class="form-control" >
                            <p class="text-danger" v-if="errors.has('zipcode')">{{ errors.first('zipcode') }}</p>
                                 <!-- </div> -->
                             </div>
        <div class="col-lg-6">
            <div class="single-input-item">
                <!-- <div class="single-input-item"> -->
                    <label for="phone" class="required">Telephone</label>
                        <input name="phone" v-validate="'required|numeric|max:10'" type="text"  id = "phone" v-model="phone" placeholder="7875559999" class="form-control" >
                            <p class="text-danger" v-if="errors.has('phone')">{{ errors.first('phone') }}</p>
                                                </div>
                                                </div>
                                                </div>
                                                <!-- </div> -->
                                                <!-- </div> -->
        <!-- <div class="single-input-item"> -->
            <div class="single-input-item">
            <label for="website" class="required">Website</label>
                <input name="website" v-validate="'required|url'" type="url"  id = "website" v-model="website"  placeholder="Website" class="form-control" >
                    <p class="text-danger" v-if="errors.has('website')">{{ errors.first('website') }}</p>
                        </div>
                    <div class="row"></div>
        <!-- <div class="single-input-item"> -->
            <div class="single-input-item">
            <label for="description" class="required">Description</label>
                <textarea class="form-control textArea" name="description" v-validate="'required'" v-model="description" id="description" placeholder="Description" rows="7"></textarea>
                    <p class="text-danger" v-if="errors.has('description')">{{ errors.first('description') }}</p>
                        </div>
                          <div class="row"></div>
        <!-- <div class="single-input-item"> -->
            <div class="single-input-item">
            <label for="logo" class="required">Business Photo</label>
               <p> <input v-validate="'required|image'" data-vv-as="image" name="logo" type="file"></p>
                    <p class="text-danger" v-if="errors.has('logo')">{{ errors.first('logo') }}</p>
                        </div>
                     
            <div class="col-lg-8  col-lg-8 col-sm-6  buttonMargin">   
                <p>
                     <button :disabled="errors.any()" type="submit">Add</button>
                </p>
            </div>
        </div>
        </div>
        </div>
    <!-- </form> -->


<addnewmaterial></addnewmaterial>
<addnewprocess></addnewprocess>
<addnewservice></addnewservice>
<addnewtag></addnewtag>



                                    </div>
                               
                                <!-- Single Tab Content End -->
                                </form>
</template>
<script>
/**
 * Custom Messages for Alerts if an error appear after validation
 */
import { Validator } from "vee-validate";
const dictionary = {
  en: {
    custom: {
      companyName: {
        required: "Please enter your company name.",
        max: "The company name field may not be greater than 20 characters."
      }
    }
  }
};

Validator.localize(dictionary);

import AddNewMaterial from "./AddNewMaterial.vue";
import AddNewProcess from "./AddNewProcess.vue";
import AddNewService from "./AddNewService.vue";
import AddNewTag from "./AddNewTag.vue";
import Vue from "vue";
import FileUpload from "v-file-upload";
Vue.use(FileUpload);
export default {
  components: {
    addnewmaterial: AddNewMaterial,
    addnewprocess: AddNewProcess,
    addnewservice: AddNewService,
    addnewtag: AddNewTag
  },
  data: () => ({
    companyName: "",
    addressID: "",
    city: "",
    country: "",
    zipcode: "",
    phone: "",
    website: "",
    description: "",
    logo: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.test();
          alert("Submitted");
          this.$validator.reset();
          return;
        }
        alert("Empty Field(s)");
      });
    },
    test() {
      let data = {
        companyName: this.companyName,
        addressID: this.addressID,
        city: this.city,
        country: this.country,
        zipcode: this.zipcode,
        phone: this.phone,
        website: this.website,
        description: this.description,
        logo: this.logo
      };
      this.companyName = "";
      this.addressID = "";
      this.city = "";
      this.country = "";
      this.zipcode = "";
      this.phone = "";
      this.website = "";
      this.description = "";
      console.log(data);
    }
  }
};
</script>
<style>
/* form {
  margin-left: 0%;
  margin-right: 0%;
  width: 100%;
} */
</style>
