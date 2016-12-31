// import 模块名 from 地址
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import RouterConfig from './router.config.js'

Vue.use(VueRouter)


//引入模块
//将这一部分放入router_config.js
// import Home from './components/Home.vue'
// import News from './components/News.vue'
// import Menu from './components/Menu.vue'

//配置路由
const router=new VueRouter();
router.map(RouterConfig)
router.redirect({
	'/':'/home'
})
router.start(App,'#app');
// new Vue({
// 	el:'body',
// 	components:{
// 		app:App
// 	}
// })