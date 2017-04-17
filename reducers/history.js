import * as types from '../actions/actionTypes';

const initialState = {
  savingError: false,
  savingErrorMessage: '',
  fetchingError: false,
  saving: false,
  fetching: false,
  items: {}
};

export default function history(state = initialState, action) {
  var newState;

  switch (action.type) {
  case types.FETCHING_ESCALATOR_HISTORY:
    console.log('fetching history');
    return Object.assign({}, state, {
      fetchingError: false,
      fetching: true
    });

  case types.SET_ESCALATOR_HISTORY:
    console.log('setting history');
    newState = Object.assign({}, state, {
      fetchingError: false,
      fetching: false
    });
    newState.items[action.id] = action.history;

    return newState;

  case types.ERROR_FETCHING_ESCALATOR_HISTORY:
    console.log('error fetching escalator history');
    return Object.assign({}, state, {
      fetchingError: true,
      fetching: false
    });

  case types.SAVING_REPORT:
    console.log('saving report');
    return Object.assign({}, state, {
      savingError: false,
      savingErrorMessage: '',
      saving: true
    });

  case types.SAVED_REPORT:
    console.log('saved report');
    return Object.assign({}, state, {
      savingError: false,
      savingErrorMessage: '',
      saving: false
    });

  case types.ERROR_SAVING_REPORT:
    console.log('error saving report');
    return Object.assign({}, state, {
      savingError: true,
      savingErrorMessage: action.message,
      saving: false
    });

  default:
    return state;
  }
}
