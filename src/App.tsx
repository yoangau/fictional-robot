import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header/header";
import { articles } from "./articles/articles";
import { ArticlePreview } from "./components/article/article-preview";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLanguage } from "./language/language.slice";

export const App = () => {
  const language = useSelector(selectLanguage);

  return (
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
        <Router>
          <Switch>
            <Route exact path="/">
              {articles.map((article, i) => (
                <ArticlePreview article={article} key={`article-${i}`} />
              ))}
            </Route>
            {articles.map((article) => (
              <Route exact to={article.title[language].replace(" ", "")} />
            ))}
          </Switch>
        </Router>
      </div>
    </div>
  );
};
