import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coolCount: 0,
    message: '',
    isTextHidden: true,
    isButtonDisabled: false,
    isWon: false,
  },
  actions: {
    increaseCoolCount(context) {
      context.commit('INCEASE_COOL_COUNT', 'store');
      if (this.state.coolCount === 7) {
        console.log(this.state.coolCount);
      } else {
        context.commit('CHANGE_COOL_MESSAGE', {
          message: 'You got a cool point',
        });
        context.commit('TOGGLE_IS_HIDDEN');
      }
    },
    decreaseCoolCount(context) {
      context.commit('DECREASE_COOL_COUNT', 'store');
      context.commit('CHANGE_COOL_MESSAGE', {
        message: 'You lost a cool point',
      });
    },
    decreaseCoolCountLots(context) {
      context.commit('DECREASE_COOL_COUNT_BY_THREE', 'store');
    },
    changeMessage(context, payload) {
      context.commit('CHANGE_COOL_MESSAGE', payload);
    },
    disableButton(context) {
      context.commit('DISABLE_BUTTON');
    },
    winGame(context) {
      context.commit('WIN_GAME');
    },
  },
  mutations: {
    INCEASE_COOL_COUNT(state) {
      state.coolCount++
    },
    DECREASE_COOL_COUNT(state) {
      state.coolCount--
    },
    DECREASE_COOL_COUNT_BY_THREE() {
      state.coolCount -= 3;
    },
    CHANGE_COOL_MESSAGE(state, payload) {
      state.message = payload.message;
    },
    TOGGLE_IS_HIDDEN(state) {
      state.isHidden = !state.isHidden;
    },
    DISABLE_BUTTON(state) {
      state.isButtonDisabled = true;
    },
    WIN_GAME(state) {
      state.isWon = true;
    },
  },
  getters: {
    coolCount(state) {
      return state.coolCount;
    },
    message(state) {
      return state.message;
    },
    isHidden(state) {
      return state.isTextHidden;
    },
    isButtonDisabled(state) {
      return state.isButtonDisabled;
    },
    isWon(state) {
      return state.isWon;
    },
  },
  modules: {
  },
});
