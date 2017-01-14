<template>
	<h3>我是新闻</h3>
	<ul>
		<li><a v-link="{path:'/news/detail/003'}">第一条新闻</a></li>
		<li><a v-link="{path:'/news/detail/002'}">{{ajax_msg}}</a></li>
	</ul>
	<router-view></router-view>
</template>
<script type="text/javascript">
	
	export default{
		data(){
			return {
				msg:'返回的数据',
				ajax_msg:'ajax'
			}
		},
		methods:{
			ajax:function(){
				var url='../test.php'
				this.$http.get(url).then(function(res){
                    console.log(res.data);
                },function(res){
                    console.info(res);
                })
			}
		}
	}
	
</script>