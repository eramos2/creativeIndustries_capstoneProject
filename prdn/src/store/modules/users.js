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

    recoveryUserEmail: "",
    userFlags: {
        passChanged: "",
        infoChanged: "",
        recoverPassword: "",
        registerUser: "",
        addSubmission: "",
        loggedIn: true //Is user loggedIn - for testing purposes
    }
};

const getters = {};


const mutations = {
    /** 
     * Sets state.user data to the received response from http call
     * if credentials were correct.
     * @param {Array} data - Contains object with user data if login was valid, empty otherwise
     */
    loginUser: (state, data) => {
        if (data.length > 0) {
            state.user = data[0];
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.user = { ...state.user
            }
        }


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
            state.recoveryUserEmail = { ...state.recoveryUserEmail
            }
        } else {
            state.recoveryUserEmail = true; //The email doesn't exist in the db
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.recoveryUserEmail = { ...state.recoveryUserEmail
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
        state.userFlags = { ...state.userFlags
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
        state.userFlags = { ...state.userFlags
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
        state.userFlags = { ...state.userFlags
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
        state.userFlags = { ...state.userFlags
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
        state.userFlags = { ...state.userFlags
        }
        console.log(state.userFlags);
    }
};


const actions = {

    /**  
     * Http call to validate user login
     * @param {Array} data - Contains object with user email and password
     */

    loginUser: (context, data) => {
        let email = data.email;
        let pass = data.password;
        Vue.http
            .post(
                serverfile, {
                    //for testing
                    //uemail: "emmanuel.ramos2@upr.edu",
                    //upass: "123456"
                    uemail: email,
                    upass: pass
                }, {
                    emulateJSON: true,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    params: {
                        endpoint: "users",
                        code: "0" //validate user credentials
                    }
                }
            )
            .then(response => {
                return response.json();
            })
            .then(data => {
                context.commit('loginUser', data.resp);
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

        Vue.http
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
                    Vue.http
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
                            //console.log("User recover pass email sent");
                            //console.log(data);
                            if (data.resp[0].number == 1) {
                                //console.log("Sent recover email sucess, commiting state")
                                context.commit('recoveryUserEmail', true);
                            } else
                                //console.log("Email sent failed");
                                context.commit('recoveryUserEmail', false);
                        });
                } else {
                    //console.log("Email is not in db");
                    context.commit('recoveryUserEmail', false);
                }
            });
    },
    /**  
     * Changes user password (Assumes user is logged in)
     * @param {object} data - Contains user email, new user password, and user id
     */
    changeUserPassword: (context, data) => {
        console.log("I'm changing password for " + data.email + " and userId = " + data.id);
        state.userFlags['passChanged'] = "";

        var dataToSend = {
            endpoint: 'users',
            code: '4',
            du: true,
            uemail: data.email,
            upass: data.pass,
            uid: data.id
        };

        $.ajax({
            url: serverPath,
            data: dataToSend,
            contentType: "application/x-www-form-urlencoded",
            type: "POST",
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                console.log(data.resp);
                context.commit("changeUserPassword", data.resp);

            },
            error: function (data, textStatus, jqXHR) {
                console.log("textStatus: " + textStatus);
                console.log("Server Not Found: Please Try Again Later!");
            }
        });
    },
    /**  
     * Changes user firstName, lastName, occupation and city 
     * @param {object} data - Contains user firstName, user lastName, and user occupation, and user city
     */
    editUserInfo: (context, data) => {
        console.log("I'm modifying user " + data.firstName);

        state.userFlags['infoChanged'] = "";

        var dataToSend = {
            endpoint: 'users',
            code: '2',
            uid: data.id,
            uname: data.firstName,
            ulname: data.lastName,
            uoccu: data.occupation,
            ucity: data.city,
            du: true
        };

        $.ajax({
            url: serverPath,
            data: dataToSend,
            contentType: "application/x-www-form-urlencoded",
            type: "POST",
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                context.commit("editUserInfo", data.resp);
            },
            error: function (data, textStatus, jqXHR) {
                console.log("textStatus: " + textStatus);
                console.log("Server Not Found: Please Try Again Later!");
            }
        });
    },
    /**     
     * Checks if the provided email and passcode are correct, it will proceed to change the user's password
     * to the one provided
     * @param {object} data - Contains user's email, passcode, and new password
     */
    recoverUserPassword: (context, data) => {
        console.log("I'm verifying passcode for " + data.email);
        state.userFlags['recoverPassword'] = "";

        var dataToSend = {
            endpoint: 'users',
            code: '3',
            passcode: data.passcode,
            uemail: data.email,
            utype: 0 //User type = 0, admin type = 1 
        };

        $.ajax({
            url: serverPath,
            data: dataToSend,
            contentType: "application/json",
            type: "GET",
            dataType: "json",
            success: function (data, textStatus, jqXHR) {

                var response = data.resp;
                console.log(response);
                if (response.length > 0) {

                    console.log("I'm recovering password for " + data.email);

                    dataToSend = {
                        endpoint: 'users',
                        code: '3',
                        du: true,
                        multi: true,
                        uemail: data.email,
                        upass: data.password,
                        uid: data.id,
                        type: 0
                    };

                    $.ajax({
                        url: serverPath,
                        data: dataToSend,
                        contentType: "application/x-www-form-urlencoded",
                        type: "POST",
                        dataType: "json",
                        success: function (data, textStatus, jqXHR) {
                            context.commit("recoverUserPassword", data.resp);
                        },
                        error: function (data, textStatus, jqXHR) {
                            console.log("textStatus: " + textStatus);
                            console.log("Server Not Found: Please Try Again Later!");
                        }
                    });
                } else {
                    console.log("Invalid Email or Passcode");
                    context.commit("recoverUserPassword", data.resp);
                }

            },
            error: function (data, textStatus, jqXHR) {
                console.log("textStatus: " + textStatus);
                console.log("Server Not Found: Please Try Again Later!");
            }
        });
    },
    /**     
     * Register a new user (checks email doesn't exist in db)
     * @param {object} data - Contains user's email, password, firstName, lastName, occupation, birthday, and city
     */
    registerNewUser: (context, data) => {
        console.log("Verifying email " + data.email + " is not in db");
        state.userFlags["registerUser"] = "";
        var dataToSend = {
            endpoint: 'users',
            code: '4',
            uemail: data.email
        };

        $.ajax({
            url: serverPath,
            data: dataToSend,
            contentType: "application/json",
            type: "GET",
            dataType: "json",
            success: function (dataGet, textStatus, jqXHR) {
                var response = dataGet.resp;
                if (response.length != 0) {
                    console.log("The email entered already exists. Please enter another email.");
                    context.commit("registerNewUser", {
                        0: {
                            number: '0'
                        }
                    });
                } else {
                    console.log("I'm adding user " + name);

                    dataToSend = {
                        endpoint: 'users',
                        code: '1',
                        du: true,
                        uemail: data.email,
                        upass: data.password,
                        uname: data.firstName,
                        ulname: data.lastName,
                        uoccu: data.occupation,
                        ubdate: data.birthday,
                        ucity: data.city
                    };

                    $.ajax({
                        url: serverPath,
                        data: dataToSend,
                        contentType: "application/x-www-form-urlencoded",
                        type: "POST",
                        dataType: "json",
                        success: function (data, textStatus, jqXHR) {
                            context.commit("registerNewUser", data.resp);
                        },
                        error: function (data, textStatus, jqXHR) {
                            console.log("textStatus: " + textStatus);
                            console.log("Server Not Found: Please Try Again Later!");
                        }
                    });

                }


            },
            error: function (data, textStatus, jqXHR) {
                console.log("textStatus: " + textStatus);
                console.log("Server Not Found: Please Try Again Later!");
            }
        });
    },

    /**   
     * Submits a new business request
     * @param {object} data - Contains the company's name, website, description, phone, email, address, city, country, zipcode
     */
    addSubmission: (context, data) => {
        console.log("Adding submission");

        state.userFlags['addSubmission'] = "";

        var dataToSend = {
            endpoint: 'submissions',
            uid: data.id,
            du: true,
            sname: data.name,
            swebsite: data.website,
            sdescription: data.description,
            sphone: data.phone,
            semail: data.email,
            sline: data.address,
            scity: data.city,
            scountry: data.country,
            szip: data.zipcode,
            code: '3'
        };

        $.ajax({
            url: serverPath,
            data: dataToSend,
            contentType: "application/json",
            type: "GET",
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                context.commit("addSubmission", data.resp);
            },
            error: function (data, textStatus, jqXHR) {
                console.log("textStatus: " + textStatus);
                console.log("Server Not Found: Please Try Again Later!");
            }
        });
    }



};

export default {
    state,
    getters,
    mutations,
    actions
}