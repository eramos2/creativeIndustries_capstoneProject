<template>
<div class="container contentContainer addMarginTop">

    <div class="row">

        <div class="col-md-12 cpl-md-offset-4" id="topRow">

            <h2><span class="glyphicon glyphicon-minus-sign addMarginTop"></span> Remove Services </h2>

            <p class="lead">Select the services you want to remove from the system.</p>

            <form>
                <div style="overflow-y: scroll; height:400px;">
                <ul class="list-group categoryFont" id="serviceList">
                    <li class="input-group" name="service" value="24">Cleaning</li>
                    <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="rsids" value="Warehouse Cleaning,40,24">Warehouse Cleaning</label></div></li>
                    <li class="input-group" name="service" value="23">Extraction</li>
                    <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="rsids" value="Concrete extraction,38,23">Concrete extraction</label></div></li>
                    <li class="input-group" name="service" value="1">Prototype</li>
                    <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="rsids" value="Industrial Welders,3,1">Industrial Welders</label></div></li>
                    <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="rsids" value="Mold Makers,1,1">Mold Makers</label></div></li>
                    <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="rsids" value="Precision Welding,2,1">Precision Welding</label></div></li>
                    <li class="input-group" name="service" value="37">Roof Sealing</li>
                    <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="rsids" value="Hydro Stop,56,37">Hydro Stop</label></div></li></ul>
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
                                    <h3>Are you sure you want to remove the selected services?</h3>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" onclick="getRemvServChbox(this.form)">Save changes</button>
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
    
</template>
<script>
export default {
  data() {
    return { rsids: [] };
  }
};
</script>
<style>
</style>
