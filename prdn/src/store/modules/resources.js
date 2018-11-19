import Vue from 'vue';
let serverfile = "prds.php";

const state = {
    resources: {
        materials: {
            name: 'Materials',
            categories: {}
        },
        services: {
            name: 'Services',
            categories: {}
        },
        processes: {
            name: 'Processes',
            categories: {}
        }
    },
    resourceSearchResult: {}
};

const getters = {
    getResources: state => {
        //console.log('test Get Resources');
        //console.log(state.resources);
        return state.resources;
    },
    getResourceCategories(state) {
        return (payload) => {
            //console.log('inside getResourceCategories ');
            //console.log(payload);
            //console.log(state.resources[payload].categories);
            return state.resources[payload].categories;
        }
    },
    getCategorySubCategories(state) {
        return (payload) => {
            //console.log('inside getCategorySubCategories ');
            //console.log(payload.cK);
            payload.cK = payload.cK.replace(/ +/g, "%20");
            //console.log(state.resources[payload.rK].categories[payload.cK]);
            if (typeof state.resources[payload.rK].categories[payload.cK] === 'undefined') {
                return {};
            } else {
                return state.resources[payload.rK].categories[payload.cK].subcategories;

            }
        }
        //console.log('test Get Resources');
        //console.log(state.resources);
        //return state.resources;
    }
}

const mutations = {
    setMaterials: (state, data) => {
        let categories = {};
        for (var category in data.resp) {
            let categoryName = data.resp[category].materialName;
            let categoryKey = data.resp[category].materialName.replace(/ +/g, "%20").toLowerCase();
            if (typeof categories[categoryKey] === "undefined") {
                categories[categoryKey] = {
                    id: data.resp[category].materialId,
                    name: categoryName,
                    image: data.resp[category].catImage,
                    subcategories: {}
                };
            }
            let subcategoryKey = data.resp[category].subMaterialName.replace(/ +/g, "%20").toLowerCase();
            let subcategoryName = data.resp[category].subMaterialName;
            categories[categoryKey].subcategories[subcategoryKey] = {
                id: data.resp[category].subMaterialId,
                name: subcategoryName,
                image: data.resp[category].subcatImage
            }
        }

        // for (var category in data.resp) {
        //     let categoryName = data.resp[category].materialName;
        //     let categoryKey = data.resp[category].materialName.replace(/ +/g, "").toLowerCase();
        //     if (typeof state.resources.materials.categories[categoryKey] === "undefined") {
        //         state.resources.materials.categories[categoryKey] = {
        //             id: data.resp[category].materialId,
        //             name: categoryName,
        //             subcategories: {}
        //         };
        //     }
        //     let subcategoryKey = data.resp[category].subMaterialName.replace(/ +/g, "").toLowerCase();
        //     let subcategoryName = data.resp[category].subMaterialName;
        //     state.resources.materials.categories[categoryKey].subcategories[subcategoryKey] = {
        //         id: data.resp[category].subMaterialId,
        //         name: subcategoryName
        //     }
        // }
        state.resources.materials.categories = categories;
        state.resources = { ...state.resources
        }
    },
    setProcesses: (state, data) => {
        for (var category in data.resp) {
            let categoryName = data.resp[category].processName;
            let categoryKey = data.resp[category].processName.replace(/ +/g, "%20").toLowerCase();
            if (typeof state.resources.processes.categories[categoryKey] === "undefined") {
                state.resources.processes.categories[categoryKey] = {
                    id: data.resp[category].processId,
                    name: categoryName,
                    image: data.resp[category].catImage,
                    subcategories: {}
                };
            }
            let subcategoryKey = data.resp[category].subProcessName.replace(/ +/g, "%20").toLowerCase();
            let subcategoryName = data.resp[category].subProcessName;
            state.resources.processes.categories[categoryKey].subcategories[subcategoryKey] = {
                id: data.resp[category].subProcessId,
                name: subcategoryName,
                image: data.resp[category].subcatImage
            }
        }
        state.resources = { ...state.resources
        }
    },
    setServices: (state, data) => {
        for (var category in data.resp) {
            let categoryName = data.resp[category].serviceName;
            let categoryKey = data.resp[category].serviceName.replace(/ +/g, "%20").toLowerCase();
            if (typeof state.resources.services.categories[categoryKey] === "undefined") {
                state.resources.services.categories[categoryKey] = {
                    id: data.resp[category].serviceId,
                    name: categoryName,
                    image: data.resp[category].catImage,
                    subcategories: {}
                };
            }
            let subcategoryKey = data.resp[category].subServiceName.replace(/ +/g, "%20").toLowerCase();
            let subcategoryName = data.resp[category].subServiceName;
            state.resources.services.categories[categoryKey].subcategories[subcategoryKey] = {
                id: data.resp[category].subServiceId,
                name: subcategoryName,
                image: data.resp[category].subcatImage
            }
        }
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.resources = { ...state.resources
        }
    },
    /**   
     * Sets state.resourceSearchResult to the received data 
     * @param {object} data - Contains the result of the resource search
     */
    setResourceSearchResult: (state, data) => {
        state.resourceSearchResult = data;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.resourceSearchResult = { ...state.resourceSearchResult
        }
        console.log(state.resourceSearchResult);

    }

}

const actions = {
    setResources: (context) => {
        state.resources = {
            materials: {
                name: 'Materials',
                categories: {}
            },
            services: {
                name: 'Services',
                categories: {}
            },
            processes: {
                name: 'Processes',
                categories: {}
            }
        };
        Vue.http
            .get(serverfile, {
                params: {
                    endpoint: 'material',
                    code: '2'
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                //console.log(data.resp);
                context.commit('setMaterials', data);
            });
        Vue.http
            .get(serverfile, {
                params: {
                    endpoint: 'service',
                    code: '2'
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                context.commit('setServices', data);
            });
        Vue.http
            .get(serverfile, {
                params: {
                    endpoint: 'process',
                    code: '2'
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                context.commit('setProcesses', data);
            });
    },
    /**  
     * Gets sub material|service|process by name 
     * @param {object} data - contains endpoint (material, service, process) and its name
     */
    getSubResourceByName: (context, data) => {
        let endpnt;
        let name = data.name;

        if (data.resource == 'materials') {
            endpnt = 'material';
        } else if (data.resource == 'services') {
            endpnt = 'service'
        } else {
            endpnt = 'process'
        }

        Vue.http
            .get(serverfile, {
                params: {
                    endpoint: endpnt,
                    code: '0', // get sub resource by name 
                    keyword: name
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data.resp);
                context.commit('setResourceSearchResult', data.resp);
            });
    }

}

export default {
    state,
    getters,
    mutations,
    actions,
}