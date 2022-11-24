export default {
    SET_RATES_TO_STATE: (state, rates) => {
        let resultArr = Object.entries(rates).map(([key, value]) => ({key,value}));
        state.selectedСurrency = resultArr;
        state.rates = resultArr;
    },
    SET_SELECTED_RATES_TO_STATE: (state, currencies) => {
        let resultArr = Object.entries(currencies).map(([key, value]) => ({key,value}));
        state.selectedСurrency = resultArr;
    }
}