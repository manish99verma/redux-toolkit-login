// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "Guest", isLoggedIn: false };

const userSlice = createSlice({
  name: "user", // name for the slice
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
