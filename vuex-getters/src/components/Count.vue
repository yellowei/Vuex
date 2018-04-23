<template>
    <div>
        <h2>{{msg}}</h2>
        <p>{{count}}</p>
        <p>
            <button @click="add(3)">+</button>
            <button @click="reduce(3)">-</button>
        </p>
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import { mapState, mapMutations, mapGetters } from 'vuex';
    export default {
        data () {
            return {
                msg: 'I`m your father!'
            }
        },
        computed: {
            ...mapState(['count']),
            // count() {
            //     return this.$store.getters.count;
            // }
            ...mapGetters(['count']),
        },
        methods: mapMutations(['add','reduce']),
        store
    }
</script>