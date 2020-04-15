import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Store } from './reducers/types';
import PhotoApp from './apps/PhotoApp';

type Props = {
  store: Store;
  history: History;
};

const App = ({ store, history }: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PhotoApp authenticated/>
    </ConnectedRouter>
  </Provider>
);

export default hot(App);
