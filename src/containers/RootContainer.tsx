import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from 'store';
import {createCart} from 'store/cartSlice';
import LoadingOverlay from 'components/LoadingOverlay';
import MainView from 'components/MainView';

const RootContainer = () => {
  const cartId = useSelector((state: RootState) => state.cart.id);
  const appLoading = useSelector(
    (state: RootState) =>
      state.cart.creatingCart === 'idle' ||
      state.cart.creatingCart === 'pending',
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (cartId === null) {
      dispatch(createCart());
    }
  }, [cartId]);

  return (
    <>
      <MainView />
      <LoadingOverlay enabled={appLoading} />
    </>
  );
};

export default RootContainer;
