import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CartProduct} from 'domain/entities/Cart';

type CartItemProps = {
  item: CartProduct;
};

const CartItem = ({item}: CartItemProps) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.cartItemSection}>
        <View>
          <Text style={styles.itemText}>{item.product.name}</Text>
          <Text style={styles.itemText}>Per unit: RM{item.product.price}</Text>
        </View>
        <View>
          <Text style={styles.itemText}>Quantity: {item.quantity}</Text>
          <Text style={styles.itemText}>
            Total:{' '}
            <Text style={[styles.itemText, styles.itemTotal]}>
              RM{item.quantity * item.product.price}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
  },
  cartItemSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
  },
  itemText: {
    fontSize: 18,
  },
  itemTotal: {
    fontWeight: 'bold',
  },
});

export default CartItem;
