/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import DashboardScreen from '~/components/profile/Dashboard'

export default function dashboaard() {
  return (
    <View style={{ flex:1, paddingVertical:50 }}>
      <DashboardScreen />
    </View>
  )
}