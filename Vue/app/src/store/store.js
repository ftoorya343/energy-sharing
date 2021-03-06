import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const model_parameters = {
    state: {

    },

    mutations: {
        save_server_page(state, payload) {
            state[payload.model_page_name] = payload.data;
        }
    }
};

const frontend_state = {
    state: {
        selected_model: false,
    },

    mutations: {
        save_page(state, payload) {
            state[payload.model_page_name] = payload.data;
        },
        load_config(state, payload){
            console.log('store.js Loading Config', payload)
            for(var item in payload){
                state[item] = payload[item]
            }
            console.log('store.js new state', state)
            // state = payload;
        },
        clear_params(state){
            console.log('store.js clearing state');
            for(var item in state){
                delete state[item];
            }
            state.selected_model = false;
        }

    }
};

export const store = new Vuex.Store({
    strict: true,
    modules: {
        frontend_state: frontend_state,
        model_parameters: model_parameters,
    },

    state: {
        model:"mike"
    },

    getters: {
    },
    mutations: {
        model(state, model){
            state.model = model;
        }
    },
});


