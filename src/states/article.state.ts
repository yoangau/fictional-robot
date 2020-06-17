import Article from "../components/article/article.interface";

export interface ArticleState {
  article: Article;
  changeArticle: React.Dispatch<React.SetStateAction<Article>>;
}
