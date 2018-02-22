import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap'; // eslint-disable-line no-unused-vars
import FilmTable from './FilmTable'
import FilmForm from './FilmForm';


const FilmPage = ({films, form, selectFilm, changeFormValue, changeImage, submit, cancel}) => {
  console.log(`FILMS: ${films}`);

  return <Grid>
    <Row>
      <Col sm={7}>
        {/* === FILMS TABLE === */}
        <FilmTable films={films} selectFilm={selectFilm} />
      </Col>
      <Col sm={5}>
        {/* === EDITING FORM === */}
        <FilmForm form={form} changeFormValue={changeFormValue} changeImage={changeImage} submit={submit} cancel={cancel} />
      </Col>
    </Row>
  </Grid>}
    
export default FilmPage
