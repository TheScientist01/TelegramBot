import { configureStore } from "@reduxjs/toolkit";
import { languageReducer } from "./slices/language";

export const store = () => {
  return configureStore({
    reducer: {
      language: languageReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
