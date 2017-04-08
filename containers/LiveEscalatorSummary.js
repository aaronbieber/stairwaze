import { toggleEscalator } from '../actions';
import { connect } from 'react-redux';
import EscalatorSummary from '../components/EscalatorSummary';

const mapStateToProps = (state) => {
  return {
    escalators: state.escalators
  };
};

const LiveEscalatorSummary = connect(
  mapStateToProps,
  (dispatch) => ({})
)(EscalatorSummary);

export default LiveEscalatorSummary;
