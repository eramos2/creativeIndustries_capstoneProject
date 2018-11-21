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
                <h5>Enter New Service</h5>
                  <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newService" id="newService" v-validate="'required|max:10'" v-model="newService" placeholder="Enter New Service" onclick="showServConnections() ">
                         <p class="text-danger" v-if="errors.has('newService')">{{ errors.first('newService') }}</p>
                        <button >Add</button>
                    </div>
                </div>
                <div class="form-group">
                    <select class="form-control" onchange="addServ()" id="servTypes">
                        <option disabled selected>Choose One Service</option>
                        <option id="addNewServ" value="addNewServ">New Service</option>
                    </select>
                </div>

                <h5>Sub-Service</h5>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newSubServ" id="newSubServ" v-validate="'required|max:10'" v-model="newSubService" placeholder="Enter Sub-Service" onclick="showServConnections() ">
                         <p class="text-danger" v-if="errors.has('newSubServ')">{{ errors.first('newSubServ') }}</p>
                        <button >Add</button>
                    </div>
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
export default {
  data: () => ({
    firstName: "",
    password: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("Service Added");
          return;
        }
        alert("Empty Field(s)");
      });
    }
  }
};
</script>
<style>
</style>
