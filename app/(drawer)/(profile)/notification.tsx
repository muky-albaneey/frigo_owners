import { View, Text } from 'react-native'
import React from 'react'
// import OrderDetails from '~/components/OrderCancelled'
import NotificationSettings from '~/components/profile/Notification'

export default function cancelled() {
  return (
    <View style={{ flex:1 }}>
        <NotificationSettings />
    </View>
  )
}