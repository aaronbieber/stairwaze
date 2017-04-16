import * as types from '../actions/actionTypes.js';

const initialState = {
  id: ''
};

export default function user(state = initialState, action) {
  switch (action.type) {

  case types.SET_USER_ID:
    return {
      id: action.id
    };

  default:
    return state;
  }
}
