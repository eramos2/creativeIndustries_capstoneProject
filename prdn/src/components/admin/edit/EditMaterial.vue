<template>
 <form @submit.prevent="validateBeforeSubmit">
<div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Edit Material Connections</h2>
    </div>
    <div id="error"></div>
    <!-- <form name="editMaterialForm"> -->
        <div>
    <div class="row">
        <div class="col-md-6 categoryList">
            <h5>Materials</h5>
            <select class="form-control" id="editMatTypes" @change="onChange()" v-model="selected">
                <option value="none" disabled="" selected="">Choose One Material</option>
                
                 <optgroup 
                     v-for="(category, key) in materials"
                   :key="key"
                 :label="category.name">
                 <option 
                   v-for="(subcategory, subcatKey) in category.subcategories"
                  :key="subcatKey"
                  :value="subcategory.id"
                 >
                 {{subcategory.name}}
                 </option>
                 
                 </optgroup>
                 </select>
                 </div>

        </div>

         <div class="row" id="process-service-connection">   
        <div class="col-md-6 categoryList">
        <h3>Processes Connections</h3>
        </div>
         <div class="col-md-6 categoryList">
        <h3>Services Connections</h3>
        </div>
        </div>
       <div class="row" >   
        <div class="col-md-6 categoryList">
            <div style="overflow-y: scroll; height:400px;">
                <ul class="list-group navList" id="editServProcCons">

                    <div 
                 v-for="(category, key) in processes"
                :key="key"
                 >
                <li class="input-group" name="process" :value="category.id"><strong>{{category.name}}</strong></li>
                <li 
                v-for="(subcategory, subcatKey) in category.subcategories"
                :key="subcatKey"
                class="catMargins">
                    <div class="checkbox">
                    <label>
                        <input type="checkbox" name="subProcess" v-model="spids" :value="subcategory.id">
                        {{subcategory.name}}
                    </label>
                    </div>
                </li>
                

                 </div>
                   </ul>
            </div>
            </div>
            
        <div class="col-md-6 categoryList">
            <div style="overflow-y: scroll; height:400px;">               
                <ul class="list-group navList" id="editMatServCons">
                    <div 
                 v-for="(category, key) in services"
                :key="key"
                 >
                <li class="input-group" name="service" :value="category.id"><strong>{{category.name}}</strong></li>
                <li 
                v-for="(subcategory, subcatKey) in category.subcategories"
                :key="subcatKey"
                class="catMargins">
                    <div class="checkbox">
                    <label>
                        <input type="checkbox" name="subService" v-model="ssids" :value="subcategory.id">
                        {{subcategory.name}}
                    </label>
                    </div>
                </li>
                

                 </div>
              </ul>
            </div>
             </div>
             </div>
             <div class="row">
            
            <div class="col-lg-4  col-lg-4 col-sm-6  buttonMargin">
                <p>
                     <button >Edit Material</button>
                </p>
            </div>
        </div>



        

        </div>
    <!-- </form> -->
</div>
</form>
    
</template>
<script>
export default {
  data() {
    return { spids: [], ssids: [], selected: "" };
  },
  methods: {
    validateBeforeSubmit: function(e) {
      e.preventDefault();
      let data = {
        resource: "materials",
        mid: this.selected,
        sid: this.ssids,
        pid: this.spids
      };
      this.$store
        .dispatch("changeSubResourceConnection", data)
        .then(response => {
          if (response.length > 0) {
            console.log("good morning");
            console.log(response);
            this.reloadResources();
            alert("Edit MaterialSuccess");
            this.okModal();
          } else {
            alert("Try Again edit material failed");
          }
        });
    },
    okModal() {
      this.$router.replace("/admin/edit");
    },
    onChange() {
      let data = { category: "mat", subcategoryId: this.selected };
      this.$store.dispatch("getRelatedProcesses", data).then(response => {
        this.spids = [];
        for (let tagId in response) {
          this.spids.push(response[tagId].subProcessId);
        }
      });
      this.$store.dispatch("getRelatedServices", data).then(response => {
        this.ssids = [];
        for (let tagId in response) {
          this.ssids.push(response[tagId].subServiceId);
        }
      });
    },
    reloadResources() {
      this.$store.dispatch("setResources");
    }
  },
  computed: {
    materials() {
      return this.$store.state.resources.resources.materials.categories;
    },
    processes() {
      return this.$store.state.resources.resources.processes.categories;
    },
    services() {
      return this.$store.state.resources.resources.services.categories;
    }
  }
};
</script>
<style>
#process-service-connection {
  margin-top: 2rem;
}
</style>
