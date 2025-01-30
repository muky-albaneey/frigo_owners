/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
// import EditProfile from '~/components/EditProfile'
import OrderHistory from '~/components/order/OrderHistory'

export default function profile() {
  return (
    <View style={{ flex:1 }}>
      <OrderHistory />
    </View>
  )
}