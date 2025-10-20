import { Stack } from 'expo-router';
import Toast from 'react-native-toast-message';
import './globals.css';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="deposit/transaction" options={{ headerShown: false }} />
        <Stack.Screen name="deposit/success" options={{ headerShown: false }} />
      </Stack>
      <Toast />
    </>
  );
}
