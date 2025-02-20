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
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index"  options={{ headerShown: false }} />
      <Stack.Screen name="wallet_history"  options={{ headerShown: false }} />
      <Stack.Screen name="wallet_tran_history"  options={{ headerShown: false }} />
      <Stack.Screen name="wallet_notification"  options={{ headerShown: false }} />
      <Stack.Screen name="details/[id]"  options={{ headerShown: false }} />
     
    </Stack>
  );
}
