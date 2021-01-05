import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, FlatList, Text} from 'react-native';
import {RootState} from './store';
import {fetchProducts} from './store/productsSlice';

const ProductsList = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const fetching = useSelector((state: RootState) => state.products.fetching);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (fetching === 'idle' || fetching === 'pending') {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else if (fetching === 'succeeded') {
    return (
      <FlatList
        data={products}
        renderItem={(product) => (
          <Text>
            {product.item.name}: {product.item.price}
          </Text>
        )}
      />
    );
  } else if (fetching === 'failed') {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  } else {
    return null;
  }
};

export default ProductsList;
