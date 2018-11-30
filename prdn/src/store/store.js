import Vue from 'vue';
import Vuex from 'vuex';
import resources from './modules/resources';
import businesses from './modules/businesses';
import users from './modules/users';
import administrators from './modules/administrators';
import map from './modules/map';
import tags from './modules/tags';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        //Url for getting imgs from projects google drive folder
        //Add image id at the end for full url
        driveUrl: "https://drive.google.com/uc?export=view&id="
    },
    getters,
    mutations,
    actions,
    modules: {
        resources,
        businesses,
        users,
        administrators,
        map,
        tags
    }

})