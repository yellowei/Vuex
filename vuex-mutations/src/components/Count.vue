<template>
    <div>
        <h2>{{msg}}</h2>
        <hr>
        <p>{{count}}</p>
        <p><button @click="$store.commit('add', 3)">+</button><button @click="reduce(2)">-</button></p>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    import {mapState, mapMutations} from 'vuex';
    export default {
        data() {
            return {
                msg: 'Hello Vuex!'
            }
        },
        computed: mapState(['count']),
        methods: mapMutations(['add', 'reduce']),
        store,
    }
</script>