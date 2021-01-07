import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon, Badge} from 'react-native-elements';

type CartButtonProps = {
  numItems: number;
  onPress: () => void;
};

const CartButton = ({numItems, onPress}: CartButtonProps) => {
  return (
    <View style={styles.buttonWrapper}>
      <Button
        onPress={onPress}
        icon={
          <Icon
            name="shopping-cart"
            type="font-awesome"
            color="white"
            size={32}
          />
        }
        buttonStyle={styles.buttonStyle}
      />
      {numItems > 0 && (
        <Badge
          status="error"
          value={numItems}
          containerStyle={{position: 'absolute', top: 0, right: -4}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  buttonStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default CartButton;
