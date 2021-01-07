import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from 'store';
import {getCart} from 'store/selectors';
import CartView from 'components/CartView';

const CartViewContainer = () => {
  const cart = useSelector((state: RootState) => getCart(state));
  const checkoutTotal = cart.products.reduce(
    (acc, val) => acc + val.product.price * val.quantity,
    0,
  );

  return <CartView cartItems={cart.products} checkoutTotal={checkoutTotal} />;
};

export default CartViewContainer;
