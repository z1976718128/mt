import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios" //引入axios
import { stat } from "fs";
Vue.use(Vuex)

export let store =new Vuex.Store({
    state: {
         data:[],

    },
    mutations:{
        getData(state,res){
            state.data = res.data.dataInfo;         
            console.log(state.data); 
        }
    },
    actions:{
        getData(context,callback){
            Axios.get("/api/sData").then((res) => {
                callback && callback()
                context.commit("getData",res)
            })          
        }
    },
    getters:{
        
    }
});
