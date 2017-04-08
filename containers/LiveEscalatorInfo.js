import { fetchEscalatorHistory } from '../actions';
import { connect } from 'react-redux';
import EscalatorInfo from '../components/EscalatorInfo';

const mapStateToProps = (state, ownProps) => {
  var escalator = state.escalators.items.filter(
    e => e.id == ownProps.selectedEscalator.id
  )[0];
  return {
    fetching: state.fetchingHistory,
    history: escalator.history[ownProps.selectedEscalator.direction],
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
