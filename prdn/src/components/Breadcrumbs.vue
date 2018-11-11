<template>
    <!-- breadcrumb-area start -->
    <div class="breadcrumb-area bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="breadcrumb-list">
                        <router-link to="/" tag="li" active-class="active" class="breadcrumb-item"><a>home</a></router-link>

                        <breadcrumbs-single-item 
                            v-for="(crumb, index) in crumbs"
                            :key="index"
                            :crumb="crumb"
                        >
                        {{crumb}}
                        </breadcrumbs-single-item>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb-area end -->
</template>

<script>
import BreadcrumbsSingleItem from "./BreadcrumbsSingleItem.vue";

export default {
  components: {
    breadcrumbsSingleItem: BreadcrumbsSingleItem
  },
  computed: {
    crumbs() {
      console.log("Inside Breadcrumbs.vue");
      let crumbs = this.$route.params;
      console.log(this.$route.params);
      return crumbs;
    }
  }
};
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
