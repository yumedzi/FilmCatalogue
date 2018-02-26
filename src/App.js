import React from 'react'
import { Provider  } from 'mobx-react';

import filmStore from './stores/films-store'
import formStore from './stores/form-store'
import siteStore from './stores/site-store'
import Page from './components/Page'

const App = () =>
  <Provider 
    filmStore={filmStore} 
    formStore={formStore}
    siteStore={siteStore}
  >
    <Page/>
  </Provider>;

export default App;