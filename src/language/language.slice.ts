import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Language, Languages } from "./languages";
import { RootState } from "../store";
export interface LanguageState {
  language: Language;
}
const isLanguageAvailable = (lang: string): boolean => {
  return Languages.some((definedLang) => definedLang === lang);
};
const getBrowserLanguage = (): Language => {
  const lang = window.navigator.languages.find(isLanguageAvailable);
  if (lang) return lang as Language;
  if (isLanguageAvailable(window.navigator.language))
    return window.navigator.language as Language;
  return "en";
};

const initialState: LanguageState = {
  language: getBrowserLanguage(),
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
