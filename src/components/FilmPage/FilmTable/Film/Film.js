/* eslint-disable */
import React from 'react'
import {Image} from 'react-bootstrap'
import { observer, inject } from 'mobx-react';

import Rating from '../Rating/Rating'
import './Film.css'


const Film = ({id, name, rating, description, image, year, selectFilm, filmStore}) => 
  <tr>
    <td><Image width={100} height={150} src={image || 'http://via.placeholder.com/100x150'} rounded /></td>
    {/* <td><span><a href="#" onClick={() => selectFilm(id)}>{name}</a><br/><small>{year}</small></span></td> */}
    <td><span><a href="#" onClick={() => filmStore.selectFilm(id)}>{name}</a><br/><small>{year}</small></span></td>
    <td><Rating rating={rating} /></td>
    <td><span className="desc">{description}</span></td>
  </tr>;

export default inject('filmStore')(observer(Film))
