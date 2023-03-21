import React from 'react';
import { StyleSheet, View } from 'react-native';

import ProductList from './src/components/ProductList';

import products from './src/data/products';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductList products={products} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
