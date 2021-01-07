import React from 'react';
import {FlatList} from 'react-native';
import {CartProduct} from 'domain/entities/Cart';
import CartItem from 'components/CartItem';

type CartItemsListProps = {
  cartItems: CartProduct[];
};

const CartItemsList = ({cartItems}: CartItemsListProps) => {
  return (
    <FlatList
      data={cartItems}
      renderItem={(item) => <CartItem item={item.item} />}
      keyExtractor={(item, index) => item.product.id}
    />
  );
};

export default CartItemsList;
