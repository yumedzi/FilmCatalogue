import React from 'react'
import { Provider } from 'mobx-react';

import filmStore from './stores/films-store'
import formStore from './stores/form-store'
import siteStore from './stores/site-store'
import titlesStore from './stores/titles-store'
import Page from './components/Page'

const App = () =>
  <Provider 
    filmStore={filmStore} 
    formStore={formStore}
    siteStore={siteStore}
    titlesStore={titlesStore}
  >
    <Page/>
  </Provider>;

export default App;