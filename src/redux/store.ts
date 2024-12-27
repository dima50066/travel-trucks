import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./slice";
import filtersReducer from "./filterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const campersPersistConfig = {
  key: "campers",
  storage,
  whitelist: ["favorites"],
};

const persistedCampersReducer = persistReducer(
  campersPersistConfig,
  campersReducer
);

const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
