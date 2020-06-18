import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export interface CodeRendererProps {
  value: string;
  language: string;
}

export const CodeRenderer = ({ value, language }: CodeRendererProps) => (
  <SyntaxHighlighter style={tomorrow} language={language}>
    {value}
  </SyntaxHighlighter>
);
