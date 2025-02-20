import { View, Text } from 'react-native'
import React from 'react'
import OrderDetailsPending from '~/components/order/OrderPending'

export default function pending() {
  return (
    <View style={{ flex:1 }}>
       <OrderDetailsPending />
    </View>
  )
}