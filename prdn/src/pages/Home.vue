<template>
    <slider></slider>
</template>

<script>
import Slider from "../components/slider/Slider.vue";
import Vue from "vue";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["removeBusiness"])
  },
  components: {
    slider: Slider
  },
  beforeMount() {
    // this.removeBusiness({ companyId: "102" });
    //   // submissionId: "134"
    //   //   adminId: "47",
    //   //   materials: [["Digital Concrete", 5, 1, "", "", ""]],
    //   //   services: [],
    //   //   processes: [],
    //   //     id: "31",
    //   submissionId: "131"
    //   //   companyName: "test company111",
    //   //   website: "www.test.com",
    //   //   description: "Tester description",
    //   //   phone: "7879961212",
    //   //   email: "test@company.com",
    //   //   videoURL: "",
    //   //   address: "Calle Esmeralda AB 21 Valle de Cerro Gordo",
    //   //   city: "Bayamon",
    //   //   country: "PR",
    //   //   zipcode: "00957"
    // });
  }
};
</script>

<style>
</style>
