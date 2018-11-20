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
            <h5>Materials Connections</h5>
            <div>
                <select  class="form-control" id="editMatTypes" onchange="getMaterialRelated()">
                    <!--<option >Choose One Material</option>-->
                </select>
            </div>

        </div>

            <!-- <div class="row"> -->
                <!-- <div class="col-md-4 pull-right buttonMargin" id="editMatConnBtn">
                    <p> -->
                        <!-- <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateEditMatConn(this.form)">Edit</button>
                        <button type="button" class="btn btn-default btn-lg" id="cancelBttn" onClick="loadPage('controlPanel')">Cancel</button> -->
                        <!-- <button>Edit</button>
                        
                    </p>
                </div> -->
            <!-- </div> -->
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
