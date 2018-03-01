import { action, extendObservable } from 'mobx';

class SiteStore {
  allSections = [
    'films',
    'settings',
    'titles'
  ]
  constructor() {
    extendObservable(this, {
      currentSection: window.location.href.split('/')[window.location.href.split('/').length-1]
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