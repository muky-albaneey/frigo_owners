/* eslint-disable prettier/prettier */
import { AntDesign } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Layout() {
  // House of wears
  const router = useRouter(); 
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      {/* checkout_delivered */}
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="store" 
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
              paddingVertical: 10,
              backgroundColor: "white", // Optional: Add background color
              marginTop:50
            }}
          >
            {/* Back Button */}
            <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
              <AntDesign name="leftcircleo" size={24} color="black" />
            </TouchableOpacity>

            {/* Title */}
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>House of wears</Text>

            {/* Icons */}
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ marginHorizontal: 8 }}>
                <Text>🛒</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>🔔</Text>
              </TouchableOpacity>
            </View>
          </View>
        ),
      }}
             
             />
      <Stack.Screen name="pickup" options={{headerShown:true,
            headerTitle: '', // Remove the title
             headerLeft: () => {
             // Use expo-router's navigation
              return (
                <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                  <AntDesign name="leftcircleo" size={24} color="black" />
                </TouchableOpacity>
              );
             }}} />
      <Stack.Screen name="delivery_method" options={{headerShown:true,    headerTitle: '', // Remove the title
            headerLeft: () => {
             // Use expo-router's navigation
              return (
                <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                  <AntDesign name="leftcircleo" size={24} color="black" />
                </TouchableOpacity>
              );
             }}} />
      <Stack.Screen name="delivery_address" options={{headerShown:true,   headerTitle: '', // Remove the title
            headerLeft: () => {
             // Use expo-router's navigation
              return (
                <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                  <AntDesign name="leftcircleo" size={24} color="black" />
                </TouchableOpacity>
              );
             }}} />
      <Stack.Screen name="checkout_delivered" options={{headerShown:true,   headerTitle: '', // Remove the title
            headerLeft: () => {
             // Use expo-router's navigation
              return (
                <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                  <AntDesign name="leftcircleo" size={24} color="black" />
                </TouchableOpacity>
              );
             }}} />
      <Stack.Screen name="add_address" options={{headerShown:true,   headerTitle: '', // Remove the title
            headerLeft: () => {
             // Use expo-router's navigation
              return (
                <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                  <AntDesign name="leftcircleo" size={24} color="black" />
                </TouchableOpacity>
              );
             }}} />
      <Stack.Screen name="add_address_2" options={{headerShown:true,   headerTitle: '', // Remove the title
            headerLeft: () => {
             // Use expo-router's navigation
              return (
                <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                  <AntDesign name="leftcircleo" size={24} color="black" />
                </TouchableOpacity>
              );
             }}} />
      <Stack.Screen name="address_success" options={{headerShown:true,   headerTitle: '', // Remove the title
            headerLeft: () => {
             // Use expo-router's navigation
              return (
                <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                  <AntDesign name="leftcircleo" size={24} color="black" />
                </TouchableOpacity>
              );
             }}} />
            <Stack.Screen name="saved" options={{headerShown:true,   headerTitle: '', // Remove the title
              headerLeft: () => {
              // Use expo-router's navigation
                return (
                  <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                    <AntDesign name="leftcircleo" size={24} color="black" />
                  </TouchableOpacity>
                );
              }}} />
      <Stack.Screen name="address_success_2" options={{headerShown:true,   headerTitle: '', // Remove the title
            headerLeft: () => {
             // Use expo-router's navigation
              return (
                <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                  <AntDesign name="leftcircleo" size={24} color="black" />
                </TouchableOpacity>
              );
             }}} />
              <Stack.Screen
              name="details/[id]"
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
                  paddingVertical: 10,
                  backgroundColor: "white", // Optional: Add background color
                  marginTop:50
                }}
            >
              {/* Back Button */}
              <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                <AntDesign name="leftcircleo" size={24} color="black" />
              </TouchableOpacity>

              {/* Title */}
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Product Details</Text>

              {/* Icons */}
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ marginHorizontal: 8 }}>
                  <Text>🛒</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>🔔</Text>
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      />
          <Stack.Screen
              name="edit/[id]"
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
                  paddingVertical: 10,
                  backgroundColor: "white", // Optional: Add background color
                  marginTop:50
                }}
            >
              {/* Back Button */}
              <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                <AntDesign name="leftcircleo" size={24} color="black" />
              </TouchableOpacity>

              {/* Title */}
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Edit Product</Text>

              {/* Icons */}
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ marginHorizontal: 8 }}>
                  <Text>🛒</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>🔔</Text>
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      />
      {/* delivery_address */}
       <Stack.Screen
        name="category/[id]"
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
                paddingVertical: 10,
                backgroundColor: "white", // Optional: Add background color
                marginTop:50
              }}
            >
              {/* Back Button */}
              <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                <AntDesign name="leftcircleo" size={24} color="black" />
              </TouchableOpacity>

              {/* Title */}
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Ankara</Text>

              {/* Icons */}
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ marginHorizontal: 8 }}>
                  <Text>🛒</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>🔔</Text>
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      />
    </Stack>
  );
}
