import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeLanguage } from './language.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Languages } from '../../specs/language/languages';

import styled from '@emotion/styled';

const LanguageNavDropdown = styled(NavDropdown)`
  font-size: 30px;
`;

export const LanguageSelector = () => {
  const dispatch = useDispatch();

  return (
    <LanguageNavDropdown title={<FontAwesomeIcon icon={faLanguage} />} id="basic-nav-dropdown">
      {Languages.map((lang, i) => (
        <NavDropdown.Item
          onClick={() => {
            dispatch(changeLanguage(lang));
          }}
          key={`drop-${i}`}
        >
          {lang}
        </NavDropdown.Item>
      ))}
    </LanguageNavDropdown>
  );
};
