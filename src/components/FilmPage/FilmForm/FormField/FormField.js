import React from 'react'
import {Col, FormGroup, FormControl} from 'react-bootstrap' // eslint-disable-line no-unused-vars

const FormField = ({type, name, value, onChange, options=[]}) => 
  <FormGroup>
    <Col sm={3}>
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </Col>
    <Col sm={8}>
      <FormControl 
        componentClass={type}
        placeholder={`Enter ${name}`} 
        value = {value}
        name = {name}
        rows = {8}
        onChange = {onChange}
      >
        {/* just for Select */}
        {type === 'select' ? options.map((x,i) => (<option key={i} value={x}>{x} star{x !== 1 ? 's' : ''}</option>)) : null}
      </FormControl>
    </Col>
  </FormGroup>;

export default FormField