/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import Transaction_history from '~/components/wallet/Transaction_history'

export default function wallet_tran_history() {
  return (
    <View style={{ flex:1 }}>
      <Transaction_history />
    </View>
  )
}