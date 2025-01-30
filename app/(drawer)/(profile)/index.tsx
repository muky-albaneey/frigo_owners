/* eslint-disable prettier/prettier */
import { Stack } from 'expo-router';
import { Text, View } from 'react-native';


import ProfileScreen from '~/components/profile/Profile';
// import { HomePageUser } from '~/components/HomePageUser';

export default function Home() {
  return (
    <View style={{ flex:1 }}>
      <Stack.Screen options={{ title: 'Afrigo', headerShown: false}} />
      <ProfileScreen />
  
    </View>
  );
}
