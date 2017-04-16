import * as types from '../actions/actionTypes.js';

const initialState = {
  fetching: false,
  fetchingHistory: false,
  saving: false,
  items: []
};

export default function escalators(state = initialState, action) {
  switch (action.type) {
  case types.REPORT_BROKEN:
    console.log('report broken');
    console.log(action);
    newState = Object.assign({}, state, {
      fetching: false,
      fetchingHistory: false,
      items: state.items.map(e => {
        if (e.id == action.id) {
          e[action.direction] = false;
        }
        return e;
      })
    });
    console.log(newState);
    return newState;

  case types.REPORT_FIXED:
    console.log('report fixed');
    newState = Object.assign({}, state, {
      items: state.items.map(e => {
        if (e.id == action.id) {
          e[action.direction] = true;
        }
        return e;
      })
    });
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

  case types.FETCHING_ESCALATORS:
    return Object.assign({}, state, {
      fetching: true
    });

  case types.SET_ESCALATORS:
    return Object.assign({}, state, {
      fetching: false,
      items: action.escalators
    });

  case types.FETCHING_ESCALATOR_HISTORY:
    console.log('fetching history');
    return Object.assign({}, state, {
      fetchingHistory: true,
      items: state.items
    });

  case types.SET_ESCALATOR_HISTORY:
    console.log('setting history');
    return Object.assign({}, state, {
      fetchingHistory: false,
      items: state.items.map(e => {
        if (e.id == action.id) {
          if (!('history' in e)) {
            e['history'] = { up: [], down: [] };
          }
          e['history'][action.direction] = action.history;
        }
        return e;
      })
    });

  default:
    return state;
  }
}
