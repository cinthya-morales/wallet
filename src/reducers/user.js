// Esse reducer será responsável por tratar as informações da pessoa usuária//
import { SET_USER } from '../actions';

const initialUserState = {
  email: '',
  senha: '',
};

const reducerUser = (state = initialUserState, { type, data }) => {
  switch (type) {
  case SET_USER:
    return { ...state, ...data };
  default:
    return state;
  }
};

export default reducerUser;
