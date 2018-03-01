import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Grid} from 'react-bootstrap'
import { observer, inject } from 'mobx-react';

import FilmPage from './FilmPage/FilmPage'
import Menu from './Menu/Menu'
import SettingsPage from './SettingsPage/SettingsPage'
import TitlesPage from './TitlesPage/TitlesPage'


const Page = ({siteStore}) => 
  <Grid>
    <BrowserRouter>
      <React.Fragment>
        <Menu/>
    
        {/* ### Site sections ### */}
        <Switch> {/* Check React.Fragment */}
          <Route exact path='/' component={FilmPage} />
          <Route path='/titles' component={TitlesPage} />
          <Route path='/settings' component={SettingsPage} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </Grid>;

export default inject('siteStore')(observer(Page))