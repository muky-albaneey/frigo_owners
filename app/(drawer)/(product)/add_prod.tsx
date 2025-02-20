/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import AddProduct from '~/components/product/AddProd'

export default function add_prod() {
  return (
    <View style={{ flex:1 }}>
      <AddProduct />
    </View>
  )
}