<template>
    <div class="sub-col col-lg-3 d-md-hide d-xs-hide">
        <div class="all-categories-menu-2 ">
            <div class="categories-toggler-menu">
                <span> All Categories </span>
            </div>
            <div class="vertical-menu-list">
                <ul>
                    <category-menu
                        v-for="(resource, key) in resources"
                        :key="key"
                        :resourceKey="key"
                        :resource="resource"
                    >
                        {{resource.name}}
                    </category-menu>
                </ul>
            </div>
            <!--<button class="btn btn-primary" @click="setResources">Get Materials</button>-->

        </div>
    </div>
</template>

<script>
import SliderCategoriesMenu from "./SliderCategoriesMenu.vue";
import { mapGetters } from "vuex";
export default {
  //props: ["resources"],
  components: {
    categoryMenu: SliderCategoriesMenu
  },
  computed: {
    resources() {
      console.log("Inside computed before getResources ");
      console.log(this.$store.getters.getResources);
      //return this.getResources();
      return this.$store.getters.getResources;
    }
  },
  methods: {
    ...mapGetters(["getResources"]),
    getMaterials() {
      this.$http
        .get("", {
          params: { endpoint: "material", code: "1" }
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.$store.state.resources.materials = data;
        });
    }
  }
};
</script>

<style>
.categories-toggler-menu {
  background: #e64545 none repeat scroll 0 0;
  color: #ffffff;
  padding: 15px 20px;
  position: relative;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  cursor: pointer;
}
.vertical-menu-list {
  background: #ffffff none repeat scroll 0 0;
  border-color: #eaecee;
  border-style: none solid solid;
  border-width: 0 1px 1px;
  display: block;
  padding: 20px 0 20px 10px;
}

.vertical-menu-list ul li {
  display: block;
  position: relative;
}

.vertical-menu-list ul li a {
  color: #222222;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  padding: 5px 20px 5px 10px;
  text-transform: none;
  display: block;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.vertical-menu-list ul li a span {
  float: right;
}

.vertical-menu-list ul li a:hover {
  color: #222222;
  background: #e9eaef;
}

.vertical-menu-list ul li .right-sub-menu,
.vertical-menu-list ul li .right-sub-menu li ul.right-threed-sub,
.vertical-menu-list ul li .right-mega-menu {
  background: #fff;
  border: 1px solid #eaecee;
  box-shadow: 1px 2px 4px 0.28px rgba(0, 0, 0, 0.07);
  left: 100%;
  position: absolute;
  top: 5px;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  width: 200px;
  z-index: 99;
  padding: 0;
  visibility: hidden;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  z-index: 9;
}

.vertical-menu-list ul li .right-sub-menu li {
  position: relative;
}

.vertical-menu-list ul li .right-sub-menu li a {
  padding: 5px 15px;
}

.vertical-menu-list ul li .right-sub-menu li a:hover {
  background: none;
  color: #0879c9;
}

.vertical-menu-list ul li:hover .right-sub-menu,
.vertical-menu-list ul li .right-sub-menu li:hover ul.right-threed-sub,
.vertical-menu-list ul li:hover ul.right-mega-menu {
  visibility: visible;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  top: 0;
}

.vertical-menu-list ul li .right-sub-menu li ul.right-threed-sub {
  width: 90px;
}

.vertical-menu-list ul li .right-mega-menu {
  padding: 15px 5px 20px;
  width: 530px;
}

.vertical-menu-list ul li .right-mega-menu li {
  float: left;
  padding: 0 15px;
  width: 50%;
}

.vertical-menu-list ul li .right-mega-menu li a {
  color: #0879c9;
  font-size: 15px;
  font-weight: 600;
  padding: 0;
  margin: 10px 0;
}

.vertical-menu-list ul li .right-mega-menu li a:hover {
  text-decoration: underline;
  background: none;
}

.vertical-menu-list ul li .right-mega-menu li ul li {
  display: block;
  padding: 0;
  width: 100%;
}

.vertical-menu-list ul li .right-mega-menu li ul li > a {
  color: #333333;
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
  padding: 0;
}

.vertical-menu-list ul li .right-mega-menu li ul li > a:hover {
  background: none;
  color: #0879c9;
  text-decoration: none;
}

.vertical-menu-list ul li .right-mega-menu li.menu-benner-image {
  margin-top: 20px;
  width: 100%;
}

.categories-more-less {
  cursor: pointer;
}

.vertical-menu-list li a.more-default,
.vertical-menu-list li a.less-show {
  color: #0879c9;
}

.vertical-menu-list li a.more-default:hover,
.vertical-menu-list li a.less-show:hover {
  color: #0879c9;
}

.hide-child,
.vertical-menu-list ul li a.less-show {
  display: none;
}

.vertical-menu-list ul li.rx-change a.less-show {
  display: block;
}

.vertical-menu-list ul li.rx-change a.more-default {
  display: none;
}

.vertical-menu-list li.hide-child {
  display: none;
}

.vertical-menu > span {
  background: #f2f2f2 none repeat scroll 0 0;
  color: #363636;
  cursor: pointer;
  display: block;
  font-family: "lato", sans-serif;
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  padding-left: 45px;
  position: relative;
  text-transform: uppercase;
}

.all-categories-menu-2 .categories-toggler-menu {
  background: #ffffff none repeat scroll 0 0;
  color: #ff6a00;
}

.all-categories-menu-2 .vertical-menu-list {
  border: none;
  padding: 0 0 10px 10px;
}

.all-categories-menu-2 .vertical-menu-list ul li .right-sub-menu li a:hover {
  color: #ff6a00;
}

.all-categories-menu-2 .vertical-menu-list ul li .right-mega-menu li a {
  color: #ff6a00;
}

.all-categories-menu-2 .vertical-menu-list ul li .right-mega-menu li a:hover {
  color: #ff6a00;
  text-decoration: underline;
}

.all-categories-menu-2
  .vertical-menu-list
  ul
  > li
  .right-mega-menu
  li
  ul
  li
  > a {
  color: #333333;
}

.all-categories-menu-2
  .vertical-menu-list
  ul
  li
  .right-mega-menu
  li
  ul
  li
  > a:hover {
  color: #ff6a00;
  text-decoration: none;
}

.all-categories-menu-2 .vertical-menu-list li a.more-default,
.all-categories-menu-2 .vertical-menu-list li a.less-show {
  color: #ff6a00;
}
</style>


