import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./features/addJob/jobSlice";
import allJobSlice from "./features/allJobs/allJobSlice";
import userSlice from "./features/user/userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobSlice,
  },
});
