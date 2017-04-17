import { toggleEscalator } from '../actions';
import { connect } from 'react-redux';
import EscalatorList from '../components/EscalatorList';

const mapStateToProps = (state) => {
  return {
    fetching: state.escalators.fetching,
    escalators: state.escalators.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEscalatorClick: (id, direction) => {
      dispatch(toggleEscalator(id, direction));
    }
  };
};

const VisibleEscalatorList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EscalatorList);

export default VisibleEscalatorList;
