import { Dispatch } from '../reducers/types';
import { push } from 'connected-react-router';

export const AUTH_AUTHENTICATED = 'AUTH_AUTHENTICATED';

export function authenticated(data: boolean) {
  return {
    type: AUTH_AUTHENTICATED,
    payload: data
  };
}

export function login(email: string, password: string) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      console.log(`${email} is loginned successfully with ${password}`)
      dispatch(authenticated(true));
      dispatch(push('/home'));
    }, 1000);
  };
}
