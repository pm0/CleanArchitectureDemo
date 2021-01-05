import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import ProductsList from './ProductsList';

const MainView = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Products</Text>
            <ProductsList />
          </View>
        </View>
      </SafeAreaView>
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
    fontSize: 24,
    fontWeight: '600',
  },
});

export default MainView;
