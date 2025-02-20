import { View, Text } from 'react-native'
import React from 'react'
import TransactionSummary from '~/components/wallet/WalletDetail'

export default function details() {
  return (
    <View style={{ flex:1 }}>
      <TransactionSummary />
    </View>
  )
}