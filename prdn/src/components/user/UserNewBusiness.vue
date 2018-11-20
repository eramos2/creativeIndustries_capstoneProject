<template>
<form @submit.prevent="validateBeforeSubmit">  
                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="dashboard" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>New Business</h3>

                                        <div class="account-details-form checkout-form-list">
                                            <form action="#">
                                                
                                                        <div class="single-input-item">
                                                            <label for="companyName" class="required">Business Name</label>
                                                             <input name="companyName" v-validate="'required|max:20'" type="text"  id = "companyName"  placeholder="Company Name" class="form-control" >
                                                             <p class="text-danger" v-if="errors.has('companyName')">{{ errors.first('companyName') }}</p>
                                                        </div>
                                          
                                                <div class="single-input-item">
                                                    <label for="addressID" class="required">Address</label>
                                                     <input name="addressID" v-validate="'required|max:40'" type="text"  id = "addressID"  placeholder="Address" class="form-control" >
                                                    <p class="text-danger" v-if="errors.has('addressID')">{{ errors.first('addressID') }}</p>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                <div class="single-input-item">
                                                    <label for="city" class="required">City</label>
                                                   <input name="city" v-validate="'required|max:15'" type="text"  id = "city"  placeholder="City" class="form-control" >
                                                    <p class="text-danger" v-if="errors.has('city')">{{ errors.first('city') }}</p>
                                                </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                <div class="single-input-item">
                                                    <label for="country" class="required">Country</label>
                                                   <input name="country" v-validate="'required|max:15'" type="text"  id = "country"  placeholder="Country" class="form-control" >
                                                    <p class="text-danger" v-if="errors.has('country')">{{ errors.first('country') }}</p>
                                                </div>
                                                </div>
                                                <div class="col-lg-6">
                                                <div class="single-input-item">
                                                    <label for="zipcode" class="required">ZipCode</label>
                                                   <input name="zipcode" v-validate="'required|numeric|max:6'" type="text"  id = "zipcode"  placeholder="ZipCode" class="form-control" >
                                                    <p class="text-danger" v-if="errors.has('zipcode')">{{ errors.first('zipcode') }}</p>
                                                </div>
                                                </div>
                                                <div class="col-lg-6">
                                                <div class="single-input-item">
                                                    <label for="phone" class="required">Telephone</label>
                                                   <input name="phone" v-validate="'required|numeric|max:10'" type="text"  id = "phone"  placeholder="Telephone" class="form-control" >
                                                    <p class="text-danger" v-if="errors.has('phone')">{{ errors.first('phone') }}</p>
                                                </div>
                                                </div>
                                                </div>
                                               
                                                        <div class="single-input-item">
                                                            <label for="website" class="required">Website</label>
                                                              <input name="website" v-validate="'required|url'" type="url"  id = "website"  placeholder="Website" class="form-control" >
                                                                <p class="text-danger" v-if="errors.has('website')">{{ errors.first('website') }}</p>
                                                        </div>

                                                        <div class="single-input-item">
                                                        <label for="description" class="required">Description</label>
                                                        <textarea class="form-control textArea" name="description" v-validate="'required'" id="description" placeholder="Description" rows="7"></textarea>
                                                        <p class="text-danger" v-if="errors.has('description')">{{ errors.first('description') }}</p>
                                                        </div>
                                                        <div class="single-input-item">
                                                        <label for="logo" class="required">Business Photo</label>
                                                        <file-upload :url='url' :thumb-url='thumbUrl' :headers="headers" @change="onFileChange" name="logo" v-validate="'required|url'"></file-upload>
                                                        <!-- <textarea class="form-control textArea" name="logo" v-validate="'required'" id="logo" placeholder="Business Photo" rows="7"></textarea> -->
                                                        <p class="text-danger" v-if="errors.has('logo')">{{ errors.first('logo') }}</p>
                                                        </div>
                                    

                                            
                                                <div class="single-input-item">
                                                    <!-- <button class="btn">Save Changes</button> -->
                                                   <!-- <button >Save Changes</button> -->
                                                    <div class="row">
                                                        <div class="col-lg-4 col-sm-6 pull-right buttonMargin">
                                                            <p>
                                                     <!-- <button>Add</button> -->
                                                    <button :disabled="errors.any()" type="submit">Submit</button>
                                                    </p>
                                                     </div>
                                                    </div>

                                                   <fieldset>
                                                       <legend>Tags</legend>
                                                       <!-- Tag # 1 -->
                                                       <div class="row">
                                                            <div class="col-lg-6">
                                                    <div class="single-input-item">
                                                    <label for="tag1" class="required">Tag#1</label>
                                                    <select class="form-control" onchange="addMat()" id="matTypes">
                                                    <option disabled selected>Choose Tag #1</option>
                                                    </select>
                                                </div>
                                                       </div>
                                                       <!-- Tag # 2 -->
                                                          <div class="col-lg-6">
                                                    <div class="single-input-item">
                                                    <label for="tag1" class="required">Tag# 2</label>
                                                    <select class="form-control" onchange="addMat()" id="matTypes">
                                                    <option disabled selected>Choose Tag #2</option>
                                                    </select>
                                                </div>
                                                       </div>
                                                       </div>
                                                       <!-- Tag # 3 -->
                                                       <div class="row">
                                                            <div class="col-lg-6">
                                                    <div class="single-input-item">
                                                    <label for="tag1" class="required">Tag #3</label>
                                                    <select class="form-control" onchange="addMat()" id="matTypes">
                                                    <option disabled selected>Choose Tag #3</option>
                                                    </select>
                                                </div>
                                                       </div>
                                                       <!-- Tag # 4 -->
                                                          <div class="col-lg-6">
                                                    <div class="single-input-item">
                                                    <label for="tag1" class="required">Tag #4</label>
                                                    <select class="form-control" onchange="addMat()" id="matTypes">
                                                    <option disabled selected>Choose Tag #4</option>
                                                    </select>
                                                </div>
                                                       </div>
                                                       </div>


                                                       <!-- Tag # 5 -->
                                                       <div class="row">
                                                            <div class="col-lg-6">
                                                    <div class="single-input-item">
                                                    <label for="tag1" class="required">Tag #5</label>
                                                    <select class="form-control" onchange="addMat()" id="matTypes">
                                                    <option disabled selected>Choose Tag #5</option>
                                                    </select>
                                                </div>
                                                       </div>
                                                       <!-- Tag # 6 -->
                                                          <div class="col-lg-6">
                                                    <div class="single-input-item">
                                                    <label for="tag1" class="required">Tag#6</label>
                                                    <select class="form-control" onchange="addMat()" id="matTypes">
                                                    <option disabled selected>Choose Tag #6</option>
                                                    </select>
                                                </div>
                                                       </div>
                                                       </div>
                                                   </fieldset>
                                                    
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- Single Tab Content End -->
            </form>
</template>
<script>
import Vue from "vue";
import FileUpload from "v-file-upload";
Vue.use(FileUpload);
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
  },
  data2() {
    return {
      url: "http://your-post.url",
      headers: { "access-token": "<your-token>" },
      filesUploaded: []
    };
  },
  methods2: {
    thumbUrl(file) {
      return file.myThumbUrlProperty;
    },
    onFileChange(file) {
      // Handle files like:
      this.fileUploaded = file;
    }
  }
};
</script>
<style>
</style>
