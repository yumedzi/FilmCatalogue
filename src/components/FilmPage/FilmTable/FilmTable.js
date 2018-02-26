import React from 'react'
import {Table} from 'react-bootstrap'
import {observer, inject } from 'mobx-react';

import Film from './Film/Film'


const FilmTable = ({filmStore}) => 
  <Table striped hover>
    <thead>
      <tr>
        <th>Image</th>
        <th style={{whitespace: 'no-wrap'}}>Film <small>/ year</small></th>
        <th>Rating</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {filmStore.films.map(film => 
        <Film key={film.id} {...film} />
      )}
    </tbody>
  </Table>;

export default inject('filmStore')(observer(FilmTable))