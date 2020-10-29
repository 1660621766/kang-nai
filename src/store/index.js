import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    resturantName: '飞歌餐馆' 
}
 
// 注册上面引入的各大模块
const store = new Vuex.Store({
    state,    
    getters:[],  
    actions:[], 
    mutations:[]  
})
 
export default store