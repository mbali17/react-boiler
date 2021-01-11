// @flow
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// components
import FourFieldForm from './containers/app';

// Reducer
import reducer from './reducers';

// Redux setup
const middleWare = [thunk];
middleWare.push(createLogger());

const store = createStore(reducer, applyMiddleware(...middleWare));

ReactDOM.render(
  <Provider store = { store }>
    <FourFieldForm/>
  </Provider>,
  document.getElementById('root'),
);
