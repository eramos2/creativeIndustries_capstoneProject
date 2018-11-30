<template>
<form @submit.prevent="validateBeforeSubmit">  
<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-plus-sign marginTop"></span> Add New Tag</h2>
    </div>
    <div id="error"></div>
    <!-- <form name="todo"> -->
        <div>
        <div class="row">
            <div class="col-md-4 addCategoryList">
                <h5>Tag - Category</h5>
                <div class="form-group">
                    <select class="form-control" v-model="value" id="tagTypes">
                        <option value="none" disabled selected>Choose One Tag</option>
                        <option id="addNewTag" value="addNewTag">New Tag</option>

                        <!-- Tag Categories -->
                        <option 
                        v-for="(tagCategory,key) in tagCat"
                        :key="key"
                        :value="tagCategory.name"
                        >
                        {{tagCategory.name}}
                        </option>

                        <!-- <option value="1">Tubing</option>
                        <option value="3">Ornaments</option>
                        <option value="4">Decorative</option>
                        <option value="5">Opaque</option>
                        <option value="6">Breathable</option>
                        <option value="7">Long Lasting</option>    -->
                    </select>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div 
                            id="newTag"
                            v-if="displayNewTag"
                        
                        >
                            <input type="text" class="form-control" name="newTagField" placeholder="Enter New Tag" v-validate="'required|max:15'" v-model="newTagField" id="newTagField"></div>
                            <p class="text-danger" v-if="errors.has('newTagField')">{{ errors.first('newTagField') }}</p>

                        </div>
                    </div>    
                <h5>Tag - Name</h5>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="tagName" id="tagName" v-validate="'required|max:15'" v-model="tagName"  placeholder="Tag-Name" >
                       <p class="text-danger" v-if="errors.has('tagName')">{{ errors.first('tagName') }}</p>
                        <!-- <button>Add</button> -->
                    </div>
                </div>

                <div class="col-lg-8  col-lg-8 col-sm-6  buttonMargin">   
                <p>
                     <button :disabled="errors.any()" type="submit">Add</button>
                </p>
            </div>
            </div>

            <div id="matConn" class="col-md-4 addCategoryList" style="display: none">
                <h5>Material Connections</h5>
                <ul class="list-group navList" id="matCons"> </ul>
            </div>

            <div id="procConn" class="col-md-4 addCategoryList" style="display: none">
                <h5>Processes Connections</h5>
                <ul class="list-group navList" id="procCons">
                </ul>
            </div>

            <div class="row">
                <div class="col-md-4 pull-right buttonMargin" style="display: none" id="addMatProcConnBtn">
                    <p>
                        <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateAddNewServ(this.form)">Add</button>
                        <button type="button" class="btn btn-default btn-lg" id="cancelBttn" onClick="loadPage('controlPanel')">Cancel</button>
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
      newTagField: {
        required: "The new tag field is required.",
        max: "The new tag field may not be greater than 15 characters."
      },
      tagName: {
        required: "The tag connection field is required.",
        max: "The tag connection field may not be greater than 15 characters."
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
    value: "",
    newTagField: "",
    tagName: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          if (this.newTagField == "") {
            //Category already exists add new tag name only
            let data = {
              name: this.tagName,
              category: this.value
            };
            this.$store.dispatch("addNewTag", data).then(response => {
              console.log("after dispatch add new tag");
              console.log(response);

              if (response > 0) {
                //added new subresource sucessfully
                this.reloadTags();
                alert("added new subservice successfully");
              } else {
                //add new subresource failed
                alert("Failed to add new subservice");
              }
            });

            this.value = "";
            this.newSubServ = "";
            console.log(data);
          } else {
            let data = {
              resource: "services",
              resName: this.newServiceField, //new category name
              subresName: this.newSubServ //new subcategory name
            };
            this.$store.dispatch("addNewResource", data).then(response => {
              console.log("after dispatch add new service and subservice");
              console.log(response);

              if (response > 0) {
                //added new subresource sucessfully
                this.reloadTags();
                alert("added new service and subservice successfully");
                this.$validator.reset();
              } else {
                //add new subresource failed
                alert("Failed to add new service and subservice");
                this.$validator.reset();
              }
            });
            this.value = "";
            this.newServiceField = "";
            this.newSubServ = "";

            console.log(data);
          }

          return;
        }
        alert("Empty Field(s)");
        this.$validator.reset();
      });
    },
    reloadTags() {
      this.$store.dispatch("setTags");
    },
    test() {
      if (this.newTagField == "") {
        let data = {
          value: this.value,
          tagName: this.tagName
        };
        this.value = "";
        this.newTagField = "";
        this.tagName = "";
        console.log(data);
      } else {
        let data = {
          value: this.value,
          newTagField: this.newTagField,
          tagName: this.tagName
        };
        this.value = "";
        this.newTagField = "";
        this.tagName = "";

        console.log(data);
      }
    }
  },
  computed: {
    tagCat() {
      return this.$store.getters.getTags();
    },
    displayNewTag() {
      return this.value == "addNewTag";
    }
  }
};
</script>
<style>
</style>
