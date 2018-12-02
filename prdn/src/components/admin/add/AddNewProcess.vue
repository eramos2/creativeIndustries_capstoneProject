<template>
  <form @submit.prevent="validateBeforeSubmit">
    <div class="container listContainer">
      <div class="row addMarginTop">
        <h2>
          <span class="glyphicon glyphicon-plus-sign marginTop"></span> Add New Process
        </h2>
      </div>

      <div id="error"></div>
      <!-- <form name="todo"> -->
      <div>
        <div class="row">
          <div class="col-md-4 addCategoryList">
            <h5>Process</h5>
            <div class="form-group">
              <select class="form-control" v-model="value" id="procTypes">
                <option value="none" disabled selected>Choose One Process</option>
                <option id="addNewProc" value="addNewProc">New Process</option>
                <!-- Process categories -->
                <option
                  v-for="(category,key) in processCat"
                  :key="key"
                  :value="category.id"
                >{{category.name}}</option>
              </select>
            </div>

            <div class="row">
              <div class="col-md-12">
                <!-- If new process selected show the input textbox -->
                <div id="newProc" v-if="displayNewProc">
                  <input
                    type="text"
                    class="form-control"
                    name="newProcField"
                    placeholder="Enter New Process"
                    v-validate="'required|max:15'"
                    v-model="newProcField"
                    id="newProcessField"
                  >
                </div>
                <p
                  class="text-danger"
                  v-if="errors.has('newProcField')"
                >{{ errors.first('newProcField') }}</p>
              </div>
            </div>

            <h5>Sub-Process</h5>
            <div class="row">
              <div class="input-group input_fields_wrap subCatField col-md-12">
                <input
                  type="text"
                  class="form-control"
                  name="newSubProc"
                  id="newSubProc"
                  v-validate="'required|max:15'"
                  v-model="newSubProc"
                  placeholder="Enter Sub-Process"
                >
                <p
                  class="text-danger"
                  v-if="errors.has('newSubProc')"
                >{{ errors.first('newSubProc') }}</p>
              </div>
            </div>

            <div class="col-lg-8 col-lg-8 col-sm-6 buttonMargin">
              <p>
                <button :disabled="errors.any()" type="submit">Add</button>
                <b-modal v-model="modalShow" id="modal-center" @ok="okModal" centered title="Added">
                  <p class="my-4">The Process was added.</p>
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
                  <p class="my-4">Combination failed</p>
                </b-modal>
              </p>
            </div>
          </div>
          <div id="matConn" class="col-md-4 addCategoryList" style="display: none">
            <h5>Material Connections</h5>
            <ul class="list-group navList" id="matCons"></ul>
          </div>

          <div id="servConn" class="col-md-4 addCategoryList" style="display: none">
            <h5>Services Connections</h5>
            <ul class="list-group navList" id="servCons"></ul>
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
      newSubProc: {
        required: "The new sub process field is required.",
        max: "The new sub process field may not be greater than 15 characters."
      },
      newProcField: {
        required: "The new process  field is required.",
        max: "The new process field may not be greater than 15 characters."
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
    newProcField: "",
    newSubProc: ""
  }),
  methods: {
    validateBeforeSubmit: function(e) {
      e.preventDefault();

      this.$validator.validateAll().then(result => {
        if (result) {
          if ((this.newProcField = "")) {
            let data = {
              resource: "processes",
              subresName: this.newSubProc,
              cid: this.value
            };
            this.$store
              .dispatch("addNewSubResource", data)
              .then(response => {
                console.log("after dispatch add new sub-resource");
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
            this.newSubProc = "";
            return;
          } else {
            let data = {
              resource: "processes",
              resName: this.newProcField,
              subresName: this.newSubProc
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
          this.newProcField = "";
          this.newSubProc = "";
          return;

          console.log(data);
        } else {
          this.modalShowFail = true;
        }
      });
    },
    okModal() {
      this.$router.replace("/admin/add");
    },
    // validateBeforeSubmit() {
    //   this.$validator.validateAll().then(result => {
    //     if (result) {
    //       if (this.newProcField == "") {
    //         //Catefory already exists add new subcategory only
    //         let data = {
    //           resource: "processes",
    //           subresName: this.newSubProc,
    //           cid: this.value
    //         };
    //         //Dispatch the action to add the subresource
    //         this.$store.dispatch("addNewSubResource", data).then(response => {
    //           console.log("after dispatch add new subprocess");
    //           console.log(response);

    //           if (response > 0) {
    //             //added new subprocess sucessfully
    //             this.reloadResources();
    //             alert("added new subprocess successfully");
    //           } else {
    //             //add new subprocess failed
    //             alert("Failed to add new subprocess");
    //           }
    //         });

    //         this.value = "";
    //         this.newSubProc = "";
    //         console.log(data);
    //       } else {
    //         //Add new process Category and add new subcategory
    //         let data = {
    //           resource: "processes",
    //           resName: this.newProcField, //new category name
    //           subresName: this.newSubProc //new subcategory name
    //         };
    //         //Dispatch the action to add the new process category and the new subprocess
    //         this.$store.dispatch("addNewResource", data).then(response => {
    //           console.log("after dispatch add new material and subprocess");
    //           console.log(response);

    //           if (response > 0) {
    //             //added new subresource sucessfully
    //             this.reloadResources();
    //             alert("added new material and subprocess successfully");
    //           } else {
    //             //add new subresource failed
    //             alert("Failed to add new material and subprocess");
    //           }
    //         });
    //         this.value = "";
    //         this.newProcField = "";
    //         this.newSubProc = "";

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
    test() {
      if (this.newProcField == "") {
        let data = {
          resource: "processes",
          subresName: this.newSubProc,
          cid: this.value
        };
        this.value = "";
        this.newSubProc = "";
        console.log(data);
        this.$store.dispatch("addNewSubResource", data);
      } else {
        let data = {
          resource: "processes",
          resName: this.newProcField,
          subresName: this.newSubProc
        };

        this.value = "";
        this.newProcField = "";
        this.newSubProc = "";
        console.log(data);
        this.$store.dispatch("addNewResource", data);
      }
    }
  },
  computed: {
    processCat() {
      return this.$store.state.resources.resources.processes.categories;
    },
    displayNewProc() {
      return this.value == "addNewProc";
    }
  }
};
</script>
<style>
.row .subCatField {
  padding-left: 15px;
}

.input-group .form-control {
}
.addCategoryList .col-md-12 {
  padding-right: 0;
}
.buttonMargin {
  margin: 25px 0 100px 0;
}
.listContainer {
  text-align: left;
  padding-bottom: 30px;
}
.addMarginTop {
  margin-top: 20px;
  height: 60px;
}
</style>
