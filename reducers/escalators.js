import * as types from '../actions/actionTypes.js';

const initialState = {
  fetching: false,
  fetchingHistory: false,
  items: []
};

export default function escalators(state = initialState, action) {
  switch (action.type) {
  case types.REPORT_BROKEN:
    return {
      fetching: false,
      fetchingHistory: false,
      items: state.items.map(e => {
        if (e.id == action.id) {
          e[action.direction] = false;
        }
        return e;
      })
    };

  case types.REPORT_FIXED:
    return {
      fetching: false,
      fetchingHistory: false,
      items: state.items.map(e => {
        if (e.id == action.id) {
          e[action.direction] = true;
        }
        return e;
      })
    };

  case types.TOGGLE:
    return {
      fetching: false,
      fetchingHistory: false,
      items: state.items.map(e => {
        if (e.id == action.id) {
          e[action.direction] = !e[action.direction];
        }
        return e;
      })
    };

  case types.FETCHING_ESCALATORS:
    return {
      fetching: true,
      fetchingHistory: false,
      items: []
    };

  case types.SET_ESCALATORS:
    return {
      fetching: false,
      fetchingHistory: false,
      items: action.escalators
    };

  case types.FETCHING_ESCALATOR_HISTORY:
    console.log('fetching history');
    return {
      fetching: state.fetching,
      fetchingHistory: true,
      items: state.items
    };

  case types.SET_ESCALATOR_HISTORY:
    console.log('setting history');
    return {
      fetching: state.fetching,
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
    };

  default:
    return state;
  }
}
