<template>
  <form @submit.prevent="validateBeforeSubmit">
    <!-- Single Tab Content Start -->
    <!-- <div class="tab-pane fade" id="dashboard" role="tabpanel"> -->
    <div class id="dashboard" role="tabpanel">
      <div class="myaccount-content">
        <h3>New Business</h3>

        <div class="account-details-form checkout-form-list">
          <!-- BUSINESS NAME -->
          <div class="single-input-item">
            <label for="companyName" class="required">Company Name</label>
            <input
              name="companyName"
              v-validate="'required|max:20|alpha_spaces'"
              type="text"
              v-model="comapnyName"
              id="companyName"
              placeholder="Company Name"
              class="form-control"
            >
            <p
              class="text-danger"
              v-if="errors.has('companyName')"
            >{{ errors.first('companyName') }}</p>
          </div>
          <!-- ADDRESS -->
          <div class="single-input-item">
            <label for="addressID" class="required">Address</label>
            <input
              name="addressID"
              v-validate="'required|max:40'"
              type="text"
              v-model="addressID"
              id="addressID"
              placeholder="Address"
              class="form-control"
            >
            <p class="text-danger" v-if="errors.has('addressID')">{{ errors.first('addressID') }}</p>
          </div>
          <!-- ROW FOR CITY, COUNTRY, ZIPCODE AND telephone  START -->
          <div class="row">
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="city" class="required">City</label>
                <input
                  name="city"
                  v-validate="'required|max:15'"
                  type="text"
                  id="city"
                  v-model="city"
                  placeholder="City"
                  class="form-control"
                >
                <p class="text-danger" v-if="errors.has('city')">{{ errors.first('city') }}</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="country" class="required">Country</label>
                <input
                  name="country"
                  v-validate="'required|max:15'"
                  type="text"
                  v-model="country"
                  id="country"
                  placeholder="Country"
                  class="form-control"
                >
                <p class="text-danger" v-if="errors.has('country')">{{ errors.first('country') }}</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="zipcode" class="required">ZipCode</label>
                <input
                  name="zipcode"
                  v-validate="'required|numeric|max:6|min:5'"
                  type="text"
                  v-model="zipcode"
                  id="zipcode"
                  placeholder="Zip Code"
                  class="form-control"
                >
                <p class="text-danger" v-if="errors.has('zipcode')">{{ errors.first('zipcode') }}</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="telephone" class="required">Telephone</label>
                <input
                  name="telephone"
                  v-validate="'required|numeric|max:10|min:10'"
                  type="text"
                  v-model="telephone"
                  id="telephone"
                  placeholder="Telephone: 7877775555"
                  class="form-control"
                >
                <p
                  class="text-danger"
                  v-if="errors.has('telephone')"
                >{{ errors.first('telephone') }}</p>
              </div>
            </div>
          </div>
          <!-- ROW FOR CITY, COUNTRY, ZIPCODE AND telephone END -->
          <!-- WEBSITE -->
          <div class="single-input-item">
            <label for="website" class="required">Website</label>
            <input
              name="website"
              v-validate="'required|url'"
              type="url"
              id="website"
              placeholder="Website"
              class="form-control"
            >
            <p class="text-danger" v-if="errors.has('website')">{{ errors.first('website') }}</p>
          </div>
          <!-- DESCRIPTION -->
          <div class="single-input-item">
            <label for="description" class="required">Description</label>
            <textarea
              class="form-control textArea"
              name="description"
              v-validate="'required'"
              id="description"
              placeholder="Description"
              rows="7"
            ></textarea>
            <p
              class="text-danger"
              v-if="errors.has('description')"
            >{{ errors.first('description') }}</p>
          </div>
          <!-- UPLOAD BUSINESS PHOTO -->
          <div class="single-input-item">
            <label for="logo" class="required">Business Photo</label>
            <p>
              <input v-validate="'required|image'" data-vv-as="image" name="logo" type="file">
            </p>
            <p class="text-danger" v-if="errors.has('logo')">{{ errors.first('logo') }}</p>
          </div>

          <fieldset>
            <!-- SELECT TAGS TO DESCRIBE PROJECT -->
            <div class="row">
              <div class="col-md-12 categoryList" id="tag-column-project">
                <div style="overflow-y: scroll; height:400px;">
                  <ul class="list-group navList" id="editMatProcCons">
                    <h3>Select 6 Tags to describe your Business</h3>
                    <li class="input-group" name="tags" value="2">
                      <strong>Applications</strong>
                    </li>
                    <li class="catMargins">
                      <div class="checkbox">
                        <li class="catMargins">
                          <div class="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="tags"
                                :disabled="spids.length > 5 && spids.indexOf(0)==-1"
                                v-model="spids"
                                :value="0"
                              >Tubing
                            </label>
                          </div>
                        </li>
                        <li class="catMargins">
                          <div class="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="tags"
                                :disabled="spids.length > 5 && spids.indexOf(1)==-1"
                                v-model="spids"
                                :value="1"
                              >Ornaments
                            </label>
                          </div>
                        </li>
                        <li class="catMargins">
                          <div class="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="tags"
                                :disabled="spids.length > 5 && spids.indexOf(2)==-1"
                                v-model="spids"
                                :value="2"
                              >Decorative
                            </label>
                          </div>
                        </li>
                        <li class="input-group" name="tags" value="2">
                          <strong>Qualities</strong>
                        </li>
                        <li class="catMargins">
                          <div class="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="tags"
                                :disabled="spids.length > 5 && spids.indexOf(3)==-1"
                                v-model="spids"
                                :value="3"
                              >Opaque
                            </label>
                          </div>
                        </li>
                        <li class="catMargins">
                          <div class="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="tags"
                                :disabled="spids.length > 5 && spids.indexOf(4)==-1"
                                v-model="spids"
                                :value="4"
                              >Breathable
                            </label>
                          </div>
                        </li>
                        <li class="catMargins">
                          <div class="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="tags"
                                :disabled="spids.length > 5 && spids.indexOf(5)==-1"
                                v-model="spids"
                                :value="5"
                              >Long Lasting
                            </label>
                          </div>
                        </li>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </fieldset>

          <div class="single-input-item">
            <div class="row">
              <p>
                <!-- <button>Add</button> -->
                <button :disabled="errors.any()" type="submit">Submit</button>
              </p>
            </div>
          </div>
        </div>
      </div>
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
        required: "Please enter company name.",
        alpha_spaces:
          "The company name field may only contain alphabetic characters.",
        max: "The company name field may not be greater than 15 characters."
      },
      addressID: {
        required: "Please enter the address.",
        alpha_spaces:
          "The last name field may only contain alphabetic characters.",
        max: "The last name field may not be greater than 15 characters."
      }
    }
  }
};

Validator.localize(dictionary);

import Vue from "vue";
import FileUpload from "v-file-upload";
Vue.use(FileUpload);
export default {
  data() {
    return {
      companyName: "",
      addressID: "",
      city: "",
      country: "",
      zipcode: "",
      telephone: "",
      website: "",
      description: "",
      logo: "",
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
    }
  },
  test() {
    let data = {
      companyName: this.companyName,
      addressID: this.addressID,
      city: this.city,
      country: this.country,
      zipcode: this.zipcode,
      telephone: this.telephone,
      website: this.website,
      description: this.description,
      logo: this.logo
    };
    companyName = "";
    addressID = "";
    city = "";
    country = "";
    zipcode = "";
    telephone = "";
    website = "";
    description = "";
    logo = "";
    console.log(data);
  }
};
</script>
<style>
</style>
