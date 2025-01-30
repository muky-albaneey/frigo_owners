import { View, Text } from 'react-native'
import React from 'react'
import OrderDetailsPending from '~/components/order/OrderPending'
import ReviewScreen from '~/components/home/Review'

export default function review() {
  return (
    <View style={{ flex:1 }}>
       <ReviewScreen />
    </View>
  )
}