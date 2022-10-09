import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {uid:"", displayName: ""},
  },
  reducers: {
    login: (state, action)  => {
      state.user = action.payload
    },
    logout: (state)  => {
      state.user = {uid: "", displayName: ""}
    },
  },
})

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;