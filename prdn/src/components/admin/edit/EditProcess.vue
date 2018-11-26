<template>
<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Edit Process Connections</h2>
    </div>

    <div id="error"></div>
    <!-- <form action=""> -->
        <div>
        <div class="row">
            <div class="col-md-6 categoryList">
                <h5>Processes</h5>
                <div>
                    <select class="form-control" id="editProcTypes" onchange="getProcessRelated(this.form)">
                    <option value="none" disabled="" selected="">Choose One Process</option>
                    <optgroup label="Engraving"><option value="7">CNC Engraving</option>
                    <option value="6">Laser Engraving</option>
                    <option value="9">Prefabricated Panels</option>
                    <option value="8">Sand Blasted</option></optgroup>
                    <optgroup label="Extrusion">
                    <option value="12">Extrusion Bowl Making</option>
                    <option value="11">Metal Extrusion</option>
                    <option value="10">Plastic Extrusion</option></optgroup>
                    <optgroup label="Fabric Machinery">
                    <option value="28">Industrial Sewing</option></optgroup>
                    <optgroup label="Geometrical Precision Cutting">
                    <option value="22">CNC 3 Axis Milling</option>
                    <option value="23">CNC 5 Axis Milling</option>
                    <option value="17">CNC Drilling</option>
                    <option value="20">CNC Foam</option>
                    <option value="18">CNC Metal</option>
                    <option value="19">CNC Wood</option>
                    <option value="15">Laser Cutting</option>
                    <option value="13">Plasma Cutter</option>
                    <option value="16">Precision Machinery</option>
                    <option value="21">Punching</option>
                    <option value="14">Water Jet</option></optgroup>
                    <optgroup label="Hand Made">
                    <option value="26">Ceramic Sampler</option>
                    <option value="27">Fabric Patterns</option></optgroup>
                    <optgroup label="Metal Workshop">
                    <option value="31">Forming and Shaping</option>
                    <option value="30">Metal Casting</option></optgroup>
                    <optgroup label="Molding"><option value="2">Car Mold Making</option>
                    <option value="32">Hand Molding</option>
                    <option value="3">Injection Molding</option>
                    <option value="1">Pressure Molding</option>
                    <option value="5">Thermo Forming</option>
                    <option value="4">Vacuum Former</option></optgroup>
                    <optgroup label="Rapid Prototype">
                    <option value="29">3D Printing</option></optgroup>
                    <optgroup label="Welding"><option value="24">Arc Welding</option
                    ><option value="25">Tig Welding</option></optgroup></select>
                </div>
            </div>
            </div>
             <div class="row">
            <div class="col-md-6 categoryList">
                <div style="overflow-y: scroll; height:400px;">
                <h5>Materials Connections</h5>
                <ul class="list-group navList" id="editProcMatCons">
                <li class="input-group" name="process" value="1"><strong>Concrete</strong></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="5">Digital Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids" value="3">Foam Aggregate</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="6">Geometrical Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="4">Insulate Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="1">Lightweight Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="2">Translucent Concrete</label></div></li>
                <li class="input-group" name="process" value="7"><strong>Fabrics</strong></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="41">Carbon fiber</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="42">Cotton</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="40">Fiberglass</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="43">Leather</label></div></li>
                <li class="input-group" name="process" value="6"><strong>Glass and Ceramics</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" value="38">Blowing Glass</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="37">Bulletproof</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="39">Ceramic</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="35">Laminate Glass</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="36">Temper Glass</label></div></li>
                <li class="input-group" name="process" value="3"><strong>Metal</strong></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="15">Aluminium</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="16">Copper</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="20">Rare Metal (Medicinal)</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="19">Stainless Steel</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="18">Steel</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="17">Zinc</label></div></li>
                <li class="input-group" name="process" value="8"><strong>Papers Coating and Surfaces</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="44">Packaging</label></div></li>
                <li class="input-group" name="process" value="4"><strong>Plastic</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="24">Acrylic</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="28">Bakelite</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="23">Nylon</label></div></li
                ><li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="27">Polycarbonate</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="22">Polyester</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="26">Polypropylene</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="25">Polythene</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="29">Prototype</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="21">PVC</label></div></li>
                <li class="input-group" name="process" value="5"><strong>Rubber</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="33">Latex</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="30">Neoprene</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="31">Nitrile</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="34">Recycled Tire</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="32">Silicone</label></div></li>
                <li class="input-group" name="process" value="2"><strong>Wood</strong></li><li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" value="12">Bamboo Panels</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="45">Ceder</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="10">Furniture Products</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="7">Mahogany</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="13">Marine Performance</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="9">Oak</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="8">Pine</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="11">Saw Mill</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="14">Wood Craft</label></div></li></ul>
            </div>
                </div>
                
                <div class="col-md-6 categoryList">
                    <div style="overflow-y: scroll; height:400px;">
                <h5>Services Connections</h5>
                <ul class="list-group navList" id="editProcServCons">
                <li class="input-group" name="service" value="24"><strong>Cleaning</strong></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="ssids"  value="40">Warehouse Cleaning</label></div></li>
                <li class="input-group" name="service" value="23"><strong>Extraction</strong></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="ssids"  value="38">Concrete extraction</label></div></li>
                <li class="input-group" name="service" value="1"><strong>Prototype</strong>/li><li><div class="checkbox">
                <label><input type="checkbox" name="subService" v-model="ssids"  value="3">Industrial Welders</label></div></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="ssids"  value="1">Mold Makers</label></div></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="ssids"  value="2">Precision Welding</label></div></li>
                <li class="input-group" name="service" value="37"><strong>Roof Sealing</strong></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" v-model="ssids"  value="56">Hydro Stop</label></div></li></ul>
            </div>
            </div>
                </div>
      
        </div>
    <!-- </form> -->
</div>
    
</template>
<script>
export default {
  data() {
    return { ssids: [], smids: [] };
  }
};
</script>
<style>
</style>
