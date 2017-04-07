import * as types from './actionTypes';

export const reportBroken = (id, direction) => {
  return {
    type: types.REPORT_BROKEN,
    id,
    direction
  };
};

export const reportFixed = (id, direction) => {
  return {
    type: types.REPORT_FIXED,
    id,
    direction
  };
};

export const toggleEscalator = (id, direction) => {
  return {
    type: types.TOGGLE,
    id,
    direction
  };
};
