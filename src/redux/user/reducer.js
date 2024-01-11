import UserActionTypes from "./action-types";

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload }; // Definindo o novo valor de currentUser como sendo igual ao valor da chave "payload" da action que foi despachada no index.jsx. Agora currentUser equivale ao valor do payload da action, não sendo mais null (estado inicial definido acima)
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export default userReducer;
