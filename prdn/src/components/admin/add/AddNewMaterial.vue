<template>
<form @submit.prevent="validateBeforeSubmit">  
    <div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-plus-sign addMarginTop"></span> Add New Material</h2>
    </div>

    <div id="error"></div>
    <!-- <form name="todo"> -->
        <div>
        <div class="row">
            <div class="col-md-4 addCategoryList">
                <h5>Materials</h5>
                <div class="form-group">
                    <select class="form-control" v-model="value" id="matTypes">
                        <option value="none" disabled selected>Choose One Material</option>
                        <option id="addNewMat" value="addNewMat">New Material</option>
                        <!-- Material Categories -->
                        <option 
                        v-for="(category,key) in materialCat"
                        :key="key"
                        :value="category.id"
                        >
                        {{category.name}}
                        </option>
                    </select>
                </div>
                <div class="row">
                    <div class="col-md-12">
                      <!-- If new material selected show the input textbox -->
                        <div 
                            id="newMat"
                            v-if="displayNewMat">
                            <input type="text" class="form-control" name="newMatField" placeholder="Enter New Material" v-validate="'required|max:15'" v-model="newMatField" id="newMaterialField"></div>
                            <p class="text-danger" v-if="errors.has('newMatField')">{{ errors.first('newMatField') }}</p>
                        </div>
                    </div>
                        
                        
                <h5>Sub-Materials</h5>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newSubMat" id="newSubMat" v-validate="'required|max:15'" v-model="newSubMat" placeholder="Enter Sub-Material">
                        <p class="text-danger" v-if="errors.has('newSubMat')">{{ errors.first('newSubMat') }}</p>
                    </div>
                </div>
              
                    <div class="col-lg-8  col-lg-8 col-sm-6  buttonMargin">   
                <p>
                     <button :disabled="errors.any()" type="submit">Add</button>
                      <b-modal  v-model="modalShow" id="modal-center" @ok="okModal"  centered title="Added">
                      <p class="my-4">The material was added.</p>
                      </b-modal>
                      <b-modal ok-variant="danger" v-model="modalShowFail"  id="modal-center" centered title="ERROR">
                      <p class="my-4">Try Again</p>
                      </b-modal>
                      <b-modal ok-variant="danger" v-model="modalShowCred" id="modal-center" centered title="ERROR">
                      <p class="my-4">Combination failed</p>
                      </b-modal>
                </p>
            </div>
              
                
            </div>

            <div id="procConn" class="col-md-4 addCategoryList" style="display: none">
                <h5>Processes Connections</h5>
                <ul class="list-group navList" id="procCons"> </ul>
            </div>

            <div id="servConn" class="col-md-4 addCategoryList" style="display: none">
                <h5>Services Connections</h5>
                <ul class="list-group navList" id="servCons">
                </ul>
            </div>

            <div class="row">
                <div class="col-md-4 pull-right buttonMargin" style="display: none" id="addProcServConnBtn">
                    <p>
                        <button type="button" class="btn btn-primary btn-lg" id="addBttn" >Add</button>
                        <button type="button" class="btn btn-default btn-lg" id="cancelBttn" >Cancel</button>
                    </p>
                </div>
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
      newMaterial: {
        required: "The new material field is required.",
        max: "The new material field may not be greater than 15 characters."
      },
      newSubMat: {
        required: "The sub material field is required.",
        max: "The sub material field may not be greater than 15 characters."
      },
      newMatField: {
        required: "The new material field is required.",
        max: "The new material field may not be greater than 15 characters."
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
    matCategory: "",
    newMatField: "",
    newSubMat: ""
  }),
  methods: {
    validateBeforeSubmit: function(e) {
      e.preventDefault();

      this.$validator.validateAll().then(result => {
        if (result) {
          if (this.newMatField == "") {
            //Catefory already exists add new subcategory only
            let data = {
              resource: "materials",
              subresName: this.newSubMat,
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
            this.newSubMat = "";
            return;
          } else {
            let data = {
              resource: "materials",
              resName: this.newMatField, //new category name
              subresName: this.newSubMat //new subcategory name
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
          this.newMatField = "";
          this.newSubMat = "";
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
    //       if (this.newMatField == "") {
    //         //Catefory already exists add new subcategory only
    //         let data = {
    //           resource: "materials",
    //           subresName: this.newSubMat,
    //           cid: this.value
    //         };
    //         this.$store.dispatch("addNewSubResource", data).then(response => {
    //           console.log("after dispatch add new submaterial");
    //           console.log(response);

    //           if (response > 0) {
    //             //added new subresource sucessfully
    //             this.reloadResources();
    //             alert("added new subresource successfully");
    //           } else {
    //             //add new subresource failed
    //             alert("Failed to add new subresource");
    //           }
    //         });

    //         this.value = "";
    //         this.newSubMat = "";
    //         console.log(data);
    //       } else {
    //         let data = {
    //           resource: "materials",
    //           resName: this.newMatField, //new category name
    //           subresName: this.newSubMat //new subcategory name
    //         };
    //         this.$store.dispatch("addNewResource", data).then(response => {
    //           console.log("after dispatch add new material and submaterial");
    //           console.log(response);

    //           if (response > 0) {
    //             //added new subresource sucessfully
    //             this.reloadResources();
    //             alert("added new material and submaterial successfully");
    //           } else {
    //             //add new subresource failed
    //             alert("Failed to add new material and submaterial");
    //           }
    //         });
    //         this.value = "";
    //         this.newMatField = "";
    //         this.newSubMat = "";

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
      if (this.newMatField == "") {
        let data = {
          resource: "materials",
          subresName: this.newSubMat,
          cid: this.value
        };
        this.$store.dispatch("addNewSubResource", data).then(response => {
          if (response.length > 0) {
            //added new subresource sucessfully
          } else {
            //add new subresource failed
          }
        });
        this.value = "";
        this.newSubMat = "";
        console.log(data);
        this.$store.dispatch("addNewSubResource", data);
      } else {
        let data = {
          resource: "materials",
          resName: this.newMatField,
          subresName: this.newSubMat
        };
        this.value = "";
        this.newMatField = "";
        this.newSubMat = "";

        console.log(data);
        this.$store.dispatch("addNewResource", data);
      }
    }
  },
  computed: {
    materialCat() {
      return this.$store.state.resources.resources.materials.categories;
    },
    displayNewMat() {
      return this.value == "addNewMat";
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
  margin: 50px 0 100px 0;
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
