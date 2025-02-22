/* eslint-disable prettier/prettier */
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Layout() {
  const router = useRouter();
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
      <Stack.Screen name="support"   options={{
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
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Help & Support</Text>

               
          </View>
        ),
      }} />
      <Stack.Screen name="(order-history)"  options={{ headerShown: false }} />
      <Stack.Screen name="notification" 
      options={{
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
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Notifications</Text>

               
          </View>
        ),
      }}  />
      <Stack.Screen name="dashboard"   
      options={{
        headerShown: true,
        headerTitle: '', // Remove default title
        header: () => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
              // paddingVertical: 10,
              backgroundColor: "transparent", // Optional: Add background color
              marginTop:70
            }}
          >
            {/* Back Button */}
            <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
            <Ionicons name="arrow-back" size={24} color="black" style={{  marginRight: 10, }} />
            </TouchableOpacity>

            {/* Title */}
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sales Dashboard</Text>

            {/* Icons */}
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                  <Text style={{fontSize: 20}}>☰</Text>
              </TouchableOpacity>
            </View>
          </View>
        ),
      }} />
     
    </Stack>
  );
}
