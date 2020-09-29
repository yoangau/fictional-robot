import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../language/language.slice';
import { ArticleProps } from '../../specs/articles/article.interface';
import ReactMarkdown from 'react-markdown';
import { CodeRenderer } from './code-renderer';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';

const ArticleBody = styled.div`
  max-width: 512px;
  width: 90%;
`;

export const ArticlePage = ({ article }: ArticleProps) => {
  const language = useSelector(selectLanguage);
  const [content, setContent] = useState('');

  const publicArticleUri = `${process.env.PUBLIC_URL}articles/${article.text[language]}`;
  const publicFolderUri = `${process.env.PUBLIC_URL}articles/${article.text[language].split('/')[0]}/`;

  fetch(publicArticleUri)
    .then((response) => response.text())
    .then((text) => setContent(text));

  return (
    <Fade>
      <ArticleBody className="markdown-body">
        <ReactMarkdown
          source={content}
          renderers={{ code: CodeRenderer }}
          transformImageUri={(uri) => uri.replace('./', publicFolderUri)}
        />
      </ArticleBody>
    </Fade>
  );
};
