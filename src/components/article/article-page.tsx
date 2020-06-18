import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../language/language.slice';
import { ArticleProps } from './article.interface';
import ReactMarkdown from 'react-markdown';
import { CodeRenderer } from './CodeRenderer';

export const ArticlePage = ({ article }: ArticleProps) => {
  const language = useSelector(selectLanguage);
  const [content, setContent] = useState('');
  fetch(article.text[language])
    .then((response) => response.text())
    .then((text) => setContent(text));

  return (
    <div style={{ marginLeft: '5px', marginRight: '5px', maxWidth: '512px' }}>
      <ReactMarkdown source={content} renderers={{ code: CodeRenderer }} />
    </div>
  );
};
