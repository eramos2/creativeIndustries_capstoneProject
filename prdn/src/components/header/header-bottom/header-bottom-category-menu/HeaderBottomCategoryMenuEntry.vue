<template>

    <li>
      <a href="shop.html">
        <span>
          <img src="../../../../assets/images/icons/1.png" alt="menu-icon">
        </span>
        <slot></slot>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </a>
      
        <!-- category Mega-Menu Start -->
        <ul class="ht-dropdown megamenu first-megamenu">
        <!-- Single Column Start -->
        <menu-entry-subcategory
            v-for="(category, index) in resource.categories"
            :key="index"
            :category="category"
        >
           {{category.name}}
        </menu-entry-subcategory>
        </ul>
      
    </li>
</template>

<script>
import HeaderBottomCategoryMenuEntrySubCategory from "./HeaderBottomCategoryMenuEntrySubCategory.vue";

export default {
  props: ["resource"],
  components: {
    menuEntrySubcategory: HeaderBottomCategoryMenuEntrySubCategory
  }
};
</script>

<style>
.megamenu {
  background: #ffffff none repeat scroll 0 0;
  border: 1px solid #e5e5e3;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  left: 100%;
  padding: 20px 35px;
  top: 0;
}

.ht-dropdown {
  background: #ffffff none repeat scroll 0 0;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
  left: 92%;
  opacity: 0;
  padding: 10px 0;
  position: absolute;
  top: 0;
  transform: scaleY(0);
  transform-origin: 0 0 0;
  transition: all 0.5s ease 0s;
  visibility: hidden;
  width: 120px;
  z-index: 999;
}
</style>
