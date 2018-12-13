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
  //点击路由切换不起作用加上	
  //mode:'history',  	
  routes: [
    		{
				path:"/home",
				//component:Home,
				//路由懒加载
				component: (resolve) => require(['@/pages/Home/Home.vue'],resolve),
				meta: { 
					showFoot:true
				 }
				
    		},
    		{
				path:"/order",
				//component:Order,
				component: (resolve) => require(['@/pages/Order/Order.vue'],resolve),				
				meta: { 
					showFoot:true
				 }
    		},
    		{
    			path:"/profile",
				//component:Profile,
				component: (resolve) => require(['@/pages/Profile/Profile.vue'],resolve),				
				meta: { 
					showFoot:true
				 }
    		},
    		{
    			path:"/seach",
				//component:Seach,
				component: (resolve) => require(['@/pages/Seach/Seach.vue'],resolve),								
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
				//component:Login,
				component: (resolve) => require(['@/pages/Login/Login.vue'],resolve),								
			}
  ]
});

