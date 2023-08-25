import { configureStore } from "@reduxjs/toolkit";
import workoutsListReducer from "../slices/workoutsList";

export const store = configureStore({
  reducer: {
    workoutsList: workoutsListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDisaptch = typeof store.dispatch;
