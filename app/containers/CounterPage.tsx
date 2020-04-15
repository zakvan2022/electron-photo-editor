import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/templates/Counter';
import {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync
} from '../actions/counter';
import { appStateType } from '../reducers/types';

function mapStateToProps(state: appStateType) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
