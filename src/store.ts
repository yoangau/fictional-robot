import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import languageReducer from './components/language/language.slice';
import articlesReducer from './components/article/articles.slice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    articles: articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
