import Vue from 'vue';
let serverfile = "prds.php";

const state = {
    /** 
     * Object that holds current logged in user information 
     */
    administrator: {},

    recoveryAdminEmail: ""
};

const getters = {};


const mutations = {
    /** 
     * Sets state.administrator data to the received response from http call
     * if credentials were correct.
     * @param {Array} data - Contains object with admin data if login was valid, empty otherwise
     */
    loginAdmin: (state, data) => {
        if (data.length > 0) {
            state.administrator = data[0];
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.administrator = { ...state.administrator
            }
        }
        console.log("Data received in mutations loginAdmin administrators.js");
        console.log(data);
        console.log("This is the administrator");
        console.log(state.administrator);

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
            state.recoveryAdminEmail = { ...state.recoveryAdminEmail
            }
        } else {
            state.recoveryAdminEmail = true; //The email doesn't exist in the db
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.recoveryAdminEmail = { ...state.recoveryAdminEmail
            }
            console.log('Recover Admin Email Sent');
        }

    }
};


const actions = {

    /** 
     * Makes http call to validate admin login credentials.
     * @param {Array} data - Contains object with admin email and password
     */
    loginAdmin: (context, data) => {
        let email = data.email;
        let pass = data.password;
        Vue.http
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
                return response.json();
            })
            .then(data => {
                context.commit('loginAdmin', data.resp);
            });
    },
    /**  
     * Http calls verifies if given admin email is in the database, if it is
     * it will proceed to send email with recovery password
     * @param {String} data - Object that contains admin email 
     * @return {boolean} - Returns true if admin email is in db, and recover email sent was sucessfull, and false otherwise
     */
    verifyAdminEmail: (context, data) => {
        let email = data.email;

        Vue.http
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
                            } else
                                //console.log("Email sent failed");
                                context.commit('recoveryAdminEmail', false);
                        });
                } else {
                    //console.log("Email is not in db");
                    context.commit('recoveryAdminEmail', false);
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