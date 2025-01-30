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
      {/* Optionally configure static options outside the route.*/}
      {/* checkout_delivered */}
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="phone" options={{headerShown:false}} />
      <Stack.Screen name="phone_code" options={{headerShown:false}} />


    </Stack>
  );
}
