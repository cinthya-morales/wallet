// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET, SAVE_STATE } from '../actions';

const initialWalletState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialWalletState, { type, data }) => {
  switch (type) {
  case SET_WALLET:
    return { ...state, currencies: data };
  case SAVE_STATE:
    return { ...state, expenses: [data] };
  // case GET_EXCHANGE:
  //   return { ...state, expenses: data };
  default:
    return state;
  }
};

export default wallet;
