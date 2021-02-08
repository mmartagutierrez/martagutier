import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  language: "english", //default language
};

const getters = {
  currentLanguage(state) {
    return state.language;
  },
};

const actions = {
  SET_LANGUAGE({ commit }, languageName) {
    return commit("SET_LANGUAGE", languageName);
  },
};

const mutations = {
  SET_LANGUAGE(state, languageName) {
    return (state.language = languageName);
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
