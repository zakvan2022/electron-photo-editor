import React from 'react';
import Routes from '../routes/Routes';

type Props = {
  authenticated: Boolean;
};

const PhotoApp = ({ authenticated }: Props) => (
      <Routes authenticated={authenticated}/>
);

export default PhotoApp;