import React from 'react'
import { observer, inject } from 'mobx-react';

import {Panel, Form, Button} from 'react-bootstrap'; // eslint-disable-line no-unused-vars
import FormField from './FormField/FormField'
import './FilmForm.css'


class FilmForm extends React.Component {
  constructor(props) {
    super(props);
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(e) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.props.formStore.changeImage(reader.result);
    }
    reader.readAsDataURL(file);
  }

  render () {
    const formStore = this.props.formStore;
    const ratings = [0, 1, 2, 3, 4, 5];

    return formStore.selectedFilm !== null ?
      <Panel className="editForm">
        <Panel.Heading>
          <h4>Edit form</h4>
        </Panel.Heading>
        <Panel.Body>
          <Form horizontal>
            {/* Hardcoded - to simplify code */}
            <FormField type="input" name="name" onChange={formStore.changeValue} value={formStore.selectedFilm.name} />
            <FormField type="input" name="year"  onChange={formStore.changeValue} value={formStore.selectedFilm.year} />
            <FormField type="textarea" lines={5} name="description" onChange={formStore.changeValue}  value={formStore.selectedFilm.description} />
            <FormField type="select" name="rating" onChange={formStore.changeValue}  value={formStore.selectedFilm.rating} options={ratings} />
            <input className="fileInput" 
              type="file" 
              onChange={this.changeImage} 
            />
          </Form>
        </Panel.Body>
        <Panel.Footer>
          <Button onClick={formStore.cancel} className="pull-right">Cancel</Button>
          <Button onClick={formStore.submit}>Submit</Button>
        </Panel.Footer>
      </Panel>
      : null
  }
};


export default inject('formStore')(observer(FilmForm))