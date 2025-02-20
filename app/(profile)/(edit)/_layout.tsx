/* eslint-disable prettier/prettier */
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
      {/* Optionally configure static options outside address the route.*/}
      {/* checkout_delivered */}
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="address" options={{headerShown:false}} />
      <Stack.Screen name="social" options={{headerShown:false}} />
      <Stack.Screen name="time" options={{headerShown:false}} />
      {/* <Stack.Screen name="address" options={{headerShown:false}} /> */}


    </Stack>
  );
}
