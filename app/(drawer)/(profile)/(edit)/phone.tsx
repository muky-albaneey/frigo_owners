/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import EditProfile from '~/components/profile/EditProfile'
import PhoneNum from '~/components/profile/Phone_num'

export default function phone() {
  return (
    <View style={{ flex:1 }}>
      <PhoneNum />
    </View>
  )
}