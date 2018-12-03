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
              v-validate="'required|max:40'"
              type="text"
              data-vv-as="company name"
              v-model="companyName"
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
              data-vv-as="address"
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
            <!-- EMAIL -->
            <div class="col-lg-6">
              <div class="single-input-item">
                <!-- <div class="single-input-item"> -->
                <label for="email" class="required">Email</label>
                <input
                  name="email"
                  v-validate="'required|email'"
                  type="email"
                  id="email"
                  placeholder="Email"
                  v-model="email"
                  class="form-control"
                >
                <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
              </div>
            </div>
            <!-- VIDEO URL -->
            <div class="col-lg-6">
              <div class="single-input-item">
                <!-- <div class="single-input-item"> -->
                <label for="videoURL" class="required">Video URL</label>
                <input
                  name="videoURL"
                  v-validate="'url|required'"
                  data-vv-as="url"
                  type="text"
                  id="videoURL"
                  placeholder="Video URL"
                  v-model="videoURL"
                  class="form-control"
                >
                <p class="text-danger" v-if="errors.has('videoURL')">{{ errors.first('videoURL') }}</p>
              </div>
            </div>
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
              v-model="description"
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
              <input v-validate="'image'" data-vv-as="image" name="logo" type="file">
            </p>
            <p class="text-danger" v-if="errors.has('logo')">{{ errors.first('logo') }}</p>
          </div>
          <fieldset>
            <!-- SELECT TAGS TO DESCRIBE PROJECT -->
            <div class="col-md-12categoryList">
              <h3>Tags (Max. 6)</h3>
            </div>
            <div class="col-md-12 categoryList">
              <div style="overflow-y: scroll; height:400px;">
                <ul class="list-group navList" id="addTags">
                  <div v-for="(tagCategory, key) in tags" :key="key">
                    <li class="input-group" name="tag" :value="tagCategory.name">
                      <strong>{{tagCategory.name}}</strong>
                    </li>
                    <li v-for="(tag, tagKey) in tagCategory.tags" :key="tagKey" class="catMargins">
                      <div class="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            name="tag"
                            :disabled="tids.length > 5 && tids.indexOf(0)==-1"
                            v-model="tids"
                            :value="tag.id"
                          >
                          {{tag.name}}
                        </label>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </fieldset>
          <div class="row">
            <!-- Modal Windows -->
            <div class="col-lg-4 col-lg-4 col-sm-6 buttonMargin">
              <p>
                <button :disabled="errors.any()" type="submit">Submit</button>
                <b-modal
                  v-model="modalShow"
                  id="modal-center"
                  @ok="okModal"
                  ok-only
                  centered
                  title="Company Added:"
                >
                  <p class="my-4">Submit {{companyName}} business success</p>
                </b-modal>
                <b-modal
                  ok-variant="danger"
                  ok-only
                  v-model="modalShowFail"
                  id="modal-center"
                  centered
                  title="ERROR"
                >
                  <p class="my-4">Submit business failed</p>
                </b-modal>
                <b-modal
                  ok-variant="danger"
                  ok-only
                  v-model="modalShowCred"
                  id="modal-center"
                  centered
                  title="ERROR"
                >
                  <p class="my-4">Submit Business Failed Some fields are empty or invalid</p>
                </b-modal>
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
import Vue from "vue";
import FileUpload from "v-file-upload";
Vue.use(FileUpload);
export default {
  data() {
    return {
      modalShow: false,
      modalShowFail: false,
      modalShowCred: false,
      companyName: "",
      addressID: "",
      city: "",
      country: "",
      zipcode: "",
      telephone: "",
      website: "",
      description: "",
      logo: "",
      email: "",
      videoURL: "",
      spids: [],
      tids: []
    };
  },
  methods: {
    /**
     * Validation of the data provided
     */
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          let dataToSend = {
            name: this.companyName,
            address: this.addressID,
            city: this.city,
            country: this.country,
            zipcode: this.zipcode,
            phone: this.telephone,
            website: this.website,
            description: this.description,
            logo: this.logo,
            email: this.email,
            videoURL: this.videoURL,
            tags: this.getIdsArray("tags"),
            id: this.$store.state.users.user.userId
          };
          this.$store
            .dispatch("addSubmission", dataToSend)
            .then(response => {
              console.log(response);
              if (response.length > 0) {
                return { modalShow: true, modalShowCred: false };
              } else {
                //Something went wrong when adding business
                return { modalShow: false, modalShowCred: true };
              }
            })
            .then(data => {
              this.modalShow = data.modalShow;
              this.modalShowCred = data.modalShowCred;
            });
          this.$validator.reset();
          return;
        } else {
          this.modalShowFail = true;
        }
      });
    },
    /**
     * Redirect the user to user profile
     */
    okModal() {
      this.$router.replace("/user");
    },
    getIdsArray(subresource) {
      //console.log(Object.keys(resource).length > 0);
      if (subresource == "materials") {
        let matArr = [];
        for (let id in this.smids) {
          matArr.push(["", this.smids[id]]);
        }
        return matArr;
      } else if (subresource == "services") {
        let servArr = [];
        for (let id in this.ssids) {
          servArr.push(["", this.ssids[id]]);
        }
        return servArr;
      } else if (subresource == "processes") {
        let procArr = [];
        for (let id in this.spids) {
          procArr.push(["", this.spids[id]]);
        }
        return procArr;
      } else {
        let tagArr = [];
        for (let id of this.tids) {
          console.log(this.tids);
          console.log(id);
          tagArr.push([id]);
        }
        return tagArr;
      }
    }
  },
  computed: {
    tags() {
      return this.$store.state.tags.categories;
    }
  }
};
</script>
<style>
</style>
