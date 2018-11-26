<template>
<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Edit Process Connections</h2>
    </div>

    <div id="error"></div>
    <!-- <form action=""> -->
        <div>
        <div class="row">
            <div class="col-md-4 categoryList">
                <h5>Processes Connections</h5>
                <div>
                    <select class="form-control" id="editProcTypes" onchange="getProcessRelated(this.form)">
                        <!--<option disabled selected>Choose One Material</option>-->
                    </select>
                </div>

            </div>


        </div>
        </div>
    <!-- </form> -->
</div>
    
</template>
<script>
</script>
<style>
</style>
