// Coloque aqui suas actions
export const SET_USER = 'SET_USER';
// export const SET_WALLET = 'SET_WALLET';

export const setUser = (data) => (
  {
    type: 'SET_USER', data,
  }
);
