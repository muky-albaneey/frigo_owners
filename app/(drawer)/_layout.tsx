/* eslint-disable prettier/prettier */
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { HeaderButton } from '../../components/HeaderButton';
import { COLORS } from '~/components/home/Color';

const DrawerLayout = () => (
  <Drawer>
     <Drawer.Screen
      name="(home)"
      options={{
        headerTitle: 'Afrigora',
        headerTitleStyle: {
          color: COLORS.ColorBrown, // Change the title color to blue
          fontSize: 18, // Optional: Adjust font size if needed
        },
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
      }}
    />
   
    <Drawer.Screen
        name="(wallet)"
        options={{
          headerTitle: 'Wallet',
          headerTitleStyle: {
            color: COLORS.ColorBrown, // Change the title color to blue
            fontSize: 18, // Optional: Adjust font size if needed
          },
          drawerLabel: 'wallet',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="wallet" size={size} color={color} />
          ),
        }}
  />
   <Drawer.Screen
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
  />
   <Drawer.Screen
        name="(product)"
        options={{
          headerTitle: 'Product',
          headerTitleStyle: {
            color: COLORS.ColorBrown, // Change the title color to blue
            fontSize: 18, // Optional: Adjust font size if needed
          },
          drawerLabel: 'product',
          drawerIcon: ({ size, color }) => (
            <FontAwesome5 name="product-hunt" size={24} color="black" />
          ),
        }}
  />
  </Drawer>
);

export default DrawerLayout;
