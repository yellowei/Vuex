<template>
    <div>
        <h2>{{msg}}</h2><hr>
        <p>{{$store.state.count}}</p>
        <p><button @click="$store.commit('add')">+</button></p>    
        <p><button @click="$store.commit('reduce')">-</button></p>    
    </div>
</template>


<script>
    import store from '@/vuex/store'
    export default {
        data () {
            return {
                msg: 'Hello Vuex!',
            }
        },
        store
    }
</script>