// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET, SAVE_STATE, TOTAL_EXPENSES } from '../actions';

const initialWalletState = {
  currencies: [],
  expenses: [],
  total: 0,
};

function sumExpenses(state) {
  if (state.expenses) {
    const sum = state.expenses.map(
      ({ currency, value, exchangeRates }) => (
        (Number(value) * Number(exchangeRates[currency].ask))),
    )
      .reduce(
        (prev, curr) => prev + curr, 0,
      ).toFixed(2);
    return sum;
  }
}

const wallet = (state = initialWalletState, { type, data }) => {
  switch (type) {
  case SET_WALLET:
    return { ...state, currencies: data };
  case SAVE_STATE:
    state.expenses.push(data);
    return state;
  case TOTAL_EXPENSES:
    return { ...state, total: sumExpenses(state) };
  default:
    return state;
  }
};

export default wallet;
