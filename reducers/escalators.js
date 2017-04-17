import * as types from '../actions/actionTypes.js';

const initialState = {
  fetching: false,
  items: []
};

export default function escalators(state = initialState, action) {
  switch (action.type) {
  case types.REPORT_BROKEN:
    console.log('report broken');
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
    return newState;

  case types.FETCHING_ESCALATORS:
    return Object.assign({}, state, {
      fetching: true
    });

  case types.SET_ESCALATORS:
    return Object.assign({}, state, {
      fetching: false,
      items: action.escalators
    });

  default:
    return state;
  }
}
