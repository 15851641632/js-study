<template>
	<div id="app">
	<div>
		<a v-link="{path:'/home'}">主页</a>
		<a v-link="{path:'/news'}">新闻</a>
        <a v-link="{path:'/menu'}">菜单</a>
	</div>
	<router-view></router-view>
	</div>
</template>
<script>
import Menu from './components/Menu.vue'
   export default{
     data(){
     	return{
     	   msg:'welcome vue 导出数据'
     	} 
     },
     methods:{
     	change(){
     		this.msg='哇哈哈';
     	}
     },
     components:{
        'my-menu':Menu
     }
   }
</script>	

<style>
.v-link-active{
    font-size: 20px;
    color: red;
}
body{
	background:#ccc;
}
</style>