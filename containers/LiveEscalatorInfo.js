import { fetchEscalatorHistory, reportBroken, reportFixed } from '../actions';
import { connect } from 'react-redux';
import EscalatorInfo from '../components/EscalatorInfo';

const mapStateToProps = (state, ownProps) => {
  var escalator = state.escalators.items.filter(
    e => e.id == ownProps.selectedEscalator.id
  )[0];

  var history;
  if (!(ownProps.selectedEscalator.id in state.history.items)) {
    history = [];
  } else {
    history = state.history.items[ownProps.selectedEscalator.id];
  }

  return {
    fetchingError: state.history.fetchingError,
    savingError: state.history.savingError,
    savingErrorMessage: state.history.savingErrorMessage,
    fetching: state.history.fetching,
    saving: state.history.saving,
    escalator,
    history
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEscalatorHistory: (id, direction) => {
      dispatch(fetchEscalatorHistory(id, direction));
    },

    reportBroken: (id, direction) => {
      dispatch(reportBroken(id, direction));
    },

    reportFixed: (id, direction) => {
      dispatch(reportFixed(id, direction));
    }
  };
};

const LiveEscalatorInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(EscalatorInfo);

export default LiveEscalatorInfo;
