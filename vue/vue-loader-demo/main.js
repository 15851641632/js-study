// import 模块名 from 地址
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import RouterConfig from './router.config.js'
import VueResource from './vue-resource.js'

Vue.use(VueRouter)
Vue.use(Vuex)

//引入模块
//将这一部分放入router_config.js
// import Home from './components/Home.vue'
// import News from './components/News.vue'
// import Menu from './components/Menu.vue'

//配置路由
const router=new VueRouter();
router.map(RouterConfig)
router.redirect({
	//把默认主页定向为home
	'/':'/home'
})
router.start(App,'#app');
