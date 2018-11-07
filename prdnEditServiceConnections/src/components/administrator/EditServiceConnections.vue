<template>

<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Edit Sub-Service Connections</h2>
    </div>

    <div id="error"></div>
    <form name="todo">
    <div class="row">
        <div class="col-md-4 categoryList">
            <h4>Services</h4>
            <div>
                <select class="form-control" id="editServTypes" onchange="getServiceRelated(this.form)">
                    <!--<option disabled selected>Choose One Material</option>-->
                </select>
            </div>

        </div>


            <div class="col-md-4  categoryList">
                <h5>Materials Connections</h5>
                <ul class="list-group navList" id="editServMatCons"> </ul>
            </div>

            <div class="col-md-4 categoryList">
                <h5>Processes Connections</h5>
                <ul class="list-group navList" id="editServProcCons">
                </ul>
            </div>

            <div class="row">
                <div class="col-md-4 pull-right buttonMargin" id="editServConnBtn">
                    <p>
                        <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateEditServConn(this.form)">Add</button>
                        <button type="button" class="btn btn-default btn-lg" id="cancelBttn" onClick="loadPage('controlPanel')">Cancel</button>
                    </p>
                </div>
            </div>
        </div>
    </form>
 </div>

</template>
<script>
export default {
  //JS
};
</script>
<style>
//CSS

.myaccount-content {
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #ededed;
  padding: 30px;
}

.myaccount-content form {
  margin-top: -20px;
}

@media only screen and (max-width: 575px) {
  .myaccount-content {
    padding: 20px 15px;
  }
}

.myaccount-content h3 {
  font-size: 22px;
  line-height: 1.5;
  border-bottom: 1px dashed #777;
  padding-bottom: 10px;
  margin-bottom: 25px;
  margin-top: 0;
}

.myaccount-content .welcome p {
  color: #000;
}

.myaccount-content .welcome a {
  color: #000;
}

.myaccount-content .welcome a:hover {
  color: #12a4dd;
}

.myaccount-content .welcome strong {
  font-weight: 600;
  color: #39b0ff;
}

.container .navbar-header .navbar-toggle {
  margin-right: 0px;
}
.container form h2 {
  height: 150px;
}
.container .marginTop {
  height: 150px;
}
</style>s
