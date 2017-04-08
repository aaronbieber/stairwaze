import * as types from '../actions/actionTypes.js';

const initialState = {
  fetching: false,
  items: []
};

export default function escalators(state = initialState, action) {
  switch (action.type) {
  case types.REPORT_BROKEN:
    return {
      fetching: false,
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
      items: []
    };

  case types.SET_ESCALATORS:
    return {
      fetching: false,
      items: action.escalators
    };

  default:
    return state;
  }
}
