<template>
    <tr>
        <td class="plantmore-product-thumbnail">

                <router-link 
                  :to="{
                    name: 'businessLink', 
                    params: {
                        businessName: businessName
                    }
                  }" 
                  tag="a" 
                  active-class="active"
                >
                  {{businessName}}
                </router-link>

        </td>
        <td class="plantmore-product-name">
           <router-link 
                  :to="{
                    name: 'businessLink', 
                    params: {
                        businessName: businessName
                    }
                  }" 
                  tag="a" 
                  active-class="active"
                >
                  {{businessDescription}}
                </router-link>
        </td>
        <td class="plantmore-product-price"><span class="amount">{{businessCity}}</span></td>
    </tr>
</template>

<script>
export default {
  props: ["name", "description", "city"],
  computed: {
    businessName() {
      console.log("Hello");
      return this.name;
    },
    businessDescription() {
      return this.description;
    },
    businessCity() {
      console.log(this.city);
      return this.city;
    }
  }
};
</script>

<style>
</style>
