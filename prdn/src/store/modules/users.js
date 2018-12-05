import Vue from 'vue';
let serverfile = "prds.php";
//For local development
let serverPath = "http://localhost:80/Server/prds.php";
//For production build
//let serverPath = "http://uprm.edu/creativeindustries/Server/prds.php";

const state = {
    /** 
     * Object that holds current logged in user information 
     */
    user: {},
    userProjects: {},
    recoveryUserEmail: "",
    userFlags: {
        passChanged: "",
        infoChanged: "",
        recoverPassword: "",
        registerUser: "",
        addSubmission: "",
        userType: "",
        editProject: "",
        userProjects: "",
        loggedIn: false //Is user loggedIn - for testing purposes
    }
};

const getters = {

};


const mutations = {
    /** Get user type when initializing app, checks if user is logged in and 
     * if it is regular, unregistered
     */
    userType: (state) => {
        let userType = Vue.cookie.get("userType");
        if (userType == "regular") {
            console.log("loggi ind regular ");
            state.userFlags['userType'] = userType;
            state.userFlags['loggedIn'] = true;
        } else {
            console.log("not loggid in ");
            state.userFlags['userType'] = "";
            state.userFlags['loggedIn'] = false;
        }
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.userFlags = {
            ...state.userFlags
        }

    },
    //Get information of user that is already logged in 
    getUser: (state, data) => {

        state.user = data[0];
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.user = {
            ...state.user
        }
        state.userFlags['loggedIn'] = true;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.userFlags = {
            ...state.userFlags
        }
    },
    /** 
     * Sets state.user data to the received response from http call
     * if credentials were correct.
     * @param {Array} data - Contains object with user data if login was valid, empty otherwise
     */
    loginUser: (state, data) => {
        console.log(data);
        if (data.length > 0) {
            Vue.cookie.set("userId", data[0].userId, 1);
            console.log("hello");
            console.log(Vue.cookie.get("userId"));
            Vue.cookie.set("userType", "regular", 1)
            state.user = data[0];
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.user = {
                ...state.user
            }
            state.userFlags['loggedIn'] = true;
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.userFlags = {
                ...state.userFlags
            }
        } else {
            state.userFlags['loggedIn'] = false;
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.userFlags = {
                ...state.userFlags
            }
        }


    },
    getEndorsementsToBusiness: (state, data) => {
        console.log("get Endorsements to business user");
        console.log(data);
        state.user['endorsedTags'] = data;

        state.user = {
            ...state.user
        }
    },
    giveEndorsement: (state, data) => {
        console.log("give Endorsement");
        console.log(data);
    },
    removeEndorsement: (state, data) => {
        console.log("remove Endorsement");
        console.log(data);
    },
    /** 
     * Sets validEmail to false if the given email is not in the database, otherwise
     * it calls the sendEmail actions
     * @param {boolean} data - false if email was not in the db, true otherwise
     */
    recoveryUserEmail: (state, data) => {
        if (data == false) {
            state.recoveryUserEmail = false; //The email doesn't exist in the db
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.recoveryUserEmail = {
                ...state.recoveryUserEmail
            }
        } else {
            state.recoveryUserEmail = true; //The email doesn't exist in the db
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.recoveryUserEmail = {
                ...state.recoveryUserEmail
            }
            console.log('Recover Email Sent');
        }

    },
    /** 
     * Set userFlags passChanged flag
     */
    changeUserPassword: (state, data) => {
        console.log(data);
        state.userFlags['passChanged'] = data['0'].number;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.userFlags = {
            ...state.userFlags
        }
        console.log(state.userFlags);
    },
    /** 
     * Set userFlags infoChanged flag
     */
    editUserInfo: (state, data) => {
        console.log(data);
        state.userFlags['infoChanged'] = data['0'].number;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.userFlags = {
            ...state.userFlags
        }
        console.log(state.userFlags);
    },
    /** 
     * Set userFlags recoverPassword flag
     */
    recoverUserPassword: (state, data) => {
        console.log(data);
        state.userFlags['recoverPassword'] = data['0'].number;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.userFlags = {
            ...state.userFlags
        }
        console.log(state.userFlags);
    },
    /** 
     * Set userFlags registerUser flag
     */
    registerNewUser: (state, data) => {
        console.log(data);
        state.userFlags['registerUser'] = data['0'].number;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.userFlags = {
            ...state.userFlags
        }
        console.log(state.userFlags);
    },
    /** 
     * Set userFlags addSubmission flag
     */
    addSubmission: (state, data) => {
        console.log(data);
        state.userFlags['addSubmission'] = data['0'].number;
        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.userFlags = {
            ...state.userFlags
        }
        console.log(state.userFlags);
    },
    /** 
     * Set state.userFlags['addProjects'] flag
     */
    addProject: (state, data) => {
        state.userFlags['userProjects'] = data;
    },
    /** 
     * Set state.userFlags['editProjects'] flag
     */
    editProject: (state, data) => {
        state.userFlags['editProject'] = data;
    },
    /** 
     * Set userFlags addSubmission flag
     */
    getUserProjects: (state, data) => {
        console.log(data);
        let projects = {};
        //Assign tags to projects
        for (let project in data) {
            let projectName = data[project].projectName;
            let projectKey = data[project].projectName.replace(/ +/g, "%20").toLowerCase();
            if (typeof projects[projectKey] === "undefined") {
                projects[projectKey] = {
                    id: data[project].projectId,
                    name: projectName,
                    tags: {}
                };
            }
            let tagKey = data[project].tagName.replace(/ +/g, "%20").toLowerCase();
            let tagName = data[project].tagName;
            projects[projectKey].tags[tagKey] = {
                id: data[project].tagId,
                name: tagName,
                category: data[project].tagCategory
            }
        }


        state.userProjects = projects;

        state.userProjects = {
            ...state.userProjects
        };

    }
};


const actions = {


    /**  Get user type when initializing app, checks if user is logged in and 
     * if it is regular, admin user, unregistered
     */
    userType: (context) => {

        context.commit("userType");
        console.log("Is user logged in?");
        console.log(state.userFlags.loggedIn);
        if (state.userFlags.loggedIn) {
            console.log("Loggin dispatching gettting user data");
            console.log(Vue.cookie.get("userId"));
            let data = {
                userId: Vue.cookie.get("userId")
            }
            context.dispatch("getUser", data);
        }
    },
    loginUser: ({
        commit,
        dispatch
    }, data) => {
        let email = data.email;
        let pass = data.password;
        console.log(email);
        console.log(pass);
        return Vue.http
            .post(
                serverfile, {
                    endpoint: "users",

                    code: '0', //validate user credentials
                    uemail: email,
                    upass: pass
                }, {
                    emulateJSON: true,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            )
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                commit('loginUser', data.resp);
                dispatch("getUserProjects", data.resp, {
                    root: true
                });
                return data.resp;
            });
    },

    /**  
     * Http call to get  user loggedIn user with userid
     * @param {Array} data - Contains object with userId
     */

    getUser: (context, data) => {
        let uid = data.userId;
        console.log("Getting user data " + uid);
        return Vue.http.get(serverfile, {
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    endpoint: 'users',
                    code: '1',
                    uid: uid
                }
            })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                context.commit('getUser', data.resp);
                //let dataU = { uid: state.user.userId };

                context.dispatch("getUserProjects", data.resp);
                return data.resp;
            });
    },


    /**  
     * Http call verifies if given email is in the database, if it is
     * it will proceed to send email with recovery passcode
     * @param {object} data - Object that contains user email 
     * @return {boolean} - Returns true if email is in db, and recover email sent was sucessfull, and false otherwise
     */
    sendUserPasscode: (context, data) => {
        let email = data.email;

        return Vue.http
            .get(
                serverfile, {
                    params: {
                        endpoint: "users",
                        code: "4", //verify user email
                        uemail: email
                    }
                }
            )
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data.resp);
                if (data.resp.length > 0) {

                    console.log('calling email');
                    console.log(data.resp[0].email);
                    let email = data.resp[0].email;
                    let uid = data.resp[0].userId;
                    let fname = data.resp[0].firstName;
                    /** 
                     * Http call to send email to recover user password
                     */
                    return Vue.http
                        .get(
                            "email.php", {
                                params: {
                                    remail: email,
                                    id: uid,
                                    name: fname,
                                    rtype: '0' //user type 
                                }
                            }
                        )
                        .then(response => {
                            return response.json();
                        })
                        .then(data => {
                            console.log("User recover pass email sent");
                            console.log(data);
                            if (data.resp[0].number == 1) {
                                //console.log("Sent recover email sucess, commiting state")
                                context.commit('recoveryUserEmail', true);
                                return 1;
                            } else
                                //console.log("Email sent failed");
                                context.commit('recoveryUserEmail', false);
                            return 0;
                        });
                } else {
                    //console.log("Email is not in db");
                    context.commit('recoveryUserEmail', false);
                    return -1;
                }
            });
    },
    /**  
     * Http call sent email after user registration
     * it will proceed to send email with a Welcome message
     * @param {object} data - Object that contains user email and user name 
     * @return {boolean} - Returns true if email is in db, and recover email sent was sucessfull, and false otherwise
     */
    sendRegistrationEmail: (context, data) => {
        let email = data.email;
        let name = data.name;
        console.log("SENDING REGISTRATION");
        Vue.http
            .get(
                "emailRegister.php", {
                    params: {
                        remail: email,
                        name: name
                    }
                }
            )
            .then(response => {
                console.log(response);
                return response.json();

            })
            .then(data => {
                console.log("User register email sent");
                console.log(data);
                return 1;
            });

    },
    /**  
     * Changes user password (Assumes user is logged in)
     * @param {object} data - Contains user email, new user password, and user id
     */
    changeUserPassword: (context, data) => {
        console.log("I'm changing password for " + data.email + " and userId = " + data.id);
        state.userFlags['changePassword'] = "";
        return Vue.http
            .post(
                serverfile, {
                    uemail: data.email,
                    upass: data.pass,
                    uid: data.id,
                    endpoint: 'users',
                    code: '4',
                }, {
                    emulateJSON: true,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            )
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                context.commit("changeUserPassword", data.resp);
                return data.resp;
            });

    },
    /**  
     * Changes user firstName, lastName, occupation and city 
     * @param {object} data - Contains user firstName, user lastName, and user occupation, and user city
     */
    editUserInfo: (context, data) => {
        console.log("I'm modifying user " + data.firstName);

        state.userFlags['infoChanged'] = "";
        return Vue.http
            .post(
                serverfile, {
                    endpoint: 'users',
                    code: '2',
                    uid: data.id,
                    uname: data.firstName,
                    ulname: data.lastName,
                    uoccu: data.occupation,
                    ucity: data.city,
                    du: true

                }, {
                    emulateJSON: true,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            )
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                context.commit("editUserInfo", data.resp);
                return data.resp;
            });

    },
    /**     
     * Checks if the provided email and passcode are correct, it will proceed to change the user's password
     * to the one provided
     * @param {object} data - Contains user's email, passcode, and new password
     */
    recoverUserPassword: (context, data) => {

        console.log("I'm verifying passcode for " + data.email);
        console.log(data);
        console.log("HERE BABY");
        state.userFlags['recoverPassword'] = "";
        let userData = data;
        return Vue.http.get(serverfile, {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                endpoint: 'users',
                code: '3',
                passcode: data.passcode,
                uemail: data.email,
                utype: 0 //User type = 0, admin type = 1
            }
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            //console.log("after verifying user email and passcode");
            //console.log(data);
            var response = data.resp;
            //console.log(response);
            if (response.length > 0) {
                //console.log("I'm recovering password for " + response[0].email);

                //console.log(response);
                return Vue.http.post(serverfile, {

                        endpoint: 'users',
                        code: '3',
                        du: true,
                        multi: true,
                        uemail: response[0].email,
                        upass: userData.password,
                        uid: response[0].userId,
                        type: 0
                    }, {
                        emulateJSON: true,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        //console.log(data);
                        context.commit("changeUserPassword", data.resp);
                        return data.resp;
                    });

            } else {
                //console.log("Invalid Email or Passcode");
                context.commit("recoverUserPassword", data.resp);
                return data.resp;
            }
        });

    },
    /**     
     * Register a new user (checks email doesn't exist in db)
     * @param {object} data - Contains user's email, password, firstName, lastName, occupation, birthday, and city
     */
    registerNewUser: ({
        commit,
        dispatch
    }, userData) => {
        console.log("Verifying email " + userData.email + " is not in db");
        state.userFlags["registerUser"] = "";
        var dataToSend = {
            endpoint: 'users',
            code: '4',
            uemail: userData.email
        };

        return Vue.http.get(serverfile, {
            params: {
                endpoint: 'users',
                code: '4',
                uemail: userData.email
            }
        }).then(response => {
            console.log("After checking user email");
            console.log(response);
            if (response.body.resp.length > 0) {
                return response.json();
            } else {
                console.log("In else statement ")
                return {
                    resp: []
                }
            }


        }).then(data => {
            console.log(data.resp.length);

            console.log(data.resp.length != 0);
            console.log(data);
            if (data.resp.length != 0) {
                console.log("The email entered already exists. Please enter another email.");
                return []; //return empty object, to let user know email is already in datbase
            } else {

                console.log("userDaga");
                console.log(userData);
                return Vue.http.post(serverfile, {

                    endpoint: 'users',
                    code: '1',
                    du: true,
                    uemail: userData.email,
                    upass: userData.password,
                    uname: userData.firstName,
                    ulname: userData.lastName,
                    uoccu: userData.occupation,
                    ubdate: userData.birthday,
                    ucity: userData.city

                }, {

                    emulateJSON: true,


                }).then(response => {
                    return response.json();
                }).then(data => {

                    console.log("registering user");
                    console.log(data);
                    commit("registerNewUser", data.resp);
                    let udata = {
                        name: userData.firstName,
                        email: userData.email
                    }
                    console.log(data);
                    dispatch("sendRegistrationEmail", udata, {
                        root: true
                    });
                    return data.resp;
                });
            }
        })

    },

    /**   
     * Submits a new business request
     * @param {object} data - Contains the company's name, website, description, phone, email, address, city, country, zipcode
     */
    addSubmission: (context, data) => {
        console.log("Adding submission");
        console.log(data);
        state.userFlags['addSubmission'] = "";

        return Vue.http.get(serverfile, {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                endpoint: 'submissions',
                uid: data.id,
                du: true,
                sname: data.name,
                swebsite: data.website,
                sdescription: data.description,
                sphone: data.phone,
                simage: data.logo,
                semail: data.email,
                sline: data.address,
                scity: data.city,
                scountry: data.country,
                szip: data.zipcode,
                code: '3'
            }
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data);
            context.commit("addSubmission", data.resp);
            return data.resp;
        });
    },

    /**   
     * Gets the company tagids that the user has endorsed 
     * @param {object} data - Contains the company's name, and userId
     */
    getEndorsementsToBusiness: (context, data) => {
        console.log("getting company tags endorsed by the user ");
        console.log(data);

        return Vue.http.get("prds-tags.php", {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                endpoint: 'tags',
                uid: data.id,

                cname: data.companyName,
                code: '0' //get tags(tagId) endorsed by the given user id to the given company name
            }
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log("Got endorsements");
            console.log(data);
            context.commit("getEndorsementsToBusiness", data.resp);
            return data.resp;
        });
    },
    /**   
     * Add endorsement  to tagId of the business
     * @param {object} data - Contains the companyId, and userId, and tagId
     */
    giveEndorsement: (context, data) => {
        console.log("giving endorsement to " + data.companyId);
        console.log(data);
        return Vue.http.get("prds-tags.php", {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                endpoint: 'tags',
                cid: data.companyId,
                du: true,
                multi: true,
                uid: data.userId,
                tid: data.tagId,
                code: '5' //get tags(tagId) endorsed by the given user id to the given company name
            }
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log("Endorsement made ");
            console.log(data);
            context.commit("giveEndorsement", data.resp);
            return data.resp;
        });
    },
    /**   
     * remove endorsement  to tagId of the business
     * @param {object} data - Contains the companyId, and userId, and tagId
     */
    removeEndorsement: (context, data) => {
        console.log("removing endorsement to " + data.companyId);
        console.log(data);
        return Vue.http.get("prds-tags.php", {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                endpoint: 'tags',
                cid: data.companyId,
                du: true,
                uid: data.userId,
                tid: data.tagId,
                code: '6' //Remove endorsement with userid tagid and company id
            }
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log("Endorsement made ");
            console.log(data);
            context.commit("removeEndorsement", data.resp);
            return data.resp;
        });
    },
    /**   
     * Adds a project submited by the user
     * @param {object} data - Contains the projectName, userId, and a array of tagId arrays
     */
    addProject: (context, data) => {
        console.log("adding project to " + data.uid);
        console.log(data);
        data.userId = data.uid;
        let userData = [data];
        return Vue.http.get("prds-projects.php", {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                endpoint: 'projects',
                uid: data.uid,
                pname: data.projectName,
                du: true,
                multi: true,
                tids: data.tids,
                code: '7' //Add new project 
            }
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log("Project added ");
            console.log(data);
            context.commit("addProject", data.resp);
            context.dispatch("getUserProjects", userData);
            return data.resp;
        });
    },
    /**   
     * edits a project submited by the user
     * @param {object} data - Contains the projectName, projectId, and a array of tagId arrays
     */
    editProject: (context, data) => {
        console.log("editing project with projectId " + data.projectId);
        console.log(data);
        data.userId = data.uid;
        let userData = [data];
        return Vue.http.get("prds-projects.php", {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                endpoint: 'projects',
                pid: data.projectId,
                pname: data.projectName,
                du: true,
                multi: true,
                tids: data.tids,
                code: '10' //Edit existing project 
            }
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log("Project edited ");
            console.log(data);
            context.commit("editProject", data.resp);
            context.dispatch("getUserProjects", userData);
            return data.resp;
        });
    },
    /**   
     * Get user projects
     * @param {object} data - Contains the userId
     */
    getUserProjects: (context, data) => {
        console.log("getting projects for user with Id " + data[0].userId);
        console.log(data[0]);
        return Vue.http.get("prds-projects.php", {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                endpoint: 'projects',
                uid: data[0].userId,
                code: '0' //get all user's projects with their respective tags by the given user id 
            }
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log("Got projects");
            console.log(data);
            context.commit("getUserProjects", data.resp);
            return data.resp;
        });
    }

};

export default {
    state,
    getters,
    mutations,
    actions
}