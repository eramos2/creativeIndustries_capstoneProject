<template>
    <div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Edit Tags</h2>
    </div>

    <div id="error"></div>
    <!-- <form name="todo"> -->
        <div>
    <div class="row">
        <div class="col-md-4 categoryList">
                <h5>Tag </h5>
                <div class="form-group">
                    <select class="form-control" v-model="value"  id="editServTypes" onchange="getServiceRelated(this.form)">
                        <option value="none" disabled selected>Choose One Tag</option>
                        <option id="addNewTag" value="addNewTag">New Tag</option>
                        <option value="1">Tubing</option>
                        <option value="3">Ornaments</option>
                        <option value="4">Decorative</option>
                        <option value="5">Opaque</option>
                        <option value="6">Breathable</option>
                        <option value="7">Long Lasting</option>   
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
