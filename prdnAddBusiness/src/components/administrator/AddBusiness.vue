<template>

<div class="container" id="addBsnPage">
        <div class="row marginTop">
            <h2><span class="glyphicon glyphicon-plus-sign marginTop"></span> Add Business</h2>
        </div>
    <div id="error"></div>
    <form name="addBsnForm">
        <div class="row">
            <div class="col-md-6"><input type="text" name="companyName" id="addBsnCompanyName" placeholder="Business Name" required></div>
            <div class="col-md-6"><input type="text" name="website"  id="addBsnWebsite" placeholder="Website" required></div>
            <div class="col-md-6"><input type="text" name="address" id="addBsnAddress" placeholder="Address" required></div>
            <div class="col-md-2"><input type="text" name="city" id="addBsnCity" placeholder="City" required></div>
            <div class="col-md-2"><input type="text" name="country" id="addBsnCountry" placeholder="Country" required></div>
            <div class="col-md-2"><input type="text" name="zipcode" id="addBsnZipCode" maxlength="5" placeholder="Zip Code" required></div>
            <div class="col-md-4"><input type="phone" name="phone" id="addBsnPhone" maxlength="10" placeholder="Telephone" required></div>
            <div class="col-md-4"><input type="email" name="email"  id="addBsnEmail" placeholder="Email" required></div>
            <div class="col-md-4"><input type="text" name="videoURL"  id="addBsnVideoURL" placeholder="Video URL" required></div>
            <div class="col-md-12"><textarea class="form-control textArea" name="description" id="addBsnDescription" placeholder="Description" rows="7"></textarea></div>
        </div>

        <!-- <div class="row">
            <div class="col-md-12">
                <h3>Business Photos</h3>
                <div id="dropzone-photos" class="dropzone"></div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <h3>Business Logo</h3>
                <div id="dropzone-logo" class="dropzone"></div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <h3>Materials</h3>
                <ul class="list-group categoryFont navList" id="addBusinessMaterials">
                </ul>
            </div>

            <div class="col-md-4">
                <h3>Processes</h3>
                <ul class="list-group categoryFont navList" id="addBusinessProcesses">
                </ul>
            </div>

            <div class="col-md-4">
                <h3>Services</h3>
                <ul class="list-group categoryFont navList" id="addBusinessServices">
                </ul>
            </div>
        </div> -->
        <div class="row">
            <div class="col-lg-4 col-sm-6 pull-right buttonMargin">
                <p>
                    <button type="button" class="btn btn-primary btn-lg" onClick="validateAddBsn(this.form)">Add</button>
                    <button type="button" class="btn btn-default btn-lg" onClick="loadPage('controlPanel')">Cancel</button>
                </p>
            </div>
        </div>
    </form>
</div>

</template>
<script>
export default {
  //JS
};
</script>
<style>
//CSS

.myaccount-content {
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #ededed;
  padding: 30px;
}

.myaccount-content form {
  margin-top: -20px;
}

@media only screen and (max-width: 575px) {
  .myaccount-content {
    padding: 20px 15px;
  }
}

.myaccount-content h3 {
  font-size: 22px;
  line-height: 1.5;
  border-bottom: 1px dashed #777;
  padding-bottom: 10px;
  margin-bottom: 25px;
  margin-top: 0;
}

.myaccount-content .welcome p {
  color: #000;
}

.myaccount-content .welcome a {
  color: #000;
}

.myaccount-content .welcome a:hover {
  color: #12a4dd;
}

.myaccount-content .welcome strong {
  font-weight: 600;
  color: #39b0ff;
}

.container .navbar-header .navbar-toggle {
  margin-right: 0px;
}
.container form h2 {
  height: 150px;
}
.container .marginTop {
  height: 150px;
}
</style>s
