import { action, extendObservable } from 'mobx';

import films from '../data/films'
import formStore from './form-store'


class FilmStore {
  constructor() {
    extendObservable(this, {
      films: films
    })
  }

  selectFilm = action(function(id) {
    console.log(`Changing FILM to ${id}`);

    const film = this.films.filter(x => x.id === id)[0];
    formStore.id = film.id;
    formStore.name = film.name;
    formStore.description = film.description;
    formStore.year = film.year;
    formStore.rating = film.rating;
    formStore.image = film.image;
  })


  update = action(function(attr, val) {
    this[attr] = val
  })

}

const filmStore = new FilmStore()
export default filmStore;
export { filmStore };