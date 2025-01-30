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
      {/* Optionally configure static options outside the route    (dashboaard).*/}
      <Stack.Screen name="index"  options={{ headerShown: false }} />
      <Stack.Screen name="(edit)"  options={{ headerShown: false }} />
      <Stack.Screen name="support"  options={{ headerShown: false }} />
      <Stack.Screen name="(order-history)"  options={{ headerShown: false }} />
      <Stack.Screen name="notification"  options={{ headerShown: false }} />
      <Stack.Screen name="dashboaard"  options={{ headerShown: false }} />
     
    </Stack>
  );
}
