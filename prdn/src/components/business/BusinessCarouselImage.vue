<template>
    <li class="">
        <img :src="businessImage" :alt="imageName">
    </li>
</template>

<script>
export default {
  props: ["image", "imageName", "imageType"],
  computed: {
    /**
     * Returns business image blob(base64) for the img src div to display it
     */
    businessImage() {
      return "data:" + this.imageType + ";base64," + this.image;
    }
  }
};
</script>

<style>
</style>
