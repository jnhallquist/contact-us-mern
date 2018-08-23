import React from 'react';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';

const TopNav = () => (
  <Navbar staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='/'><Glyphicon glyph='home' /></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem href='/contactUs'>Contact Us</NavItem>
      <NavItem href='/messageHistory'>Message History</NavItem>
    </Nav>
  </Navbar>
);

export default TopNav;
