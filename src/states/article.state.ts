import Article from "../interfaces/article.interface";

export interface ArticleState {
  article: Article;
  changeArticle: React.Dispatch<React.SetStateAction<Article>>;
}
