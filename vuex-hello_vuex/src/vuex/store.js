import Vue from 'vue'
import Vuex, { mapMutations } from 'vuex'

Vue.use(Vuex)

const state = {
    count: 1
}

const mutations = {
    add: function (state) {
        state.count++;
    },
    reduce: function (state) {
        state.count--;
    }
}

const store = new Vuex.Store({
    state,
    mutations
})

export default store

// export default new Vuex.Store({
//     state
// })