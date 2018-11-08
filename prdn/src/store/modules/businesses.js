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
    setBusinesses: (state, data) => {
        state.businesses = data

        console.log("Inside mutations setBusinesses in businesses.js");
        console.log(state.businesses);
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.businesses = { ...state.businesses
        }
        console.log(state.businesses);

    }

}

const actions = {
    setBusinesses: (context) => {
        Vue.http
            .get("", {
                params: {
                    endpoint: 'company',
                    code: '0'
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
    setSubCategoryBusinesses: (context, payload) => {
        //console.log('Entered setSubCategoryBusinesses in businesses.js');
        //console.log(payload);
        let code;
        if (payload.rK == 'processes') {
            code = '13'; //code for subproccesses
        } else if (payload.rK == 'services') {
            code = '14'; //code for subservices
        } else if (payload.rK == 'materials') {
            console.log("Entered materials if");
            code = '15'; //code for submaterials
        }
        Vue.http
            .get("", {
                params: {
                    endpoint: 'company',
                    code: code,
                    sid: payload.scId //subcategory ID
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