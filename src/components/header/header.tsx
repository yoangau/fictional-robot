import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Search } from '../search/search';
import { useHistory } from 'react-router-dom';
import { LanguageSelector } from '../language/language-selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { aboutHeaderSource } from '../../specs/about/about';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../language/language.slice';

export const Header = () => {
  const language = useSelector(selectLanguage);
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Button onClick={handleClick} variant="dark">
          <FontAwesomeIcon icon={faHeart} />
        </Button>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} href="/about">
            {aboutHeaderSource[language]}
          </Nav.Link>
          <LanguageSelector />
        </Nav>
        <Search />
      </Navbar.Collapse>
    </Navbar>
  );
};
