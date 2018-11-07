import Vue from 'vue';
import Vuex from 'vuex';
import resources from './modules/resources';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters,
    mutations,
    actions,
    modules: {
        resources
    }

})