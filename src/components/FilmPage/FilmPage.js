import React from 'react';
import {Col, Row} from 'react-bootstrap'

import FilmTable from './FilmTable/FilmTable'
import FilmForm from './FilmForm/FilmForm'


const FilmPage = () => 
  <Row>
    <Col sm={7}>
      {/* === FILMS TABLE === */}
      <FilmTable/>
    </Col>
    <Col sm={5}>
      {/* === EDITING FORM === */}
      <FilmForm/>
    </Col>
  </Row>;
    
export default FilmPage
