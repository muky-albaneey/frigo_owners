/* eslint-disable prettier/prettier */
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Layout() {
  const router = useRouter(); // Assuming useRouter is imported and used correctly.
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
      <Stack.Screen name="index"  options={{
        headerShown: true,
        headerTitle: '', // Remove default title
        header: () => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingHorizontal: 10,
              gap: 120,
              backgroundColor: "#fff", // Optional: Add background color
              marginTop:70
            }}
          >
            {/* Back Button */}
            <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
               <Ionicons name="arrow-back" size={24} color="black" style={{  marginRight: 10, }} />
            </TouchableOpacity>

            {/* Title */}
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Order History</Text>

           
          </View>
        ),
      }} />
      <Stack.Screen name="cancelled" options={{headerShown:false}} />
      <Stack.Screen name="complete" options={{headerShown:false}} />
      <Stack.Screen name="pending" options={{headerShown:false}} />
      <Stack.Screen name="review"  options={{ headerShown: false }} />
      <Stack.Screen name="order_details"  options={{ headerShown: false }} />
    </Stack>
  );
}
