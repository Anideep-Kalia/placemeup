import { createSlice } from "@reduxjs/toolkit";

const collegeAdminSlice = createSlice({
  name: "collegeAdmin",
  initialState: {
    adminId: null,
  },
  reducers: {
    setAdminId: (state, action) => {
      state.adminId = action.payload;
    },
  },
});

export const { setAdminId } = collegeAdminSlice.actions;

export default collegeAdminSlice.reducer;