import React, { useState } from 'react';
import { selectLanguage } from '../language/language.slice';
import { useSelector } from 'react-redux';
import { aboutSource } from '../../specs/about/about';
import { CodeRenderer } from '../article/code-renderer';
import ReactMarkdown from 'react-markdown';
import { Email, Call, GitHub, Facebook, LinkedIn, Twitter } from '@material-ui/icons';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { Avatar } from '@material-ui/core';

export const AboutPage = () => {
  const [content, setContent] = useState('');
  const language = useSelector(selectLanguage);

  fetch(aboutSource.description[language])
    .then((response) => response.text())
    .then((text) => setContent(text));

  const darkLink = { fontSize: '30px', color: 'inherit', textDecoration: 'none', marginLeft: '10px', marginRight: '10px' };

  return (
    <Fade>
      <div style={{ maxWidth: '512px', width: '90%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Avatar src={aboutSource.image} />
        </div>
        <h1 style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>{aboutSource.name}</h1>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {aboutSource.email && (
            <a style={darkLink} href={`mailto:${aboutSource.email}`}>
              <Email />
            </a>
          )}
          {aboutSource.phone && (
            <a style={darkLink} href={`tel:${aboutSource.phone}`}>
              <Call />
            </a>
          )}
          {aboutSource.github && (
            <a style={darkLink} href={aboutSource.github}>
              <GitHub />
            </a>
          )}
          {aboutSource.facebook && (
            <a style={darkLink} href={aboutSource.facebook}>
              <Facebook />
            </a>
          )}
          {aboutSource.linkedin && (
            <a style={darkLink} href={aboutSource.linkedin}>
              <LinkedIn />
            </a>
          )}
        </div>
        <div className="markdown-body">
          <ReactMarkdown source={content} renderers={{ code: CodeRenderer }} />
        </div>
      </div>
    </Fade>
  );
};
