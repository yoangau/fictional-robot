import React from 'react';
import { ArticlePreview } from './components/article/article-preview';
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticlePage } from './components/article/article-page';
import { selectArticles } from './components/article/articles.slice';
import { articlesSource } from './specs/articles/articles';
import 'github-markdown-css';
import { AboutPage } from './components/about-page/about-page';
import styled from '@emotion/styled';
import { Navbar } from './components/navbar/navbar';
import { FadeIn } from './utils/fade-in';
import { NoSearchResultSource } from './specs/search/search';
import { selectLanguage } from './components/language/language.slice';

const AppBody = styled(FadeIn)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
  margin-bottom: 5vh;
  margin-top: 5vh;

  @media only screen and (max-width: 600px) {
    max-width: 90vw;
    margin-left: 5vw;
    margin-top: 5vh;
  }

  @media only screen and (min-width: 600px) {
    margin-left: 30vw;
    width: 40vw;
  }
`;

export const App = () => {
  const { articles } = useSelector(selectArticles);
  const articlePreviews = articles.map((article, i) => <ArticlePreview article={article} key={`article-preview-${i}`} />);
  const language = useSelector(selectLanguage);

  return (
    <Router>
      <Navbar />
      <AppBody>
        <Switch>
          <Route exact path="/">
            {articlePreviews.length !== 0 ? articlePreviews : <h1>{NoSearchResultSource[language]}</h1>}
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          {articlesSource.map((article, i) => (
            <Route path={`/${article.url}`} key={`article-page-${i}`}>
              <ArticlePage article={article} />
            </Route>
          ))}
          <Redirect to="/" />
        </Switch>
      </AppBody>
    </Router>
  );
};
