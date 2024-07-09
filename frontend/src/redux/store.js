import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./slices/register";
import collegeadminSlice from "./slices/collegeAdminSlice";

export const store = configureStore({
  reducer: {
    register: registerSlice,
    collegeAdmin: collegeadminSlice,
  },
});

