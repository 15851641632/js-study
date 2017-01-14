<template>
	<span class="hidden_id">{{tid=$route.params.id}}</span>
	<strong>
		
		<!-- 可以读取？后面的参数 -->
		<!-- {{$route.query | json}} -->
		<!-- {{$parent.$data | json}} -->
		<div>{{ajax_msg}}</div>
		<!-- <div>{{parent}}</div> -->
		<input type="button" value="解构" @click="jie">
	</strong>
</template>
<script>
	export default{
		data(){
			return {
				// msg2:this.$parent.$data,
				// msg:News.msg,
				 // msg: [{
			  //     	'id':1,
			  //     	'title':'标题1111111',
			  //     	'content':'内容11111111'
			  //     	},
			  //     	{
			  //     	'id':2,
			  //     	'title':'标题22222222',
			  //     	'content':'内容22222222'
			  //     	},
			  //     ],
				//
				
				// ajax_msg:this.$parent.$data.msg3[0]['content'],
				tid:'',
				// ajax_msg:this.$route.params.id
				ajax_msg:''
			}
		},
		//时时监听hash值的变化
		watch:{
　　　　　　　tid:function(val){
				var g_id=val;
				if(this.$parent.$data.ajax_msg.length!=0){
					this.ajax_msg=this.$parent.$data.ajax_msg[g_id-1]['content'];
				}
				
			}
　　　　},
		methods:{
			jie(){
				console.log(this.$parent.$data.ajax_msg[0]);
				this.ajax_msg=this.$parent.$data.ajax_msg[this.$route.params.id-1]['content'];
			}
		}
		// ready:{
		// 	props:['parent']
		// }
		
	}
</script>
<style type="text/css">
	.hidden_id{
		display: none;
	}
</style>