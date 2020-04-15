import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import auth from './auth';
import counter from './counter';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    auth,
    counter
  });
}