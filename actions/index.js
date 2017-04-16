import * as types from './actionTypes';
var uuid = require('../lib/uuid');
import { AsyncStorage } from 'react-native';

export const initUserId = () => {
  return (dispatch) => {
    return AsyncStorage.getItem('CopleyEscalators:userId')
      .then((userId) => {
        if (userId == null) {
          userId = uuid.uuid();
        }
        console.log('User ID is ' + userId);
        return userId;
      })
      .then((userId) => {
        AsyncStorage.setItem('CopleyEscalators:userId', userId);
        dispatch(setUserId(userId));
      })
      .catch((error) => console.error(error));
  };
};

export const setUserId = (userId) => {
  return {
    type: types.SET_USER_ID,
    id: userId
  };
};

export const reportBroken = (id, direction) => {
  return (dispatch) => {
    dispatch(savingReport());

    return fetch('http://192.168.10.81:5000/escalators/' + id + '/' + direction, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: 'broken'
      })
    }).then(() => {
      dispatch(savedReport());
      dispatch(fetchEscalatorHistory(id, direction));
      dispatch(fetchEscalators());
    }).catch(() => {
      console.error('error saving broken report');
    });
  };
};

export const reportFixed = (id, direction) => {
  return (dispatch) => {
    dispatch(savingReport());

    return fetch('http://192.168.10.81:5000/escalators/' + id + '/' + direction, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: 'fixed'
      })
    }).then(() => {
      dispatch(savedReport());
      dispatch(fetchEscalatorHistory(id, direction));
      dispatch(fetchEscalators());
    }).catch(() => {
      console.error('error saving fixed report');
    });
  };
};

export const savingReport = () => {
  return {
    type: types.SAVING_REPORT
  };
};

export const savedReport = () => {
  return {
    type: types.SAVED_REPORT
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
    fetch('http://192.168.10.81:5000/escalators/')
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

export const initUserIdAndFetchEscalators = () => {
  return (dispatch) => {
    return dispatch(initUserId()).then(() => {
      return dispatch(fetchEscalators());
    });
  };
};
