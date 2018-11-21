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
                <h5>Enter New Process</h5>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newProcess" id="newProcess" v-validate="'required|max:10'"  v-model="newProcess" placeholder="Enter New Process" onclick="showMatConnections()">
                        <p class="text-danger" v-if="errors.has('newProcess')">{{ errors.first('newProcess') }}</p>
                        <button>Add</button>
                    </div>
                </div>
                <div class="form-group">
                    <select class="form-control" onchange="addProc()" id="procTypes">
                        <option disabled selected>Choose One Process</option>
                        <option id="addNewProc" value="addNewProc">New Process</option>
                    </select>
                </div>
                <h5>Sub-Process</h5>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newSubProc" id="newSubProc" v-validate="'required|max:10'"  v-model="subProcess" placeholder="Enter Sub-Process"  onclick="showProcConnections() ">
                        <p class="text-danger" v-if="errors.has('newSubProc')">{{ errors.first('newSubProc') }}</p>
                        <button>Add</button>
                    </div>
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
