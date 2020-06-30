import React, { useState } from 'react';
import { ArticleProps } from '../../specs/articles/article.interface';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../language/language.slice';
import { useHistory } from 'react-router-dom';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

export const ArticlePreview = ({ article }: ArticleProps) => {
  const language = useSelector(selectLanguage);
  const history = useHistory();
  const [cursor, changeCursor] = useState('');

  return (
    <Fade>
      <Card>
        <CardMedia image={article.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title[language]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.description[language]}
          </Typography>
        </CardContent>
      </Card>
    </Fade>
  );
};
