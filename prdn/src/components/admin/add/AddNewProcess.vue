<template>
<form @submit.prevent="validateBeforeSubmit">  
    <div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-plus-sign marginTop"></span> Add New Process</h2>
    </div>

    <div id="error"></div>
    <!-- <form name="todo"> -->
        <div>
        <div class="row">
            <div class="col-md-4 addCategoryList">
                <h5>Process</h5>
                <div class="form-group">
                    <select class="form-control" v-model="value" onchange="addProc()" id="procTypes">
                        <option value="none" disabled selected>Choose One Process</option>
                        <option id="addNewProc" value="addNewProc">New Process</option>
                        <option 
                        
                        v-for="(category,key) in processCat"
                        :key="key"
                        :value="category.id"
                        >
                        {{category.name}}
                        </option>
                        <!-- <option value="2">Engraving</option>
                        <option value="3">Extrusion</option>
                        <option value="7">Fabric Machinery</option>
                        <option value="4">Geometrical Precision Cutting</option>
                        <option value="6">Hand Made</option>
                        <option value="9">Metal Workshop</option>
                        <option value="1">Molding</option>
                        <option value="8">Rapid Prototype</option>
                        <option value="5">Welding</option> -->
                    </select>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div 
                        id="newProc"
                        v-if="displayNewProc"
                        
                        >
                            <input type="text" class="form-control" name="newProcField" placeholder="Enter New Process" v-validate="'required|max:15'"  v-model="newProcField"  id="newProcessField"></div>
                         <p class="text-danger" v-if="errors.has('newProcField')">{{ errors.first('newProcField') }}</p>
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newProcess" id="newProcess" v-validate="'required|max:10'"  v-model="newProcess" placeholder="Enter New Process" onclick="showMatConnections()">
                       
                        <button>Add</button>
                    </div>
                </div> -->
                
                <h5>Sub-Process</h5>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newSubProc" id="newSubProc" v-validate="'required|max:15'"  v-model="newSubProc" placeholder="Enter Sub-Process"  onclick="showProcConnections() ">
                        <p class="text-danger" v-if="errors.has('newSubProc')">{{ errors.first('newSubProc') }}</p>
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

            <div id="servConn" class="col-md-4 addCategoryList" style="display: none">
                <h5>Services Connections</h5>
                <ul class="list-group navList" id="servCons">
                </ul>
            </div>

            <div class="row">
                <div class="col-md-4 pull-right buttonMargin" style="display: none" id="addMatServConnBtn">
                    <p>
                        <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateAddNewProc(this.form)">Add</button>
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
    value: "",
    newProcField: "",
    newSubProc: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.test();
          alert("Process Added");
          this.$validator.reset();
          return;
        }
        alert("Empty Field(s)");
      });
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
