<template>
  <li class>
    <img :src="businessImage" :alt="imageName">
  </li>
</template>

<script>
export default {
  props: ["image", "imageName", "imageType", "companyName"],
  computed: {
    /**
     * Returns business image blob(base64) for the img src div to display it
     */
    businessImage() {
      if (this.image == null) {
        //If company doesnt have images for carrousel
        return "https://via.placeholder.com/178x52?text=" + this.companyName;
      } else {
        return "data:" + this.imageType + ";base64," + this.image;
      }
    }
  }
};
</script>

<style>
</style>
