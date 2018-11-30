<template>
 <form @submit.prevent="validateBeforeSubmit">  
       <!-- Single Tab Content Start -->
    <div class="" id="add" role="tabpanel">
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
                        <div class="row" id="materials-process">
            <div class="col-md-6  categoryList" >
                <div style="overflow-y: scroll; height:400px;">
                <h3>Materials</h3>
                <ul class="list-group navList" id="editServMatCons">
                 <div 
                 v-for="(category, key) in materials"
                :key="key"
                 >
                <li class="input-group" name="process" :value="category.id"><strong>{{category.name}}</strong></li>
                <li 
                v-for="(subcategory, subcatKey) in category.subcategories"
                :key="subcatKey"
                class="catMargins">
                    <div class="checkbox">
                    <label>
                        <input type="checkbox" name="subMaterial" v-model="smids" :value="subcategory.id">
                        {{subcategory.name}}
                    </label>
                    </div>
                </li>
                

                 </div>
    
                </ul>
            </div>
            </div>
            <div class="col-md-6 categoryList">
                <div style="overflow-y: scroll; height:400px;">
                <h3>Processes</h3>
                <ul class="list-group navList" id="editServProcCons">

                    <div 
                 v-for="(category, key) in processes"
                :key="key"
                 >
                <li class="input-group" name="process" :value="category.id"><strong>{{category.name}}</strong></li>
                <li 
                v-for="(subcategory, subcatKey) in category.subcategories"
                :key="subcatKey"
                class="catMargins">
                    <div class="checkbox">
                    <label>
                        <input type="checkbox" name="subProcess" v-model="spids" :value="subcategory.id">
                        {{subcategory.name}}
                    </label>
                    </div>
                </li>
                

                 </div>
                   </ul>
            </div>
            </div>
        
        </div>


        <div class="row" id="services-tags">
             <div class="col-md-6 categoryList">
            <div style="overflow-y: scroll; height:400px;">
                <h3>Services</h3>
                <ul class="list-group navList" id="editMatServCons">
                    <div 
                 v-for="(category, key) in services"
                :key="key"
                 >
                <li class="input-group" name="service" :value="category.id"><strong>{{category.name}}</strong></li>
                <li 
                v-for="(subcategory, subcatKey) in category.subcategories"
                :key="subcatKey"
                class="catMargins">
                    <div class="checkbox">
                    <label>
                        <input type="checkbox" name="subService" v-model="smids" :value="subcategory.id">
                        {{subcategory.name}}
                    </label>
                    </div>
                </li>
                

                 </div>
              </ul>
            </div>
             </div>
                <div class="col-md-6 categoryList" >
                <div style="overflow-y: scroll; height:400px;">
                     <ul class="list-group navList" id="editMatProcCons">
                        <h3>Select 6 Tags</h3>
                            <li class="input-group" name="tags" value="2"><strong>Applications</strong></li>
                             <li class="catMargins">
                            <div class="checkbox">
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="tags" :disabled="spids.length > 5 && spids.indexOf(0)==-1" v-model="spids" :value="0" />Tubing</label></div></li>
                         <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="tags" :disabled="spids.length > 5 && spids.indexOf(1)==-1" v-model="spids" :value="1" />Ornaments</label></div></li>
                         <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="tags" :disabled="spids.length > 5 && spids.indexOf(2)==-1" v-model="spids" :value="2" />Decorative</label></div></li>
                        <li class="input-group" name="tags" value="2"><strong>Qualities</strong></li>
                        <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="tags" :disabled="spids.length > 5 && spids.indexOf(3)==-1" v-model="spids" :value="3" />Opaque</label></div></li>
                         <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="tags" :disabled="spids.length > 5 && spids.indexOf(4)==-1" v-model="spids" :value="4" />Breathable</label></div></li>
                        <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="tags" :disabled="spids.length > 5 && spids.indexOf(5)==-1" v-model="spids" :value="5" />Long Lasting</label></div></li>                                             
                         </div> 
                    </li>  
                    </ul>     
                </div>
            </div>




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
      },
      addressID: {
        required: "Please enter the Address",
        max: "The address field may not be greater than 40 characters."
      }
    }
  }
};

Validator.localize(dictionary);
import MaterialCheckbox from "./MaterialCheckbox.vue";
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
    addnewtag: AddNewTag,
    materialCheckbox: MaterialCheckbox
  },
  computed: {
    materials() {
      return this.$store.state.resources.resources.materials.categories;
    },
    processes() {
      return this.$store.state.resources.resources.processes.categories;
    },
    services() {
      return this.$store.state.resources.resources.services.categories;
    }
  },
  data: () => ({
    spids: [], //selected sub processes ids
    smids: [], //selected sub materials ids
    ssids: [], //selected sub services ids
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
#services-tags {
  margin-top: 4rem;
}
#materials-process {
  margin-top: 2rem;
}
/* form {
  margin-left: 0%;
  margin-right: 0%;
  width: 100%;
} */
</style>
