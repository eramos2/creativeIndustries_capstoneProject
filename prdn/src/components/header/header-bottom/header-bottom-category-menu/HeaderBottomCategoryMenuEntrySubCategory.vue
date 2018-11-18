<template>
    
    <li class="single-megamenu">
        <ul>
            <li class="menu-tile"><slot></slot></li>
            <li 
                v-for="(subcategory, index) in category.subcategories"
                :key="index"
            >
                <a href="shop.html">
                    {{subcategory}}
                </a>
            </li>
        </ul>
        
    </li>
    
    
</template>

<script>
export default {
  props: ["category"]
};
</script>

<style>
.menu-tile {
  border-bottom: 1px solid #ededed;
  color: #2c2c2c;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
}
.single-megamenu ul li a {
  color: #666666;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  padding: 0;
  text-transform: capitalize;
}
</style>
