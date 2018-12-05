<template>
  <form @submit.prevent="validateBeforeSubmit">
    <div class="container listContainer">
      <div class="row addMarginTop">
        <h2>
          <span class="glyphicon glyphicon-plus-sign marginTop"></span> Add New Service
        </h2>
      </div>
      <div id="error"></div>
      <div>
        <div class="row">
          <div class="col-md-4 addCategoryList">
            <h5>Service</h5>
            <div class="form-group">
              <select class="form-control" v-model="value" id="servTypes">
                <option value="none" disabled selected>Choose One Service</option>
                <option id="addNewServ" value="addNewServ">New Service</option>
                <!-- Service Categories -->
                <option
                  v-for="(category,key) in serviceCat"
                  :key="key"
                  :value="category.id"
                >{{category.name}}</option>
              </select>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <!-- If new service selected show the input textbox -->
                <div id="newServ" v-if="displayNewServ">
                  <input
                    type="text"
                    class="form-control"
                    name="newServiceField"
                    placeholder="Enter New Service"
                    v-validate="'required|max:15'"
                    v-model="newServiceField"
                    id="newServiceField"
                  >
                </div>
                <p
                  class="text-danger"
                  v-if="errors.has('newServiceField')"
                >{{ errors.first('newServiceField') }}</p>
              </div>
            </div>
            <!-- SubServices -->
            <h5>Sub-Service</h5>
            <div class="row">
              <div class="input-group input_fields_wrap subCatField col-md-12">
                <input
                  type="text"
                  class="form-control"
                  name="newSubServ"
                  id="newSubServ"
                  v-validate="'required|max:15'"
                  v-model="newSubServ"
                  placeholder="Enter Sub-Service"
                >
                <p
                  class="text-danger"
                  v-if="errors.has('newSubServ')"
                >{{ errors.first('newSubServ') }}</p>
              </div>
            </div>
            <div class="col-lg-8 col-lg-8 col-sm-6 buttonMargin">
              <p>
                <!-- Modal Windows -->
                <button :disabled="errors.any()" type="submit">Add</button>
                <b-modal
                  v-model="modalShow"
                  id="modal-center"
                  @ok="okModal"
                  ok-only
                  centered
                  title="Added"
                >
                  <p class="my-4">The service was added.</p>
                </b-modal>
                <b-modal
                  ok-variant="danger"
                  ok-only
                  v-model="modalShowFail"
                  id="modal-center"
                  centered
                  title="ERROR"
                >
                  <p class="my-4">Try Again</p>
                </b-modal>
                <b-modal
                  ok-variant="danger"
                  ok-only
                  v-model="modalShowCred"
                  id="modal-center"
                  centered
                  title="ERROR"
                >
                  <p class="my-4">Something went wrong, verify the data submitted.</p>
                </b-modal>
              </p>
            </div>
          </div>

          <div id="matConn" class="col-md-4 addCategoryList" style="display: none">
            <h5>Material Connections</h5>
            <ul class="list-group navList" id="matCons"></ul>
          </div>

          <div id="procConn" class="col-md-4 addCategoryList" style="display: none">
            <h5>Processes Connections</h5>
            <ul class="list-group navList" id="procCons"></ul>
          </div>
        </div>
      </div>
      <!-- </form> -->
    </div>
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
      newServiceField: {
        required: "The new service field is required.",
        max: "The new service field may not be greater than 15 characters."
      },
      newSubServ: {
        required: "The sub service field is required.",
        max: "The sub service field may not be greater than 15 characters."
      }
    }
  }
};

Validator.localize(dictionary);

export default {
  data: () => ({
    modalShow: false,
    modalShowFail: false,
    modalShowCred: false,
    value: "",
    newServiceField: "",
    newSubServ: ""
  }),
  methods: {
    validateBeforeSubmit: function(e) {
      e.preventDefault();

      this.$validator.validateAll().then(result => {
        if (result) {
          if (this.newServiceField == "") {
            //Catefory already exists add new subcategory only
            let data = {
              resource: "services",
              subresName: this.newSubServ,
              cid: this.value
            };

            this.$store
              .dispatch("addNewSubResource", data)
              .then(response => {
                console.log("after dispatch add new submaterial");
                console.log(response);

                if (response > 0) {
                  this.reloadResources();
                  return { modalShow: true, modalShowCred: false };
                } else {
                  return { modalShow: false, modalShowCred: true };
                }
              })
              .then(data => {
                this.modalShow = data.modalShow;
                this.modalShowCred = data.modalShowCred;
              });
            this.$validator.reset();
            this.value = "";
            this.newSubServ = "";
            return;
          } else {
            let data = {
              resource: "services",
              resName: this.newSubServ, //new category name
              subresName: this.newSubServ //new subcategory name
            };
            this.$store
              .dispatch("addNewResource", data)
              .then(response => {
                console.log("after dispatch add new material and submaterial");
                console.log(response);

                if (response > 0) {
                  this.reloadResources();
                  return { modalShow: true, modalShowCred: false };
                } else {
                  return { modalShow: false, modalShowCred: true };
                }
              })
              .then(data => {
                this.modalShow = data.modalShow;
                this.modalShowCred = data.modalShowCred;
              });
          }
          this.$validator.reset();
          this.value = "";
          this.newServiceField = "";
          this.newSubServ = "";
          return;

          console.log(data);
        } else {
          this.modalShowFail = true;
        }
      });
    },

    // validateBeforeSubmit() {
    //   this.$validator.validateAll().then(result => {
    //     if (result) {
    //       if (this.newServiceField == "") {
    //         //Catefory already exists add new subcategory only
    //         let data = {
    //           resource: "services",
    //           subresName: this.newSubServ,
    //           cid: this.value
    //         };
    //         this.$store.dispatch("addNewSubResource", data).then(response => {
    //           console.log("after dispatch add new subservice");
    //           console.log(response);

    //           if (response > 0) {
    //             //added new subresource sucessfully
    //             this.reloadResources();
    //             alert("added new subservice successfully");
    //           } else {
    //             //add new subresource failed
    //             alert("Failed to add new subservice");
    //           }
    //         });

    //         this.value = "";
    //         this.newSubServ = "";
    //         console.log(data);
    //       } else {
    //         let data = {
    //           resource: "services",
    //           resName: this.newServiceField, //new category name
    //           subresName: this.newSubServ //new subcategory name
    //         };
    //         this.$store.dispatch("addNewResource", data).then(response => {
    //           console.log("after dispatch add new service and subservice");
    //           console.log(response);

    //           if (response > 0) {
    //             //added new subresource sucessfully
    //             this.reloadResources();
    //             alert("added new service and subservice successfully");
    //           } else {
    //             //add new subresource failed
    //             alert("Failed to add new service and subservice");
    //           }
    //         });
    //         this.value = "";
    //         this.newServiceField = "";
    //         this.newSubServ = "";

    //         console.log(data);
    //       }
    //       this.$validator.reset();
    //       return;
    //     }
    //     alert("Empty Field(s)");
    //   });
    // },
    reloadResources() {
      this.$store.dispatch("setResources");
    },
    okModal() {
      this.$router.replace("/admin/add");
    },
    test() {
      if (this.newServiceField == "") {
        let data = {
          resource: "services",
          subresName: this.newSubServ,
          cid: this.value
        };
        this.value = "";
        this.newSubServ = "";
        console.log(data);
        this.$store.dispatch("addNewSubResource", data);
      } else {
        let data = {
          resource: "services",
          resName: this.newServiceField,
          subresName: this.newSubServ
        };

        this.value = "";
        this.newServiceField = "";
        this.newSubServ = "";
        console.log(data);
        this.$store.dispatch("addNewResource", data);
      }
    }
  },
  computed: {
    serviceCat() {
      return this.$store.getters.getResourceCategories("services");
    },
    displayNewServ() {
      return this.value == "addNewServ";
    }
  }
};
</script>
<style>
</style>
