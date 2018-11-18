import Vue from 'vue';

const state = {
    /** 
     * Object that holds current logged in user information 
     */
    administrator: {}
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
                "", {
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
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}