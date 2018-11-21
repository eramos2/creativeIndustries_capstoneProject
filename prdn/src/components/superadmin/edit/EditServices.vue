<template>
    <div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Edit Service Connections</h2>
    </div>

    <div id="error"></div>
    <!-- <form name="todo"> -->
    <div>
    <div class="row">
        <div class="col-md-4 categoryList">
            <h5>Services Conections</h5>
            <div>
                <select class="form-control" id="editServTypes" onchange="getServiceRelated(this.form)">
                    <!--<option disabled selected>Choose One Material</option>-->
                </select>
            </div>

        </div>

            <!-- <div class="row">
                <div class="col-md-4 pull-right buttonMargin" id="editServConnBtn">
                    <p> -->
                        <!-- <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateEditServConn(this.form)">Edit</button>
                        <button type="button" class="btn btn-default btn-lg" id="cancelBttn" onClick="loadPage('controlPanel')">Cancel</button> -->
                        <!-- <button >Edit</button>
                    </p>
                </div>
            </div> -->
        </div>
        </div>
    <!-- </form> -->
 </div>
</template>
<script>
</script>
<style>
</style>
