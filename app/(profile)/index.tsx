/* eslint-disable prettier/prettier */
import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
import ProducerDashboard from '~/components/home/producer/Dashboard';

// Import your screens
import ProfileScreen from '~/components/profile/Profile';
// import ProducerDashboard from '~/components/profile/ProducerDashboard'; // Assuming you have this component

const profile = 'owner'; // This can be dynamically set to 'dealer' or 'producer'

const getProfile = () => {
  switch (profile) {
    case 'producer':
      return ProducerDashboard;
    case 'owner':
      return ProfileScreen;
    case 'tailor':
      return ProfileScreen;
    default:
      return ProfileScreen;
  }
};

export default function Home() {
  const ProfileComponent = getProfile(); // Get the profile-based component

  return (
    <View style={{ flex: 1}}>
      <Stack.Screen options={{ title: 'Afrigo', headerShown: false }} />
      {/* Check that ProfileComponent is being rendered correctly */}
      <ProfileComponent /> 
    </View>
  );
}
