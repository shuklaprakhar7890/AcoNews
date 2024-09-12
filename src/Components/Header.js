import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Aconews</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
