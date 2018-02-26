import React from 'react';
import {Grid} from 'react-bootstrap'
import { observer, inject } from 'mobx-react';

import FilmPage from './FilmPage/FilmPage'
import Menu from './Menu/Menu'
import SettingsPage from './SettingsPage/SettingsPage'
import TitlesPage from './TitlesPage/TitlesPage'


const Page = ({siteStore}) => 
  <Grid>
    <Menu/>
    {/* ### Site sections ### */}
    {/* FILMS */}
    {siteStore.currentSection === 'films' && <FilmPage/>}
    {/* TITLES */}
    {siteStore.currentSection === 'titles' && <TitlesPage/>}
    {/* SETTINGS */}
    {siteStore.currentSection === 'settings' && <SettingsPage/>}
  </Grid>;
    
export default inject('siteStore')(observer(Page))