import Vue from 'vue';
let serverfile = "prds.php";

const state = {
    /** 
     * Object that holds current logged in user information 
     */
    user: {},

    recoveryUserEmail: ""
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
     * Http calls verifies if given email is in the database, if it is
     * it will proceed to send email with recovery password
     * @param {String} data - Object that contains user email 
     * @return {boolean} - Returns true if email is in db, and recover email sent was sucessfull, and false otherwise
     */
    verifyUserEmail: (context, data) => {
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
    }



};

export default {
    state,
    getters,
    mutations,
    actions
}