import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/templates/Login';

import {
  login
} from '../actions/auth';
import { appStateType } from '../reducers/types';

function mapStateToProps(state: appStateType) {
  return {
    authenticated: state.auth.authenticated
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      login
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);