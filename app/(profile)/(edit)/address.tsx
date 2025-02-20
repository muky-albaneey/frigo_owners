/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import EditProfile from '~/components/profile/EditProfile'
import EditContacts from '~/components/profile/Address'
// import EditContacts from '~/components/profile/Address'
// import EditContacts from '~/components/profile/address'
// import EditContacts from '~/components/profile/Phone_num'

export default function address() {
  return (
    <View style={{ flex:1 }}>
      <EditContacts />
    </View>
  )
}