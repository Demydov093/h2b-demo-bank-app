import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Card from '@/src/sections/dasboard/_Card';
import Header from '@/src/sections/dasboard/_Header';
import Transactions from '@/src/sections/dasboard/_TransactionsList';
import { cardsData, transactionsData } from '@/utils';
import { useState } from 'react';

export default function Index() {
  const initialCardNumber = cardsData[1]?.cardNumber?.slice(-4) ?? '';
  const [activeCardNumber, setActiveCardNumber] = useState(initialCardNumber);

  return (
    <SafeAreaView className={`flex-1 bg-white ${Platform.OS === 'ios' ? 'pt-0' : 'pt-7'}`}>
      <StatusBar style="dark" />
      <Header />
      <Card activeCardNumber={activeCardNumber} setActiveCardNumber={setActiveCardNumber} />
      <Transactions activeCardNumber={activeCardNumber} transactionsData={transactionsData} />
      {/* <Link href={'/storybook'}>Storybook</Link> */}
    </SafeAreaView>
  );
}
