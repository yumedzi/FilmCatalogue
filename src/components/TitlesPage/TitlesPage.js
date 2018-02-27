import React from 'react'
import {ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'


const TitlesPage = ({titlesStore}) => 
  <Row>
    <Col sm={7}>
      <h3>Titles of Alexandr Nevskii</h3>
      <ListGroup>
        {titlesStore.titles.map((title, index) => <ListGroupItem key={index}>{title}</ListGroupItem>)}
      </ListGroup>
    </Col>
  </Row>;


export default inject('titlesStore')(observer(TitlesPage))