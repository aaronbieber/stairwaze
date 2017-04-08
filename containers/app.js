import React, { Component } from 'react';
import CopleyEscalators from '../components/CopleyEscalators';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { fetchEscalators } from '../actions';
import * as reducers from '../reducers';

var reducer = combineReducers(reducers);
var store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CopleyEscalators />
      </Provider>
    );
  }
}

store.dispatch(fetchEscalators());
