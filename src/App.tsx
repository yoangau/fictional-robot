import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header/header";
import { LanguageMap } from "./interfaces/language-map.interface.";
import { articles } from "./articles/articles";
import { ArticlePreview } from "./components/article/article-preview";

export const Languages: LanguageMap = {
  fr: "fr",
  en: "en",
};

export const App = () => {
  const [language, changeLanguage] = useState(Languages.en)
  return (
    <div className="App">
      <Header language={language} changeLanguage={changeLanguage} />
      {articles.map(article => <ArticlePreview article={article} language={language}/>)}
    </div>
  );
};
