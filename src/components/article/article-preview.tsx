import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { ArticleProps } from '../../specs/articles/article.interface';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../language/language.slice';
import { useHistory } from 'react-router-dom';
// @ts-ignore
import Fade from 'react-reveal/Fade';

export const ArticlePreview = ({ article }: ArticleProps) => {
  const language = useSelector(selectLanguage);
  const history = useHistory();
  const [cursor, changeCursor] = useState('');

  return (
    <Fade bottom>
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
    </Fade>
  );
};
