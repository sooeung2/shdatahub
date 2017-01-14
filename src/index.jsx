import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import routes from './router/routes';
import reducers from 'reducers';
import './styles/DataHub.scss';

const store = createStore(reducers);

render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('root'));
