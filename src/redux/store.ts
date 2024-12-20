import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./slice";
import filtersReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
