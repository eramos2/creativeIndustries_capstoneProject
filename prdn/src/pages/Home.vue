<template>
    <slider></slider>
</template>

<script>
import Slider from "../components/slider/Slider.vue";
import Vue from "vue";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["getSubResourceByName"])
  },
  components: {
    slider: Slider
  },
  beforeMount() {
    this.getSubResourceByName({ resource: "materials", name: "concrete" });
  }
};
</script>

<style>
</style>
