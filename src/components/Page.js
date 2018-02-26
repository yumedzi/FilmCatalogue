import React from 'react';
import {Grid} from 'react-bootstrap'

import FilmPage from './FilmPage/FilmPage'
import Menu from './Menu/Menu'


const Page = () => 
  <Grid>
    <Menu/>
    <FilmPage/>
  </Grid>;
    
export default Page
