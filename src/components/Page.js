import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap' // eslint-disable-line no-unused-vars
import FilmPage from './FilmPage/FilmPage'
import Menu from './Menu/Menu'

const Page = ({films, form, selectFilm, changeFormValue, changeImage, submit, cancel, currentSection}) => 
  <Grid>
    <Menu 
      currentSection={currentSection}
    />
    <FilmPage 
      films={films} 
      form={form} 
      selectFilm={selectFilm} 
      changeFormValue={changeFormValue} 
      submit={submit}
      cancel={cancel}
      changeImage={changeImage}
    />
  </Grid>;
    
export default Page
