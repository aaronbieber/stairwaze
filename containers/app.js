import React, { Component } from 'react';
import CopleyEscalators from '../components/CopleyEscalators';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';

var reducer = combineReducers(reducers);
var store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CopleyEscalators />
      </Provider>
    );
  }
}
