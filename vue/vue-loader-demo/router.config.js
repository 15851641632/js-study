import Home from './components/Home.vue'
import News from './components/News.vue'
import Menu from './components/Menu.vue'
import Login from './components/Login.vue'
import Reg from './components/Reg.vue'
import Detail from './components/Detail.vue'
import Connect from './components/Connect.vue'


export default{
	'/home':{
		component:Home,
		subRoutes:{
			'login':{
				component:Login
			},
			'reg':{
				component:Reg
			}	
		}
	},
	'/news':{
		component:News,
		subRoutes:{
			'detail/:ids':{
				//需要显示的子组件的内容
				component:Detail
			}
		}
	},
	'menu':{
		component:Menu
	},
	'connect':{
		component:Connect,
		subRoutes:{
			'con/:phone':{
				component:Detail
			}
		}
	},

}

