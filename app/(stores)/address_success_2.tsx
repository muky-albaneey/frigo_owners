/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
// import OrderDetails from '~/components/OrderCancelled'
import NotificationSettings from '~/components/profile/Notification'
import DeliveryAddressScreen from '~/components/address/AddressSuccess'
import DeliveryAddressScreen_2 from '~/components/address/AddressSuccess_2'

export default function add_address() {
  return (
    <View style={{ flex:1 }}>
        <DeliveryAddressScreen_2 />
    </View>
  )
}