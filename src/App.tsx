import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header/header';
import { ArticlePreview } from './components/article/article-preview';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticlePage } from './components/article/article-page';
import { selectArticles } from './components/article/articles.slice';
import 'github-markdown-css';

export const App = () => {
  const { articles } = useSelector(selectArticles);
  const articlePreviews = articles.map((article, i) => <ArticlePreview article={article} key={`article-preview-${i}`} />);
  const articlePages = articles.map((article, i) => (
    <Route exact to={article.url} key={`article-page-${i}`}>
      <ArticlePage article={article} />
    </Route>
  ));

  return (
    <Router>
      <div className="App">
        <Header />
        <div
          style={{
            marginTop: '10vh',
            marginBottom: '10vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'space-around',
          }}
        >
          <Switch>
            <Route exact path="/">
              {articlePreviews}
            </Route>
            {articlePages}
          </Switch>
        </div>
      </div>
    </Router>
  );
};
