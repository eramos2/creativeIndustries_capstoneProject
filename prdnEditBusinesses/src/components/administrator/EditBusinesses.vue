<template>

<div class="container" id="editBsnPage">

    <div class="row marginTop">
        <h2><span class="glyphicon glyphicon-edit"></span> Edit Business</h2>
    </div>
    <div id="error"></div>
    <form name="editBsnForm">
    <div class="row">
        <div><input type="text" style="display: none" name="companyId" id="companyId"></div>
        <div class="col-md-6"><input type="text" name="companyName" placeholder="Business Name" id="editBsnName" ></div>
        <div class="col-md-6"><input type="text" name="website"  placeholder="Website" id="editBsnWebsite"></div>
        <div class="col-md-6"><input type="text" name="address" placeholder="Address" id="editBsnAddress"></div>
        <div class="col-md-2"><input type="text" name="city" placeholder="City" id="editBsnCity"></div>
        <div class="col-md-2"><input type="text" name="country" placeholder="Country" id="editBsnCountry"></div>
        <div class="col-md-2"><input type="text" name="zipcode" maxlength="5" placeholder="Zip Code" id="editBsnZipCode"></div>
        <div class="col-md-4"><input type="text" name="phone" maxlength="10" placeholder="Telephone" id="editBsnTelephone"></div>
        <div class="col-md-4"><input type="email" name="email"  placeholder="Email" id="editBsnEmail"></div>
        <div class="col-md-4"><input type="text" name="videoURL"  placeholder="Video URL" id="editBsnVideoURL"></div>
        <div class="col-md-12"><textarea class="form-control textArea" name="description" placeholder="Description" rows="7" id="editBsnDescription"></textarea></div>
    </div>


    <!-- <div class="row">
         <div class="col-md-12">
             <h3>Business Photos</h3>
             <div id="dropzone-edit-photos" class="dropzone"></div>
         </div>
    </div>

    <div class="row">
         <div class="col-md-6">
             <h3>Business Logo</h3>
             <div id="dropzone-edit-logo" class="dropzone"></div>
         </div>
    </div>

    <div class="row">
            <div class="col-md-4">
                <h3>Materials</h3>
                <ul class="list-group categoryFont navList" id="editBusnMat">
                </ul>
            </div>

            <div class="col-md-4">
                <h3>Processes</h3>
                <ul class="list-group categoryFont navList" id="editBusnProc">
                </ul>
            </div>

            <div class="col-md-4">
                <h3>Services</h3>
                <ul class="list-group categoryFont navList" id="editBusnServ">
                </ul>
            </div>
    </div> -->


    <div class="row">
        <div class="col-md-4 col-sm-6 pull-right buttonMargin">
            <p>
                <button type="button" class="btn btn-primary btn-lg" onclick="validateEditBsn(this.form)">Edit</button>
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
