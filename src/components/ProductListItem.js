import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ProductListItem({ product }) {
  return (
    <View style={styles.itemContainer}>
      <Image source={product.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{product.name}</Text>
      <Text style={styles.itemPrice}>${product.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    marginLeft: 'auto',
  },
});
