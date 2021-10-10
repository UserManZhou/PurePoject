import Vue from 'vue'
import axios from "axios";
import Vuex from 'vuex'
import $qs from "qs";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    },
  mutations: {
    /*saveNote(state,playload){
      console.log("save",playload)
    }*/
  },
  actions: {
    saveNote(state,playload) {
      console.log('actions', playload)
     /* let params = new URLSearchParams();
      params.append('title',playload.title)
      params.append('context',playload.context)
      params.append('summary',playload.summary)*/
      axios.post("vue-note/saveNote",$qs.stringify(playload),{baseURL:'http://localhost:8899/',timeout:5000}).then(success=>{
        console.log(success)})
    }
  },
  modules: {
  },
  getters: {}
})
