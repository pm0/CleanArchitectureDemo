import React, {useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from 'store';
import {fetchProducts} from 'store/slices/productsSlice';
import {addToCart} from 'store/slices/cartSlice';
import ProductsList from 'components/ProductsList';

const ProductsListContainer = () => {
  const products = useSelector(
    (state: RootState) => state.products.productsList,
  );
  const fetching = useSelector((state: RootState) => state.products.fetching);
  const addingToCartStatus = useSelector(
    (state: RootState) => state.cart.addingProduct,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (addingToCartStatus === 'succeeded') {
      ToastAndroid.show('Added to cart', ToastAndroid.SHORT);
    }
  }, [addingToCartStatus]);

  return (
    <ProductsList
      products={products}
      fetching={fetching}
      onAddProduct={(id) => dispatch(addToCart({productId: id}))}
    />
  );
};

export default ProductsListContainer;
