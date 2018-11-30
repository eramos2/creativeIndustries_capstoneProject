<template>
    <div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span>Select Company</h2>
    </div>

    <div id="error"></div>
    <!-- <form name="todo"> -->
        <div>
    <div class="row">
        <div class="col-md-4 categoryList">
                <h4>Companies</h4>
                <div class="form-group">
                    <select class="form-control" v-model="selected"  id="selectCompany">
                        <option value="none" disabled selected>Choose One Tag</option>
                        <option id="addNewTag" value="addNewTag">New Company</option>
                        <option value="1">Company #1</option>
                        <option value="3">Company #2</option>
                        <option value="4">Company #3</option>
                        <option value="5">Company #4</option>
                        <option value="6">Company #5</option>
                        <option value="7">Company #6</option>   
                    </select>
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
    return {
      selected: ""
    };
  }
};
</script>
<style>
</style>
