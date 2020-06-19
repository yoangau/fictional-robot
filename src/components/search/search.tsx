import React, { useState } from 'react';
import { Form, FormControl, Dropdown, Badge } from 'react-bootstrap';
import { LanguageMap, Languages } from '../language/languages';
import { useSelector, useDispatch } from 'react-redux';
import { selectLanguage } from '../language/language.slice';
import Fuse from 'fuse.js';
import { articles as articlesSource } from '../../articles/articles';
import { changeArticles, selectArticles } from '../article/articles.slice';
import { useHistory } from 'react-router-dom';
import { SearchResult } from './search-result';

export const SearchLanguage: LanguageMap<string> = {
  fr: 'Rechercher',
  en: 'Search',
};

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
    <Form
      style={{ position: 'relative' }}
      onSubmit={(event: React.FormEvent) => {
        event.preventDefault();
        dispatch(changeArticles({ articles: articlesSource }));
        if (articles.length !== 0 && searchValue) history.push(`/${articles[0].url}`);
        updateSearchValue('');
      }}
    >
      <FormControl
        type="text"
        placeholder={SearchLanguage[language]}
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
      <div style={{ position: 'absolute', width: '100%', zIndex: 1 }}>
        {searchValue &&
          articles.slice(0, 3).map((article, i) => (
            <SearchResult
              key={`search-result-${i}`}
              onClick={() => {
                history.push(`/${article.url}`);
                updateSearchValue('');
              }}
              title={article.title[language]}
              date={article.date}
              description={article.description[language]}
            />
          ))}
      </div>
    </Form>
  );
};
