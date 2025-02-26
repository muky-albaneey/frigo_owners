/* eslint-disable prettier/prettier */
import { Ionicons } from '@expo/vector-icons';
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
      }}
      >
      {/* Optionally configure static options outside address the route.*/}
      {/* checkout_delivered */}
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="address"  options={{
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
              marginTop:80
            }}
          >
            {/* Back Button */}
            <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
            <Ionicons name="arrow-back" size={24} color="black" style={{  marginRight: 10, }} />
            </TouchableOpacity>

            {/* Title */}
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Edit contacts</Text>

               
          </View>
        ),
      }} />
      <Stack.Screen name="social" 
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
                marginTop:80
              }}
            >
              {/* Back Button */}
              <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
              <Ionicons name="arrow-back" size={24} color="black" style={{  marginRight: 10, }} />
              </TouchableOpacity>
  
              {/* Title */}
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Edit   Social media</Text>
                 
            </View>
          ),
        }} 
      />
      <Stack.Screen name="time"   
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
              marginTop:80
            }}
          >
            {/* Back Button */}
            <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
            <Ionicons name="arrow-back" size={24} color="black" style={{  marginRight: 10, }} />
            </TouchableOpacity>

            {/* Title */}
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Edit Working Hours</Text>

               
          </View>
        ),
      }} />
      {/* <Stack.Screen name="address" options={{headerShown:false}} /> */}


    </Stack>
  );
}
