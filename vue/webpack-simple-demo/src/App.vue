<template>
  <div id="app">
  <input type="button" value="增加" @click="add">
  <div>现在的数字是:0</div>
    <h3>vue-loader+ vue-router</h3>
	<a v-link="{path:'/home'}">主页</a>
	<a v-link="{path:'/news'}">新闻</a>
	<router-view></router-view>
  </div>
</template>

<script>
import New from './News.vue'
import {mapGetters , mapActions} from  'vuex'
console.log('mapActions:'+mapActions);
export default {
  methods:{
    add(){
      alert(1);
    }
  }
  // methods:mapActions(['add'])
  // data () {
  //   return {
  //     msg: 'welcome vue '
  //   }
  // },
  // components:{
  // 	// 'new':New
  // },
  // methods:mapActions([
  //   'add'
  // ])
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
