import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import PromiseMiddleware from 'redux-promise';

import store from './store';
import routes from './routes';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>
, document.querySelector('.container'));
