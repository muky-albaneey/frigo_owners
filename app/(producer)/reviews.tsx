import { View, Text } from 'react-native'
import React from 'react'
import ProducerReview from '~/components/home/producer/Reviews'

export default function reviews() {
  return (
    <View style={{ flex:1 }}>
      <ProducerReview />
    </View>
  )
}