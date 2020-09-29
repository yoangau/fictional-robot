import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header/header';
import { ArticlePreview } from './components/article/article-preview';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticlePage } from './components/article/article-page';
import { selectArticles } from './components/article/articles.slice';
import { articlesSource } from './specs/articles/articles';
import 'github-markdown-css';
import { AboutPage } from './components/about-page/about-page';
import styled from '@emotion/styled';

const AppBody = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
`;

export const App = () => {
  const { articles } = useSelector(selectArticles);
  const articlePreviews = articles.map((article, i) => <ArticlePreview article={article} key={`article-preview-${i}`} />);
  const articlePages = articlesSource.map((article, i) => (
    <Route exact to={article.url} key={`article-page-${i}`}>
      <ArticlePage article={article} />
    </Route>
  ));

  return (
    <Router>
      <Header />
      <AppBody>
        <Switch>
          <Route exact path="/">
            {articlePreviews}
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          {articlePages}
        </Switch>
      </AppBody>
    </Router>
  );
};
