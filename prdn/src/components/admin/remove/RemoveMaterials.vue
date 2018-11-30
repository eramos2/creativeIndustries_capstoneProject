<template>
<form @submit.prevent="validateBeforeSubmit"> 
             <!-- Single Tab Content Start -->
<div class="container listContainer">
    <div class="row">
        <div class="col-md-12 cpl-md-offset-4" id="topRow">

            <h2><span class="glyphicon glyphicon-minus-sign addMarginTop"></span> Remove Materials </h2>

            <p class="lead">Select the materials you want to remove from the system.</p>

            <form>
                <div style="overflow-y: scroll; height:400px;">
                <ul class="list-group categoryFont" id="materialList">
                    <li class="input-group" name="process" value="1"><strong>Concrete</strong></li>
                    <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids" value="Digital Concrete,5,1">Digital Concrete</label></div></li>
                    <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"   value="Foam Aggregate,3,1">Foam Aggregate</label></div></li>
                    <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Geometrical Concrete,6,1">Geometrical Concrete</label></div></li>
                    <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Insulate Concrete,4,1">Insulate Concrete</label></div></li>
                    <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Lightweight Concrete,1,1">Lightweight Concrete</label></div></li>
                    <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Translucent Concrete,2,1">Translucent Concrete</label></div></li>
                    <li class="input-group" name="process" value="7"><strong>Fabrics</strong></li><li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" value="Carbon fiber,41,7">Carbon fiber</label></div></li>
                    <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Cotton,42,7">Cotton</label></div></li>
                    <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Fiberglass,40,7">Fiberglass</label></div></li>
                    <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Leather,43,7">Leather</label></div></li>
                    <li class="input-group" name="process" value="6"><strong>Glass and Ceramics</strong></li><li class="catMargins"><div class="checkbox">
                        <label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Blowing Glass,38,6">Blowing Glass</label></div></li>
                        <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Bulletproof,37,6">Bulletproof</label></div></li>
                        <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Ceramic,39,6">Ceramic</label></div></li>
                        <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Laminate Glass,35,6">Laminate Glass</label></div></li>
                        <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Temper Glass,36,6">Temper Glass</label></div></li>
                        <li class="input-group" name="process" value="3"><strong>Metal</strong></li><li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" value="Aluminium,15,3">Aluminium</label></div></li>
                        <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Copper,16,3">Copper</label></div></li>
                        <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Rare Metal (Medicinal),20,3">Rare Metal (Medicinal)</label></div></li>
                        <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Stainless Steel,19,3">Stainless Steel</label></div></li>
                        <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Steel,18,3">Steel</label></div></li><li class="catMargins"><div class="checkbox">
                            <label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Zinc,17,3">Zinc</label></div></li><li class="input-group" name="process" value="8">Papers Coating and Surfaces</li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Packaging,44,8">Packaging</label></div></li>
                            <li class="input-group" name="process" value="4"><strong>Plastic</strong></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Acrylic,24,4">Acrylic</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Bakelite,28,4">Bakelite</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Nylon,23,4">Nylon</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Polycarbonate,27,4">Polycarbonate</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Polyester,22,4">Polyester</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Polypropylene,26,4">Polypropylene</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Polythene,25,4">Polythene</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Prototype,29,4">Prototype</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="PVC,21,4">PVC</label></div></li>
                            <li class="input-group" name="process" value="5"><strong>Rubber</strong></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Latex,33,5">Latex</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Neoprene,30,5">Neoprene</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Nitrile,31,5">Nitrile</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Recycled Tire,34,5">Recycled Tire</label></div></li>
                            <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Silicone,32,5">Silicone</label></div></li>
                            <li class="input-group" name="process" value="2"><strong>Wood</strong></li><li class="catMargins"><div class="checkbox">
                                <label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Bamboo Panels,12,2">Bamboo Panels</label></div></li>
                                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Ceder,45,2">Ceder</label></div></li>
                                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Furniture Products,10,2">Furniture Products</label></div></li>
                                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Mahogany,7,2">Mahogany</label></div></li>
                                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Marine Performance,13,2">Marine Performance</label></div></li>
                                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Oak,9,2">Oak</label></div></li>
                                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Pine,8,2">Pine</label></div></li>
                                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Saw Mill,11,2">Saw Mill</label></div></li>
                                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="rmids"  value="Wood Craft,14,2">Wood Craft</label></div></li></ul>
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
                                    <h3>Are you sure you want to remove the selected materials?</h3>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" id="modalButton" onclick="getRemvMatChbox(this.form)">Remove</button>
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
</form>
</template>
                               
<script>
export default {
  data() {
    return { rmids: [] };
  }
};
</script>
<style>
.modalButton {
  background-color: #f44336;
} /* Red */
</style>
