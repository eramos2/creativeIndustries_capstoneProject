<template>
 
       <!-- Single Tab Content Start -->
    <div class="" id="edit" role="tabpanel">
        <div class="myaccount-content">
            <form @submit.prevent="validateBeforeSubmit">  
            <h3>Edit</h3>

    
     <companyselector></companyselector>

    <!-- <b-btn v-b-toggle.collapse1 variant="primary">Edit Business Data</b-btn>
    <b-collapse id="collapse1" class="mt-2"> -->

        <!-- <button v-on:click="collapseAll">Collapse All</button> -->

        <div class="container" id="editBsnPage">
        <div class="row marginTop">
            <h2><span class="glyphicon glyphicon-plus-sign marginTop"></span> Edit a Business</h2>
           
            
        </div>
    <div id="error"></div>
    <!-- <form name="addBsnForm"> -->
    
    
    <div class="single-input-item">
     <label for="companyName" class="required">Company Name</label>
        <input name="companyName" v-validate="'required|max:20'" type="text"  id = "companyName"  placeholder="Company Name" v-model="companyName" class="form-control" >
         <p class="text-danger" v-if="errors.has('companyName')">{{ errors.first('companyName') }}</p>
            </div>
                   

           <div class="single-input-item">
            <label for="address" class="required">Address</label>
                <input name="address" v-validate="'required|max:60'" type="text"  id = "address"  placeholder="Address" v-model="address" class="form-control" >
                    <p class="text-danger" v-if="errors.has('address')">{{ errors.first('address') }}</p>
                        </div>
<div class="row">
         <div class="col-lg-6">
            <div class="single-input-item">
                <label for="city" class="required">City</label>
                    <input name="city" v-validate="'required|max:15'" type="text"  id = "city"  placeholder="City" v-model="city" class="form-control" >
                        <p class="text-danger" v-if="errors.has('city')">{{ errors.first('city') }}</p>
                            </div>
                                </div>
        <div class="col-lg-6">
             <div class="single-input-item">
                    <label for="country" class="required">Country</label>
                        <input name="country" v-validate="'required|max:15'" type="text"  id = "country"  placeholder="Country" v-model="country" class="form-control" >
                            <p class="text-danger" v-if="errors.has('country')">{{ errors.first('country') }}</p>
                                        </div>
                                    </div>
        <div class="col-lg-6">
                 <div class="single-input-item">
                    <label for="zipcode" class="required">ZipCode</label>
                        <input name="zipcode" v-validate="'required|numeric|max:5|min:5'" type="text"  id = "zipcode" v-model="zipcode"  placeholder="ZipCode" class="form-control" >
                            <p class="text-danger" v-if="errors.has('zipcode')">{{ errors.first('zipcode') }}</p>
                                 </div>
                             </div>
        <div class="col-lg-6">
                <div class="single-input-item">
                    <label for="phone" class="required">Telephone</label>
                        <input name="phone" v-validate="'required|numeric|max:10|min:10'" v-model="phone" type="text"  id = "phone"  placeholder="Telephone" class="form-control" >
                            <p class="text-danger" v-if="errors.has('phone')">{{ errors.first('phone') }}</p>
                                                </div>
                                                </div>
                                                </div>
        <div class="single-input-item">
            <label for="website" class="required">Website</label>
                <input name="website" v-validate="'required|url'" v-model="website" type="url"  id = "website"  placeholder="Website" class="form-control" >
                    <p class="text-danger" v-if="errors.has('website')">{{ errors.first('website') }}</p>
                        </div>
                    <div class="row"></div>
        <div class="single-input-item">
            <label for="description" class="required">Description</label>
                <textarea class="form-control textArea" v-model="description" name="description" v-validate="'required'" id="description" placeholder="Description" rows="7"></textarea>
                    <p class="text-danger" v-if="errors.has('description')">{{ errors.first('description') }}</p>
                        </div>
                          <div class="row"></div>
        <div class="single-input-item">
            <label for="logo" class="required">Business Photo</label>
               <p> <input v-validate="'image'"  data-vv-as="image" name="logo" type="file"></p>
                    <p class="text-danger" v-if="errors.has('logo')">{{ errors.first('logo') }}</p>
                        </div>
        <div class="row"></div>

        <div class="row">
            <edittag></edittag>
            <div class="col-lg-4  col-lg-4 col-sm-6  buttonMargin">
                <p>
                     <button :disabled="errors.any()" type="submit">Edit</button>
                </p>
            </div>
        </div>
        </div>

        <!-- </b-collapse> -->
        
        <editmaterial></editmaterial>
        <editprocess></editprocess>
        <editservices></editservices>
        
                                    </form>
                                    <button @click="editUserData">Populate</button>
                                    </div>
                                </div>
                                
                                <!-- Single Tab Content End -->
                                
                                
    
</template>
<script>
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

import EditMaterial from "./EditMaterial.vue";
import EditProcess from "./EditProcess.vue";
import EditServices from "./EditServices.vue";
import CompanySelector from "./CompanySelector.vue";
import EditTag from "./EditTag.vue";
import Vue from "vue";
import FileUpload from "v-file-upload";
import { thisTypeAnnotation } from "babel-types";
Vue.use(FileUpload);
export default {
  components: {
    editmaterial: EditMaterial,
    editprocess: EditProcess,
    editservices: EditServices,
    edittag: EditTag,
    companyselector: CompanySelector
  },
  data: () => ({
    companyName: "",
    address: "",
    city: "",
    country: "",
    zipcode: "",
    phone: "",
    website: "",
    description: "",
    logo: ""
  }),
  methods: {
    collapseAll() {
      this.$refs.collapsible.map(c => (c.collapsed = true));
    },
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
        address: this.address,
        city: this.city,
        country: this.country,
        zipcode: this.zipcode,
        phone: this.phone,
        website: this.website,
        description: this.description,
        logo: this.logo
      };
      this.companyName = "";
      this.address = "";
      this.city = "";
      this.country = "";
      this.zipcode = "";
      this.phone = "";
      this.website = "";
      this.description = "";
      console.log(data);
    },
    editUserData() {
      let data = {
        companyName: "First Company",
        address: "Carr 596 Orocovis, P.R.",
        city: "Orocovis",
        country: "PR",
        zipcode: "00720",
        phone: "7873727550",
        website: "https://mail.google.com",
        description: "This is the first company"
      };
      this.companyName = data.companyName;
      this.address = data.address;
      this.city = data.city;
      this.country = data.country;
      this.zipcode = data.zipcode;
      this.phone = data.phone;
      this.website = data.website;
      this.description = data.description;
    }
  }
};
</script>
<style>
</style>
