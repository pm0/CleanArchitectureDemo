import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Product} from 'domain/entities/Product';
import {FetchingStatus} from 'types';
import ProductItem from 'components/ProductItem';

type ProductListProps = {
  products: Product[];
  fetching: FetchingStatus;
  onAddProduct: (id: string) => void;
};

const ProductsList = ({products, fetching, onAddProduct}: ProductListProps) => {
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
          <ProductItem
            product={product.item}
            onAdd={() => onAddProduct(product.item.id)}
          />
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
