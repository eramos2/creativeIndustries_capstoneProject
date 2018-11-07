<template>

<div class="container">

    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-exclamation-sign"></span> Pending Requests</h2>
    </div>

    <div class="container">
        <table class="table table-striped table-hover table-bordered tableContainer" id="pendingRequestTable">
            <thead>
            <th>#</th>
            <th data-field="name" data-sortable="true">Name</th>
            <th data-field="description" data-sortable="true">Status</th>
            <th data-field="city" data-sortable="true">Date</th>
            </thead>
            <tbody id="requestsList">
            </tbody>
        </table>

        <div class="col-md-4  pull-right">
            <button type="button" class="btn btn-primary btn-lg" onClick="getPendingRequestRadio()">View</button>
            <button type="button" class="btn btn-default btn-lg" onClick="loadPage('controlPanel')">Cancel</button>
        </div>

    </div>
</div>
</template>
<script>
export default {
  //JS
};
</script>
<style>
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
