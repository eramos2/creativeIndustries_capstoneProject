<template>
    <div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Edit Service Connections</h2>
    </div>

    <div id="error"></div>
    <!-- <form name="todo"> -->
    <div>
    <div class="row">
        <div class="col-md-6 categoryList">
            <h5>Services Conections</h5>
            <div>
                <select class="form-control" id="editServTypes" onchange="getServiceRelated(this.form)">
                <option value="none" disabled="" selected="">Choose One Service</option>
                <optgroup label="Cleaning"><option value="40">Warehouse Cleaning</option></optgroup>
                <optgroup label="Extraction"><option value="38">Concrete extraction</option></optgroup>
                <optgroup label="Prototype"><option value="3">Industrial Welders</option>
                <option value="1">Mold Makers</option><option value="2">Precision Welding</option></optgroup>
                <optgroup label="Roof Sealing"><option value="56">Hydro Stop</option></optgroup></select>
            </div>
        </div>
        </div>
        <div class="row">
            <div class="col-md-6  categoryList">
                <div style="overflow-y: scroll; height:400px;">
                <h5>Materials Connections</h5>
                <ul class="list-group navList" id="editServMatCons">
                <li class="input-group" name="process" value="1"><strong>Concrete</strong></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids" value="5">Digital Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="3">Foam Aggregate</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="6">Geometrical Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="4">Insulate Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="1">Lightweight Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="2">Translucent Concrete</label></div></li>
                <li class="input-group" name="process" value="7"><strong>Fabrics</strong></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="41">Carbon fiber</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="42">Cotton</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="40">Fiberglass</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="43">Leather</label></div></li>
                <li class="input-group" name="process" value="6"><strong>Glass and Ceramics</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="38">Blowing Glass</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="37">Bulletproof</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="39">Ceramic</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="35">Laminate Glass</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="36">Temper Glass</label></div></li>
                <li class="input-group" name="process" value="3"><strong>Metal</strong></li><li class="catMargins">
                <div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="15">Aluminium</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial"  v-model="smids" value="16">Copper</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="20">Rare Metal (Medicinal)</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="19">Stainless Steel</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="18">Steel</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="17">Zinc</label></div></li>
                <li class="input-group" name="process" value="8"><strong>Papers Coating and Surfaces</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" value="44">Packaging</label></div></li><li class="input-group" name="process" value="4">Plastic</li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids" value="24">Acrylic</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="28">Bakelite</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="23">Nylon</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="27">Polycarbonate</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="22">Polyester</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="26">Polypropylene</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="25">Polythene</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="29">Prototype</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="21">PVC</label></div></li>
                <li class="input-group" name="process" value="5"><strong>Rubber</strong></li><li class="catMargins">
                <div class="checkbox"><label><input type="checkbox" name="subMaterial" value="33">Latex</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="30">Neoprene</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="31">Nitrile</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="34">Recycled Tire</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="32">Silicone</label></div></li>
                <li class="input-group" name="process" value="2"><strong>Wood</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="12">Bamboo Panels</label></div></li>
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
                <h5>Processes Connections</h5>
                <ul class="list-group navList" id="editServProcCons"><li class="input-group" name="process" value="2"><strong>Engraving</strong></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="7">CNC Engraving</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="6">Laser Engraving</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="9">Prefabricated Panels</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="8">Sand Blasted</label></div></li>
                <li class="input-group" name="process" value="3"><strong>Extrusion</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="12">Extrusion Bowl Making</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="11">Metal Extrusion</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="10">Plastic Extrusion</label></div></li>
                <li class="input-group" name="process" value="7"><strong>Fabric Machinery</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="28">Industrial Sewing</label></div></li>
                <li class="input-group" name="process" value="4"><strong>Geometrical Precision Cutting</strong></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="22">CNC 3 Axis Milling</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="23">CNC 5 Axis Milling</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="17">CNC Drilling</label></div></li
                ><li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="20">CNC Foam</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="18">CNC Metal</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="19">CNC Wood</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="15">Laser Cutting</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="13">Plasma Cutter</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="16">Precision Machinery</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="21">Punching</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="14">Water Jet</label></div></li>
                <li class="input-group" name="process" value="6"><strong>Hand Made</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" v-model="spids" value="26">Ceramic Sampler</label></div></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" v-model="spids" value="27">Fabric Patterns</label></div></li>
                <li class="input-group" name="process" value="9"><strong>Metal Workshop</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" v-model="spids" value="31">Forming and Shaping</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="30">Metal Casting</label></div></li>
                <li class="input-group" name="process" value="1"><strong>Molding</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" v-model="spids" value="2">Car Mold Making</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="32">Hand Molding</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="3">Injection Molding</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="1">Pressure Molding</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="5">Thermo Forming</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="4">Vacuum Former</label></div></li>
                <li class="input-group" name="process" value="8"><strong>Rapid Prototype</strong>/li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="29">3D Printing</label></div></li>
                <li class="input-group" name="process" value="5"><strong>Welding</strong></li><li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="24">Arc Welding</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" v-model="spids" value="25">Tig Welding</label></div></li></ul>
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
    return { spids: [], smids: [] };
  }
};
</script>
<style>
</style>
