import { toggleEscalator } from '../actions';
import { connect } from 'react-redux';
import EscalatorList from '../components/EscalatorList';

const mapStateToProps = (state) => {
  return {
    error: state.escalators.error,
    fetching: state.escalators.fetching,
    escalators: state.escalators.items
  };
};

const VisibleEscalatorList = connect(
  mapStateToProps
)(EscalatorList);

export default VisibleEscalatorList;
