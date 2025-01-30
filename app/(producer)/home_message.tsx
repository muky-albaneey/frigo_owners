import { View, Text } from 'react-native'
import React from 'react'
import ProducersMessages from '~/components/home/producer/HomeMessage'

export default function home_message() {
  return (
    <View style={{ flex:1, paddingVertical:80}}>
      <ProducersMessages />
    </View>
  )
}