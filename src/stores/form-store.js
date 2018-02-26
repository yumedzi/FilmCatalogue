import { action, extendObservable } from 'mobx';

import filmStore from './films-store'

class FormStore {
  constructor() {
    extendObservable(this, {
      id: null,
      name: '',
      year: '',
      description: '',
      rating: ''
    })

    this.changeValue = this.changeValue.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  changeValue = action(function(e) {
    this[e.target.getAttribute("name")] = e.target.value
  })

  submit = action(function(){
    let film = filmStore.films.filter(x => x.id === this.id)[0];
    film.name = this.name;
    film.description = this.description;
    film.rating = this.rating;
    film.year = this.year;
    film.image = this.image;
    
    this.cancel();
  })

  cancel = action(function(){
    this.id = null;
    this.name = '';
    this.description = '';
    this.year = '';
    this.rating = '';
    this.image = '';
  })

  changeImage = action(function(image){
    this.image = image
  })
}

const formStore = new FormStore()
export default formStore;
export { formStore };