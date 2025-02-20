/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import MoneyTrackerScreen from '~/components/wallet/Wallet_history'

export default function wallet_history() {
  return (
    <View style={{ flex:1 }}>
      <MoneyTrackerScreen />
    </View>
  )
}