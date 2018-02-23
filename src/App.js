import React, { Component } from 'react'
import films from './data/films'
import FilmPage from './components/FilmPage/FilmPage'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: films,
      selectedFilm: null,
      form: null
    };

    this.selectFilm = this.selectFilm.bind(this);
    this.changeFormValue = this.changeFormValue.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  
  selectFilm(id) {
    const film = this.state.films.filter(x => x.id === id)[0];
    this.form = Object.assign({}, film);
    this.setState(
      {
        form: this.form,
        selectedFilm: film
      }
    );
  }

  changeFormValue (name, value) {
    let newState = {
      form: this.state.form
    }
    newState.form[name] = value
    this.setState(newState);
  }

  changeImage(image) {
    let newState = {
      form: this.state.form
    }
    newState.form.image = image
    this.setState(newState);
  }

  submit() {
    let film = this.state.films.filter(x => x.id === this.state.form.id)[0];
    Object.assign(film, this.state.form);
    
    this.setState({
      form: null
    })
  }

  cancel() {
    this.setState({
      form: null
    })
  }

  render () {
    return <FilmPage 
              films={this.state.films} 
              form={this.state.form} 
              selectFilm={this.selectFilm} 
              changeFormValue={this.changeFormValue} 
              submit={this.submit}
              cancel={this.cancel}
              changeImage={this.changeImage}
            />
  }
};

export default App;
