import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
//import api from '@/service/Api'
Vue.use(Vuex);


export default new Vuex.Store({
  strict: true,
  state: {
    user: null,
    token:null,
    isUserLoggedIn:false,
  },
  getters:{
   currentClass:state=>{
     return state.job
   }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
      if(token){
        state.isUserLoggedIn=true;
      }
      else{
        state.isUserLoggedIn=false;
      }
    },
  
  },
  actions: {
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    setToken({ commit }, token) {
      commit("setToken", token);
    },
  },
  plugins: [createPersistedState()]
});
 