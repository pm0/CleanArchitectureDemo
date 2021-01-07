import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {Product} from 'domain/entities/Product';

type ProductItemProps = {
  product: Product;
  onAdd: () => void;
};

const ProductItem = ({product, onAdd}: ProductItemProps) => {
  return (
    <View style={styles.productItem}>
      <View style={styles.productItemTextWrapper}>
        <Text style={styles.productText}>{product.name}</Text>
        <Text style={styles.productText}>RM{product.price}</Text>
      </View>
      <Button
        onPress={onAdd}
        icon={<Icon name="plus" type="font-awesome" size={20} color="white" />}
        buttonStyle={styles.productButton}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
  },
  productItemTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
  },
  productText: {
    fontSize: 18,
  },
  productButton: {
    backgroundColor: '#2196F3',
    minWidth: 48,
    marginLeft: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductItem;
