<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <p>{{count}}</p>
    <p>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </p>
    <p>
      <button @click="addAct">async+</button>
      <button @click="reduceAct">async-</button>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store';
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count']),
  },
  methods: {
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAct','reduceAct'])
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
