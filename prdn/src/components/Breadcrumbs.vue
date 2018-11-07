<template>
    <!-- breadcrumb-area start -->
    <div class="breadcrumb-area bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item active">Shop</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb-area end -->
</template>

<script>
export default {};
</script>

<style>
.breadcrumb-item + .breadcrumb-item:before {
  color: #6c757d;
  content: "";
  display: inline-block;
  font-family: fontawesome;
  padding-left: 8px;
  padding-left: 8px;
  padding-left: 0.5rem;
  padding-right: 8px;
  padding-right: 8px;
  padding-right: 0.5rem;
}

.breadcrumb-item {
  display: inline-block;
}

.breadcrumb-area {
  border-bottom: 1px solid #dddddd;
  padding: 18px 0;
}

.breadcrumb-item.active {
  color: #0879c9;
}
</style>
