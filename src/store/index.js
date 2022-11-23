import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rates: [],
    selectedСurrency: [],
  },
  getters: {
    RATES(state) {
      return state.rates
    },
    SELECTED_CURRENCY(state) {
      return state.selectedСurrency
    }
  },
  mutations: {
    SET_RATES_TO_STATE: (state, rates) => {
      let resultArr = Object.entries(rates).map(([key, value]) => ({key,value}));
      state.selectedСurrency = resultArr;
      state.rates = resultArr;
    },
    SET_SELECTED_RATES_TO_STATE: (state, currencies) => {
      let resultArr = Object.entries(currencies).map(([key, value]) => ({key,value}));
      state.selectedСurrency = resultArr;
    }
  },
  actions: {
    async GET_RATES_FROM_API({commit}) {
        let response = await fetch('https://api.exchangerate-api.com/v4/latest/USD', {
          method: 'GET',
        })
        .then(promise => promise.json())
        .then(data => data.rates)

        commit('SET_RATES_TO_STATE', response)
    },
    async GET_SELECTED_RATES_FROM_API({commit}, currency) {
      let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`, {
          method: 'GET',
        })
        .then(promise => promise.json())
        .then(data => data.rates)

        commit('SET_SELECTED_RATES_TO_STATE', response)
    }
  },
})
