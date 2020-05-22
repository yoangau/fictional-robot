import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Languages, LanguageState } from "../../interfaces/language";

export const Header = ({ language, changeLanguage }: LanguageState) => (
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
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
);
