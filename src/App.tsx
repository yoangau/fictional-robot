import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header/header";
import { articles } from "./articles/articles";
import { ArticlePreview } from "./components/article/article-preview";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLanguage } from "./language/language.slice";
import { ArticlePage } from "./components/article/article-page";

export const App = () => {
  const language = useSelector(selectLanguage);

  return (
    <Router>
      <div className="App">
        <Header />
        <div
          style={{
            marginTop: "10vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "space-around",
          }}
        >
          <Switch>
            <Route exact path="/">
              {articles.map((article, i) => (
                <ArticlePreview
                  article={article}
                  key={`article-preview-${i}`}
                />
              ))}
            </Route>
            {articles.map((article, i) => (
              <Route
                exact
                to={article.title[language].replace(" ", "")}
                key={`article-page-${i}`}
              >
                <ArticlePage article={article} />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};
