<template>
    <div>
      <header-bottom></header-bottom>
    </div>
</template>

<script>
import HeaderBottom from "./header-bottom/HeaderBottom.vue";

export default {
  components: {
    headerBottom: HeaderBottom
  }
};
</script>

<style>
.header-bottom-area {
  background-color: #12a4dd;
}

.header-bottom-area .category-wrapper {
  max-width: 16.67%;
}

.category-menu {
  background: #16b8f6 none repeat scroll 0 0;
  border-radius: 5px 5px 0 0;
  position: relative;
}

.category-menu > span::after {
  content: "";
  font-family: "Ionicons";
  font-size: 27px;
  font-weight: normal;
  left: 20px;
  position: absolute;
}

.category-menu > span > i {
  font-size: 20px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}

.category-menu-list > li > a i {
  position: absolute;
  right: 0;
  top: 13px;
}

.category-menu > span {
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  line-height: 58px;
  margin-left: 50px;
  text-transform: uppercase;
}

.category-menu-list {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: #ffffff none repeat scroll 0 0;
  border-color: #ededed;
  border-image: none;
  border-style: solid;
  border-width: 0 1px 1px;
  left: 0;
  padding: 10px 0;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 99;
}

.home-two .category-menu-list {
  position: relative;
}

.category-menu-list li {
  position: relative;
}

.category-menu-list > li a {
  background: #ffffff none repeat scroll 0 0;
  color: #2c2c2c;
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 5px 20px;
  position: relative;
  text-transform: capitalize;
}

.category-menu-list li span {
  display: inline-block;
  margin-right: 10px;
  width: 30px;
}

.category-menu-list > li a {
  color: #2c2c2c;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  overflow-wrap: break-word;
  text-transform: capitalize;
}

ul {
  list-style: outside none none;
}

.category-menu-list .ht-dropdown::before {
  background-color: #ffffff;
  border-color: #f1f1f1 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #f1f1f1;
  border-image: none;
  border-style: solid;
  border-width: 1px;
  content: "";
  display: block;
  height: 15px;
  left: -8px;
  position: absolute;
  top: 15px;
  transform: rotate(-45deg);
  width: 15px;
}

.category-menu-list > li ul.first-megamenu {
  width: 605px;
}

.category-menu-list > li a {
  background: #ffffff none repeat scroll 0 0;
  color: #2c2c2c;
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 5px 20px;
  position: relative;
  text-transform: capitalize;
}

.first-megamenu li.megamenu-img {
  flex-basis: 40%;
}

.category-menu-list li {
  padding: 0 20px;
  position: relative;
}

.category-menu-list li ul li {
  padding: 15px 20px 10px 30px;
}

.category-menu-list li ul li ul {
  margin: 0;
}

.category-menu-list li ul li ul li {
  padding: 0;
  margin: 0;
}

.category-menu-list li ul li ul li.menu-tile {
  padding-bottom: 10px;
}

.category-menu-list li ul li a {
  border-bottom: 0px solid transparent;
}

li.megamenu-img a {
  padding: 0;
}

.category-menu-list > li a {
  background: #ffffff none repeat scroll 0 0;
  border-bottom: 1px solid #ededed;
  color: #2c2c2c;
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 5px 0;
  text-decoration: none;
  position: relative;
  text-transform: capitalize;
}

.home-one .category-menu-list > li a:hover {
  color: #12a4dd;
}

.home-two .category-menu-list > li a:hover {
  color: #46b7b9;
}

.category-menu-list > li:last-child a {
  border-bottom: 0 solid rgba(0, 0, 0, 0);
}

.header-top-left > ul > li:hover ul.ht-dropdown,
.cart-box ul li:hover ul.ht-dropdown,
.category-menu-list > li:hover ul.ht-dropdown,
.header-bottom-list li:hover ul.ht-dropdown {
  opacity: 1;
  transform: scaleY(1);
  visibility: visible;
}

.category-menu-list > li ul.megamenu-two {
  width: 420px;
}
</style>
