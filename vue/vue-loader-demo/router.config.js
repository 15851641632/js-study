import Home from './components/Home.vue'
import News from './components/News.vue'
import Menu from './components/Menu.vue'
import Login from './components/Login.vue'
import Reg from './components/Reg.vue'
import Detail from './components/Detail.vue'


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
			'detail/:id':{
				component:Detail
			}
		}
	},
	'menu':{
		component:Menu
	}

}

