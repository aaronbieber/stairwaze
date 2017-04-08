import { toggleEscalator } from '../actions';
import { connect } from 'react-redux';
import EscalatorInfo from '../components/EscalatorInfo';

const mapStateToProps = (state, ownProps) => {
  return {
    escalator: state.escalators.items.filter((e) => e.id == ownProps.selectedEscalator.id)[0]
  };
};

const LiveEscalatorInfo = connect(
  mapStateToProps,
  (dispatch) => ({})
)(EscalatorInfo);

export default LiveEscalatorInfo;
