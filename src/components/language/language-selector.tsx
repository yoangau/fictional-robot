import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeLanguage } from './language.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Languages } from '../../specs/language/languages';

export const LanguageSelector = () => {
  const dispatch = useDispatch();

  return (
    <NavDropdown title={<FontAwesomeIcon style={{ fontSize: '30px' }} icon={faLanguage} />} id="basic-nav-dropdown">
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
    </NavDropdown>
  );
};
