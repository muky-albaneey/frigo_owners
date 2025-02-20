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
      <Stack.Screen name="cancelled" options={{headerShown:false}} />
      <Stack.Screen name="complete" options={{headerShown:false}} />
      <Stack.Screen name="pending" options={{headerShown:false}} />
      <Stack.Screen name="review"  options={{ headerShown: false }} />
      <Stack.Screen name="order_details"  options={{ headerShown: false }} />
    </Stack>
  );
}
