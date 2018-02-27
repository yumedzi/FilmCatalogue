import { action, extendObservable, toJS } from 'mobx';

import filmStore from './films-store'

class FormStore {
  constructor() {
    extendObservable(this, {
      selectedFilm: null
    })

    this.changeValue = this.changeValue.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  changeValue = action(function(e) {
    this.selectedFilm && (this.selectedFilm[e.target.getAttribute("name")] = e.target.value);
  })

  submit = action(function(){
    console.log(this.selectedFilm)
    let film = filmStore.films.find(x => x.id === this.selectedFilm.id)
    extendObservable(film, toJS(this.selectedFilm));
    this.cancel();
  })

  cancel = action(function(){
    this.selectedFilm = null;
  })

  changeImage = action(function(image){
    this.selectedFilm.image = image
  })
}

const formStore = new FormStore()
export default formStore;
export { formStore };