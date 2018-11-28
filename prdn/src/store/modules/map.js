import Vue from 'vue';
let serverfile = "prds.php";

const state = {
    selectedResource: "",
    mainMap: [],
    mapMarkers: []
};

const getters = {};

const mutations = {
    setSelectedResource: (state, data) => {
        state.selectedResource = data;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.selectedResource = { ...state.selectedResource
        }
    },
    setMainMap: (state, data) => {
        state.mainMap[0] = data;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.mainMap = { ...state.mainMap
        }
    },
    setMapMarkers: (state, data) => {
        let mapMarkers = [];
        for (let markerData of data.resp) {
            var marker = new google.maps.Marker({
                position: {
                    lat: parseFloat(markerData.latitude),
                    lng: parseFloat(markerData.longitude)
                },
                title: "Hello World!"
            });
            marker.setMap(state.mainMap[0]);
            mapMarkers.push(marker);
        }

        state.mapMarkers = mapMarkers;
        // for (let markerData of data) {
        //     let marker = new google.maps.Marker({
        //         position: {
        //             lat: 18.37195,
        //             lng: -65.98437
        //         },
        //         title: "Hello World!"
        //     });
        //     marker.setMap(state.mainMap);
        //}

        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        //state.mapMarkers = { ...state.mapMarkers
    },
    /** Clears all map markers and sets state.mapMarkers to an empty array */
    clearMapMarkers: (state) => {
        for (let marker of state.mapMarkers) {

            marker.setMap(null);
        }
        state.mapMarkers = [];
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.mapMarkers = { ...state.mapMarkers
        }
    },
    clearSelectedResource: (state) => {
        state.selectedResource = "";
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.selectedResource = { ...state.selectedResource
        }
    }
};

const actions = {
    /**  
     * Set selectedResource to the given name "materials|processes|services"
     * 
     */
    setSelectedResource: (context, data) => {
        context.commit("setSelectedResource", data);
    },
    /**  
     * clear selectedResource
     * 
     */
    clearSelectedResource: (context) => {
        context.commit("clearSelectedResource");
    },
    /**  
     * Set mainMap to the given name map Object
     * 
     */
    setMainMap: (context, data) => {
        context.commit("setMainMap", data);
    },
    /**  
     * Set mapMarkers to the given name map Object
     * 
     */
    setMapMarkers: (context, data) => {
        context.commit("setMapMarkers", data);
    },
    /**  
     * Clear mapMarkers
     * 
     */
    clearMapMarkers: (context) => {
        context.commit("clearMapMarkers");
    },


};

export default {
    state,
    getters,
    mutations,
    actions,
}