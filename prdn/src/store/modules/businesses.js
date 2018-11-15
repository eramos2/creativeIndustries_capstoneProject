import Vue from 'vue';

const state = {
    /**  
     * Object that holds all businesses that are currently being displayed on page 
     */
    businesses: {

    },
    /** 
     * Holds business object for current business being displayed 
     */
    currentBusiness: {

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
    /** 
     * returns current business
     * @returns {object} state.currentBusiness
     */
    getCurrentBusiness: state => {
        //console.log('inside getResourceCategories ');
        //console.log(payload);
        //console.log(state.resources[payload].categories);
        return state.currentBusiness;
    },
    /** 
     * returns current business subcategories
     * @returns {object} subcategories
     */
    getCurrentBusinessSubCategories: state => {
        //console.log('inside getResourceCategories ');
        //console.log(payload);
        //console.log(state.resources[payload].categories);


        return state.currentBusiness.subcategories;
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
        console.log(data);
        state.businesses = data

        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.businesses = { ...state.businesses
        }



    },
    /**
     * Sets state.currentBusiness with the given business
     * @param {Object} data - Server response containing the business. 
     */
    setCurrentBusiness: (state, data) => {

        state.currentBusiness = data;

        state.currentBusiness['subcategories'] = {}

        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.currentBusiness = { ...state.currentBusiness
        }
        //console.log("After commiting currentBusiness in business.js");
        //console.log(state.currentBusiness);


    },
    /**
     * Sets state.currentBusiness with the given full business profile
     * @param {Object} data - Server response containing the full business. 
     */
    setFullCurrentBusiness: (state, data) => {
        //Get business images into one array
        let images = [];
        for (let key in data) {
            images.push({
                image: data[key].imageData,
                imageName: data[key].imageName,
                imageType: data[key].imageType
            });
        }

        state.currentBusiness = data['0'];
        state.currentBusiness['images'] = images
        state.currentBusiness['subcategories'] = {}

        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.currentBusiness = { ...state.currentBusiness
        }
        //console.log("After commiting currentBusiness in business.js");
        //console.log(state.currentBusiness);


    },
    /**
     * Sets state.currentBusiness.subservices with the given subservices
     * @param {Object} data - Server response containing the subservices. 
     */
    setCurrentBusinessSubServices: (state, data) => {
        var subcats = data;
        for (var category in subcats) {
            //console.log("category");
            //console.log(category);
            subcats[category].resName = "services";
            subcats[category].catName = subcats[category].serviceName;
            subcats[category].name = subcats[category].subServiceName;
        }

        state.currentBusiness['subservices'] = subcats;





        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.currentBusiness = { ...state.currentBusiness
        }
        //console.log(state.currentBusiness);


    },
    /**
     * Sets state.currentBusiness.subprocesses with the given subprocesses
     * @param {Object} data - Server response containing the subprocesses. 
     */
    setCurrentBusinessSubProcesses: (state, data) => {

        var subcats = data;
        for (var category in subcats) {
            //console.log("category");
            //console.log(category);
            subcats[category].resName = "processes";
            subcats[category].catName = subcats[category].processName;
            subcats[category].name = subcats[category].subProcessName;
        }

        state.currentBusiness['subprocesses'] = subcats;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.currentBusiness = { ...state.currentBusiness
        }
        //console.log(state.currentBusiness);


    },
    /**
     * Sets state.currentBusiness.submaterials with the given submaterials
     * @param {Object} data - Server response containing the submaterials. 
     */
    setCurrentBusinessSubMaterials: (state, data) => {
        var subcats = data;
        for (var category in subcats) {
            //console.log("category inside ");
            //console.log(category);
            subcats[category].resName = "materials";
            subcats[category].catName = subcats[category].materialName;
            subcats[category].name = subcats[category].subMaterialName;
        }

        state.currentBusiness['submaterials'] = subcats;


        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.currentBusiness = { ...state.currentBusiness
        }
        //console.log(state.currentBusiness);


    },
    /**
     * Sets state.currentBusiness.submaterials with the given submaterials
     * @param {Object} data - Server response containing the submaterials. 
     */
    setCurrentBusinessSubCategories: (state) => {

        let subcategories = {};

        let submaterials = state.currentBusiness.submaterials;
        let subprocesses = state.currentBusiness.subprocesses;
        let subservices = state.currentBusiness.subservices;
        for (let key in submaterials) {
            subcategories[
                submaterials[key].subMaterialName.replace(/ +/g, "").toLowerCase()
            ] = submaterials[key];
        }
        for (let key in subprocesses) {
            subcategories[
                subprocesses[key].subProcessName.replace(/ +/g, "").toLowerCase()
            ] = subprocesses[key];
        }
        for (let key in subservices) {
            subcategories[
                subservices[key].subServiceName.replace(/ +/g, "").toLowerCase()
            ] = subservices[key];
        }
        state.currentBusiness['subcategories'] = subcategories;



        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.currentBusiness = { ...state.currentBusiness
        }
        //console.log(state.currentBusiness);


    }

}

const actions = {

    /** 
     * Gets businesses that match the keyword or all if no kword is given 
     * @param {String} kword - String to search business by 
     */
    getBusinessesByName: (context, kword) => {
        Vue.http
            .get("", {
                params: {
                    endpoint: 'company',
                    code: '5', //code for getting all businesses
                    keyword: kword
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                context.commit('setBusinesses', data.resp);
            });



    },

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
                context.commit('setBusinesses', data.resp);
            });
    },
    /** 
     * Gets a business and sets state.currentBusiness with it
     * 
     * @param {String} compName - Company name, searches db with it
     * @constant {String} endpoint - To look for companies
     * @constant {String} code - Code to look for a company by name
     */
    setCurrentBusiness: (context, compName) => {
        state.currentBusiness = {};
        let code = '5';
        let kword = compName;
        let endpoint = 'company'

        // Query the server for a business with name like the given keyword
        Vue.http
            .get("", {
                params: {
                    endpoint: endpoint,
                    code: code,
                    keyword: kword //business name
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                let dataObject = Object.assign({}, data.resp) //Convert received Array into an Object

                context.commit('setCurrentBusiness', dataObject['0']); //get the wrapped object

                return state.currentBusiness.companyId;

            }).then(compId => {

                /** 
                 * Get full business profile
                 */
                Vue.http
                    .get("", {
                        params: {
                            endpoint: endpoint,
                            code: '7', //code to get business profile
                            cid: compId //business Id
                        }
                    })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        let dataObject = Object.assign({}, data.resp) //Convert received Array into an Object
                        console.log(dataObject);
                        context.commit('setFullCurrentBusiness', dataObject); //get the wrapped object

                        return state.currentBusiness.companyId;

                    }).then(compId => {
                        /**  
                         * Get subproceses, submaterials, subservices of the current business
                         */
                        Vue.http
                            .get("", {
                                params: {
                                    endpoint: endpoint,
                                    code: '2', //Code for getting all subservices of a business
                                    cid: compId //business id
                                }
                            })
                            .then(response => {
                                return response.json();
                            })
                            .then(data => {

                                let dataObject = Object.assign({}, data.resp) //Convert received Array into an Object
                                context.commit('setCurrentBusinessSubServices', dataObject);
                            }).then(() => {
                                Vue.http
                                    .get("", {
                                        params: {
                                            endpoint: endpoint,
                                            code: '3', //Code for getting all subproceses of a business
                                            cid: compId //business id
                                        }
                                    })
                                    .then(response => {
                                        return response.json();
                                    })
                                    .then(data => {
                                        let dataObject = Object.assign({}, data.resp) //Convert received Array into an Object
                                        context.commit('setCurrentBusinessSubProcesses', dataObject);
                                    }).then(() => {
                                        Vue.http
                                            .get("", {
                                                params: {
                                                    endpoint: endpoint,
                                                    code: '4', //Code for getting all submaterials of a business
                                                    cid: compId //business id
                                                }
                                            })
                                            .then(response => {
                                                return response.json();
                                            })
                                            .then(data => {
                                                let dataObject = Object.assign({}, data.resp) //Convert received Array into an Object
                                                context.commit('setCurrentBusinessSubMaterials', dataObject);
                                            }).then(() => {
                                                //console.log("Set CurrentBusinessSubCategories");
                                                context.commit('setCurrentBusinessSubCategories');
                                            });
                                    });
                            });


                    });
            });
    },

    /**
     * Gets businesses that offer the subcategory item and sets state.businesses with this companies
     * @param {Object} payload - Contains resource name (rK) and subcategory name (scK)
     */
    setSubCategoryBusinesses: (context, payload) => {
        state.businesses = {};
        let code;
        //console.log("setSubCategoryBusinesses");
        //console.log(payload.scK);
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
                //console.log('Inside setSubCategoryBusinesses in businesses.js');

                let dataObject = Object.assign({}, data.resp) //Convert received Array into an Object
                //console.log(dataObject);
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