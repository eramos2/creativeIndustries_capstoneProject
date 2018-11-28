<template>
     <p v-for="(category, key) in mapResourceCategories"
                :key="key"
            >
            {{category.name}}
    </p>
</template>

<script>
export default {};
</script>

<style>
</style>
