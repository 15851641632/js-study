<template>
	<div id="app">
	<div>
		<a v-link="{path:'/home'}" :class="{ 'bg': true,'hov':true}">主页</a>
		<a v-link="{path:'/news'}" :class="{ 'bg': true,'hov':true}">新闻</a>
        <a v-link="{path:'/menu'}" :class="{ 'bg': true,'hov':true}">菜单</a>
        <a v-link="{path:'/connect'}" :class="{ 'bg': true,'hov':true}">联系我们</a>

	</div>
     <div :class="{clearfix:true}"></div>
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
/*.v-link-active{
    font-size: 20px;
    color: red;
}*/
body{
	background:#ccc;
}
.bg{
    display: block;
    width: 200px;
    float: left;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border:1px solid black;
}
.hov:hover{
    background-color: red;
}
.clearfix{
    content: '';
    display: block;
    clear: both;
}
</style>