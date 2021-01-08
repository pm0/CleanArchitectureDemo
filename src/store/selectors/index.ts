import {createSelector} from 'reselect';
import {RootState} from 'store';
import {CartNormalized, Cart} from 'domain/entities/Cart';
import {Product} from 'domain/entities/Product';

const getProductsList = (state: RootState) => state.products.productsList;
const getCartNormalized = (state: RootState) => ({
  id: state.cart.id!,
  products: state.cart.products,
});

// Takes a Product[] and CartNormalized from state and returns a Cart
export const getCart = createSelector<
  RootState,
  Product[],
  CartNormalized,
  Cart
>([getProductsList, getCartNormalized], (productsList, cartNormalized) => {
  const products = cartNormalized.products.map((cartProduct) => {
    const product = productsList.find((p) => p.id === cartProduct.id)!;
    return {
      product,
      quantity: cartProduct.quantity,
    };
  });

  return {
    id: cartNormalized.id,
    products,
  };
});
