<template>
<div class="container contentContainer addMarginTop">

    <div class="row">

        <div class="col-md-12 cpl-md-offset-4" id="topRow">

            <h2><span class="glyphicon glyphicon-minus-sign addMarginTop"></span> Remove Processes </h2>

            <p class="lead">Select the processes you want to remove from the system.</p>

            <form>
                <div style="overflow-y: scroll; height:400px;">
                <ul class="list-group categoryFont" id="processList">
                    <li class="input-group" name="process" value="2"><strong>Engraving</strong></li>
                    <li class="catMargins"><div class="checkbox">
                        <label><input type="checkbox" name="subProcess" v-model="rpids" value="CNC Engraving,7,2">CNC Engraving</label></div></li>
                        <li class="catMargins"><div class="checkbox">
                            <label><input type="checkbox" name="subProcess" v-model="rpids" value="Laser Engraving,6,2">Laser Engraving</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Prefabricated Panels,9,2">Prefabricated Panels</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Sand Blasted,8,2">Sand Blasted</label></div></li>
                            <li class="input-group" name="process" value="3"><strong>Extrusion</strong></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Extrusion Bowl Making,12,3">Extrusion Bowl Making</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Metal Extrusion,11,3">Metal Extrusion</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Plastic Extrusion,10,3">Plastic Extrusion</label></div></li>
                            <li class="input-group" name="process" value="7"><strong>Fabric Machinery</strong></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Industrial Sewing,28,7">Industrial Sewing</label></div></li>
                            <li class="input-group" name="process" value="4"><strong>Geometrical Precision Cutting</strong></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="CNC 3 Axis Milling,22,4">CNC 3 Axis Milling</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="CNC 5 Axis Milling,23,4">CNC 5 Axis Milling</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="CNC Drilling,17,4">CNC Drilling</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="CNC Foam,20,4">CNC Foam</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="CNC Metal,18,4">CNC Metal</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="CNC Wood,19,4">CNC Wood</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Laser Cutting,15,4">Laser Cutting</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Plasma Cutter,13,4">Plasma Cutter</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Precision Machinery,16,4">Precision Machinery</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Punching,21,4">Punching</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Water Jet,14,4">Water Jet</label></div></li>
                            <li class="input-group" name="process" value="6"><strong>Hand Made</strong></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess"  v-model="rpids" value="Ceramic Sampler,26,6">Ceramic Sampler</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Fabric Patterns,27,6">Fabric Patterns</label></div></li>
                            <li class="input-group" name="process" value="9"><strong>Metal Workshop</strong></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Forming and Shaping,31,9">Forming and Shaping</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Metal Casting,30,9">Metal Casting</label></div></li>
                            <li class="input-group" name="process" value="1"><strong>Molding</strong>/li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess"  v-model="rpids" value="Car Mold Making,2,1">Car Mold Making</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Hand Molding,32,1">Hand Molding</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Injection Molding,3,1">Injection Molding</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Pressure Molding,1,1">Pressure Molding</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Thermo Forming,5,1">Thermo Forming</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess"  v-model="rpids" value="Vacuum Former,4,1">Vacuum Former</label></div></li>
                            <li class="input-group" name="process" value="8"><strong>Rapid Prototype</strong></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="3D Printing,29,8">3D Printing</label></div></li>
                            <li class="input-group" name="process" value="5"><strong>Welding</strong></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Arc Welding,24,5">Arc Welding</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="rpids" value="Tig Welding,25,5">Tig Welding</label></div></li></ul>
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
                                    <h3>Are you sure you want to remove the selected processes?</h3>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" onclick="getRemvProcChbox(this.form)">Save changes</button>
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
    return { rpids: [] };
  }
};
</script>
<style>
</style>
