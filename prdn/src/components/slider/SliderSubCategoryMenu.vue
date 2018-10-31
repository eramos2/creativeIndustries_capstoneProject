<template>

    <li><a href="#"><slot></slot></a>
        <ul>
            <li
                v-for="(subcategory, index) in category.subcategories"
                :key="index"
            >
            <a href="#">{{subcategory}}</a>
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
</style>
