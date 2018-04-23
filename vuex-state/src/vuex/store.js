import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 1
}

const mutations = {
    add() {
        state.count++;
    },
    reduce() {
        state.count--
    }
}

const store = new Vuex.Store({
    state,
    mutations
})

export default store