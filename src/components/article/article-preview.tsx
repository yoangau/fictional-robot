import React, { useState } from 'react';
import { ArticleProps } from '../../specs/articles/article.interface';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../language/language.slice';
import { useHistory } from 'react-router-dom';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';

const Card = styled.div`
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;

  &:hover,
  &:focus {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

const CardDescription = styled.div`
  padding: 2px 16px;
`;

export const ArticlePreview = ({ article }: ArticleProps) => {
  const language = useSelector(selectLanguage);
  const history = useHistory();

  return (
    <Fade>
      <Card
        onClick={() => {
          history.push(article.url);
        }}
      >
        <CardImage src={article.img} />
        <CardDescription>
          <h4>{article.title[language]}</h4>
          <p>{article.description[language]}</p>
        </CardDescription>
      </Card>
    </Fade>
  );
};
