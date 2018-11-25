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
                <h5>Material</h5>
                <div class="form-group">
                    <select class="form-control" v-model="value" onchange="addMat()" id="matTypes">
                        <option value="none" disabled selected>Choose One Material</option>
                        <option id="addNewMat" value="addNewMat">New Material</option>
                        <option value="1">Concrete</option>
                        <option value="7">Fabrics</option>
                        <option value="6">Glass and Ceramics</option>
                        <option value="3">Metal</option>
                        <option value="8">Papers Coating and Surfaces</option>
                        <option value="4">Plastic</option>
                        <option value="5">Rubber</option>
                        <option value="2">Wood</option>
                    </select>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div 
                            id="newMat"
                            v-if="displayNewMat"
                        
                        >
                            <input type="text" class="form-control" name="newMatField" placeholder="Enter New Material" v-validate="'required|max:15'" v-model="newMatField" id="newMaterialField"></div>
                            <p class="text-danger" v-if="errors.has('newMatField')">{{ errors.first('newMatField') }}</p>
                            <!-- <button>Add</button> -->
                        </div>
                    </div>
                    <!-- <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newMaterial" id="newMaterial" v-validate="'required|max:15'" v-model="newMaterial" placeholder="Enter New Material" onclick="showMatConnections()"> -->
                        
                        
                <h5>Sub-Materials</h5>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newSubMat" id="newSubMat" v-validate="'required|max:15'" v-model="newSubMat" placeholder="Enter Sub-Material" onclick="showMatConnections()">
                        <p class="text-danger" v-if="errors.has('newSubMat')">{{ errors.first('newSubMat') }}</p>
                    </div>
                </div>
                
                <!-- <a data-toggle="modal" href="#subMatModal" class="btn btn-primary subMatModalBtn"></a> -->
                    <!-- <button>Add</button> -->
                    <div class="col-lg-8  col-lg-8 col-sm-6  buttonMargin">   
                <p>
                     <button :disabled="errors.any()" type="submit">Add</button>
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
                        <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateAddNewMat(this.form)">Add</button>
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
    value: "",
    newMatField: "",
    newSubMat: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.test();
          this.$validator.reset();
          alert("Material Added");

          return;
        }
        alert("Empty Field(s)");
      });
    },
    test() {
      if (this.newMatField == "") {
        let data = {
          value: this.value,
          newSubMat: this.newSubMat
        };
        this.value = "";
        this.newSubMat = "";
        console.log(data);
      } else {
        let data = {
          value: this.value,
          newMatField: this.newMatField,
          newSubMat: this.newSubMat
        };
        this.value = "";
        this.newMatField = "";
        this.newSubMat = "";

        console.log(data);
      }
    }
  },
  computed: {
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
