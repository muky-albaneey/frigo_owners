/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';


// import CartScreen from '~/components/home/CartScreen';

import BothHomePage from '~/components/home/BothHome';
import CartScreen from '~/components/home/CartScreen';
import { COLORS } from '~/components/home/Color';
import HomePageTailor from '~/components/home/HomePageTailor';
import HomePageUser from '~/components/home/HomePageUser';
import ProducerDashboard from '~/components/home/producer/Dashboard';
import ProducerHomepage from '~/components/home/producer/HomeProducder';
import ProfileScreen from '~/components/profile/Profile';
import WalletScreen from '~/components/wallet/WalletPage';



const Tab = createBottomTabNavigator();


export default function TabLayout() {
  const rotation = useSharedValue(0);

  const status = 'dealer';
const profile = 'owner';

  const getHomeComponent = () => {
    switch (status) {
      case "both":
        return BothHomePage;
      case "tailor":
        return HomePageTailor;
      case "dealer":
          return HomePageUser;
      default:
        return HomePageUser;
    }
  };

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
  // Star animation: create a rotating effect
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotation.value}deg` },
        { scale: 1 + Math.abs(rotation.value) / 70 }, // Scale slightly as it rotates
      ],
    };
  });
  
  React.useEffect(() => {
    rotation.value = withRepeat(
      withSequence(
        withTiming(15, { duration: 200 }), // Rotate 15 degrees
        withTiming(-15, { duration: 200 }), // Rotate -15 degrees
        withTiming(0, { duration: 200 }) // Return to center
      ),
      -1, // Infinite repetition
      true // Reverse the animation
    );
  }, []);
  

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: COLORS.ColorHome, // Change active icon color
        tabBarInactiveTintColor: '#888', // Change inactive icon color
      }}
    >
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        component={getHomeComponent()}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
        }}
      />

      {/* Cart Tab */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="cart-outline" size={24} color={color} />,
        }}
      />

      {/* Wishlist Tab with Circle */}
      
      <Tab.Screen
        name="producers"
        component={ProducerHomepage}
        options={{
    tabBarButton: (props) => (
      <TouchableOpacity {...props} style={styles.circleButton}>
        <View style={styles.circle}>
          {/* Animated Star */}
          <Animated.View style={animatedStyle}>
            <Ionicons name="cart-outline" size={17} color="white" />
          </Animated.View>
          <Text style={styles.circleText}>Buy now</Text>
        </View>
      </TouchableOpacity>
    ),
  }}
/>

      {/* Wallet Tab */}
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="wallet-outline" size={24} color={color} />,
        }}
      />

      {/* Profile Tab */}
      <Tab.Screen
        name="Profile"
        component={getProfile()}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    borderTopWidth: 0,
    elevation: 5,
  },
  circleButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 60,
    height: 55,
    borderRadius: 35,
    backgroundColor: COLORS.ColorBrown,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  circleText: {
    color: 'white',
    fontSize: 10,
    marginTop: 2,
  },
});
