<template>
<form @submit.prevent="validateBeforeSubmit">  
<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-plus-sign marginTop"></span> Add New Service</h2>
    </div>
    <div id="error"></div>
    <!-- <form name="todo"> -->
        <div>
        <div class="row">
            <div class="col-md-4 addCategoryList">
                <h5>Service</h5>
                <div class="form-group">
                    <select class="form-control" onchange="addServ()" v-model="value" id="servTypes">
                        <option value="none" disabled="" selected="">Choose One Service</option>
                        <option id="addNewServ" value="addNewServ">New Service</option>
                        <option 

                        v-for="(category,key) in serviceCat"
                        :key="key"
                        :value="category.id"
                        >
                        {{category.name}}
                        </option>
                        <!-- <option value="24">Cleaning</option>
                        <option value="23">Extraction</option>
                        <option value="1">Prototype</option>
                        <option value="37">Roof Sealing</option> -->
                    </select>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div
                         id="newServ"
                         v-if="displayNewServ"
                         
                         >
                        <input type="text" class="form-control" name="newServiceField" placeholder="Enter New Service" v-validate="'required|max:10'" v-model="newServiceField" id="newServiceField"></div>
                         <p class="text-danger" v-if="errors.has('newServiceField')">{{ errors.first('newServiceField') }}</p>
                    </div>
                </div>
                <h5>Sub-Service</h5>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newSubServ" id="newSubServ" v-validate="'required|max:10'" v-model="newSubServ" placeholder="Enter Sub-Service" onclick="showServConnections() ">
                         <p class="text-danger" v-if="errors.has('newSubServ')">{{ errors.first('newSubServ') }}</p>
                        <!-- <button >Add</button> -->
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
      newServiceField: {
        required: "The new service field is required.",
        max: "The new material field may not be greater than 15 characters."
      },
      newSubServ: {
        required: "The sub service field is required.",
        max: "The sub service field may not be greater than 15 characters."
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
    newServiceField: "",
    newSubServ: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.test();
          alert("Service Added");
          this.$validator.reset();
          return;
        }
        alert("Empty Field(s)");
      });
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
      return this.$store.state.resources.resources.services.categories;
    },
    displayNewServ() {
      return this.value == "addNewServ";
    }
  }
};
</script>
<style>
</style>
