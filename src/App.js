import React, { Component } from 'react';
import './App.css';

const splitWithNewLines = str => str.split('\n').map((item, key) => <span key={key}>{item}<br/></span>);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || '',
      description: props.description || '',
      rating: props.rating || ''
    }
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    const bind = event.target.getAttribute('bind');
    let newState = {};
    newState[bind] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <div>
          <div><strong>Name: </strong><span>{this.state.name}</span></div>
          <div><strong>Description: </strong><p>{splitWithNewLines(this.state.description)}</p></div>
          <div><strong>Rating: </strong><span>{this.state.rating}</span></div>
        </div>
        <p>Edit Form:</p>
        <div>
          <div><input type="input" bind="name" value={this.state.name} onChange={this.changeValue}/></div>
          <div><textarea bind="description" value={this.state.description} onChange={this.changeValue} rows={5}/></div>
          <div>
            <select bind="rating" value={this.state.rating} onChange={this.changeValue}>
              <option disabled>Select rating</option>
              <option value="1">1 stars</option>
              <option value="2">2 stars</option>
              <option value="3">3 stars</option>
              <option value="4">4 stars</option>
              <option value="5">5 stars</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
