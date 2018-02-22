import React from 'react';
import {Table} from 'react-bootstrap'
import Film from './Film'

const FilmTable = ({films, selectFilm}) => 
  <Table striped responsive hover>
    <thead>
      <tr>
        <th>Image</th>
        <th>Film <small>/ year</small></th>
        <th>Rating</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {films.map(film => 
        <Film key={film.id} {...film} selectFilm={selectFilm} />
      )}
    </tbody>
  </Table>;

export default FilmTable