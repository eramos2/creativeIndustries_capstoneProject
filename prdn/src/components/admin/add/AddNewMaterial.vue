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
                <h5>Enter New Material</h5>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newMaterial" id="newMaterial" v-validate="'required|max:10'" v-model="newMaterial" placeholder="Enter New Material" onclick="showMatConnections()">
                        <p class="text-danger" v-if="errors.has('newMaterial')">{{ errors.first('newMaterial') }}</p>
                        <button>Add</button>
                    </div>
                </div>
                <div class="form-group">
                    <select class="form-control" onchange="addMat()" id="matTypes">
                        <option disabled selected>Choose One Material</option>
                    </select>
                </div>
                <h5>Sub-Materials</h5>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newSubMat" id="newSubMat" v-validate="'required|max:10'" v-model="subMaterial" placeholder="Enter Sub-Material" onclick="showMatConnections()">
                        <p class="text-danger" v-if="errors.has('newSubMat')">{{ errors.first('newSubMat') }}</p>
                        <button>Add</button>
                    </div>
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
