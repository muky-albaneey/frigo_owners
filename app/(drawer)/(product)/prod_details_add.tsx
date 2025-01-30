import { View, Text } from 'react-native'
import React from 'react'
import AddProductDetails from '~/components/product/ProdDetailsAdd'

export default function prod_details_add() {
  return (
    <View style={{ flex:1 }}>
      <AddProductDetails />
    </View>
  )
}