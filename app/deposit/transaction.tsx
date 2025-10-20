import { useRouter } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '@/src/components/Button';
import AmountInput from '@/src/sections/deposit/_AmountInput';
import CardSelector from '@/src/sections/deposit/_CardSelector';
import Header from '@/src/sections/deposit/_Header';
import { Card, DropdownItem } from '@/types';
import { cardsData } from '@/utils';

import { useDepositStore } from '@/src/store/depositeStore';
import { StatusBar } from 'expo-status-bar';

const TransferScreen: React.FC = () => {
  const router = useRouter();
  const setDeposit = useDepositStore((state) => state.setDeposit);

  const [amount, setAmount] = useState<string>('100');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('PLN');
  const [openCurrency, setOpenCurrency] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<string>(cardsData[0].id);
  const [loading, setLoading] = useState<boolean>(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const items: DropdownItem[] = useMemo(
    () =>
      cardsData.map((c) => ({
        label: `*** ${c.cardNumber.slice(-4)}`,
        value: c.id,
        cardNumber: c.cardNumber,
        gradientColors: c.gradientColors,
        textColor: c.textColor,
      })),
    [],
  );

  const selectedCardObj = useMemo<Card | undefined>(
    () => cardsData.find((c) => c.id === selectedCard),
    [selectedCard],
  );

  const handleDeposit = () => {
    if (!selectedCardObj) return;

    setLoading(true);
    setTimeout(() => {
      setDeposit(amount, selectedCurrency, selectedCardObj);
      setLoading(false);
      router.push('/deposit/success');
    }, 3000);
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', (e) => {
      setKeyboardHeight(e.endCoordinates.height);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'ios' ? 0 : 30,
      }}
      edges={['bottom', 'left', 'right']}
    >
      <StatusBar style="dark" backgroundColor="white" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, paddingHorizontal: 8 }}>
          <Header loading={loading} onBack={() => router.back()} />

          <AmountInput
            amount={amount}
            setAmount={setAmount}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
            openCurrency={openCurrency}
            setOpenCurrency={setOpenCurrency}
            loading={loading}
          />

          <CardSelector
            items={items}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            selectedCardObj={selectedCardObj}
            loading={loading}
          />

          {/* Sticky button */}
          <View
            className={`absolute left-2 right-2 ${
              keyboardHeight > 0 && Platform.OS === 'ios' ? 'bottom-15' : 'bottom-3'
            }`}
          >
            <Button
              text={loading ? '' : 'Deposit'}
              height={48}
              className="w-full flex-row items-center justify-center"
              onPress={handleDeposit}
              disabled={loading}
              loading={loading}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TransferScreen;
