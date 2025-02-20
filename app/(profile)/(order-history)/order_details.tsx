/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import OrderDetailsScreen from '~/components/order/OrderDetails';

export default function order_details() {
  return (
    <View style={{ flex:1 }}>
      <OrderDetailsScreen />
     </View>
  );
}
