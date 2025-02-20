import { View, Text } from 'react-native'
import React from 'react'
import OrderDetails from '~/components/order/OrderCancelled'

export default function cancelled() {
  return (
    <View style={{ flex:1 }}>
        <OrderDetails />
    </View>
  )
}