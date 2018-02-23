/* eslint-disable */

import React from 'react';
import {Image} from 'react-bootstrap';
import Rating from '../Rating/Rating';


const Film = ({id, name, rating, description, image, year, selectFilm}) => 
  <tr>
    <td><Image width={100} height={150} src={image || 'http://via.placeholder.com/100x150'} rounded /></td>
    <td><span><a href="#" onClick={() => selectFilm(id)}>{name}</a><br/><small>{year}</small></span></td>
    <td><Rating rating={rating} /></td>
    <td>{description}</td>
  </tr>;

export default Film
