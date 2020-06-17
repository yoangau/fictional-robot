import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import languageReducer from "./language/language.slice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
