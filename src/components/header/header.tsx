import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Search } from '../search/search';
import { useHistory } from 'react-router-dom';
import { LanguageSelector } from '../language/language-selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
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
          <LanguageSelector />
        </Nav>
        <Search />
      </Navbar.Collapse>
    </Navbar>
  );
};
