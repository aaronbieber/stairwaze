import { fetchEscalators, fetchEscalatorHistory } from '../actions';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const mapDispatchToProps = (dispatch) => {
  var props = {
    fetchEscalators: () => {
      dispatch(fetchEscalators());
    },

    fetchEscalatorHistory: (id, direction) => {
      dispatch(fetchEscalatorHistory(id, direction));
    }
  };
  return props;
};

const LiveNavbar = connect(
  null,
  mapDispatchToProps
)(Navbar);

export default LiveNavbar;
