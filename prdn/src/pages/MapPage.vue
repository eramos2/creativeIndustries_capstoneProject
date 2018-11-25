<template>
<div class="container">
    <!-- Start Resources List Row -->
    <div id="MapResources" class="row">
        <!-- Materials List -->
        <map-resource
            :resource="materials"  
        >
        </map-resource>
        <!-- Processes List -->
        <map-resource 
            :resource="processes"  
        >
        </map-resource>
        <!-- Services List -->
        <map-resource
            :resource="services"  
        >
        </map-resource>
    </div>
    <!-- End Resources ListRow -->

    <!-- Start Map Row -->
    <div class="row">
        <!-- Google Maps -->
        <div id="googleMainMap"></div>
    </div>
    <!-- End Map Row -->
</div>

    
</template>

<script>
import MapResource from "../components/map/MapResource.vue";

export default {
  components: {
    mapResource: MapResource
  },
  data() {
    return {
      myMarker: "",
      mainMap: ""
    };
  },
  computed: {
    markers() {
      console.log("Hellouuuu");
      return this.$store.state.currentBusinesses;
      var marker = new google.maps.Marker({
        position: { lat: 18.37195, lng: -65.98437 },
        title: "Hello World!"
      });
      marker.setMap(this.mainMap);
    },
    materials() {
      return this.$store.state.resources.resources.materials;
    },
    services() {
      return this.$store.state.resources.resources.services;
    },
    processes() {
      return this.$store.state.resources.resources.processes;
    }
  },
  mounted() {
    console.log(this.$store.state.resources.resources);
    /**Initialize the map when component is mounted */
    this.myMarker = new google.maps.LatLng(18.1987193, -66.3526748); // PR marker
    let mainMap = new google.maps.Map(
      document.getElementById("googleMainMap"),
      {
        zoom: 9,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        center: this.myMarker,
        //mapTypeId: google.maps.MapTypeId.ROADMAP
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "styled"]
        }
      }
    );
    var styles = [
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#FFFFFF"
          }
        ]
      }
    ];
    var styledMapType = new google.maps.StyledMapType(styles, {
      map: mainMap,
      name: "Styled Map"
    });

    mainMap.mapTypes.set("styled", styledMapType);
    mainMap.setMapTypeId("styled");
    this.$store.dispatch("setMainMap", mainMap);
  }
};
</script>

<style>
#googleMainMap {
  width: 900px; /* Need to add portability*/
  height: 380px;
  margin-left: auto; /* To center the map */
  margin-right: auto;
  position: relative;
  overflow: hidden;
  background-color: white;
}

.map-resource {
  margin-left: auto; /* To center the map */
  margin-right: auto;
}
</style>
