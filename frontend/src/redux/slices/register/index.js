import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "register",
  initialState: {
    name: "",
    email: "",
    collegeName: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.collegeName = action.payload.collegeName;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;