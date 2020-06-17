import { LanguageMap } from "../../language/languages";

export interface Article {
  title: LanguageMap<string>;
  description: LanguageMap<string>;
  img: string;
  text: LanguageMap<string>;
  date: Date;
}

export interface ArticleProps {
  article: Article;
}
