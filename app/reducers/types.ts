import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type appStateType = {
  counter: number;
  auth: {
    authenticated: boolean
  }
};

export type GetState = () => appStateType;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<appStateType, Action<string>>;
