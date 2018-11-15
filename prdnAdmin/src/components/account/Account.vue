<template>
<form @submit.prevent="validateBeforeSubmit"> 
<!-- My Account page content Start -->
            <div id="myaccount-page-content">
                <div class="container">
                    <div class="account-text-wrapper">
                        <div class="row">
                        <div class="col-md-3">
                            <div class="myaccount-tab-menu nav" role="tablist">
                                <a href="#dashboad" class="active" data-toggle="tab"><i class="fa fa-unlock-alt"></i>
                                    Admininistrator</a>

                                <a href="#add" data-toggle="tab"><i class="fa fa-star"></i> Add</a>

                                <a href="#edit" data-toggle="tab"><i class="fa fa-star"></i> Edit</a>

                                <a href="#remove" data-toggle="tab"><i class="fa fa-star"></i> Remove</a>

                                <a href="#pending-requests" data-toggle="tab"><i class="fa fa-star"></i> Pending Requests</a>

                            </div>
                        </div>
                        <!-- My Account Tab Menu End -->

                        <!-- My Account Tab Content Start -->
                        <div class="col-md-9 mt-15 mt-lg-0">
                            <div class="tab-content" id="myaccountContent">
                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>Administrator Control Panel</h3>

                                        <div class="welcome">
                                            <p>Welcome <strong>Administrator</strong></p>
                                        </div>

                                   
                                    </div>
                                </div>
                                <!-- Single Tab Content End -->

                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="add" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>Add</h3>

                                       <div class="container" id="addBsnPage">
        <div class="row marginTop">
            <h2><span class="glyphicon glyphicon-plus-sign marginTop"></span> Add New Business</h2>
            
        </div>
    <div id="error"></div>
    <!-- <form name="addBsnForm"> -->
        <div>
        <div class="row">
            <div class="col-md-6">
                <!-- <input type="text" name="companyName" id="addBsnCompanyName" placeholder="Business Name" v-model="bussiness"> -->
                <input name="companyName" v-validate="'required|max:20'" type="text"  id = "companyName"  placeholder="Company Name" class="form-control" >
                <p class="text-danger" v-if="errors.has('companyName')">{{ errors.first('companyName') }}</p>
                </div>
            <div class="col-md-6">
                <input name="website" v-validate="'required|url'" type="url"  id = "website"  placeholder="Website" class="form-control" >
                <p class="text-danger" v-if="errors.has('website')">{{ errors.first('website') }}</p>
                </div>

            <div class="col-md-6">
                <input name="addressID" v-validate="'required|max:40'" type="text"  id = "addressID"  placeholder="Address" class="form-control" >
                <p class="text-danger" v-if="errors.has('addressID')">{{ errors.first('addressID') }}</p>
                </div>

            <div class="col-md-2">
                <input name="status" v-validate="'required|max:10'" type="text"  id = "status"  placeholder="Status" class="form-control" >
                <p class="text-danger" v-if="errors.has('status')">{{ errors.first('status') }}</p>
                </div>
<!--                 
            <div class="col-md-2"><input type="text" name="country" id="addBsnCountry" placeholder="Country" v-model="country" required></div>
            <div class="col-md-2"><input type="text" name="zipcode" id="addBsnZipCode" maxlength="5" placeholder="Zip Code" v-model="zipcode" required></div> -->

            <div class="col-md-4">
                <input name="phone" v-validate="'required|max:10|min:10'" type="text"  id = "phone"  placeholder="Phone" class="form-control" >
                <p class="text-danger" v-if="errors.has('phone')">{{ errors.first('phone') }}</p>
                </div>
                
            <div class="col-md-4">
                <input name="subDate" v-validate="'date_format:DD/MM/YYYY|date_between:01/01/1950,01/01/2018|required'"  type="text"  id = "subDate"  placeholder="Sub-Date DD/MM/YYYY" class="form-control" >
                <p class="text-danger" v-if="errors.has('subDate')">{{ errors.first('subDate') }}</p>
                </div>
            
            <!-- <div class="col-md-4"><input type="text" name="videoURL"  id="addBsnVideoURL" placeholder="Video URL" v-model="video" required></div> -->

            <div class="col-md-12">
            <textarea class="form-control textArea" name="description" v-validate="'required'" id="description" placeholder="Description" rows="7"></textarea>
            <p class="text-danger" v-if="errors.has('description')">{{ errors.first('description') }}</p>
            </div>
        </div>


        <div class="row">
            <div class="col-lg-4 col-sm-6 pull-right buttonMargin">
                <p>
                    <!-- <button type="button" class="btn btn-primary btn-lg" onClick="validateAddBsn(this.form)">Add</button>
                    <button type="button" class="btn btn-default btn-lg" onClick="loadPage('controlPanel')">Cancel</button> -->
                    <!-- <button>Add</button> -->
                     <button :disabled="errors.any()" type="submit">Add</button>
                </p>
            </div>
        </div>
        </div>
    <!-- </form> -->
</div>

<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-plus-sign addMarginTop"></span> Add New Material</h2>
    </div>

    <div id="error"></div>
    <!-- <form name="todo"> -->
        <div>
        <div class="row">
            <div class="col-md-4 addCategoryList">
                <h4></h4>
                <div class="form-group">
                    <select class="form-control" onchange="addMat()" id="matTypes">
                        <option disabled selected>Choose One Material</option>
                    </select>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div id="newMat"></div>
                    </div>
                </div>

                <h4>Sub-Materials</h4>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newSubMat" id="newSubMat" v-model="subMaterial" placeholder="Enter Sub-Material" onclick="showMatConnections()">
                        <!-- <a data-toggle="modal" href="#subMatModal" class="btn btn-primary subMatModalBtn" ><span class="glyphicon glyphicon-question-sign"></span></a> -->
                        <button>Add</button>
                    </div>
                </div>
            </div>

            <div id="procConn" class="col-md-4 addCategoryList" style="display: none">
                <h5>Processes Connections</h5>
                <ul class="list-group navList" id="procCons"> </ul>
            </div>

            <div id="servConn" class="col-md-4 addCategoryList" style="display: none">
                <h5>Services Connections</h5>
                <ul class="list-group navList" id="servCons">
                </ul>
            </div>

            <div class="row">
                <div class="col-md-4 pull-right buttonMargin" style="display: none" id="addProcServConnBtn">
                    <p>
                        <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateAddNewMat(this.form)">Add</button>
                        <button type="button" class="btn btn-default btn-lg" id="cancelBttn" onClick="loadPage('controlPanel')">Cancel</button>
                    </p>
                </div>
            </div>
        </div>
        </div>
    <!-- </form> -->
</div>


<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-plus-sign marginTop"></span> Add New Process</h2>
    </div>

    <div id="error"></div>
    <!-- <form name="todo"> -->
        <div>
        <div class="row">
            <div class="col-md-4 addCategoryList">
                <h4>Process</h4>
                <div class="form-group">
                    <select class="form-control" onchange="addProc()" id="procTypes">
                        <option disabled selected>Choose One Process</option>
                        <option id="addNewProc" value="addNewProc">New Process</option>
                    </select>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div id="newProc"></div>
                    </div>
                </div>

                <h4>Sub-Process</h4>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newSubProc" id="newSubProc" v-model="subProcess" placeholder="Enter Sub-Process"  onclick="showProcConnections() ">
                        <!-- <a data-toggle="modal" href="#subProcModal" class="btn btn-primary subProcModalBtn"><span class="glyphicon glyphicon-question-sign"></span></a> -->
                        <button>Add</button>
                    </div>
                </div>
            </div>
            <div id="matConn" class="col-md-4 addCategoryList" style="display: none">
                <h5>Material Connections</h5>
                <ul class="list-group navList" id="matCons"> </ul>
            </div>

            <div id="servConn" class="col-md-4 addCategoryList" style="display: none">
                <h5>Services Connections</h5>
                <ul class="list-group navList" id="servCons">
                </ul>
            </div>

            <div class="row">
                <div class="col-md-4 pull-right buttonMargin" style="display: none" id="addMatServConnBtn">
                    <p>
                        <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateAddNewProc(this.form)">Add</button>
                        <button type="button" class="btn btn-default btn-lg" id="cancelBttn" onClick="loadPage('controlPanel')">Cancel</button>
                    </p>
                </div>
            </div>
        </div>
        </div>
    <!-- </form> -->
</div>

<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-plus-sign marginTop"></span> Add New Service</h2>
    </div>
    <div id="error"></div>
    <!-- <form name="todo"> -->
        <div>
        <div class="row">
            <div class="col-md-4 addCategoryList">
                <h4>Service</h4>
                <div class="form-group">
                    <select class="form-control" onchange="addServ()" id="servTypes">
                        <option disabled selected>Choose One Service</option>
                        <option id="addNewServ" value="addNewServ">New Service</option>
                    </select>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div id="newServ"></div>
                    </div>
                </div>

                <h4>Sub-Service</h4>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newSubServ" id="newSubServ" v-model="subService" placeholder="Enter Sub-Service" onclick="showServConnections() ">
                        <!-- <a data-toggle="modal" href="#subServModal" class="btn btn-primary subServModalBtn" ><span class="glyphicon glyphicon-question-sign"></span></a> -->
                        <button >Add</button>
                    </div>
                </div>
            </div>

            <div id="matConn" class="col-md-4 addCategoryList" style="display: none">
                <h5>Material Connections</h5>
                <ul class="list-group navList" id="matCons"> </ul>
            </div>

            <div id="procConn" class="col-md-4 addCategoryList" style="display: none">
                <h5>Processes Connections</h5>
                <ul class="list-group navList" id="procCons">
                </ul>
            </div>

            <div class="row">
                <div class="col-md-4 pull-right buttonMargin" style="display: none" id="addMatProcConnBtn">
                    <p>
                        <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateAddNewServ(this.form)">Add</button>
                        <button type="button" class="btn btn-default btn-lg" id="cancelBttn" onClick="loadPage('controlPanel')">Cancel</button>
                    </p>
                </div>
            </div>
        </div>
        </div>
    <!-- </form> -->
</div>

<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-plus-sign marginTop"></span> Add New Tag</h2>
    </div>
    <div id="error"></div>
    <!-- <form name="todo"> -->
        <div>
        <div class="row">
            <div class="col-md-4 addCategoryList">
                <h4>Tag</h4>
                <div class="form-group">
                    <select class="form-control" onchange="addServ()" id="servTypes">
                        <option disabled selected>Specify new Tag</option>
                        <option id="addNewServ" value="addNewServ">New Tag</option>
                    </select>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div id="newServ"></div>
                    </div>
                </div>

                <h4>Tags - Connections</h4>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="newSubServ" id="newSubServ" v-model="tagConnections"  placeholder="Enter Tag-Connections" onclick="showServConnections() ">
                        <!-- <a data-toggle="modal" href="#subServModal" class="btn btn-primary subServModalBtn" ><span class="glyphicon glyphicon-question-sign"></span></a> -->
                        <button>Add</button>
                    </div>
                </div>
            </div>

            <div id="matConn" class="col-md-4 addCategoryList" style="display: none">
                <h5>Material Connections</h5>
                <ul class="list-group navList" id="matCons"> </ul>
            </div>

            <div id="procConn" class="col-md-4 addCategoryList" style="display: none">
                <h5>Processes Connections</h5>
                <ul class="list-group navList" id="procCons">
                </ul>
            </div>

            <div class="row">
                <div class="col-md-4 pull-right buttonMargin" style="display: none" id="addMatProcConnBtn">
                    <p>
                        <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateAddNewServ(this.form)">Add</button>
                        <button type="button" class="btn btn-default btn-lg" id="cancelBttn" onClick="loadPage('controlPanel')">Cancel</button>
                    </p>
                </div>
            </div>
        </div>
        </div>
    <!-- </form> -->
</div>
                                    </div>
                                </div>
                                <!-- Single Tab Content End -->

                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="edit" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>Edit</h3>
                                        <div class="container" id="editBsnPage">

    <div class="row marginTop">
        <h2><span class="glyphicon glyphicon-edit"></span> Edit Business</h2>
    </div>
    <div id="error"></div>
    <!-- <form name="editBsnForm"> -->
        <div>
    <div class="row">
        <div class="col-md-6">
                <!-- <input type="text" name="companyName" id="addBsnCompanyName" placeholder="Business Name" v-model="bussiness"> -->
                <input name="companyName" v-validate="'required|max:20'" type="text"  id = "companyName"  placeholder="Company Name" class="form-control" >
                <p class="text-danger" v-if="errors.has('companyName')">{{ errors.first('companyName') }}</p>
                </div>
            <div class="col-md-6">
                <input name="website" v-validate="'required|url'" type="url"  id = "website"  placeholder="Website" class="form-control" >
                <p class="text-danger" v-if="errors.has('website')">{{ errors.first('website') }}</p>
                </div>

            <div class="col-md-6">
                <input name="addressID" v-validate="'required|max:40'" type="text"  id = "addressID"  placeholder="Address" class="form-control" >
                <p class="text-danger" v-if="errors.has('addressID')">{{ errors.first('addressID') }}</p>
                </div>

            <div class="col-md-2">
                <input name="status" v-validate="'required|max:10'" type="text"  id = "status"  placeholder="Status" class="form-control" >
                <p class="text-danger" v-if="errors.has('status')">{{ errors.first('status') }}</p>
                </div>
<!--                 
            <div class="col-md-2"><input type="text" name="country" id="addBsnCountry" placeholder="Country" v-model="country" required></div>
            <div class="col-md-2"><input type="text" name="zipcode" id="addBsnZipCode" maxlength="5" placeholder="Zip Code" v-model="zipcode" required></div> -->

            <div class="col-md-4">
                <input name="phone" v-validate="'required|max:10|min:10'" type="text"  id = "phone"  placeholder="Phone" class="form-control" >
                <p class="text-danger" v-if="errors.has('phone')">{{ errors.first('phone') }}</p>
                </div>
                
            <div class="col-md-4">
                <input name="subDate" v-validate="'date_format:DD/MM/YYYY|date_between:01/01/1950,01/01/2018|required'"  type="text"  id = "subDate"  placeholder="Sub-Date DD/MM/YYYY" class="form-control" >
                <p class="text-danger" v-if="errors.has('subDate')">{{ errors.first('subDate') }}</p>
                </div>
            
            <!-- <div class="col-md-4"><input type="text" name="videoURL"  id="addBsnVideoURL" placeholder="Video URL" v-model="video" required></div> -->

            <div class="col-md-12">
            <textarea class="form-control textArea" name="description" v-validate="'required'" id="description" placeholder="Description" rows="7"></textarea>
            <p class="text-danger" v-if="errors.has('description')">{{ errors.first('description') }}</p>
            </div>
    </div>




    <div class="row">
        <div class="col-md-4 col-sm-6 pull-right buttonMargin">
            <p>
                <!-- <button type="button" class="btn btn-primary btn-lg" onclick="validateEditBsn(this.form)">Edit</button>
                <button type="button" class="btn btn-default btn-lg" onClick="loadPage('controlPanel')">Cancel</button> -->
                <button>Edit</button>
            </p>
        </div>
    </div>
    </div>
  <!-- </form> -->
</div>
<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Edit Sub-Material Connections</h2>
    </div>
    <div id="error"></div>
    <!-- <form name="editMaterialForm"> -->
        <div>
    <div class="row">
        <div class="col-md-4 categoryList">
            <h4>Materials</h4>
            <div>
                <select  class="form-control" id="editMatTypes" onchange="getMaterialRelated()">
                    <!--<option >Choose One Material</option>-->
                </select>
            </div>

        </div>

            <div class="col-md-4 categoryList">
                <h5>Processes Connections</h5>
                <ul class="list-group navList" id="editMatProcCons"> </ul>
            </div>

            <div class="col-md-4 categoryList">
                <h5>Services Connections</h5>
                <ul class="list-group navList" id="editMatServCons">
                </ul>
            </div>

            <div class="row">
                <div class="col-md-4 pull-right buttonMargin" id="editMatConnBtn">
                    <p>
                        <!-- <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateEditMatConn(this.form)">Edit</button>
                        <button type="button" class="btn btn-default btn-lg" id="cancelBttn" onClick="loadPage('controlPanel')">Cancel</button> -->
                        <button>Edit</button>
                        
                    </p>
                </div>
            </div>
        </div>
        </div>
    <!-- </form> -->
</div>

<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Edit Sub-Process Connections</h2>
    </div>

    <div id="error"></div>
    <!-- <form action=""> -->
        <div>
        <div class="row">
            <div class="col-md-4 categoryList">
                <h4>Processes</h4>
                <div>
                    <select class="form-control" id="editProcTypes" onchange="getProcessRelated(this.form)">
                        <!--<option disabled selected>Choose One Material</option>-->
                    </select>
                </div>

            </div>


            <div class="col-md-4 categoryList">
                <h5>Materials Connections</h5>
                <ul class="list-group navList" id="editProcMatCons"> </ul>
            </div>

            <div class="col-md-4 categoryList">
                <h5>Services Connections</h5>
                <ul class="list-group navList" id="editProcServCons">
                </ul>
            </div>

            <div class="row">
                <div class="col-md-4 pull-right buttonMargin" id="editProcConnBtn">
                    <p>
                        <!-- <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateEditProcConn(this.form)">Edit</button>
                        <button type="button" class="btn btn-default btn-lg" id="cancelBttn" onClick="loadPage('controlPanel')">Cancel</button> -->
                        <button>Edit</button>
                    </p>
                </div>
            </div>
        </div>
        </div>
    <!-- </form> -->
</div>
<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Edit Sub-Service Connections</h2>
    </div>

    <div id="error"></div>
    <!-- <form name="todo"> -->
    <div>
    <div class="row">
        <div class="col-md-4 categoryList">
            <h4>Services</h4>
            <div>
                <select class="form-control" id="editServTypes" onchange="getServiceRelated(this.form)">
                    <!--<option disabled selected>Choose One Material</option>-->
                </select>
            </div>

        </div>


            <div class="col-md-4  categoryList">
                <h5>Materials Connections</h5>
                <ul class="list-group navList" id="editServMatCons"> </ul>
            </div>

            <div class="col-md-4 categoryList">
                <h5>Processes Connections</h5>
                <ul class="list-group navList" id="editServProcCons">
                </ul>
            </div>

            <div class="row">
                <div class="col-md-4 pull-right buttonMargin" id="editServConnBtn">
                    <p>
                        <!-- <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateEditServConn(this.form)">Edit</button>
                        <button type="button" class="btn btn-default btn-lg" id="cancelBttn" onClick="loadPage('controlPanel')">Cancel</button> -->
                        <button >Edit</button>
                    </p>
                </div>
            </div>
        </div>
        </div>
    <!-- </form> -->
 </div>
 <div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Edit Tags Connections</h2>
    </div>

    <div id="error"></div>
    <!-- <form name="todo"> -->
        <div>
    <div class="row">
        <div class="col-md-4 categoryList">
            <h4>Tags</h4>
            <div>
                <select class="form-control" id="editServTypes" onchange="getServiceRelated(this.form)">
                    <!--<option disabled selected>Choose One Material</option>-->
                </select>
            </div>

        </div>



            <div class="row">
                <div class="col-md-4 pull-right buttonMargin" id="editServConnBtn">
                    <p>
                        <!-- <button type="button" class="btn btn-primary btn-lg" id="addBttn" onClick="validateEditServConn(this.form)">Edit</button>
                        <button type="button" class="btn btn-default btn-lg" id="cancelBttn" onClick="loadPage('controlPanel')">Cancel</button> -->
                        <button >Edit</button>
                    </p>
                </div>
            </div>
        </div>
        </div>
    <!-- </form> -->
 </div>

                                    </div>
                                </div>
                                <!-- Single Tab Content End -->

                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="remove" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>Remove</h3>
<div class="container contentContainer addMarginTop">

    <div class="row">

        <div class="col-md-12 cpl-md-offset-4" id="topRow">

            <h2><span class="glyphicon glyphicon-minus-sign addMarginTop"></span> Remove Materials </h2>

            <p class="lead">Select the materials you want to remove from the system.</p>

            <!-- <form> -->
                <div>

                <ul class="list-group categoryFont" id="materialList">

                </ul>


                <div class="col-md-4 col-sm-6 pull-right">
                    <p>
                        <!-- <button type="button" class="btn btn-primary btn-lg" data-toggle="modal"
                                data-target="#basicModal">Remove</button>
                        <button type="button" class="btn btn-default btn-lg" onClick="loadPage('controlPanel')">Cancel</button> -->
                        <button >Remove</button>

                    <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;
                                    </span><span class="sr-only">Close</span></button>
                                    <h4 class="modal-title" id="myModalLabel">Removal Confirmation</h4>
                                </div>
                                <div class="modal-body">
                                    <h3>Are you sure you want to remove the selected materials?</h3>
                                </div>
                                <div class="modal-footer">
                                    <!-- <button type="button" class="btn btn-primary" id="modalButton" onClick="getRemvMatChbox(this.form)">Save changes</button>
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button> -->
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <!-- </form> -->
        </div>
    </div>
</div>
<div class="container contentContainer addMarginTop">

    <div class="row">

        <div class="col-md-12 cpl-md-offset-4" id="topRow">

            <h2><span class="glyphicon glyphicon-minus-sign addMarginTop"></span> Remove Processes </h2>

            <p class="lead">Select the processes you want to remove from the system.</p>

            <!-- <form> -->
                <div>

                <ul class="list-group categoryFont" id="processList">

                </ul>
                <div class="col-md-4 col-sm-6 pull-right">
                    <p>
                        <!-- <button type="button" class="btn btn-primary btn-lg" data-toggle="modal"
                                data-target="#basicModal">Remove</button>
                        <button type="button" class="btn btn-default btn-lg" onClick="loadPage('controlPanel')">Cancel</button> -->
                        <button>Remove</button>

                    <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;
                                    </span><span class="sr-only">Close</span></button>
                                    <h4 class="modal-title" id="myModalLabel">Removal Confirmation</h4>
                                </div>
                                <div class="modal-body">
                                    <h3>Are you sure you want to remove the selected processes?</h3>
                                </div>
                                <div class="modal-footer">
                                    <!-- <button type="button" class="btn btn-primary" onClick="getRemvProcChbox(this.form)">Save changes</button>
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button> -->
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <!-- </form> -->
        </div>
    </div>
</div>
<div class="container contentContainer addMarginTop">

    <div class="row">

        <div class="col-md-12 cpl-md-offset-4" id="topRow">

            <h2><span class="glyphicon glyphicon-minus-sign addMarginTop"></span> Remove Services </h2>

            <p class="lead">Select the services you want to remove from the system.</p>

            <!-- <form> -->
                <div>

                <ul class="list-group categoryFont" id="serviceList">

                </ul>
                <div class="col-md-4 col-sm-6 pull-right">
                    <p>
                        <!-- <button type="button" class="btn btn-primary btn-lg" data-toggle="modal"
                                data-target="#basicModal">Remove</button>
                        <button type="button" class="btn btn-default btn-lg" onClick="loadPage('controlPanel')">Cancel</button> -->
                        <button>Remove</button>

                    <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;
                                    </span><span class="sr-only">Close</span></button>
                                    <h4 class="modal-title" id="myModalLabel">Removal Confirmation</h4>
                                </div>
                                <div class="modal-body">
                                    <h3>Are you sure you want to remove the selected services?</h3>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" onClick="getRemvServChbox(this.form)">Save changes</button>
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <!-- </form> -->
        </div>
    </div>
</div>
<div class="container contentContainer addMarginTop">

    <div class="row">

        <div class="col-md-12 cpl-md-offset-4" id="topRow">

            <h2><span class="glyphicon glyphicon-minus-sign addMarginTop"></span> Remove Tags </h2>

            <p class="lead">Select the tags you want to remove from the system.</p>

            <!-- <form> -->
                <div>

                <ul class="list-group categoryFont" id="serviceList">

                </ul>
                <div class="col-md-4 col-sm-6 pull-right">
                    <p>
                        <!-- <button type="button" class="btn btn-primary btn-lg" data-toggle="modal"
                                data-target="#basicModal">Remove</button>
                        <button type="button" class="btn btn-default btn-lg" onClick="loadPage('controlPanel')">Cancel</button> -->
                        <button>Remove</button>

                    <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;
                                    </span><span class="sr-only">Close</span></button>
                                    <h4 class="modal-title" id="myModalLabel">Removal Confirmation</h4>
                                </div>
                                <div class="modal-body">
                                    <h3>Are you sure you want to remove the selected tags?</h3>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" onClick="getRemvServChbox(this.form)">Save changes</button>
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <!-- </form> -->
        </div>
    </div>
</div>


                                    </div>
                                </div>
                                <!-- Single Tab Content End -->

                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="pending-requests" role="tabpanel">
                                    <div class="myaccount-content">
                                        <h3>Pending Requests</h3>

                                        <div class="container">

    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-exclamation-sign"></span> Pending Requests</h2>
    </div>

    <div class="container">
        <table class="table table-striped table-hover table-bordered tableContainer" id="pendingRequestTable">
            <thead>
            <th>#</th>
            <th data-field="name" data-sortable="true">Name</th>
            <th data-field="description" data-sortable="true">Status</th>
            <th data-field="city" data-sortable="true">Date</th>
            </thead>
            <tbody id="requestsList">
            </tbody>
        </table>

        <div class="col-md-4  pull-right">
            <!-- <button type="button" class="btn btn-primary btn-lg" onClick="getPendingRequestRadio()">View</button>
            <button type="button" class="btn btn-default btn-lg" onClick="loadPage('controlPanel')">Cancel</button> -->
            <button>View</button>
        </div>

    </div>
</div>

                                    </div>
                                </div>
                                <!-- Single Tab Content End -->
                            </div>
                        </div>
                        <!-- My Account Tab Content End -->
                    </div>
                    </div>
                </div>
                
            </div>
            </form>
            <!-- My Account page content end -->
            
</template>
<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

export default {
  data: () => {
    return {
      companyName: "",
      firstName: "",
      firstNameEdit: ""
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("Submitted");
          return;
        }

        alert("Empty Field(s)");
      });
    }
  }
};
</script>
<style>
.myaccount-content {
  font-size: 14px;
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
@media (min-width: 786px) {
  .col-md-4 {
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 33.3%;
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

.row {
  margin-bottom: 2.5rem;
  margin-top: 2px;
}
</style>

