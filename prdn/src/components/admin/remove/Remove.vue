<template>
<form @submit.prevent="validateBeforeSubmit">

<div class="" id="remove" role="tabpanel">
    <div class="myaccount-content">
        <h3>Remove</h3>
         
          <removebusiness></removebusiness>
    </div>
    
           <removematerials></removematerials>
          <removeprocess></removeprocess>
          <removeservices></removeservices>
          <removetags></removetags>
    </div>
    </form>

</template>
<script>
import RemoveMaterials from "./RemoveMaterials.vue";
import RemoveProcess from "./RemoveProcess.vue";
import RemoveServices from "./RemoveServices";
import RemoveBusiness from "./RemoveBusiness.vue";
import RemoveTags from "./RemoveTags.vue";
export default {
  components: {
    removematerials: RemoveMaterials,
    removeprocess: RemoveProcess,
    removeservices: RemoveServices,
    removebusiness: RemoveBusiness,
    removetags: RemoveTags
  }
};
</script>
<style>
</style>
