import { View, Text } from 'react-native'
import React from 'react'
import OrderDetails from '~/components/order/OrderCompleted'

export default function complete() {
  return (
    <View style={{ flex:1 }}>
       <OrderDetails />
    </View>
  )
}