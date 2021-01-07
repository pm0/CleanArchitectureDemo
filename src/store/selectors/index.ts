import {createSelector} from 'reselect';
import {RootState} from 'store';
import {CartNormalized, Cart, CartProduct} from 'domain/entities/Cart';

const getProductsList = (state: RootState) => state.products.productsList;
const getCartNormalized = (state: RootState) => state.cart as CartNormalized;

export const getCart = createSelector(
  [getProductsList, getCartNormalized],
  (productsList, cartNormalized) => {
    const products = cartNormalized.products.map((cartProduct) => {
      const product = productsList.find((p) => p.id === cartProduct.id);
      return {
        product: {
          id: cartProduct.id,
          name: product!.name,
          price: product!.price,
        },
        quantity: cartProduct.quantity,
      } as CartProduct;
    });

    return {
      id: cartNormalized.id,
      products,
    } as Cart;
  },
);
