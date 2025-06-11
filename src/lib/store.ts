import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/user/user-slice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice.reducer,
    },
  });
};
export const store = makeStore();
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
