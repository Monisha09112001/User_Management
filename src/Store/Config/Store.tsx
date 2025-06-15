import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "../Reducers/MainReducer"

export const store = configureStore({
  reducer: {
    main:MainReducer
  },
});
