// Coloque aqui suas actions
export const SET_USER = 'SET_USER';
export const SET_WALLET = 'SET_WALLET';
export const REQUEST_API = 'REQUEST_API';
export const GET_EXCHANGE = 'GET_EXCHANGE';
export const SAVE_STATE = 'SAVE_STATE';

// Para dados do usuário na pages/Login:
export const setUser = (data) => ({ type: SET_USER, data });

// Para dados da carteira no pages/Wallet:
export const requestAPI = () => ({ type: REQUEST_API });
export const setWallet = (data) => ({ type: SET_WALLET, data });

// Para requisição das moedas, exceto USDT:
export function fetchAPI() {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const currencies = (Object.keys(data)).filter((currencie) => currencie !== 'USDT');
      // currencies.splice(1, 1); // https://www.horadecodar.com.br/2020/01/28/javascript-como-remover-um-elemento-de-um-array/
      console.log(data);
      dispatch(setWallet(currencies));
    } catch (error) {
      console.log(error);
    }
  };
}

export const getExchange = (data) => ({ type: GET_EXCHANGE, data });

// Para requisição dos dados das moedas para exchangeRates:
export function fetchExchange() {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(getExchange(data));
    } catch (error) {
      console.log(error);
    }
  };
}

// Action para salvar state no estado global:
export const saveState = (data) => ({ type: SAVE_STATE, data });
