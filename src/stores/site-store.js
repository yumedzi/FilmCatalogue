import { extendObservable } from 'mobx';

class SiteStore {
  constructor() {
    extendObservable(this, {
      currentSection: 'films'
    })
  }
}

const siteStore = new SiteStore()
export default siteStore;
export { siteStore };