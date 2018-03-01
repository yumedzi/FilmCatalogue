import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavSection.css'

const NavSection = ({siteStore, title, to}) =>
  <NavLink exact to={to} className='baselink' activeClassName='active'>
    {title}
  </NavLink>


export default NavSection