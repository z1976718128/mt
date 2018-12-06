import Vue from 'vue'
import Router from 'vue-router'

//引入模块
import Home from "@/pages/Home/Home"
import Order from "@/pages/Order/Order"
import Profile from "@/pages/Profile/Profile"
import Seach from "@/pages/Seach/Seach"
import Login from "@/pages/Login/Login"


Vue.use(Router)

export default new Router({
  routes: [
    		{
    			path:"/home",
				component:Home,
				meta: { 
					showFoot:true
				 }
				
    		},
    		{
    			path:"/order",
				component:Order,
				meta: { 
					showFoot:true
				 }
    		},
    		{
    			path:"/profile",
				component:Profile,
				meta: { 
					showFoot:true
				 }
    		},
    		{
    			path:"/seach",
				component:Seach,
				meta: { 
					showFoot:true
				 }
    		},
    		{
    			path:"/",
    			component:Home
    			
			},
			{
				path:"/login",
				component:Login,
			}
  ]
})
