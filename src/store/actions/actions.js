export default {
    async GET_RATES_FROM_API({commit}) {
        try {
          let response = await fetch('https://api.exchangerate-api.com/v4/latest/USD', {
            method: 'GET',
          })
          .then(promise => promise.json())
          .then(data => data.rates)
  
          commit('SET_RATES_TO_STATE', response)
        } catch(error) {
            throw new Error(error);
        }
    },
    async GET_SELECTED_RATES_FROM_API({commit}, currency) {
        try {
          let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`, {
            method: 'GET',
          })
          .then(promise => promise.json())
          .then(data => data.rates)
  
          commit('SET_SELECTED_RATES_TO_STATE', response)
        } catch (error) {
          throw new Error(error);
        }
    }
}