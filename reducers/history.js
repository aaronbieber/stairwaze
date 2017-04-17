import * as types from '../actions/actionTypes';

const initialState = {
  fetching: false,
  saving: false,
  items: {}
};

export default function history(state = initialState, action) {
  var newState;

  switch (action.type) {
  case types.FETCHING_ESCALATOR_HISTORY:
    console.log('fetching history');
    return Object.assign({}, state, {
      fetchingHistory: true,
      items: state.items
    });

  case types.SET_ESCALATOR_HISTORY:
    console.log('setting history');
    newState = Object.assign({}, state, {
      fetchingHistory: false
    });
    newState.items[action.id] = action.history;

    console.log(newState);
    return newState;


  case types.SAVING_REPORT:
    console.log('saving report');
    return Object.assign({}, state, {
      saving: true
    });

  case types.SAVED_REPORT:
    console.log('saved report');
    return Object.assign({}, state, {
      saving: false
    });

  default:
    return state;
  }
}
