<template>
    <slider></slider>
</template>

<script>
import Slider from "../components/slider/Slider.vue";
import Vue from "vue";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["loginAdmin"])
  },
  components: {
    slider: Slider
  },
  beforeMount() {
    this.loginAdmin({
      email: "willmer.lopez@upr.edu",
      password: "123456"
    });
  }
};
</script>

<style>
</style>
