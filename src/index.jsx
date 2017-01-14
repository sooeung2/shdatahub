import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import routes from './router/routes';
import './styles/DataHub.scss';

render((
  <Router history={browserHistory} routes={routes} />
), document.getElementById('root'));
