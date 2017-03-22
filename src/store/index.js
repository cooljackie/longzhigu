import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state ={
  tabSchoolCurrent: 0,
  tabVideoCurrent:0,
}

const mutations = {
  chargeTabCurrent (state, current){
    state.tabSchoolCurrent = current
  },
   chargeTabVideoCurrent (state, current){
    state.tabVideoCurrent = current
  }
}

const getters = {
  getTabCurrent (state){
    return state.tabSchoolCurrent
  },
  getTabVideoCurrent (state){
    return state.tabVideoCurrent
  }
}

const actions = {
  chargeTabCurrent (context,current){
    context.commit('chargeTabCurrent',current)
  },
  chargeTabVideoCurrent (context,current){
    context.commit('chargeTabVideoCurrent',current)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
