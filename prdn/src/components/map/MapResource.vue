<template>
<div class="map-resource">
    <h6>{{mapResourceName}}</h6>
    <div class="row">
        <ul>
            <li
                v-for="(category, key) in mapResourceCategories"
                :key="key"
            >
            
                <!-- Resource Categories -->
                <a  
                    class="" 
                    data-toggle="collapse" 
                    :href="'#mapResource'+noWhiteSpace(category)" 
                    role="button" 
                    aria-expanded="false"  
                    :aria-controls="'mapResource'+noWhiteSpace(category)"
                    v-show="isCatConnection(mapResourceName.toLowerCase(), category.name, category.subcategories)"
                >
                    {{category.name}}
                </a>
               
                <!-- Collapsable Row -->
                <div class="row">
                    <div class="collapse" 
                    :id="'mapResource'+noWhiteSpace(category)"
                    >
                        <!-- Resource Sub Categories -->
                        <button 
                            
                            type="button"
                            v-for="(subcategory, key) in category.subcategories"
                            :key="key"
                            class="mapResourceSubCat btn btn-link btn-block"
                            :subcatid="mapResourceName.toLowerCase()+subcategory.id"
                            v-on:click="
                            showBusinesses(mapResourceName, subcategory.name);
                            showConections(mapResourceName, category.name, subcategory.id);
                            "
                            v-show="isConnection(mapResourceName, subcategory.id)"
                            
                        >
                            {{subcategory.name}}
                        </button>
                    </div>
                </div>
            </li>
            
        </ul>
    </div>
    
</div>
       
        
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["resource"],
  data() {
    return {
      showSubCat: false
    };
  },
  methods: {
    ...mapActions(["setSubCategoryBusinesses", "clearMapMarkers"]),
    isSelected(catName) {
      console.log("TEsting");
      return true;
    },
    isCatConnection(resource, catName, subcategories) {
      let selectedResource = this.$store.state.map.selectedResource;
      let subcatCounter = 0;
      if (Object.keys(selectedResource).length == 0) {
        console.log(
          "Entered isCatConnection true nothing is selected returning true"
        );
        return true;
      } else if (selectedResource.categoryName == catName) {
        //category is parent of selected item
        return true;
      } else if (resource == "processes") {
        //console.log("Inside processes this is the resource:");
        //console.log(resource);
        //related subprocesses
        let subprocesses = this.$store.state.resources.subcatConnections
          .subprocesses;
        //console.log(subprocesses);
        for (let subprocess of subprocesses) {
          for (let subcatKey of Object.keys(subcategories)) {
            //This is a related sub resource
            if (subprocess.subProcessId == subcategories[subcatKey].id) {
              subcatCounter++;
            }
          }
        }
      } else if (resource == "services") {
        //console.log("Inside services this is the resource:");
        //console.log(resource);
        //related subservices
        let subservices = this.$store.state.resources.subcatConnections
          .subservices;
        //console.log(subservices);

        for (let subservice of subservices) {
          console.log(Object.keys(subcategories));
          for (let subcatKey of Object.keys(subcategories)) {
            //This is a related sub resource

            if (subservice.subServiceId == subcategories[subcatKey].id) {
              subcatCounter++;
            }
          }
        }
      } else if (resource == "materials") {
        //related subprocesses
        let submaterials = this.$store.state.resources.subcatConnections
          .submaterials;
        //console.log("submaterials");
        for (let submaterial of submaterials) {
          for (let subcatKey of Object.keys(subcategories)) {
            //This is a related sub resource
            if (submaterial.subMaterialId == subcategories[subcatKey].id) {
              subcatCounter++;
            }
          }
        }
      }
      console.log("This is the subcatCounter for: " + resource);

      console.log(subcatCounter);
      console.log(subcategories);
      if (subcatCounter > 0) {
        return true;
      } else {
        return false;
      }
    },
    isConnection(resource, subcategoryId) {
      //console.log("Inside is connetion");
      //console.log(this.connections);
      //console.log(subCatName);
      let test = this.connections(
        resource.toLowerCase(),

        subcategoryId
      );
      return test;
    },
    noWhiteSpace(category) {
      return category.name.replace(/\s/g, "");
    },
    showConections(resource, catName, subcatId) {
      //console.log("Inside Show conecctions");
      //console.log(this.$store.state.map.selectedResource);
      if (this.$store.state.map.selectedResource == "") {
        //If Item is selected and no previouse one is selected

        this.$store.dispatch("setSelectedResource", {
          resource: resource.toLowerCase(),
          categoryName: catName,
          subcategoryId: subcatId
        });
        //console.log("showConections");
        let data = { category: "", subcategoryId: subcatId };

        if (resource.toLowerCase() == "processes") {
          data.category = "proc";
          this.$store.dispatch("getRelatedMaterials", data);
          this.$store.dispatch("getRelatedServices", data);
        } else if (resource.toLowerCase() == "services") {
          data.category = "serv";
          this.$store.dispatch("getRelatedProcesses", data);
          this.$store.dispatch("getRelatedMaterials", data);
        } else if (resource.toLowerCase() == "materials") {
          data.category = "mat";
          this.$store.dispatch("getRelatedProcesses", data);
          this.$store.dispatch("getRelatedServices", data);
        }
        //Show all collapse Items
        $(".mapResourceSubCat").attr("disabled", true);
        console.log("Removin subcatid");
        console.log(resource + subcatId);
        $(
          '.mapResourceSubCat[subcatid="' +
            resource.toLowerCase() +
            subcatId +
            '"]'
        ).removeAttr("disabled");
        $(".collapse").addClass("show");
      } else {
        //If Item is selected again clear the selected resource
        //console.log("Inside Else of show Connections");
        $(".collapse").removeClass("show");
        $(".subcatSelected").removeClass("subcatSelected");
        $(".mapResourceSubCat").removeAttr("disabled");
        this.$store.state.map.selectedResource = "";
        this.$store.dispatch("clearResourceConnections");
      }

      //console.log(this.$store.state.resources.subcatConnections);
    },
    showBusinesses(category, subcategory) {
      //console.log("Carlos ya me puedo logear?");
      //console.log(subcategory);
      //console.log(category);
      if (this.$store.state.map.selectedResource == "") {
        let data = { rK: category, scK: subcategory };
        this.$store.dispatch("setSubCategoryBusinesses", data);
      } else {
        this.$store.dispatch("clearMapMarkers");
        this.$store.dispatch("clearBusinesses");
      }
    },
    connections(resource, subcategoryId) {
      //console.log("Inside Conecttions");

      let selectedResource = this.$store.state.map.selectedResource;

      if (Object.keys(selectedResource).length == 0) {
        //console.log(
        //  "Entered connections true nothing is selected returning true"
        //);
        return true;
      } else if (selectedResource.resource == resource) {
        //This is the selectedSubResource
        if (selectedResource.subcategoryId == subcategoryId) {
          console.log("Adding the key to the selected sub cat");
          $(
            '.mapResourceSubCat[subcatid="' + resource + subcategoryId + '"]'
          ).addClass("subcatSelected");
          return true;
        } else {
          //This was not the selectedSubResource
          return false;
        }
      } else if (resource == "processes") {
        //console.log("Inside processes this is the resource:");
        //console.log(resource);
        //related subprocesses
        let subprocesses = this.$store.state.resources.subcatConnections
          .subprocesses;
        //console.log(subprocesses);
        for (let subprocess of subprocesses) {
          if (subprocess.subProcessId == subcategoryId) {
            //console.log("Is related process");
            //console.log(subprocess.subProcessId);

            //item is related
            return true;
          }
        }
        //item is not related
        return false;
      } else if (resource == "services") {
        //console.log("Inside services this is the resource:");
        //console.log(resource);
        //related subservices
        let subservices = this.$store.state.resources.subcatConnections
          .subservices;
        //console.log(subservices);

        for (let subservice of subservices) {
          //console.log("This is the subservice");
          //console.log(subservice);
          if (subservice.subServiceId == subcategoryId) {
            //console.log("Is related service");
            //console.log(subservice.subServiceId);

            //item is related
            return true;
          }
        }
        //item is not related
        return false;
      } else if (resource == "materials") {
        //related subprocesses
        let submaterials = this.$store.state.resources.subcatConnections
          .submaterials;
        //console.log("submaterials");
        for (let submaterial of submaterials) {
          if (submaterial.subMaterialId == subcategoryId) {
            //console.log("Is related material");
            //console.log(submaterial.subMaterialId);

            //item is related
            return true;
          }
        }
        //item is not related
        return false;
      }
    }
  },
  computed: {
    showsubCats() {
      return this.showSubCat;
    },
    testConec() {
      console.log("test connections");
      console.log(this.$store.state.resources.subcatConnections);
    },
    mapResourceName() {
      return this.resource.name;
    },
    mapResourceCategories() {
      return this.resource.categories;
    }
  }
};
</script>


<style>
.map-resource {
  margin-left: auto; /* To center the map */
  margin-right: auto;
}
</style>

