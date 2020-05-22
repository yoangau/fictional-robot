import React from "react";
import { Card } from "react-bootstrap";
import Article from "../../interfaces/article.interface";

export const ArticlePreview= ({
  language,
  article,
}: {
  article: Article;
  language: string;
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={article.img} />
      <Card.Body>
        <Card.Title>{article.title[language]}</Card.Title>
        <Card.Text>{article.description[language]}</Card.Text>
      </Card.Body>
    </Card>
  );
};
