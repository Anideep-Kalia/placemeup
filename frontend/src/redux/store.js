import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./slices/register";

export const store = configureStore({
  reducer: {
    register: registerSlice,
  },
});

