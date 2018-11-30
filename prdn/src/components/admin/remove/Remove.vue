<template>
<div class="" id="remove" role="tabpanel">
    <div class="myaccount-content">
        <h3>Remove</h3>
          <removematerials></removematerials>
          <!-- <removeprocess></removeprocess> -->
          <!-- <removeservices></removeservices> -->
          <!-- <removebusiness></removebusiness> -->

    </div>
    </div>
    
</template>
<script>
import RemoveMaterials from "./RemoveMaterials.vue";
import RemoveProcess from "./RemoveProcess.vue";
import RemoveServices from "./RemoveServices";
import RemoveBusiness from "./RemoveBusiness.vue";
export default {
  components: {
    removematerials: RemoveMaterials,
    removeprocess: RemoveProcess,
    removeservices: RemoveServices,
    removebusiness: RemoveBusiness
  }
};
</script>
<style>
</style>
