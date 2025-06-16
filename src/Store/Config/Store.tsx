import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "../Reducers/MainReducer"

export const store = configureStore({
  reducer: {
    main:MainReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
