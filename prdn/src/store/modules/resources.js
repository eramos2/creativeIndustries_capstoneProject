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
    resourceSearchResult: {},
    addedNewResource: {},
    changedSubResourceCon: {},
    subcatConnections: {
        submaterials: {},
        subprocesses: {},
        subservices: {}
    },

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

    },
    /**  
     * Sets state.addedNewResource value to 1 if sucessefully added new resource to db -1 otherwise
     */
    confirmAddedNewResource: (state, data) => {
        //console.log(data[0].number);
        state.addedNewResource = {
            value: data[0].number
        };
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.addedNewResource = { ...state.addedNewResource
        }
        //console.log(state.addedNewResource);
    },
    setRelatedProcesses: (state, data) => {
        state.subcatConnections['subprocesses'] = data;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.subcatConnections['subprocesses'] = { ...state.subcatConnections['subprocesses']
        }

    },
    setRelatedServices: (state, data) => {
        state.subcatConnections['subservices'] = data;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.subcatConnections['subservices'] = { ...state.subcatConnections['subservices']
        }
    },
    setRelatedMaterials: (state, data) => {
        state.subcatConnections['submaterials'] = data;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.subcatConnections['submaterials'] = { ...state.subcatConnections['submaterials']
        }

    },
    confirmChangedSubResourceCon: (state, data) => {
        //console.log(data[0].number);
        state.changedSubResourceCon = {
            value: data[0].number
        };
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.changedSubResourceCon = { ...state.changedSubResourceCon
        }
        //console.log(state.addedNewResource);
    }


}

const actions = {
    /** 
     * Adds a new sub resource to the system with any connections
     * @param {object} data - contains resource name, categoryId, subcategoryName, and array with the ids of any connections it has, if it doesnt have any connections it should set it to an empty array
     *  
     */
    addNewSubResource: (context, data) => {
        state.addedNewResource = {}; //reinitalize flag 
        let prms;
        let code = '6';

        if (data.resource == 'materials') {
            prms = {
                endpoint: 'material',
                code: code,
                multi: true,
                du: true,
                smid: data.mid, //categoryId, not an array
                ssid: data.sid,
                spid: data.pid,
                subName: data.subresName,
                name: data.resName
            };
        } else if (data.resource == 'services') {
            prms = {
                endpoint: 'service',
                code: code,
                multi: true,
                du: true,
                ssid: data.sid, //categoryId, not an array
                smid: data.mid,
                spid: data.pid,
                subName: data.subresName,
                name: data.resName
            };
        } else {
            prms = {
                endpoint: 'process',
                code: code,
                multi: true,
                du: true,
                spid: data.pid, //categoryId, not an array
                smid: data.mid,
                ssid: data.sid,
                subName: data.subresName,
                name: data.resName
            };
        }

        Vue.http
            .get(serverfile, {
                params: prms
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                //console.log(data.resp[0].number);
                context.commit('confirmAddedNewResource', data.resp);
            });
    },
    /** 
     * Adds a new resource to the system with a subresource and any connections
     * @param {object} data - contains resource name, categoryName subcategoryName, and array with the ids of any connections it has, if it doesnt have any connections it should set it to an empty array
     *  
     */
    addNewResource: (context, data) => {
        state.addedNewResource = {}; //reinitalize flag 
        let prms;
        let code = '7';

        if (data.resource == 'materials') {
            prms = {
                endpoint: 'material',
                code: code,
                multi: true,
                du: true,
                ssid: data.sid,
                spid: data.pid,
                subName: data.subresName,
                name: data.resName
            };
        } else if (data.resource == 'services') {
            prms = {
                endpoint: 'service',
                code: code,
                multi: true,
                du: true,
                smid: data.mid,
                spid: data.pid,
                subName: data.subresName,
                name: data.resName
            };
        } else {
            prms = {
                endpoint: 'process',
                code: code,
                multi: true,
                du: true,
                smid: data.mid,
                ssid: data.sid,
                subName: data.subresName,
                name: data.resName
            };
        }

        Vue.http
            .get(serverfile, {
                params: prms
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                //console.log(data.resp[0].number);
                context.commit('confirmAddedNewResource', data.resp);
            });
    },
    /**   
     * Clears state.resources and procees to
     * Get all resources and subresources then sets state.resources 
     */
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
    },
    /**   
     * Gets related process for the given category and subcategory
     * @param {object} data - contains the category('mat'|'serv'|'proc') and subcategory Id we want to find process connections of 
     */
    getRelatedProcesses: (context, data) => {
        state.subcatConnections['subprocesses'] = {}
        let endpnt = 'map';
        let pvtCol = data.category; // With wath category we want to find the conections
        let subcat = data.subcategoryId; //The subcategory id we want to find it relations of
        Vue.http
            .get(serverfile, {
                params: {
                    endpoint: endpnt,
                    code: '5', // get related process
                    id: subcat,
                    pivot_column: pvtCol
                }
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log(data.resp);
                context.commit('setRelatedProcesses', data.resp);
            });

    },
    /**   
     * Gets related servicesfor the given category and subcategory
     * @param {object} data - contains the category('mat'|'proc') and subcategory Id we want to find services connections of 
     */
    getRelatedServices: (context, data) => {
        state.subcatConnections['subservices'] = {}
        let endpnt = 'map';
        let pvtCol = data.category; // With wath category we want to find the conections
        let subcat = data.subcategoryId; //The subcategory id we want to find it relations of
        Vue.http
            .get(serverfile, {
                params: {
                    endpoint: endpnt,
                    code: '6', // get related process
                    id: subcat,
                    pivot_column: pvtCol
                }
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log(data.resp);
                context.commit('setRelatedServices', data.resp);
            });

    },
    /**   
     * Gets related materials for the given category and subcategory
     * @param {object} data - contains the category('serv'|'proc') and subcategory Id we want to find material connections of 
     */
    getRelatedMaterials: (context, data) => {
        state.subcatConnections['submaterials'] = {}
        let endpnt = 'map';
        let pvtCol = data.category; // With wath category we want to find the conections
        let subcat = data.subcategoryId; //The subcategory id we want to find it relations of
        Vue.http
            .get(serverfile, {
                params: {
                    endpoint: endpnt,
                    code: '7', // get related process
                    id: subcat,
                    pivot_column: pvtCol
                }
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log(data.resp);
                context.commit('setRelatedMaterials', data.resp);
            });

    },
    /**     
     * Changes subresource connections
     * @param {object} data - contains resource name['materials'|'services'|'processes'],subcategoryid, and array with the ids of any connections it has, if it doesnt have any connections it should set it to an empty array
     */
    changeSubResourceConnection: (context, data) => {
        state.changedSubResourceCon = {}; //reinitalize flag 
        let prms;
        let code = '5';

        if (data.resource == 'materials') {
            prms = {
                endpoint: 'material',
                code: code,
                multi: true,
                du: true,
                smid: data.mid, //subcategoryId, not an array
                ssid: data.sid,
                spid: data.pid,
            };
        } else if (data.resource == 'services') {
            prms = {
                endpoint: 'service',
                code: code,
                multi: true,
                du: true,
                ssid: data.sid, //subcategoryId, not an array
                smid: data.mid,
                spid: data.pid,
            };
        } else {
            prms = {
                endpoint: 'process',
                code: code,
                multi: true,
                du: true,
                spid: data.pid, //subcategoryId, not an array
                smid: data.mid,
                ssid: data.sid,
            };
        }
        Vue.http
            .get(serverfile, {
                params: prms
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                //console.log(data.resp[0].number);
                context.commit('confirmChangedSubResourceCon', data.resp);
            });
    }

}

export default {
    state,
    getters,
    mutations,
    actions,
}