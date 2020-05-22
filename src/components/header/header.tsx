import React from "react";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { LanguageState } from "../../states/language.state";
import { Search } from "../search/search";
import { Languages } from "../../App";

export const Header = ({ language, changeLanguage }: LanguageState) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Navbar.Brand href="#home">+</Navbar.Brand>
        <DropdownButton
          variant="outline-secondary"
          title={language}
          id="input-group-dropdown-1"
        >
          {Object.entries(Languages).map((entry) => (
            <Dropdown.Item
              onClick={() => changeLanguage(entry[0])}
              key={`lang-${entry[0]}`}
            >
              {entry[1]}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Nav>
      <Search language={language} />
    </Navbar>
  );
};
