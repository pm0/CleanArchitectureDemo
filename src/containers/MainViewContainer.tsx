import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from 'store';
import {createCart} from 'store/slices/cartSlice';
import MainView from 'components/MainView';

const MainViewContainer = () => {
  const cartId = useSelector((state: RootState) => state.cart.id);

  const dispatch = useDispatch();
  useEffect(() => {
    if (cartId === null) {
      dispatch(createCart());
    }
  }, [cartId]);

  return <MainView />;
};

export default MainViewContainer;
