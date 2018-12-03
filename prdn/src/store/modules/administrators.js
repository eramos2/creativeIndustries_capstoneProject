import Vue from 'vue';
let serverfile = "prds.php";
//For local development
let serverPath = "http://localhost:80/Server/prds.php";
//For production build
//let serverPath = "http://uprm.edu/creativeindustries/Server/prds.php";
let CLOUDINARY_UPLOAD_PRESET = "c5ujdszc";
let CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/prdn";

const state = {
    /** 
     * Object that holds current logged in user information 
     */
    administrator: {},

    administrators: {},

    recoveryAdminEmail: "",

    businessRequests: {},

    currentBusinessRequest: {

    },

    adminFlags: {
        passChanged: "",
        infoChanged: "",
        recoverPassword: "",
        removeAdministrator: "",
        adminType: "",
        adminLoggedIn: false //Is admin user loggedIn
    }


};

const getters = {};


const mutations = {

    /** Get admin type when initializing app, checks if admin is logged in and 
     * what type it is or if unregistered
     */
    adminType: (state) => {

        let userType = Vue.cookie.get("userType");
        let adminType = Vue.cookie.get("adminType");
        if (userType == "admin") {
            state.adminFlags['adminType'] = adminType;
            state.adminFlags['adminLoggedIn'] = true;
        } else {
            state.adminFlags['adminType'] = "";
            state.adminFlags['adminLoggedIn'] = false;
        }
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.adminFlags = {
            ...state.adminFlags
        }
    },
    /** 
     * Sets state.administrator data to the received response from http call
     * if credentials were correct.
     * @param {Array} data - Contains object with admin data if login was valid, empty otherwise
     */
    loginAdmin: (state, data) => {
        if (data.length > 0) {
            Vue.cookie.set("userId", data[0].adminId, 1);
            Vue.cookie.set("userType", 'admin', 1)
            Vue.cookie.set("adminType", data[0].adminTypeName, 1);

            state.administrator = data[0];
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.administrator = {
                ...state.administrator
            }
            state.adminFlags['adminLoggedIn'] = true;
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.adminFlags = {
                ...state.adminFlags
            }
        } else {
            state.adminFlags['adminLoggedIn'] = false;
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.adminFlags = {
                ...state.adminFlags
            }
            console.log("Data received in mutations loginAdmin administrators.js");
            console.log(data);
            console.log("This is the administrator");
            console.log(state.administrator);

        }
    },
    /** 
     * Sets state.administrators to the data received response from http call
     * @param {Array} data - Contains object with admins data, adminId, adminTypeName, email, firstName, lastName, occupation, birthDate, and city
     */
    getAdministrators: (state, data) => {
        state.administrators = data;

        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.administrators = {
            ...state.administrators
        }
        console.log(state.administrators);
    },
    /** 
     * Sets recoveryAdminEmail to false if the given admin email is not in the database, otherwise
     * it sets it to true as it was sent successfully
     * @param {boolean} data - false if email was not in the db or email sent failed, true otherwise
     */
    recoveryAdminEmail: (state, data) => {
        if (data == false) {
            state.recoveryAAdminEmail = false; //The email doesn't exist in the db
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.recoveryAdminEmail = {
                ...state.recoveryAdminEmail
            }
        } else {
            state.recoveryAdminEmail = true; //The email doesn't exist in the db
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.recoveryAdminEmail = {
                ...state.recoveryAdminEmail
            }
            console.log('Recover Admin Email Sent');
        }

    },

    setBusinessRequests: (state, data) => {

        state.businessRequests = data;
        console.log(state.businessRequests);
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.businessRequests = {
            ...state.businessRequests
        }
    },
    /**   
     * Sets state.currentBusinessRequest to the data received
     * @param {object} data - Contains submissionId, companyName, website, phone, description
     * email,address, city, country, city, and zipcode
     */
    getBusinessSubmission: (state, data) => {
        state.currentBusinessRequest = data;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.currentBusinessRequest = {
            ...state.currentBusinessRequest
        }
        console.log(state.currentBusinessRequest);


    },
    /** 
     * Set adminPassChanged flag
     */
    changeAdminPassword: (state, data) => {
        console.log(data);
        state.adminFlags['passChanged'] = data['0'].number;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.adminFlags = {
            ...state.adminFlags
        }
        console.log(state.adminFlags);
    },
    /** 
     * Set adminFlags recoverPassword flag
     */
    editAdminInfo: (state, data) => {
        console.log(data);
        state.adminFlags['recoverPassword'] = data['0'].number;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.adminFlags = {
            ...state.adminFlags
        }
        console.log(state.adminFlags);
    },
    /** 
     * Set adminFlags infoChanged flag
     */
    recoverAdminPassword: (state, data) => {
        console.log(data);
        state.adminFlags['infoChanged'] = data['0'].number;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.adminFlags = {
            ...state.adminFlags
        }
        console.log(state.adminFlags);
    },
    /** 
     * Set adminFlags infoChanged flag
     */
    removeAdministrator: (state, data) => {
        console.log(data);
        state.adminFlags['removeAdministrator'] = data['0'].number;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.adminFlags = {
            ...state.adminFlags
        }
        console.log(state.adminFlags);
    },
};


const actions = {

    /**  Get admin type when initializing app, checks if admin is logged in and 
     * what type it is or if it's unregistered
     */
    adminType: (context) => {

        context.commit("adminType");
    },


    /**   
     * Adds New admin to system db (Assumes email is not already on the system).
     * @param {object} data - Receives email, password, firsName, lastName, occupation, birthday and city of new administrator
     * 
     */
    addNewAdmin: (context, data) => {

        return Vue.http.post(
            serverfile, {
                aemail: data.email,
                apass: data.pass,
                aname: data.firstName,
                alname: data.lastName,
                aoccu: data.occupation,
                abdate: data.birthday,
                acity: data.city,
                tp: '2' //regular admin type 
            }, {
                emulateJSON: true,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                params: {
                    endpoint: "admin",
                    code: "0", //add new admin
                    du: true
                }
            }
        ).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data.resp);
            return data.resp[0].number;
            //context.commit('addNewAdmin', data);
        });
    },
    /** 
     * Makes http call to validate admin login credentials.
     * @param {Array} data - Contains object with admin email and password
     */
    loginAdmin: (context, data) => {
        let email = data.email;
        let pass = data.password;
        return Vue.http
            .post(
                serverfile, {
                    aemail: email,
                    apass: pass
                }, {
                    emulateJSON: true,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    params: {
                        endpoint: "admin",
                        code: "1" //validate admin credentials
                    }
                }
            )
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {

                context.commit('loginAdmin', data.resp);
                return data.resp;
            });
    },
    /**  
     * Http calls verifies if given admin email is in the database, if it is
     * it will proceed to send email with recovery password
     * @param {String} data - Object that contains admin email 
     * @return {boolean} - Returns true if admin email is in db, and recover email sent was sucessfull, and false otherwise
     */
    sendAdminPasscode: (context, data) => {
        let email = data.email;

        return Vue.http
            .get(
                serverfile, {
                    params: {
                        endpoint: "admin",
                        code: "4", //verify admin email
                        aemail: email
                    }
                }
            )
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data.resp);
                if (data.resp.length > 0) {

                    //console.log('calling email');
                    //console.log(data.resp[0].email);
                    let email = data.resp[0].email;
                    let aid = data.resp[0].adminId;
                    let fname = data.resp[0].firstName;
                    /** 
                     * Http call to send email to recover user password
                     */
                    Vue.http
                        .get(
                            "email.php", {
                                params: {
                                    remail: email,
                                    id: aid,
                                    name: fname,
                                    rtype: 1 //admin type 
                                }
                            }
                        )
                        .then(response => {
                            //console.log(response);
                            return response.json();
                        })
                        .then(data => {
                            //console.log("User recover pass email sent");
                            //console.log(data);
                            if (data.resp[0].number == 1) {
                                //console.log("Sent recover email sucess, commiting state")
                                context.commit('recoveryAdminEmail', true);
                                return data.resp[0].number;
                            } else
                                //console.log("Email sent failed");
                                context.commit('recoveryAdminEmail', false);
                            return false;
                        });
                } else {
                    //console.log("Email is not in db");
                    context.commit('recoveryAdminEmail', false);
                    return false
                }
            });
    },

    /** 
     * Makes http call to get all business submission requests.
     */
    getBusinessRequests: (context) => {
        console.log("Getting Business requests")
        return Vue.http
            .get(
                serverfile, {
                    params: {
                        endpoint: "submissions",
                        code: "0" //get all business submissions
                    }
                }
            )
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                context.commit('setBusinessRequests', data.resp);
                return data.resp;
            });
    },
    /**  
     * Changes admin password 
     * @param {object} data - Contains admin email, new admin password, and admin id
     */
    changeAdminPassword: (context, data) => {
        console.log("I'm recovering password for " + data.email + "and adminId = " + data.id);
        state.adminFlags['passChanged'] = "";


        return Vue.http
            .post(
                serverfile, {
                    du: true,
                    aemail: data.email,
                    aid: data.id,
                    apass: data.pass
                }, {
                    emulateJSON: true,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    params: {
                        endpoint: "admin",
                        code: "4" //change admin password
                    }
                }
            )
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {

                context.commit('changeAdminPassword', data.resp);
                return data.resp;
            });

    },
    /**  
     * Changes admin firstName, lastName, occupation and city 
     * @param {object} data - Contains admin firstName, lastName,occupation, adn city
     */
    editAdminInfo: (context, data) => {
        console.log("I'm adding admin " + data.firstName);


        state.adminFlags['infoChanged'] = "";

        return Vue.http
            .post(
                serverfile, {
                    du: true,
                    aid: data.id,
                    aname: data.firstName,
                    alname: data.lastName,
                    aoccu: data.occupation,
                    acity: data.city
                }, {
                    emulateJSON: true,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    params: {
                        endpoint: 'admin',
                        code: '2'
                    }
                }
            )
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log("This is the data in editAdminInfo");
                console.log(data);
                context.commit('editAdminInfo', data.resp);
                return data.resp;
            });

    },
    /**     
     * Checks if the provided email and passcode are correct, it will proceed to change the admin's password
     * to the one provided
     * @param {object} data - Contains admin's email, passcode, and new password
     */
    recoverAdminPassword: (context, data) => {
        console.log("I'm verifying passcode for " + data.email);
        state.adminFlags['recoverPassword'] = "";



        return Vue.http.get(serverfile, {
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    endpoint: 'users',
                    code: '3',
                    passcode: data.passcode,
                    uemail: data.email,
                    utype: 1 //User type = 0, admin type = 1 
                }
            })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                var response = data.resp;
                console.log(response);
                if (response.length > 0) {

                    console.log("I'm recovering password for admin " + data.email);

                    return Vue.http
                        .post(
                            serverfile, {

                                du: true,
                                multi: true,
                                aemail: data.email,
                                apass: data.password,
                                aid: data.id,
                                type: 1 //to remove it from recovery table
                            }, {
                                emulateJSON: true,
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                params: {
                                    endpoint: 'admin',
                                    code: '3'
                                }
                            }
                        )
                        .then(response => {
                            console.log(response);
                            return response.json();
                        })
                        .then(data => {
                            console.log("This is the data in editAdminInfo");
                            console.log(data);
                            context.commit('recoverAdminPassword', data.resp);
                            return data.resp;
                        });


                } else {
                    return response;
                }
            });



    },
    /**   
     * Get a particular business submission
     * @param {object} data - Contains the submissionId
     */
    getBusinessSubmission: (context, data) => {
        console.log("Getting submission " + data.submissionId);
        state.currentBusinessRequest = {};

        return Vue.http.get(serverfile, {
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    endpoint: 'submissions',
                    code: '5',
                    subid: data.submissionId
                }
            })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                context.commit("getBusinessSubmission", data.resp[0])
                return data.resp;
            })


    },
    /**     
     * Gets all administrators in the system
     */
    getAdministrators: (context) => {
        state.administrators = {};
        console.log("Im getting Admins");

        var dataToSend1 = {
            endpoint: 'admin',
            code: '0'
        };

        $.ajax({
            url: serverPath,
            data: dataToSend1,
            contentType: "application/json",
            type: "GET",
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                context.commit("getAdministrators", data.resp);
            },
            error: function (data, textStatus, jqXHR) {
                console.log("textStatus: " + textStatus);
                console.log("Server Not Found: Please Try Again Later!");
            }
        });
    },
    /**    
     * Remove administrator can only be done by Super Administrator
     * @param {object} data - Contains the administrator's adminId to remove
     */
    removeAdministrator: (context, data) => {
        console.log("I'm deleting admin: " + data.adminId);
        state.adminFlags["removeAdministrator"] = "";


        return Vue.http.get(serverfile, {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                endpoint: 'admin',
                code: '2', //code to remove administrator from system
                du: true,
                aid: data.adminId
            }
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data);
            context.commit("removeAdministrator", data.resp);
            return data.resp[0].number;
        });

    }




};

export default {
    state,
    getters,
    mutations,
    actions
}