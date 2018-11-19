<template>
    <slider></slider>
</template>

<script>
import Slider from "../components/slider/Slider.vue";
import Vue from "vue";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["editBusinessInfo"])
  },
  components: {
    slider: Slider
  },
  beforeMount() {
    // this.editBusinessInfo({
    //   companyId: "97",
    //   companyName: "McDonalds",
    //   video: "",
    //   website: "",
    //   phone: "",
    //   description: "",
    //   logo: "",
    //   email: "",
    //   processes: [],
    //   materials: [],
    //   services: [],
    //   line: "",
    //   city: "",
    //   country: "",
    //   zipcode: "",
    //   lati: "",
    //   longi: ""
    // });
  }
};
</script>

<style>
</style>
