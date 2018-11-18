<template>
    <slider></slider>
</template>

<script>
import Slider from "../components/slider/Slider.vue";
import Vue from "vue";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["loginUser"])
  },
  components: {
    slider: Slider
  },
  beforeMount() {
    this.loginUser({
      email: "emmanuel.ramos2@upr.edu",
      password: "123456"
    });
  }
};
</script>

<style>
</style>
