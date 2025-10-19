import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Card from '@/src/sections/dasboard/_Card';
import Header from '@/src/sections/dasboard/_Header';
import Transactions from '@/src/sections/dasboard/_TransactionsList';

export default function Index() {
  return (
    <SafeAreaView className={`flex-1 bg-white ${Platform.OS === 'ios' ? 'pt-0' : 'pt-7'}`}>
      <StatusBar style="dark" />
      <Header />
      <Card />
      <Transactions />
      {/* <Link href={'/storybook'}>Storybook</Link> */}
    </SafeAreaView>
  );
}
