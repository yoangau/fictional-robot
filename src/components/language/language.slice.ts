import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language, Languages } from '../../specs/language/languages';
import { RootState } from '../../store';
export interface LanguageState {
  language: Language;
}
const findLanguageAvailability = (lang: string): Language | undefined => {
  for (const definedLang of Languages) {
    if (definedLang === lang.split('-')[0]) {
      return definedLang as Language;
    }
  }
  return;
};

const getBrowserLanguage = (): Language => {
  const lang = window.navigator.languages.map(findLanguageAvailability).find((l) => l);
  if (lang) return lang as Language;
  if (findLanguageAvailability(window.navigator.language)) return window.navigator.language as Language;
  return Languages[0];
};

const initialState: LanguageState = {
  language: getBrowserLanguage(),
};

export const slice = createSlice({
  name: 'language',
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
