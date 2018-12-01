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

          <removeadmin v-show="adminAuthenticated"></removeadmin>
    </div>
    </form>

</template>
<script>
import RemoveMaterials from "./RemoveMaterials.vue";
import RemoveProcess from "./RemoveProcess.vue";
import RemoveServices from "./RemoveServices";
import RemoveBusiness from "./RemoveBusiness.vue";
import RemoveTags from "./RemoveTags.vue";
import Removeadmin from "../../superadmin/manageadmin/Removeadmin.vue";
export default {
  props: ["adminAuthenticated"],
  components: {
    removematerials: RemoveMaterials,
    removeprocess: RemoveProcess,
    removeservices: RemoveServices,
    removebusiness: RemoveBusiness,
    removetags: RemoveTags,
    removeadmin: Removeadmin
  }
};
</script>
<style>
</style>
