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

    const fakeItems = [
      { id: 1, top: 'Currency Exchange', bottom: 'Sur La Table', up: true, down: false,
        history: { up: [], down: [] }
      },
      { id: 2, top: 'Louis Vuitton', bottom: 'Au Bon Pain', up: true, down: true,
        history: { up: [], down: [] }
      },
      { id: 3, top: 'Tiffany\'s', bottom: 'Marriott', up: true, down: true,
        history: { up: [], down: [] }
      },
      { id: 4, top: 'Skylobby', bottom: 'Legal Sea Foods', up: true, down: true,
        history: { up: [], down: [] }
      },
      { id: 5, top: 'Marriott', bottom: 'Star Market', up: true, down: true,
        history: { up: [], down: [] }
      },
      { id: 6, top: 'Westin', bottom: 'Fogo De Chao', up: true, down: true,
        history: { up: [], down: [] }
      },
      { id: 7, top: 'Gap', bottom: 'Tiffany\'s', up: true, down: true,
        history: { up: [], down: [] }
      }
    ];

    setTimeout(function() {
      console.log('escalators fetched');
      dispatch(setEscalators(fakeItems));
    }, 1000);
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

    setTimeout(function() {
      console.log('history fetched');

      var fakeHistory = {
        1: {
          up: [
            { id: 1,
              timestamp: '2017-04-07 18:00:00 EST',
              event: 'broken' },
            { id: 2,
              timestamp: '2017-04-10 18:00:00 EST',
              event: 'fixed' }
          ],
          down: [
            { id: 1,
              timestamp: '2017-04-07 18:00:00 EST',
              event: 'broken' },
            { id: 2,
              timestamp: '2017-04-07 19:00:00 EST',
              event: 'broken' },
            { id: 3,
              timestamp: '2017-04-10 09:00:00 EST',
              event: 'fixed' },
            { id: 4,
              timestamp: '2017-04-10 10:00:00 EST',
              event: 'fixed' }
          ]
        }
      };

      dispatch(setEscalatorHistory(id, direction, fakeHistory[id][direction]));
    }, 1000);
  };
};
