import Vue from 'vue';

const state = {
    /** 
     * Object that holds current logged in user information 
     */
    user: {}
};

const getters = {};


const mutations = {
    /** 
     * Sets state.user data to the received response from http call
     * if credentials were correct it returns true, and false otherwise
     * @param {Array} data - Contains object with user data if login was valid, empty otherwis
     * @returns {boolean} - returns true if login was sucessfull, false otherwise
     */
    loginUser: (state, data) => {
        if (data.length > 0) {
            state.user = data[0];
            //Replace that Object with a fresh one. For example, 
            //using the stage-3 object spread syntax we can write it like this:
            //It gives reactivity and all components are aware if it changed
            state.user = { ...state.user
            }
            console.log("Login was succesful, following is the received user data");
            console.log(state.user);
            return true;
        } else {
            console.log("Login unsucessful");
            return false;
        }


    }
};


const actions = {

    loginUser: (context, data) => {
        let email = data.email;
        let pass = data.password;
        Vue.http
            .post(
                "", {
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
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}