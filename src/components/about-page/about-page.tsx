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
import styled from '@emotion/styled';

const flexRowCenter = `
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DarkLink = styled.a`
  font-size: 30px;
  color: black;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
`;

const AboutPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  width: 90%;
  margin-left: 5%;
`;

const AboutImage = styled(Image)`
  ${flexRowCenter}
  max-width: 30%;
  margin-left: 35%;
  margin-right: 35%;
  margin-bottom: 20px;
`;

const AboutName = styled.h1`
  ${flexRowCenter}
`;

const AboutLinks = styled.h1`
  ${flexRowCenter}
`;

export const AboutPage = () => {
  const [content, setContent] = useState('');
  const language = useSelector(selectLanguage);

  const publicAboutContentUri = `${process.env.PUBLIC_URL}about/${aboutSource.description[language]}`;
  const publicAboutFolderUri = `${process.env.PUBLIC_URL}about/`;

  fetch(publicAboutContentUri)
    .then((response) => response.text())
    .then((text) => setContent(text));

  return (
    <AboutPageDiv>
      <Fade>
        <AboutImage src={aboutSource.image} roundedCircle fluid />
        <AboutName>{aboutSource.name}</AboutName>
        <AboutLinks>
          {aboutSource.email && (
            <DarkLink href={`mailto:${aboutSource.email}`}>
              <FontAwesomeIcon icon={faEnvelope} />
            </DarkLink>
          )}
          {aboutSource.phone && (
            <DarkLink href={`tel:${aboutSource.phone}`}>
              <FontAwesomeIcon icon={faPhone} />
            </DarkLink>
          )}
          {aboutSource.github && (
            <DarkLink href={aboutSource.github}>
              <FontAwesomeIcon icon={faGithub} />
            </DarkLink>
          )}
          {aboutSource.facebook && (
            <DarkLink href={aboutSource.facebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </DarkLink>
          )}
          {aboutSource.twitter && (
            <DarkLink href={aboutSource.twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </DarkLink>
          )}
          {aboutSource.twitch && (
            <DarkLink href={aboutSource.twitch}>
              <FontAwesomeIcon icon={faTwitch} />
            </DarkLink>
          )}
          {aboutSource.linkedin && (
            <DarkLink href={aboutSource.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </DarkLink>
          )}
        </AboutLinks>
        <div className="markdown-body">
          <ReactMarkdown
            source={content}
            renderers={{ code: CodeRenderer }}
            transformImageUri={(uri) => uri.replace('./', publicAboutFolderUri)}
          />
        </div>
      </Fade>
    </AboutPageDiv>
  );
};
