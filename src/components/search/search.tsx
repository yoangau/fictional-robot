import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { LanguageMap, Languages } from '../language/languages';
import { useSelector, useDispatch } from 'react-redux';
import { selectLanguage } from '../language/language.slice';
import Fuse from 'fuse.js';
import { articles as articlesSource } from '../../articles/articles';
import { changeArticles, selectArticles } from '../article/articles.slice';
import { useHistory } from 'react-router-dom';

export const SearchLanguage: LanguageMap<string> = {
  fr: 'Rechercher',
  en: 'Search',
};

export const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const language = useSelector(selectLanguage);
  const { articles } = useSelector(selectArticles);

  const fuse = new Fuse(articlesSource, {
    keys: [...Languages.map((l) => `title.${l}`), ...Languages.map((l) => `description.${l}`)],
  });

  return (
    <Form
      onSubmit={(event: React.FormEvent) => {
        event.preventDefault();
        if (articles.length !== 0) history.push(`/${articles[0].url}`);
      }}
    >
      <FormControl
        type="text"
        placeholder={SearchLanguage[language]}
        className="mr-sm-2"
        onChange={({ target }) => {
          if (!target.value) {
            dispatch(changeArticles({ articles: articlesSource }));
            return;
          }
          dispatch(changeArticles({ articles: fuse.search(target.value).map((res) => res.item) }));
        }}
      />
    </Form>
  );
};
