'use strict';

import React, { Component } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux/native';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

import reducer from '../reducers';
import AwesomeProject from './AwesomeProject';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <AwesomeProject />}
      </Provider>
    );
  }
}