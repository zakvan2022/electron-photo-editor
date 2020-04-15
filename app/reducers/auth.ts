import { AUTH_AUTHENTICATED } from '../actions/auth';

const defaultState = {
    authenticated: false
}
export default function auth(state = defaultState, action: any) {
  switch (action.type) {
    case AUTH_AUTHENTICATED:
      return {...state, authenticated: action.payload};
    default:
      return state;
  }
}