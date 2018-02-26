import React from 'react'
import { observer, inject } from 'mobx-react';
import {Nav, MenuItem, Navbar, NavItem, NavDropdown} from 'react-bootstrap' // eslint-disable-line no-unused-vars


const Menu = ({siteStore}) =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/FilmCatalogue"><strong>Film Catalogue</strong></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem 
        eventKey={1} 
        href="#" 
        className={siteStore.currentSection === 'films' && 'active'}
        onClick={() => siteStore.changeSection('films')}
      >
        Films DB
      </NavItem>
      <NavItem 
        eventKey={2} 
        href="#" 
        className={siteStore.currentSection === 'settings' && 'active'}
        onClick={() => siteStore.changeSection('settings')}
      >
        Settings
      </NavItem>
    </Nav>
  </Navbar>;

export default inject('siteStore')(observer(Menu))