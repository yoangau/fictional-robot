import React, { useState } from 'react';
import { Languages } from '../../specs/language/languages';
import { useSelector, useDispatch } from 'react-redux';
import { selectLanguage } from '../language/language.slice';
import Fuse from 'fuse.js';
import { articlesSource } from '../../specs/articles/articles';
import { changeArticles, selectArticles } from '../article/articles.slice';
import { useHistory } from 'react-router-dom';
import { SearchSource } from '../../specs/search/search';
import styled from '@emotion/styled';

const SearchInput = styled.input`
  border-radius: 0.4rem;
  padding-left: 0.4rem;
  outline: none;
  border: none;
`;

export const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const language = useSelector(selectLanguage);
  const { articles } = useSelector(selectArticles);
  const [searchValue, updateSearchValue] = useState('');

  const fuse = new Fuse(articlesSource, {
    keys: [...Languages.map((l) => `title.${l}`), ...Languages.map((l) => `description.${l}`)],
  });

  return (
    <form
      onSubmit={(event: React.FormEvent) => {
        event.preventDefault();
        dispatch(changeArticles({ articles: articlesSource }));
        if (articles.length !== 0 && searchValue) history.push(`/${articles[0].url}`);
        updateSearchValue('');
      }}
    >
      <SearchInput
        type="text"
        placeholder={SearchSource[language]}
        className="mr-sm-2"
        value={searchValue}
        onChange={({ target }) => {
          updateSearchValue(target.value);
          if (!target.value) {
            dispatch(changeArticles({ articles: articlesSource }));
            return;
          }
          dispatch(changeArticles({ articles: fuse.search(target.value).map((res) => res.item) }));
        }}
      />
    </form>
  );
};
