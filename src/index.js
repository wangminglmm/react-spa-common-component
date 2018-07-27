import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/redux/index';
import Router from './router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  (<Provider store={store}>
    <Router />
  </Provider>),
document.getElementById('root'));
registerServiceWorker();
