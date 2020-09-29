import React, { useState } from 'react';
import { selectLanguage } from '../language/language.slice';
import { useSelector } from 'react-redux';
import { aboutSource } from '../../specs/about/about';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CodeRenderer } from '../article/code-renderer';
import ReactMarkdown from 'react-markdown';
// @ts-ignore
import Fade from 'react-reveal/Fade';

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
          <Image style={{ width: '50%' }} src={aboutSource.image} roundedCircle />
        </div>
        <h1 style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>{aboutSource.name}</h1>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {aboutSource.email && (
            <a style={darkLink} href={`mailto:${aboutSource.email}`}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          )}
          {aboutSource.phone && (
            <a style={darkLink} href={`tel:${aboutSource.phone}`}>
              <FontAwesomeIcon icon={faPhone} />
            </a>
          )}
          {aboutSource.github && (
            <a style={darkLink} href={aboutSource.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {aboutSource.facebook && (
            <a style={darkLink} href={aboutSource.facebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          )}
          {aboutSource.twitter && (
            <a style={darkLink} href={aboutSource.twitter}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          )}
          {aboutSource.twitch && (
            <a style={darkLink} href={aboutSource.twitch}>
              <FontAwesomeIcon icon={faTwitch} />
            </a>
          )}
          {aboutSource.linkedin && (
            <a style={darkLink} href={aboutSource.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
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
