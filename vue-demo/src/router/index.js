import Vue from 'vue'
import Router from 'vue-router'

//引入模块
import Home from "@/pages/Home/Home"
import Order from "@/pages/Order/Order"
import Profile from "@/pages/Profile/Profile"
import Seach from "@/pages/Seach/Seach"
import Login from "@/pages/Login/Login"
import Shop from "@/pages/Shop/Shop"
import ShopOrder from "@/pages/Shop/ShopOrder/ShopOrder"
import ShopComments from "@/pages/Shop/ShopComments/ShopComments"
import ShopInfo from "@/pages/Shop/ShopInfo/ShopInfo"

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
					title:"首页的路由",
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
				component: (resolve) => require(['@/pages/Seach/Seach.vue'],resolve),								
				meta: { 
					showFoot:true
				 }
    		},
    		{
    			path:"",
				component:Home
			},
			{
				path:"/login",
				component: (resolve) => require(['@/pages/Login/Login.vue'],resolve),								
			},
			{
				path:"/shop",
				component: (resolve) => require(['@/pages/Shop/Shop.vue'],resolve),		
				children:[
					{
						path:"/shop/ShopOrder",
						component: (resolve) => require(['@/pages/Shop/ShopOrder/ShopOrder.vue'],resolve),								
					},
					{
						path:"/shop/comments",
						component: (resolve) => require(['@/pages/Shop/ShopComments/ShopComments.vue'],resolve),								
					},
					{
						path:"/shop/info",
						component: (resolve) => require(['@/pages/Shop/ShopInfo/ShopInfo.vue'],resolve),								
					},
					{
						path:"",
						//路由重定向
						redirect:"/shop/ShopOrder"
					},
				]						
			},
  ]
});

