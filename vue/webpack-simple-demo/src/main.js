import Vue from 'vue'
// import Vuex from 'vuex'
import store from './store.js'

import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from '../router.config.js'
import routerRes from 'vue-resource'


//引入路由模块
Vue.use(VueRouter)

//将routerRes挂载到Vue对象下
Vue.use(routerRes)


//配置路由
const router =new VueRouter();
router.map(routerConfig);
router.redirect({
	'/':'/home'
})
router.start(App,'#app');

new Vue({
  store:store,
  el: 'body',
  // components: { 
  // 	app:App,
  // },
})
