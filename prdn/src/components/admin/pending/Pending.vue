<template>
<div class="" id="pending-requests" role="tabpanel">
    <div class="myaccount-content">
<div class="container">

    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-exclamation-sign"></span> Pending Requests</h2>
    </div>

    <div class="container">
        <table class="table table-striped table-hover table-bordered tableContainer" id="pendingRequestTable">
            <thead>
            <tr><th>#</th>
            <th data-field="name" data-sortable="true">Name</th>
            <th data-field="description" data-sortable="true">Status</th>
            <th data-field="city" data-sortable="true">Date</th>
            </tr></thead>
            <tbody id="requestsList"><tr><td id="130" ><input type="radio" name="row-1" v-model="prid" value="INDITECH" ></td><td id="130">INDITECH</td><td> New</td><td>2014-11-23 15:33:26</td></tr>
            <tr><td id="98"><input type="radio" name="row-1" v-model="prid" value="Empresas NIDCO" ></td><td id="98">Empresas NIDCO</td><td> Pending</td><td>2014-11-23 13:35:02</td></tr>
            <tr><td id="131"><input type="radio" name="row-1" v-model="prid" value="Caribe Industrial Systems" ></td><td id="131">Caribe Industrial Systems Inc.</td><td> Pending</td><td>2014-11-26 01:09:38</td></tr></tbody>
        </table>

        <div class="col-md-4  pull-right">
            <button type="button" class="btn btn-primary btn-lg" onclick="loadPage('controlPanel')" >View</button>
            <button type="button" class="btn btn-default btn-lg" onclick="loadPage('controlPanel')">Cancel</button>
        </div>

    </div>
</div>
    </div>
    </div>
</template>
<script>
import NewRequest from "./NewRequest.vue";
export default {
  components: {
    newrequest: NewRequest
  },
  data() {
    return { prid: [] };
  }
};
</script>
<style>
</style>
