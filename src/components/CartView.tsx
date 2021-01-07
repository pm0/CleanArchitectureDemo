import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CartProduct} from 'domain/entities/cart';
import CartItemsList from 'components/CartItemsList';

type CartViewProps = {
  cartItems: CartProduct[];
  checkoutTotal: number;
};

const CartView = ({cartItems, checkoutTotal}: CartViewProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Your Cart</Text>
      <CartItemsList cartItems={cartItems} />
      <Text style={styles.checkoutTotalText}>
        Total: RM
        <Text style={styles.checkoutTotalTextValue}>{checkoutTotal}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '600',
  },
  checkoutTotalText: {
    marginTop: 16,
    fontSize: 20,
    alignSelf: 'flex-end',
  },
  checkoutTotalTextValue: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default CartView;
