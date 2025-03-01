/* eslint-disable prettier/prettier */
import { FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { HeaderButton } from '../../components/HeaderButton';
import { COLORS } from '~/components/home/Color';
import ProducerDashboard from '~/components/home/producer/Dashboard';
import ProfileScreen from '~/components/profile/Profile';
import { View } from 'react-native';

const profile = 'owner';
  const getProfile = () => {
    switch (profile) {
      case "producer":
        return ProducerDashboard;
      case "owner":
        return ProfileScreen;
      case "tailor":
          return ProfileScreen;
      default:
        return ProfileScreen;
    }
  };
const DrawerLayout = () => (
  <Drawer
  screenOptions={{
    drawerActiveBackgroundColor: COLORS.ColorLightBrown, // Change this to your desired background color
    drawerActiveTintColor: COLORS.ColorBrown, // Change text/icon color for active item
    drawerInactiveBackgroundColor: 'transparent', // Background color for inactive items
    drawerInactiveTintColor: COLORS.ColorBrown, // Text/icon color for inactive items
  }}
  >
     <Drawer.Screen
      name="(home)"
      options={{
        headerTitle: 'Afrigora',
        headerTitleStyle: {
          color: COLORS.ColorBrown, // Change the title color to blue
          fontSize: 18, // Optional: Adjust font size if needed
        },
        headerTintColor: COLORS.ColorBrown, // Change this to your desired color
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => (
        <View style={{ backgroundColor: 'lightgray', padding: 8, borderRadius: 10 }}>
          <Ionicons name="home-outline" size={size} color={COLORS.ColorBrown} />
      </View>       
       ),
      }}
    />
   
    {/* <Drawer.Screen
        name="(wallet)"
        options={{
          headerTitle: 'Wallet',
          headerTitleStyle: {
            color: COLORS.ColorBrown, // Change the title color to blue
            fontSize: 18, // Optional: Adjust font size if needed
          },
          drawerLabel: 'wallet',
          drawerIcon: ({ size, color }) => (
            // <Ionicons name="wallet" size={size} color={color} />
            <View style={{ backgroundColor: 'lightgray', padding: 8, borderRadius: 10 }}>
            <Ionicons name="home-outline" size={size} color={COLORS.ColorBrown} />
        </View>     
          ),
        }}
  /> */}
   {/* <Drawer.Screen
        name="(profile)"
        options={{
          headerTitle: 'Profile',
          headerTitleStyle: {
            color: COLORS.ColorBrown, // Change the title color to blue
            fontSize: 18, // Optional: Adjust font size if needed
          },
          drawerLabel: 'profile',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
  /> */}
   <Drawer.Screen
        name="(product)"
        options={{
          headerTitle: 'Product',
          headerTitleStyle: {
            color: COLORS.ColorBrown, // Change the title color to blue
            fontSize: 18, // Optional: Adjust font size if needed
          },
          headerTintColor: COLORS.ColorBrown, 
          drawerLabel: 'product',
          drawerIcon: ({ size, color }) => (
            
          <View style={{ backgroundColor: 'lightgray', padding: 8, borderRadius: 10 }}>
            <FontAwesome5 name="product-hunt" size={24} color={COLORS.ColorBrown} />
        </View> 
          ),
        }}
  />
   <Drawer.Screen
        name="(message)"
        options={{
          headerTitle: 'Message',
          headerTitleStyle: {
            color: COLORS.ColorBrown, // Change the title color to blue
            fontSize: 18, // Optional: Adjust font size if needed
          },
          headerTintColor: COLORS.ColorBrown, 
          drawerLabel: 'message',
          drawerIcon: ({ size, color }) => (
      
          <View style={{ backgroundColor: 'lightgray', padding: 8, borderRadius: 10 }}>
          
            <MaterialCommunityIcons name="message" size={24} color={COLORS.ColorBrown} />
        </View> 
          ),
        }}
  />
  </Drawer>
);

export default DrawerLayout;
