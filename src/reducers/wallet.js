// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET } from '../actions';

const initialWalletState = {
  currencies: [],
  // expenses: [],
};

const wallet = (state = initialWalletState, { type, data }) => {
  switch (type) {
  case SET_WALLET:
    return { ...state, currencies: data };
  default:
    return state;
  }
};

export default wallet;
