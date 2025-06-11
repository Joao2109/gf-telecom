import { createSlice } from "@reduxjs/toolkit";
export interface UserState {
  currentUser: {
    cpf: string;
    senha: string;
    nome: string;
    tel: string;
    email: string;
    plano: string | null;
    vencimento: string | null;
    funcao: string | null;
    salas: string[] | null;
    agendamentos: string[] | null;
  } | null;
}
const initialState: UserState = {
  currentUser: null,
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      if (!action.payload) return;
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    logout: (state) => {
      return {
        ...state,
        currentUser: null,
      };
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
