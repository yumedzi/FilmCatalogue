import { action, extendObservable, toJS } from 'mobx';

import films from '../data/films'
import formStore from './form-store'


class FilmStore {
  constructor() {
    extendObservable(this, {films})
  }

  selectFilm = action(function(id) {
    formStore.selectedFilm = toJS(this.films.filter(x => x.id === id)[0]);
  })
}

const filmStore = new FilmStore()
export default filmStore;
export { filmStore };