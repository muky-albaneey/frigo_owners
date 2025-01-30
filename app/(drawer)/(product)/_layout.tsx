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
      <Stack.Screen name="add_cov"  options={{ headerShown: false }} />
      <Stack.Screen name="cov_list"  options={{ headerShown: false }} />
      <Stack.Screen name="success"  options={{ headerShown: false }} />
      <Stack.Screen name="add_prod"  options={{ headerShown: false }} />
      <Stack.Screen name="prod_details_add"  options={{ headerShown: false }} />
      <Stack.Screen name="details_success"  options={{ headerShown: false }} />
      <Stack.Screen name="draft"  options={{ headerShown: false }} />
      {/* 
     
      <Stack.Screen name="(order-history)"  options={{ headerShown: false }} />
      <Stack.Screen name="draft"  options={{ headerShown: false }} /> */}
     
    </Stack>
  );
}
