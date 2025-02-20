/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import EditWorkingHours from '~/components/profile/Time'

export default function time() {
  return (
    <View style={{ flex:1 }}>
      <EditWorkingHours />
    </View>
  ) 
}