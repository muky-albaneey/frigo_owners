import { View, Text } from 'react-native'
import React from 'react'
import DraftList from '~/components/product/DraftList'

export default function draft() {
  return (
    <View style={{ flex:1 }}>
      <DraftList />
    </View>
  )
}