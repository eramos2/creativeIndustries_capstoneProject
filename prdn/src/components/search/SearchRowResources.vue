<template>
  <tr>
    <td class="plantmore-product-thumbnail">
      <router-link
        :to="{
                    name: 'singleitemLink', 
                    params: {
                        resourceName: resourceName,
                        categoryName: resourceCategory,
                        subcategoryName: subresourceName
                    }
                  }"
        tag="a"
        active-class="active"
      >{{subresourceName}}</router-link>
    </td>
    <td class="plantmore-product-name">
      <router-link
        :to="{
        name: 'subcategoriesLink', 
        params: {
            resourceName: resourceName,
            categoryName: resourceCategory
          }
        }"
        tag="a"
        active-class="active"
      >{{resourceCategory}}</router-link>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["name", "category"],
  computed: {
    resourceName() {
      return this.$route.params.resourceName;
    },
    subresourceName() {
      console.log("Hello");
      return this.name;
    },
    resourceCategory() {
      return this.category;
    }
  }
};
</script>

<style>
</style>
