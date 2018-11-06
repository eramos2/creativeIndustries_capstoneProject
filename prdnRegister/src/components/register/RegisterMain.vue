<template>
     <div class="row">
                        <div class="col-sm-12">
                            <form class="form-register" action="#">
                                <fieldset>
                                    <legend>Personal Details</legend>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="f-name"><span class="require"></span>First Name</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" id="f-name" placeholder="First Name">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="l-name"><span class="require"></span>Last Name</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" id="l-name" placeholder="Last Name">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="email"><span class="require"></span>Email address</label>
                                        <div class="col-md-10">
                                            <input type="email" class="form-control" id="email" placeholder="Enter you email address here...">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="number"><span class="require"></span>Telephone</label>
                                        <div class="col-md-10">
                                            <input type="email" class="form-control" id="number" placeholder="Telephone">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="occupation"><span class="require"></span>Occupation</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" id="occupation" placeholder="Occupation">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="Birthdate"><span class="require"></span>Birthdate</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" id="birthdate" placeholder="Birthdate yyyy-mm-dd">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="city"><span class="require"></span>City</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" id="city" placeholder="City">
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Your Password</legend>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="pwd"><span class="require"></span>Password:</label>
                                        <div class="col-md-10">
                                            <input type="password" class="form-control" id="pwd" placeholder="Password">
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="pwd-confirm"><span class="require"></span>Confirm Password</label>
                                        <div class="col-md-10">
                                            <input type="password" class="form-control" id="pwd-confirm" placeholder="Confirm password">
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
</template>
<script>
export default {};
</script>
<style>
</style>
