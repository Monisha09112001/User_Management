import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReducerTypes } from "../Store.types";
import { loginService, userListService } from "../../Services/Apiservices";

export const CallLogin = createAsyncThunk(
  "main/CallLogin",
  async (data: any) => {
    const res = await loginService(data);
    return res;
  }
);

export const getListUser = createAsyncThunk(
  "main/getListUser",
  async (page: any) => {
    const res = await userListService(page);
    return res;
  }
);

const initialState: ReducerTypes = {
  user: {},
  token: {},
  loading: false,
  error: "",
};

const { reducer, actions } = createSlice({
  name: "main",
  initialState,
  reducers: {
    UpdateUser: (state, action) => {
      state.user = action.payload;
    },
    Updatetoken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    //login
    builder
      .addCase(CallLogin.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(CallLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(CallLogin.rejected, (state) => {
        state.loading = false;
        state.error = "Login failed";
      })

      //dashboard
      .addCase(getListUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getListUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getListUser.rejected, (state) => {
        state.loading = false;
        state.error = "Login failed";
      });
  },
});

export const { UpdateUser, Updatetoken } = actions;
export default reducer;
