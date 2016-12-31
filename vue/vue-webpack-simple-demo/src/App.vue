<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <input type="button" value="点击改变" @click="change">
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  },
  methods:{
    change(){
      var str=this.msg;
      str=str.split('').reverse();
      this.msg=str;
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
