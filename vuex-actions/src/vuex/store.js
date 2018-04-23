import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    count: 1,
}

const mutations = {
    add(state) {
        state.count ++;
    },
    reduce(state) {
        state.count --;
    }
}

const getters = {
    count() {
        return state.count += 100;
    }
}

const actions = {
    addAct (context) {
        setTimeout(() => {
            context.commit('add');
        }, 3000);
    },
    reduceAct (context) {
        setTimeout(() => {
            context.commit('reduce');
        }, 3000);
    }
}

const store = new Vuex.Store({
    state, mutations, getters, actions
})

export default store