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

export const setEscalators = (escalators) => {
  return {
    type: types.SET_ESCALATORS,
    escalators
  };
};

export const fetchingEscalators = () => {
  return {
    type: types.FETCHING_ESCALATORS
  };
};

export const fetchEscalators = () => {
  return (dispatch) => {
    dispatch(fetchingEscalators());
    console.log('fetching escalators');

    // @todo Put a real domain in here, or configuration of some kind
    fetch('http://192.168.10.81:5000/escalators')
      .then((response) => response.json())
      .then((responseJson) => dispatch(setEscalators(responseJson)))
      .catch((error) => {
        console.error(error);
      });
  };
};

export const setEscalatorHistory = (id, direction, history) => {
  return {
    type: types.SET_ESCALATOR_HISTORY,
    id,
    direction,
    history
  };
};

export const fetchingEscalatorHistory = () => {
  return {
    type: types.FETCHING_ESCALATOR_HISTORY
  };
};

export const fetchEscalatorHistory = (id, direction) => {
  return (dispatch) => {
    dispatch(fetchingEscalatorHistory());

    // @todo Put a real domain in here, or configuration of some kind
    fetch('http://192.168.10.81:5000/escalators/' + id + '/history/' + direction)
      .then((response) => response.json())
      .then((responseJson) => dispatch(setEscalatorHistory(id, direction, responseJson)))
      .catch((error) => {
        console.error(error);
      });
  };
};
