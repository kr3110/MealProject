import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
