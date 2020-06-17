import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Language } from "./languages";
import { RootState } from "../store";

export interface LanguageState {
  language: Language;
}

const initialState: LanguageState = {
  language: "en",
};

export const slice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const selectLanguage = (state: RootState) => state.language.language;

export const { changeLanguage } = slice.actions;

export default slice.reducer;
