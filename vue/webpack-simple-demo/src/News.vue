<template>
<!--     <ul>
    	<li v-for="value in msg">{{value}}</li>
    </ul> -->
  <h1>我是新闻</h1>
  <input type="button" value="数据" @click="get">
  <ul>
  <li v-for='value in ajax_msg'><a v-link="{path:'/news/detail/'+ value.id+''}">{{value.title}}</a></li>
  	<!-- <li v-for='value in msg'><a v-link="{ name:'history', params: { pageid: 123, dataId:456 }}">{{value.title}}</a></li> -->
  	<!-- <a v-link="{path:'/news/detail/001'}">第一条新闻</a> -->
  	<!-- <li><a v-link="{path:'/news/detail/002'}">第二条新闻</a></li> -->
  </ul>
  <router-view></router-view>
</template>

<script>
// import Res from '../static/vue-resource.js'
// import routerRes from 'vue-resource'

export default {
  data () {
    return {
  //     msg3: [{
  //     	'id':1,
  //     	'title':'标题1111111',
  //     	'content':'内容11111111'
  //     	},
  //     	{
  //     	'id':2,
  //     	'title':'标题22222222',
  //     	'content':'内容22222222'
  //     	},
		// {
  //     	'id':3,
  //     	'title':'标题33333333',
  //     	'content':'内容33333333'
  //     	},
  //     ],
      ajax_msg:'',
    }
  },
  methods:{
  	
  },
  //加载完毕就触发ajax
  ready:function(){
  	var url="../test.php";
        // console.log(this.$http.get());    	
        this.$http.get(url).then(function(res){
             var json=res.body;
             this.ajax_msg=eval("(" + json +")");
             console.log(this.ajax_msg);
             // eval("(" + json +")");
        },function(res){
        	
            console.info(res);
        })
  }

}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>