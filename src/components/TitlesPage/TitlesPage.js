import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import { observer, inject } from 'mobx-react'


const TitlesPage = ({titlesStore}) => 
  <div><h3>Titles of Alexandr Nevskii</h3>
    <ListGroup>
      {titlesStore.titles.map((title, index) => <ListGroupItem key={index}>{title}</ListGroupItem>)}
    </ListGroup>
  </div>;


export default inject('titlesStore')(observer(TitlesPage))