import * as types from './actionTypes';
import { AsyncStorage } from 'react-native';
import timeout from '../lib/timeout';
import uuid from '../lib/uuid';
import addAuthHeader from '../lib/auth';

const BASE_URL = 'http://localhost:5000';

export const initUserId = () => {
  return (dispatch) => {
    return AsyncStorage.getItem('CopleyEscalators:userId')
      .then((userId) => {
        if (userId == null) {
          userId = uuid();
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

export const reportStatus = (id, direction, status) => {
  return (dispatch, getState) => {
    dispatch(savingReport());

    const state = getState();

    return timeout(
      5000,
      fetch(BASE_URL + '/escalators/' + id + '/' + direction, {
        method: 'POST',
        headers: addAuthHeader({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          user: state.user.id,
          status: status
        })
      })).then((response) => {
        if (response.ok) {
          dispatch(savedReport());
          dispatch(fetchEscalatorHistory(id, direction));
          dispatch(fetchEscalators());
        } else {
          console.log('save error, code ' + response.status);
          response.json()
            .then((j) => dispatch(errorSavingReport(j.message)));
        }
      }).catch(() => {
        dispatch(errorSavingReport());
      });
  };
};

export const reportBroken = (id, direction) => {
  return reportStatus(id, direction, 'broken');
};

export const reportFixed = (id, direction) => {
  return reportStatus(id, direction, 'fixed');
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

export const errorSavingReport = (message = '') => {
  return {
    type: types.ERROR_SAVING_REPORT,
    message: message
  };
};

export const setEscalators = (escalators) => {
  return {
    type: types.SET_ESCALATORS,
    escalators
  };
};

export const fetchingEscalators = () => {
  console.log('fetching escalators');
  return {
    type: types.FETCHING_ESCALATORS
  };
};

export const fetchEscalators = () => {
  return (dispatch) => {
    dispatch(fetchingEscalators());
    console.log('fetch escalators');

    return timeout(5000,
                   fetch(
                     BASE_URL + '/escalators/', {
                       headers: addAuthHeader()
                     }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Status code ' + response.status + ' received.');
        }
      })
      .then((responseJson) => dispatch(setEscalators(responseJson)))
      .catch((error) => {
        dispatch(errorFetchingEscalators());
      });
  };
};

export const errorFetchingEscalators = () => {
  console.log('error fetching escalators');
  return {
    type: types.ERROR_FETCHING_ESCALATORS
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

    return timeout(5000,
                   fetch(
                     BASE_URL + '/escalators/' + id + '/history/' + direction, {
                       headers: addAuthHeader()
                     }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Status code ' + response.status + ' received.');
        }
      })
      .then((responseJson) => dispatch(setEscalatorHistory(id, direction, responseJson)))
      .catch((error) => {
        dispatch(errorFetchingEscalatorHistory());
      });
  };
};

export const errorFetchingEscalatorHistory = () => {
  console.log('error fetching escalator history');
  return {
    type: types.ERROR_FETCHING_ESCALATOR_HISTORY
  };
};

export const initUserIdAndFetchEscalators = () => {
  return (dispatch) => {
    return dispatch(initUserId()).then(() => {
      return dispatch(fetchEscalators());
    });
  };
};
