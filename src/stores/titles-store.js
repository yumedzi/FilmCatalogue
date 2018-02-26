import { extendObservable } from 'mobx'

import titles from '../data/titles'


class TitlesStore {
  constructor() {
    extendObservable(this, {
      titles
    })
  }
}

const titlesStore = new TitlesStore()
export default titlesStore
export {titlesStore}