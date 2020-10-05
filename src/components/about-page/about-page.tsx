import React, { useState } from 'react';
import { selectLanguage } from '../language/language.slice';
import { useSelector } from 'react-redux';
import { aboutSource } from '../../specs/about/about';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CodeRenderer } from '../article/code-renderer';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';
import { FadeIn } from '../../utils/fade-in';

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

const AboutPageDiv = styled(FadeIn)`
  display: flex;
  flex-direction: column;
`;

const AboutImage = styled.img`
  ${flexRowCenter}
  max-width: 30%;
  margin-left: 35%;
  margin-right: 35%;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 50%;
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

  aboutSource.description[language].then((text) => setContent(text));

  return (
    <AboutPageDiv>
      <AboutImage src={aboutSource.image} />
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
      <ReactMarkdown className="markdown-body" source={content} renderers={{ code: CodeRenderer }} />
    </AboutPageDiv>
  );
};
