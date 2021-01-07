import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from 'store';
import AppRouter from './AppRouter';
import LoadingOverlay from 'components/LoadingOverlay';

const RootContainer = () => {
  const appLoading = useSelector(
    (state: RootState) =>
      state.cart.creatingCart === 'idle' ||
      state.cart.creatingCart === 'pending',
  );

  return (
    <>
      <AppRouter />
      <LoadingOverlay enabled={appLoading} />
    </>
  );
};

export default RootContainer;
