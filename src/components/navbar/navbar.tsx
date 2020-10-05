//inspired by : https://github.com/fireship-io/222-responsive-icon-nav-css/
import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faIceCream, faAngleDoubleRight, faGlobeAmericas, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeLanguage, selectLanguage } from '../language/language.slice';
import { aboutHeaderSource } from '../../specs/about/about';
import { languageChoices } from '../../specs/language/languages';
import { HomeSource } from '../../specs/home/home';
import { Search } from '../search/search';

const FixedNavbar = styled.nav`
  position: fixed;
  z-index: 1;
  background-color: var(--bg-primary);
  transition: width 600ms ease;

  &:hover [class*='logo-icon'] {
    transform: rotate(-180deg);
  }

  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  @media only screen and (min-width: 600px) {
    top: 0;
    width: 4rem;
    height: 100vh;

    &:hover {
      width: 16rem;
    }

    &:hover [class*='logo-icon'] {
      margin-left: 11rem;
    }

    &:hover [class*='logo-text'] {
      left: 0px;
    }

    &:hover [class*='link-text'] {
      display: inline;
    }
  }
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }
`;

const NavItem = styled.li`
  width: 100%;
  &:last-child {
    margin-top: auto;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--text-primary);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);

  &:focus,
  &:hover {
    filter: grayscale(0%) opacity(1);
    background: var(--bg-secondary);
    color: var(--text-secondary);
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const LinkText = styled.span`
  label: link-text;
  margin-left: 1rem;
  display: none;
  overflow: hidden;
`;

const LinkIcon = styled(FontAwesomeIcon)`
  width: 2rem !important;
  min-width: 2rem;
  margin: 0 1rem;
`;

const Logo = styled.li`
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  font-size: 1rem;
  letter-spacing: 0.3ch;
  width: 100%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const LogoIcon = styled(FontAwesomeIcon)`
  label: logo-icon;

  transform: rotate(0deg);
  transition: var(--transition-speed);

  fa-primary {
    color: #ff7eee;
  }

  fa-secondary {
    color: #df49a6;
  }

  fa-primary,
  fa-secondary {
    transition: var(--transition-speed);
  }
`;

const LogoText = styled.span`
  label: logo-text;
  display: inline;
  position: absolute;
  left: -999px;
  transition: var(--transition-speed);
`;

export const Navbar = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const history = useHistory();
  const home = () => {
    history.push('/');
  };
  const about = () => {
    history.push('/about');
  };
  return (
    <FixedNavbar>
      <Nav>
        <Logo>
          <LogoIcon icon={faAngleDoubleRight} />
          <LogoText>Fictional Robot</LogoText>
        </Logo>
        <NavItem>
          <NavLink onClick={home}>
            <LinkIcon icon={faHeart} />
            <LinkText>{HomeSource[language]}</LinkText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={about}>
            <LinkIcon icon={faIceCream} />
            <LinkText>{aboutHeaderSource[language]}</LinkText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={home}>
            <LinkIcon icon={faSearch} />
            <LinkText>
              <Search />
            </LinkText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => dispatch(changeLanguage())}>
            <LinkIcon icon={faGlobeAmericas} />
            <LinkText>{languageChoices[language]}</LinkText>
          </NavLink>
        </NavItem>
      </Nav>
    </FixedNavbar>
  );
};
