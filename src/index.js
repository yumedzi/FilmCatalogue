import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const descr = `The lives of two mob hitmen, a boxer, a gangster's wife
and a pair of diner bandits intertwine in four tales 
of violence and redemption`;

ReactDOM.render(<App name="Pulp Fiction" rating="4" description={descr}/>, document.getElementById('root'));
registerServiceWorker();
