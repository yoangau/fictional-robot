import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { LanguageMap, Languages } from '../language/languages';
import { useSelector, useDispatch } from 'react-redux';
import { selectLanguage } from '../language/language.slice';
import Fuse from 'fuse.js';
import { articles } from '../../articles/articles';
import { changeArticles } from '../article/articles.slice';

export const SearchLanguage: LanguageMap<string> = {
  fr: 'Rechercher',
  en: 'Search',
};

export const Search = () => {
  const dispatch = useDispatch();

  const language = useSelector(selectLanguage);
  const fuse = new Fuse(articles, {
    keys: [...Languages.map((l) => `title.${l}`), ...Languages.map((l) => `description.${l}`)],
  });

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder={SearchLanguage[language]}
        className="mr-sm-2"
        onChange={({ target }) => {
          if (!target.value) {
            dispatch(changeArticles({ articles: articles }));
            return;
          }
          dispatch(changeArticles({ articles: fuse.search(target.value).map((res) => res.item) }));
        }}
      />
    </Form>
  );
};
