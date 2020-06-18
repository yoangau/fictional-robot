import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { ArticleProps } from "./article.interface";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLanguage } from "../language/language.slice";

export const ArticlePreview = ({ article }: ArticleProps) => {
  const language = useSelector(selectLanguage);

  const [pressed, changePressed] = useState(false);

  if (pressed)
    return <Redirect to={article.title[language].replace(" ", "")} />;
  return (
    <Card
      style={{ marginLeft: "5px", marginRight: "5px", maxWidth: "512px" }}
      onClick={() => {
        changePressed(true);
      }}
    >
      <Card.Img variant="top" src={article.img} />
      <Card.Body>
        <Card.Title>{article.title[language]}</Card.Title>
        <Card.Text>{article.description[language]}</Card.Text>
      </Card.Body>
    </Card>
  );
};
