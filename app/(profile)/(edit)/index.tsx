/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
// import EditProfile from '~/components/profile/EditProfile'
import EditPersonal from '~/components/profile/EditProfile'

export default function profile() {
  return (
    <View style={{ flex:1, paddingVertical:50 }}>
      <EditPersonal />
    </View>
  )
}