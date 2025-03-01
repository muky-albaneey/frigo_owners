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
      {/* <Stack.Screen name="index" options={{}} /> */}
      <Stack.Screen name="index" 
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
      {/* <Stack.Screen name='home_message' options={{headerShown: false}}/> */}
      <Stack.Screen name="home_message" 
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
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Daviva Wears</Text>

            {/* Icons */}
            <View style={{ flexDirection: "row" }}>
              {/* <TouchableOpacity style={{ marginHorizontal: 8 }}>
                <Text>🛒</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>🔔</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        ),
      }}
             
             />
      <Stack.Screen name="reviews" 
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
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Reviews</Text>

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
      <Stack.Screen name="category/[id]" 
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
            {/* <Text style={{ fontSize: 20, fontWeight: "bold" }}>Reviews</Text> */}

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
      <Stack.Screen name="detail/[id]" 
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
      <Stack.Screen name="contact/[id]" 
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
            <Text style={{ fontSize: 20, fontWeight: "bold", marginHorizontal:130, marginVertical:10 }}>Contact Us</Text>

            {/* Icons */}
            {/* <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ marginHorizontal: 8 }}>
                <Text>🛒</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>🔔</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        ),
      }}
             
             />
    </Stack>
  );
}
