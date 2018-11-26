<template>
<form @submit.prevent="validateBeforeSubmit">  
<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Edit Material Connections</h2>
    </div>
    <div id="error"></div>
    <!-- <form name="editMaterialForm"> -->
        <div>
    <div class="row">
        <div class="col-md-4 categoryList">
            <h5>Materials</h5>
            <select class="form-control" id="editMatTypes" onchange="getMaterialRelated()">
                <option value="none" disabled="" selected="">Choose One Material</option>
                <optgroup label="Concrete">
                <option value="5">Digital Concrete</option>
                <option value="3">Foam Aggregate</option>
                <option value="6">Geometrical Concrete</option>
                <option value="4">Insulate Concrete</option>
                <option value="1">Lightweight Concrete</option>
                <option value="2">Translucent Concrete</option>
                </optgroup>
                <optgroup label="Fabrics">
                <option value="41">Carbon fiber</option>
                <option value="42">Cotton</option>
                <option value="40">Fiberglass</option>
                <option value="43">Leather</option>
                </optgroup>
                <optgroup label="Glass and Ceramics">
                <option value="38">Blowing Glass</option>
                <option value="37">Bulletproof</option>
                <option value="39">Ceramic</option>
                <option value="35">Laminate Glass</option>
                <option value="36">Temper Glass</option>
                </optgroup>
                <optgroup label="Metal">
                <option value="15">Aluminium</option>
                <option value="16">Copper</option>
                <option value="20">Rare Metal (Medicinal)</option>
                <option value="19">Stainless Steel</option>
                <option value="18">Steel</option>
                <option value="17">Zinc</option>
                </optgroup>
                <optgroup label="Papers Coating and Surfaces">
                <option value="44">Packaging</option>
                </optgroup>
                <optgroup label="Plastic">
                <option value="24">Acrylic</option>
                <option value="28">Bakelite</option>
                <option value="23">Nylon</option>
                <option value="27">Polycarbonate</option>
                <option value="22">Polyester</option>
                <option value="26">Polypropylene</option>
                <option value="25">Polythene</option>
                <option value="29">Prototype</option>
                <option value="21">PVC</option>
                </optgroup>
                <optgroup label="Rubber">
                <option value="33">Latex</option>
                <option value="30">Neoprene</option>
                <option value="31">Nitrile</option>
                <option value="34">Recycled Tire</option>
                <option value="32">Silicone</option>
                </optgroup>
                <optgroup label="Wood">
                <option value="12">Bamboo Panels</option>
                <option value="45">Ceder</option>
                <option value="10">Furniture Products</option>
                <option value="7">Mahogany</option>
                <option value="13">Marine Performance</option>
                <option value="9">Oak</option>
                <option value="8">Pine</option>
                <option value="11">Saw Mill</option>
                <option value="14">Wood Craft</option>
                </optgroup>
                </select>
                </div>

        </div>
        <div class="row mt-3"></div>
        <div class="row">
        <div style="overflow-y: scroll; height:400px;">
        <div class="col-md-6 categoryList">
                <h5>Processes Connections</h5>
                <ul class="list-group navList" id="editMatProcCons">
                <li class="input-group" name="process" value="2"><strong>Engraving</strong></li>
                <li class="catMargins">
                <div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="7">CNC Engraving</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="6">Laser Engraving</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="9">Prefabricated Panels</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="8">Sand Blasted</label></div></li>
                <li class="input-group" name="process" value="3"><strong>Extrusion</strong></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="12">Extrusion Bowl Making</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="11">Metal Extrusion</label></div></li>
                <li class="catMargins"><div class="checkbox"><label>
                <input type="checkbox" name="subProcess" value="10">Plastic Extrusion</label></div></li>
                <li class="input-group" name="process" value="7"><strong>Fabric Machinery</strong></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="28">Industrial Sewing</label></div></li>
                <li class="input-group" name="process" value="4"><strong>Geometrical Precision Cutting</strong></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="22">CNC 3 Axis Milling</label></div></li>
                <li class="catMargins"><div class="checkbox"><label>
                <input type="checkbox" name="subProcess" value="23">CNC 5 Axis Milling</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="17">CNC Drilling</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="20">CNC Foam</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="18">CNC Metal</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="19">CNC Wood</label></div></li>
                <li class="catMargins">
                <div class="checkbox"><label><input type="checkbox" name="subProcess" value="15">Laser Cutting</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="13">Plasma Cutter</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="16">Precision Machinery</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="21">Punching</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="14">Water Jet</label></div></li>
                <li class="input-group" name="process" value="6"><strong>Hand Made</strong></li>
                <li class="catMargins"><div class="checkbox"><label>
                <input type="checkbox" name="subProcess" value="26">Ceramic Sampler</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="27">Fabric Patterns</label></div></li>
                <li class="input-group"  name="process" value="9"><strong>Metal Workshop</strong></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="31">Forming and Shaping</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="30">Metal Casting</label></div></li>
                <li class="input-group" name="process" value="1"><strong>Molding</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="2">Car Mold Making</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="32">Hand Molding</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="3">Injection Molding</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="1">Pressure Molding</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="5">Thermo Forming</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="4">Vacuum Former</label></div></li>
                <li class="input-group" name="process" value="8"><strong>Rapid Prototype</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="29">3D Printing</label></div></li>
                <li class="input-group" name="process" value="5"><strong>Welding</strong></li><li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subProcess" value="24">Arc Welding</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subProcess" value="25">Tig Welding</label></div></li></ul>
            </div>
            </div>
        
        <div style="overflow-y: scroll; height:400px;">
        <div class="col-md-6 categoryList">
                <h5>Services Connections</h5>
                <ul class="list-group navList" id="editMatServCons">
                <li class="input-group" name="service" value="24"><strong>Cleaning</strong></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" value="40">Warehouse Cleaning</label></div></li>
                <li class="input-group" name="service" value="23">Extraction</li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" value="38">Concrete extraction</label></div></li>
                <li class="input-group" name="service" value="1"><strong>Prototype</strong></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" value="3">Industrial Welders</label></div></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" value="1">Mold Makers</label></div></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" value="2">Precision Welding</label></div></li>
                <li class="input-group" name="service" value="37"><strong>Roof Sealing</strong></li>
                <li><div class="checkbox"><label><input type="checkbox" name="subService" value="56">Hydro Stop</label></div></li></ul>
            </div>
             </div>
             </div>


        

        </div>
    <!-- </form> -->
</div>
</form>
    
</template>
<script>
</script>
<style>
</style>
