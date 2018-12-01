<template>
<div class="container">

    <div class="row">

        <div class="col-md-12 cpl-md-offset-4" id="topRow">

            <h2><span class="glyphicon glyphicon-minus-sign addMarginTop"></span> Remove Business </h2>

            <p class="lead">Select the business you want to remove from the system.</p>

            <div class="row">
                <div style="overflow-y: scroll; height:400px;">
                <table class="table table-striped table-hover tableContainer" id="removBsnTable">
                    <thead>
                    <tr><th></th>
                    <th data-field="name" data-sortable="true">Business</th>
                    <th data-field="description" data-sortable="true">Description</th>
                    <th data-field="city" data-sortable="true">City</th>
                    </tr></thead>
                    <tbody id="businessList">
                        <tr 
                            v-for="(business, key) in businesses"
                            :key="key"
                        >
                            <td :id="business.companyId">
                                <input type="radio"  v-model="bid" :value="business.companyId">
                            </td>
                            <td>{{business.companyName}}</td>
                            <td>{{business.description}}</td>
                            <td>{{business.city}}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
                <div class="col-md-4 col-sm-6 pull-right">
                    <p>
                        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#basicModal">Remove</button>
                        <button type="button" class="btn btn-default btn-lg" onclick="loadPage('controlPanel')">Cancel</button>

                    </p><div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×
                                    </span><span class="sr-only">Close</span></button>
                                    <h4 class="modal-title" id="myModalLabel">Removal Confirmation</h4>
                                </div>
                                <div class="modal-body">
                                    <h3>Are you sure you want to remove the selected business?</h3>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" onclick="getBusinessRemove()">Save changes</button>
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return { bid: "" };
  },
  methods: {
    reloadBusinesses() {
      this.$store.dispatch("setBusinesses");
    }
  },
  computed: {
    businesses() {
      return this.$store.state.businesses.businesses;
    }
  }
};
</script>
<style>
</style>

