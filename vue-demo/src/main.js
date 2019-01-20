// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'lib-flexible/flexible.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

import Axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios,Axios)

import {store} from "@/store/store"

Vue.config.productionTip = false

/* 
全局守卫
router.beforeEach((to, from, next) => {
  //console.log(to)
  const user=this.sj = sessionStorage.getItem("user")	
  const name=this.pas = sessionStorage.getItem("name")	
    if (!user || !name) {//未登录
        if (to.path !== '/login') {//跳转到登录页
            return next({path: '/login'});
        }else {
            next();
        }
    }else {//已登录
        if (to.path === '/login') {//跳转到首页
            return next({path: '/home'});
        }
        next();
    }
})
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
