import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../language/language.slice';
import { ArticleProps } from '../../specs/articles/article.interface';
import ReactMarkdown from 'react-markdown';
import { CodeRenderer } from './code-renderer';
import styled from '@emotion/styled';

const MdArticle = styled(ReactMarkdown)`
  width: 100%;
`;

export const ArticlePage = ({ article }: ArticleProps) => {
  const language = useSelector(selectLanguage);
  const [content, setContent] = useState('');
  article.text[language].then((text) => setContent(text));

  return <MdArticle className="markdown-body" source={content} renderers={{ code: CodeRenderer }} />;
};
