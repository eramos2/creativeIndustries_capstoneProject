<template>
  <!-- Single Tab Content Start -->
  <div class id="edit" role="tabpanel">
    <div class="myaccount-content">
      <form @submit.prevent="validateBeforeSubmit">
        <h3>Edit</h3>

        <!-- <companyselector></companyselector> -->
        <!-- <b-btn v-b-toggle.collapse1 variant="primary">Edit Business Data</b-btn>
        <b-collapse id="collapse1" class="mt-2">-->
        <!-- <button v-on:click="collapseAll">Collapse All</button> -->
        <div class="container" id="editBsnPage">
          <div class="row marginTop">
            <h2>
              <span class="glyphicon glyphicon-plus-sign marginTop"></span> Edit a Business
            </h2>
          </div>
          <div class="row">
            <div>
              <select
                class="form-control"
                id="chooseBusiness"
                @change="onChange()"
                v-model="selected"
              >
                <option value="none" disabled selected>Choose One Business</option>

                <option
                  v-for="(business, key) in businesses"
                  :key="key"
                  :value="business.companyName"
                >{{business.companyName}}</option>
              </select>
            </div>
          </div>
          <div id="error"></div>
          <!-- <form name="addBsnForm"> -->
          <div class="single-input-item">
            <label for="companyName" class="required">Company Name</label>
            <input
              name="companyName"
              v-validate="'required|max:40'"
              type="text"
              id="companyName"
              placeholder="Company Name"
              v-model="companyName"
              class="form-control"
            >
            <p
              class="text-danger"
              v-if="errors.has('companyName')"
            >{{ errors.first('companyName') }}</p>
          </div>

          <div class="single-input-item">
            <label for="address" class="required">Address</label>
            <input
              name="address"
              v-validate="'required|max:60'"
              type="text"
              id="address"
              placeholder="Address"
              v-model="address"
              class="form-control"
            >
            <p class="text-danger" v-if="errors.has('address')">{{ errors.first('address') }}</p>
          </div>
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
            <!-- CITY -->
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="city" class="required">City</label>
                <input
                  name="city"
                  v-validate="'required|max:15'"
                  type="text"
                  id="city"
                  placeholder="City"
                  v-model="city"
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
                  id="country"
                  placeholder="Country"
                  v-model="country"
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
                  v-validate="'required|numeric|max:5|min:5'"
                  type="text"
                  id="zipcode"
                  v-model="zipcode"
                  placeholder="ZipCode"
                  class="form-control"
                >
                <p class="text-danger" v-if="errors.has('zipcode')">{{ errors.first('zipcode') }}</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-input-item">
                <label for="phone" class="required">Telephone</label>
                <input
                  name="phone"
                  v-validate="'required|numeric|max:10|min:10'"
                  v-model="phone"
                  type="text"
                  id="phone"
                  placeholder="Telephone"
                  class="form-control"
                >
                <p class="text-danger" v-if="errors.has('phone')">{{ errors.first('phone') }}</p>
              </div>
            </div>
          </div>
          <div class="single-input-item">
            <label for="website" class="required">Website</label>
            <input
              name="website"
              v-validate="'required|url'"
              v-model="website"
              type="url"
              id="website"
              placeholder="Website"
              class="form-control"
            >
            <p class="text-danger" v-if="errors.has('website')">{{ errors.first('website') }}</p>
          </div>
          <div class="row"></div>
          <div class="single-input-item">
            <label for="description" class="required">Description</label>
            <textarea
              class="form-control textArea"
              v-model="description"
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
          <div class="row"></div>
          <div class="single-input-item">
            <label for="logo" class="required">Business Photo</label>
            <p>
              <input v-validate="'image'" data-vv-as="image" name="logo" type="file">
            </p>
            <p class="text-danger" v-if="errors.has('logo')">{{ errors.first('logo') }}</p>
          </div>

          <div class="row" id="materials-process">
            <div class="col-md-6 categoryList">
              <h3>Materials</h3>
            </div>
            <div class="col-md-6 categoryList">
              <h3>Processes</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 categoryList">
              <div style="overflow-y: scroll; height:400px;">
                <ul class="list-group navList" id="editServMatCons">
                  <div v-for="(category, key) in materials" :key="key">
                    <li class="input-group" name="process" :value="category.id">
                      <strong>{{category.name}}</strong>
                    </li>
                    <li
                      v-for="(subcategory, subcatKey) in category.subcategories"
                      :key="subcatKey"
                      class="catMargins"
                    >
                      <div class="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            name="subMaterial"
                            v-model="smids"
                            :value="subcategory.id"
                          >
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
                <ul class="list-group navList" id="editServProcCons">
                  <div v-for="(category, key) in processes" :key="key">
                    <li class="input-group" name="process" :value="category.id">
                      <strong>{{category.name}}</strong>
                    </li>
                    <li
                      v-for="(subcategory, subcatKey) in category.subcategories"
                      :key="subcatKey"
                      class="catMargins"
                    >
                      <div class="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            name="subProcess"
                            v-model="spids"
                            :value="subcategory.id"
                          >
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
              <h3>Services</h3>
            </div>
            <div class="col-md-6 categoryList">
              <h3>Tags (Max. 6)</h3>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 categoryList">
              <div style="overflow-y: scroll; height:400px;">
                <ul class="list-group navList" id="editMatServCons">
                  <div v-for="(category, key) in services" :key="key">
                    <li class="input-group" name="service" :value="category.id">
                      <strong>{{category.name}}</strong>
                    </li>
                    <li
                      v-for="(subcategory, subcatKey) in category.subcategories"
                      :key="subcatKey"
                      class="catMargins"
                    >
                      <div class="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            name="subService"
                            v-model="ssids"
                            :value="subcategory.id"
                          >
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
                <ul class="list-group navList" id="addTags">
                  <div v-for="(tagCategory, key) in tags" :key="key">
                    <li class="input-group" name="tag" :value="tagCategory.name">
                      <strong>{{tagCategory.name}}</strong>
                    </li>
                    <li v-for="(tag, tagKey) in tagCategory.tags" :key="tagKey" class="catMargins">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" name="tag" v-model="tids" :value="tag.id">
                          {{tag.name}}
                        </label>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <!-- Modal Windows -->
          <div class="row">
            <div class="col-lg-4 col-lg-4 col-sm-6 buttonMargin">
              <p>
                <button :disabled="errors.any()" type="submit">Edit</button>
                <b-modal
                  v-model="modalShow"
                  id="modal-center"
                  ok-only
                  @ok="okModal"
                  centered
                  title="Company Added:"
                >
                  <p class="my-4">edit {{companyName}} business success</p>
                </b-modal>
                <b-modal
                  ok-variant="danger"
                  ok-only
                  v-model="modalShowFail"
                  id="modal-center"
                  centered
                  title="ERROR"
                >
                  <p class="my-4">Something went wrong!</p>
                </b-modal>
                <b-modal
                  ok-variant="danger"
                  ok-only
                  v-model="modalShowCred"
                  id="modal-center"
                  centered
                  title="ERROR"
                >
                  <p class="my-4">Edit Business Failed Some fields are empty or invalid</p>
                </b-modal>
              </p>
            </div>
          </div>
        </div>

        <!-- </b-collapse> -->
        <editmaterial></editmaterial>
        <editprocess></editprocess>
        <editservices></editservices>
        <edittag></edittag>

        <manageadmin v-show="adminAuthenticated"></manageadmin>
      </form>
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
        max: "The company name field may not be less than 40 characters."
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
import ManageAdmin from "../../superadmin/manageadmin/Manageadmin.vue";

import Vue from "vue";
import FileUpload from "v-file-upload";
import { thisTypeAnnotation } from "babel-types";
Vue.use(FileUpload);
export default {
  props: ["adminAuthenticated"],
  components: {
    editmaterial: EditMaterial,
    editprocess: EditProcess,
    editservices: EditServices,
    edittag: EditTag,
    companyselector: CompanySelector,
    manageadmin: ManageAdmin
  },
  data: () => ({
    modalShow: false,
    modalShowFail: false,
    modalShowCred: false,
    spids: [], //selected sub processes ids
    smids: [], //selected sub materials ids
    ssids: [], //selected sub services ids
    tids: [], //selected tags ids
    selected: "",
    companyName: "",
    address: "",
    city: "",
    country: "",
    zipcode: "",
    phone: "",
    website: "",
    description: "",
    logo: "",
    email: "",
    videoURL: ""
  }),
  methods: {
    collapseAll() {
      this.$refs.collapsible.map(c => (c.collapsed = true));
    },
    /**
     * Validate the data inserted using Vee-Validate
     * @return modal with a notification
     */
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          let data = {
            companyName: this.companyName,
            companyId: this.$store.state.businesses.currentBusiness.companyId,
            address: this.address,
            city: this.city,
            country: this.country,
            zipcode: this.zipcode,
            phone: this.phone,
            website: this.website,
            description: this.description,
            logo: this.logo,
            email: this.email,
            videoURL: this.videoURL,
            materials: this.getIdsArray("materials"),
            services: this.getIdsArray("services"),
            processes: this.getIdsArray("processes"),
            tags: this.getIdsArray("tags")
          };
          // console.log(data);
          this.$store
            .dispatch("editBusinessInfo", data)
            .then(response => {
              // console.log("Helooowwe edit business info");
              // console.log(response);
              if (response >= 0) {
                this.reloadBusinesses();
                //Edit Business successfully, set the modal booleans
                return { modalShow: true, modalShowCred: false };
              } else {
                //Something went wrong when editing business
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
          //Invalid or Empty fields
          this.modalShowFail = true;
        }
      });
    },
    /**
     * Reload the Business in case the Admin wants to Edit more Businesses
     */
    reloadBusinesses() {
      this.$store.dispatch("setBusinesses");
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
          // console.log(this.tids);
          // console.log(id);
          tagArr.push([id]);
        }
        return tagArr;
      }
    },
    getIds(resource, subresourceId) {
      //console.log(Object.keys(resource).length > 0);
      if (Object.keys(resource).length > 0) {
        let subresourceIdArr = [];

        for (let subcatKey in resource) {
          //console.log(subcategory);
          let subcategory = resource[subcatKey];
          subresourceIdArr.push(subcategory[subresourceId]);
        }
        // console.log(subresourceIdArr);
        return subresourceIdArr;
      } else {
        return [];
      }
    },
    /**
     * Redirect the Admin to the Edit Tab in the Admin console
     */
    okModal() {
      this.$router.replace("/admin/edit");
    },
    onChange() {
      let compName = this.selected;
      this.$store.dispatch("setCurrentBusiness", compName).then(response => {
        // console.log(response);
        if (response > 0) {
          let business = this.$store.state.businesses.currentBusiness;
          this.companyName = business.companyName;
          this.address = business.line;
          this.city = business.city;
          this.country = business.country;
          this.zipcode = business.zipcode;
          this.phone = business.phone;
          this.website = business.website;
          this.description = business.description;
          this.logo = "";
          this.email = business.email;
          this.videoURL = business.videoURL;
          this.spids = this.getIds(business.subprocesses, "subProcessId");
          this.smids = this.getIds(business.submaterials, "subMaterialId");
          this.ssids = this.getIds(business.subservices, "subServiceId");
          this.tids = this.getIds(business.tags, "tagId");
          // console.log(this.tids);
        } else {
          alert("There was an error please try again");
        }
        // for (let tagId in response) {
        //   this.spids.push(response[tagId].subMaterialId);
        // }
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
      // console.log(data);
    },
    reloadBusinesses() {
      this.$store.dispatch("setBusinesses");
    }
  },
  computed: {
    businesses() {
      return this.$store.state.businesses.businesses;
    },
    materials() {
      return this.$store.state.resources.resources.materials.categories;
    },
    processes() {
      return this.$store.state.resources.resources.processes.categories;
    },
    services() {
      return this.$store.state.resources.resources.services.categories;
    },
    tags() {
      return this.$store.state.tags.categories;
    },
    displayManageAdmin() {
      // console.log(this.$cookie.get("userType"));
      return this.$cookie.get("userType") == "admin";
    }
  }
};
</script>
<style>
</style>
