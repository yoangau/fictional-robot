import { LanguageMap } from '../language/languages';

export interface Article {
  title: LanguageMap<string>;
  description: LanguageMap<string>;
  img: string;
  text: LanguageMap<string>;
  date: string;
  url: string;
}

export interface ArticleProps {
  article: Article;
}
