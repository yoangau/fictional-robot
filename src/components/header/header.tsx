import React from "react";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { Search } from "../search/search";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage, selectLanguage } from "../../language/language.slice";
import { Languages, Language } from "../../language/languages";

export const Header = () => {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Navbar.Brand href="/">+</Navbar.Brand>
        <DropdownButton
          variant="outline-secondary"
          title={language}
          id="input-group-dropdown-1"
        >
          {Languages.map((language: Language) => (
            <Dropdown.Item
              onClick={() => dispatch(changeLanguage(language))}
              key={`lang-${language}`}
            >
              {language}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Nav>
      <Search language={language} />
    </Navbar>
  );
};
