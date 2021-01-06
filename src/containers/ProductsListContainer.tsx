import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {fetchProducts} from '../store/productsSlice';
import ProductsList from '../components/ProductsList';

const ProductsListContainer = () => {
  const products = useSelector(
    (state: RootState) => state.products.productsList,
  );
  const fetching = useSelector((state: RootState) => state.products.fetching);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return <ProductsList products={products} fetching={fetching} />;
};

export default ProductsListContainer;
