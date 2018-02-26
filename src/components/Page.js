import React from 'react';
import {Grid} from 'react-bootstrap'
import { observer, inject } from 'mobx-react';

import FilmPage from './FilmPage/FilmPage'
import Menu from './Menu/Menu'
import SettingsPage from './SettingsPage/SettingsPage'


const Page = ({siteStore}) => 
  <Grid>
    <Menu/>
    {/* ### Site sections ### */}
    {/* FILMS */}
    {siteStore.currentSection === 'films' && <FilmPage/>}
    {/* SETTINGS */}
    {siteStore.currentSection === 'setting' && <SettingsPage/>}
  </Grid>;
    
export default inject('siteStore')(observer(Page))