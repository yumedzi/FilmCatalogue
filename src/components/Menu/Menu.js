import React from 'react'
import {Nav, MenuItem, Navbar, NavItem, NavDropdown} from 'react-bootstrap' // eslint-disable-line no-unused-vars


const Menu = ({currentSection}) =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/FilmCatalogue"><strong>Film Catalogue</strong></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#" className={currentSection === 'films' && 'active'}>
        Films DB
      </NavItem>
      <NavItem eventKey={2} href="#" className={currentSection === 'settings' && 'active'}>
        Settings
      </NavItem>
    </Nav>
  </Navbar>;

export default Menu