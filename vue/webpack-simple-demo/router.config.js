import Home from './src/Home.vue'
import News from './src/News.vue'
import Login from './src/Login.vue'
import Reg from './src/Reg.vue'
import Detail from './src/Detail.vue'

export default {
	'home':{
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
	'news':{
		// name: 'history',
		component:News,
		subRoutes:{
			'detail/:id':{
				component:Detail
			}
		}
	} 
}