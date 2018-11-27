<template>
 <form @submit.prevent="validateBeforeSubmit">  
       <!-- Single Tab Content Start -->
    <div class="tab-pane fade" id="pending-requests" role="tabpanel">
        <div class="myaccount-content">
            <h3>New Request</h3>

        <div class="container" id="addBsnPage">
        <div class="row marginTop">
            <h2><span class="glyphicon glyphicon-plus-sign marginTop"></span> New Request</h2>
            
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


                         <div class="row">
            <div class="col-md-6  categoryList">
                <div style="overflow-y: scroll; height:400px;">
                <h5>Materials Connections</h5>
                <ul class="list-group navList" id="editServMatCons">
                <li class="input-group" name="process" value="1"><strong>Concrete</strong></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids" value="5">Digital Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="3">Foam Aggregate</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="6">Geometrical Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="4">Insulate Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="1">Lightweight Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="2">Translucent Concrete</label></div></li>
                <li class="input-group" name="process" value="7"><strong>Fabrics</strong></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="41">Carbon fiber</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="42">Cotton</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="40">Fiberglass</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="43">Leather</label></div></li>
                <li class="input-group" name="process" value="6"><strong>Glass and Ceramics</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="38">Blowing Glass</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="37">Bulletproof</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="39">Ceramic</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="35">Laminate Glass</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="36">Temper Glass</label></div></li>
                <li class="input-group" name="process" value="3"><strong>Metal</strong></li><li class="catMargins">
                <div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="15">Aluminium</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial"  v-model="smids" value="16">Copper</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="20">Rare Metal (Medicinal)</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="19">Stainless Steel</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="18">Steel</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="17">Zinc</label></div></li>
                <li class="input-group" name="process" value="8"><strong>Papers Coating and Surfaces</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" value="44">Packaging</label></div></li><li class="input-group" name="process" value="4">Plastic</li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids" value="24">Acrylic</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="28">Bakelite</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="23">Nylon</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="27">Polycarbonate</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="22">Polyester</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="26">Polypropylene</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="25">Polythene</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="29">Prototype</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="21">PVC</label></div></li>
                <li class="input-group" name="process" value="5"><strong>Rubber</strong></li><li class="catMargins">
                <div class="checkbox"><label><input type="checkbox" name="subMaterial" value="33">Latex</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="30">Neoprene</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="31">Nitrile</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="34">Recycled Tire</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="32">Silicone</label></div></li>
                <li class="input-group" name="process" value="2"><strong>Wood</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="12">Bamboo Panels</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="45">Ceder</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="10">Furniture Products</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="7">Mahogany</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="13">Marine Performance</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="9">Oak</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="8">Pine</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="11">Saw Mill</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="14">Wood Craft</label></div></li></ul>
            </div>
            </div>
            <div class="col-md-6 categoryList">
                <div style="overflow-y: scroll; height:400px;">
                <h5>Processes Connections</h5>
                <ul class="list-group navList" id="editServProcCons"><li class="input-group" name="process" value="2"><strong>Engraving</strong></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="7">CNC Engraving</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="6">Laser Engraving</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="9">Prefabricated Panels</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="8">Sand Blasted</label></div></li>
                <li class="input-group" name="process" value="3"><strong>Extrusion</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="12">Extrusion Bowl Making</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="11">Metal Extrusion</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="10">Plastic Extrusion</label></div></li>
                <li class="input-group" name="process" value="7"><strong>Fabric Machinery</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="28">Industrial Sewing</label></div></li>
                <li class="input-group" name="process" value="4"><strong>Geometrical Precision Cutting</strong></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="22">CNC 3 Axis Milling</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="23">CNC 5 Axis Milling</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="17">CNC Drilling</label></div></li
                ><li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="20">CNC Foam</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="18">CNC Metal</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="19">CNC Wood</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="15">Laser Cutting</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="13">Plasma Cutter</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="16">Precision Machinery</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="21">Punching</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="14">Water Jet</label></div></li>
                <li class="input-group" name="process" value="6"><strong>Hand Made</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" v-model="spids" value="26">Ceramic Sampler</label></div></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" v-model="spids" value="27">Fabric Patterns</label></div></li>
                <li class="input-group" name="process" value="9"><strong>Metal Workshop</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" v-model="spids" value="31">Forming and Shaping</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="30">Metal Casting</label></div></li>
                <li class="input-group" name="process" value="1"><strong>Molding</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" v-model="spids" value="2">Car Mold Making</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="32">Hand Molding</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="3">Injection Molding</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="1">Pressure Molding</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="5">Thermo Forming</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="4">Vacuum Former</label></div></li>
                <li class="input-group" name="process" value="8"><strong>Rapid Prototype</strong>/li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="29">3D Printing</label></div></li>
                <li class="input-group" name="process" value="5"><strong>Welding</strong></li><li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="24">Arc Welding</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="25">Tig Welding</label></div></li></ul>
            </div>
            </div>
        
        </div>


        <div class="row">
             <div class="col-md-12 categoryList">
            <div style="overflow-y: scroll; height:400px;">
                <h5>Services Connections</h5>
                <ul class="list-group navList" id="editMatServCons">
                <li class="input-group" name="service" value="24"><strong>Cleaning</strong></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="ssids" value="40">Warehouse Cleaning</label></div></li>
                <li class="input-group" name="service" value="23">Extraction</li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="ssids" value="38">Concrete extraction</label></div></li>
                <li class="input-group" name="service" value="1"><strong>Prototype</strong></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="ssids" value="3">Industrial Welders</label></div></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="ssids" value="1">Mold Makers</label></div></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="ssids" value="2">Precision Welding</label></div></li>
                <li class="input-group" name="service" value="37"><strong>Roof Sealing</strong></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="ssids"  value="56">Hydro Stop</label></div></li></ul>
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

import Vue from "vue";
import FileUpload from "v-file-upload";
Vue.use(FileUpload);
export default {
  components: {},
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
