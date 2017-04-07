import * as types from '../actions/actionTypes.js';

const initialState = [
  { id: 1, top: 'Currency Exchange', bottom: 'Sur La Table', up: true, down: false },
  { id: 2, top: 'Louis Vuitton', bottom: 'Au Bon Pain', up: true, down: true },
  { id: 3, top: 'Tiffany\'s', bottom: 'Marriott', up: true, down: true },
  { id: 4, top: 'Skylobby', bottom: 'Legal Sea Foods', up: true, down: true },
  { id: 5, top: 'Marriott', bottom: 'Star Market', up: true, down: true },
  { id: 6, top: 'Westin', bottom: 'Fogo De Chao', up: true, down: true },
  { id: 7, top: 'Gap', bottom: 'Tiffany\'s', up: true, down: true }
];

export default function escalators(state = initialState, action) {
  switch (action.type) {
  case types.REPORT_BROKEN:
    return state.map(e => {
      if (e.id == action.id) {
        e[action.direction] = false;
      }
      return e;
    });

  case types.REPORT_FIXED:
    return state.map(e => {
      if (e.id == action.id) {
        e[action.direction] = true;
      }
      return e;
    });

  case types.TOGGLE:
    return state.map(e => {
      if (e.id == action.id) {
        e[action.direction] = !e[action.direction];
      }
      return e;
    });

  default:
    return state;
  }
}
