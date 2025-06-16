import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReducerTypes } from "../Store.types";
import {
  CreateUserService,
  DeleteUserService,
  loginService,
  UpdateUserService,
  userListService,
} from "../../Services/Apiservices";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../../Utilities/Methods";

export const CallLogin = createAsyncThunk(
  "main/CallLogin",
  async (data: { email: string; password: string }) => {
    const res = await loginService(data);
    return res;
  }
);

export const getListUser = createAsyncThunk(
  "main/getListUser",
  async ({ page, data }: { page: number; data: any }) => {
    console.log(page, data, "data===");

    const res = await userListService(page, data);
    return res;
  }
);

export const CreateUser = createAsyncThunk(
  "main/CreateUser",
  async (data: any) => {
    const res = await CreateUserService(data);
    return res;
  }
);

export const UpdateUser = createAsyncThunk(
  "main/UpdateUser",
  async ({ values, UserID }: { values: any; UserID: number }) => {
    console.log(UserID, values, "valuu");

    const res = await UpdateUserService(values, UserID);
    return res;
  }
);

export const DeleteUser = createAsyncThunk(
  "main/DeleteUser",
  async ({ UserID }: { UserID: any }) => {
    const res = await DeleteUserService(UserID);

    return res;
  }
);

const initialState: ReducerTypes = {
  userData: {},
  token: "",
  loading: false,
  error: "",
  userid: "",
};

const { reducer, actions } = createSlice({
  name: "main",
  initialState,
  reducers: {
    UpdateUserID: (state, action) => {
      state.userid = action.payload;
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
        setLocalStorageData("token", action.payload);
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(CallLogin.rejected, (state) => {
        console.log("rejectt");
        state.loading = false;
        state.error = "Login failed";
      })

      //dashboard
      .addCase(getListUser.pending, (state) => {
        console.log("userpen");

        state.loading = true;
        state.error = "";
      })
      .addCase(getListUser.fulfilled, (state, action) => {
        console.log("userfulfill");
        const userdata = getLocalStorageData("user");
        console.log(userdata, "userdata==", action?.payload?.data);
        const totalData = [
          ...(userdata?.data ?? []),
          ...(action?.payload?.data ?? []),
        ];

        setLocalStorageData("user", {
          ...action.payload,
          data: totalData,
        });

        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(getListUser.rejected, (state) => {
        console.log("userreject");

        state.loading = false;
        state.error = "failed";
      })

      //createuser
      .addCase(CreateUser.pending, (state) => {
        console.log("userpen");

        state.loading = true;
        state.error = "";
      })
      .addCase(CreateUser.fulfilled, (state, action) => {
        console.log("userfulfill");
        const userdata = getLocalStorageData("user");
        console.log(userdata, action.payload, "userdata==");

        setLocalStorageData("user", {
          ...userdata,
          data: [...userdata?.data, action.payload],
        });

        state.loading = false;
      })
      .addCase(CreateUser.rejected, (state) => {
        console.log("userreject");

        state.loading = false;
        state.error = "failed";
      })

      //updateuser
      .addCase(UpdateUser.pending, (state) => {
        console.log("userpen");

        state.loading = true;
        state.error = "";
      })
      .addCase(UpdateUser.fulfilled, (state, action) => {
        console.log("userfulfill");
        const userdata = getLocalStorageData("user");
        console.log(userdata, "userdata==");

        setLocalStorageData("user", {
          ...userdata,
          data: userdata?.data?.map((ele: any) => {
            console.log(ele?.id, action.payload, "id===");

            return ele?.id === action?.payload?.id ? action?.payload : ele;
          }),
        });
        state.loading = false;
      })
      .addCase(UpdateUser.rejected, (state) => {
        console.log("userreject");

        state.loading = false;
        state.error = "failed";
      })

      //updateuser
      .addCase(DeleteUser.pending, (state) => {
        console.log("userpen");

        state.loading = true;
        state.error = "";
      })
      .addCase(DeleteUser.fulfilled, (state, action) => {
        console.log("userfulfill");
        const userdata = getLocalStorageData("user");
        console.log(userdata, state?.userid, "userdata==");

        setLocalStorageData("user", {
          ...userdata,
          data: userdata?.data?.filter((ele: any) =>
            ele?.id !== state?.userid ? ele : null
          ),
        });
        state.loading = false;
      })
      .addCase(DeleteUser.rejected, (state, action) => {
        console.log("userreject");

        const userdata = getLocalStorageData("user");
        console.log(userdata, state?.userid, "userdata==");

        setLocalStorageData("user", {
          ...userdata,
          data: userdata?.data?.filter((ele: any) =>
            ele?.id !== state?.userid ? ele : null
          ),
        });
        state.loading = false;
        state.error = "failed";
      });
  },
});

export const { UpdateUserID } = actions;
export default reducer;
