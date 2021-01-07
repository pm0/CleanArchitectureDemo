import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import ProductsListContainer from 'containers/ProductsListContainer';
import CartButtonContainer from 'containers/CartButtonContainer';

const MainView = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Products</Text>
          <ProductsListContainer />
        </View>
      </SafeAreaView>
      <CartButtonContainer />
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '600',
  },
});

export default MainView;
