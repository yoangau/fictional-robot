import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { articlesSource } from '../../specs/articles/articles';
import { Article } from '../../specs/articles/article.interface';

export interface ArticlesState {
  articles: Array<Article>;
}

const initialState: ArticlesState = {
  articles: articlesSource,
};

export const slice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    changeArticles: (state, action: PayloadAction<ArticlesState>) => {
      return action.payload;
    },
  },
});

export const selectArticles = (state: RootState) => state.articles;

export const { changeArticles } = slice.actions;

export default slice.reducer;
