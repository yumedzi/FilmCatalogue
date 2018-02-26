import { action, extendObservable } from 'mobx';

class SiteStore {
  allSections = [
    'films',
    'settings'
  ]
  constructor() {
    extendObservable(this, {
      currentSection: 'films'
    })
    this.changeSection = this.changeSection.bind(this);
  }

  changeSection = action(function(section) {
    if (this.allSections.includes(section) && this.currentSection !== section) {
      this.currentSection = section;
    }
  })
}

const siteStore = new SiteStore()
export default siteStore;
export { siteStore };