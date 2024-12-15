import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowPassword: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    togglePasswordVisibility(state, action) {
      state.isShowPassword = action.payload === "password" ? true : false;
    },
  },
});

export const { togglePasswordVisibility } = userSlice.actions;

export default userSlice.reducer;

export const getUserStates = (store) => store.user;
