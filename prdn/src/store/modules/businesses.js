import Vue from 'vue';

const state = {
    businesses: {

    }
};

const getters = {
    getBusinesses: state => {
        //console.log('test Get Resources');
        //console.log(state.resources);
        return state.businesses;
    },
    getBusiness(state) {
        return (payload) => {
            //console.log('inside getResourceCategories ');
            //console.log(payload);
            //console.log(state.resources[payload].categories);
            return state.businesses[payload];
        }
    },
    getBusinessCategorySubCategories(state) {
        return (payload) => {
            //console.log('test getCategorySubCategories');
            //console.log(payload);
            //console.log(state.resources[payload.rK].categories[payload.cK]);
            //console.log("Before returning subcategories inside getCategorySubCategories");
            let category = state.resources[payload.rK].categories[payload.cK];
            //console.log(category);
            if (typeof category === "undefined") {
                return {};
            } else {
                return category.subcategories;
            }
        }
    }
}

const mutations = {
    /**
     * Sets state.businesses with the given businesses
     * @param {Object} data - Server response containing the businesses. 
     */
    setBusinesses: (state, data) => {
        state.businesses = data

        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.businesses = { ...state.businesses
        }



    }

}

const actions = {

    /** Gets all businesses and sets state.businesses with this companies */
    setBusinesses: (context) => {
        Vue.http
            .get("", {
                params: {
                    endpoint: 'company',
                    code: '0' //code for getting all businesses
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                //console.log(data.resp);
                context.commit('setBusinesses', data);
            });
    },

    /**
     * Gets businesses that offer the subcategory item and sets state.businesses with this companies
     * @param {Object} payload - Contains resource name (rK) and subcategory name (scK)
     */
    setSubCategoryBusinesses: (context, payload) => {
        let code;

        if (payload.rK == 'processes') {
            code = '16'; //code for getting companies that offer subprocess by its name
        } else if (payload.rK == 'services') {
            code = '17'; //code for getting companies that offer subservice by its name
        } else if (payload.rK == 'materials') {
            code = '18'; //code for getting companies that offer submaterial by its name
        }
        // Query the server for businesses based on the subcategory name
        Vue.http
            .get("", {
                params: {
                    endpoint: 'company',
                    code: code,
                    scname: payload.scK //subcategory name
                }
            })
            .then(response => {
                //console.log("Inside json response of setSubCategoryBusinesses in businesses.js");
                //console.log(response);
                return response.json();
            })
            .then(data => {
                console.log('Inside setSubCategoryBusinesses in businesses.js');

                let dataObject = Object.assign({}, data.resp) //Convert received Array into an Object
                console.log(dataObject);
                context.commit('setBusinesses', dataObject);
            });
    }

}

export default {
    state,
    getters,
    mutations,
    actions,
}