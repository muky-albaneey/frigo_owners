import { View, Text } from 'react-native'
import React from 'react'
// import OrderDetails from '~/components/OrderCancelled'
import NotificationSettings from '~/components/profile/Notification'
import AddAddressScreen from '~/components/address/AddAddress'

export default function add_address() {
  return (
    <View style={{ flex:1 }}>
        <AddAddressScreen />
    </View>
  )
}