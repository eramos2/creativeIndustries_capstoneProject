import Vue from 'vue';
import {
    resolve
} from 'path';
import {
    stat
} from 'fs';
let serverfile = "prds.php";
let serverPath = "http://localhost:80/Server/prds.php";
//For production build
//let serverPath = "http://uprm.edu/creativeindustries/Server/prds.php";

const state = {
    /**  
     * Object that holds all businesses that are currently being displayed on page 
     */
    businesses: {

    },
    /**     
     *  Businesses that offer the current subcategory resource
     */
    subcatBusinesses: {

    },
    /** 
     * Holds business object for current business being displayed 
     */
    currentBusiness: {

    },
    businessesFlags: {
        //(1=success, 0=nothing happened, -1=failed)
        editedBusiness: "",
        addNewBusiness: "",
        removeSubmission: "",
        removeBusiness: ""


    }
}

const getters = {
    getBusinesses: state => {
        console.log('test Get Resources');
        console.log(state.businesses);
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
        console.log("mutation businesses");
        console.log(data);
        state.businesses = data

        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.businesses = {
            ...state.businesses
        }



    },
    /**
     * Sets state.subcatBusinesses with the given businesses
     * @param {Object} data - Server response containing the businesses of the subcategory resource. 
     */
    setSubcatBusinesses: (state, data) => {
        // console.log(data);
        //Adds the businesses(andtheir tags) that offer this subresource 

        let subcatbusinesses = {};


        //Get unique businesses]
        for (let business of Object.keys(data)) {
            if (typeof subcatbusinesses[data[business].companyId] === "undefined") {
                //This business is not in the subbusinesses array
                subcatbusinesses[data[business].companyId] = data[business];
            }
            
        }
        state.subcatBusinesses.businesses = subcatbusinesses;

        let categories = {};
        //Get tag categories unique keys and add them 
        //to state.subcatBusinesses.tagCategories each category contains the tags related to it
        // console.log(data);
        for (let company of Object.keys(data)) {
            // console.log(company);
            // console.log(data[company].tagCategory);
            // console.log(data[company].tagName);
            // console.log(data[company].companyName);
            // console.log(data[company].tagCategory != null);

            if (data[company].tagCategory != null && data[company].tagName != null) {
                let tagCategoryKey = data[company].tagCategory.replace(/ +/g, "%20").toLowerCase();
                if (typeof categories[tagCategoryKey] === "undefined") {
                    //This category is not in the categories dict
                    categories[tagCategoryKey] = {
                        name: data[company].tagCategory,
                        tags: {}
                    };
                }
                //Get tag categories and names unique keys and add them 

                let tagKey = data[company].tagName.replace(/ +/g, "%20").toLowerCase();
                if (typeof categories[tagCategoryKey].tags[tagKey] === "undefined") {
                    //This tagName is not in the categories[tagCategoryKey].tags dict
                    let tagName = data[company].tagName;
                    categories[tagCategoryKey].tags[tagKey] = {
                        id: data[company].tagId,
                        name: tagName,
                        category: data[company].tagCategory
                    }
                }
            }

        }
        console.log("Finished setting up tags");

        state.subcatBusinesses.tagCategories = categories;

        console.log("Finished setting up tag categories");

        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.subcatBusinesses = {
            ...state.subcatBusinesses
        }



    },
    /**Clear state.businesses */
    clearBusinesses: (state) => {
        state.businesses = {};
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.businesses = {
            ...state.businesses
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
        state.currentBusiness = {
            ...state.currentBusiness
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
        state.currentBusiness = {
            ...state.currentBusiness
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
        state.currentBusiness = {
            ...state.currentBusiness
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
        state.currentBusiness = {
            ...state.currentBusiness
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
        state.currentBusiness = {
            ...state.currentBusiness
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
        state.currentBusiness = {
            ...state.currentBusiness
        }
        //console.log(state.currentBusiness);


    },
    /** 
     * Set editBusiness flag
     */
    editBusinessInfo: (state, data) => {
        console.log(data);
        state.businessesFlags['editedBusiness'] = data['0'].number;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.businessesFlags = {
            ...state.businessesFlags
        }
        console.log(state.businessesFlags);
    },
    /** 
     * Set addNewBusiness flag
     */
    addNewBusiness: (state, data) => {
        console.log(data);
        state.businessesFlags['addNewBusiness'] = data[0].number;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.businessesFlags = {
            ...state.businessesFlags
        }
        console.log(state.businessesFlags);
    },
    /** 
     * Set removeSubmission flag
     */
    removeSubmission: (state, data) => {
        console.log(data);
        state.businessesFlags['removeSubmission'] = data['0'].number;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.businessesFlags = {
            ...state.businessesFlags
        }
        console.log(state.businessesFlags);
    },
    /** 
     * Set removeBusiness flag
     */
    removeBusiness: (state, data) => {
        console.log(data);
        state.businessesFlags['removeBusiness'] = data['0'].number;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.businessesFlags = {
            ...state.businessesFlags
        }
        console.log(state.businessesFlags);
    },
    /**      
     * Set currentBusiness tags with given data
     */
    setCurrentBusinessTags: (state, data) => {
        state.currentBusiness['tags'] = data;

        state.currentBusiness = {
            ...state.currentBusiness
        }
    }
}

const actions = {

    /** 
     * Gets businesses that match the keyword or all businesses if no kword is given 
     * @param {String} kword - String to search business by 
     */
    getBusinessesByName: (context, kword) => {
        Vue.http
            .get(serverfile, {
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
            .get(serverfile, {
                params: {
                    endpoint: 'company',
                    code: '0' //code for getting all businesses
                }
            })
            .then(response => {
                console.log("Business response");

                return response.json();
            })
            .then(data => {
                console.log(data);
                context.commit('setBusinesses', data.resp);
                console.log("After comiting businesses");
            });
    },
    /** Clear state.businesses */
    clearBusinesses: (context) => {
        context.commit("clearBusinesses");
    },
    /** 
     * Gets a business and sets state.currentBusiness with it
     * 
     * @param {String} compName - Company name, searches db with it
     * @constant {String} endpoint - To look for companies
     * @constant {String} code - Code to look for a company by name
     */
    setCurrentBusiness: (
        context, compName) => {
        state.currentBusiness = {};
        let code = '5';
        let kword = compName;
        let endpoint = 'company'

        // Query the server for a business with name like the given keyword
        return Vue.http
            .get(serverfile, {
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
                return Vue.http
                    .get(serverfile, {
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
                        //console.log(dataObject);
                        context.commit('setFullCurrentBusiness', dataObject); //get the wrapped object

                        return state.currentBusiness.companyId;

                    }).then(compId => {
                        /**  
                         * Get subproceses, submaterials, subservices of the current business
                         */
                        return Vue.http
                            .get(serverfile, {
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
                                return Vue.http
                                    .get(serverfile, {
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
                                        console.log("subprocessses");
                                        console.log(data);
                                        let dataObject = Object.assign({}, data.resp) //Convert received Array into an Object
                                        context.commit('setCurrentBusinessSubProcesses', dataObject);
                                    }).then(() => {
                                        return Vue.http
                                            .get(serverfile, {
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
                                                console.log("submaterials");
                                                console.log(data);
                                                let dataObject = Object.assign({}, data.resp) //Convert received Array into an Object
                                                context.commit('setCurrentBusinessSubMaterials', dataObject);
                                            }).then(() => {
                                                //console.log("Set CurrentBusinessSubCategories");
                                                context.commit('setCurrentBusinessSubCategories');
                                            }).then(() => {
                                                console.log(state.currentBusiness.companyName);
                                                return Vue.http.get("prds-tags.php", {
                                                    params: {
                                                        endpoint: 'tags',
                                                        code: '1', //Get all tags from a company with their respective endorsements count
                                                        cname: state.currentBusiness.companyName
                                                    }
                                                }).then(response => {
                                                    console.log(
                                                        "company tags"
                                                    );
                                                    console.log(response);
                                                    return response.json();
                                                }).then(data => {
                                                    console.log("Company tags");
                                                    console.log(data);
                                                    context.commit('setCurrentBusinessTags', data.resp);
                                                    return 1;
                                                });
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
    setSubCategoryBusinesses: ({
        commit,
        dispatch
    }, payload) => {
        state.businesses = {};
        let code;
        console.log("setSubCategoryBusinesses");
        console.log(payload);
        if (payload.rK.toLowerCase() == 'processes') {
            code = '16'; //code for getting companies that offer subprocess by its name
        } else if (payload.rK.toLowerCase() == 'services') {
            code = '17'; //code for getting companies that offer subservice by its name
        } else if (payload.rK.toLowerCase() == 'materials') {
            code = '18'; //code for getting companies that offer submaterial by its name
        }
        // Query the server for businesses based on the subcategory name
        Vue.http
            .get(serverfile, {
                params: {
                    endpoint: 'company',
                    code: code,
                    scname: payload.scK.toLowerCase() //subcategory name
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
                commit('setSubcatBusinesses', dataObject);
                dispatch("setMapMarkers", data, {
                    root: true
                });
            });
    },
    /** 
     * Edit Business Info, calculates latitude and longitude from the given address
     * @param {object} data - Receives companyId, companyName, video, website, phone, description,
     * logo, email, processes, materials, services, line, city, country, zipcode
     */
    editBusinessInfo: (context, data) => {
        console.log("I'm modifying company " + data.companyId);
        console.log(data);
        let geocoder = new google.maps.Geocoder();
        let addressLatLong = data.address + ', ' + data.city + ', ' + data.country;

        return codeLatLng().then(response => {
            console.log("Inside codeLatLng");

            return Vue.http.get(serverfile, {
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    endpoint: 'company',
                    code: '9',
                    du: true,
                    multi: true,
                    cid: data.companyId,
                    name: data.companyName,
                    URL: data.video,
                    site: data.website,
                    phone: data.phone,
                    descr: data.description,
                    img: data.logo,
                    cemail: data.email,
                    spids: data.processes, //subprocesses id array
                    smids: data.materials, //submaterials id array
                    ssids: data.services, //subservices id array
                    tids: data.tags, //tags id array
                    line: data.address,
                    city: data.city,
                    count: data.country,
                    zip: data.zipcode,
                    lat: response.latitudeAdd,
                    lon: response.longitudeAdd
                }
            }).then(response => {
                console.log(response);
                return response.json();
            }).then(data => {
                console.log(data);
                context.commit("editBusinessInfo", data.resp);
                return data.resp[0].number;
            });
        }).then(resultNumber => {
            console.log("This is the result number");
            console.log(resultNumber);
            return resultNumber;
        })

        function codeLatLng() {
            return new Promise((resolve, reject) => {
                geocoder.geocode({
                    'address': addressLatLong
                }, (results, status) => {
                    if (status == google.maps.GeocoderStatus.OK) {
                        resolve({
                            latitudeAdd: results[0].geometry.location.lat(),
                            longitudeAdd: results[0].geometry.location.lng()
                        });
                    } else {
                        reject('Cannot find address');
                    }
                });
            });

        }
        //Get google maps latitute and longitude from the business address
        //Then proceeds to do call to edit business with the given info
        // geocoder.geocode({
        //     'address': addressLatLong
        // }, function (results, status) {
        //     if (status == google.maps.GeocoderStatus.OK) {
        //         let latitudeAdd = '';
        //         let longitudeAdd = '';
        //         console.log(results);
        //         latitudeAdd = results[0].geometry.location.lat();
        //         longitudeAdd = results[0].geometry.location.lng();
        //         console.log(data.companyName + "\n" + data.video + "\n" + data.website + "\n" + data.phone + "\n" + data.description + "\n" +
        //             null + "\n" + data.email + "\n" + data.processes + "\n" + data.services + "\n" + data.materials + "\n" + data.address + "\n" + data.city + "\n" +
        //             data.country + "\n" + data.zipcode + "\n" + latitudeAdd + "\n" + longitudeAdd);

        //         var dataToSend = {
        //             endpoint: 'company',
        //             code: '9',
        //             du: true,
        //             multi: true,
        //             cid: data.companyId,
        //             name: data.companyName,
        //             URL: data.video,
        //             site: data.website,
        //             phone: data.phone,
        //             descr: data.description,
        //             img: data.logo,
        //             cemail: data.email,
        //             spids: data.processes, //subprocesses id array
        //             smids: data.materials, //submaterials id array
        //             ssids: data.services, //subservices id array
        //             line: data.address,
        //             city: data.city,
        //             count: data.country,
        //             zip: data.zipcode,
        //             lat: latitudeAdd,
        //             lon: longitudeAdd
        //         };


        //         $.ajax({
        //             url: serverPath,
        //             data: dataToSend,
        //             contentType: "application/json",
        //             type: "GET",
        //             dataType: "json",
        //             success: function (data, textStatus, jqXHR) {
        //                 console.log('Company Edited');
        //                 console.log(data);
        //                 context.commit('editBusinessInfo', data.resp);
        //             },
        //             error: function (data, textStatus, jqXHR) {
        //                 console.log("textStatus: " + textStatus);
        //                 console.log("Server Not Found: Please Try Again Later!");
        //             }
        //         });
        //     } else {
        //         console.log("Geocode was not successful for the following reason: " + status);
        //     }
        // })
    },
    /** 
     * Add new business to system(only administrators), calculates latitude and longitude from the given address
     * @param {object} data - Receives adminId, companyName, videoURL, website, phone, description,
     * email, processes, materials, services, address, city, country, zipcode
     * The materials, services, and procceses are arrays structure in the following way:
     *  Array of arrays (subarrays are each a subcategory) 
     * [arrayindex - value]:
     * 0- subcategory name, 1 -subcategory id, 2- categoryid ,3- model, 4 -application, 5 -limitation
     */
    addNewBusiness: (context, data) => {
        console.log(data);
        let result = 0;
        console.log("Getting geocode for new business " + data.companyName);
        var currentAdmin = data.adminId;
        var companyName = data.companyName;
        var description = data.description;
        var website = data.website;
        var address = data.address;
        var city = data.city;
        var country = data.country;
        var zipcode = data.zipcode;
        var phone = data.phone;
        var email = data.email;
        var videoURL = data.videoURL;
        var materials = data.materials;
        var processes = data.processes;
        var services = data.services;
        var tags = data.tags;
        var logoName = data.logoName;
        console.log(logoName);
        console.log(data.tags);

        var geocoder = new google.maps.Geocoder();
        var addressLatLong = address + ', ' + city + ', ' + country;
        // var latitudeAdd = '';
        // var longitudeAdd = '';


        return codeLatLng().then(response => {
            console.log("Inside codeLatLng");

            return Vue.http.get(serverfile, {
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    du: true,
                    multi: true,
                    endpoint: 'company',
                    code: '8',
                    aid: "5", //hardcoded needs to change

                    name: companyName,
                    URL: videoURL,
                    site: website,
                    phone: phone,
                    descr: description,
                    img: null, //add Images separetly ?
                    cemail: email,
                    spids: processes,
                    smids: materials,
                    ssids: services,
                    tids: tags,
                    line: address,
                    city: city,
                    count: country,
                    zip: zipcode,
                    lat: response.latitudeAdd,
                    lon: response.longitudeAdd,
                    logoName: logoName
                }
            }).then(response => {
                console.log(response);
                return response.json();
            }).then(data => {
                console.log(data);
                context.commit("addNewBusiness", data.resp);
                return data.resp[0].number;
            });
        }).then(resultNumber => {
            console.log("This is the result number");
            console.log(resultNumber);
            return resultNumber;
        })



        function codeLatLng() {
            return new Promise((resolve, reject) => {
                geocoder.geocode({
                    'address': addressLatLong
                }, (results, status) => {
                    if (status == google.maps.GeocoderStatus.OK) {
                        resolve({
                            latitudeAdd: results[0].geometry.location.lat(),
                            longitudeAdd: results[0].geometry.location.lng()
                        });
                    } else {
                        reject('Cannot find address');
                    }
                });
            });

        }
        // $.ajax({
        //     url: serverPath,
        //     data: dataToSend,
        //     contentType: "application/json",
        //     type: "GET",
        //     dataType: "json",
        //     success: function (data, textStatus, jqXHR) {
        //         context.commit("addNewBusiness", data.resp);
        //     },
        //     error: function (data, textStatus, jqXHR) {
        //         console.log("textStatus: " + textStatus);
        //         console.log("Server Not Found: Please Try Again Later!");
        //     }
        // });

    },
    /**    
     * Deletes a particular business submission (Admin action)
     * @param {object} data - Contains the submissionId
     */
    removeSubmission: (context, data) => {
        state.businessesFlags['removeSubmission'] = "";
        console.log("Removing submission with id " + data.submissionId);

        return Vue.http.get(serverfile, {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                endpoint: 'submissions',
                code: '1',
                du: true,
                subid: data.submissionId
            }
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log("Got projects");
            console.log(data);
            context.commit("removeSubmission", data.resp);
            return data.resp;
        });
    },
    /**    
     * Deletes a particular business (Admin action)
     * @param {object} data - Contains the company to remove companyId
     */
    removeBusiness: (context, data) => {
        state.businessesFlags['removeBusiness'] = "";
        console.log("Removing business with id " + data.companyId);

        return Vue.http.get(serverfile, {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                endpoint: 'company',
                code: '6',
                du: true,
                cid: data.companyId
            }
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data);
            context.commit("removeBusiness", data.resp);
            return data.resp[0].number;
        });

    }
}




export default {
    state,
    getters,
    mutations,
    actions
}