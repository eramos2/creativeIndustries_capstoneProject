<template>
  <form @submit.prevent="validateBeforeSubmit">
    <!-- Single Tab Content Start -->
    <div class id="add" role="tabpanel">
      <div class="myaccount-content">
        <h3>Add</h3>

        <div class="container" id="addBsnPage">
          <div class="row marginTop">
            <h2>
              <span class="glyphicon glyphicon-plus-sign marginTop"></span> Add New Business
            </h2>
          </div>
          <div id="error"></div>
          <!-- <form name="addBsnForm"> -->
          <!-- COMPANY NAME -->
          <div>
            <div class="single-input-item">
              <!-- <div class="single-input-item"> -->
              <label for="companyName" class="required">Company Name</label>
              <input
                name="companyName"
                v-validate="'required|max:20'"
                type="text"
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
            <!-- <div class="single-input-item"> -->
            <div class="single-input-item">
              <label for="address" class="required">Address</label>
              <input
                name="address"
                v-validate="'required|max:50'"
                type="text"
                id="address"
                v-model="address"
                placeholder="Address"
                class="form-control"
              >
              <p class="text-danger" v-if="errors.has('address')">{{ errors.first('address') }}</p>
            </div>

            <!-- <div class="row"> -->
            <div class="row">
              <div class="col-lg-6">
                <div class="single-input-item">
                  <!-- <div class="single-input-item"> -->
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
              <!-- </div> -->
              <div class="col-lg-6">
                <div class="single-input-item">
                  <!-- <div class="single-input-item"> -->
                  <label for="country" class="required">Country</label>
                  <input
                    name="country"
                    v-validate="'required|max:15'"
                    type="text"
                    id="country"
                    v-model="country"
                    placeholder="Country"
                    class="form-control"
                  >
                  <p class="text-danger" v-if="errors.has('country')">{{ errors.first('country') }}</p>
                </div>
              </div>
              <!-- </div> -->
              <div class="col-lg-6">
                <!-- <div class="single-input-item"> -->
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
                <!-- </div> -->
              </div>
              <div class="col-lg-6">
                <div class="single-input-item">
                  <!-- <div class="single-input-item"> -->
                  <label for="phone" class="required">Telephone</label>
                  <input
                    name="phone"
                    v-validate="'required|numeric|max:10'"
                    type="text"
                    id="phone"
                    v-model="phone"
                    placeholder="7875559999"
                    class="form-control"
                  >
                  <p class="text-danger" v-if="errors.has('phone')">{{ errors.first('phone') }}</p>
                </div>
              </div>
            </div>
            <!-- </div> -->
            <!-- </div> -->
            <!-- <div class="single-input-item"> -->
            <div class="single-input-item">
              <label for="website" class="required">Website</label>
              <input
                name="website"
                v-validate="'required|url'"
                type="url"
                id="website"
                v-model="website"
                placeholder="Website"
                class="form-control"
              >
              <p class="text-danger" v-if="errors.has('website')">{{ errors.first('website') }}</p>
            </div>
            <div class="row"></div>
            <!-- <div class="single-input-item"> -->
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
            <div class="row"></div>
            <!-- <div class="single-input-item"> -->
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
                      <li
                        v-for="(tag, tagKey) in tagCategory.tags"
                        :key="tagKey"
                        class="catMargins"
                      >
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

            <div class="col-lg-8 col-lg-8 col-sm-6 buttonMargin">
              <p>
                <button :disabled="errors.any()" type="submit">Add</button>
                <b-modal
                  v-model="modalShow"
                  id="modal-center"
                  @ok="okModal"
                  centered
                  title="Company Added:"
                >
                  <p class="my-4">{{companyName}}</p>
                </b-modal>
                <b-modal
                  ok-variant="danger"
                  v-model="modalShowFail"
                  id="modal-center"
                  centered
                  title="ERROR"
                >
                  <p class="my-4">Try Again</p>
                </b-modal>
                <b-modal
                  ok-variant="danger"
                  v-model="modalShowCred"
                  id="modal-center"
                  centered
                  title="ERROR"
                >
                  <p class="my-4">Email/password combination failed</p>
                </b-modal>
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

      <manageadmin v-show="adminAuthenticated"></manageadmin>
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
      address: {
        required: "Please enter the Address.",
        max: "The address field may not be greater than 50 characters."
      }
    }
  }
};

import MaterialCheckbox from "./MaterialCheckbox.vue";
import AddNewMaterial from "./AddNewMaterial.vue";
import AddNewProcess from "./AddNewProcess.vue";
import AddNewService from "./AddNewService.vue";
import Manageadmin from "../../superadmin/manageadmin/Manageadmin.vue";
import AddNewTag from "./AddNewTag.vue";
import Vue from "vue";
import FileUpload from "v-file-upload";
Vue.use(FileUpload);
export default {
  props: ["adminAuthenticated"],
  components: {
    addnewmaterial: AddNewMaterial,
    addnewprocess: AddNewProcess,
    addnewservice: AddNewService,
    addnewtag: AddNewTag,
    materialCheckbox: MaterialCheckbox,
    manageadmin: Manageadmin
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
    },
    tags() {
      return this.$store.state.tags.categories;
    }
  },
  data: () => ({
    modalShow: false,
    modalShowFail: false,
    modalShowCred: false,
    spids: [], //selected sub processes ids
    smids: [], //selected sub materials ids
    ssids: [], //selected sub services ids
    tids: [], //selected tags ids
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
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          let data = {
            companyName: this.companyName,
            address: this.address,
            city: this.city,
            country: this.country,
            zipcode: this.zipcode,
            phone: this.phone,
            website: this.website,
            description: this.description,
            logo: this.logo,
            materials: this.getIdsArray("materials"),
            services: this.getIdsArray("services"),
            processes: this.getIdsArray("processes"),
            tags: this.getIdsArray("tags")
          };
          this.$store
            .dispatch("addNewBusiness", data)
            .then(response => {
              console.log("Helooowwe");
              console.log(response);
              if (response > 0) {
                //Added Business successfully, set the modal booleans
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
          //Invalid or Empty fields
          this.modalShowFail = true;
        }
      });
    },
    okModal() {
      this.$router.replace("/admin/add");
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
