/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import CoverPageList from '~/components/product/CovList';
// import CoverPageList from '~/components/product/CoverPageList';

export default function product_home() {
  return (
    <View style={{ flex:1 }}>
      <CoverPageList />
     </View>
  );
}
