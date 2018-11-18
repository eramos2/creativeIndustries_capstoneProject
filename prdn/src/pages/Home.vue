<template>
    <slider></slider>
</template>

<script>
import Slider from "../components/slider/Slider.vue";
import Vue from "vue";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["verifyAdminEmail"])
  },
  components: {
    slider: Slider
  },
  beforeMount() {
    this.verifyAdminEmail({
      email: "emmanuel.ramos2@upr.edu"
    });
  }
};
</script>

<style>
</style>
