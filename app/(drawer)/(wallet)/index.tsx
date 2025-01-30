/* eslint-disable prettier/prettier */
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Text, View, TouchableOpacity} from 'react-native';


import ProfileScreen from '~/components/profile/Profile';
import WalletScreen from '~/components/wallet/WalletPage';
// import { HomePageUser } from '~/components/HomePageUser';

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex:1 }}>
      <Stack.Screen options={{ title: 'Afrigo', headerShown: false}} />
      <TouchableOpacity onPress={() => router.replace("/(drawer)/(profile)")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      <WalletScreen />
  
    </View>
  );
}
