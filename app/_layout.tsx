/* eslint-disable prettier/prettier */
import { AntDesign } from '@expo/vector-icons';
import { Stack, useRouter} from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// import { useNavigation } from '@react-navigation/native';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const router = useRouter(); 
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} /> */}
        <Stack.Screen
            name="(stores)"
            options={{
            headerShown: false,
            headerTitle: '', // Remove the title
            headerLeft: () => {
             // Use expo-router's navigation
              return (
                <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                  <AntDesign name="leftcircleo" size={20} color="black" />
                </TouchableOpacity>
              );
             }
             }}
/>
        <Stack.Screen name="(producer)"  options={{ headerShown: false  }} />
        <Stack.Screen name="(wallet)"  options={{ headerShown: false  }} />
        <Stack.Screen name="(profile)"  options={{ headerShown: false  }} />
        {/* <Stack.Screen name="(profile)"  options={{ headerShown: false  }} /> */}
      </Stack>
    </GestureHandlerRootView>
  );
}
