import React from 'react'
import {Nav, MenuItem, Navbar, NavItem, NavDropdown} from 'react-bootstrap' // eslint-disable-line no-unused-vars
import NavSection from './NavSection/NavSection'

const Menu = () => 
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><strong>Film Catalogue</strong></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavSection title="Films" to="/"/>
        <NavSection title="Titles" to="/titles"/>
        <NavSection title="Settings" to="/settings"/>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

export default Menu;