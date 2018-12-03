import Vue from 'vue';
let serverfile = "prds-tags.php"

const state = {
    /** Contains all tags in the system with their name and category */
    categories: {},
    tags: {},
    tagFlags: {
        addNewTag: "",
        editTag: "",
        removeTag: ""
    }
};

const getters = {
    /** Returns state.categories */
    getTags(state) {
        return () => {
            //console.log('test Get Resources');
            //console.log(state.resources);
            return state.categories;
        }
    }
};

const mutations = {

    /** set state.tags to the data received data from the http call */
    setTags: (state, data) => {
        state.tags = data;
        state.tags = { ...state.tags
        }
        console.log("This are the tags");
        console.log(data);
        let categories = {};
        //Get tag categories unique keys and add them 
        //to state.tags each category contains the tags related to it
        for (let tag of data) {
            let tagCategoryKey = tag.tagCategory.replace(/ +/g, "%20").toLowerCase();
            if (typeof categories[tagCategoryKey] === "undefined") {
                //This category is not in the categories dict
                categories[tagCategoryKey] = {
                    name: tag.tagCategory,
                    tags: {}
                };
            }
            let tagKey = tag.tagName.replace(/ +/g, "%20").toLowerCase();
            let tagName = tag.tagName;
            categories[tagCategoryKey].tags[tagKey] = {
                id: tag.tagId,
                name: tagName,
                category: tag.tagCategory
            }
        }
        console.log("Finished setting up tags");

        state.categories = categories;

        console.log("Finished setting up tag categories");

        //Replace that Object with a fresh one. For example, 
        //using the stage-3 object spread syntax we can write it like this:
        //It gives reactivity and all components are aware if it changed
        state.categories = { ...state.categories
        }
    },
    addNewTag: (state, data) => {
        state.tagFlags["addNewTag"] = data[0].number

        state.tagFlags = { ...state.tagFlags
        }
    },
    editTag: (state, data) => {
        state.tagFlags["editTag"] = data[0].number

        state.tagFlags = { ...state.tagFlags
        }
    },
    removeTag: (state, data) => {
        state.tagFlags["removeTag"] = data[0].number

        state.tagFlags = { ...state.tagFlags
        }
    }

};

const actions = {
    /** Get all tags with their id,category, and name and store it in state.tags  */
    setTags: (context) => {
        //Clear current tags object
        state.categories = {};

        Vue.http.get(serverfile, {
            params: {
                endpoint: 'tags',
                code: '2' //code to get all tags with their id,category, and name
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            //console.log(data);
            context.commit("setTags", data.resp);
        }).catch(err => {
            console.log("There was an error!");
            console.log(err);
        });
    },
    addNewTag: (context, data) => {

        return Vue.http
            .post(serverfile, {
                name: data.name,
                category: data.category
            }, {
                emulateJSON: true,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                params: {
                    endpoint: "tags",
                    code: "0", //add new tag
                    du: true
                }

            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log("Add new tag!");
                console.log(data.resp[0].number);
                context.commit('addNewTag', data.resp);
                return data.resp[0].number;
            });
    },
    /** Call to edit tag name, Expects tagId and new tagName */
    editTag: (context, data) => {
        return Vue.http
            .post(serverfile, {
                name: data.name,
                tagId: data.tagId
            }, {
                emulateJSON: true,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                params: {
                    endpoint: "tags",
                    code: "1", //add new tag
                    du: true
                }

            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log("Add new tag!");
                console.log(data.resp[0].number);
                context.commit('editTag', data.resp);
                return data.resp[0].number;
            });
    },
    /** Call to remove a  tag from the system, Expects tagId*/
    removeTag: (context, data) => {
        return Vue.http
            .post(serverfile, {
                tagId: data.tagId
            }, {
                emulateJSON: true,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                params: {
                    endpoint: "tags",
                    code: "2", //remove a tag
                    du: true
                }

            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log("Remove new tag!");
                console.log(data.resp[0].number);
                context.commit('removeTag', data.resp);
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