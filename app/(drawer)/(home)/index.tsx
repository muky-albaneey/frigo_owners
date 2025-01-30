import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import HomePageUser from '~/components/home/HomePageUser';
// import HomePageUsers from '~/components/ScreenContent';
// import { ScreenContent } from '~/components/HomePageUser';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />
      {/* <Container> */}
        <HomePageUser  />
      {/* </Container> */}
    </>
  );
}
