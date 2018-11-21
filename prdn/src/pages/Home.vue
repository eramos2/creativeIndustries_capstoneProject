<template>
    <slider></slider>
</template>

<script>
import Slider from "../components/slider/Slider.vue";
import Vue from "vue";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["editAdminInfo"])
  },
  components: {
    slider: Slider
  },
  beforeMount() {
    // this.editAdminInfo({
    // id: "47",
    // id: "31",
    // firstName: "Emmanuel",
    // lastName: "Ramos",
    // occupation: "Soft v",
    // city: "Mayaguez"
    //  email: "emmanuel.ramos2@upr.edu",
    // pass: "12345678"
    // });
  }
};
</script>

<style>
</style>
