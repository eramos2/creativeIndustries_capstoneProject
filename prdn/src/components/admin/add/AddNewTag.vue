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
                <h5>Enter New Tag</h5>
                 <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newTag" id="newTag" v-validate="'required|max:10'" v-model="newTag"  placeholder="Enter New Tag" onclick="showServConnections() ">
                        <p class="text-danger" v-if="errors.has('newTag')">{{ errors.first('newTag') }}</p>
                        <!-- <a data-toggle="modal" href="#subServModal" class="btn btn-primary subServModalBtn" ><span class="glyphicon glyphicon-question-sign"></span></a> -->
                        <button>Add</button>
                    </div>
                </div>
                <div class="form-group">
                    <select class="form-control" onchange="addServ()" id="servTypes">
                        <option disabled selected>Choose One Tag</option>
                        <option id="addNewServ" value="addNewServ">New Tag</option>
                    </select>
                </div>
                <h5>Tags - Connections</h5>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="tagConn" id="tagConn" v-validate="'required|max:10'" v-model="tagConnections"  placeholder="Tag-Connections" onclick="showServConnections() ">
                       <p class="text-danger" v-if="errors.has('tagConn')">{{ errors.first('tagConn') }}</p>
                        <button>Add</button>
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
          alert("Tag Added");
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
