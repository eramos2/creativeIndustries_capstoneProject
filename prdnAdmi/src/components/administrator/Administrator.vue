<template>
<div class="container contentContainer">

    <div class="row cpMarginTop">
        <h2><span class="glyphicon glyphicon-wrench"></span> Administrator Control Panel</h2>
    </div>

    <div class="col-md-5 col-md-offset-1">
        <ul id="optionsLeft">
            <li><h4>Manage Material</h4><ul class="subOptions">
                <li onclick="loadPage('addMaterial')"><a>Add</a></li>
                <li onclick="loadPage('removeMaterial')"><a>Remove</a></li>
            </ul></li>

            <li><h4>Manage Processes</h4><ul class="subOptions">
                <li onclick="loadPage('addProcess')"><a>Add</a></li>
                <li onclick="loadPage('removeProcess')"><a>Remove</a></li>
            </ul></li>

            <li><h4>Manage Services</h4><ul class="subOptions">
                <li onclick="loadPage('addService')"><a>Add</a></li>
                <li onclick="loadPage('removeService')"><a>Remove</a></li>
            </ul></li>

            <li><h4>Manage Businesses</h4><ul class="subOptions">
                <li onclick="loadPage('addBusiness')"><a>Add</a></li>
                <li onclick="loadPage('editBusinessSelector')"><a>Edit</a></li>
                <li onclick="loadPage('removeBusiness')"><a>Remove</a></li>
            </ul></li>
        </ul>
    </div>

    <div class="col-md-4">
        <ul id="optionsRight">
            <li><h4>Manage Connections</h4><ul class="subOptions">
                <li onclick="loadPage('editMaterialConn')"><a>Edit material connections</a></li>
                <li onclick="loadPage('editProcessConn')"><a>Edit process connections</a></li>
                <li onclick="loadPage('editServiceConn')"><a>Edit service connections</a></li>
            </ul></li>
            <li><h4>Manage Tag System</h4><ul class="subOptions">
                <li onclick="loadPage('addArticle')"><a>Add Tag to a Company</a></li>
                <li onclick="loadPage('addArticle')"><a>Add Tag to the System</a></li>
                <li onclick="loadPage('editArticleSelector')"><a>Edit Tag of a Company</a></li>
                <li onclick="loadPage('editArticleSelector')"><a>Edit Tag of the System</a></li>
                <li onclick="loadPage('removeArticle')"><a>Remove a tag from a company</a></li>
                 <li onclick="loadPage('removeArticle')"><a>Remove a tag from the system</a></li>
            </ul></li>
            <li id="manageAdmin"></li>
            <li onclick="loadPage('pendingRequest')"><a><h4>Pending Requests <span class="badge" id="badgeCount"></span></h4></a></li>
        </ul>
    </div>
</div>
</template>
<script>
export default {};
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
</style>

