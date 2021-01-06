import React, {ReactComponentElement} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon, Badge, withBadge} from 'react-native-elements';

type CartButtonProps = {
  numItems: number;
  onPress: () => void;
};

const CartButton = ({numItems, onPress}: CartButtonProps) => {
  const BadgedButton = withBadge(1, {
    right: 0,
    hidden: numItems < 1,
  })(Button);

  return (
    <View style={styles.buttonWrapper}>
      <BadgedButton
        onPress={() => onPress}
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
