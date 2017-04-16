import { fetchEscalatorHistory } from '../actions';
import { connect } from 'react-redux';
import EscalatorInfo from '../components/EscalatorInfo';

const mapStateToProps = (state, ownProps) => {
  var escalator = state.escalators.items.filter(
    e => e.id == ownProps.selectedEscalator.id
  )[0];

  var history;
  if (!('history' in escalator)) {
    history = [];
  } else {
    history = escalator.history[ownProps.selectedEscalator.direction];
  }

  return {
    fetching: state.escalators.fetchingHistory,
    history: history,
    escalator
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEscalatorHistory: (id, direction) => {
      dispatch(fetchEscalatorHistory(id, direction));
    }
  };
};

const LiveEscalatorInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(EscalatorInfo);

export default LiveEscalatorInfo;
