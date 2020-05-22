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

export const Header = observer(({ language }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Navbar.Brand href="#home">+</Navbar.Brand>
        <Nav.Link href="#home">Home</Nav.Link>
        <DropdownButton
          variant="outline-secondary"
          title="Lang"
          id="input-group-dropdown-1"
          onChange={(n) => console.log(n.value)}
        >
          <Dropdown.Item value={"fr"} href="#">
            fr
          </Dropdown.Item>
          <Dropdown.Item value={"en"} href="#">
            en
          </Dropdown.Item>
        </DropdownButton>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
});
