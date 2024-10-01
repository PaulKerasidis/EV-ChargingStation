import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'poppins': require('./../assets/fonts/Poppins-Regular.ttf'),
    'poppins-medium': require('./../assets/fonts/Poppins-Bold.ttf'),
    'poppins-bold': require('./../assets/fonts/Poppins-SemiBold.ttf'),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
