import Vue from 'vue';

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
    }
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
            //console.log('test getCategorySubCategories');
            //console.log(payload);
            //console.log(state.resources[payload.rK].categories[payload.cK]);
            return state.resources[payload.rK].categories[payload.cK].subcategories;
        }
    }
}

const mutations = {
    setMaterials: (state, data) => {
        for (var category in data.resp) {
            let categoryName = data.resp[category].materialName;
            let categoryKey = data.resp[category].materialName.replace(/ +/g, "").toLowerCase();
            if (typeof state.resources.materials.categories[categoryKey] === "undefined") {
                state.resources.materials.categories[categoryKey] = {
                    id: data.resp[category].materialId,
                    name: categoryName,
                    subcategories: {}
                };
            }
            let subcategoryKey = data.resp[category].subMaterialName.replace(/ +/g, "").toLowerCase();
            let subcategoryName = data.resp[category].subMaterialName;
            state.resources.materials.categories[categoryKey].subcategories[subcategoryKey] = {
                id: data.resp[category].subMaterialId,
                name: subcategoryName
            }
        }
        state.resources = { ...state.resources
        }
    },
    setProcesses: (state, data) => {
        for (var category in data.resp) {
            let categoryName = data.resp[category].processName;
            let categoryKey = data.resp[category].processName.replace(/ +/g, "").toLowerCase();
            if (typeof state.resources.processes.categories[categoryKey] === "undefined") {
                state.resources.processes.categories[categoryKey] = {
                    id: data.resp[category].processId,
                    name: categoryName,
                    subcategories: {}
                };
            }
            let subcategoryKey = data.resp[category].subProcessName.replace(/ +/g, "").toLowerCase();
            let subcategoryName = data.resp[category].subProcessName;
            state.resources.processes.categories[categoryKey].subcategories[subcategoryKey] = {
                id: data.resp[category].subProcessId,
                name: subcategoryName
            }
        }
        state.resources = { ...state.resources
        }
    },
    setServices: (state, data) => {
        for (var category in data.resp) {
            let categoryName = data.resp[category].serviceName;
            let categoryKey = data.resp[category].serviceName.replace(/ +/g, "").toLowerCase();
            if (typeof state.resources.services.categories[categoryKey] === "undefined") {
                state.resources.services.categories[categoryKey] = {
                    id: data.resp[category].serviceId,
                    name: categoryName,
                    subcategories: {}
                };
            }
            let subcategoryKey = data.resp[category].subServiceName.replace(/ +/g, "").toLowerCase();
            let subcategoryName = data.resp[category].subServiceName;
            state.resources.services.categories[categoryKey].subcategories[subcategoryKey] = {
                id: data.resp[category].subServiceId,
                name: subcategoryName
            }
        }
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.resources = { ...state.resources
        }
    }

}

const actions = {
    setResources: (context) => {
        Vue.http
            .get("", {
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
            .get("", {
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
            .get("", {
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
    }

}

export default {
    state,
    getters,
    mutations,
    actions,
}