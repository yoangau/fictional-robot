import React, { Dispatch, SetStateAction, useState } from 'react';
import { Languages } from '../../specs/language/languages';
import { useSelector, useDispatch } from 'react-redux';
import { selectLanguage } from '../language/language.slice';
import Fuse from 'fuse.js';
import { articlesSource } from '../../specs/articles/articles';
import { changeArticles, selectArticles } from '../article/articles.slice';
import { useHistory } from 'react-router-dom';
import { SearchSource } from '../../specs/search/search';
import styled from '@emotion/styled';

interface SearchInputProps {
  show: boolean;
  changeShow?: Dispatch<SetStateAction<boolean>>;
}

const SearchInput = styled.input<SearchInputProps>(
  ({ show }: SearchInputProps) => `
  label: search;
  height: 2rem;
  border-radius: 1rem;
  padding-left: 1rem;
  outline: none;
  border: none;

  @media only screen and (max-width: 600px) {
    visibility: ${show ? 'visible' : 'hidden'};
    position: absolute;
    top: -50%;
    width: 50vw;
    right: -1rem;
    background: var(--bg-primary);
    color: var(--text-primary);
  }
`,
);

export const Search = ({ show, changeShow }: SearchInputProps) => {
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
        if (changeShow) changeShow(false);
      }}
    >
      <SearchInput
        show={show}
        type="text"
        placeholder={SearchSource[language]}
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
