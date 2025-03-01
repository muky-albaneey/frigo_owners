/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';
import ChartRequest from '~/components/chart/ChartRequest';

// import { ScreenContent } from '~/components/HomePageUser';

export default function chart() {
  return (
    <View style={{ flex:1 }}>
      {/* <ScreenContent path="app/modal.tsx" title="Modal" /> */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <ChartRequest />
    </View>
  );
}
