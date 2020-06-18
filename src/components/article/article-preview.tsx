import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { ArticleProps } from './article.interface';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../language/language.slice';
import { useHistory } from 'react-router-dom';

export const ArticlePreview = ({ article }: ArticleProps) => {
  const language = useSelector(selectLanguage);
  const history = useHistory();
  const [cursor, changeCursor] = useState('');

  return (
    <Card style={{ margin: '20px', maxWidth: '512px' }}>
      <Card.Img
        onClick={() => {
          history.push(article.url);
        }}
        onMouseEnter={() => changeCursor('pointer')}
        style={{ cursor: cursor }}
        variant="top"
        src={article.img}
      />
      <Card.Body>
        <Card.Title>{article.title[language]}</Card.Title>
        <Card.Text>{article.description[language]}</Card.Text>
      </Card.Body>
    </Card>
  );
};
