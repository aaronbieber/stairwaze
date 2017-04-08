import { fetchEscalators } from '../actions';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const mapDispatchToProps = (dispatch) => {
  return {
    onRefreshClick: () => {
      dispatch(fetchEscalators());
    }
  };
};

const LiveNavbar = connect(
  null,
  mapDispatchToProps
)(Navbar);

export default LiveNavbar;
