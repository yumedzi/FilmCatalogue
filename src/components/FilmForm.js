import React from 'react'
import {Panel, Form, Button} from 'react-bootstrap'; // eslint-disable-line no-unused-vars
import FormField from './FormField'
import './FilmForm.css'

class FilmForm extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  submit() {this.props.submit()}
  cancel() {this.props.cancel()}

  changeValue (e) {
    this.props.changeFormValue(e.target.getAttribute("name"), e.target.value)
  }

  changeImage(e) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.props.changeImage(reader.result);
    }
    reader.readAsDataURL(file);
  }

  render () {
    const ratings = [1, 2, 3, 4, 5];

    return this.props.form !== null ?
    <Panel className="editForm">
      <Panel.Heading>
        <h4>Edit form</h4>
      </Panel.Heading>
      <Panel.Body>
        <Form horizontal>
          {/* Hardcoded - to simplify code */}
          <FormField type="input" name="name" onChange={this.changeValue} value={this.props.form.name} />
          <FormField type="input" name="year"  onChange={this.changeValue} value={this.props.form.year} />
          <FormField type="textarea" lines={5} name="description" onChange={this.changeValue}  value={this.props.form.description} />
          <FormField type="select" name="rating" onChange={this.changeValue}  value={this.props.form.rating} options={ratings} />
          <input className="fileInput" 
            type="file" 
            onChange={this.changeImage} 
          />
        </Form>
      </Panel.Body>
      <Panel.Footer>
        <Button onClick={this.cancel} className="pull-right">Cancel</Button>
        <Button onClick={this.submit}>Submit</Button>
      </Panel.Footer>
    </Panel>
    : null
  }
};

export default FilmForm