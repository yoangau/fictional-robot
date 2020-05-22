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
import { observer } from "mobx-react";
import { Languages } from "../../stores/language";

export const Header = observer(({ language }) => {
  var changeLang = (event) => {
    language.value = event.target.value;
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Navbar.Brand href="#home">+</Navbar.Brand>
        <DropdownButton
          variant="outline-secondary"
          title={language.value}
          id="input-group-dropdown-1"
        >
          {Object.entries(Languages).map((entry, i) => (
            <Dropdown.Item onClick={changeLang} value={entry[0]} key={`lang-${i}`}>
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
});
